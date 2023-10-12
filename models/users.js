const usersModel = {
    getAll : `Select 
                * FROM Users `,
    getByID: `SELECT * FROM Users Where id = ?`,
};