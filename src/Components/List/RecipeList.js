import RecipeCard from "./RecipeCard/RecipeCard";
import modules from './RecipeList.module.css';

const RecipeList = (props) => {
    const renderRecipes = () => {

        return props.recipes.map((recipe) => {
            return <RecipeCard
                key={recipe.key}
                model={recipe}
            />
        });
    };

    return <div className={modules.container}>
        <div className={modules.container}>
            {renderRecipes()}
        </div>
    </div>
};

export default RecipeList;