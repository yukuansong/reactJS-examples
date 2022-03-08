
import React from 'react';

const ThemeContext = React.createContext('light');

class ContextApp extends React.Component {
    render() {
        return (
        <ThemeContext.Provider value='dark'>
            <Toolbar />
        </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
    return (
        <div>
            <Intermedium />
        </div>
    )
}

function Intermedium() {
    return (
        <div>
            <ThemeButton />
        </div>
    )
}

class ThemeButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <button theme={this.context} />;
    }
}

export default ContextApp;