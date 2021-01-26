import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {App} from './App';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "./utils/history";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)