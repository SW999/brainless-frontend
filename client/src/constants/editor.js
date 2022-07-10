export const EDITOR_MODULES = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, false] }],
    [{ size: [] }],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'color': [] }, { 'background': [] }],
    [
      { 'list': 'ordered' },
      { 'list': 'bullet' },
      { 'indent': '-1' },
      { 'indent': '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  htmlEditButton: {
    msg: 'Edit the content in HTML format',
    buttonHTML: "&lt;/&gt;",
  },
};

export const EDITOR_FORMATS = [
  'header', 'size', 'color', 'background',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'align',
];
