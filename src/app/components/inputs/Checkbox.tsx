import { FC } from "react";
import ChBox from "@material-ui/core/Checkbox";

import { FieldRenderProps } from "react-final-form";

type ICheckbox = FieldRenderProps<boolean, any>;

export const Checkbox: FC<ICheckbox> = ({ input, meta, label }) => {
  // console.log(props);
  return (
    <div>
      <ChBox
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
