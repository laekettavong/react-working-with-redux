import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as Actions from '../../store/actions'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storeResult => (
                        <li key={storeResult.id} onClick={() => this.props.onDeleteResult(storeResult.id)}>{storeResult.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    //return global state managed by Redux
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: Actions.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: Actions.DECREMENT }),
        onAdd: () => dispatch({ type: Actions.ADD, value: 5 }),
        onSubtract: () => dispatch({ type: Actions.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: Actions.STORE_RESULT, value: result }),
        onDeleteResult: (id) => dispatch({ type: Actions.DELETE_RESULT, value: id }),
    }
}

// connect provides access to central store
export default connect(mapStateToProps, mapDispatchToProps)(Counter);