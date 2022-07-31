import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { quizReducer } from "./quiz/quiz.reducer";

// const rootReducer = combineReducers({ words: wordsReducer });

const store = createStore(quizReducer, composeWithDevTools());

export { store };
