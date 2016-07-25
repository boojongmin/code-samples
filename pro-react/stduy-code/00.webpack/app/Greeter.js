import React, {Component}  from 'react'
//import React  from 'react'
import config from './config.json';

//class Greeter extends React.Component {
class Greeter extends Component {
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter