import { useResetableState } from '..';
import { renderHook, act, HookResult } from '@testing-library/react-hooks';
import { SetStateAction } from 'react';

describe('useResetableState', () => {
    it('should return the initial state', () => {
        const {result: {current: [state]}} = renderHook(() => useResetableState(0));

        expect(state).toBe(0);
    });

    it('should reset the state', () => {
        const {result} = renderHook(() => useResetableState(0));

        const [, resetState, setState] = result.current;

        expect(getCurrentState(result)).toBe(0);

        act(() => {
            setState(1);
        });

        expect(getCurrentState(result)).toBe(1);

        act(() => {
            resetState();
        });

        expect(getCurrentState(result)).toBe(0);
    });

    const getCurrentState = (result: HookResult<[number, () => void, React.Dispatch<SetStateAction<number>>]>) => {
        return result.current[0];
    }
});