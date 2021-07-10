import React, { Fragment, useEffect } from 'react';
import { Button, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { getFilters, setSelectedFilters } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { Selector } from "./selector/Selector";

const Filter = () => {
    const { filterWrapper, button, buttonWrapper } = useStyles();
    const dispatch = useDispatch();
    const colors = useSelector(({filtersReducer}: any) => filtersReducer.colors);
    const manufacturers = useSelector(({filtersReducer}: any) => filtersReducer.manufacturers);
    /*
    In best practice, we should not use multiple states in function component with useState
    But in this case, I decided to go in this way, because I clearly understand that I don't have any other filters.
     */
    const [filter, setFilter] = React.useState<{ color: string, manufacturer: string}>({
        color: '',
        manufacturer: ''
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string | any; value: unknown; }>) => {
        setFilter(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleFilters = () => {
        dispatch(setSelectedFilters(filter));
    }

    useEffect(() => {
        dispatch(getFilters());
    }, [dispatch]);

    return (
        <Fragment>
            <Paper variant="outlined" square className={filterWrapper}>
                <Selector
                    options={colors}
                    optionDefaultValue={'All car colors'}
                    selectLabel={'Color'}
                    selectValue={filter.color}
                    selectId={'color-select'}
                    selectName={'color'}
                    handleChange={handleChange}
                />
                <Selector
                    options={manufacturers}
                    optionDefaultValue={'All manufacturers'}
                    selectLabel={'Manufacturer'}
                    selectValue={filter.manufacturer}
                    selectId={'manufacturer-select-label'}
                    selectName={'manufacturer'}
                    handleChange={handleChange}
                />
                <div className={buttonWrapper}>
                    <Button variant="contained" color='primary' disableRipple className={button} onClick={handleFilters}>
                        Filter
                    </Button>
                </div>
            </Paper>
        </Fragment>
    );
};

export { Filter };
