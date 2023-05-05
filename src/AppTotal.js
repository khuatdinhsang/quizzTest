import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import NavBar from "./component/NavBar";
import Metadata from "./page/Metadata";
import Bank1 from "./page/Bank/Bank1";
import OneAnswer from "./page/Bank/OneAnswer";
import Test from "./page/Test";
const AppTotal = () => {
    return (
        <Router>
            <div >
                <Routes>
                    <Route path="/metadata" element={<Metadata />} />
                    <Route path="/bank1" element={< Bank1 />} />
                    <Route path="/oneanswer" element={< OneAnswer />} />
                    <Route path="/test" element={< Test />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppTotal