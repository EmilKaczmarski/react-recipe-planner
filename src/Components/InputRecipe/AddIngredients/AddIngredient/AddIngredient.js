import {Button, TextField} from "@material-ui/core";
import Colors from "../../../Extensions/Colors";

const AddIngredient = () => {

    const nameFieldStyle = {
        marginTop: 10,
        marginBottom: 10,
        flexGrow: 3
    }

    const fieldStyle = {
        marginTop: 10,
        marginBottom: 10,
        flex: "50%"
    }

    const containerStyle = {
        border: "1px solid " + Colors.lightGreen,
        borderRadius: "20px",
        textAlign: "center",

        marginTop: 10,
        marginBottom: 10,
        disabled: "flex"
    }

    const bottomButtonStyle = {
        textAlign: "left",
        marginTop: 10,
        marginBottom: 10
    }

    return <div>
        <div style={containerStyle}>
            <div style={fieldStyle}>
                <TextField
                    style={nameFieldStyle}
                    id="name"
                    label="Name"
                    type="text"
                    variant={"outlined"}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>

            <div>
            <TextField
                style={fieldStyle}
                id="amount"
                label="Amount"
                type="number"
                variant={"outlined"}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </div>

            <div>
            <TextField
                style={fieldStyle}
                id="unit"
                label="Unit"
                type="text"
                variant={"outlined"}
                disabled={false}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </div>
            <div style={bottomButtonStyle}>
                <Button color={"primary"}>
                    <i className="far fa-trash-alt"/>
                </Button>
            </div>
        </div>
    </div >
}

export default AddIngredient;