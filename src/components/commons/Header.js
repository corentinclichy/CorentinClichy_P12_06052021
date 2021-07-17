// Images
import Logo from '../../assets/img/sportsee_logo.svg';

// Components
import NavBar from './NavBar';

function Header() {
  return (
    <header className="bg-black text-white flex items-center justify-between text-1xl pr-32 shadow-header h-16">
      <img src={Logo} alt="Logo SportSee" className="mr-32 ml-9 w-36" />
      <NavBar />
    </header>
  );
}

export default Header;
