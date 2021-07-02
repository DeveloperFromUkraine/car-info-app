import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useHeaderStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuLink: {
            marginRight: theme.spacing(2),
        },
        logoWrapper: {
            flexGrow: 1,
        },
        logo: {
            margin: theme.spacing(2),
            width: '200px'
        }
    }),
);
