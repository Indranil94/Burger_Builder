import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'

const controls = [
    {label: "Cheese", type: "cheese"},
    {label: "Bacon", type: "bacon"},
    {label: "Salad", type: "salad"},
    {label: "Meat", type: "Meat"}
]

const buildControls = (props)=>{
    return (
        <div className={classes.BuildControls}>
           { controls.map(ctrl=>{
                return <BuildControl label={ctrl.label} />
            })}
        </div>

    )
}

export default buildControls;