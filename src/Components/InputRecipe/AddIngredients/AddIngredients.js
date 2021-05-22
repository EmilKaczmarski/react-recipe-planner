import AddIngredient from "./AddIngredient/AddIngredient";
import modules from "./AddIngredients.module.css";
import {Button} from "@material-ui/core";
import {useState} from "react";

const AddIngredients = () => {

    const addButtonHandler = () => {
        console.log(ingredients)
        addIngredient([...ingredients, ''])
    }

    const [ingredients, addIngredient] = useState([]);

    const renderIngredients = () => {
        return ingredients.map( () => {
            return <AddIngredient/>
        })
    }

    return <div className={modules.ingredients}>
        {renderIngredients()}
        <Button color={"primary"} onClick={addButtonHandler}>
            <i className="fas fa-plus"/>
        </Button>
    </div>
}


export default AddIngredients;