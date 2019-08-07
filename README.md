# Reactive Programming

Textbook definition:

> declarative programming paradigm concerned with data streams and the propagation of change

Normally the expression `a = b + c` initializes the value of `a` with the intent that that value would be used later. Any changes to the values of the expression don't change the value of `a`.

Reactive programming concerns itself with what the value of `a` would become if either `b` or `c` were to change.

## Faux Reactive (Glorified PubSub)

We can build up to that slowly by using a little JavaScript trickery to create a Fauxservable class.

- Overview Fauxservable.js

### Overview of Fauxservable class

Properties of the object passed to the constructor are iterated over. Each property has a getter and setter defined on it. The setter emits an event that will eventually run all subscription functions for that property's keys.

With this approach we can create a faux reactive state where changes to property values can be observed and then reacted to.

- Run basic
- Run expression
- Run map

### Overview of Dependable class

Taking this a step further we can begin to construct dependency graphs for computed properties.

- Overview Dependable.js

This class constructor is much the same as Fauxservable but we're relying on the fact that properties of the data object have getters.

In the process of executing the function property the getters of the function property's dependencies are also executed. If a properties getter is being evaluated and that getter is not a function we keep track of the computed function's dependencies relative to itself.

This is a very naive way of keeping track of dependencies.

- Run computed

Now we no longer need to use the return value of the expression `b + c` and manually assign it to `a`. Anytime the value of the property `b` or `c` is changed the dependency getters will emit an event and the computed property `a` will be evaluted again.

If you're familiar with Vue... this is conceptually similar to how Vue manages watched and computed properties.

## Observerables and Streams of Data

https://cycle.js.org/streams.html

The Fauxservable class fits the bill of handling propagation of change, but what about asyncronous data streams?

### Define a few terms:

- Show timeline

Even if you still think of this as PubSub there are a lot of terms thrown around reactive programming that kind of muddy the waters.

Before talking about Observables it's important to clear those up.

An **event** is a value that occurs at a specific time

- A value could be anything: variable, a data structure, or mouse events

A **stream** is a sequence of events

- An array is made of items ordered by index
- A stream is made of events ordered by the event's time
- Streams could even be made up of other streams

An **observer** is a function used to **subscribe** to the stream.

An **observable** is the term of a stream under observation.

The process of listening to events on a stream is called **subscribing**.

We can actually use this example as a basis for an API of an observer object. Oddly enough this is very similar to the contract many libraries that implement Observables use. The contract could be as simple as three functions: event (or next for iterable lingo), error, and complete.

- Overview of classes/Stream.js

In this file I've created a Stream module that expects an observer object that fits this contract. The `from` function takes a variable number of arguments, iterates over them, and calls the observer's next function. If it encounters an error it calls the observer's error function. When it's done with the iteration it calls the observer's complete function.

- Run stream.js

This can be taken a step further as the basis of an Observerable's subscribe handler.

- Overview of classes/Observable.js

In this Observable class I've created a static `from` method that behaves much the same as our standalone function. It returns a new Observable and iterates similarly.

Using this as the basic layout for the rest of our Observable methods we are able to create a chainable API. Allowing for any number of behaviors. Here I've implemented two basic methods: map and filter. Both return new Observables, but they also call the Observable's subscribe method wrapped around calls to the original observer's methods of next, error, and complete.

- Run observable.js

Keep in mind this is pretty rudimentary. But we can use it to do something besides manipulate integers.

- Show streams/demo

There are two prominent libraries for managing Observables and creating reactive functionality. The first is Zen Observables which is partially responsible for inspiring the Observable class I used here. The other is RxJs which a JavaScript implementation of ReactiveX and supplies a number of high order reactive programming utilities.

## Zen Observables

https://github.com/zenparsing/zen-observable

## ReactiveX (RxJs)

https://rxmarbles.com/#merge

https://rxviz.com/examples/input-element
https://rxviz.com/examples/mouse-move

## Svelte

https://svelte.dev/

https://mobbing.netlify.com/

https://github.com/deldreth/mobbing-svelte

### Overview

Svelte presents itself as a reactive front end component framework. In fact, it's actually quite a bit more. Largely a compiler built around a small superset of ES2015. It uses a unique label-like syntax to create reactive statements and closures.

```
$: disabled
```

Syntax instructs the compiler to create a reactive entity. Meaning that anytime any of the expression's dependencies change `disabled` will be re-evaluated.

https://github.com/deldreth/mobbing-svelte/blob/master/src/components/Start.svelte#L12

Svelte implements an object called a store. Conceptually they're similar to a redux store but they're reactive citizens within Svelte. There are writable, readable, and derived stores and much like an Observable they implement a subscribe method.

In this case the prefix of `$` before teams is instructing the compiler that the value of the store `teams` should be evaluated. The `teams` store is an array. Anytime the `teams` store changes the `#each` block will be re-evaluated.

https://github.com/deldreth/mobbing-svelte/blob/master/src/components/Teams/Teams.svelte#L16

https://svelte.dev/examples#reactive-declarations

https://svelte.dev/examples#reactive-statements

## Useful Links/Inspiration

https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
