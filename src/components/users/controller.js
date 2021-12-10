// @ts-check

/**
 * // Tipo Usuario
 * @typedef {Object} User
 * @property {string} email - email requerido
 * @property {string} password - password requerido
 * @prop {string} avatar - url del avatar opcional
 * @prop {string} nikname - nikname opcional
 */

/** @type {User} */
const user = {
  email: 'david@gmail.com',
  password: '123987',
  avatar: undefined,
  nikname: undefined
}

function getAllUsers (req, res) {
  const users = [user, user, user]

  return res.respond({ data: users })
}

export {
  getAllUsers
}
