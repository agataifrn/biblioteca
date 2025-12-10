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

router.get('/livros/listar', function(req, res) {
    var cmd = ' SELECT id_livro, titulo, ano, nome ';
    cmd = cmd + ' FROM tb_livro INNER JOIN tb_editora ';
    cmd = cmd + '   ON tb_editora.id_editora = tb_livro.id_editora ';
    cmd = cmd + 'ORDER BY titulo;';
    db.query(cmd, [], function(erro, listagem){
        if (erro){
            res.send(erro);
        }
        res.render('livros-lista', {resultado: listagem});

    });
});


router.get('/add', function(req, res) {
  res.render('livros-add');
});

module.exports = router;