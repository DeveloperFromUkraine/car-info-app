import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: '8px 24px',
            minWidth: 120,
        },
        filterWrapper: {
            display: 'flex',
            flexDirection: 'column',
            width: theme.spacing(44),
            height: theme.spacing(32),
            justifyContent: 'space-between',
        },
        buttonWrapper: {
            margin: theme.spacing(3),
            justifyContent: 'flex-end',
            display: 'flex',
        },
        button: {
            color: 'white',
            minWidth: 150
        }
    }),
);
