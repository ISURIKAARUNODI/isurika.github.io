import React from 'react'
import {shinyStyle} from "../config.js";

const ShinyEffect = ({left, right, top, size = 500}) => {

    const positionStyles = {
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex: -1
    }

    if (left !== undefined) {
        positionStyles.left = `${left}px`
    }

    if (right !== undefined) {
        positionStyles.right = `${right}px`
    }

    const st = shinyStyle
    //merge styles
    Object.assign(st, positionStyles)

    console.log(st)


  return (
    <div style={st}></div>
  )
}

export default ShinyEffect