/**
 * hash 改变 url 的同时，不刷新页面
 * 
 * 
 */
function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function (path, callback) {
    this.routes[path] = callback || function () {};
};
Router.prototype.refresh = function () {
    console.log('触发一次 hashchange，hash 值为', location.hash);
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
};
window.Router = new Router();
Router.init();
var content = document.querySelector('body');
function changeBgColor(color) {
    content.style.backgroundColor = color;
}
Router.route('/', function () {
    changeBgColor('white');
});
Router.route('/blue', function () {
    changeBgColor('blue');
});
Router.route('/green', function () {
    changeBgColor('green');
});
// hashchange hash变化，就会触发这个函数
// https://github.com/youngwind?tab=repositories