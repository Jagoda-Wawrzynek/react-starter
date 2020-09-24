import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.string,
    columns: PropTypes.array,
  }

  render() {
    console.log(this.props);
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn='Animals' />
          <Column titleColumn='Planets' />
          <Column titleColumn='Minerals' />
        </div>
      </section>
    )
  }
}

export default List;
