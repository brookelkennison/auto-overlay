import React from 'react';
import PropTypes from 'prop-types';

function NavBar () {
    return (
        <div>
            <nav>
                <h1>Auto Overlay</h1>
            </nav>
        </div>
    )
}

class UploadPhoto extends React.Component {
    render() {
        return (
            <div>
                <h3>Upload Image</h3>
                <form action="#">
                    <input type="file" name="pic" accept="image/*" />
                </form>
            </div>
        )
    }
}

UploadPhoto.propTypes = {
    photo: PropTypes.string
}

class InputFeatures extends React.Component {
    render() {
        return (
            <div>
                <h3>Add Features</h3>
                <form>
                    <p>Feature 1:</p>
                    <input type='text' name='name' />
                    <p>Feature 2:</p>
                    <input type='text' name='name' />
                    <p>Feature 3:</p>
                    <input type='text' name='name' />
                    <p>Feature 4:</p>
                    <input type='text' name='name' />
                </form>
            </div>
        )
    }
}

export default class AutoInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <br />
                <UploadPhoto />
                <br />
                <InputFeatures />
            </React.Fragment>
        )
    }
}