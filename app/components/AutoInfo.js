import React from 'react';
import PropTypes from 'prop-types';

class UploadPhoto extends React.Component {
    render() {
        return (
            <form action="#">
                <input type="file" name="pic" accept="image/*" />
                <input type="submit" />
            </form>
        )
    }
}

UploadPhoto.PropTypes = {
    photo: PropTypes.string.isRequired
}

export default class AutoInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <UploadPhoto />
            </React.Fragment>
        )
    }
}