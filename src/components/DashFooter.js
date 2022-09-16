import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const DashFooter = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleHomeClick = () => navigate('/dash');

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button className="dash-footer__button icon-button" 
                    title="Home"
                    onClick={handleHomeClick}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            <p className="dash-footer__text">Current User: </p>
            <p className="dash-footer__text">Status: </p>
        </footer>
    )
  return content
}
export default DashFooter