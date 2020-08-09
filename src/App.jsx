import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import config from './config/route'
import { NavLink, Route,Switch,Redirect} from 'react-router-dom'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原始html中的 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* react中的写法 靠Link标签更改浏览器的历史记录*/}
                            {/* activeClassName是NavLink标签中的类属性 */}
                            <NavLink className="list-group-item" activeClassName="demo" to="/about">About</NavLink>
                            <NavLink className="list-group-item" activeClassName="demo" to="/home">Home</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* <About/>
                                <Home/> */}
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    {/* 重定向 */}
                                    <Redirect to="/about" />
                                    {/* 方法二：在路由表中遍历路由 */}
                                    {/* {   
                                        config.map((route)=>{
                                            return <Route key={route} path={route.path} component={route.component}/>
                                        })
                                    } */}
                                </Switch>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
