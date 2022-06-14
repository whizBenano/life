import person1 from '../img/tesi1.jpeg'
import person2 from '../img/testi2.jpeg'
import person3 from '../img/testi3.jpeg'
const React = require('react')

const Testimonials = () => {
    const nameStyle = {
        color: '#ff0157'
    }
    return <div className='testimonials'>
        <div className='testiTop'>
            <center>
                <h1>They <span>S</span>aid about us</h1>
                <p>They've tried and seen, they'll tell you about it.</p>
            </center>
        </div>
        <div className='testiRest'>
            <div className='whiteBox'>
                <div className='imgBox'>
                    <img src={person1} alt='' />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias perspiciatis asperiores voluptas quidem ducimus magnam architecto nobis ratione maxime aspernatur hic similique nihil neque culpa reiciendis, a totam explicabo distinctio.</p>
                <h3 style={nameStyle}>Celebrity</h3>
            </div>
            <div className='whiteBox'>
                <div className='imgBox'>
                    <img src={person2} alt='' />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias perspiciatis asperiores voluptas quidem ducimus magnam architecto nobis ratione maxime aspernatur hic similique nihil neque culpa reiciendis, a totam explicabo distinctio.</p>
                <h3 style={nameStyle}>Celebrity</h3>
            </div>
            <div className='whiteBox'>
                <div className='imgBox'>
                    <img src={person3} alt='' />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias perspiciatis asperiores voluptas quidem ducimus magnam architecto nobis ratione maxime aspernatur hic similique nihil neque culpa reiciendis, a totam explicabo distinctio.</p>
                <h3 style={nameStyle}>Celebrity</h3>
            </div>
        </div>
    </div>
}

export default Testimonials