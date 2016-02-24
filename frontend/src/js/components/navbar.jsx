var React = require('react');
var FlipCard = require('react-flipcard');

var Navbar = React.createClass({
    firstWords: ['green', 'randy', 'daring', 'burning', 'wild', 'sleazy', 'fit', 'lazy', 'bloated', 'caring', 'big', 'small', 'cheezy'],
    secondWords: ['block', 'book', 'tv', 'boat', 'wood', 'fish', 'pig', 'child', 'soap', 'coat', 'dingo', 'dog', 'bear', 'hangar', 'telly', 'bottle'],

    getInitialState() {
        return {
            isFlipped: false,
            firstQuote: "",
            secondQuote: ""
        };
    },
    randomQuotes() {
        firstWord = this.firstWords[Math.floor(Math.random() * this.firstWords.length)];
        secondWord = this.secondWords[Math.floor(Math.random() * this.secondWords.length)];
        this.setState({
            firstQuote: firstWord,
            secondQuote: secondWord
        })
    },
    showBack() {
        this.setState({
            isFlipped: true
        });
    },

    showFront() {
        this.setState({
            isFlipped: false
        });
    },

    handleOnFlip(flipped) {
        if (flipped) {
            this.refs.backButton.getDOMNode().focus();
        }
    },

    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="coca-brand" onMouseEnter={this.randomQuotes}>
                                <FlipCard>
                                    <div>
                                        <img src="images/coca_logo.png" className="coca-brand"/>
                                    </div>
                                    <div>
                                        <img src="images/coca_logo_back.png" className="coca-brand"/>
                                        <div className="flip-text">
                                            <div>{this.state.firstQuote}</div>
                                            <div>{this.state.secondQuote}</div>
                                        </div>

                                    </div>
                                </FlipCard>
                            </div>
                        </div>
                        <div className="navbar-collapse coca-font">
                            <img className="coca-font" src="images/coca_brand.png"/>
                        </div>
                    </div>
                </nav>
                <br />

            </div>
        )
    }
})
module.exports = Navbar;