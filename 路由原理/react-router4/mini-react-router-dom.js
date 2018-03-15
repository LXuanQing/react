import React, {Component} from 'react';
let instances = [];  // 用来存储页面中的 Router
const register = (comp) => instances.push(comp);
const unRegister = (comp) => instances.splice(instances.indexOf(comp), 1);
const historyPush = (path) => {
    window.history.pushState({}, null, path); // 改变路由
    instances.forEach(instance => instance.forceUpdate()) // 循环路由，更新每个路由
};
window.addEventListener('popstate', () => {
	// 只要点击浏览器前进后退按钮就会触发事件
	// 遍历所有 Route，强制重新渲染所有 Route
    instances.forEach(instance => instance.forceUpdate());
});

// 判断 Route 的 path 参数与当前 url 是否匹配
const matchPath = (pathname, options) => {
    const {path, exact = false} = options;
    const match = new RegExp(`^${path}`).exec(pathname);
    if (!match) return null;
    const url = match[0];
    const isExact = pathname === url; // / /page
    if (exact && !isExact) return null;
    return {
        path,
        url
    }
};
export class Link extends Component {

    handleClick = (event) => {
        event.preventDefault();
        const {to} = this.props;
        historyPush(to);
    };

    render() {
        const {to, children} = this.props;
        return (
            <a href={to} onClick={this.handleClick}>
                {children}
            </a>
        )
    }
}
export class Route extends Component {

    componentWillMount() {
        register(this);
    }

    render() {
        const {path, component, exact} = this.props;
        const match = matchPath(window.location.pathname, {path, exact});

        // Route 跟当前 url 不匹配，就返回 null
        if (!match) return null;

        if (component) {
			return React.createElement(component);
        }
    }

    componentWillUnMount() {
        unRegister(this);
    }
}
// 这里之所以要导出一个 jsHistory，
// 是为了方便使用者在 JS 中直接控制导航
export const jsHistory = {
    pushState: historyPush
};
/**
 * https://github.com/youngwind/blog/issues/109
 * history.pushState
 * history.pushState({},null,'/2.html')
 * 添加上面这个新记录后，浏览器地址栏立刻显示..../2.html
 * 但并不会跳转到2.html，甚至也不会检查2.html是否存在，它只是成为浏览历史中的最新记录。
 * 假定这时你访问了google.com，然后点击了倒退按钮，页面的url将显示2.html，但是内容还是原来的1.html。你再点击一次倒退按钮，url将显示1.html，内容不变。
 * 总之，pushState方法不会触发页面刷新，只是导致history对象发生变化，地址栏会有反应。
 * 如果pushState的url参数，设置了一个新的锚点值（即hash），并不会触发hashchange事件。如果设置了一个跨域网址，则会报错。
 * history.pushState(null, null, 'https://twitter.com/hello');
 * 仅仅调用pushState方法或replaceState方法 ，并不会触发popstate事件
 * 只有用户点击浏览器倒退按钮和前进按钮，或者使用JavaScript调用back、forward、go方法时才会触发。
 */

 /**
  * exact
  * exact是Route下的一条属性，一般而言，react路由会匹配所有匹配到的路由组价，exact能够使得路由的匹配更严格一些。
  * exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。
  * 如在exact为true时，’/link’与’/’是不匹配的，但是在false的情况下它们又是匹配的。
  * <Route path='/' component={Home} />
  * <Route path='/page' component={Page}>
  * //这种情况下，如果匹配路由path='/page'，那么会把Home也会展示出来。
  * 所以我们经常添加exact来解决上述问题。
  * <Route exact path='/' component={Home} />
  * <Route path='/page' component={Page} />
  */

  /**
   * #
   * http://www.ruanyifeng.com/blog/2011/03/url_hash.html
   * 
   */