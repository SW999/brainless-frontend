import {createElement} from 'react';
import { WrapperTags } from "../../constants/wrapper-tags";

export const MapWrapperComponent = ({ children = null, className, content = undefined, tag }) => {
  let _tag = tag;

  if(!Object.values(WrapperTags).includes(tag)) {
    _tag = WrapperTags.DIV;
  }

  return createElement(
    _tag,
    {
      className, ...(Boolean(content) ? {dangerouslySetInnerHTML: {__html: content}} : {children})
    }
  );
}
