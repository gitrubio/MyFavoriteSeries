import React, { useState } from "react";
import starwars from "../assets/starwars.mp4";
import Button from "@mui/material/Button";
import { Box, Grid, Typography } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
export default function RandomSerie() {
  const [muted, setmuted] = useState(false);
  return (
    <div className="video-container">
      <video autoPlay loop muted={muted}>
        <source src={starwars} type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
      <div className="video-options">
        <div className="video-info">
          <Typography style={{ position: "relative" }}>Star Wars</Typography>
          <div>
            <Button variant="contained">Outlined</Button>
            <Button variant="outlined">Outlined</Button>
          </div>
        </div>
        <div>
          <Button
            color="primary"
            variant="outlined"
            sx={{ display: "flex", justifyContent: "center", borderRadius: 10, color: 'white' }}
            onClick={() => setmuted((prev) => !prev)}
          >
            {muted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
}
