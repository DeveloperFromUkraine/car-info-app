import React, { FC } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography
} from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';

import { useStyles } from "./styles";
import { ICar } from "../types";
import { carInformation } from "../../../helper/carInfo";

interface ICarFC {
    car: ICar,
    isDeletable?: boolean,
    handleRemoveFromFavoriteItem?: any
}

const Car: FC<ICarFC> = ({ car, isDeletable, handleRemoveFromFavoriteItem }) => {
    const classes = useStyles();
    const carInfo = carInformation(car);
    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                className={classes.media}
                image={car.pictureUrl}
                title="Contemplative Reptile"
            />
            <div>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {car.manufacturerName} {car.modelName}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                        {carInfo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link component={RouterLink} to={`/car-info/${car.stockNumber}`} color="primary">
                        View details
                    </Link>
                </CardActions>
            </div>
            {
                isDeletable && <button
                    name={car.stockNumber.toString()}
                    className={classes.removeButton}
                    onClick={handleRemoveFromFavoriteItem}>
                    Remove From Favorite
                </button>
            }
        </Card>
    );
};

export { Car };
