import { useEffect, useState, lazy, Suspense } from 'react';
import { getCleanText } from '../../utils';
import { MapWrapperComponent } from '../map-wrapper-component';
import { WRAPPER_TAGS } from '../../constants';

const Editor = lazy(() => import('../editor'));

export const EditableContent = ({id, wrapperClass, wrapperTag = WRAPPER_TAGS.DIV}) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (typeof id === 'string' && id !== '') {
      import(`../../data/${id}.json`).then(data => setContent(data?.default)).catch(() => setContent(''));
    }
  }, [id]);

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return (
      <MapWrapperComponent className={wrapperClass} tag={wrapperTag}>
        <Suspense fallback={<div>Loading...</div>}>
          <Editor data={getCleanText(content)} name={id}/>
        </Suspense>
      </MapWrapperComponent>
    );
  } else {
    return <MapWrapperComponent className={wrapperClass} content={getCleanText(content)} tag={wrapperTag}/>
  }
}
