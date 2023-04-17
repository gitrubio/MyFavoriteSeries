import { useState } from "react";
import { Row, Card, Col } from "antd";
import strangetThings from './assets/strangerFont.jpg'
import eleven from "./assets/eleven.png"
import joe from './assets/joe.png'
function App() {
  const [count, setCount] = useState(0);

  return (
    <Row gutter={[16, 16]} wrap justify={"space-between"}>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card hoverable style={{ width: 350}}>
          <article>
            <img src={strangetThings} />
            <img src={eleven} />
          </article>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/es-la-you-s3-main-best-lies-vertical-27x40-rgb-pre-1633522084.jpg" />
            <img src={joe} />
          </article>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col>
      </Col>
    </Row>
  );
}

export default App;
