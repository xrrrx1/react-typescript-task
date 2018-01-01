import * as React from 'react';
import {connect} from 'react-redux'
import increment from "../AC/actionCreators";

export interface CounterProps {
  counter: number;
  increment: Function;
}

class Counter extends React.Component<CounterProps > {
    render() {
        const {counter} = this.props;

        return (
            <React.Fragment>
                <h2>{counter}</h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </React.Fragment>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props;

        increment();
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter);