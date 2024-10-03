import { useState } from "react"

import Time from "./components/Time"
import Tree from "./components/Tree"
import TodoModal from "./components/TodoModal"

const App = () => {
  const [isTodoModalVisible, setIsTodoModalVisible] = useState(false)

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between text-color-5">
          <div>
            ~
            <span className="text-color-10 px-1">
              λ
            </span>
            tree
          </div>
          <Time />
        </div>
        <Tree />
      </div>
      {isTodoModalVisible && <TodoModal setIsVisible={setIsTodoModalVisible} />}
      <div onClick={() => setIsTodoModalVisible(!isTodoModalVisible)} className="bg-foreground text-color-7 shadow-xl w-12 h-12 rounded-full absolute right-4 bottom-4">
      </div>
    </>
  )
}

export default App
