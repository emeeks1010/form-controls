import React from "react";
import { render } from "react-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      options: ["Option 1", "Option 2", "Option 3", "Option 4"]
    };
  }

  handleChange = (event, option) => {
    this.setState({ selected: event.target.value });
  };

  render() {
    return (
      <FormControl fullWidth={this.props.fullWidth}>
        <InputLabel htmlFor="select-multiple">{this.props.label}</InputLabel>
        <Select
          multiple
          value={this.state.selected}
          onChange={this.handleChange}
          input={<Input id="select-multiple" />}
        >
          {this.state.options.map(value => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
