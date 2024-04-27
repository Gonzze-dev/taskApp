import './ButtonGreen.css'
import { CSSProperties } from 'react'


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string | number
    height?: string | number
}

function ButtonGreen({width, 
                      height, 
                        children, 
                        ...props}: Props) {

    const style: CSSProperties =
    {
        width: width ? ` ${width}px` : '375px',
        height: height ? `${height}px` : '63px'
    }

    return (
        <button className='ButtonGreen'
        style={style}
        {...props}>
            {children}
        </button>
    )
}

export default ButtonGreen