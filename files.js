const fs = require('fs');

// read files
fs.readFile('./docs/blogs.txt', (err, data) => {
    if (err)
        console.log(err);

    console.log(data.toString());
});

// write files
fs.writeFile('./docs/blogs.txt', 'Hello, ninjas', () => console.log('files was written'));

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err)
            console.log(err);
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err)
            console.log(err);
        console.log('folder deleted');
    });
}

// delete files
if (fs.existsSync('./docs/blog.txt')) {
    fs.unlink('./docs/blog.txt', (err) => {
        if (err)
            console.log(err);
        console.log('file deleted');
    })
}