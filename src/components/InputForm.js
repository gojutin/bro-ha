import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

import Fist from './Fist';
import Checkbox from './Checkbox';

const pulseAnimation = keyframes`${pulse}`;

const StyledInput = styled.input`
  width: 50%;
  border-radius: 5px;
  font-size: 16px;
  line-height: 30px;
  padding: 0px 5px;
  margin: 5px;
  border: 1px solid gray;
  border-shadow: none;
  outline: none;
`;

class InputForm extends Component {

  state={
    inputValue: "",
    playSound: "",
    fistAnimation: pulseAnimation,
  }

  componentDidMount() {
    this.props.poundIt(null, false);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handlePlaySound()
    if (!this.state.inputValue) {
      this.props.poundIt();
    } else {
      this.props.poundIt(this.state.inputValue);
      this.setState({
        fistAnimation: "",
      }, () => {
        this.setState({
          fistAnimation: pulseAnimation,
        })
      })
    }
  }

  handlePlaySound = () => {
    return new Promise((resolve) => {
      var snd = new Audio("punch.wav");
      snd.load();
      if (!this.state.playSound) {
        snd.muted = true;
      }
      const play = snd.play();
      resolve(play)
    })
  }

  togglePlaySound = _=> this.setState(prevState => ({playSound: !prevState.playSound}))

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput 
          type="text submit" 
          onChange={e => this.setState({inputValue: e.target.value.toLowerCase()})}
          value={this.state.inputValue}
          autoFocus
          placeholder="type anything here to see if it can be broified."
        />
        <Checkbox 
          label="play sound" 
          value={this.state.playSound}
          onChange={this.togglePlaySound}
        />

        <Fist 
          animate={this.props.pound} 
          animation={this.state.fistAnimation} 
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}


export default InputForm;