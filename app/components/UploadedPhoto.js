import React from 'react';
import PropTypes from 'prop-types';

function UploadPhoto (photo) {
    return (
        <form action="#">
            <input type="file" name="pic" accept="image/*" />
            <input type="submit" />
        </form>
    )
}

UploadPhoto.PropTypes = {
    photo: PropTypes.string.isRequired
}

export default class UploadedPhoto extends React.Component {
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