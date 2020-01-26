import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props)=>{

    let burgerIngredients = Object.keys(props.ingredients).map(
        ingredient=>{
            // console.log([...Array(props.ingredients[ingredient])])
            return [...Array(props.ingredients[ingredient])].map(
                (_,i)=>{
                    return <BurgerIngredient key={ingredient+i} type={ingredient} />
                }
            )
        }
    ).reduce((arr,el)=>{
        return arr.concat(el)
    },[])

    if(burgerIngredients.length===0){
        burgerIngredients=<p>Please add the various toppings</p>
    }
    // console.log(burgerIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;