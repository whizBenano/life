import './App.css'
import './AppSmall.css'
import Nav, {Footer} from './Nav'
import Home from './Components/Home'
import People from './Components/People'
import Places from './Components/Places'
import Consultants from './Components/Consultants'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import NoPage from './Components/NoPage'
const React = require('react')
const { BrowserRouter, Routes, Route } = require('react-router-dom')

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Footer />
            <Routes>
                <Route index element={<Home />} />
                <Route path='people' element={<People />} />
                <Route path='places' element={<Places />} />
                <Route path='consultants' element={<Consultants />} />
                <Route path='testimonials' element={<Testimonials />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App