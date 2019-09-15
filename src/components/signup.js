import React from "react";

import { Button } from "react-bootstrap";

class Signup extends React.Component{

  constructor(){
    super()
    this.state={
      textToDisplay:""
    }
  }

render() {
  return (
    <div>
      <h1>Hello World</h1>
      <input type="file" name="file" onChange={this.onChangeHandler}/>
    </div>  
  )
}
}

export default Signup;
