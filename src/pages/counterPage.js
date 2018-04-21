import React from 'react';
import Display from '../components/counter/display';
import Button from '../components/counter/button';
import Header from '../common/header';

class CounterPage extends React.Component {
    state = { counter: 0 };

	inc = () => {
    	this.setState((previousState) => {
        	return {counter: previousState.counter + 1}
    	});
    };
    
    render() {
        return(
            <div>
                <Header/>
                <Display count = {this.state.counter} />
    		    <Button incCount = {this.inc} />
            </div>
        );
    }
}

export default CounterPage;