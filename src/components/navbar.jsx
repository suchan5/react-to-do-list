import React, { Component } from 'react';

class Navbar extends Component {  //Navbar로 대문자로 바꿔주고
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;