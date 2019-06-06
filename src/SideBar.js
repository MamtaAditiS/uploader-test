import React from 'react'
import { tsPropertySignature } from '@babel/types';
 

const SideBar = ({props}) => {
    return (<div>
        <ul className="sidebar"> 
            <li className="file-upload-block">
                <p>Files</p> 
                <img className="upload-img"  onClick={props.open} src={require('./assets/upload.png')}></img>
            </li>
        </ul>
    </div>)
}

export default SideBar;