import clsx from 'clsx'
import style from './Heading.module.css'
import { useState } from 'react'


// Bai thuc hanh su dung css module va thu vien clsx
function Heading() {

    const [showBtn, setShowBtn] = useState(true)

    const changeColor = () => {
        setShowBtn(!showBtn)
    }

    return(
        <div>
            <button 
                className={clsx("btn", {
                    "btn-outline-success": showBtn,
                    "btn-outline-danger": !showBtn
                })}
                onClick={changeColor}
            
            >Change Color</button>



            <h1 className={clsx(style.heading, {
                [style.smallSize]: showBtn,
            })}>Em Chao anh Thinh</h1>

        </div>
    )
}

export default Heading