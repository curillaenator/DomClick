import { FC } from "react";
// import { useHistory } from "react-router";
import styled from "styled-components";
import { useAppSelector } from "../../utils/typedHooks";

// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import { Question } from "../components/question/Question";

const PageStyled = styled.section``;

export const QuizPage: FC = () => {
  // const dispatch = useAppDispatch();
  const { questions, curQuestion } = useAppSelector((state) => state.main);
  const question = { ...questions[curQuestion], curQ: curQuestion };

  return (
    <PageStyled>
      <Question {...question} />
    </PageStyled>
  );
};
