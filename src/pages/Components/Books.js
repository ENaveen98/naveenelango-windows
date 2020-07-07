import React, { Component } from "react";
import { Link } from "react-router-dom";

class Books extends Component {
  render() {
    if (this.props.data) {
      var books = this.props.data.books.map(function (books) {
        var projectImage = "images/books/" + books.image;
        return (
          <div key={books.title} className="columns books-item">
            <div className="item-wrap">
              <a href={books.url} title={books.title}>
                <img alt={books.title} src={projectImage} />
                <div className="overlay">
                  <div className="books-item-meta">
                    <h5>{books.title}</h5>
                    <p>{books.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="books">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              Over here I will be adding my views on a few books that I'm
              currently reading. Adding this section motivates me to take up on
              reading. Please wait until I finish my first book!
            </h1>
            <div
              id="books-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {books}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Books;
