import { React, useState, useContext } from "react";
import Switch from "@mui/material/Switch";
import { darkTheme, lightTheme } from "./Theme";
import { MainContext } from "../context/userContext";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function ToggleTheme() {
  const { toggleDark } = useContext(MainContext);
  const { setToggleDark } = useContext(MainContext);

  const handleModeChange = () => {
    setToggleDark(!toggleDark);
  };

  return (
    <div>
      <IconButton aria-label="day/night" onClick={handleModeChange}>
        {toggleDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
      </IconButton>
    </div>
  );
}

export { ToggleTheme };
