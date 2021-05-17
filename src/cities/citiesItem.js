import { useContext } from "react";
import { FavoriteContext } from "../store/favorite-context";
import { Card } from "../ui/card";
import styles from "./citiesItem.module.css";
export const CityItem = ({ id, image, title, address, description }) => {
  const FavContext = useContext(FavoriteContext);
  const isFav = FavContext.isFavorite(id);
  const toggleFavorite = () => {
    if (isFav) {
      FavContext.removeFavorite(id);
    } else {
      FavContext.addFavorite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavorite}>
            {isFav ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
