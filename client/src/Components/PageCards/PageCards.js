import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPages, handleMouseOver } from "./actions";
import "./PageCards.css";

/*
Pagecards includes all the boxes inside the horizontal scroll including the titles and styles for it.
Probably need to refactor the conditional rendering somehow. The operator takes up a lot of space inside a small amount of space.
*/

class PageCards extends Component {
  componentDidMount() {
    this.props.getPages();
  }

  render() {
    const { pages, hover } = this.props;
    return (
      <div className="PageCards">
        {pages.map(page => (
          <div className="PageCards__individualCard" key={page._id}>
            {hover === page.number ? (
              <p className="PageCards__individualCard__pageTitle">{page.name}</p>
            ) : (
              <p className="PageCards__individualCard__pageTitle" />
            )}
            <Link
              to={page.URI}
              onPointerOver={() => this.props.handleMouseOver(page.number)} 
              onMouseOver={() => this.props.handleMouseOver(page.number)}
            >
              <div
                className={
                  hover === page.number
                    ? "PageCards__individualCard_pageLink PageCards__individualCard_pageLink--activeBorder"
                    : "PageCards__individualCard_pageLink"
                }
              >
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
  pages: state.pages.pagesToBeDisplayed,
  hover: state.pages.currentHover
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPages, handleMouseOver }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageCards);
