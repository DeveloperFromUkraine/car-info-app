import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        display: "flex",
        marginBottom: 30,
        maxHeight: 150
    },
    media: {
        height: 80,
        width: 80,
        margin: 30,
        objectFit: 'contain'
    },
});
