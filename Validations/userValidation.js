import yup from 'yup'

const userSchema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required()

})

export default userSchema;