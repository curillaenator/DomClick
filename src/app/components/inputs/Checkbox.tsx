import { FC } from "react";
import Checkbox from "@material-ui/core/Checkbox";

interface IChbox {
  input: any;
  meta: any;
}

export const CheckboxComp: FC<IChbox> = ({ input, meta, ...props }) => {
//   console.log(input);
  return (
    <div>
      <Checkbox
        {...input}
        inputProps={{ "aria-label": "primary checkbox" }}
        id={input.name}
      />
      <label htmlFor={input.name} style={{ cursor: "pointer" }}>
        {input.name}
      </label>
    </div>
  );
};
