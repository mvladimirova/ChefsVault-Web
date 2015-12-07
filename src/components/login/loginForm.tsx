"use strict";
import * as React from "react";
import * as ReactDOM from "react-dom"; 
import {Input, ButtonInput} from "react-bootstrap";

// export module LoginFormModule {
    interface LoginProps {
        userName: string,
        password: string
    }
    interface LoginState {
    }
    
    export class LoginForm extends React.Component<LoginProps, LoginState>{
        render() {
            return (
                <form>
                    <Input type="text" label="User Name" placeholder="Enter user name"/>
                    <Input type="password" label="Password" placeholder="Enter password"/>
                    <ButtonInput type="submit" value="Submit"/>
                </form>
            )
        }
    }
    // const inputTypeInstance = (
    //     <form>
    //         <Input type="text" label="User Name" placeholder="Enter user name"/>
    //         <Input type="password" label="Password" placeholder="Enter password"/>
    //         <ButtonInput type="submit" value="Submit"/>
    //     </form>
    // );
    
    // React.render(inputTypeInstance)
// }