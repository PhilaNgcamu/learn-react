<h1>Responding to Events</h1>

- React lets you add event handlers. What are event handlers? These are methods that triggered in response to clicking, hovering and so on. Reference: [respondingToEvents.jsx](respondingToEvents.jsx).

- When methods in React like event handlers are defined in components, they can access the component's props. Reference: [respondingToEvents.jsx](respondingToEvents.jsx).

- NOTE: Use `event.stopPropagation()` to prevent the event reaching the parent components and use `event.preventDefault()` to prevent the default behaviour of the browser!
