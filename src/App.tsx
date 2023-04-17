import { useState } from "react";
import { Row, Card, Col, Drawer } from "antd";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <Row gutter={[16, 16]} wrap justify={"start"}>
        <Drawer title="Basic Drawer" placement="right" onClose={()=>setOpen(false)} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='Stranger Things' hoverable style={{ width: 350}}>
          <article>
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/strangerFont.jpg?alt=media&token=d008d37b-e8b2-489d-83dd-5da74d9d83f8"} />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/eleven.png?alt=media&token=3155baef-c5cb-413d-aa2b-1b5cf3e6898b"} />
          </article>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='You' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/you.jpg?alt=media&token=23a7b971-b765-4ae1-ba5f-5a7e77e79127" />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/joe.png?alt=media&token=57cb3d29-51e0-444c-9de3-503600f3e910"} />
          </article>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='lucifer' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/luciferFont.webp?alt=media&token=1d2a6f32-19e9-42f6-ba17-5680f5706d56" />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/Lucifer.webp?alt=media&token=c44f9f04-97ea-40c9-b596-a2ad97b28371"} />
          </article>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='Merlina' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/Merlina-Poster.webp?alt=media&token=89941325-a511-484e-a9b5-8ec28b373312" />
            <img src={"https://candybargratis.com/wp-content/uploads/2022/12/merlina-personaje-png-imprimible.png"} />
          </article>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='Dark' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dark.jpg?alt=media&token=e00cf3b0-76c4-43ac-95ca-e07334cae95d" />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/jonasxdark.png?alt=media&token=74f4ac9f-f429-473e-8f98-7d0e13daf011"} />
          </article>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='lucifer' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dhamerFont.jpg?alt=media&token=613062a2-aefd-4e08-8e6e-c20c367800af" />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dahamer-removebg-preview.png?alt=media&token=37aa0a3e-787c-4c4a-8f29-5c68ba088094"} />
          </article>
        </Card>
      </Col>
      <Col>
      </Col>
    </Row>
  );
}

export default App;
