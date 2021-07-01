import React from "react";
import { style, classes, cssStates } from "./switch.st.css";

type SwitchProps = {
  checked: boolean;
  disabled?: boolean;
  label: JSX.Element | string;
  offLabel?: string;
  onLabel?: string;
  onChange(newChecked: boolean): void;
  className?: string;
};

export const Switcher: React.FC<SwitchProps> = ({
  checked,
  disabled = false,
  label,
  offLabel = "off",
  onChange,
  onLabel = "on",
  className,
}) => {
  return (
    <div
      className={style(
        classes.root,
        {
          disabled,
          on: checked,
          off: !checked,
        },
        className
      )}
    >
      <label>{label}</label>
      <div className={style(classes.switcherWrapper)}>
        <div
          className={style(classes.switcherZone)}
          onClick={() => {
            if (!disabled) {
              onChange(!checked);
            }
          }}
        >
          <div className={style(classes.switchControl)}></div>
        </div>
        <div>{checked ? onLabel : offLabel}</div>
      </div>
    </div>
  );
};
