import capitalQuestions from "./capitalsQuestions";
import generalKnowledgeQuestions from "./generalKnowledge";
import marvelQuestions from "./marvelQuestions";
const questions = {
    capitals: {
        quizName: 'Capitals Quiz',
        image: "./images/capitals/capitals.jpg",
        questions: capitalQuestions
    },
    general_knowledge: {
        quizName: 'General Knowledge Quiz',
        image: "./images/generalKnowledge/generalKnowledge.jpg",
        questions: generalKnowledgeQuestions
    },
    marvel: {
        quizName: 'marvel',
        image: "./images/marvel/marvel.jpg",
        questions: marvelQuestions
    }
}

export default questions;

