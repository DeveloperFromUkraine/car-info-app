import React from 'react';
import { Filter } from "./filter/Filter";
import CarsList from "./cars-list/Cars-list";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(3.75)
        },
    }),
);

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
