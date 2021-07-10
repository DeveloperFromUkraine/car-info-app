import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
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
