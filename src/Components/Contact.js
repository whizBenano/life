const React = require('react')

const Contact = () => {
    return <div className='contact'>
        <div className='contain'>
            <div className='first'>
                <center>
                    <h1><span>C</span>ontact Us</h1>
                    <p>Our consultants are more than happy to help</p>
                </center>
            </div>
            <div className='fill'>
                <div className='whiteBox'>
                    <form>
                        <h3>Send Message</h3>
                        <input type='text' placeholder='Name' />
                        <input type='text' placeholder='Email' />
                        <textarea placeholder='Message'/>
                        <button type='submit'>send</button>
                    </form>
                </div>
            </div>
        </div>        
    </div>
}

export default Contact