import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Todo from "./Todo"
import CreateEditViewTodo from "./CreateEditViewTodo"

type TodoModalProps = {
  setIsVisible: (arg0: boolean) => void
}

type Todo = {
  id: string
  task: string
  desc: string
  isEditing: boolean
}

const TodoModal = ({ setIsVisible }: TodoModalProps) => {
  const [isSubModalVisible, setIsSubModalVisible] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (task: string, desc: string) => {
    setTodos([...todos, { id: uuidv4(), task, desc, isEditing: false }]);
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editable = (id: string) => {
    setIsSubModalVisible(!isSubModalVisible)
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }

  const editTodo = (task: string, desc: string, id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, desc, isEditing: !todo.isEditing } : todo))
  }

  const handleTodoClick = (todo: Todo) => {
    setSelectedTodo(todo)
    setIsSubModalVisible(true)
  }

  const handleTodoAdd = () => {
    setSelectedTodo(null)
    console.log("Add new todo")
    setIsSubModalVisible(!isSubModalVisible)
  }

  const handleClickOutside = () => {
    setIsVisible(false)
  }

  return (
    <div onClick={handleClickOutside} className="absolute top-0 w-full h-full bg-black/40">
      <div onClick={e => e.stopPropagation()} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-color-5 p-4 rounded-lg shadow-xl w-2/5">
        <h1 className="mb-2"><b>Todo List</b></h1>
        {todos.map((todo, idx) => (
          <div key={idx}>
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editable}
              onClick={() => handleTodoClick(todo)}
            />
          </div>
        ))}

        {isSubModalVisible && (
          selectedTodo ? (
            selectedTodo.isEditing ? (
              <CreateEditViewTodo
                action="edit"
                todo={selectedTodo}
                func={editTodo}
                setSelectedTodo={setSelectedTodo}
                editable={editable}
                setIsVisible={setIsSubModalVisible}
              />
            ) : (
              <CreateEditViewTodo
                action="view"
                todo={selectedTodo}
                setSelectedTodo={setSelectedTodo}
                setIsVisible={setIsSubModalVisible}
              />
            )
          ) : (
            <CreateEditViewTodo
              action="create"
              func={createTodo}
              setIsVisible={setIsSubModalVisible}
            />
          )
        )}

        <div className="flex flex-row-reverse right-4 bottom-4 mt-4">
          <button
            onClick={handleTodoAdd}
            className="bg-color-5 text-foreground w-9 h-9 rounded-full right-4 bottom-4"
          />
        </div>
      </div>
    </div>
  )
}

export default TodoModal
