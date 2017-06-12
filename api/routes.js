const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent'),
	elastic = require('elasticsearch')          
	

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const nameShow = req.query.show;
		
        superagent
            .get('https://api.betterdoctor.com/2016-03-01/doctors?name='+nameShow+'&user_key=8614e9d6b2427a8853857fd4968b5737')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else{
					res.json(response.body);
					addDoc(response.body)
                    
				}
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })
	
	
    return router
}

function addDoc(response){


var client = new elastic.Client({  
    host: 'localhost:9200',
    log: 'info'
});	

for (i=0;i<response.length;i++){
	client.index({
  index: 'sample',
  type: 'document',
  id: i,
  body: {
          name: response[i].data.profile.first_name, 
          text: 'Reliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.'
  }
}, function (error, response) {
  console.log(response);
});
}
	}
	