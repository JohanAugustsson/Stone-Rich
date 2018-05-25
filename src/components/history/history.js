import React, {Component} from "react";
import "./history.css";
import { connect } from 'react-redux';

class history extends Component {
    state = {
      numberOfActionsToShow : 10
    }
    render() {
      const iconColor = "color:red";

      let actionsHistory = this.props.historyActions;
      let actions = actionsHistory.map( (action,index) => {
        if(index < this.state.numberOfActionsToShow){
          return(<div key = {index} className="history-action">
            <div><p>Handling : {action}</p></div><div><p>   #{index + 1} </p></div></div>);
          } else {
            return actions;
        }
      });
        return (<div className="history-container">
            <div className="history-topdiv">
                <h1>Historik actions</h1>
            </div>
            {actions}
            <div onClick = {() => this.setState({ numberOfActionsToShow : this.state.numberOfActionsToShow + 10})} className="history-bottdiv"><div><div><p>Visa mer</p></div><div>
              <i className="fa fa-angle-down fa-2x" style={{iconColor}} aria-hidden="true"></i></div></div>
            </div>
        </div>)
    }
}
const mapStateToProps = state =>{
  return{
    historyActions : state.historyActions
  }
}
export default connect(mapStateToProps)(history);
