import './Secondsection.css';
import secondSectionImg from  '../../images/Group.svg'

function Secondsection () {
    return (
        <div className='secondSection'>
            <div className='container'>

                <div className='image'>
                    <img src={secondSectionImg} alt=''></img>
                </div>

                <div className='content-secondRow'>
                    <h1>Find out a little more about us</h1>
                    <p>We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of delivery.</p>
                </div>

            </div>
        </div>
    )
}

export default Secondsection;