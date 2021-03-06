import { createSimulation, ISimulationWrapperProps } from "@wixc3/wcs-core";
import { Switch, SwitchProps } from "../../../src/switch/Switch";
import { classes, st } from "../../../src/switch/switchVariants.st.css";
import { FC, useState } from "react";

export default createSimulation({
    name: "Switch Uncontrolled Initially Checked",
    componentType: Switch,
    props: {
        label: "Switch",
        defaultChecked: true,
        onChange(newVal) {
            console.info(newVal);
        },
    },
    environmentProps: {
        windowWidth: 436,
    },
});
