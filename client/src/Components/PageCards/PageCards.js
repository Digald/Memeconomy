import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPages } from "./actions";
import "./PageCards.css";

/*
Pagecards includes all the boxes inside the horizontal scroll including the titles and styles for it.
*/

class PageCards extends Component {
  state = {
    isHovering: false
  };

  componentDidMount() {
    this.props.getPages();
  }

  render() {
    const { pages } = this.props;
    return (
      <div className="PageCards">
        {pages.map(page => (
          <div className="individual-card" key={page._id}>
            <p className="page-title">{page.name}</p>
            <Link to={page.URI}>
              <div className="page-link">{page.preview}</div>
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
