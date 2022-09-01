import './Firstsection.css';
import firstSectionImg from  '../../images/Group.svg'

function Firstsection () {
    return (
        <div className='firstSection'>
            <div className='container'>

                <div className='content'>
                    <h1>Order Products Faster Easier</h1>
                    <p>Order your favorite foods at any time and we will deliver them right to where you are.</p>
                    <button>Get Started</button>
                </div>

                <div className='image'>
                    <img src={firstSectionImg} alt=''></img>
                </div>

            </div>
        </div>
    )
}

export default Firstsection;