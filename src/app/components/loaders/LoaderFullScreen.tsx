import { FC } from "react";
import styled from "styled-components";

import loader from "../../../assets/loader.svg";

import { colors } from "../../../utils/colors";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .loading_svg {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  .loading_text {
    font-size: 16px;
    font-weight: 600;
    color: ${colors.primaryBrownDark};
  }
`;

export const LoaderFullScreen: FC = () => {
  return (
    <LoaderStyled>
      <img className="loading_svg" src={loader} alt="" />
      <div className="loading_text">Loading</div>
    </LoaderStyled>
  );
};
