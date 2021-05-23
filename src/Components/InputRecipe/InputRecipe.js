import {
    Button,
    createMuiTheme,
    debounce,
    DialogActions,
    makeStyles,
    MuiThemeProvider,
    TextField
} from "@material-ui/core";
import Strings from "../Extensions/Strings";
import ButtonType from "../Extensions/Navigation";
import {useCallback, useReducer, useState} from "react";
import AddIngredients from "./AddIngredients/AddIngredients";
import Colors from "../Extensions/Colors";

const fieldIds = {
    name: 'name',
    desc: 'description'
}

const InputRecipe = (props) => {

    const completion = (result) => {
        props.completionHandler(result);
    }

    const inputReducer = (state, action) => {
        console.log(action.val)
        return {
            ...state,
            [action.type]: action.value,
            [action.type + 'Valid']: action.val.trim() === ''
        }
    };

    const [inputState, dispatchInput] = useReducer(
        inputReducer,
        {
            name: '',
            nameValid: false,
            description: '',
            descriptionValid: false
        }
    );

    const textFieldInput = {
        name: '',
        description: ''
    }
    const displayErrorInput = {
        name: false,
        description: false
    }

    const debounceInput = useCallback(
        debounce(nextValue => saveTextInput(nextValue), 300),
        [],
    );

    const handleTextChange = (event) => {
        debounceInput(event);
    }
    const saveTextInput = (event) => {
        dispatchInput(
            {
                type: event.target.id,
                val: event.target.value
            }
        );
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: Colors.deepGreen
            },
            secondary: {
                main: Colors.green
            }
        }
    });


    const textFieldStyles = {
        marginBottom: 15
    }

    return <div>
        <MuiThemeProvider theme={theme}>
            <TextField
                autoFocus
                style={textFieldStyles}
                id={fieldIds.name}
                label={Strings.name}
                error={inputState.nameValid }
                helperText={inputState.nameValid ? '' : Strings.nameError }
                type="text"
                onChange={handleTextChange}
                variant="outlined"
                fullWidth
                color={"primary"}
            />
            <TextField
                id={fieldIds.desc}
                style={textFieldStyles}
                label={Strings.description}
                multiline
                rows={4}
                variant="outlined"
                helperText={inputState.descriptionValid ? '': Strings.descriptionError}
                error={inputState.descriptionValid}
                onChange={handleTextChange}
                fullWidth
            />
            <AddIngredients/>
            <DialogActions>
                <Button variant="outlined"
                        onClick={completion.bind(this, ButtonType.cancel)}
                        color={"primary"}>
                    {Strings.buttonCancel}
                </Button>
                <Button variant="contained"
                        color={"primary"}
                        onClick={completion.bind(this, ButtonType.submit)}
                        disabled={true}
                >
                    {Strings.buttonSubmit}
                </Button>
            </DialogActions>
        </MuiThemeProvider>
    </div>
};

export default InputRecipe;