import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MyComponent.scss';

function MyComponent(){
  return (
    <div className={s.root}>
      <h1 className={s.title}>Hello World</h1>
    </div>
  )
}

const style = withStyles(s)(MyComponent);
