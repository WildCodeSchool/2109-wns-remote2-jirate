import { makeVar } from '@apollo/client'

export const isLoggedInVar = makeVar(!!localStorage.getItem('token'));