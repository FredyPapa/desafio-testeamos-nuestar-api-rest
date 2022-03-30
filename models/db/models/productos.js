module.exports = ( sequelize, DataTypes) => {
    const Producto = sequelize.define(
      'Producto', 
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        price: {
          type: DataTypes.STRING,
          allowNull: false
        },
        thumbnail: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }, {
        tableName: "productos",
        timestamps: false,
        underscored: true
    });

    /*Producto.associate = (Models) =>{
      const { Role } = Models;

      Producto.belongsTo(Role, {
        foreignKey: "rol_id",
        constraints: true,
        as: "role"
      });
    }*/
    return Producto;
}








