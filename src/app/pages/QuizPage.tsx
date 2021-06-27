import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../utils/typedHooks";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Question } from "../components/question/Question";

const PageStyled = styled.section``;

export const QuizPage: FC = () => {
  const { questions, curQuestion } = useAppSelector((state) => state.main);
  const question = { ...questions[curQuestion], curQ: curQuestion };

  return (
    <PageStyled>
      <Stepper activeStep={curQuestion}>
        {questions.map((step, i) => (
          <Step key={step.question} completed={i < curQuestion}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Question {...question} />
    </PageStyled>
  );
};
