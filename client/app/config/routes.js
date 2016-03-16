var React = require('react');
var Redux = require('redux');
var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;
var applyMiddleware = Redux.applyMiddleware;
var ReactRouter = require('react-router');
var Provider = require('react-redux').Provider;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var ReactRouterRedux = require('react-router-redux');
var syncHistoryWithStore = ReactRouterRedux.syncHistoryWithStore;
var routerReducer = ReactRouterRedux.routerReducer;
var Main = require('../components/main');
var AuthContainer = require('../containers/authContainer');
// var HomeContainer = require('../containers/homeContainer');
var SurveyContainer = require('../containers/surveyContainer');
var ProfileContainer = require('../containers/profileContainer');
var About = require('../components/about');
var reducers = require('../reducers/reducers');
var store = require('../store/store').configureStore(browserHistory);
console.log(store);
// var store = createStore(
//   combineReducers({
//     reducers,
//     routing: routerReducer
//   })
// );

// var history = syncHistoryWithStore(browserHistory, store);

var Routes = (
  
      <Route path='/' component={Main}>
        <Route path='signin' component={AuthContainer} />
        <Route path='signup' component={AuthContainer} />
        {/*<Route path='home' component={HomeContainer} />*/}
        <Route path='survey' component={SurveyContainer} />
        <Route path='profile' component={ProfileContainer} />
        <Route path='about' component={About} />
      </Route>
  
)

var Root = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
      <div>
        <Router history={browserHistory} routes={Routes} />
      </div>
      </Provider>
      
    )
  }
})

module.exports = Root;