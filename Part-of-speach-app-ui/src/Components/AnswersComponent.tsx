import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AnswersComponent() {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"> </FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                <FormControlLabel value="noun" control={<Radio />} label="noun" />
                <FormControlLabel value="verb" control={<Radio />} label="verb" />
                <FormControlLabel value="adjective" control={<Radio />} label="adjective" />{" "}
                <FormControlLabel value="adverb" control={<Radio />} label="adverb" />
            </RadioGroup>
        </FormControl>
    );
}
