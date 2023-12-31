import React from "react";
import css from './Section.module.css';

function Section({title, children}) {
  return (
    <section className={css.section}>
      {title && <h2>{title}</h2>}
      { children }
    </section>
  )
}

export default Section
