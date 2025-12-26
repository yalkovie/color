import { useEffect, useState, useRef } from 'react'
import './ChangerColor.css'

function ChangerColor({name_color, ChColor}) {

    const [color_value, color_valueset] = useState(0)
    let nameColor = useRef(name_color)

    function addEvent(event) {
        color_valueset(+event.target.value)
        ChColor(nameColor.current, color_value)
    }

    return (
    <div>
        <input type="range" id="range" min={0} max={255} value={color_value} step={1} onChange={addEvent} style={{accentColor: {name_color}}}/>
        <label htmlFor="range">{name_color}: {color_value}</label>
    </div>
    )
}

export default ChangerColor