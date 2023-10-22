import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChallengesLayout from './layouts/HomeLayout';
import AutenticationLayout from './layouts/AutenticationLayout';
import About from './layouts/AboutLayout/AboutLayout';
import EmentasLayout from './layouts/EmentasLayout';
import Coordenacao from './layouts/CoordenacaoLayout';
import EditaisLayout from './layouts/EditaisLayout';
import DocentesLayout from './layouts/DocentesLayout';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<AutenticationLayout />} />
                <Route path="/home" element={<ChallengesLayout />} />
                <Route path="/about" element={<About />} />
                <Route path="/ementas" element={<EmentasLayout />} />
                <Route path="/coordenacaoLayout" element={<Coordenacao />} />
                <Route path="/editais" element={<EditaisLayout />} />
                <Route path="/docentes" element={<DocentesLayout />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
