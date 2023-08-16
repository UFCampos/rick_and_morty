import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions'
import styles from './Card.module.css'
import './anim.css'
import { CSSTransition } from 'react-transition-group'

const Card = ({ name, status, species, gender, origin, image, onClose, id, removeFav, addFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false)
   const [cardMount, setCardMount] = useState(false)

   useEffect(() => {
      setCardMount(true)


      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
         setCardMount(false)
      }
         , [myFavorites, id]);
   });

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({ id, name, status, species, gender, origin, image })
      }
   }

   return (
      <CSSTransition in={cardMount} timeout={600} classNames="fade">
         <div className={styles['card-wrap']}>
            <div className={styles.card}>
               <div className={styles.buttons}>
                  {
                     isFav ? (
                        <button className={styles.button} onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button className={styles.button} onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <button className={styles.button} onClick={() => onClose(id)}>X</button>
               </div>
               <Link to={`/detail/${id}/`} >
                  <h3 >{name}</h3>
                  <h3>{gender}</h3>
               </Link>
               <Link to={`/detail/${id}/`} >
                  <img className={styles.img} src={image} alt='' />
               </Link>
            </div>
         </div>
      </CSSTransition>
   );
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
