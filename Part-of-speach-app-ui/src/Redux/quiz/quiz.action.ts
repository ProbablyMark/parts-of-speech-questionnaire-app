export const setWords = (payload: any) => {
    return {
        type: "SET_WORDS",
        payload,
    };
};

export const setUserScore = (payload: number) => {
    return {
        type: "SET_SCORE",
        payload,
    };
};
export const setIndexArr = (payload: number) => {
    return {
        type: "SET_INDEX_ARR",
        payload,
    };
};
