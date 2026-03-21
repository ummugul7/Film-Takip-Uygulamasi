
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <header className='header'>
            <div className="container">
                <div className="inner-content">
                    <div className="brand"> <Link to="/watchlist">Izlenecekler</Link></div>
                    <ul className="nav-links">
                        <li> <Link to="/watched">Izlenenler</Link></li>
                        <li>  <Link to="/" >+</Link> </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header