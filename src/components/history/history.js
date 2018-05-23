import React, {Component} from "react";
import "./history.css";
class history extends Component {
    render() {
      const iconColor = "color:red";
      const testList = [{handling:"Added item",time : 13.37},{handling:"Removed item",time : 15.37}]
      let actions = testList.map( (action,index) => {
        return(<div key = {index} className="history-action">
        <div><p>Handling : {action.handling}</p></div><div><p>Time : {action.time}</p></div></div>);
        return actions;
      });
        return (<div className="history-container">
            <div className="history-topdiv">
                <h1>Historik</h1>
            </div>
            {actions}
            <div className="history-bottdiv"><div><div><p>Visa mer</p></div><div>
              <i className="fa fa-angle-down fa-2x" style={{iconColor}} aria-hidden="true"></i></div></div>
            </div>
        </div>)
    }
}
export default history;
