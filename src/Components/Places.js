import option from '../img/option.jpg'
import lands1 from '../img/lands1.jpeg'
import lands2 from '../img/lands2.jpeg'
import lands3 from '../img/lands3.jpeg'
import lands4 from '../img/lands4.jpeg'
import lands5 from '../img/lands5.jpeg'
const React = require('react')

const Places = () => {
    return <div className='places'>
        <div className='placesTop'>
            <center>
                <h1><span>P</span>laces</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </center>
        </div>
        <div className='placesImg'>
            <div className='imgBox'>
                <img src={option} alt='' />
                <p>Alaska</p>
            </div>
            <div className='imgBox'>
                <img src={lands1} alt='' />
                <p>Arizona</p>
            </div>
            <div className='imgBox'>
                <img src={lands2} alt='' />
                <p>Siberia</p>
            </div>
            <div className='imgBox'>
                <img src={lands3} alt='' />
                <p>Whitehorse</p>
            </div>
            <div className='imgBox'>
                <img src={lands4} alt='' />
                <p>Singapore</p>
            </div>
            <div className='imgBox'>
                <img src={lands5} alt='' />
                <p>Melbourne</p>
            </div>
        </div>
        <a href='places' className='lnk'>view all</a>
    </div>
}

export default Places