


const userRegister = async (req, res) => {
    try{
        const {email, password, name, img} = req.body;

        const exists = await User.findOne({email});
        if(exists){
            return res.status(400).json({message:"This user is already registered try to login"})
        }
        exists = new User({email, password, name, img});
        await exists.save();
    }catch(err){

    }
}