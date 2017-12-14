// 受控组件
<input
    type="text"
    value={this.state.value}
    onChange={(e) => {
        this.setState({
            value: e.target.value,
        });
    }}
/>

/**
 * <input>或<select>都要绑定一个change事件;每当表单的状态发生变化,都会被写入组件的state中,
 * 这种组件在React中被称为受控组件;在受控组件中,组件渲染出的状态与它的value或者checked prop向对应。
 * react通过这种方式消除了组件的局部状态,是的应用的整个状态可控.react官方同样推荐使用受控表单组件
 * 总结下React受控组件更新state的流程:
 *  1.可以通过初始state中设置表单的默认值;
    2.每当表单的值发生变化时,调用onChange事件处理器;
    3.事件处理器通过合成事件对象e拿到改变后的状态,并更新应用的state.
    4.setState触发视图的重新渲染,完成表单组件值得更新


    react中数据是单向流动的.从示例中,我们能看出来表单的数据来源于组件的state,并通过props传入,这也称为单向数据绑定.
    然后,我们又通过onChange事件处理器将新的表单数据写回到state,完成了双向数据绑定.
 */


// 非受控组件
import React, { Component } from 'react';

class UnControlled extends Component {
    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        console.log(this.name.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={i => this.name = i} defaultValue="BeiJing" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default UnControlled;
/**
 *  如果一个表单组件没有value props(单选按钮和复选按钮对应的是 checked props)时,就可以称为非受控组件;
 *  使用defaultValue和defaultChecked来表示组件的默认状态;
 *  通过 defaultValue和defaultChecked来设置组件的默认值,它仅会被渲染一次,在后续的渲染时并不起作用
 */


// 使用一个事件处理器来处理多个表单域
import React, { Component } from 'react';

class Controlled extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            name: 'xingxing',
            age: 18,
        };
    }
    handleChange = (name, e) => {
        let { value } = e.target; // ***
        this.setState({
            [name]: value, // ***
        });
    }
    render() {
        let { name, age } = this.state; // ***
        return (
            <div>
                <input type="text" value={name} onChange={this.handleChange.bind(this, 'name')} />
                <input type="text" value={age} onChange={this.handleChange.bind(this, 'age',)} />
            </div>
        );
    }
}

export default Controlled;




