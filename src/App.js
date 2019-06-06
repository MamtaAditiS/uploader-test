import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import Dropzone from 'react-dropzone';
import { saveFile , getFile } from "./utils";


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <SideBar open={this.uploadFile}/>
          <Dropzone 
            ref='dropzone'
            onDrop={ (files) =>  {
              console.log(files)
              saveFile('file', files[0])
            }}
          />
        </header>
      </div>
    );
  }

}

export default App;
