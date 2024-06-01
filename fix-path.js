const replace = require('replace-in-file');

const options = {
  files: 'out/**/*.html',
  from: /(<(?:script|link|img)[^>]*(?:src|href)=")\/(_next\/[^"]+)/g,
  to: '$1$2',
};

try {
  const results = replace.sync(options);
  console.log('Replacement results:', results);
} catch (error) {
  console.error('Error occurred:', error);
}