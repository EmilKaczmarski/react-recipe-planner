import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import modules from './RecipeCard.module.css';
import strings from "../../Extensions/Strings";

const RecipeCard = (props) => {

    const buttonStyles = {
        delete: {
            color: "#e10032",
            fontSize: "0.9em"
        },
        edit: {
            color: "#055a5b",
            fontSize: "0.9em"
        }
    }

    return <div className={modules.card}><Card>
        <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
                {props.model.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.model.recipe}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size={"small"} style={buttonStyles.delete} className={modules.delete}>
                {strings.buttonDelete}
            </Button>
            <Button size={"small"} style={buttonStyles.edit}>
                {strings.buttonEdit}
            </Button>
        </CardActions>
    </Card></div>
};

export default RecipeCard;