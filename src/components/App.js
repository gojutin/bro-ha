import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { headShake  } from 'react-animations';

// logic
import { broify } from '../logic/broify';

// data
import prebroifiedWords from '../logic/prebroifiedWords';
import allWords from "an-array-of-english-words";

// components
import Title from './Title';
import Shatter from './Shatter';
import BroWord from './BroWord';
import InputForm from './InputForm';

const headShakeAnimation = keyframes`${headShake}`;

const StyledApp = styled.div`
  padding: 10px;
  padding-top: 30px;
  text-align: center;
  height: 100%;
`;

class App extends Component {

  state = {
    brocab: [],
    appAnimation: "",
    output: "",
  }

  componentDidMount() {
    this.setState({
      brocab: [...broify(allWords), ...prebroifiedWords]
    })
  }

  shatter = () => {
    this.setState(prevState => ({
      appAnimation: headShakeAnimation,
    }), () => {
      setTimeout(() => {
      this.setState(prevState => ({
        appAnimation: "",
      }))
      }, 500)
    })
  }

  poundIt = (str, showWord = true) => {
    this.shatter();
    if (str) {
      this.setState({
        output: broify(str),
      });
    } else {
      this.randomBroWord();
    }
  }

  randomBroWord = _=> {
    const randomNumber = Math.floor(Math.random() * this.state.brocab.length);
    this.setState({
      output: this.state.brocab[randomNumber]
    })
  }

  render() {
    const { appAnimation, output, brocab } = this.state;
    return (
      <StyledApp style={{ animation: `.5s ${appAnimation}`}}> 
        { appAnimation && <Shatter />}
        <Title />
        <InputForm 
          pound={appAnimation}
          poundIt={this.poundIt}
        />

        <BroWord randomBroWord={output}/>
        { !output &&
            <h3>A brocabulary of {brocab.length} and counting</h3>        
        }
      </StyledApp>
    );
  }
}

export default App;
