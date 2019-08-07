# Observables!

## Terms

**event** a value that occurs at a specific time.

**stream** a sequence of events

**observer** function used to **subscribe** to a **stream**

**observable** is a **stream** under observation

## Timeline

Common observable notation

```
--a---b-c---d---X---|->
```

`a, b, c, d` represents emitted events

`X` represents an error

`|` "completed" signal

`--->` sequence of events (timeline)
