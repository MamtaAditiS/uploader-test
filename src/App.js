import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import Dropzone from 'react-dropzone';
import { saveFile , getFile } from "./utils";


class App extends React.Component {

  openUploader = () => {
    console.log('entered ', this.refs.dropzone)
		let dropzone = this.refs.dropzone;
		dropzone.open();
	}
  render () {
    console.log(this.refs.dropzone , Dropzone,"ref")
    return (
      <div className="App">
        <header className="App-header">
          <SideBar open={this.openUploader}/>

          <Dropzone ref='dropzone' onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({getRootProps}) => (
              <div {...getRootProps()}>
                <p>Drop files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
        </header>
      </div>
    );
  }

}

export default App;
