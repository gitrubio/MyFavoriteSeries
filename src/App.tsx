import { useState } from "react";
import { Row, Space, Col, Drawer, Typography } from "antd";
import { ISerie } from "./interfaces";
import CardSerie from "./Components/CardSerie";
function App() {
  const [open, setOpen] = useState(false);
  const [serieSelect, setSerieSelect] = useState<ISerie>({
    title : '',
    characters : [''],
    description : '',
    imgFont: '',
    mainCharacterImg : ''
  });
  const dataSeries : ISerie[] = [
    {
      title: 'Stranger Things',
      characters : [''],
      description : '',
      imgFont :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/strangerFont.jpg?alt=media&token=d008d37b-e8b2-489d-83dd-5da74d9d83f8",
      mainCharacterImg :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/eleven.png?alt=media&token=3155baef-c5cb-413d-aa2b-1b5cf3e6898b"
    },
    {
      title: 'You',
      characters : [''],
      description : '',
      imgFont :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/you.jpg?alt=media&token=23a7b971-b765-4ae1-ba5f-5a7e77e79127",
      mainCharacterImg :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/joe.png?alt=media&token=57cb3d29-51e0-444c-9de3-503600f3e910"
    },
    {
      title: 'lucifer',
      characters : [''],
      description : '',
      imgFont :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/luciferFont.webp?alt=media&token=1d2a6f32-19e9-42f6-ba17-5680f5706d56",
      mainCharacterImg :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/Lucifer.webp?alt=media&token=c44f9f04-97ea-40c9-b596-a2ad97b28371"
    },
    {
      title: 'Merlina',
      characters : [''],
      description : '',
      imgFont :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/Merlina-Poster.webp?alt=media&token=89941325-a511-484e-a9b5-8ec28b373312",
      mainCharacterImg :"https://candybargratis.com/wp-content/uploads/2022/12/merlina-personaje-png-imprimible.png"
    },
    {
      title: 'Dahamer',
      characters : [''],
      description : '',
      imgFont :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dhamerFont.jpg?alt=media&token=613062a2-aefd-4e08-8e6e-c20c367800af",
      mainCharacterImg :"https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dahamer-removebg-preview.png?alt=media&token=37aa0a3e-787c-4c4a-8f29-5c68ba088094"
    }
  ]

  const showDrawer = () => {
    setOpen(true)
  }
  return (
    <Row gutter={[16, 16]} wrap justify={"start"}>
        <Drawer title={serieSelect.title} placement="right" onClose={()=>setOpen(false)} open={open}>
        <Space>
          <Typography.Paragraph>
            {serieSelect.description}
          </Typography.Paragraph>
        </Space>
      </Drawer>
      {dataSeries.map((serie)=>(
         <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={6}>
          <CardSerie {...serie} showDrawer={showDrawer}/>
         </Col>
      ))}
    </Row>
  );
}

export default App;
