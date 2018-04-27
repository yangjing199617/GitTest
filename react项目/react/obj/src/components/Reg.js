import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
export default class Reg extends Component{
    constructor(props){
        super(props);
        this.reg=this.reg.bind(this)
    }
    reg(){
        let that=this;
        let userName=this.refs.username.value;
        let passWord=this.refs.password.value;
        fetch("http://localhost:3001/reg?username="+userName+"&password="+passWord,{
            mode:'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(
            res=>res.json()
        ).then(
            data=>{
                if(data.error == 0 && data.msg == "OK"){
                    alert("注册成功！");
                    this.props.history.push('/login')
                }
            }
        )
    }
    render(){
        return(
            <div className="content">
                <div className="width1190">
                    <div className="reg-logo">
                        <form id="signupForm" method="get" action="" className="zcform">
                            <p className="clearfix">
                                <label className="one">用户名：</label>
                                <input id="agent" name="agent" type="text" className="required"  placeholder="请输入您的用户名" ref="username"/>
                            </p>

                            <p className="clearfix">
                                <label className="one">登录密码：</label>
                                <input id="password" name="password" type="password" className="{required:true,rangelength:[8,20],}"  placeholder="请输入密码" ref="password" />
                            </p>
                            <p className="clearfix">
                                <label className="one">确认密码：</label>
                                <input id="confirm_password" name="confirm_password" type="password" className="{required:true,equalTo:'#password'}"  placeholder="请再次输入密码" />
                            </p>
                            <p className="clearfix"><input className="submit" type="submit" value="立即注册" onClick={this.reg}/></p>
                        </form>
                        <div className="reg-logo-right">
                            <h3>如果您已有账号，请</h3>
                            <NavLink to='/Login' activeClassName='logo-a'>立即登录</NavLink>
                        </div>
                        <div className="clears"></div>
                    </div>
                </div>
            </div>
        )
    }
}