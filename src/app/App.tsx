import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/typedHooks";
import styled from "styled-components";

import { LoaderFullScreen } from "./components/loaders/LoaderFullScreen";
import { StartPage } from "./pages/StartPage";


import { getQuestions } from "../redux/reducers/main";

import { colors } from "../utils/colors";

const AppStyled = styled.main`
  max-width: 1280px;
  min-width: 320px;
  margin: 0 auto;
  /* padding: 0 32px; */
  color: ${colors.primaryBrownDark};

  @media (min-width: 768px) {
    /* padding: 0 56px; */
  }
`;

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state) => state.main);

  useEffect(() => {
    if (!questions) dispatch(getQuestions());
  }, [dispatch, questions]);

  if (!questions) return <LoaderFullScreen />;

  return (
    <AppStyled>
      <StartPage />
    </AppStyled>
  );
};
