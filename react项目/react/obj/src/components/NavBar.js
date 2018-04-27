import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
export default class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="header">
                    <div className="width1190">
                        <div className="fl">您好，欢迎来到邻居大妈！</div>
                        <div className="fr">
                            <NavLink to='/Login' activeClassName=''>登录</NavLink> |
                            <NavLink to='/Reg' activeClassName=''>注册</NavLink> |
                            <a href="javascript:;">加入收藏</a> |
                            <a href="javascript:;">设为首页</a>
                        </div>
                        <div className="clears"></div>
                    </div>
                </div>
                <div className="logo-phone">
                    <div className="width1190">
                        <h1 className="logo">
                            <NavLink to='/Home' activeClassName=''>
                                <img src="../assets/images/logo.png" width="163" height="59"  />
                            </NavLink>
                        </h1>
                        <div className="phones"><strong>021-63179891</strong></div>
                        <div className="clears"></div>
                    </div>
                </div>
                <div className="list-nav">
                    <div className="width1190">
                        <div className="list">
                            <h3>房源分类</h3>
                            <div className="list-list">
                                <dl>
                                    <dt><a href="javascript:;">房源区域</a></dt>
                                    <dd>
                                        <a href="javascript:;">智慧园</a>
                                        <a href="javascript:;">立民村</a>
                                        <a href="javascript:;">塘口村</a>
                                        <a href="javascript:;">勤劳村</a>
                                        <a href="javascript:;">芦胜村</a>
                                        <a href="javascript:;">知新村</a>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><NavLink to='/Zu' activeClassName=''>租房</NavLink></dt>
                                    <dd>
                                        <NavLink to='/Zu' activeClassName=''>租金</NavLink>
                                        <NavLink to='/Zu' activeClassName=''>出租方式</NavLink>
                                        <NavLink to='/Zu' activeClassName=''>面积</NavLink>
                                        <NavLink to='/Zu' activeClassName=''>房型</NavLink>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><NavLink to='/Xin' activeClassName=''>新房</NavLink></dt>
                                    <dd>
                                        <NavLink to='/Xin' activeClassName=''>价格</NavLink>
                                        <NavLink to='/Xin' activeClassName=''>面积</NavLink>
                                        <NavLink to='/Xin' activeClassName=''>房型</NavLink>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt><NavLink to='/Er' activeClassName=''>二手房</NavLink></dt>
                                    <dd>
                                        <NavLink to='/Er' activeClassName=''>价格</NavLink>
                                        <NavLink to='/Er' activeClassName=''>面积</NavLink>
                                        <NavLink to='/Er' activeClassName=''>房型</NavLink>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <ul className="nav">
                            <li><NavLink to='/Home' activeClassName=''>首页</NavLink></li>
                            <li><NavLink to='/Zu' activeClassName=''>租房</NavLink></li>
                            <li><NavLink to='/Xin' activeClassName=''>新房</NavLink></li>
                            <li><NavLink to='/Er' activeClassName=''>二手房</NavLink></li>
                            <li className="zhiding"><a href="javascript:;">指定购房</a></li>
                            <li><NavLink to='/JingJi' activeClassName=''>申请自由经纪人</NavLink></li>
                            <li><NavLink to='/About' activeClassName=''>关于我们</NavLink></li>
                            <div className="clears"></div>
                        </ul>
                        <div className="clears"></div>
                    </div>
                </div>
                <div className="banner" style={{background:"url(../assets/images/ban.jpg) center center no-repeat"}}></div>
            </React.Fragment>
        )
    }
}