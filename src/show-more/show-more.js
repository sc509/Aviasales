    import styles from './show-more.module.scss'

    function ShowMore(){
        const showMore = "Показать ещё 5 билетов!"
        console.log(styles)
        return(
            <div className={styles.showMore}>
                <button className={styles.showMore__button}>{showMore.toUpperCase()}</button>
            </div>
        )
    }

    export default ShowMore;