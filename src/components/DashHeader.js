import { Link } from 'react-router-dom'

const DashHeader = () => {
  return (
    <header className="dash-header">
        <div className="dash-header__container">
            <Link to="/dash/">
                <h1 className="dash-header__title">techNotes</h1>
            </Link>
            <nav className="dash-header__nav">
                <ul className="dash-header__list">
                    <li className="dash-header__item">
                        <Link to="/dash/notes" className="dash-header__link">Notes</Link>
                    </li>
                    <li className="dash-header__item">
                        <Link to="/dash/notes/new" className="dash-header__link">New Note</Link>
                    </li>
                    <li className="dash-header__item">
                        <Link to="/dash/notes/favorites" className="dash-header__link">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
export default DashHeader