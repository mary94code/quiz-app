import { Route, HashRouter, Routes } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import QuestionPage from "./Pages/QuestionPage"
import Main from "./Components/Main";
import Header from "./Components/Header";



function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quizPage" element={<QuizPage />} />
          <Route path="/quizPage/:type" element={<QuestionPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
