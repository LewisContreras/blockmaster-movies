const ErrorMapping = {
    "auth/wrong-password": "Usuario o contraseña incorrectos",
    "auth/user-not-found": "Usuario o contraseña incorrectos",
    "auth/email-already-in-use": "El correo ya está registrado"
}

const mapErrorMessage = (error) => {
    console.log(error);
    return ErrorMapping[error] || "Hubo un error, intente de nuevo"
}

export { mapErrorMessage }