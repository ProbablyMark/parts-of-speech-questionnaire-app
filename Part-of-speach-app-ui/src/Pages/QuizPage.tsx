import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardComponent from "../Components/CardComponent";

import { setIndexArr, setUserScore, setWords } from "../Redux/quiz/quiz.action";

export default function QuizPage() {
    async function getData() {
        await axios.get("http://localhost:8000/quiz").then((response) => {
            settingWords([...response.data]);
            //////////
            const words = new Set();
            while (words.size < 11) {
                words.add(Math.floor(Math.random() * 14));
            }
            let indexArr: Array<any> = [];
            words.forEach((e) => {
                indexArr.push(e);
            });
            settingIndexArr(indexArr);
        });
    }
    useEffect(() => {
        getData();
    }, []);
    /////////////////////////////////
    const dispatch = useDispatch();
    const settingIndexArr = (words: any) => {
        dispatch(setIndexArr(words));
    };
    const settingWords = (words: any) => {
        dispatch(setWords(words));
    };
    const settingUserScore = (score: number) => {
        dispatch(setUserScore(score));
    };
    const state = useSelector((state: any) => state);
    //////////////

    const navigate = useNavigate();
    ///////////////
    const [progress, setProgress] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    /////////////////////

    let correct = true;
    ////////////////////
    const nextBtnHandler = () => {
        setProgress(progress + 10);
        if (correct) {
            setScore(score + 10);
            setIndex(index + 1);
        }

        if (progress === 100) {
            console.log(score);
            setProgress(0);
            settingUserScore(score);
            navigate("/results");
        }
    };
    return (
        <CardComponent
            hasStartBtn={false}
            hasAnswers={true}
            hasNextBtn={true}
            header={state.words !== null && state.words[state.indexArr[index]].word}
            hasProgressBar={true}
            content={"What do you think this word is?"}
            cardClass={
                "col-6 text-center d-flex flex-row d-flex justify-content-around   mt-5 m-auto"
            }
            progress={progress}
            nextBtnClass={""}
            answersClass={""}
            nextBtnEvent={nextBtnHandler}
        ></CardComponent>
    );
}
