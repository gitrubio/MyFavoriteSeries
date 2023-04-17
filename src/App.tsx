import { useState } from "react";
import { Row, Card, Col } from "antd";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Row gutter={[16, 16]} wrap justify={"space-between"}>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card hoverable style={{ width: 350}}>
          <article>
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/strangerFont.jpg?alt=media&token=d008d37b-e8b2-489d-83dd-5da74d9d83f8"} />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/eleven.png?alt=media&token=3155baef-c5cb-413d-aa2b-1b5cf3e6898b"} />
          </article>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/es-la-you-s3-main-best-lies-vertical-27x40-rgb-pre-1633522084.jpg" />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/joe.png?alt=media&token=57cb3d29-51e0-444c-9de3-503600f3e910"} />
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
