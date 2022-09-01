import './Thirdrow.css';
import thirdRowImg from  '../../images/thirdRow.png'

function Thirdrow() {
    return (
    <div className='thirdRow'>
            <div className='container'>

                <div className='content-thirdRow'>
                    <h1>Your Safety Is Important</h1>
                    <p>
                    When your order reaches you, we have the health safety protocols, 
                    so that you are protected from any disease. Watch the video of how the delivery is made.
                    </p>
                </div>

                <div className='image-thirdRow'>
                    <img src={thirdRowImg} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Thirdrow;