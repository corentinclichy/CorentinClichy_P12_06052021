function NavBar() {
  return (
    <nav className="flex-1">
      <ul className="flex flex-1 justify-between">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Réglages</a>
        </li>
        <li>
          <a href="/">Communauté</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
