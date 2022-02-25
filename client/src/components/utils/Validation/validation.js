import {object, string, ref} from 'yup'

const content = {
    requiredMsg: 'Ce champ doit être rempli.',
    invalidEmail: 'Adresse email invalide.',
    minPassword: 'Minimum 6 caractères requis.',
    confirm: 'Les mots de passe doivent correspondre.',
}

const emailFields = {
    email: string().email(content.invalidEmail).required(content.requiredMsg).trim()
}

const passwordFields = {
    password: string().min(6, content.minPassword).required(content.requiredMsg).trim()
}

const confirmPasswordFields = {
    confirmPassword: string().required(content.requiredMsg).oneOf([ref('password'), null], content.confirm).trim()
}
const registerFields = {
    firstname: string().required(content.requiredMsg),
    lastname: string().required(content.requiredMsg),
}

export const LoginSchema = object().shape({...emailFields, ...passwordFields})
export const registerSchema = object().shape({...registerFields,...emailFields, ...passwordFields, ...confirmPasswordFields})

