import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./store/store";

import './index.scss';

const theme = createMuiTheme({
    palette: {
        primary: orange,
    },
});

const store = configureStore();
const target =  document.getElementById('root');

const renderApp = () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>,
        target
    )
}
renderApp();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
