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
import Test1 from "./page/library/Test1";
import ViewListExam from "./page/CreateTest/ViewListExam";
import ViewDetailExam from "./page/CreateTest/ViewDetailExam";
import Confirm_Create_Exam from "./component/popup/Confirm_Create_Exam";
import Create_Success from "./component/popup/Create_Success";
import Warning from "./component/popup/Warning";
import Create_Exam from "./component/popup/Create_Exam";
import Confirm_Point from "./component/popup/Confirm_Point";
import Warning_Over_Point from "./component/popup/Warning_Over_Point";
import CreateExamManually from "./page/CreateTest/CreateExamManually";
import CreateExamAutomatic from "./page/CreateTest/CreateExamAutomatic";
import Draft_Exam from "./component/popup/Draft_Exam";
import Quizz_Management from "./page/CreateTest/Quizz_Management";
import TestSetUp from "./page/CreateTest/TestSetUp";
import ViewTest from "./page/User/ViewTest";
import Start_Exam from "./component/popup/Start_Exam";
import View_Result from "./component/popup/View_Result";
import ViewDetailTest from "./page/User/ViewDetailTest";
const AppTotal = () => {
    return (
        <Router>
            <div >
                <Routes>
                    <Route path="/metadata" element={<Metadata />} />
                    <Route path="/manager" element={< Question_Manager />} />
                    <Route path="/oneanswer" element={< OneAnswer />} />
                    <Route path="/multiple_answer" element={< MultipleAnswer />} />
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
                    <Route path="/view_list_exam" element={< ViewListExam />} />
                    <Route path="/view_detail_exam" element={< ViewDetailExam />} />
                    <Route path="/confirm_create_exam_popup" element={<Confirm_Create_Exam />} />
                    <Route path="/create_success_popup" element={< Create_Success />} />
                    <Route path="/warning" element={< Warning />} />
                    <Route path="/create_exam_popup" element={< Create_Exam />} />
                    <Route path="/confirm_point" element={< Confirm_Point />} />
                    <Route path="/warning_over_point" element={< Warning_Over_Point />} />
                    <Route path="/create_exam_manually" element={< CreateExamManually />} />
                    <Route path="/create_exam_automatic" element={< CreateExamAutomatic />} />
                    <Route path="/draft_exam" element={< Draft_Exam />} />
                    <Route path="/quizz_manager" element={< Quizz_Management />} />
                    <Route path="/test_setup" element={< TestSetUp />} />

                    {/* User                        */}
                    <Route path="/view_test" element={< ViewTest />} />
                    <Route path="/start_exam" element={< Start_Exam />} />
                    <Route path="/view_result_exam" element={< View_Result />} />
                    <Route path="/user_view_detail_exam" element={< ViewDetailTest />} />
                    <Route path="/test" element={< Test1 />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppTotal