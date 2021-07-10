import React from 'react';
import { Grid } from "@material-ui/core";

import { Filter } from "../filter/Filter";
import CarsList from "../cars-list/Cars-list";
import { useStyles } from "./styles";

const Main = () => {
    const { root } = useStyles();
    return (
        <Grid container className={root}>
            <Grid item xs={4}>
                <Filter />
            </Grid>
            <Grid item xs={8}>
                <CarsList />
            </Grid>
        </Grid>
    );
};

export { Main };
