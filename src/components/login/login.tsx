import * as React from "react";
import * as ReactDOM from "react-dom";
import {LoginForm} from "./loginForm";
import {DropdownButton, MenuItem, ButtonToolbar, Button} from 'react-bootstrap'

export module LoginModule {
    const BUTTONS = ['Login'];
    
    function renderDropdownButton(title: string, i: number) {
        return (
            <DropdownButton bsStyle="primary" title={title} key={i} id={`dropdown-basic-${i}`}>
                <LoginForm userName="username" password="password"></LoginForm>
            </DropdownButton>
        );
    }
    const buttonInstance = (
        <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
    );
    
    ReactDOM.render(buttonInstance, document.getElementById("container"));
    
}
