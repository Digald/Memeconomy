import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPages } from "./actions";
import "./PageCards.css";

class PageCards extends Component {
  componentDidMount() {
    this.props.getPages();
  }
  render() {
    const { pages } = this.props;
    return (
      <div className="PageCards">
        {pages.map(page => (
          <div className="individual-card" key={page._id}>
            {page.name}
            <Link to={page.URI}>
              <div className="single-page">
                {page.preview}
              </div>
            </Link>
          </div>
        ))}
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
)(PageCards);
