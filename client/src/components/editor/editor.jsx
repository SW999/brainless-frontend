import { useState, useCallback, useEffect } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import htmlEditButton from 'quill-html-edit-button';
import { uploadData, debounce } from '../../utils';
import { EDITOR_FORMATS, EDITOR_MODULES } from '../../constants';
import './editor.css';

Quill.register({ 'modules/htmlEditButton': htmlEditButton });

export function Editor({data = '', name}) {
  const [value, setValue] = useState('');

  const debouncedSave = useCallback(debounce(async value => await uploadData(value, name), 300), [name]);

  const handleChange = value => {
    setValue(value);
    debouncedSave(value);
  };

  useEffect(() => setValue(data), []);

  return (
      <ReactQuill
        formats={EDITOR_FORMATS}
        modules={EDITOR_MODULES}
        onChange={handleChange}
        theme="snow"
        value={value}
      />
  );
}
