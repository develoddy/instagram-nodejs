import  Sequelize  from 'sequelize'

// Como no lo vamos a utilizar en este lugar, entonces lo exportamos este objeto.
export const sequelize = new Sequelize(
    'instagram', 
    'root', 
    '', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

