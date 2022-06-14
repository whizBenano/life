import thomas from '../img/person1.jpeg'
import mikeala from '../img/person2.jpeg'
import john from '../img/person3.jpeg'
import nicole from '../img/person4.jpeg'
const React = require('react')

const Consultants = () => {
    return <div className='consultants'>
        <div className='consultantsTop'>
            <center>
                <h1>Our Location <span>C</span>onsultants</h1>
                <p>Get a quick response form any of our consultants on a 24/7 basis.</p>
            </center>
        </div>
        <div className='content'>
            <div className='contentBx'>
                <div className='imgBox'>
                    <img src={thomas} alt='' />
                </div>
                <p>Thomas Jefferson</p>
            </div>
            <div className='contentBx'>
                <div className='imgBox' >
                    <img src={mikeala} alt='' />
                </div>
                <p>Mikeala Davis</p>
            </div>
            <div className='contentBx'>
                <div className='imgBox'>
                    <img src={john} alt='' />
                </div>
                <p>John Doe</p>
            </div>
            <div className='contentBx'>
                <div className='imgBox'>
                    <img src={nicole} alt='' />
                </div>
                <p>Nicole Peterson</p>
            </div>
        </div>
    </div>
}

export default Consultants