import { CSSProperties } from 'react'
import './InputMultiLine.css'
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> 
{
    width?: string | number
    height?: string | number
}

function InputMultiLine({width, 
                        height, 
                        ...props}: Props) {

    const style: CSSProperties =
    {
        width: width ? ` ${width}px` : '200px',
        height: height ? `${height}px` : '40px'
    }

    return (
        <textarea
            style={style}
            {...props}
        />
    )
}

export default InputMultiLine