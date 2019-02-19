# Props

* Props are the attributes in html elements. Some are predefined according to the prop, (e.g. onClick, href...). I think you can make up your own arbitrary props.

## Example 1.
Passing props to child components. In this example, `App.js` renders four `ContactCard` components (kitty contact cards). The prop props are `name`, `imgUrl`, `phone`, and `email`

### `ContactCard.js`
```
import React from "react"

function ContactCard(props){
    return (<div>
        <img src={props.imgUrl}/>
        <h3>{props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
    </div>)
}

export default ContactCard
```
### `App.js`
```
import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div>
        <ContactCard
            name="Mr. Whiskerson"
            imgUrl="http://placekitten.com/300/200"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <ContactCard
            name="Fluffykins"
            imgUrl="http://placekitten.com/400/200"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <ContactCard
            name="Destroyer"
            imgUrl="http://placekitten.com/400/300"
            phone="(212) 555-3456"
            email="ofworlds@yahoo.com"
        />
        <ContactCard
            name="Felix"
            imgUrl="http://placekitten.com/200/100"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        </div>
    )
}

export default App
```
