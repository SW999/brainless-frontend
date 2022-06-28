import {createElement} from 'react';
import { WrapperTags } from "../../constants/wrapper-tags";

export const MapWrapperComponent = ({className, content, tag}) => {
  let _tag = tag;

  if(!Object.values(WrapperTags).includes(tag)) {
    _tag = WrapperTags.DIV;
  }

  return createElement(
    _tag,
    { className, dangerouslySetInnerHTML: {__html: content} }
  );
}
