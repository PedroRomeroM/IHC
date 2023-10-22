import { Link } from 'react-router-dom';
import './About.scss'
import SobreComponent from '../../components/SobreComponent/SobreComponent';
import Header from '../../components/Header/Header';


const About = () => {
    return (
        <div className='AboutLayout'>
            <Header/>
            <h1>Sobre o Curso</h1>
            <SobreComponent/>
        </div>
    )
}

export default About;