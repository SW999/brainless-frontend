import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadData } from "../../utils/upload-data";

export function Editor({data = '', name}) {
  const [value, setValue] = useState('');

  const doSave = async (range, source, editor) => {
    console.log('editor: ', typeof editor.getHTML());
    await uploadData(editor.getHTML(), name);
  }

  useEffect(() => {
    setValue(() => data);
  }, [data]);

  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} onBlur={doSave}/>
  );
}
