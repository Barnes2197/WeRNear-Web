import React, {Component} from 'react';
import OverlayMenu from 'react-overlay-menu';
import './overlay.css'

class Overlay extends Component{
    constructor(props){
        super(props);
        this.state = {isOpen: false};
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return(
            <div>
                <button className="button" type='button' onClick= {this.toggleMenu}>Open menu</button>
                <OverlayMenu
                open={this.state.isOpen}
                onClose={this.toggleMenu}>

                </OverlayMenu>
            </div>
        )
    }



}

export default Overlay;