import React from "react";
import cn from "classnames";
import { withStyles } from "@material-ui/core/styles";

import PreviewDisplay from "./preview";
import ViewSelector from "./view-selector";

const styles = theme => ({});

class SectionPreview extends React.PureComponent {
  render() {
    const { classes, rootClassName } = this.props;
    return (
      <section className={cn(classes.root, rootClassName)}>
        <div className={classes.selector}>
          <ViewSelector
            className={classes.selector}
            onChange={this.props.onChange}
            value={this.props.view}
          />
        </div>
        <PreviewDisplay
          className={cn(classes.container, {
            [classes.desktop]: this.props.view === "desktop",
            [classes.mobile]: this.props.view === "mobile"
          })}
          theme={this.props.theme}
        />
      </section>
    );
  }
}

export default withStyles(styles)(SectionPreview);
