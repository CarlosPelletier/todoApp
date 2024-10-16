import { TodoProvider } from "./components/Context";
import { AppUI } from './AppUI'
import './App.css'

function App() {

  return (
    <>
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    </>
  )
}

export default App
