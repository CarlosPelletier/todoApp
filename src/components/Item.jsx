import { CheckIcon } from './CheckIcon'
import { DeleteIcon } from './DeleteIcon'
import '../index.css'


function Item({completed, text, onComplete, onDelete} ) {


    return(
      <li className="Item">

          <CheckIcon 
            completed={completed}
            onComplete={onComplete}
          />
          
        <p 
          className={`Item-p ${completed && 'Item-p--complete'}`}
          >{text}
        </p>

        <DeleteIcon 
          onDelete={onDelete}
        />
      </li>
    )
  }

  export { Item };