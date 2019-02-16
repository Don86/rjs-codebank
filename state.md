# State

* `state` is data that a component takes care of. The component can change the value of its `state`.
* Contrast `props`, which are immutable. i.e., you can't do the following:

```
this.props.something = "some-new-value"
```

* You can pass `state` from a parent to a child
* State creation syntax example (no state changes):

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

## Changing State

* Changing state: it's like clothing. When you change clothing, you don't repaint your current clothes. You take off whatever you're wearing, and put on something new. Put the state changing function into `this.setState()`. Full example:
* The `setState()` method enqueues changes to the component state to tell React that this component and its children need to be re-rendered.
* Binding: this allows the class to access the method to which it is being bound. i.e. so that you can do this: `<button onClick={this.handleClick}>...`
* The scrimba guy admits that this rather circuitous way of handling state is quite the cause for debate within React.

### Example 1. Add one every time a button is clicked
```
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // bind the handleClick method
        // See notes on binding below
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Add 1!</button>
            </div>
        )
    }
}
```

### Example 2
A button that logs in/out if the user is logged out/in (respectively) (`import` and `export` statements ommitted). `App.js`:

```
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {    
        return (
            <div>
                {this.state.isLoggedIn ? <h1>You are now logged in.</h1> : <h1>You are now logged out.</h1>}
                <button onClick={this.handleClick}>{this.state.isLoggedIn ? <h3>LOG OUT</h3> : <h3>LOG IN</h3>}</button>
            </div>
        )
    }
}
```
