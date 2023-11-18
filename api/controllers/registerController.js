exports.registerUser = async (req, res) => {
  try{
    const { username, email, password } = req.body;
    User.create({
      username: username,
      email: email,
      password: password,
    })
    .then(user => {
      console.log("User Created: " + user.toJSON());
    }).catch(err => console.error(err))
      
    
    res.status(200).send("Registration Successful")
  }catch(err){ 
    console.log(err);
    res.status(500).send("Registration Failure");
  }
  

}
