import React from 'react';
import ReactDOM from 'react-dom';


class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };

  this.handleChange=this.handleChange.bind(this);
    
    }
   
  handleChange(event)
  
  {
    
    this.setState({input:event.target.value});
  
      }
   
    render() {
      return (
        <body>
          <header>
            Controlled Input:
          </header>

          < input 
            value={this.state.input} 
            onChange={this.handleChange}
          />

          <select>
            <option value="daddy">papi</option>
            <option value="papi">daddy</option>
          </select>
  
          <p ><a href="https://www.bing.com/videos/search?q=create+a+controlled+input+react&view=detail&mid=242A2312A699E0F8F377242A2312A699E0F8F377&FORM=VIRE">{this.state.input}</a></p>
          
        </body>
      );
    }
  };


  ReactDOM.render(<ControlledInput />, document.getElementById("root"));
