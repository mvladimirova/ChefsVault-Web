/**
 * Created by Marianna on 19-Nov-15.
 */
///<reference path="../../typings/browserify/browserify.d.ts"/>
///<reference path="../../typings/react/react.d.ts" />

import * as React from "react";

export module Login {
    interface MyProps {
    }
    interface MyState {
    }

    export class Login extends React.Component<MyProps, MyState> {
        userName:string;
        password:string;

        constructor() {
            super();
            this.userName = "";
            this.password = "";
        }
    }
}
