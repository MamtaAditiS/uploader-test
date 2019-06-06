import React from 'react'
import UploadModal from './UploadModal.js'
import Dropzone from 'react-dropzone'

const SideBar = (props) => {
    return (<div className='col-12'>
        <UploadBlock openModal={props.openModal} saveDocument={props.saveDocument} />
        <div className="col-12">
            <ul>
                {props.files && props.files.length > 0 ?
                    props.files.map((file, index) =>
                        <li key={index}
                            onClick={() =>
                                props.getFileIndex(index)
                            }>
                            {file.name}</li>)
                    : null}
            </ul>
        </div>
    </div >)
}

export default SideBar;


const UploadBlock = (props) => {
    return (<div className="cus-block">
        <div className="col-6" > <span>Files</span> </div>
        <div className="upload-img">
            <Dropzone
                multiple={false}
                onDrop={acceptedFiles => props.saveDocument(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <img src={require('./assets/upload.png')}></img>
                    </div>
                )}
            </Dropzone>
            {/* <img onClick={props.openModal} src={require('./assets/upload.png')}></img>*/}</div>
    </div>)
}