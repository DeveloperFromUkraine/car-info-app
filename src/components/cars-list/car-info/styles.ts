import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(3.75),
            display: 'flex',
            flexDirection: 'column'
        },
        carInfoBox: {
            maxWidth: 900,
            margin: "auto"
        },
        media: {
            height: 300,
            marginBottom: 24,
            objectFit: 'contain',
            width: '100%'
        },
        buttonWrapper: {
            justifyContent: 'flex-end',
            display: 'flex',
        },
        button: {
            color: 'white',
            minWidth: 150
        }
    }),
);
