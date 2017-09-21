import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBar';
import SenderAddressForm from './components/SenderAddressForm';
import ReceiverAddressForm from './components/ReceiverAddressForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      percentageCompleted: 0,
      pageNum:0
    }

    this.onPreviousClicked = this.onPreviousClicked.bind(this);
    this.onProceedClicked = this.onProceedClicked.bind(this);

  }

  onPreviousClicked() {
 
    this.state.percentageCompleted > 0 && (this.setState((state) => ({
      percentageCompleted: state.percentageCompleted - 25
    })));

    this.state.pageNum > 0 && this.setState((state)=> ({
      pageNum : --state.pageNum
    }))
  }

  onProceedClicked() {
    debugger;
     this.state.percentageCompleted < 100 && (this.setState((state) => ({
      percentageCompleted: state.percentageCompleted + 25
    })));
      this.state.pageNum < 4 && this.setState((state)=> ({
      pageNum : ++state.pageNum
    }))



  }
  render() {
    return (
      <div className="App mt-4">
        <ProgressBar percentageCompleted={this.state.percentageCompleted} />

       { (this.state.pageNum === 0) && <SenderAddressForm/>}
       { (this.state.pageNum === 1 ) && <ReceiverAddressForm/>}
       { (this.state.pageNum === 2) && <SenderAddressForm/>}
       { (this.state.pageNum === 3) && <ReceiverAddressForm/>}
       { (this.state.pageNum === 4 ) && <SenderAddressForm/>}

        <div className="btn-group mt-10">
       {  (this.state.pageNum!== 0) && <button type="button" className="btn btn-primary" onClick={this.onPreviousClicked}>Previous</button>}
       { (this.state.pageNum!== 4) && <button type="button" className="btn btn-primary" onClick={this.onProceedClicked}  >Proceed</button>} 

        </div>
      </div>
    );
  }
}

export default App;
