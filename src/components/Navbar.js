const Navbar = () => {
  return (
    <nav className="navbar">
      {/* give nav a class of navbar */}
      <h1>Bestemming onbekend</h1>
      <div className="links">
        <a href="/">Introductie</a>
        <a href="/onderzoek">Onderzoek</a>
      </div>
    </nav>
  );
}

export default Navbar;