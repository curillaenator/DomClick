import { FC } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useAppSelector } from "../../utils/typedHooks";

import { Button } from "@material-ui/core";

const PageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  padding: 32px 0;

  .notation {
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const StartPage: FC = () => {
  const history = useHistory();
  const { answers } = useAppSelector((state) => state.main);

  return (
    <PageStyled>
      <h2 className="notation">You will be given 10 questiions!</h2>
      <p className="notation">Don't hesitate and push the button:</p>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => history.push("/quiz")}
      >
        {answers.length > 0 ? "CONTINUE" : "PUSH TO START"}
      </Button>
    </PageStyled>
  );
};
