import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
export default class Content extends Component{
    render(){
        return(
            <div className="content">
                <div className="width1190">
                    <h2 className="title">租房
                        <NavLink to='/Zu'>更多&gt;&gt;</NavLink>
                    </h2>
                    <div className="index-fang-list">
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang1.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>虹桥乐亭</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang2.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>静安豪景</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang3.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>中凯城市之光(静安)</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang4.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>水塘小区</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <div className="clears"></div>
                    </div>

                    <h2 className="title">新房 <NavLink to='/Xin'>更多&gt;&gt;</NavLink></h2>
                    <div className="index-fang-list">
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang5.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>虹桥乐亭</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang6.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>静安豪景</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <NavLink to='/Proinfo'>
                                    <img src="../assets/images/fang7.jpg"  width="286" height="188" />
                                </NavLink>
                            </dt>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>中凯城市之光(静安)</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <dl>
                            <NavLink to='/Proinfo'>
                                <img src="../assets/images/fang8.jpg"  width="286" height="188" />
                            </NavLink>
                            <dd>
                                <h3><NavLink to='/Proinfo'></NavLink>水塘小区</h3>
                                <div className="hui">3室2厅2卫 | 147m² | 精装修</div>
                            </dd>
                        </dl>
                        <div className="clears"></div>
                    </div>

                    <h2 className="title">二手房 <NavLink to='/Er'>更多&gt;&gt;</NavLink></h2>
                    <div className="index-ershou">
                        <div className="in-er-left">
                            <a href="proinfo.html"><img src="../assets/images/fangt1.jpg" width="380" height="285" /></a>
                            <div className="in-er-left-text"><strong className="fl">闵行南方发的撒的发的司法</strong><strong className="fr alignRight">¥2841</strong></div>
                        </div>
                        <div className="in-er-right">
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang1.jpg" width="150" height="115" /></a></dt>
                                <dd>
                                    <h3><NavLink to='/Proinfo'></NavLink>浦东新区张江日水安华苑</h3>
                                    <div className="in-er-right-text">
                                        习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。双方要坚持做
                                    </div>
                                    <div className="price">¥<strong>2890</strong></div>
                                </dd>
                                <div className="clears"></div>
                            </dl>
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang3.jpg" width="150" height="115" /></a></dt>
                                <dd>
                                    <h3><NavLink to='/Proinfo'></NavLink>浦东新区张江日水安华苑</h3>
                                    <div className="in-er-right-text">
                                        习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。双方要坚持做
                                    </div>
                                    <div className="price">¥<strong>2890</strong></div>
                                </dd>
                                <div className="clears"></div>
                            </dl>
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang8.jpg" width="150" height="115" /></a></dt>
                                <dd>
                                    <h3><NavLink to='/Proinfo'></NavLink>浦东新区张江日水安华苑</h3>
                                    <div className="in-er-right-text">
                                        习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。双方要坚持做
                                    </div>
                                    <div className="price">¥<strong>2890</strong></div>
                                </dd>
                                <div className="clears"></div>
                            </dl>
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang5.jpg" width="150" height="115" /></a></dt>
                                <dd>
                                    <h3><NavLink to='/Proinfo'></NavLink>浦东新区张江日水安华苑</h3>
                                    <div className="in-er-right-text">
                                        习近平强调，中方重视发展中南中方重视发展中南“同志加兄弟”的特殊关系。双方要坚持做
                                    </div>
                                    <div className="price">¥<strong>2890</strong></div>
                                </dd>
                                <div className="clears"></div>
                            </dl>
                            <div className="clears"></div>
                        </div>
                        <div className="clears"></div>
                    </div>
                </div>
            </div>
        )
    }
}