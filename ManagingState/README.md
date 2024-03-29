<h1>Reacting to Input with State</h1>

- React uses a declarative way to manipulate the UI instead of manipulating the UI with different pieces. For example, a form has a submit button that is disabled when there's no text. So, using pure JavaScript, you should make a _command_/line of code responsible for that UI. If the form gets to complex, it will be not wise to focus on have many lines of code because it would be buggy.

- Therefore, React was built to solve the above problem. For example, you declare what you want to show. You don't have to think if the button is enabled or disabled, etc.

<h2>Thinking about UI declaratively</h2>

- Reference: [inputWithState.js](inputWithState.js).

1. **Identify** your component's different visual states
   - First, visualize all the different "states" of the UI the user might see. For example:
   - Empty: Form has disabled "Submit" button.
   - Typing: Form has an enabled "Submit" button.
   - Submitting: Form is completely disabled. Spinner is shown.
   - Success: "Thank you" message is shown instead of a form.
   - Error: Same as Typing state, but with an extra error message.
   - Note: If a component has a lot of visual states, it is convenient to show whem all in one page.
2. **Determine** what triggers those state changes.
   - You must set state variables to update the UI. For example, changing the "empty" state to a typing state, etc. You need event handlers.
   - You may draw a flow chart of different states to visualize how the component should display for every possible logic.
3. **Represent** the state in memory using `useState`.
   - You need to represent the visual states of the component with use `useState`.
   - Simplicity is key: Each piece of state is a moving "moving piece". You want few moving pieces as possible. For example, use, `const [answer, setAnswer] = useState('')`, etc. So, represent all possible visual states with `useState`.
4. **Remove** any non-essential state variables.
   - The goal is to prevent the cases where the state in memmory doesn't represent any valid UI that you'd want a user to see. That way you can eliminate impossible states.
5. **Connect** the event handlers to set the state.

<h1>Choosing the State Structure</h1>

- It is important to structure the state well in the component, which makes it easier to debug and modify otherwise it will be the constant source of bugs.

<h2>Principles for structuring state</h2>

The goal: To make the state easy to update without any mistakes.

1.  **Group related state** - merge states into a single state variable if your always updating two or more states at the same time. For example: Choose this: `const [position, setPosition] = useState({ x: 0, y: 0 });`, instead of:

```
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```

2.  **Avoid contradictions in state** - Avoid some pieces of a state that contradict each other. For example, choose:

```
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');
```

Instead of:

```
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
```

Where you may combine two contradicting states into one process which is the state of the status.

3. **Avoid duplication in state** - When data is duplicated btween state variables or within nested objects, it is difficult to keep them in sync. So always, reference them from the same variables or ohjects.

4. **Avoid redundant state** - You should not put a calculated state from other exisiting states or a component's prop in another state during rendering. For example: Choose:

```
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + ' ' + lastName;
```

Instead of:

```
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
```

5. **Avoid deeply nested state** - Prefer to structure a state in a flat way.

<h2>Extracting State Logic into a Reducer</h2>

- You can consolidate all the state update logic outside the component in a single function when the complexity grows.

- How to migrate from `useState` to `useReducer`:
  1. Move from setting state to dispatching actions.
  2. Write a reducer function.
  3. Use the reducer from your component.
