import React, { Component } from 'react';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content'
import Footer from './Component/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu/>
        <Header/>
        <Content class_left="order-lg-2" image_src="img/01.jpg" title="ahihi"/>
        <Content image_src="img/02.jpg" />
        <Content class_left="order-lg-2" image_src="img/03.jpg" title="ahaha"/>
        <Footer/>
      </div>
    );
  }
}

export default App;
