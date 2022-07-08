const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('firstname').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('user_name').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	
	body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
]