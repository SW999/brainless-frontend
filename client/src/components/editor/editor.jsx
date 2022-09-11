import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import htmlEditButton from 'quill-html-edit-button';
import { uploadData, debounce } from '../../utils';
import { EDITOR_FORMATS, EDITOR_MODULES } from '../../constants';
import './editor.css';

Quill.register({ 'modules/htmlEditButton': htmlEditButton });

export function Editor({data = '', name}) {
  const [value, setValue] = useState('');
  const quillRef = useRef(null);

  // eslint-disable-next-line
  const debouncedSave = useCallback(debounce(async value => await uploadData(value, name), 300), [name]);

  const handleChange = value => {
    setValue(value);
    //debouncedSave(value);
  };

  const imageHandler = async () => {
    const input = document.createElement('input');
    const quill =quillRef?.current?.getEditor();

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('myFile', file);

      const fileName = file.name;

      try {
        await fetch('/api/uploadfile',
          {
            method: 'post',
            body: formData
          }).then((response) => {
          const range = quill?.getSelection();

          quill?.insertEmbed(range.index, 'image', `./static/img/${fileName}`);
        }).catch((error) =>
          console.error(error)
        );
      } catch (error) {
        console.error('uploadFiles: ' + error);
      }
    };
  };

  const modules = useMemo(() => {
    return {
      ...EDITOR_MODULES,
      toolbar: {
        ...EDITOR_MODULES.toolbar,
        handlers: {
          image: imageHandler
        }
      }
    };
  }, []);

  useEffect(() => {
    if (data !== '' && value === '') {
      setValue(data);
    }
  }, [data, value]);

  return (
      <ReactQuill
        ref={quillRef}
        formats={EDITOR_FORMATS}
        modules={modules}
        onChange={handleChange}
        onBlur={() => debouncedSave(value)}
        theme='snow'
        value={value}
      />
  );
}
