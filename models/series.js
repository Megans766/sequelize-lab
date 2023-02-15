'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Series extends Model {

    static associate(models) {
      Series.belongsTo(models.Author, {
        foreignKey: 'authorId'
      })
    }
  }
  Series.init({
    series: DataTypes.BOOLEAN,
    bookInSeries: DataTypes.INTEGER,
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Authors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Series',
  });
  return Series;
};