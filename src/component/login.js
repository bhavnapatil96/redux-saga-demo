import React, { Component } from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
    margin: 12,
};
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    handleChange=(e)=>{
        const {value,name}=e.target;
        const {user}=this.state
        user[name]=value;
        this.setState({
            user
        },console.log(this.state.user))
    }
    login=(e)=>{
        e.preventDefault();
        let user={
            email:this.state.user.email,
            password:this.state.user.password
        }
        this.props.loginUser(user)
    }
    componentWillReceiveProps(next){
        debugger
        if(next.userReducer && next.userReducer.data){
            this.props.history.push('/eventList')
        }
        else if(next.userReducer.response && next.userReducer.response.data){
            alert('Invalid email or password')
        }
    }
    render() {
        return (
            <div>
                <br/>
                <br/>
                <center>
                    <form onSubmit={this.login}>
                    <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        name="email"
                        onChange={this.handleChange}
                        required="true"
                        type="email"
                    /><br />
                    <br />

                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        required="true"
                    /><br />
                    <RaisedButton type="submit" label="Login"  primary={true} style={style} />
                    </form>
                </center>

            </div>

        );
    }
}
function mapStateToProps(state) {
    return{
        userReducer:state.userReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
            loginUser: (user) => {dispatch({type: 'LOGINUSER',payload:user})
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));
