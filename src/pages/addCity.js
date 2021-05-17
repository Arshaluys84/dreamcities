import {useHistory} from 'react-router-dom'
import { NewCityForm } from "../cities/newCityForm"

export const AddCity = () => {
    const history=useHistory()
const onAddhandler=(cityData)=>{
   
    //https://dreamcities-d9a46-default-rtdb.firebaseio.com/
 fetch(`https://dreamcities-d9a46-default-rtdb.firebaseio.com/cities.json`,
 {
    method:'POST',
    body:JSON.stringify(cityData),
    headers:{
       'Content-type':'application/json'
    }
}).then(()=>{
    history.replace('/')
})
 
}
  return <section>
      <h1>
          Add City
      </h1>
      <NewCityForm  onAddCity={onAddhandler}/>
  </section>;
};
