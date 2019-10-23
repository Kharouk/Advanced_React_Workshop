# React Advanced workshop with Kitze

## Check out the work that was done here: https://bestworkshoptoday.surge.sh


## Notes from the class:

# Advanced React with Kitze
## Intro to the Workshop
- You don’t need to add a constructor function to class components
	- You can just assign `state` as a property rather than be called in constructor with `this.state`
- Setting a function as a property (arrow function) rather than a method allows us to correctly bind `this` to the class rather than the function and helps us avoid using binding in the constructor function
- state is the only thing that persists after re-renders. Without state you lose the value between renders.
- [Testing React Hooks](https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-my-tests/)
- Ryan Florence -> Hooks Conditional
	- You can’t use conditionals with hooks
		- It relies on the order and the number of hooks that you have and if in a re-render one goes missing/appears, it will complain.
- On custom hooks, we can return an object: `{counter, increase, decrease}` which then allows us to destructure them in another component:
```jsx
const useCounter = (initialState = 0) => {
	const [count, setCount] = useState(initialState);
	const decrease = () = {...}
  	const increase = () = {...}

	return {count, decrease, increase}
}

const App = () => {
	...
	const {counter, increase, decrease} = useCounter(5)
}
```
	- [GitHub - kitze/react-hanger: A collection of useful React hooks](https://github.com/kitze/react-hanger)
	- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
- Don’t have to necessarily test independent hooks, rather test a component that uses hooks and check the output.
	- *NOTE it is not recommended to test single-use custom hooks in isolation from the components where it’s being used. It’s better to test the component that’s using the hook rather than the hook itself.*
		- Kent C Dodds
- React ecosystem started using classes due to the ES6 benefits and how it could extend from React.Component, however many people began to extend components from each other, using OOP techniques and bugs that appear with it which is completely not what React is going for, so they decided to create hooks to simplify and go back to just using functions.
- Using object in `useState` hook is only wise when you have state items that update together

## useCallback()
- `const increase = useCallback(() => setCounter(counter + 1), [])`
	- The setCounter is called only on the first render.
	- Optimised the function to be declared only once.
		- To have it continue past just one click you have to change to:
			- `const increase = useCallback(() => setCounter(counter =>counter + 1), [counter])`
				- any time something changes inside the array, the increase will be re-declared.
				- Used mostly to optimise and prevent unnecessary re-renders.
- [Hooks API Reference – React](https://reactjs.org/docs/hooks-reference.html#usecallback) <- link to useCallbacks


- We can return essentially anything from a hook, but it’s particularly useful to return ready-made components.
- When you need to set state to multiple different items, it’s better to bundle:
```js
const [state, setState] = useState({
	loading: true,
	data: null,
	err: null
})

const fetchUsers = () => {
	setState({...})
}
```

## useEffect()
- When dealing with side effects such as updating document title or when dealing with matters akin to lifecycle methods.
- you pass the value you want to watch in the array, so whenever that updates, it will run the effect.
- It’s similar to componentDidMount when you have an empty array, and similar to componentDidUpdate when you have a value you are watching
- You can return something to make something happen on unmount. If you don’t return anything, it has nothing to clean up. So if you have an effect where you set interval to tick ever second, you can return a function where you clear the interval which will run on unmount.
- now you should be thinking about the lifecycle of an effect, rather than a component. With data fetching you can essentially make the request, clear it, and also monitor on a variable change so that it cancels any existing request and then make a new request.
- Common theme with effects is that you have state and the effect working together, and you have something happen when it mounts, something to clean up or remove, something to track, and something to return possibly from the state.
- has to return null or a clean up function

## Context
- Naming the variable with Context: `const ThemeContext = createContext({…})`
	- Returns a Consumer component and the Provider components
	- Can use `useContext` in other functional components. Whenever something changes in Context we get a re-render
		- A hook
	- If you’re using a provider you must pass in a value.
	-  In order to make Context dynamic, you must `useState`
	- Don’t need to use Context.Consumer at all if you’re using hooks and/or functions
	- if using a class you would use a static variable to connect it to a context provider.
	- Kitze -> State Management in the GraphQL era. Data fetching and REST APIs that continually talk to each other can be terrible to manage
		- thinks MobX is a better solution
		- Solution to data management is GraphQL
			- Also use Context for the smaller things.
## Compound & Controlled Components
- Err...

## Suspense
- You can only use suspense for lazy loading components.
- You use `lazy()` to import the component.
- You add suspense and also add a fallback (Loading…)
- For now, it’s just used to wrap lazy loaded components 😥

## Ref
- `useRef` hook helps us store information without triggering another re-render
- So we can instantiate with null:
```jsx
let [counter, setCounter] = useState(0);
let value = useRef(null);

useEffect(() => {
  value.current = counter;
});

setCounter(counter + 1); // 1
console.log(value); // 0
setCounter(counter + 1); // 2
console.log(value); // 1

```
