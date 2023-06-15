import { useState } from "react";
import { ISerie } from "./interfaces";
import CardSerie from "./components/CardSerie";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import RandomSerie from "./components/RandomSerie";
function App() {
  const [open, setOpen] = useState(false);
  const [serieSelect, setSerieSelect] = useState<ISerie>({
    title: "",
    characters: [""],
    description: "",
    imgFont: "",
    mainCharacterImg: "",
  });
  const dataSeries: ISerie[] = [
    {
      title: "Stranger Things",
      characters: [
        "Once",
        "Mike Wheeler",
        "Will byers",
        "Lucas Sinclair",
        "Max Mayfield",
        "Dustin Hender",
      ],
      description:
        "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.",
      imgFont:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/strangerFont.jpg?alt=media&token=d008d37b-e8b2-489d-83dd-5da74d9d83f8",
      mainCharacterImg:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/eleven.png?alt=media&token=3155baef-c5cb-413d-aa2b-1b5cf3e6898b",
    },
    {
      title: "You",
      characters: [
        "Joe Goldberg",
        "Love Quinn",
        "Marienne bell",
        "Ellie Alves",
        "Theo engler",
        "Beck",
      ],
      description:
        "Un hombre encantador y muy peligroso toma medidas extremas para introducirse en la vida de las mujeres de las que se enamora.",
      imgFont:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/you.jpg?alt=media&token=23a7b971-b765-4ae1-ba5f-5a7e77e79127",
      mainCharacterImg:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/joe.png?alt=media&token=57cb3d29-51e0-444c-9de3-503600f3e910",
    },
    {
      title: "lucifer",
      characters: [
        "Lucifer",
        "Chloe Decker",
        "Dan",
        "Mazikeen",
        "Amenadiel",
        "Ella Lopez",
      ],
      description:
        "Harto del infierno, Lucifer abandona su trono en el averno y se marcha a Los Ángeles, donde empieza a trabajar como detective de homicidios",
      imgFont:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/luciferFont.webp?alt=media&token=1d2a6f32-19e9-42f6-ba17-5680f5706d56",
      mainCharacterImg:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/Lucifer.webp?alt=media&token=c44f9f04-97ea-40c9-b596-a2ad97b28371",
    },
    {
      title: "Merlina",
      characters: [
        "Merlina Addams",
        "Enid Sinclair",
        "Marilyn Thornhill",
        "Xavier Thorpe",
        "Tyler Galpin",
        "Morticia Addams",
      ],
      description:
        "Mientras asiste a la Academia Nevermore, Merlina Addams intenta dominar su incipiente habilidad psíquica, frustrar una ola de asesinatos y resolver el misterio que involucró a sus padres 25 años atrás.",
      imgFont:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/Merlina-Poster.webp?alt=media&token=89941325-a511-484e-a9b5-8ec28b373312",
      mainCharacterImg:
        "https://candybargratis.com/wp-content/uploads/2022/12/merlina-personaje-png-imprimible.png",
    },
    {
      title: "Dahamer",
      characters: [
        "Jeffrey Dahmer",
        "Glenda Clevelt",
        "Shari Dahmer",
        "Lionel Dahmer",
        "Chazz",
        "Tracy Edwards",
      ],
      description:
        "La historia de uno de los asesinos en serie más conocidos de Estados Unidos, contada desde los puntos de vista de sus víctimas.",
      imgFont:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dhamerFont.jpg?alt=media&token=613062a2-aefd-4e08-8e6e-c20c367800af",
      mainCharacterImg:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dahamer-removebg-preview.png?alt=media&token=37aa0a3e-787c-4c4a-8f29-5c68ba088094",
    },
    {
      title: "Dark",
      characters: [
        "Jonas Khahnwald",
        "Martha Nielsen",
        "Franziska doppler",
        "Ulriech nielsen",
        "Elisabeth Doppler",
      ],
      description:
        "La desaparición de dos niños muestra los vínculos entre cuatro familias y expone el pasado de una pequeña ciudad.",
      imgFont:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/dark.jpg?alt=media&token=e00cf3b0-76c4-43ac-95ca-e07334cae95d",
      mainCharacterImg:
        "https://firebasestorage.googleapis.com/v0/b/mypricelist-7e6fe.appspot.com/o/jonasxdark.png?alt=media&token=74f4ac9f-f429-473e-8f98-7d0e13daf011",
    },
  ];

  const showDrawer = (data: ISerie) => {
    setSerieSelect(data);
    setOpen(true);
  };
  return (
    <div>
      <Box>
        <ResponsiveAppBar />
      </Box>
      <Box
        sx={{
          height: 500,
          width: "100%",
          margin: 0 /*  position: 'absolute' */,
        }}
      >
        <RandomSerie />
      </Box>
      <Box key={"xd"}>
        <Grid container spacing={1} direction={"row"} justifyContent={"center"}>
          {dataSeries.map((serie) => (
            <Grid item key={serie.title}>
              <CardSerie {...serie} showDrawer={showDrawer} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
