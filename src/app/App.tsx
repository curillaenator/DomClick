import { FC, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/typedHooks";
import styled from "styled-components";

import { LoaderFullScreen } from "./components/loaders/LoaderFullScreen";
import { Header } from "./components/header/Header";
import { StartPage } from "./pages/StartPage";
import { QuizPage } from "./pages/QuizPage";
import { ResultsPage } from "./pages/ResultsPage";

import { getQuestions } from "../redux/reducers/main";

import { colors } from "../utils/colors";

const AppStyled = styled.main`
  max-width: 1280px;
  min-width: 768px;
  margin: 0 auto;
  color: ${colors.primaryBrownDark};
`;

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { isQuestions, isResults } = useAppSelector((state) => state.main);

  useEffect(() => {
    if (!isQuestions) dispatch(getQuestions());
  }, [dispatch, isQuestions]);

  useEffect(() => {
    if (isResults) history.push("/results");
  }, [isResults, history]);

  if (!isQuestions) return <LoaderFullScreen />;

  return (
    <AppStyled>
      <Header />

      <Switch>
        <Route exact path="/" render={() => <StartPage />} />
        <Route path="/quiz" render={() => <QuizPage />} />
        <Route path="/results" render={() => <ResultsPage />} />
      </Switch>
    </AppStyled>
  );
};
