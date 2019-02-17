# Functional Components

Def: The 3 representations all do the same thing

```
// ===== vanilla definition =====
function Hello(props) {
    return (<div>Hello {props.name} </div>)
}

// ===== ES6 syntax =====
const Hello = ({name}) => <div>Hello {name} </div>

// ===== As a class =====
class Hello extends React.Component {
    render() {
        return (<div>Hello {props.name} </div>)
    }
}
```

* Can use props as inputs (as shown), and returns JSX.
* Lacks *state and lifecycle methods*
* Much simpler than class components, but that's why you should use them (more restricted use cases, less need for aggressive testing, etc.)
* As a rule, if a class component only has a `render()` method, make it a functional component.
