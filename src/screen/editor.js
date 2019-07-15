import React from "react";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import SectionEdition from "../component/section-edition";
import SectionPreview from "../component/section-preview";
import DownloadButton from "../component/download-button";
import GithubButton from "../component/github-button";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flex: 1,
    flexDirection: "row"
  },
  edition: {
    minWidth: 250,
    maxWidth: 350,
    flex: 2
  },
  preview: {
    flex: 3
  },
  button: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Editor extends React.Component {
  state = {
    theme: createMuiTheme({
      typography: {
        useNextVariants: true
      }
    }),
    view: "desktop"
  };

  handleChangeTheme = theme => {
    this.props.themeChanged(theme);
    this.setState({ theme });
  };

  handleChangeView = view => this.setState({ view });

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <SectionEdition
          rootClassName={classes.edition}
          onChange={this.handleChangeTheme}
          theme={this.state.theme}
        />
      </main>
    );
  }
}

export default withStyles(styles)(Editor);
