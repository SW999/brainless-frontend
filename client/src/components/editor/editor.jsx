import { useRef } from 'react';
import ReactQuill from 'react-quill';
import { uploadData, debounce } from '../../utils';
import { EDITOR_FORMATS, EDITOR_MODULES } from '../../constants';
import './editor.css';

export function Editor({data = '', name}) {
  const debouncedSave = useRef(debounce(async (text) => await uploadData(text, name), 300)).current;
  const doSave = text => debouncedSave(text);

  return (
    <ReactQuill
      formats={EDITOR_FORMATS}
      modules={EDITOR_MODULES}
      onChange={doSave}
      theme="snow"
      value={data}
    />
  );
}
