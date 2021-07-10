import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(3.75),
            display: 'flex',
            flexDirection: 'column',
            width: 'auto'
        },
    }),
);
