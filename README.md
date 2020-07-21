# Vue.js

![vue logo](img/vueJS.png)

Is a progressive javascript framework, is a framework for build user interfaces, is approachable, versatile, performant, maintainable and testable

## To use vue in a project

In the body of the index.html add

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

---

## Properties

### Declarative rendering

Use **two way data binding** fot synchronize the view and the state of the application

### Directives

Is a tool of vue that allows handle the dom of declarative form, that is to say, use tags inside the html elements to define behaviors.  
To use directives, you must put v-bind: before each attribute of the tag

### Data

Is a function that return an object

### Methods

Instance of view that allows define functions principally for the events

### Computed

Are functions that ever return a value, use computed properties (properties that are calculated in real time based in another properties)

### Watch

Are functions that execute a piece of code, the name of the function must correspond with the name of a property of data

### Modifiers

The modifiers execute code before an event. (v-on: or @)

### Component

Components are functions that allow register a new component, its allows create a new component for use all methods inside this component

```js
Vue.compnent("NAME_COMPONENT", {
  /*CODE*/
});
```

![](img/cheat-sheet.png)

## Life cycle hooks

Vue allows use the methods of the lifecycle of the components that refer at the cycles of the components:

- beforeCreated
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

---
