import { useEffect, useState, useRef } from 'react'
import './App.css'
import ChangerColor from './components/ChangerColor/ChangerColor'

function App() {

  const [allcolor, setallcolor] = useState({'R': 0, 'G': 0, 'B': 0})
  const [list, setList] = useState([]);
  useEffect(fetch_func, [])

  function fetch_func () {
    fetch('./color/public/colors.json').then(a => a.json()).then(a => setList(a))
  }

  function handlechangecolor(name_color, color_value) {
    let key = name_color[0]
    let value = color_value
    let new_color = {...allcolor}
    new_color[key] = value
    setallcolor(new_color)
  }

  function searchName() {
    let name = ''
    list.current.forEach(el => {
      let rgb = list.current[el]
      if (rgb[0] == allcolor['R'] && rgb[1] == allcolor['G'] && rgb[2] == allcolor['B']) {
        name = rgb
      }

      return name
      
    });
  }
  
  return (
    <>
    <main>
      <input type="text" readOnly={true} id='result' value={allcolor['R'] + ', ' + allcolor['G'] + ', ' + allcolor['B']}/>
      <div id='representation-box' style={{background: `rgb(${allcolor['R']}, ${allcolor['G']}, ${allcolor['B']})`}}>{searchName()}</div>
      <ChangerColor name_color={'Red'} ChColor={handlechangecolor}/>
      <ChangerColor name_color={'Green'} ChColor={handlechangecolor}/>
      <ChangerColor name_color={'Blue'} ChColor={handlechangecolor}/>
    </main>
    </>
  )
}

export default App
