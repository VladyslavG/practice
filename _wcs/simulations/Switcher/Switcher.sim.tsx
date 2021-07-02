import { createSimulation, ISimulationWrapperProps } from "@wixc3/wcs-core";
import { Switch, SwitchProps } from "../../../src/switch/Switch";
import { classes, st } from "../../../src/switch/switchVariants.st.css";
import { FC, useState } from "react";

const SwitchWrapper: FC<ISimulationWrapperProps<SwitchProps>> = (props) => {
  const [checked, setChecked] = useState(false);
  return props.renderSimulation({
    checked,
    onChange: setChecked,
  });
};

export default createSimulation({
  name: "Switch",
  componentType: Switch,
  props: {
    label: "test",
    className: st(classes.dangerSwitch, classes.smallSwitch),
  },
  environmentProps: {
    windowWidth: 436,
  },
  wrapper: SwitchWrapper,
});
