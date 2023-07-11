import {Link} from 'react-router-dom';

const NavigationBar = ()=>{
    return (
        <div className='NavigationBar'>
        <div className="navbar">
            <Link className='navLogo' to={'/'}>UNPEIL</Link>
            <Link className='navbarMenu1' to={'/'}>MAIN</Link>
            <Link className='navbarMenu2' to={'/'}>ABOUT</Link>
            <Link className='navbarMenu3' to={'/'}>SERVICE</Link>
            <Link className='navbarMenu4' to={'/'}>CONTACT</Link>



        </div>
        </div>
    )
}

export default NavigationBar;