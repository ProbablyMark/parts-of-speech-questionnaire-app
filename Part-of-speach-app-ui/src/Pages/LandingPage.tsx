import CardComponent from "../Components/CardComponent";

export default function LandingPage() {
    return (
        <CardComponent
            header={"Welcome to the Parts of speech quiz"}
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
