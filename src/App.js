import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import UploadModal from './UploadModal';



class App extends React.Component {
  render() {
    return (
      <div className="full-width">
        <div className="custom-width">
          <SideBar />
        </div>
        <div style={{ width: '70%' }}>
          <ul> </ul>
        </div>
      </div>
    );
  }

}

export default App;
