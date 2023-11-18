
const bcrypt = require('bcrypt');
exports.loginUser = async (req, res) => {
  const {username, password} = req.body;
  try{
    const user = await User.findone({
      where : { username },
    })

    if (!user){
      return res.status(404).json({message: "User not found"})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
      return res.status(404).json({message: "Invalid password"})
    }

    return res.status(200).json({message: "Login successful"})

  }catch(err){
    console.error(err)
    return res.status(404).json({message: "Internal Server Error"})
  }
}