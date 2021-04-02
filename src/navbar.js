import classes from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <h2>Navigation</h2>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
export default Navbar;
