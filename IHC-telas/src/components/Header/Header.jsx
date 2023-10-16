import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='HeaderContainer'>
            <header>
                <Link to="/">
                    <img src="./images/TADS.svg" alt="Logo do site" />
                </Link>
                <Link className='HeaderOption'> Página Inicial</Link>
                <Link className='HeaderOption'> Sobre o Curso</Link>
                <Link className='HeaderOption'> Coordenação </Link>
                <Link className='HeaderOption'> Secretaria </Link>
                <Link className='HeaderOption'> Ementas </Link>
                <Link className='HeaderOption'> Editais </Link>
                <Link className='HeaderOption'> Docentes </Link>
                <Link className='HeaderOption'> <img src="./images/user.svg" alt="Perfil do usuario" /></Link>
            </header>
        </div>
    )
}

export default Header;