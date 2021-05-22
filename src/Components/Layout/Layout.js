import modules from './Layout.module.css';
import strings from '../Extensions/Strings';
import EmptyListWarning from "../List/Empty/EmptyListWarning";
import RecipeList from "../List/RecipeList";

const Layout = (props) => {

    const noRecipes = () => {
        return <EmptyListWarning title={strings.noRecipesAdded}/>
    };

    const createRecipeList = (recipes) => {
        return <RecipeList
            recipes={recipes}
        />
    };

    const renderRecipes = (recipes) => {
        if(recipes.length === 0) {
            return noRecipes();
        } else {
            return createRecipeList(recipes);
        }
    };

    return <div className={modules.layout}>
        {renderRecipes(props.recipes)}
    </div>
};

export default Layout;