import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';
import Button from './button';	

class App extends React.Component {
	state = { counter: 0 };

	inc = () => {
    	this.setState((previousState) => {
        	return {counter: previousState.counter + 1}
    	});
	};

	render() {
  	return(
    	<div>
			<Display count = {this.state.counter} />
    		<Button incCount = {this.inc} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))