var express = require('express');
var router  = express.Router();
var db      = require('../utils/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { turma: 'Info 3M' });
});

// router.get('/meu-endpoint', function(req, res) {
//   var msg = '<h3>Este é o meu primeiro endpoint</h3>';
//   res.send(msg);
//   /*res.send('<h3>Este é o meu primeiro endpoint</h3>')*/
// });

// router.get('/agora', function(req, res) {
//   var data = new Date();
//   res.send(data);
// });

// router.get('/saudar/:nome', function(req, res) {
//   var msg = '<h2>Olá, ' + req.params.nome + '!</h2>'; 
//   res.send(msg);
// });

// router.get('/calcular-imc', function(req, res) {
//   var peso     = req.query.peso;
//   var estatura = req.query.estatura;
//   var imc = peso / Math.pow(estatura, 2); 
//   var msg = '<h3>Seu IMC é ' + imc.toFixed(2) + '</h3>'; 
//   res.send(msg);
// });

module.exports = router;