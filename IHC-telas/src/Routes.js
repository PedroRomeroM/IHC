import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChallengesLayout from './layouts/HomeLayout';
import AutenticationLayout from './layouts/AutenticationLayout';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<AutenticationLayout />} />
                <Route path="/home" element={<ChallengesLayout />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
