import { NavLink } from 'react-router-dom';
import './404.scss';

const Not = () => {
    return (
        <>
            <div className="notfound-container">
                <div>
                    <h1>404 not found</h1>
                    <NavLink to='/'>Go to home</NavLink>
                </div>
            </div>
        </>
    )
}

export default Not;