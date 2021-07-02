import React, { useState } from "react";
import { Switch } from "./switch/Switch";
import { classes } from "./switch/switchVariants.st.css";

export const App: React.FC = () => {
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(false);
  const [checked3, setChecked3] = useState<boolean>(false);
  const [checked4, setChecked4] = useState<boolean>(false);
  const [checked5, setChecked5] = useState<boolean>(false);

  return (
    <>
      <h3>regular</h3>
      <Switch
        checked={checked1}
        onChange={setChecked1}
        label="Engine working"
      />
      <h3>Uncontrolled</h3>
      <Switch
        defaultChecked
        onChange={(newVal) => console.log(newVal)}
        label="Engine working uncontrolled"
      />
      <h3>small</h3>
      <Switch
        checked={checked2}
        onChange={setChecked2}
        label="Small Engine working"
        className={classes.smallSwitch}
      />
      <h3>danger</h3>
      <Switch
        checked={checked3}
        onChange={setChecked3}
        label="Danger Engine working"
        className={classes.dangerSwitch}
      />
      <h3>disabled</h3>
      <Switch
        disabled
        labelOff="brain not working"
        labelOn="brain working"
        checked={checked4}
        onChange={setChecked4}
        label="Brain working"
      />
      <h3>small + danger + disabled</h3>
      <Switch
        checked={checked5}
        onChange={setChecked5}
        label="Engine working"
        disabled
        className={`${classes.smallSwitch} ${classes.dangerSwitch}`}
      />
    </>
  );
};
