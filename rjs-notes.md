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
