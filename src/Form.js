import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MultiSelect from "./component/MultiSelect.js";
import SingleSelect from "./component/SingleSelect.js";

import { DatePicker } from "material-ui-pickers";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      expanded: {
        about: true,
        general: true,
        description: true,
        stakeholders: true
      },
      currentTab: 0,
      personName: []
    };
  }

  handlePanelClick = panel => (event, expanded) => {
    this.setState(state => {
      return {
        expanded: Object.assign(state.expanded, {
          [panel]: !state.expanded[panel]
        })
      };
    });
  };

  tabChange = (event, newValue) => {
    this.setState({ currentTab: newValue });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div style={{ margin: 15 }}>
        <ExpansionPanel
          expanded={expanded.about}
          onChange={this.handlePanelClick("about")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="textPrimary">
              About
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography
                component="h4"
                variant="h4"
                color="textPrimary"
                gutterBottom
              >
                Findings
              </Typography>
              <Typography variant="body1" color="textPrimary" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded.general}
          onChange={this.handlePanelClick("general")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="textPrimary">
              General Information
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form noValidate autoComplete="off">
              <Grid container spacing={24}>
                <Grid item sm={6}>
                  <Grid container spacing={8}>
                    <Grid item sm={12}>
                      <TextField
                        label="Finding ID"
                        style={{ width: "100%" }}
                        disabled
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Overal Status"
                        style={{ width: "100%" }}
                        disabled
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Finding Workflow Stage"
                        style={{ width: "100%" }}
                        value="New"
                        disabled
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField label="Category" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item sm={12}>
                      <SingleSelect
                        label="Criticality"
                        fullWidth={true}
                        options={["Passed in option 1", "Passed in option 2"]}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Year"
                        style={{ width: "100%" }}
                        disabled
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <DatePicker
                        label="Date Closed"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6}>
                  <Grid container spacing={8}>
                    <Grid item sm={3}>
                      <SingleSelect label="Target" fullWidth={true} />
                    </Grid>
                    <Grid item sm={9}>
                      <MultiSelect fullWidth={true} />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Questionnaire"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Authoritative Source References"
                        style={{ width: "100%" }}
                        defaultValue="Error"
                        error
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Control Standards"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Assessment References"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Source"
                        disabled
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <TextField
                        label="Source Override"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded.description}
          onChange={this.handlePanelClick("description")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="textPrimary">
              Description
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={12}>
                    <TextField label="Name" style={{ width: "100%" }} />
                  </Grid>
                  <Grid item sm={12}>
                    <TextField
                      label="Findings"
                      style={{ width: "100%" }}
                      multiline={true}
                      rows={10}
                      rowsMax={10}
                      margin="normal"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <AppBar position="static">
          <Tabs value={this.state.currentTab} onChange={this.tabChange}>
            <Tab label="Stakeholders" />
            <Tab label="Related Closed Finding" />
          </Tabs>
        </AppBar>
        {this.state.currentTab === 0 && (
          <TabContainer>
            <ExpansionPanel
              expanded={expanded.stakeholders}
              onChange={this.handlePanelClick("stakeholders")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" color="textPrimary">
                  Stakeholders
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form noValidate autoComplete="off">
                  <Grid container spacing={24}>
                    <Grid item sm={6}>
                      <Grid container>
                        <Grid item sm={12}>
                          <TextField
                            label="Created By"
                            disabled
                            style={{ width: "100%" }}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <TextField
                            label="Assigned to"
                            style={{ width: "100%" }}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <DatePicker
                            label="Submission Due Date"
                            style={{ width: "100%" }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sm={6}>
                      <Grid container>
                        <Grid item sm={12}>
                          <TextField
                            label="Group Assignee"
                            style={{ width: "100%" }}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <TextField
                            label="Reviewer"
                            style={{ width: "100%" }}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <DatePicker
                            label="Review Due Date"
                            style={{ width: "100%" }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </TabContainer>
        )}
        {this.state.currentTab === 1 && (
          <TabContainer>GRID GOES HERE</TabContainer>
        )}
      </div>
    );
  }
}
