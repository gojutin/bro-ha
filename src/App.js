import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse, headShake  } from 'react-animations';
import brocab from './brocabulary';

const pulseAnimation = keyframes`${pulse}`;
const headShakeAnimation = keyframes`${headShake}`;

const StyledApp = styled.div`
  padding: 20px;
  padding-top: 50px;
  text-align: center;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 3.8em;
  font-family: 'Luckiest Guy', cursive;
`;

const BroWord = styled.h1`
  font-size: 3em;
  font-family: 'Titan One', cursive;
  background: rgba(0,0,0,.1);
  margin-top: 5%;
  color: #ffd468;
  overflow: auto;
  @media only screen and (max-width: 500px) {
    font-size: 2em;
  }
`;

const Image = styled.img`
    position: fixed;
    left: 50%;
    top: 50vh;
    transform: translate(-50%, -50%);
    z-index: 5000;
`;

const MuteButton = styled.div`
  cursor: pointer;
  font-size: 1em;
`;

const StyledHa = styled.span`
  color: #ffd468;
`;

const StyledBro = styled.span`
  color: lightgray;
`;

class App extends Component {

  state={
    fistAnimation: pulseAnimation,
    appAnimation: "",
    shatter: false,
    mute: true,
    randomBroWord: "",
  }

  playSound = () => {
    return new Promise((resolve) => {
    if (!this.state.mute) {
      var snd = new Audio("punch.wav");
      const play = snd.play();
      resolve(play)
    } else resolve();
  
    })
  }

  poundIt =  () => {
    this.playSound().then(() => {
      this.shatter();
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
    this.randomBroWord();
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
        <Image 
          height={90 + "%"}
          src="shattered.png" 
          alt="shattered screen" 
          style={{
            zIndex: 7000
          }}
        />
      }
        <Title>
          <StyledBro>BRO</StyledBro>-
          <StyledHa>HA!</StyledHa>
        </Title>
        <div>
          <img src="fist.png" 
            alt="fist"
            onClick={this.poundIt}
            style={{
              cursor: "pointer", 
              animation: `.5s ${this.state.shatter ? this.state.fistAnimation: ""}`,
              marginTop: 3 + "%",
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
        <BroWord style={{zIndex: 10000}}>{this.state.randomBroWord}</BroWord>
      </StyledApp>
    );
  }
}

export default App;
