import React, { Component } from 'react'
import { connect } from 'react-redux'
import SimpleReactValidator from 'simple-react-validator';
import { login } from '../actions/userAction';

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password: ''
        }
        this.validator = new SimpleReactValidator();
    }

    onChangeHandler = (e) => {
        const { name, value } = e.target;
        console.log(`name, value `, name,value)
        this.setState({[name] : value})
    }

    onSubmitHandler = (e) => {
        console.log(`this.state `, this.state)

        if (this.validator.allValid()) {
        this.props.login(this.state)

          } else {
            this.validator.showMessages();
            this.forceUpdate();
          }
    }

    render() {
        const { email, password } = this.state
        return (
            <div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                        <h3 className="text-center"> Login Form</h3>
                        <form>

                    <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text"
                        className="form-control" onChange={this.onChangeHandler} name="email" id="email" value={email} aria-describedby="helpId" placeholder="" />
                    <small id="helpId" className="form-text" style={{'color': 'red'}}>{this.validator.message('email', email, 'required|email')}</small>
                    </div>


                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password"
                        className="form-control" onChange={this.onChangeHandler} name="password" id="password" value={password} aria-describedby="helpId" placeholder="" />
                        <small id="helpId" className="form-text" style={{'color': 'red'}}>{this.validator.message('password', password, 'required')}</small>
                    </div>
                    <div className="form-group">
                            <button type="button" className="btn btn-primary" onClick={this.onSubmitHandler}> Submit </button>
                        </div>

                    </form>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch =>({
    login : data => dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
