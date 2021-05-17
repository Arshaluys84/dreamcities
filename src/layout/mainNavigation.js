import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../store/favorite-context";
import styles from "./mainNavigation.module.css";

export const MainNavigation = () => {
 const favContext= useContext(FavoriteContext)
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>DreamCities</Link>
      <nav>
        <ul>
          <li>
            <Link to="/">AllCities</Link>
          </li>
          <li>
            <Link to="/add-new-city">Add new city</Link>
          </li>
          <li>
            <Link to="/favorites">My favorites
            <span className={styles.badge}>{favContext.totalFavorites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
