import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {setMaxMinAC} from "../../../n1-main/m2-BLL/Redux/packs-Reducer";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    root: {
        width: 300,
        // border: "2px solid green",
        display:"table",
        float:'left',

    },
});

type RangeSliderTypes = {
    minCardsCount:number,
    maxCardsCount:number
}

function valuetext(value: number) {
    return `${value} cards`;
}

export const RangeSlider = (props:RangeSliderTypes) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [value, setValue] = React.useState<number[]>([props.minCardsCount, props.maxCardsCount]);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);
        dispatch(setMaxMinAC(value[0],value[1]));
    };



    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                Cards quantity range

            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    );
}