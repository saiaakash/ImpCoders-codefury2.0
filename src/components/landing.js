import React from "react";
import Login from "./login";
import NavigationBar from "./navigation";
import PatentItem from "./patentItem";
class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      textToDisplay: ""
    };
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div style={{ width: "70%" }}>
          <Login />
        </div>

        <PatentItem />
      </div>
    );
  }
}

export default Landing;
