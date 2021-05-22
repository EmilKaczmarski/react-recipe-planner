import './App.css';
import Layout from "./Components/Layout/Layout";
import Menu from "./Components/Menu/Menu";
import DummyRecipes from "./Components/Extensions/DummyRecipes";
import {Fab} from "@material-ui/core";
import colors from './Components/Extensions/Colors';
import {useState} from "react";
import InputRecipe from "./Components/InputRecipe/Dialog/InputRecipeDialog";
import Navigation from "./Components/Extensions/Navigation";

function App() {
    const [selectedScreen, setScreen] = useState(Navigation.recipes);
    const [isInputOpen, setInputOpen] = useState(false);

    const handleChange = (newValue) => {

    };

    const getDummyRecipes = () => {
        return DummyRecipes.recipes.map((recipe, index) => {
            return {
                ...recipe,
                key: index
            }
        });
    };

    const fabStyles = {
        position: 'sticky',
        zIndex: 1,
        backgroundColor: '#b4dbdc',
        color: colors.deepGreen
    };

    const addButtonPressed = () => {
         setInputOpen(true);
    };

    const dialogCompletion = (result) => {
        setInputOpen(false);
    }

    const displayDialogIfNeeded = () => {
        return <InputRecipe
            isOpen={isInputOpen}
            completionHandler={dialogCompletion}
        />
    }

    return (
        <div className={"App"}>
            <Fab style={fabStyles}
                 className={"fab"}
                 onClick={addButtonPressed}>
                <i className="fas fa-plus fa-2x"/>
            </Fab>
            <Menu handleChange={handleChange}/>
            <Layout recipes={getDummyRecipes()}/>
            {displayDialogIfNeeded()}
        </div>
    );
}

export default App;