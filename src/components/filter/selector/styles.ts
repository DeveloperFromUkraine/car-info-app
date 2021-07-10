import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: '8px 24px',
            minWidth: 120,
        },
    }),
);
