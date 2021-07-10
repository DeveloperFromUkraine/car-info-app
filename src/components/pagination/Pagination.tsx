import React, { FC, useEffect, useState } from 'react';
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface PaginationComponentProps {
    totalPages: number,
    handleCurrentPage: Function
}

const Pagination: FC<PaginationComponentProps> = ({ totalPages, handleCurrentPage }) => {
    const FIRST_PAGE = 1;
    const classes = useStyles();
    const [availablePages, setAvailablePages] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        if(totalPages > 10) {
            setAvailablePages(10);
        } else {
            setAvailablePages(totalPages);
        }
    }, [totalPages]);

    useEffect(() => {
        handleCurrentPage(currentPage)
    }, [currentPage, handleCurrentPage]);

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
    );
};

export { Pagination };
