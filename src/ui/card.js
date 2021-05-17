import styles from './card.module.css'
export const Card =(props)=>{
    return <div className={styles.card}>
        {props.children}
    </div>
}