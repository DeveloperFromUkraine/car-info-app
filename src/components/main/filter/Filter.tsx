import React, { Fragment } from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
} from "@material-ui/core";
import { useStyles } from "./styles";

const Filter = () => {
    const { formControl, filterWrapper, button, buttonWrapper } = useStyles();

    /*
    In best practice, we should not use multiple states in function component with useState
    But in this case, I decided to go in this way, because I clearly understand that I don't have any other filters.
     */
    const [filter, setFilter] = React.useState<{ color: string, manufacturer: string}>({
        color: 'all',
        manufacturer: 'all'
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string | any; value: unknown; }>) => {
        setFilter(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <Fragment>
            <Paper variant="outlined" square className={filterWrapper}>
                <FormControl className={formControl}>
                    <InputLabel id="color-select-label">Color</InputLabel>
                    <Select
                        labelId="color-select-label"
                        id="color-select"
                        value={filter.color}
                        onChange={handleChange}
                        name='color'
                    >
                        <MenuItem value="all">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'white'}>White</MenuItem>
                        <MenuItem value={'black'}>Black</MenuItem>
                        <MenuItem value={'red'}>Red</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={formControl}>
                    <InputLabel id="manufacturer-select-label">Manufacturer</InputLabel>
                    <Select
                        labelId="manufacturer-select-label"
                        id="manufacturer-select"
                        value={filter.manufacturer}
                        onChange={handleChange}
                        name='manufacturer'
                    >
                        <MenuItem value="all">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Volvo'}>Volvo</MenuItem>
                        <MenuItem value={'Audi'}>Audi</MenuItem>
                        <MenuItem value={'BMW'}>BMW</MenuItem>
                    </Select>
                </FormControl>
                <div className={buttonWrapper}>
                    <Button variant="contained" color='primary' disableRipple className={button}>
                        Filter
                    </Button>
                </div>
            </Paper>
        </Fragment>
    );
};

export { Filter };
