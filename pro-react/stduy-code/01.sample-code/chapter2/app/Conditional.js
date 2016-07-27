import React, {Component} from 'react';

class Conditional extends Component {
    render() {
        let condition = true;
        return (
            <div>
                {condition ?
                    <span>Hello JSX (The condition was true)</span> : null
                }

            </div>
        );
    }
}

export default Conditional