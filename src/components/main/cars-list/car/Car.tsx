import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    media: {
        height: 80,
        width: 80,
        margin: 30,
        objectFit: 'contain'
    },
});

const Car = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.media}
                image='https://auto1-js-task-api--mufasa71.repl.co/images/car.svg'
                title="Contemplative Reptile"
            />
            <div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary">
                        View details
                    </Button>
                </CardActions>
            </div>
        </Card>
    );
};

export { Car };
