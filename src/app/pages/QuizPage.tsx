import { FC } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../utils/typedHooks";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Question } from "../components/question/Question";

const PageStyled = styled.section``;

export const QuizPage: FC = () => {
  const { questions, curQuestion, answers } = useAppSelector(
    (state) => state.main
  );

  const question = { ...questions[curQuestion], curQ: curQuestion };

  if (answers.length >= 10) return <Redirect to="results" />;

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
