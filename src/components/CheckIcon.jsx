import { Icon } from "./Icon";
import '../index.css'

function CheckIcon({ completed, onComplete }) {
    return (
        <Icon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { CheckIcon }; 