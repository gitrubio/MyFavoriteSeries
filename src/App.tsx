import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Row , Card} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Row>
      <Card hoverable style={{width : 500, height: 500}}>

      </Card>
    </Row>
  )
}

export default App
