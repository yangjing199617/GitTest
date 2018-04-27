import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
export default class Xin extends Component{
    render(){
        return(
            <div className="content">
                <div className="width1190">
                    <form action="#" method="get" className="pro-search">
                        <table>
                            <tbody>
                                <tr>
                                    <th>房源区域：</th>
                                    <td>
                                        <a href="javascript:;" className="pro-cur">不限</a>
                                        <a href="javascript:;">智慧园</a>
                                        <a href="javascript:;">立民村</a>
                                        <a href="javascript:;">塘口村</a>
                                        <a href="javascript:;">勤劳村</a>
                                        <a href="javascript:;">芦胜村</a>
                                        <a href="javascript:;">知新村</a>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>价格：</th>
                                    <td>
                                        <a href="javascript:;" className="pro-cur">不限</a>
                                        <a href="javascript:;">500-1000</a>
                                        <a href="javascript:;">10001-2000</a>
                                        <a href="javascript:;">2001-3000</a>
                                        <a href="javascript:;">3001-4000</a>
                                        <input type="text" className="protext" /> - <input type="text" className="protext" /> 元
                                        <input type="submit" className="proSub"  value="确定" />
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <th>面积：</th>
                                    <td>
                                        <a href="javascript:;" className="pro-cur">不限</a>
                                        <a href="javascript:;">10平方</a>
                                        <a href="javascript:;">20-40平方</a>
                                        <a href="javascript:;">41-60平方</a>
                                        <a href="javascript:;">61-80平方</a>
                                        <a href="javascript:;">100平方以上</a>
                                    </td>
                                </tr>
                            </tbody>
                           <tbody>
                               <tr>
                                   <th>房型：</th>
                                   <td>
                                       <a href="javascript:;" className="pro-cur">不限</a>
                                       <a href="javascript:;">一室一厅</a>
                                       <a href="javascript:;">两室一厅</a>
                                       <a href="javascript:;">3室一厅</a>
                                       <a href="javascript:;">一室一厅一卫</a>
                                   </td>
                               </tr>
                           </tbody>
                        </table>
                        <div className="paixu">
                            <strong>排序：</strong>
                            <a href="javascript:;" className="pai-cur">默认</a>
                            <a href="javascript:;">价格 &or;</a>
                            <a href="javascript:;">最新 &or;</a>
                        </div>
                    </form>
                </div>
                <div className="width1190">
                    <div className="pro-left">
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang1.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang2.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang3.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang4.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang5.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang6.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                        <dl>
                            <dt><a href="proinfo.html"><img src="../assets/images/fang7.jpg" width="286" height="188" /></a></dt>
                            <dd>
                                <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                <div className="pro-wei">
                                    <img src="../assets/images/weizhi.png" width="12" height="16" /> <strong className="red">智慧园</strong>
                                </div>
                                <div className="pro-fang">一室一厅 38平 南 楼层中部/6层</div>
                                <div className="pra-fa">发布人：张先生  发布时间：2015-12-03</div>
                            </dd>
                            <div className="price">¥ <strong>2890</strong><span className="font12">元/月</span></div>
                            <div className="clears"></div>
                        </dl>
                    </div>
                    <div className="pro-right">
                        <h2 className="right-title">新上房源</h2>
                        <div className="right-pro">
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang8.jpg" /></a></dt>
                                <dd>
                                    <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                    <div className="pro-fang">一室一厅 38平 南</div>
                                    <div className="right-price">1100元/月</div>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang7.jpg" /></a></dt>
                                <dd>
                                    <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                    <div className="pro-fang">一室一厅 38平 南</div>
                                    <div className="right-price">1100元/月</div>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="proinfo.html"><img src="../assets/images/fang6.jpg" /></a></dt>
                                <dd>
                                    <h3><a href="proinfo.html">中装一室一厅，楼层好，采光足，稀缺房源</a></h3>
                                    <div className="pro-fang">一室一厅 38平 南</div>
                                    <div className="right-price">1100元/月</div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="clears"></div>
                </div>
            </div>
        )
    }
}