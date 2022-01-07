import './Navbar.css'
import Logo from './img/logoplan.jpg'
import { Link } from 'react-router-dom';

export default function NavBar(){

    return (
        <div>
    {/* //    < Link to='/' >
    //         <nav className='nav'>
    //             <ol>
    //                 <img className='Logo' src={Logo} alt="PDG" />
    //                 <Link to='/' className='navA'> Inicio </Link>
    //                 <Link to='./sobreNosotros' className='navA'> Sobre Nosotros </Link>
    //                 <Link to='./Reservaciones' className='navA'> Reservaciones y Contacto </Link>  
    //             </ol>            
    //         </nav>
    //     </Link>
    <> */}
    
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
</div>

    )
}