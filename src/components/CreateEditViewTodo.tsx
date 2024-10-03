import { useState } from "react"

type CreateEditViewTodoProps =
  | {
    action: "create"
    func: (task: string, desc: string) => void
    setIsVisible: (arg0: boolean) => void
  } | {
    action: "edit"
    todo: { id: string, task: string, desc: string, isEditing: boolean }
    setSelectedTodo: (arg0: null) => void
    func: (task: string, desc: string, id: string) => void
    editable: (id: string) => void
    setIsVisible: (arg0: boolean) => void
  } | {
    action: "view"
    todo: { id: string, task: string, desc: string, isEditing: boolean }
    setSelectedTodo: (arg0: null) => void
    setIsVisible: (arg0: boolean) => void
  }

const CreateEditViewTodo = (props: CreateEditViewTodoProps) => {
  const [task, setTask] = useState(props.action === "create" ? '' : props.todo.task)
  const [desc, setDesc] = useState(props.action === "create" ? '' : props.todo.desc)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (props.action === "create") {
      props.func(task, desc);
    } else if (props.action === "edit") {
      props.func(task, desc, props.todo.id);
    }
    handleClickOutside()
  }

  const handleClickOutside = () => {
    props.setIsVisible(false)
    if (props.action === "edit") {
      props.editable(props.todo.id)
    }
    if (props.action !== "create") {
      props.setSelectedTodo(null)
      console.log(props.todo.task, props.todo.isEditing)
    }
    setTask('')
    setDesc('')
  }

  return (
    <div onClick={handleClickOutside} className="absolute top-0 left-0 w-full h-full bg-black/40">
      <div onClick={e => e.stopPropagation()} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-color-5 p-4 rounded-lg shadow-xl w-[500px] max-h-96">
        <form onSubmit={handleSubmit}>
          <div>
            <label><b>Todo</b></label>
            <input
              type="text"
              onChange={e => setTask(e.target.value)}
              value={task}
              className="outline-none bg-transparent text-color-10 border-2 border-color-5 mr-2 px-1 w-full"
              placeholder="Add a new todo..."
              disabled={props.action === "view"}
            />
          </div>

          <div className="mt-4 max-h-[300px]">
            <label><b>Description</b></label>
            <textarea
              onChange={e => setDesc(e.target.value)}
              value={desc}
              className="outline-none bg-transparent text-color-10 border-2 border-color-5 mr-2 px-1 w-full max-h-40"
              placeholder="Add a description..."
              disabled={props.action === "view"}
            />
          </div>

          <div className="flex flex-row-reverse mt-4">
            {props.action !== "view" && (
              <button type="submit" className="bg-color-5 text-foreground px-4 py-1 rounded-lg ml-4">
                {props.action === "create" ? "Add" : "Update"}
              </button>
            )}
            <button onClick={handleClickOutside} className="bg-color-5 text-foreground px-4 py-1 rounded-lg">
              {props.action === "view" ? "Close" : "Cancel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEditViewTodo
