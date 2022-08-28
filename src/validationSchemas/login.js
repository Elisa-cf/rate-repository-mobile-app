import * as yup from 'yup'

export const loginValidationSchena = yup.object().shape({
    email: yup
        .string()
        .email('You must write a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(5, 'Too short')
        .max(1000, 'Too long')
        .required('Password is required')
})