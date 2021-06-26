import { FC } from "react";
import { Form, Field } from "react-final-form";
import styled from "styled-components";
import { useAppDispatch } from "../../../utils/typedHooks";

import { Button } from "@material-ui/core";
import { CheckboxComp } from "../inputs/Checkbox";
import { RadioComp } from "../inputs/Radio";

import { handleAnswers } from "../../../redux/reducers/main";

import { colors } from "../../../utils/colors";

import type { IQuestion, IAnswer } from "../../../types/types";

interface IQuestionStyled {
  color: string;
}
interface IQRender extends IQuestion {
  curQ: number;
}

const QuestionStyled = styled.div<IQuestionStyled>`
  padding: 0 32px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;

    &_difficulty {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 40px;
      padding: 0 16px;
      border-radius: 4px;
      background-color: ${({ color }) => color};
    }
  }

  .options {
    &_buttons {
      margin-top: 48px;
    }
  }
`;

export const Question: FC<IQRender> = ({
  category,
  type,
  difficulty,
  question,
  correct_answer,
  incorrect_answers,
  curQ,
}) => {
  console.log(curQ);
  
  const dispatch = useAppDispatch();

  const color = {
    easy: colors.easy,
    medium: colors.medium,
    hard: colors.hard,
  };

  const answers = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  const onSubmit = (data: any) => {
    let answer = null;

    if (type === "multiple") {
      const answArr = Object.keys(data).map((d) => d.replace("OpTiOn", ""));
      answer = { question: question, answer: answArr };
    }

    if (type === "boolean") {
      answer = { question: question, answer: Object.values(data) };
    }

    console.log(answer);

    dispatch(handleAnswers(answer));
  };

  const decode = (text: string) => {
    const div = document.createElement("div");
    div.innerHTML = text;
    return div.innerText;
  };

  return (
    <QuestionStyled color={color[difficulty]}>
      <div className="title">
        <h3 className="title_question">{decode(question)}</h3>
        <div className="title_difficulty">{difficulty}</div>
      </div>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, pristine, values }) => {
          const dis: boolean =
            pristine ||
            (type === "multiple"
              ? Object.values(values).every((val) => val === false)
              : false);

          const submitter = () => {
            form.submit();
            form.reset();
          };

          return (
            <form className="options" onSubmit={handleSubmit}>
              {type === "multiple" &&
                answers.map((opt) => (
                  <Field
                    name={`OpTiOn${opt}`}
                    label={decode(opt)}
                    type="checkbox"
                    component={CheckboxComp}
                    key={`OpTiOn${opt}`}
                  />
                ))}

              {type === "boolean" &&
                answers.map((opt) => (
                  <Field
                    name={"boolean"}
                    label={opt}
                    type="radio"
                    value={opt}
                    component={RadioComp}
                    key={opt}
                  />
                ))}

              <div className="options_buttons">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={submitter}
                  disabled={dis}
                >
                  {curQ < 9 ? "NEXT QUESTION" : "WATCH RESULTS"}
                </Button>
              </div>
            </form>
          );
        }}
      />
    </QuestionStyled>
  );
};
