import { FC } from "react";
import Radio from "@material-ui/core/Radio";

interface IRadio {
  input: any;
  meta: any;
}

export const RadioComp: FC<IRadio> = ({ input, meta, ...props }) => {
//   console.log(input);
  return (
    <div>
      <Radio {...input} id={input.value} />

      <label htmlFor={input.value} style={{ cursor: "pointer" }}>
        {input.value}
      </label>
    </div>
  );
};
