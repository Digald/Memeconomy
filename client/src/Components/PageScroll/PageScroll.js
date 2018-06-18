import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPages } from "./actions";

class PageScroll extends Component {
  componentDidMount() {
    this.props.getPages();
  }
  render() {
    const { pages } = this.props;
    return (
      <div className="PageScroll">{pages.map(page => <p>{page.name}</p>)}</div>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pagesToBeDisplayed
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPages }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageScroll);
