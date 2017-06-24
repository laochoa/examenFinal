var express = require('express');
var router = express.Router();
var notas = {estudiante:'laura', nota:'90'}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EXAMEN FINAL',subtitle:'AVANCES EN COMPUTACION',BIENVENIDOS:'BIENVENIDOS' , notas:notas});
});

module.exports = router;
