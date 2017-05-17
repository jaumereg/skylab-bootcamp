var express = require('express')
var app = express()

app.put('/message/:id', function(req, res, next) {
	const id = req.params.id
    const encryptedData = require('crypto')
        .createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex')
    res.end(encryptedData)

});

app.listen(process.argv[2])
