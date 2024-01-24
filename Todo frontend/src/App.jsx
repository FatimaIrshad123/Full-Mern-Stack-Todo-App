import { RecoilRoot } from 'recoil'
import Todo from './components/Todo'

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>
    </div>
  )
}

export default App
