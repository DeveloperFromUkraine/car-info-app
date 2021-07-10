import React, { useEffect, useState } from 'react';
import { Grid } from "@material-ui/core";
import { Car } from "../cars-list/car/Car";
import { useStyles } from "./styles";
import { ICar } from "../cars-list/types";

const MyOrders = () => {
    const {root} = useStyles();
    const [myOrders, setMyOrders] = useState(JSON.parse(localStorage.getItem("favoriteCars") || '[]'));

    const handleRemoveFromFavoriteItem = (e: { target: { getAttribute: (arg0: string) => any; }; }) => {
        const stockNumber = e.target.getAttribute('name');
        setMyOrders(myOrders?.filter((myOrder: any) => (myOrder.stockNumber.toString() !== stockNumber)));
    };

    useEffect(() => {
        localStorage.setItem("favoriteCars", JSON.stringify(myOrders))
    }, [myOrders]);

    return (
       <Grid container className={root}>
            {
                myOrders?.length > 0 && myOrders.map((car: ICar) => (
                    <Car car={car}
                         key={car.stockNumber}
                         isDeletable={true}
                         handleRemoveFromFavoriteItem={handleRemoveFromFavoriteItem}/>
                ))
            }
       </Grid>
    );
};

export { MyOrders };
