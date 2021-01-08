const models = require("../models");
'use strict'; 
module.exports = (sequelize, DataTypes) => {
const track = sequelize.define('track', {
title: DataTypes.STRING,
youtube_url: DataTypes.STRING,





}, {});
    track.associate = function(models) {
        track.hasOne(models.album, {timestamps : false})
}
return track; 
}