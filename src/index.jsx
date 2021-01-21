import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {App} from './App';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)
