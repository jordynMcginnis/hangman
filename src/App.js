import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import themes from './themes'

function SelectTheme (props) {
  const letters = ("abcdefghijklmnopqrstuvwxyz").split("");

  return (
    <div>
      <div className='box25'>
        <div className="dropdown">
          <button className="dropbtn">Pick a Theme:</button>
          <div className="dropdown-content">
            <a href="#1" onClick={props.selectTheme.bind(null, 'theGoonies')}>The Goonies</a>
            <a href="#1" onClick={props.selectTheme.bind(null, 'bigHeroSix')}>Big Hero Six</a>
            <a href="#1" onClick={props.selectTheme.bind(null, 'aChristmasStory')}>A Christmas Story</a>
          </div>
        </div>
      </div>
      <p> {props.selectedTheme}</p>
      <div className='box25'>
        <div className="dropdown">
          <button className="dropbtn">Pick a Letter:</button>
          <ul className="dropdown-content">
            {letters.map(function(letter){
              return (
                <li onClick={props.checkWord.bind(null, letter)} key={letter}> {letter} </li>
              )
            }.bind(this))}
          </ul>
        </div>
      </div>
    </div>
  )
}

class Main extends Component {
  constructor (props){
    super(props);
    this.state = {
      selectedTheme : '',
      selectedWord: '',
      guessedWord: [],
      winner: 'no'
    }
    this.selectTheme = this.selectTheme.bind(this);
    this.checkWord = this.checkWord.bind(this);
  }
  selectTheme (theme) {
    var word = themes[theme][Math.floor(Math.random() * 5)];

    this.setState(function(){
      return {
        selectedTheme: theme,
        selectedWord: word
      }
    })
  }
  checkWord (letter) {
      var result = this.state.guessedWord
      var name = this.state.selectedWord
      if(result.length === 0){
        for(var i = 0; i < name.length; i++){
          if(name[i] === ' '){
            result.push(' ')
          } else {
            result.push('_')
          }
        }
      } else {
        for(var i = 0; i < result.length; i++){
          if(result[i] === '_'){
            for(var i = 0; i < name.length; i++){
              if(name[i] === letter){
                result[i] = letter;
              }
            }
          }
        }
        }
        if(result.indexOf('_') === -1){
          result = result.join('')
        }
        this.setState(function(){
          return {
            guessedWord: result
          }
        })
        this.checkWinner()
 }
 checkWinner() {
  if(this.state.selectedWord === this.state.guessedWord){
    this.setState(function(){
      return {
        winner: 'YES'
      }
    })
  }
 }
  render() {
    return (
      <div>
        <SelectTheme
          selectTheme={this.selectTheme}
          selectedTheme={this.state.selectedTheme}
          checkWord={this.checkWord}
        />
        <p> {this.state.guessedWord.map(function(letter){
          return letter
        })}</p>
      </div>
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
