import React from 'react';
import ReactDOM  from "react-dom";

class Demo extends React.Component {

    componentDidMount() {
        document.addEventListener("click",() => {
            console.log("document")
        })
        document.body.addEventListener("click",() => {
            console.log("body")
        })
        document.querySelector(".native-event").addEventListener("click",(e) => {
            e.stopPropagation()
            console.log("原生绑定")
        })
    }

    box(e) {
        console.log("box")
    }

    son(e) {
        // e.stopPropagation()
        // e.nativeEvent.stopImmediatePropagation();
        // 两个一块可阻止冒泡，但body会执行
        console.log("son")
    }

    render() {
        return (
            <div>
                <div className="box" onClick={this.box}>
                    box
                    <div className="native-event">原生绑定</div>
                    <div className="son" onClick={this.son}>son</div>
                </div>
            </div>
        )
    }
}
/**
React的合成时间是在原生事件冒泡到最顶层组件结束后才创建和冒泡的，也是符合React的原理
所以先执行原生事件的冒泡，执行到body，document添加的原生事件会在合成事件执行完后执行
如果在原生事件里面阻止冒泡，合成事件不会执行

避免合成事件和原生事件混用
 * 
 */
ReactDOM.render(<Demo />, document.querySelector("#root"))
