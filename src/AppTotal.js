import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Metadata from "./page/Metadata";
import OneAnswer from "./component/popup/OneAnswer";
import Test from "./page/Test";
import Question_Manager from "./page/Bank/Question_Manager";
import Compare_Number from "./component/popup/Compare_Number";
import ManagerQuestion from "./component/ManagerQuestion";
import EssayQuestion from "./component/popup/EssayQuestion";
import TrueFalse from "./component/popup/TrueFalse";
import Arrange_Word from "./component/popup/Arrange_Word";
import Connect_Word from "./component/popup/Connect_Word";
import Fill_Word from "./component/popup/Fill_Word";
import Selected_Word from "./component/popup/Selected_Word";
import Record from "./component/popup/Record";
import Select_Question from "./page/question/Select_Question";
import TrueFalse_Question from "./page/question/TrueFalse_Question";
import Arrange_Question from "./page/question/Arrange_Question";
import Do_Test from "./page/Do_Test";
import MultipleAnswer from "./component/popup/MultipleAnswer";
const AppTotal = () => {
    return (
        <Router>
            <div >
                <Routes>
                    <Route path="/metadata" element={<Metadata />} />
                    <Route path="/manager" element={< Question_Manager />} />
                    <Route path="/oneanswer" element={< OneAnswer />} />
                    <Route path="/multipleanswer" element={< MultipleAnswer />} />
                    <Route path="/compare_number" element={< Compare_Number />} />
                    <Route path="/essay_question" element={< EssayQuestion />} />
                    <Route path="/true_false" element={< TrueFalse />} />
                    <Route path="/arrange_word" element={< Arrange_Word />} />
                    <Route path="/connect_word" element={< Connect_Word />} />
                    <Route path="/fill_word" element={< Fill_Word />} />
                    <Route path="/selected_word" element={< Selected_Word />} />
                    <Route path="/record" element={< Record />} />
                    <Route path="/select_question" element={< Select_Question />} />
                    <Route path="/true_false_question" element={< TrueFalse_Question />} />
                    <Route path="/arrange_question" element={< Arrange_Question />} />
                    <Route path="/do_test" element={< Do_Test />} />
                    <Route path="/test" element={< ManagerQuestion />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppTotal