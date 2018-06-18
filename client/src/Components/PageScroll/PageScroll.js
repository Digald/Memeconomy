import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPages } from "./actions";
import './PageScroll.css';

class PageScroll extends Component {
  componentDidMount() {
    this.props.getPages();
  }
  render() {
    const { pages } = this.props;
    return (
      <div className="PageScroll">
        {pages.map(page =>
          <div className={page.name} key={page._id}>{page.name}</div>
        )}
      </div>
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
