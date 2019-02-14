# Scrimba example:

These are the contents of an `index.js` file. By right, each class should have its own file, but everything is shoved into one here for easy access. The file system should be:

* `index.js` has a `ReactDOM.render(<App />, ...)` call to render `App.js`
* `App.js` renders `Header.js` and `Greeting.js` components
* `Header.js` and `Greeting.js` are the bottom-level components.

```
import React from "react"
import ReactDOM from "react-dom"

// Would be in App.js
class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <Greeting />
            </div>
        )
    }
}

// Bottom-level component, rendered by App.js
class Header extends React.Component {
    constructor() {
        super()
        this.state={
            username:"leila"
        }
    }

    render(state) {
        return (
            <header>
                <p>Welcome, {this.state.username}!</p>
            </header>
        )
    }
}

// Bottom-level component, rendered by App.js
class Greeting extends React.Component {
    constructor(){
        super()
    }

    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))
```
