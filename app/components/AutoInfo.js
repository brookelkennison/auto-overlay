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
    constructor(props) {
        super(props)
        this.state = {
            feat1: '',
            feat2: '',
            feat3: '',
            feat4: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            feat1: event.target.value,
            feat2: event.target.value,
            feat3: event.target.value,
            feat4: event.target.value
        })
    }
    // Need to move handleSubmit for generate button
    handleSubmit(event){
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h3>Add Features</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Feature 1:</p>
                    <input type='text' name='feat1' value={this.feat1} onChange={this.handleChange} />
                    <p>Feature 2:</p>
                    <input type='text' name='feat2' value={this.feat2} onChange={this.handleChange} />
                    <p>Feature 3:</p>
                    <input type='text' name='feat3' value={this.feat3} onChange={this.handleChange} />
                    <p>Feature 4:</p>
                    <input type='text' name='feat4' value={this.feat4} onChange={this.handleChange} />
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
