import { merge } from 'lodash';
import Lists from './Lists';
import Backdrop from './Backdrop';
import Paper from './Paper'

export default function ComponentsOverrides(theme) {
  return merge(Lists(theme), Backdrop(theme), Paper(theme));
}
