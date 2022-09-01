import './Sixthsection.css';
import sixthrowImg from '../../images/sixthrow.png'

function Sixthsection() {
    return(
            <div class="sixthRow">
                <div class="container">

                    <div className='img'>
                        <img src={sixthrowImg}></img>
                    </div>

                    <div class="sixthRow-content">
                        <h1>Watch Your Delivery At Any Time</h1>
                        <p>With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!</p>

                        <div class="sixthRow-buttons">
                            <button>App Store</button>
                            <button>Google Play</button>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Sixthsection;