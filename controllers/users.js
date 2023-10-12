const { json } = require("express");

const listUserListByID = async(req = request,res = response) => {
    let conn;
    try {
        conn = await Pool.getConnection();
         const [user] = await conn.query(userModel.getByID,[id],(err) => {
            if (err){
                throw new Error(err);

            }
         })
if(!user){
    res.status(404),json({msg: 'User NO encontrado'})
}
         res.json(user);

    } catch(error) {
        console.log(error);
        res.status(500).json(error);
    }
}

    

module.exports =(usersList);
module.exports =(usersListByID);