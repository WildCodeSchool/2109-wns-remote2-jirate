import {object, string} from 'yup'

const content = {
    requiredMsg: 'Ce champ doit être rempli.',
    invalidEmail: 'Adresse email invalide.',
    minPassword: 'Minimum 6 caractères requis.',
}

const emailFields = {
    email: string().email(content.invalidEmail).required(content.requiredMsg).trim()
}

const passwordFields = {
    password: string().min(6, content.minPassword).required(content.requiredMsg).trim()
}

export const LoginSchema = object().shape({...emailFields, ...passwordFields})