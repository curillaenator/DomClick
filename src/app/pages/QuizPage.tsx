import { FC } from "react";
// import { useHistory } from "react-router";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../utils/typedHooks";

// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import { Question } from "../components/question/Question";

const PageStyled = styled.section``;

export const QuizPage: FC = () => {
  const dispatch = useAppDispatch();
  const { questions, curQuestion } = useAppSelector((state) => state.main);

  return (
    <PageStyled>
      <Question {...questions[curQuestion]} />
    </PageStyled>
  );
};
