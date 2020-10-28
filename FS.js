const fs = require('fs');

fs.writeFile("file.tmp", "data", function(err){ //створює файл
    if(err)throw err;
    console.log('File write')
    fs.rename("file.tmp", "new.tmp", function(err){ //змінюємо ім'я
        if(err) throw err;
        console.log('File rename')
        
        fs.unlink("new.tmp", function(err){ //видаляємо 
            if(err) throw err;
            console.log('File delete')
        });
    });
    
});