const os = require('os');

console.log(os.platform());//яка платформа ОС була встановлена під час компіляції Node.js.

console.log(os.release()); //показує реліз операційної системи.

console.log(os.tmpdir());//операційна директорію за замовчуванням для зберігання тимчасових файлів.

console.log(os.uptime());//час безвідмовної роботи системи в секундах.

console.log(os.userInfo());//інформацію про поточного користувача