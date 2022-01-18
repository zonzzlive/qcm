import React from "react";

export class Hello extends React.Component {
    render(){
        return(
            <>
                <h1>Salut {this.props.identity.firstname}</h1>
            </>
        )
    }
}
