import {Button, createMuiTheme, DialogActions, makeStyles, MuiThemeProvider, TextField} from "@material-ui/core";
import Strings from "../Extensions/Strings";
import ButtonType from "../Extensions/Navigation";
import {useState} from "react";
import AddIngredients from "./AddIngredients/AddIngredients";

const InputRecipe = (props) => {

    const completion = (result) => {
        props.completionHandler(result);
    }

    const textFieldInput = {
        name: '',
        description: ''
    }
    const displayErrorInput = {
        name: false,
        description: false
    }

    const [error, setError] = useState(displayErrorInput);

    const validateField = (event) => {
        console.log("validate field")
        console.log(event.name.trim()  === '')
        setError({
            name: event.name.trim() === '',
            description: event.description.trim() === ''
        });
    }

    const handleTextChange = (text) => {
        setTextInput(prevState => {
            const newValue = {
                ...prevState,
                [text.target.id]: text.target.value
            }
            validateField(newValue)
            return newValue
        })
    }

    const [textInput, setTextInput] = useState(textFieldInput);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#055a5b'

            },
            secondary: {
                main: '#167c80'
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
                id="name"
                label={Strings.name}
                error={error.name}
                helperText={error.name ? Strings.nameError : ''}
                type="text"
                onChange={handleTextChange}
                variant="outlined"
                fullWidth
                color={"primary"}
            />
            <TextField
                id="description"
                style={textFieldStyles}
                label={Strings.description}
                multiline
                rows={4}
                variant="outlined"
                helperText={error.description ? Strings.descriptionError :''}
                error={error.description}
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