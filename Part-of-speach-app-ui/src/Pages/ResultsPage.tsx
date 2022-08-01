import { useSelector } from "react-redux";
import CardComponent from "../Components/CardComponent";

export default function ResultsPage() {
    const state = useSelector((state: any) => state);
    return (
        <CardComponent
            header={state.score}
            content={"wanna give it a go?"}
            hasStartBtn={true}
            hasAnswers={false}
            cardClass={
                "col-6 text-center d-flex flex-column d-flex justify-content-around   mt-5 m-auto"
            }
            startOrTryAgian={"Start Quiz"}
        ></CardComponent>
    );
}
