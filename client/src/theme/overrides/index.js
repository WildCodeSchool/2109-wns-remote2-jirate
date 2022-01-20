import { merge } from 'lodash';
import Lists from './Lists';
import Backdrop from './Backdrop';
import Paper from './Paper';
import Card from './Card';

const ComponentsOverrides = theme => {
  return merge(Lists(theme), Backdrop(theme), Paper, Card(theme));
};

export default ComponentsOverrides;
