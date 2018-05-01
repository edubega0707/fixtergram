import React, {Component} from 'react'
import"./login.css"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginDisplay =({loginGoogle, loginFacebook})=>{
    return(
        <div className="login">
                <div className="form_login">
                    Iniciar Sesion
                <div onClick={loginGoogle}>
                        <img className="loginG"  src="https://camo.githubusercontent.com/da18dfde046310c33010757e0b1d2a1f6c95b5d7/68747470733a2f2f646576656c6f706572732e676f6f676c652e636f6d2f6163636f756e74732f696d616765732f7369676e2d696e2d776974682d676f6f676c652e706e67" alt="logingoogle"/>
                </div>
                <div onClick={loginFacebook}>
                    <img  className='loginG' src="https://www.studytutorial.in/wp-content/uploads/2017/06/facebook-sign-in-button.png" alt=""/>
                </div>
                <form action="">
                    <FormItem>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </FormItem>
                    
                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />       
                    </FormItem>
                    <FormItem>
                        <Checkbox>Remember me</Checkbox> <br/>
                            <Button type="primary" htmlType="submit" className="login-form-button">Iniciar Sesion</Button> 
                    </FormItem>
                   
                </form>
            </div>         
        </div>
      
    )
}

export default LoginDisplay;



