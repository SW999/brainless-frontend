import {createElement} from 'react';
import { WRAPPER_TAGS } from '../../constants';

export const MapWrapperComponent = ({ children = null, className, content = undefined, tag }) => {
  let _tag = tag;

  if(!Object.values(WRAPPER_TAGS).includes(tag)) {
    _tag = WRAPPER_TAGS.DIV;
  }

  return createElement(
    _tag,
    {
      className, ...(Boolean(content) ? {dangerouslySetInnerHTML: {__html: content}} : {children})
    }
  );
}
