import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
export default class Login extends Component{
    constructor(props){
     super(props);
     this.login=this.login.bind(this);
    }
    login(){
        let that=this;
        let userName=this.refs.username.value;
        let passWord=this.refs.password.value;
        fetch("http://localhost:3001/login?username="+userName+"&password="+passWord,{mode:'cors',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'}}).then(
                    res=>res.json()
        ).then(
            data => {
                if(data.error == 0 && data.msg == "OK"){
                    alert("登录成功！");
                    this.props.history.push('/home');
            }else {
                    alert("登录失败！");
                }
    }
        )
    }
    render(){
        return(
            <div className="content">
                <div className="width1190">
                    <div className="reg-logo">
                        <form id="signupForm" method="get"  className="zcform">
                            <p className="clearfix">
                                <label className="one" >用户名：</label>
                                <input id="agent" name="agent" type="text" className="required"  placeholder="请输入您的用户名" ref="username"/>
                            </p>
                            <p className="clearfix">
                                <label className="one">登录密码：</label>
                                <input id="password" name="password" type="password" className="{required:true,rangelength:[8,20],}"  placeholder="请输入密码" ref="password"/>
                            </p>
                            <p className="clearfix"><input className="submit" type="submit" value="立即登录" onClick={this.login}/></p>
                        </form>
                        <div className="reg-logo-right">
                            <h3>如果您没有账号，请</h3>
                            <NavLink to='/Reg' activeClassName='logo-a'>立即注册</NavLink>
                        </div>
                        <div className="clears"></div>
                    </div>
                </div>
            </div>
        )
    }
}