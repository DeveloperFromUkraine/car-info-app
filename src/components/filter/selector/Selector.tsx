import React, { FC } from 'react';
import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import { v4 as uuid_v4 } from "uuid";
import { useStyles } from "./styles";
import { ISelector } from "../types";

const Selector: FC<ISelector> = ({ options, optionDefaultValue, selectLabel, selectValue, selectId, selectName, handleChange }) => {
    const { formControl } = useStyles();
    return (
        <FormControl className={formControl}>
            <InputLabel shrink htmlFor={selectId}>
                {selectLabel}
            </InputLabel>
            <NativeSelect
                value={selectValue}
                onChange={handleChange}
                inputProps={{
                    name: selectName,
                    id: selectId,
                }}
            >
                <option value="">{optionDefaultValue}</option>
                {
                    options && options.map((option: string ) => (
                        <option value={option}
                                key={uuid_v4()}>
                            {option}
                        </option>
                    ))
                }
            </NativeSelect>
        </FormControl>
    );
};

export {Selector};
