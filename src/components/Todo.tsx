type TodoProps = {
  todo: { id: string, task: string, desc: string, isEditing: boolean }
  deleteTodo: (id: string) => void
  editTodo: (id: string) => void
  onClick: () => void
}

const Todo = ({ todo, deleteTodo, editTodo, onClick }: TodoProps) => {
  return (
    <div onClick={() => onClick()} className="flex justify-between items-center cursor-pointer border-2 my-1 p-2">
      <div>
        <h3>{todo.task}</h3>
        <p className="text-color-10">{todo.desc}</p>
      </div>
      <div className="flex items-center">
        <span onClick={() => editTodo(todo.id)} className="text-color-10 px-1">λ</span>
        <span onClick={() => deleteTodo(todo.id)} className="text-color-10 px-1">x</span>
      </div>
    </div>
  )
}

export default Todo
