import { FC } from "react";
import styled from "styled-components";

// import { Button } from "@material-ui/core";
import { colors } from "../../../utils/colors";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 32px;
  background-color: ${colors.primaryBrownDark};

  .title {
    color: ${colors.basicWhite};
    font-size: 22px;
    font-weight: 900;
    user-select: none;
  }

  @media (min-width: 480px) {
    .title {
      font-size: 32px;
    }
  }

  @media (min-width: 768px) {
    .title {
      font-size: 48px;
    }
  }
`;

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <h1 className="title">IT'S QUIZ TIME!</h1>
    </HeaderStyled>
  );
};
