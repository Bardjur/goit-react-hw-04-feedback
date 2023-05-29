import React, { Component } from "react";
import css from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={css.section}>
        {title && <h2>{title}</h2>}
        { children }
      </section>
    )
  }
}

export default Section