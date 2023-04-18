import './menu.css'
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

function Menu({ items }) {
    return (
        <div className='button-group-items'>
            {items.map((item, i) => {
                return (
                    <button key={uuid()} className="menu-btn">
                        <Link className="menu-link" to="/detail" state={item}>
                        <img className="menu-cat-img" src={item.src} alt={item.alt} />
                        </Link>
                        <div className="bgmTxt">{item.title}</div>
                    </button>
                );
            })}
        </div>
    );
}

export default Menu;
