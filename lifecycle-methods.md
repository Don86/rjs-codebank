# Lifecycle Methods

DEF: Methods that can be executed at particular times.

### The Lifecycle of a React Component

1. **Mount** - React instantiates a component and inserts it into the DOM
2. **Update** - If props or state are changed, an update of the component is performed. This means that the component has to be re-rendered.
3. **Unmount** - When a component is removed from the DOM.

### List

* `componentWillMount`: procs right before initial rendering
* `componentDidMount`: procs immediately after initial rendering
* `componentWillReceiveProps`: Procs right before receiving props.
* `shouldComponentUpdate`: procs before rendering, after receiving new props or state. You can return false to prevent rendering.
* `componentWillUpdate`: procs before rendering, after receiving new props or state. Seems very similar to `shouldComponentUpdate`.
* `componentDidUpdate`: after component's update are flushed to DOM

### Examples

```
componentDidMount() {

}

getSnapshotBeforeUpdate() {
    // Create a backup of the current way things are
    // before updating
    // not a commonly used LC method
}

shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false otherwise
    // prevents updates to unchanged values
}

componentWillUnmount() {
    // teardown or cleanup code before component disappears
    // e.g. remove event listeners
}
```

## Example with `componentDidMount()`

```
import React from "react"

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            is.Loading: true
        }
    }

    componentDidMount() {
        // Set isLoading boolean to 'false' after 1.5s
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <h1>Cool stuff</h1>}
            </div>
        )
    }
}
```
