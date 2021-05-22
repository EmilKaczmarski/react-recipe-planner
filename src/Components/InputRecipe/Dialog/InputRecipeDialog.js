import {Dialog, DialogContent} from "@material-ui/core";
import InputRecipe from "../InputRecipe";

const InputRecipeDialog = (props) => {

    const completion = (result) => {
        props.completionHandler(result);
    }

    return <Dialog open={props.isOpen}>

        <DialogContent>
            <InputRecipe
                completionHandler={completion}
            />
        </DialogContent>
    </Dialog>
}

export default InputRecipeDialog;