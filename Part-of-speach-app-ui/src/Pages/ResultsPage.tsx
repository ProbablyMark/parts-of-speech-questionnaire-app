import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../Components/CardComponent";

export default function ResultsPage() {
    const state = useSelector((state: any) => state);
    const [rank, setRank] = useState<number>(0);
    ///////////////
    async function getRank() {
        await axios.post("http://localhost:8000/rank", { score: state.score }).then((response) => {
            setRank(response.data);
        });
    }
    //////////////////////
    useEffect(() => {
        getRank();
    }, []);

    return (
        <CardComponent
            header={"Your Rank is"}
            content={rank}
            hasStartBtn={true}
            hasAnswers={false}
            cardClass={
                "col-6 text-center d-flex flex-column d-flex justify-content-around   mt-5 m-auto"
            }
            startOrTryAgian={"Try Again?"}
        ></CardComponent>
    );
}
