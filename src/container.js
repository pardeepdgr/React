import React from 'react';
import Header from './common/header';

class Container extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                {this.props.children}
                <div id='container-placeholder'>Container</div>
            </div>
        );
    }
}

export default Container;