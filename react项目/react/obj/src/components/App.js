import React, { Component } from 'react';
import NarBar from './NavBar';
import Home from './Home';
import FootBar from './FootBar';
import Zu from './Zu';
import Xin from './Xin';
import Er from './Er';
import JingJi from './JingJi';
import About from './About';
import Login from './Login';
import Reg from './Reg';
import Proinfo from './Proinfo';
import Error from './Error';
import {Route,Redirect,Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import state from "../store/state";



class App extends Component {
  render() {
      let {bNav,bFoot,updateNav,updateFoot,location}=this.props;
      let path=location.pathname;
      if(/Home|Zu|Xin|Er|JingJi|About|Login|Reg|Proinfo/){
          setTimeout(()=>{
              updateNav(true);
              updateFoot(true);
          },0)
      }

    return (
        <React.Fragment>
            {bNav && <NarBar />}
            <Switch>
                <Route path="/Home" component={Home}/>
                <Route path="/Zu" component={Zu}/>
                <Route path="/Xin" component={Xin}/>
                <Route path="/Er" component={Er}/>
                <Route path="/About" component={About}/>
                <Route path="/JingJi" component={JingJi}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Reg" component={Reg}/>
                <Route path="/Proinfo" component={Proinfo}/>
                <Route path="/Error" component={Error}/>
                <Redirect from='/' to='/Home' />
                <Route   component={Error} />
            </Switch>

            {bFoot && <FootBar />}
        </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
    bNav:state.bNav,
    bFoot:state.bFoot
});
const mapDispatchToProps = dispatch => ({
    updateNav:(bl)=>{dispatch({type:'UPDATE_NAV',payload:bl})},
    updateFoot:(bl)=>{dispatch({type:'UPDATE_FOOT',payload:bl})},
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
