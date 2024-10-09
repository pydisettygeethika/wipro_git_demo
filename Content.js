import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <h3>Sidebar</h3>
                <ul>
                    <li><a href="#link1">Link 1</a></li>
                    <li><a href="#link2">Link 2</a></li>
                    <li><a href="#link3">Link 3</a></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
