import React,{Component} from 'react';
import '../assets/css/footer.css'
import {Link,NavLink} from 'react-router-dom';
export default class FootBar extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="footer">
                    <div className="width1190">
                        <div className="fl">
                            <NavLink to='/Home' activeClassName=''>
                                <strong>邻居大妈</strong>
                            </NavLink>
                            <NavLink to='/About' activeClassName=''>关于我们</NavLink>
                            <a href="contact.html">联系我们</a>
                            <a href="user.html">个人中心</a>
                        </div>
                        <div className="fr">
                            <dl>
                                <dt><img src="../assets/images/erweima.png" width="76" height="76" /></dt>
                                <dd>微信扫一扫<br />房价点评，精彩发布</dd>
                            </dl>
                            <dl>
                                <dt><img src="../assets/images/erweima.png" width="76" height="76" /></dt>
                                <dd>微信扫一扫<br />房价点评，精彩发布</dd>
                            </dl>
                            <div className="clears"></div>
                        </div>
                        <div className="clears"></div>
                    </div>
                </div>
                <div className="copy">Copyright@ 2015 邻居大妈 版权所有 沪ICP备1234567号-0&nbsp;&nbsp;&nbsp;&nbsp;技术支持：<a target="_blank" href="http://www.webqin.net/">秦王网络</a> </div>
                <div className="bg100"></div>
                <div className="zhidinggoufang">
                    <h2>指定购房 <span className="close">X</span></h2>
                    <form action="#" method="get">
                        <div className="zhiding-list">
                            <label>选择区域：</label>
                            <select>
                                <option>智慧园</option>
                                <option>立民村</option>
                                <option>塘口村</option>
                                <option>勤劳村</option>
                                <option>芦胜村</option>
                                <option>知新村</option>
                            </select>
                        </div>
                        <div className="zhiding-list">
                            <label>方式：</label>
                            <select>
                                <option>租房</option>
                                <option>新房</option>
                                <option>二手房</option>
                            </select>
                        </div>
                        <div className="zhiding-list">
                            <label>联系方式：</label>
                            <input type="text" />
                        </div>
                        <div className="zhidingsub"><input type="submit" value="提交" /></div>
                    </form>
                    <div className="zhidingtext">
                        <h3>指定购房注意事宜：</h3>
                        <p>1、请详细输入您所需要购买的房源信息(精确到小区)</p>
                        <p>2、制定购房申请提交后，客服中心会在24小时之内与您取得联系</p>
                        <p>3、如有任何疑问，请随时拨打我们的电话：400-000-0000</p>
                    </div>
                </div>
                <div className="zhidinggoufang">
                    <h2>指定购房 <span className="close">X</span></h2>
                    <form action="#" method="get">
                        <div className="zhiding-list">
                            <label>选择区域：</label>
                            <select>
                                <option>智慧园</option>
                                <option>立民村</option>
                                <option>塘口村</option>
                                <option>勤劳村</option>
                                <option>芦胜村</option>
                                <option>知新村</option>
                            </select>
                        </div>
                        <div className="zhiding-list">
                            <label>方式：</label>
                            <select>
                                <option>租房</option>
                                <option>新房</option>
                                <option>二手房</option>
                            </select>
                        </div>
                        <div className="zhiding-list">
                            <label>联系方式：</label>
                            <input type="text" />
                        </div>
                        <div className="zhidingsub"><input type="submit" value="提交" /></div>
                    </form>
                    <div className="zhidingtext">
                        <h3>指定购房注意事宜：</h3>
                        <p>1、请详细输入您所需要购买的房源信息(精确到小区)</p>
                        <p>2、制定购房申请提交后，客服中心会在24小时之内与您取得联系</p>
                        <p>3、如有任何疑问，请随时拨打我们的电话：400-000-0000</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}