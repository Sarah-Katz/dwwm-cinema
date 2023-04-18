import { useLocation } from 'react-router-dom';
import './detail.css'

function Detail() {

    const location = useLocation();
    const item = location.state;
    console.log(item);

    return (
        <div className='button-group-items'>
            <p>{item.title}</p>
        </div>
    );
}

export default Detail;
