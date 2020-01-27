import React, {Component} from 'react';
import Aux from '../../hoc/auxiliary';
import './BurgerBuilder.css';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            cheese:1,
            salad: 1,
            bacon: 2,
            meat: 1
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;