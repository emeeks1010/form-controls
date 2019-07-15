import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactDOM from "react-dom";
import Drawer from "@material-ui/core/Drawer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import Editor from "./screen/editor";
import Form from "./Form";
import AppBar from "./AppBar";
import registerServiceWorker from "./registerServiceWorker";

import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";

import "typeface-roboto";

registerServiceWorker();

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: createMuiTheme({
        typography: {
          useNextVariants: true
        }
      })
    };
  }

  themeChanged = theme => {
    this.setState({ theme: theme });
  };

  render() {
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <React.Fragment>
          <CssBaseline />
          <Drawer variant="persistent" anchor="left" open>
            <Editor themeChanged={this.themeChanged} />
          </Drawer>
          <MuiThemeProvider theme={this.state.theme}>
            <main style={{ marginLeft: 240 }}>
              <AppBar />
              <Form />
            </main>
          </MuiThemeProvider>
        </React.Fragment>
      </MuiPickersUtilsProvider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
