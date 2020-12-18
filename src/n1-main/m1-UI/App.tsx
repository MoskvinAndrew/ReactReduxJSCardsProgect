import React from 'react';
import {HashRouter} from 'react-router-dom';
import './App.css';
import {Provider} from "react-redux";
import store from "../m2-BLL/Redux/reduxStore";
import Main from "./Main";

    const isInitiallizedApp = useSelector<RootState, boolean>(state => state.app.isInitializedApp)
    const appStatus = useSelector<RootState, StatusPageType>(state => state.app.status)
    const dispatch = useDispatch()

    //for initialization
    useEffect(() => {
        dispatch(initializedAppThunk())
    })

    if (!isInitiallizedApp || appStatus == 'loading') {
        return <div className={'circular__progress'}>
            <CircularProgress/>
        </div>
    }
    // --- for initialization---

    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <>
                        <Main/>
                    </>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
