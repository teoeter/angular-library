const figlet = require('figlet');

figlet.text('This is a funny mesg', {
    font: 'Standard',
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
});
