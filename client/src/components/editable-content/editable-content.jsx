import { useEffect, useState } from "react";
import { getCleanText } from '../../utils/get-clean-text';
import { Editor } from "../editor";
import { MapWrapperComponent } from "../map-wrapper-component";

export const EditableContent = ({id, wrapperClass, wrapperTag}) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (typeof id === 'string' && id !== '') {
      import(`../../data/${id}.json`).then(data => setContent(() => data?.default)).catch(() => false);
    }
  }, [id]);

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return <Editor data={getCleanText(content)} name={id}/>
  } else {
    return <MapWrapperComponent className={wrapperClass} content={getCleanText(content)} tag={wrapperTag}/>
  }
}
