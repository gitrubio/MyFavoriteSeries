import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Row , Card, Col} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Row gutter={[16, 16]} wrap >
    <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
    <Card hoverable style={{width : 400, height: 400}}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    />
    </Col>
    </Row>
  )
}

export default App
