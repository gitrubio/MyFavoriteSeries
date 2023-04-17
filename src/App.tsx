import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Row, Card, Col } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Row gutter={[16, 16]} wrap justify={"space-between"}>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card hoverable style={{ width: 350 }}>
          <article>
            <img src="https://genotipia.com/wp-content/uploads/2017/10/stranger-things-season-2-poster-2-786x1174.jpg" />
            <img src="https://64.media.tumblr.com/2e5c2f919d32e28cbacc06ab87fca595/tumblr_ozw3biKUfq1vl7x77o1_1280.png" />
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
