
import './Navbar.css'

function Navbar () {
    return (
        <div className="nav-bar">
            <div className='container'>
                
                <div className='nav-title'>Delivery</div>

                    <div className='ul-list-navbar'>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <button>Order Now</button>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Navbar;