import { useState } from "react"
const Map = () => {

    const [names, setNames] = useState([
        "leon",
        "christian",
        "tracy",
        "joe",
        "dan"
    ])

    return (
        <div>
            <h1>i'm the Map component</h1>
            {names.map((name, i) => {
                return <Person key={i} name={name} />
            })}
        </div>
    )
}

const Person = (props) => {
    return <h2>{props.name}</h2>
}

export default Map