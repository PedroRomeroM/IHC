import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='HeaderContainer'>
            <header>
                <Link to="/">
                    <img src="./images/TADS.svg" alt="Logo do site" />
                </Link>
                <Link className='HeaderOption' to="/home"> Página Inicial</Link>
                <Link className='HeaderOption' to="/about"> Sobre o Curso</Link>
                <Link className='HeaderOption' to="/coordenacaoLayout"> Coordenação </Link>
                <Link className='HeaderOption' to="http://200.236.3.198:28080/secretariaonline/Home"> Secretaria </Link>
                <Link className='HeaderOption' to="/ementas"> Ementas </Link>
                <Link className='HeaderOption' to="/editais"> Editais </Link>
                <Link className='HeaderOption' to="/docentes"> Docentes </Link>
                <Link className='HeaderOption'> <img src="./images/user.svg" alt="Perfil do usuario" /></Link>
            </header>
        </div>
    )
}

export default Header;