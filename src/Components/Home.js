const React = require('react')

const Home = () => {
    const big = {
        fontSize: '5rem',
        marginBottom: '1rem'
    }

    return <div className='banner'>
        <h1 style={big}>Experience Life</h1>
        <center>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolor laborum beatae esse corporis alias ut voluptates, <br/>
                laudantium omnis excepturi dolorem obcaecati. Esse, illum molestiae vel nemo eius ea repellat. <br/> <br/>
                Best world travel agency.
            </p>
        </center>
            <h3>Tour the World</h3>
            <a href='/places' className='lnk'>locations</a>
    </div>
}

export default Home