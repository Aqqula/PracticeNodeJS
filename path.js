const path = require('path');

console.log(path.basename(__filename)); //назва самого поточного файлу
console.log(path.dirname(__filename)); // повертає назву каталогу же є поточний файл
console.log(path.extname(__filename));// розширення поточного файлу

console.log(path.parse(__filename));//повертає об'єкт, чиї властивості являють собою важливі елементи шляху

console.log(path.join(__dirname, 'test','second.html'));//з'єднує шляхи разом
console.log(path.join(__dirname, './test','second.html'));

