module.exports = (sequelize, dataTypes) => {
    let alias = 'color'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        freezeTableName: true,
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const color = sequelize.define(alias,cols,config);

    

    return color
};