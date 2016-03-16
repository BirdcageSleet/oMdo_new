var React = require('react');
var Link = require('react-router').Link;
var styleable = require('react-styleable').default
var css = require('../styles/question.css');

console.log(typeof styleable)

var currentIndex = currentIndex || 0;

function getChild(props, currentIndex) {
  return React.Children.map(props.children, function(element, i){
    if (currentIndex === i){
      return element;
    }
  })
}

function Question(props) {
  return(
    <div className={props.css.root}>
      <button className={props.css.navButton} onClick={getChild(props, currentIndex-1)}>go back</button>
      <span className={props.css.currentQuestion}>{getChild(props, currentIndex)}</span>
      <button className={props.css.navButton} onClick={getChild(props, currentIndex+1)}>next question</button>
    </div>
  )
}


module.exports = styleable(css)(Question)