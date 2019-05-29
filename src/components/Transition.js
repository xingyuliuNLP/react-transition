import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import '../css/App.css';

class TransitionComp extends Component {
  state = {
    show: false
  }
  showDiv = () => {
    this.setState({
      show: !this.state.show ? true : false
    })
  }
  render() {
    return (
      <div>
        <Transition
          in={this.state.show}
          
          timeout={1000}
          mountOnEnter
          unmountOnExit>
          {state =>
            <div style={{
              background: 'grey',
              height: '100px',
              transition: 'all 1s ease',
              opacity: state === 'exited' || state === 'exiting' ? 0 : 1
            }}>
              { state }
            </div>}

        </Transition>
        
        <div className="showDiv" onClick={this.showDiv}>
          Show/Hide
                </div>
      </div>

    )
  }
}


export default TransitionComp;