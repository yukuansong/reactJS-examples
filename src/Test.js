import { TestIntegrityLevel } from "es-abstract";
import React from "react";



class Lists extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {name: "John"};
    }

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) => 
        <li>{number}</li>
        );

        return (
            <ul>
                {listItems}
            </ul>
        )
    }

}
export default Lists;
