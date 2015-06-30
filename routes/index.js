var express = require('express'),
    
    router = express.Router();


// Index
router.get('/', function(req, res) {
    res.render('index', {
        title: 'AwfulPicks'
    });
});


module.exports = router;
