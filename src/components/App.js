import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse, headShake  } from 'react-animations';
import brocab from '../brocabulary';

import Title from './Title';
import Shatter from './Shatter';
import BroWord from './BroWord';

const pulseAnimation = keyframes`${pulse}`;
const headShakeAnimation = keyframes`${headShake}`;

const StyledApp = styled.div`
  padding: 20px;
  padding-top: 50px;
  text-align: center;
  height: 100%;
`;

const MuteButton = styled.div`
  cursor: pointer;
  font-size: 1em;
`;

class App extends Component {

  state={
    fistAnimation: pulseAnimation,
    appAnimation: "",
    shatter: false,
    mute: true,
    randomBroWord: "",
  }

  componentDidMount() {
    this.poundIt(false);
  }

  playSound = () => {
    return new Promise((resolve) => {
      var snd = new Audio("punch.wav");
      snd.load();
      if (this.state.mute) {
        snd.muted = true;
      }
      const play = snd.play();
      resolve(play)
    })
  }

  poundIt =  (showWord) => {
    this.playSound().then(() => {
      this.shatter();
      if (showWord) this.randomBroWord();
      this.setState({
        fistAnimation: "",
      }, () => {
        this.setState({
          fistAnimation: pulseAnimation,
        })
      })
    })
  }

  shatter = () => {
    this.setState(prevState => ({
      shatter: !prevState.shatter,
      appAnimation: headShakeAnimation,
    }), () => {
      setTimeout(() => {
      this.setState(prevState => ({
        shatter: !prevState.shatter,
        appAnimation: "",
      }))
      }, 1000)
    })
  }

  randomBroWord = () => {
    const randomNumber = Math.floor(Math.random() * brocab.length);
    this.setState({
      randomBroWord: brocab[randomNumber]
    })
  }

  render() {
    return (
      <StyledApp 
        style={{
          animation: `1.5s ${this.state.appAnimation}`,
        }}
      > 
      { this.state.shatter &&
          <Shatter />
      }
        <Title />
        <div>
          <img src="fist.png" 
            alt="fist"
            onClick={this.poundIt}
            style={{
              cursor: "pointer", 
              animation: `.5s ${this.state.shatter ? this.state.fistAnimation: ""}`,
              marginTop: 1 + "%",
            }} 
          />
        </div>

        <MuteButton onClick={() => this.setState(prevState => ({mute: !prevState.mute}))}>  
       
        { this.state.mute &&
          <img 
            src="mute-icon.png" 
            alt="mute icon" 
            height={15} 
            onClick={() => this.setState(prevState => ({mute: !prevState.mute}))}
            />
        } &nbsp;
        {this.state.mute ? "play sound" : "mute sound"}
         </MuteButton>
        <br />
        <BroWord randomBroWord={this.state.randomBroWord}/>
        { !this.state.randomBroWord &&
            <h3>A brocabulary of {brocab.length} and counting</h3>        }
      </StyledApp>
    );
  }
}

export default App;
