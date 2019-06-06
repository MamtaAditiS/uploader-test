import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { saveFile } from './utils';

export default class UploadModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        }
    }

    open = () => {
        // this.setState({ open: true })
        console.log(document.getElementById("myModal"), "myModal")
    }

    close = () => {
        this.setState({ open: false });
    }

    onDrop(files) {
        console.log(files, "files")
    }

    render() {
        return (
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <Dropzone
                        ref='dropzone'
                        onDrop={this.onDrop}
                    />
                </div>

            </div >
        );
    }
}