import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { uploadData } from '../../utils';
import { EDITOR_FORMATS, EDITOR_MODULES } from '../../constants';
import './editor.css';

export function Editor({data = '', name}) {
  const [value, setValue] = useState('');

  const doSave = async (range, source, editor) => await uploadData(editor.getHTML(), name);

  useEffect(() => {
    setValue(() => data);
  }, [data]);

  return (
    <ReactQuill
      formats={EDITOR_FORMATS}
      modules={EDITOR_MODULES}
      onBlur={doSave}
      onChange={setValue}
      theme="snow"
      value={value}
    />
  );
}
