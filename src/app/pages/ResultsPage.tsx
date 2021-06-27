import { FC } from "react";
import styled from "styled-components";
import { Redirect, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/typedHooks";

import { resetState } from "../../redux/reducers/main";

import { Button } from "@material-ui/core";

import { colors } from "../../utils/colors";

import type { IQuestion } from "../../types/types";

interface IResult extends IQuestion {
  isCorrect: boolean;
  answer: string | undefined;
}

interface IResultStyled {
  correct: boolean;
}

const PageStyled = styled.section`
  padding-top: 32px;
`;

const ResultStyled = styled.div<IResultStyled>`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 4px;
  border: 2px solid
    ${({ correct }) => (correct ? colors.okGreen600 : colors.dangerRed600)};

  .question {
    margin-bottom: 24px;
  }
`;

export const ResultsPage: FC = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { questions, answers } = useAppSelector((state) => state.main);

  const results: IResult[] = questions.map((q) => {
    const answer = answers
      .find((answ) => answ.question === q.question)
      ?.answer.toString();

    return { ...q, answer, isCorrect: answer === q.correct_answer };
  });

  console.log(results);
  const restart = () => {
    dispatch(resetState(null));
    history.push("/");
  };

  if (answers.length < 10) return <Redirect to="/" />;

  return (
    <PageStyled>
      {results.map((result) => (
        <ResultStyled correct={result.isCorrect}>
          <h3 className="question">{result.question}</h3>

          <div className="answers">
            <p className="answers_string">{`Your answer: ${result.answer}`}</p>
            {!result.isCorrect && (
              <p className="answers_string">{`Correct answer: ${result.correct_answer}`}</p>
            )}
          </div>
        </ResultStyled>
      ))}

      <div className="buttons">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={restart}
        >
          TRY AGAIN
        </Button>
      </div>
    </PageStyled>
  );
};
