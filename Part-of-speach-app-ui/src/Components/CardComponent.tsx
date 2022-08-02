import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import AnswersComponent from "./AnswersComponent";
import { Box, Button, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardComponent(props: any) {
    //reusable card in the three views
    return (
        <Card className={props.cardClass} sx={{ minWidth: 275, height: 400 }}>
            <CardContent>
                <Typography className=" my-5   " variant="h5" component="div">
                    {props.header}
                </Typography>
                <Typography className=" my-5   " sx={{ mb: 1.5 }} color="text.secondary">
                    {props.content}
                </Typography>
                {props.hasStartBtn && (
                    <Link to="/quiz">
                        <Button variant="contained" className="my-5">
                            {props.startOrTryAgian}
                        </Button>
                    </Link>
                )}{" "}
                {props.hasNextBtn && (
                    <Button
                        onClick={props.nextBtnEvent}
                        className={props.nextBtnClass}
                        variant="contained"
                    >
                        {props.progress !== 100 && "Next Question"}
                        {props.progress === 100 && "Finish Quiz"}
                    </Button>
                )}
            </CardContent>
            {props.hasAnswers && (
                <CardActions className={props.answersClass}>
                    <AnswersComponent></AnswersComponent>
                </CardActions>
            )}
            {props.hasProgressBar && (
                <Box sx={{ width: "50%", position: "absolute" }}>
                    <LinearProgress variant="determinate" value={props.progress} />
                </Box>
            )}
        </Card>
    );
}
