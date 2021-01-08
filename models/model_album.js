const models = require("../models");
'use strict'; 
module.exports = (sequelize, DataTypes) => {
const album = sequelize.define('album', {
title: DataTypes.STRING,
youtube_url: DataTypes.STRING,





}, {});
    album.associate = function(models) {
        album.hasOne(models.album, {timestamps : false})
}
return album; 
}