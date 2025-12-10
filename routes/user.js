let express = require('express');
let db = require('../utils/db')
let router = express.Router();

router.get('/listar', function(req, res) {
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