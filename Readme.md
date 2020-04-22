## This repository is deprecated! Use https://github.com/YannickFricke/react-resettable-state instead for further updates!

# React resetable state

## About the project

Do you ever was in the situation where you want to reset your React.js state?

This project got you covered!

## How to use?

Now you want to see this small package in action? No problem!

1. Install the package:

- npm: `npm i react-resetable-state`
- yarn: `yarn add react-resetable-state`

2. Import the package

```js
const { useResetableState } = require('react-resetable-state');
```

3. Use the package

```jsx
const App = () => {
    const [counter, resetCounter, setCounter] = useResetableState(0);

    return <div>
        <div>Counter: {counter}</div>
        <button onClick={() => setCounter(currentCount => currentCount + 1)}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
    </div>;
};
```

## Examples

Here are some examples which are written in TypeScript.
If you want to use JavaScript instead, look in the section above.

- [Counter](https://codesandbox.io/s/react-resetable-state-counter-example-knun5?file=/src/App.tsx)
- [Form data](https://codesandbox.io/s/react-resetable-state-form-example-sk1dw)

## Typings?

Since this package is written in TypeScript it also ships with type definitions!

It doesn't matter if you are using JavaScript or TypeScript directly, any good IDE will show the type hints for this custom hook.
