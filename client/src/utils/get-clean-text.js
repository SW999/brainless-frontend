export const getCleanText = (text) => {
  let result = '';
  if (text !== '') {
    result = text
      .trim()
      .replace(/<p>&nbsp;<\/p>/gi, '')
      .replace(/<div>&nbsp;<\/div>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
      .replace(/\r?\n|\r/g, '');
  }
  return result;
};
