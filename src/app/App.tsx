import { FC, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/typedHooks";
import styled from "styled-components";

import { LoaderFullScreen } from "./components/loaders/LoaderFullScreen";
import { Header } from "./components/header/Header";
import { StartPage } from "./pages/StartPage";
import { QuizPage } from "./pages/QuizPage";

import { getQuestions } from "../redux/reducers/main";

import { colors } from "../utils/colors";

const AppStyled = styled.main`
  max-width: 1280px;
  min-width: 320px;
  margin: 0 auto;
  color: ${colors.primaryBrownDark};

  @media (min-width: 768px) {
    /* padding: 0 56px; */
  }
`;

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isQuestions } = useAppSelector((state) => state.main);

  useEffect(() => {
    if (!isQuestions) dispatch(getQuestions());
  }, [dispatch, isQuestions]);

  if (!isQuestions) return <LoaderFullScreen />;

  return (
    <AppStyled>
      <Header />

      <Switch>
        <Route exact path="/" render={() => <StartPage />} />
        <Route path="/quiz" render={() => <QuizPage />} />
      </Switch>
    </AppStyled>
  );
};
