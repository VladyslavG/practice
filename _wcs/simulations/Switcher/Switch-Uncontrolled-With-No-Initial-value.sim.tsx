import { createSimulation, ISimulationWrapperProps } from "@wixc3/wcs-core";
import { Switch, SwitchProps } from "../../../src/switch/Switch";
import { classes, st } from "../../../src/switch/switchVariants.st.css";
import { FC, useState } from "react";

export default createSimulation({
    name: "Switch Uncontrolled With No Initial value",
    componentType: Switch,
    props: {
        label: "Switch",
    },
    environmentProps: {
        windowWidth: 436,
    },
});
