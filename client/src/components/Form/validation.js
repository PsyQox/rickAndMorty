

function validation(data){
    // console.log(data);
    const regexEmail = RegExp(/\S+@\S+\.\S+/);
    const regexPass = RegExp(/.*\d.*/);

    let incorrect = {}
    let email = data.email.trim();

    if (data.email) {
        if (!email) incorrect.email = "El email no puede estar vacio"    
    }

    if (email && !regexEmail.test(email)) {
            incorrect.email = "El email esta incorrecto";
    }else if(email && email.length > 35) {
            incorrect.email="El email no puede tener mas de 35 caracteres"
    }

    if (data.password && !regexPass.test(data.password)) {
        incorrect.password = "La contraseña tiene que tener almenos un numero"
    } else if(data.password && (data.password.length < 6 || data.password.length >10)){
        incorrect.password = "La contraseña tiene que tener una longitud entre 6 y 10"
    }

    return incorrect
}

export default validation