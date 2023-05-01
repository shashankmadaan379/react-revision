import React, { Component } from "react";
import Search from "./components/search/Search";
import { MuiThemeProvider } from "@material-ui/core";
export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}
