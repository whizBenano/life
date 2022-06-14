import people from '../img/people.jpeg'
const React = require('react')

const People = () => {
    return <div className='people'>
        <center><h1><span>P</span>eople</h1></center>
        <div className='peopleDown'>
            <div className='left'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloremque vitae asperiores ducimus id repellat assumenda quod autem soluta voluptates praesentium expedita ut in ipsam laboriosam pariatur eum omnis quas!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, est. Quibusdam tempora perferendis nobis eum, voluptas amet deleniti nihil, alias, deserunt ipsum repellat explicabo ad aut velit a voluptate atque?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid iusto corporis ipsam quod sapiente iste quidem qui, reiciendis officiis culpa ratione cumque soluta iure dolores libero, ullam minima impedit minus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, doloremque vitae asperiores ducimus id repellat assumenda quod autem soluta voluptates praesentium expedita ut in ipsam laboriosam pariatur eum omnis quas!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, est. Quibusdam tempora perferendis nobis eum, voluptas amet deleniti nihil, alias, deserunt ipsum repellat explicabo ad aut velit a voluptate atque?
                </p>
            </div>
            <div className='imgBox'>
                <img src={people} alt='' />
            </div>
        </div>
    </div>
}

export default People