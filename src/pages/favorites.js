import { useContext } from "react";
import { CitiesList } from "../cities/citiesList";
import { FavoriteContext } from "../store/favorite-context";

export const Favorites = () => {
  const favContext = useContext(FavoriteContext);
  let content;

  if (favContext.totalFavorites === 0) {
    content = <p>You do not have favorite city yet</p>;
  } else {
    content = <CitiesList cities={favContext.favorites} />;
  }

  return (
    <section>
      <h2>My Favorites</h2>
      {content}
    </section>
  );
};
