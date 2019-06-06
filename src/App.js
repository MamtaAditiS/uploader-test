import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import { saveFile, getFile } from './utils'

class App extends React.Component {
  state = {
    files: [],
    fileIndex: 0
  }


  openModal = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = "block"
  }
  closeModal = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = "none"
  }

  saveDocument = (acceptedfiles) => {
    let updatedFiles = acceptedfiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }))
    this.setState({ files: [...this.state.files, updatedFiles[0]] })
  }

  getFileIndex = (fileIndex) => {
    this.setState({ fileIndex })
  }


  render() {
    return (
      <div className="full-width">
        <div className="doc-sidebar">
          <SideBar
            openModal={this.openModal}
            closeModal={this.closeModal}
            saveDocument={this.saveDocument}
            files={this.state.files}
            getFileIndex={this.getFileIndex}
            selected={this.state.fileIndex}
          />
        </div>
        <div className="doc-view">
          {this.state.files.length > 0 ?
            <div className="document-window">
              <img src={this.state.files[this.state.fileIndex].preview} alt="No Image" />
            </div> : null}
        </div>
      </div >
    );
  }

}

export default App;
