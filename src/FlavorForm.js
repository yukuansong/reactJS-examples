import React from 'react';



class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleChange}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange} >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Cocnut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
            </form>
        )
    }

}

export default FlavorForm;