import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Themes from './themes'

class SelectTheme extends Component {
  render () {
    return (
      <div className='box25'>
        <div className="dropdown">
          <button className="dropbtn">Pick a Theme:</button>
          <div className="dropdown-content">
            <a href="#1" onClick={this.props.selectGoonies}>The Goonies</a>
            <a href="#1" onClick={this.props.selectBigHeroSix}>Big Hero Six</a>
            <a href="#1" onClick={this.props.selectAChristmasStory}>A Christmas Story</a>
          </div>
        </div>
      </div>
    )
  }
}

class Main extends Component {
  constructor (props){
    super(props);
    this.state = {
      selectedTheme : '',
      selectedWord: ''
    }
    this.selectGoonies=this.selectGoonies.bind(this);
    this.selectBigHeroSix=this.selectBigHeroSix.bind(this);
    this.selectAChristmasStory=this.selectAChristmasStory.bind(this);
  }
  selectGoonies () {
    this.setState(function(){
      return {
        selectedTheme: 'theGoonies'
      }
    })
    console.log(this.state.selectedTheme)
  }
  selectBigHeroSix () {
    this.setState(function(){
      return {
        selectedTheme: 'bigHeroSix'
      }
    })
  }
  selectAChristmasStory () {
    this.setState(function(){
      return {
        selectedTheme: 'aChristmasStory'
      }
    })
  }
  selectedWord () {
    this.setState(function(){
      return {
        selectedWord: 'hi',
      }
    })
  }
  render() {
    return (
      <SelectTheme
        selectGoonies={this.selectGoonies}
        selectBigHeroSix={this.selectBigHeroSix}
        selectAChristmasStory={this.selectAChristmasStory}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">


        </div>
        <div className="App-intro">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
