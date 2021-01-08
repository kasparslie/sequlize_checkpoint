const models = require("../models");
'use strict'; 
module.exports = (sequelize, DataTypes) => {
const album = sequelize.define('album', {
title: DataTypes.STRING,
genre: DataTypes.STRING,
picture: DataTypes.STRING,
artist: DataTypes.STRING,


}, {});
    album.associate = function(models) {
        album.hasMany(models.track, {timestamps : false})
}
return album; 
}