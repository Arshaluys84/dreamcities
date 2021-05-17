import { CityItem } from "./citiesItem";
import styles from "./citiesList.module.css";

export const CitiesList = (props) => {
  return (
    <ul className={styles.list}>
      {props.cities.map((city) => {
        return (
          <CityItem
            key={city.id}
            id={city.id}
            title={city.title}
            image={city.image}
            address={city.address}
            description={city.description}
          />
        );
      })}
    </ul>
  );
};
