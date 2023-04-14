import './menu.css'

function Menu({ items }) {
    return (
        <div>
            <div className="button-group-items">
                <button className="menu-btn">
                    <img className="menu-cat-img" src={items[0].src} alt="Starter Meal" />
                    <div className="bgmTxt">{items[0].title}</div>
                </button>
                <button className="menu-btn">
                    <img className="menu-cat-img" src={items[1].src} alt="meal" />
                    <div className="bgmTxt">{items[1].title}</div>
                </button>
                <button className="menu-btn">
                    <img className="menu-cat-img" src={items[2].src} alt="dessert" />
                    <div className="bgmTxt">{items[2].title}</div>
                </button>
                <button className="menu-btn">
                    <img className="menu-cat-img" src={items[3].src} alt="dessert" />
                    <div className="bgmTxt">{items[3].title}</div>
                </button>
                <button className="menu-btn">
                    <img className="menu-cat-img" src={items[4].src} alt="dessert" />
                    <div className="bgmTxt">{items[4].title}</div>
                </button>
            </div>
        </div>
    );
}

export default Menu;
