'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('chitietchuyenxe', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
         
           
            idttchuyenxe: {
                type: Sequelize.INTEGER
            },
            soghe: {
                type: Sequelize.STRING
            },
           
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }

        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('chitietchuyenxe');
    }
};