import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { quizReducer } from "./quiz/quiz.reducer";

const store = createStore(quizReducer, composeWithDevTools());

export { store };
