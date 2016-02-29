var React = require('react');
var ReactDom = require('react-dom');
var Navbar = React.createFactory(require('./navbar.jsx'));
var Navbar = React.createFactory(require('./navbar.jsx'));
var Navbar = React.createFactory(require('./navbar.jsx'));
var Navbar = React.createFactory(require('./navbar.jsx'));

var App = React.createClass({
    render: function () {

        return (
            <div>
                <Navbar />
            </div>
        )
    }
});
ReactDom.render(
    <App />,
    document.getElementById('content')
)