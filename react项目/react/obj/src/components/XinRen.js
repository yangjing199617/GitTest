// import React,{Component} from 'react';
// import {Link,NavLink} from 'react-router-dom';
// export default class XinRen extends Component{
//     render(){
//         return(
//             <div className="xinren">
//                 <div className="width1190">
//                     <dl style={{background:"url(../assets/icon1.jpg) left center no-repeat"}}>
//                         <dt>承诺</dt>
//                         <dd>真实可信100%真房源<br />链家承诺，假一赔百</dd>
//                     </dl>
//                     <dl style={{background:"url(../assets/icon2.jpg) left center no-repeat"}}>
//                         <dt>权威</dt>
//                         <dd>独家房源 覆盖全城<br />房源信息最权威覆盖最广</dd>
//                     </dl>
//                     <dl style={{background:"url(../assets/icon3.jpg) left center no-repeat"}}>
//                         <dt>信赖</dt>
//                         <dd>万名置业顾问 专业服务<br />百万家庭的信赖之选</dd>
//                     </dl>
//                     <dl style={{background:"url(../assets/icon4.jpg) left center no-repeat"}}>
//                         <dt>安全</dt>
//                         <dd>安心承诺 保驾护航<br />多重风险防范机制 无后顾之忧</dd>
//                     </dl>
//                     <div className="clears"></div>
//                 </div>
//             </div>
//         )
//     }
// }

import React,{Component} from 'react';
import '../assets/css/xinren.css'
import {Link,NavLink} from 'react-router-dom';

 const XinRen = ({dataName,list})=>(
    <div className="xinren">
        <div className="width1190">
            {
                list.map(
                    item=>(
                        <dl key={item.id} style={{background:"{item.id}.{item.d} left center no-repeat"}}>
                            <dt>{item.a}</dt>
                            <dd>{item.b}<br />{item.c}</dd>
                        </dl>
                    )
                )
            }
        </div>
    </div>
);

export default XinRen