import { useDispatch } from 'react-redux';
import { toggleTodoComplete, deleteTodo } from '../store/todoSlice';

const TodoItems = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{title}</span>
      <span className='delete' onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItems;
