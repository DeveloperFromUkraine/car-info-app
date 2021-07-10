import React, { FC, Fragment, useEffect, useState } from 'react';
import { Car } from "./car/Car";
import { getCars } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../pagination/Pagination";

const CarsList: FC = () => {

    const dispatch = useDispatch();
    const carsData = useSelector(({ carsReducer: { cars } }: any) => cars);
    const totalPages = useSelector(({ carsReducer: { totalPageCount } }: any) => totalPageCount);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const colorFilter = useSelector(({filtersReducer}: any) => filtersReducer.colorFilter);
    const manufacturerFilter = useSelector(({filtersReducer}: any) => filtersReducer.manufacturerFilter);

    useEffect(() => {
        dispatch(getCars(currentPage, manufacturerFilter, colorFilter));
    }, [currentPage, colorFilter, manufacturerFilter, dispatch]);

    const handleCurrentPage = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <Fragment>
            {
                carsData.length > 0 &&
                    <>
                        { carsData.length > 0 && (
                            carsData.map((car: any) => (
                                <Car car={car} key={car.stockNumber} />
                            ))
                        )

                        }
                        <Pagination totalPages={totalPages} handleCurrentPage={handleCurrentPage}/>
                    </>
            }

        </Fragment>
    );
};

export default CarsList;
