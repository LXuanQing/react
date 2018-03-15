import React from 'react';
import ReactDOM  from "react-dom";
import {
    Link,
    Route,
    jsHistory
} from './mini-react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
    </div>
);
class BtnHome extends React.Component {
    render() {
        return (
            <button onClick={jsHistory.pushState.bind(this, '/')}>Home</button>
        )
    }
}
class App extends React.Component {
    render() {
        console.log("强制更新")
        return (
            <div>
                <ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <BtnHome/>
                <button onClick={() => {this.forceUpdate()}}>更新当前</button>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector("#root"))
/***
 * 调用 forceUpdate() 会导致组件跳过 shouldComponentUpdate() ，直接调用 render()。
 * 这将触发子组件的正常生命周期方法，包括每个子组件的 shouldComponentUpdate() 方法。
 * 
 * 
 * 
 */