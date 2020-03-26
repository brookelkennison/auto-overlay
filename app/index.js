import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AutoInfo from './components/AutoInfo';


class App extends React.Component {
    render () {
        return (
            <div>
                <AutoInfo />
            </div>
        )
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('app')
)
