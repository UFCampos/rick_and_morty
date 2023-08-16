import { connect } from 'react-redux'
import Card from '../Card/Card'
import { useState } from 'react'
import { useDispatch } from'react-redux'
import { filterCards, orderCards } from '../../redux/actions'
import styles from './Favorites.module.css'
import {container} from '../Cards/Cards.module.css'


const Favorites = ({ myFavorites }) => {
    const [aux, setAux] = useState(false)
    //create local states for Filter and Order select
    const [filter, setFilter] = useState('')
    const [order, setOrder] = useState('')

    const dispatch = useDispatch()
    

    const handleOrder = (e) => {
        setAux(!aux)
        dispatch(orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    return (
        <div className={styles.cont}>
            <h1 className={styles.h1}>My Favorites</h1>
            <select name="Order" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="Filter" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <ul className={container}>
                {myFavorites.map(favorite => (
                    <Card
                        key={favorite.id}
                        id={favorite.id}
                        name={favorite.name}
                        species={favorite.species}
                        image={favorite.image}
                        />
                ))}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return { 
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)