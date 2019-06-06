import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { saveFile } from './utils';

const UploadModal = (props) => {
    return (
        <div id="myModal" className="cus-modal">
            <div className="cus-modal-content">
                {props.children}
                <span className="cus-close" onClick={props.closeModal}>Close</span>
            </div>
        </div >
    );
}

export default UploadModal