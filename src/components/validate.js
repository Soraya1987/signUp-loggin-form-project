export const validate=(data,type)=>{
    const errors={};
    
    if(!data.email){
        errors.email="Email required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="Email address is invalid"
    }
    else {
        delete errors.email;
    }

    if(!data.password){
        errors.password="Password is reqired"
    }else if(data.password.length<6){
        errors.password="Password need to be 6 character or more"
    }else{
        delete errors.password;
    }

    
    if(type==="signup"){
        if(!data.confirmPassword){
       errors.confirmPassword="Confirm the password"
    }else if(data.confirmPassword!==data.password){
       errors.confirmPassword="Password is do not match"
    }else{
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else{
        errors.isAccepted="Accept our regulations"
    }

    if(!data.name.trim()){
        errors.name="Username required"
    }else{
        delete errors.name
    }
    }
    return errors;  

}
