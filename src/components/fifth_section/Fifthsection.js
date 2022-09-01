import './Fifthsection.css';
import img1fifthrow from '../../images/img1fifthrow.png'
import img2fifthrow from '../../images/img2fifthrow.png'
import img3fifthrow from '../../images/img3fifthrow.png'

function Fifthrow() {
    return(
        <div className='fifthRow'>
            <div className='container'>

                <div className='box'>
                    <h1>Find your product</h1>

                    <img src={img1fifthrow}></img>

                    <p>We offer sale of products through the Internet.</p>

                    <p><a>Learn More</a></p>
                </div>

                <div className='box'>
                    <h1>Payment Done</h1>

                    <img src={img2fifthrow}></img>

                    <p>Pay with Visa or PayPal card and without much ado</p>

                    <p><a>Learn More</a></p>
                </div>

                <div className='box'>
                    <h1>Product Received</h1>

                    <img src={img3fifthrow}></img>

                    <p>In our app you can see the delay time of your order.</p>

                    <p><a>Learn More</a></p>
                </div>

            </div>
        </div>
    )
}


export default Fifthrow;