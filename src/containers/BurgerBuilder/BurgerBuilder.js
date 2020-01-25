import React, {Component} from 'react';
import Aux from '../../hoc/auxiliary';
import './BurgerBuilder.css';

class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <p className="burger">Burger</p>
                <p>Burger Controls</p>
            </Aux>
        )
    }
}

export default BurgerBuilder;