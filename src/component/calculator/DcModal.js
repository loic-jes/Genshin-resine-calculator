import React, { Component } from 'react';
import { UserPreferences } from '../UserPreferences'
// import "./modal.css";




class DcModal extends Component {

    componentDidMount = () =>
    {
        window.noScroll = () => { window.scrollTo(0, 0) };
    }

    onClose = e => {

        // document.getElementsByClassName('modalOverlayHandler')[0].classList.remove('modalOverlay');
        this.props.onClose && this.props.onClose(e);
        window.removeEventListener('scroll', window.noScroll);


        
    };

   
    


    render() {


        if (!this.props.show) {
            return null;
        }

        return (
            <>
                <div className="modalContainer">
                    <div>{this.props.children}</div>
                    <div>
                        <button className="modalButton" onClick={this.onClose}>Close</button>
                    </div>
                </div>
            </>
        )

    }
}

//     return (
//         <div className="modal" id="modal">
//           <h2>Modal Window</h2>
//           <div className="content">{this.props.children}</div>
//           <div className="actions">
//             <button className="toggle-button" onClick={this.onClose}>
//               close
//             </button>
//           </div>
//         </div>
//       );
//     }
//   }

export { DcModal };




//   render() {
//   

//   }

