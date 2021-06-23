import { FC } from "react";
import Checkbox from "@material-ui/core/Checkbox";

interface ICheckboxComp {
  input: any;
  meta: any;
  label: any;
}

export const CheckboxComp: FC<ICheckboxComp> = ({
  input,
  meta,
  label,
  ...props
}) => {
  // console.log(label);
  return (
    <div>
      <Checkbox
        {...input}
        inputProps={{ "aria-label": "primary checkbox" }}
        id={input.name}
      />
      <label htmlFor={input.name} style={{ cursor: "pointer" }}>
        {label}
      </label>
    </div>
  );
};
