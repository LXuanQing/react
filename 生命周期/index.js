import React from 'react';
import ReactDOM  from "react-dom";

class Son extends React.Component {
    constructor(props) {
		super(props);
		this.state = {};
	}
    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    render() {
        return (
            <div>son</div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            num: 1,
        };
    }
    add() {
        this.setState({
            num: ++this.state.num
        })
    }
    render() {
        return (
            <div onClick={this.add.bind(this)}>{this.state.num}<Son /></div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))

/**
 * state变化，子组件componentWillReceiveProps执行
 * 
 */





