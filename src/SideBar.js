import React from 'react'
import UploadModal from './UploadModal.js'

const SideBar = () => {
    return (<div>
        <div className="half-width"> <span>Files</span> </div>
        <div className="half-width"> <img className="upload-img" src={require('./assets/upload.png')}></img></div>
    </div>)
}

export default SideBar;