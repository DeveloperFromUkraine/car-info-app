import React, { Fragment, useEffect, useState } from 'react';
import { Car } from "./car/Car";
import { Button, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import './Car-list.scss';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        paginationWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }),
);
const CarsList = () => {
    const classes = useStyles();
    const FIRST_PAGE = 1;
    const [availablePages, setAvailablePages] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setAvailablePages(10)
    }, []);

    const handleAbove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.value === String(availablePages)) {
            setCurrentPage(Number(e.currentTarget.value));
        } else if(currentPage !== availablePages) {
            setCurrentPage(prev => prev + 1);
        }
    }

    const handleBelow = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.value === String(FIRST_PAGE)) {
            setCurrentPage(1);
        } else if(currentPage > FIRST_PAGE) {
            setCurrentPage(prev => prev - 1)
        }
    }

    return (
        <Fragment>
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <div className={classes.paginationWrapper}>
                <Button size="small" onClick={handleBelow} value={1} color='primary'>
                    First
                </Button>
                <Button size="small" onClick={handleBelow} value={currentPage > FIRST_PAGE ? currentPage - 1 : 1} color='primary'>
                    Prev
                </Button>
                <Typography>{currentPage} of {availablePages} pages</Typography>
                <Button onClick={handleAbove} value={currentPage === availablePages ? '' : currentPage + 1} color='primary'>
                    Next
                </Button>
                <Button onClick={handleAbove} value={availablePages} color='primary'>
                    Last
                </Button>
            </div>
        </Fragment>
    );
};

export default CarsList;
