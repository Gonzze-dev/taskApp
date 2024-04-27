import { CSSProperties } from 'react'

import './Input.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({width, 
                height, 
                ...props}: Props) {

    const style: CSSProperties =
    {
        width: width ? ` ${width}px` : '200px',
        height: height ? `${height}px` : '40px'
    }

    return (
        <input
            style={style}
            {...props}
        />
    )
}

export default Input