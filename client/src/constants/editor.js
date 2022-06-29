export const EDITOR_MODULES = {
  toolbar: [
    [{'header': [1, 2, 3, 4, false]}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{ 'color': [] }, { 'background': [] }],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

export const EDITOR_FORMATS = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
  'color', 'background',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];
