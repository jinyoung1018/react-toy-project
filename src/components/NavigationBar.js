import {Link} from 'react-router-dom';

const NavigationBar = ()=>{
    return (
        // <div className='NavigationBar'>
        // <div className="navbar">
        //     <Link className='navLogo' to={'/'}>UNPEIL</Link>
        //     <Link className='navbarMenu1' to={'/'}>MAIN</Link>
        //     <Link className='navbarMenu2' to={'/about'}>ABOUT</Link>
        //     <Link className='navbarMenu3' to={'/'}>SERVICE</Link>
        //     <Link className='navbarMenu4' to={'/'}>CONTACT</Link>



        // </div>
        // </div>
        <div className='NavigationBar'>
         <header>
        
          <nav className="Nav">
            <span className="Nav_title">UNPEIL</span>
            <div className="Navi">
              <a className="Navs" href="#main">
              MAIN
              </a>
              <a className="Navs" href="#about">
              ABOUT
              </a>
              <a className="Navs" href="#service">
              SERVICE
              </a>
              <a className="Navs" href="#contact">
              CONTACT
              </a>
            </div>
          </nav>
          </header>
        
      </div>
    )
}

export default NavigationBar;