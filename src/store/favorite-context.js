import { createContext, useState, useEffect } from "react";
export const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (city) => {},
  removeFavorite: (cityId) => {},
  isFavorite: (cityId) => {},
});

export const FavoriteContextProvider = ({ children }) => {
  const [usersFavorites, setUsersFavorites] = useState([]);

  const addFavorite = (city) => {
    setUsersFavorites((prev) => prev.concat(city));
  };
  const removeFavorite = (cityId) => {
    setUsersFavorites((prev) => prev.filter((city) => cityId !== city.id));
  };
  const isFavorite = (cityId) => {
    return usersFavorites.some((city) => cityId === city.id);
  };
  
 
  const context = {
    favorites: usersFavorites,
    totalFavorites: usersFavorites.length,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
  useEffect(()=>{
    let localContext=localStorage.getItem('usersFavorites')
    if (localContext){
        setUsersFavorites(JSON.parse(localContext))
    }
  },[])
  useEffect(() => {
    localStorage.setItem('usersFavorites',JSON.stringify(usersFavorites))
});

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};
