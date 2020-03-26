import React from 'react';
import PropTypes from 'prop-types';
import {Image, Transformation} from 'cloudinary-react';

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
        var myWidget = cloudinary.createUploadWidget({
                cloudName: 'dvxg1donf',
                uploadPreset: 'my_preset'
            },
            (error, result) =>
            {
                if (!error && result && result.event === "success")
                {
                    console.log('Done! Here is the image info: ', result.info);
                }
            }
        )
        document.getElementById("upload_widget").addEventListener("click", function(){
            myWidget.open();
        }, false);
    render() {
        return (
            <div>
                <h3>Upload Image</h3>
                <form action="#">
                    <input
                        name="file"
                        type="file"
                        data-cloudinary-field="image_id"
                        data-form-data="{ 'transformation': {'crop':'limit','width':935,'height':542}}"/>
                </form>
                <button id="upload_widget" className="cloudinary-button">Upload files</button>
                <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript">
                </script>
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
    }
    handleChange = (event, inputField) => {
        this.setState({
            [inputField]: event.target.value
        })
    }
    /*Need to move handleSubmit for generate button*/
    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Add Features</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Feature 1:</p>
                    {/*Why is it {this.feat1} vs {this.state.feat1}?*/}
                    <input type='text' name='feat1' value={this.state.feat1} onChange={event => this.handleChange(event, 'feat1')} />
                    <p>Feature 2:</p>
                    <input type='text' name='feat2' value={this.state.feat2} onChange={event => this.handleChange(event, 'feat2')} />
                    <p>Feature 3:</p>
                    <input type='text' name='feat3' value={this.state.feat3} onChange={event => this.handleChange(event, 'feat3')} />
                    <p>Feature 4:</p>
                    <input type='text' name='feat4' value={this.state.feat4} onChange={event => this.handleChange(event, 'feat4')} />
                </form>
                <Image cloudName='dvxg1donf' publicId='auto_overlay.png' >
                    <Transformation width="1024" crop="scale" />
                </Image>
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
