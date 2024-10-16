import { Icon } from "./Icon";
import '../index.css'

function DeleteIcon({ onDelete }) {
    return (
        <Icon 
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export { DeleteIcon };