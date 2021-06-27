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
  padding: 32px;

  .summary {
    margin-bottom: 32px;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const ResultStyled = styled.div<IResultStyled>`
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 4px;
  border: 2px solid
    ${({ correct }) => (correct ? colors.okGreen600 : colors.dangerRed600)};
  background-color: ${({ correct }) =>
    correct ? colors.okGreen100 : colors.basicWhite};

  .question {
    margin-bottom: 24px;
  }

  .answers_string {
    margin-bottom: 16px;
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

  const summary = results.reduce((sum: number, q) => {
    return sum + (q.isCorrect ? 1 : 0);
  }, 0);

  const decode = (text: any) => {
    const div = document.createElement("div");
    div.innerHTML = text;
    return div.innerText;
  };

  const restart = () => {
    dispatch(resetState(null));
    history.push("/");
  };

  if (answers.length < 10) return <Redirect to="/" />;

  return (
    <PageStyled>
      <h2 className="summary">{`${summary} answer out of ${results.length} is correct!`}</h2>

      {results.map((result, i) => (
        <ResultStyled correct={result.isCorrect} key={result.question}>
          <h3 className="question">{`${i + 1}. ${decode(result.question)}`}</h3>

          <p className="answers_string">{`Your answer: ${decode(
            result.answer
          )}`}</p>

          {!result.isCorrect && (
            <p className="answers_string">{`Correct answer: ${decode(
              result.correct_answer
            )}`}</p>
          )}
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
