import { FC } from "react";
import Radio from "@material-ui/core/Radio";

import { FieldRenderProps } from "react-final-form";

type IRadio = FieldRenderProps<string, any>;

export const RadioComp: FC<IRadio> = ({ input, meta }) => {
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
