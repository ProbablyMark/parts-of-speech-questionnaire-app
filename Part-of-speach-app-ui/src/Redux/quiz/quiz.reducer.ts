const INITIAL_STATE = {
    words: null,
    score: 0,
    indexArr: null,
    currAnswer: null,
};

export function quizReducer(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case "SET_WORDS":
            return {
                ...state,
                words: action.payload,
            };
        case "SET_SCORE":
            console.log("score");
            return {
                ...state,
                score: action.payload,
            };
        case "SET_INDEX_ARR":
            return {
                ...state,
                indexArr: action.payload,
            };
        case "SET_ANSWER":
            return {
                ...state,
                currAnswer: action.payload,
            };

        default:
            return state;
    }
}
