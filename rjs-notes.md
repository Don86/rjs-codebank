## Class declaration syntax

```
class App extends React.Component{
    render(props) {
        return (
            <div>
                <h1>Code goes here</h1>
                <p>Passing props: {this.props.whatever}<p>
            </div>
            )
    }
}
```

* The `render () {}` method is required if `App` is declared as a class (as opposed to a functional component). I'm not sure if the `constructor(){}` is required for passing props. It's definitely required for passing state; so maybe always define it anyway?
* When passing `props` to a class component, you'll have to use `this.props.whatever`. 

## Conditional Rendering

### Ternary Operators

Shortcut for an if-else block. Syntax:
```
condition? expr_if_true : expr_if_false
```

e.g. these two do the same thing. As an if-else block:
```
var age = 15;
if (age >= 18) {
    console.log("You are an adult");
} else{
    console.log("You are a kid")
}
```
As a ternary operator:
```
console.log((age>= 18) ? "you are an adult": "you are a kid")
```


## State

* `state` is data that a component takes care of. The component can change the value of its `state`.
* Contrast `props`, which are immutable. i.e., you can't do the following:

```
this.props.something = "some-new-value"
```

State syntax example:

```
import React from "react"

class App extend React.Component {
    // def constructor
    constructor() {
        // call to parent class to inherit
        super()
        // instantiate state
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
            )

    }

}
```

* You can pass `state` from a parent to a child
