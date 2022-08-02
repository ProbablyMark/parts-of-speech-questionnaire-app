import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardComponent from "../Components/CardComponent";

import { setIndexArr, setUserScore, setWords, setAnswer } from "../Redux/quiz/quiz.action";

export default function QuizPage() {
    //////////////
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
    /////////////////////////////////dispatched actions
    const dispatch = useDispatch();

    const settingAnswer = (words: any) => {
        dispatch(setAnswer(words));
    };
    const settingIndexArr = (words: any) => {
        dispatch(setIndexArr(words));
    };
    const settingWords = (words: any) => {
        dispatch(setWords(words));
    };
    const settingUserScore = (score: number) => {
        dispatch(setUserScore(score));
    };
    //////////////useselector and navigate hooks
    const state = useSelector((state: any) => state);

    const navigate = useNavigate();
    ///////////////states
    const [progress, setProgress] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [ans, setAns] = useState<boolean>();
    const [open, setOpen] = useState<boolean>(false);

    /////////////////////next button handler to handle progress bar ,snackbar and navigation

    const nextBtnHandler = () => {
        setOpen(true);
        setProgress(progress + 10);
        if (state.currAnswer === state.words[state.indexArr[index]].pos) {
            setScore(score + 10);
            setAns(true);
        } else {
            setAns(false);
        }

        setIndex(index + 1);
        if (progress === 100) {
            setProgress(0);
            settingUserScore(score);
            navigate("/results");
        }
        settingAnswer("");
    };
    return (
        <>
            <Snackbar
                open={ans === true && open === true}
                autoHideDuration={1000}
                sx={{ width: "20%" }}
                onClose={() => {
                    setOpen(false);
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Alert severity="success" sx={{ width: "100%", hight: "10px" }}>
                    Correct answer
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={ans === false && open === true}
                autoHideDuration={1000}
                sx={{ width: "20%" }}
                onClose={() => {
                    setOpen(false);
                }}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    Wrong Answer
                </Alert>
            </Snackbar>

            <CardComponent
                hasStartBtn={false}
                hasAnswers={progress !== 100 && true}
                hasNextBtn={true}
                header={
                    progress !== 100 && state.words !== null
                        ? state.words[state.indexArr[index]].word
                        : "Good job"
                }
                hasProgressBar={true}
                content={
                    progress !== 100 ? "What do you think this word is?" : "Lets see how you did"
                }
                cardClass={
                    "col-6 text-center d-flex flex-row d-flex justify-content-around   mt-5 m-auto"
                }
                progress={progress}
                nextBtnClass={progress === 100 ? "mt-5" : ""}
                answersClass={""}
                nextBtnEvent={nextBtnHandler}
            ></CardComponent>
        </>
    );
}
