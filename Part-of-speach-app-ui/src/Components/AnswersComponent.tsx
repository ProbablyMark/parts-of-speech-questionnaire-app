import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { setAnswer } from "../Redux/quiz/quiz.action";
import { useDispatch } from "react-redux";

export default function AnswersComponent() {
    const dispatch = useDispatch();
    const settingAnswer = (words: any) => {
        dispatch(setAnswer(words)); /// dispatcing the answer action
    };
    //////////////
    const handle = (value: any) => {
        settingAnswer(value.target.value); //setting anser in redux state
    };
    //////////////radio button group
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"> </FormLabel>
            <RadioGroup
                onChange={handle}
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="noun" control={<Radio />} label="noun" />
                <FormControlLabel value="verb" control={<Radio />} label="verb" />
                <FormControlLabel value="adjective" control={<Radio />} label="adjective" />{" "}
                <FormControlLabel value="adverb" control={<Radio />} label="adverb" />
            </RadioGroup>
        </FormControl>
    );
}
