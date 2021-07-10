import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        marginBottom: 30,
        maxHeight: 150,
        width: 'auto',
        position: 'relative'
    },
    media: {
        height: 80,
        width: 80,
        margin: 30,
        objectFit: 'contain'
    },
    cardContent: {
        padding: 9
    },
    removeButton: {
        position: 'absolute',
        right: 40
    }
});
