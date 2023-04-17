import { useState } from "react";
import { Row, Card, Col } from "antd";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Row gutter={[16, 16]} wrap justify={"start"}>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='lucifer' hoverable style={{ width: 350}}>
          <article>
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/strangerFont.jpg?alt=media&token=d008d37b-e8b2-489d-83dd-5da74d9d83f8"} />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/eleven.png?alt=media&token=3155baef-c5cb-413d-aa2b-1b5cf3e6898b"} />
          </article>
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='lucifer' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/es-la-you-s3-main-best-lies-vertical-27x40-rgb-pre-1633522084.jpg" />
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
        <Card title='lucifer' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://i0.wp.com/cuatrobastardos.com/wp-content/uploads/2022/09/Merlina-Poster.jpg?resize=603%2C892&ssl=1" />
            <img src={"https://candybargratis.com/wp-content/uploads/2022/12/merlina-personaje-png-imprimible.png"} />
          </article>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='lucifer' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://es.web.img3.acsta.net/r_1280_720/pictures/19/06/11/21/33/0075880.jpg" />
            <img src={"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/jonasxdark.png?alt=media&token=74f4ac9f-f429-473e-8f98-7d0e13daf011"} />
          </article>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
        <Card title='lucifer' hoverable style={{ width: 350 ,height: 550 }}>
          <article>
            <img src="https://m.media-amazon.com/images/M/MV5BM2IwNWY2YWEtNTU4Ni00MmE2LTljZjItNWQ0NzBlNjJiMzBiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" />
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
