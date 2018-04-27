// import React,{Component} from 'react';
// import Content from './Content';
// import XinRen from './XinRen';
// // import './css/index.css'
// export default class Home extends Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <Content />
//                 <XinRen />
//             </React.Fragment>
//         )
//     }
// }



import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import Content from './Content';
import XinRen from './XinRen';
export default class Home extends Component{
    constructor(props){
        super();
        this.state={
            list:[]
        }
        let url=`http://localhost:3001/home`;
        fetch(url).then(
            res=>res.json()

        ).then(
            data=>{
                this.setState({list:data})
            }
        )
    }
    render(){
        return(
            <React.Fragment>
                <Content />
                <XinRen list={this.state.list} dataName="index"/>
            </React.Fragment>
        )
    }
}