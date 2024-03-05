// import Sequelize from 'sequelize';

// //creates a new instance of sequelize which is an Object Relational Mapper
// const sequelize = new Sequelize(database, username, password, {
//     host: 'localhost',
//     dialect: 'postgres'
// });

// // user model, probably needs to be expanded upon
// const User = sequelize.define('User', {
   
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     username: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// // Sync the model with the database
// User.sync().then(() => {
//     console.log('User table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table', error);
// });

// export default User; 