import React from "react";
import { render } from "react-dom";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default class SingleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  handleChange = (event, option) => {
    this.setState({ selected: event.target.value });
  };

  render() {
    return (
      <FormControl fullWidth={this.props.fullWidth}>
        <InputLabel htmlFor="age-simple">{this.props.label}</InputLabel>
        <Select value={this.state.selected} onChange={this.handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}
