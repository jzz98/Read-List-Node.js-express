const homeController = {};
const express = require('express');


homeController.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err){
            res.json(err);
        }

        conn.query('SELECT * FROM Usuarios', (err, rows) =>{
            if(err){
                res.json(err);
            }

            res.render('home', {
                data: rows
            });
        })
    })
}

homeController.add = (req, res) =>{
    const data = req.body;

    req.getConnection((err, conn) =>{
        if(err){
            res.json(err);
        }

        conn.query('INSERT INTO Usuarios SET ?', [data], (err, rows) =>{
            if(err){
                res.json(rows);
            }

            res.redirect('/');
        })
    })
}

module.exports = homeController;