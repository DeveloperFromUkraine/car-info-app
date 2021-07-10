import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@material-ui/core";
import { fetchCarByStockNumber } from "../../../api/car-api/fetchCarByStockNumber";
import { carInformation } from "../../../helper/carInfo";
import { useStyles } from "./styles";

const CarInfo = (props: { match: { params: { stockNumber: string } } }) => {
    const { root, media, button, buttonWrapper, carInfoBox } = useStyles();
    const carStockNumber = props.match.params.stockNumber;
    const [carInfo, setCarInfo] = useState<any>();

    useEffect(() => {
        fetchCarByStockNumber({stockNumber: carStockNumber})
            .then((res: { data: { car: Object } }) => setCarInfo(res.data.car));
    }, [carStockNumber]);

    const carDetails = carInformation(carInfo);

    const handleSave = () => {
        const existingEntries = JSON.parse(localStorage.getItem("favoriteCars") || '[]');
        if (!existingEntries.find((entries: { stockNumber: number }) => entries.stockNumber === carInfo?.stockNumber)) {
            existingEntries.push(carInfo);
            localStorage.setItem("favoriteCars", JSON.stringify(existingEntries));
        }
    };

    return (
        <Grid container className={root}>
            {
                carInfo && (
                    <>
                        <header>
                            <CardMedia
                                component="img"
                                className={media}
                                image={carInfo?.pictureUrl}
                                title="Contemplative Reptile"
                            />
                        </header>
                        <Box className={carInfoBox}>
                            <Grid container spacing={4}>
                                <Grid item xs={7}>
                                    <Typography variant="h4" gutterBottom>
                                        {carInfo?.manufacturerName} {carInfo?.modelName}
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        {carDetails}
                                    </Typography>
                                    <Typography>
                                        This car is currently available and can be delivered as soon
                                        as tomorrow morning. Please be aware that delivery times shown
                                        in this page are not definitive and may change due to bad
                                        weather conditions.
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Box
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="stretch"
                                                paddingTop={1}
                                                px={1}
                                            >
                                                <Typography gutterBottom variant="body2">
                                                    If you like this car, click the button and save it in
                                                    your collection of favourite items.
                                                </Typography>
                                                <CardActions className={buttonWrapper}>
                                                    <Button
                                                        color="primary"
                                                        variant="contained"
                                                        disableRipple
                                                        className={button}
                                                        onClick={handleSave}>
                                                        Save
                                                    </Button>
                                                </CardActions>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                )
            }
        </Grid>
    );
};

export { CarInfo };
