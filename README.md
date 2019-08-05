# Reactive Programming

Textbook definition:

> declarative programming paradigm concerned with data streams and the propagation of change

Normally the expression `a = b + c` has initialized the value of `a` with the intent that that value would be used later. Any changes to the values of the expression don't change the value of `a`.

Reactive programming concerns itself with what the value of `a` would become if either `b` or `c` were to change.

https://cycle.js.org/streams.html

## Faux Reactive (Glorified PubSub)

### Overview of Fauxservable class

Properties of the object passed to the constructor are iterated over. Each property has a getter and setter defined on it. The setter emits an event that will eventually run all subscription functions for that properties keys.

With this approach we can create a faux reactive state where changes to property values can be observed and then reacted to.

- Run basic
- Run expression
- Run map

Overview of Dependable class

This class constructor is much the same as Fauxservable but we're relying on the fact that properties of the data object have getters.

## Streams of Data

## Zen Observables

## ReactiveX (RxJs)

## Svelte
