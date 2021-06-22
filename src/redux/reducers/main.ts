import { Reducer, AnyAction } from "redux";
import { api } from "../../api/api";
import type { IQuestion, IMainState, TAction, TThunk } from "../../types/types";

const SET_QUESTIONS = "main/SET_QUESTIONS";

const initialState: IMainState = {
  questions: null,
};

export const main: Reducer<IMainState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };

    default:
      return state;
  }
};

// ACTIONS

const setQuestions: TAction<IQuestion[] | null> = (payload) => ({
  type: SET_QUESTIONS,
  payload,
});

// THUNKS

export const getQuestions = (): TThunk => async (dispatch) => {
  const questions = await api.getQuestions();
  dispatch(setQuestions(questions));
};
