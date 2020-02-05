import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UploadedPhoto from './components/UploadedPhoto';

class App extends React.Component {
    render () {
        return (
            <div>
                <UploadedPhoto />
            </div>
        )
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('app')
)
