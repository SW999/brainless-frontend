export const uploadData = async (data, name) => {
  const json = JSON.stringify(data);
  const blob = new Blob([json], { type: 'application/json' });

  const formData = new FormData();
  formData.append('myFile', blob, `${name}.json`);
  await fetch('/api/uploadfile',
    {
      method: 'post',
      body: formData
    });
};
