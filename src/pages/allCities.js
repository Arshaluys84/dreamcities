import { useEffect, useState } from "react";
import { CitiesList } from "../cities/citiesList";


//import { CITYDATA } from "../cityData";

export const AllCities = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityData, setCityData] = useState([]);
 
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://dreamcities-d9a46-default-rtdb.firebaseio.com/cities.json`)
      .then((response) => response.json())
      .then((data) => {
       
        const cities=[]
        for (const key in data) {
          const city = {
            id: key,
            ...data[key],
          };
          cities.push(city)
        }
        setIsLoading(false);
        setCityData(cities);
      });
  }, []);

  if (isLoading) {
    return <p>LOADING....</p>;
  }
  return (
    <div>
      <h1>All Cities</h1>
      <CitiesList cities={cityData} />
    </div>
  );
};
