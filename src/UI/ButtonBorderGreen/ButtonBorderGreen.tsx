import './ButtonBorderGreen.css'
import { CSSProperties } from 'react'


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string | number
    height?: string | number
    moreStyle?: CSSProperties
}

function ButtonBorderGreen({width, 
                            height,
                            moreStyle, 
                              children, 
                              ...props}: Props) {

  const style: CSSProperties =
  {
      width: width ? ` ${width}px` : '375px',
      height: height ? `${height}px` : '63px',
      ...moreStyle
  }

  return (
        <button className='ButtonBorderGreen'
        style={style}
        {...props}>
            {children}
        </button>
  )
}

export default ButtonBorderGreen