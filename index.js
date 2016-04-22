var ghost = require('ghost');
ghost().then(function (ghostServer) {

    ghostServer.config.url = 'http://blog.dontpushpush.com/';

    ghostServer.start();
});