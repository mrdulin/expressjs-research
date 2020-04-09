import formatArticle from './article';

const format = (value, incomingFormat) => {
  if (incomingFormat === 'indefinite') {
    return formatArticle(value);
  }

  return value;
};

export default format;
