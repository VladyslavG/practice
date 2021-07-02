import React, { useState } from "react";
import { style, classes } from "./switch.st.css";

export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label: JSX.Element | string;
  labelOff?: string;
  labelOn?: string;
  onChange(newChecked: boolean): void;
  className?: string;
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = true,
  disabled = false,
  label,
  labelOff = "off",
  onChange,
  labelOn = "on",
  className,
}) => {
  const [checkedInner, setCheckedInner] = useState(defaultChecked);

  const isSwitchControlled = typeof checked === "boolean";
  const effectiveChecked = isSwitchControlled ? checked : checkedInner;

  return (
    <div
      className={style(
        classes.root,
        {
          disabled,
          on: effectiveChecked,
          off: !effectiveChecked,
        },
        className
      )}
    >
      <label>{label}</label>
      <div className={style(classes.switchWrapper)}>
        <div
          className={style(classes.track)}
          onClick={() => {
            if (disabled) {
              return;
            }

            if (!isSwitchControlled) {
              setCheckedInner((prevInnerChecked) => !prevInnerChecked);
            }

            onChange(!effectiveChecked);
          }}
        >
          <div className={style(classes.knob)}></div>
        </div>
        <div>{effectiveChecked ? labelOn : labelOff}</div>
      </div>
    </div>
  );
};
