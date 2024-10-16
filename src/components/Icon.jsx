import {CheckSVG} from '../assets/icons/CheckSVG'
import {DeleteSVG} from '../assets/icons/DeleteSVG'
import '../index.css'


const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg'fill={color}/>,
}


const Icon = ({ type, color, onClick }) => {
  return (
    <span
    className={`Icon-container Icon-container-${type} `}
    onClick={onClick}
    >
      {iconTypes[type](color)}
        
    </span>
  )
}
export {Icon};