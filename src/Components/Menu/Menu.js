import {makeStyles, Tab, Tabs} from "@material-ui/core";
import {useState} from "react";
import modules from './Menu.module.css';
import colors from '../Extensions/Colors';
import strings from '../Extensions/Strings';
import Navigation from "../Extensions/Navigation";

const Menu = (props) => {
    const [selectedTab, setSelectedTab] = useState(Navigation.recipes);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        props.handleChange(newValue);
    };

    const useStyles = makeStyles((theme) => ({
        tab: {
            color: colors.deepGreen
        },
        indicator: {
            backgroundColor: colors.deepGreen,
            borderRadius: 12
        }
    }));

    const classes = useStyles();

    return <div className={`${modules.tabMenu} ${classes.tab}`}>
            <Tabs
                classes={{indicator: classes.indicator}}
                value={selectedTab}
                onChange={handleChange}
                variant="fullWidth"
            >
                <Tab label={strings.recipesTitle}/>
                <Tab label={strings.cookingTitle}/>
            </Tabs>
    </div>
}

export default Menu;