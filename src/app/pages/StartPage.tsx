import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/typedHooks";
import styled from "styled-components";

import { Header } from "../components/header/Header";

const PageStyled = styled.section``;

export const StartPage: FC = () => {
  return (
    <PageStyled>
      <Header />
    </PageStyled>
  );
};
