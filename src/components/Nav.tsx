import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/leadership">Leadership</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
export default Nav; 