import { LOGO_URL } from "../utils/urls";

const Header = () => {
    return (
        <div className="header">

            <div className="logo">
                <img className="imglogo" src={LOGO_URL} alt="Food order" />
            </div>

            <div className="nav">
                <ul className="navitems">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Offers</li>
                </ul>

            </div>

        </div>
    )
}
export default Header;
