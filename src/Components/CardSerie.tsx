import React from "react";

import { IProsCard } from "../interfaces";
import { Card, CardActionArea } from "@mui/material";

export default function CardSerie({
  title,
  characters,
  description,
  imgFont,
  mainCharacterImg,
  showDrawer,
}: IProsCard) {
  return (
    <Card sx={{ width: 270, marginTop: 5 }}>
      <CardActionArea>
          <article>
            <img src={imgFont} />
            <img src={mainCharacterImg} />
          </article>
      </CardActionArea>
    </Card>
  );
}
