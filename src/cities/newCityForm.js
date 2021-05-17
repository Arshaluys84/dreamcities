import { useRef } from "react";
import { Card } from "../ui/card";
import styles from "./newCityForm.module.css";

export const NewCityForm = ({onAddCity}) => {
    const titleRef=useRef()
    const imageRef=useRef()
    const addressRef=useRef()
    const descriptionRef=useRef()

    const submitHandler=(e)=>{
        e.preventDefault()
        const cityData={
            tilte:titleRef.current.value,
            image:imageRef.current.value,
            address:addressRef.current.value,
            description:descriptionRef.current.value
        }
        onAddCity(cityData)
    }
  
  return (
   
      <Card>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="title">Add Title</label>
            <input type="text" required id="title" ref={titleRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="image">Add Image</label>
            <input type="url" required id="image" ref={imageRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="address">Add Address</label>
            <input type="text" required id="address" ref={addressRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="description">Add Description</label>
            <textarea type="text" required id="description"  ref={descriptionRef} rows='5'/>
          </div>
          <div className={styles.actions}>
              <button>Add City</button>
          </div>
        </form>
      </Card>
   
  );
};
