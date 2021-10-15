import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .required('name must be at least 2 characters')
    .min(2, 'name must be at least 2 characters'),
    size: yup.string().notRequired(),
    white: yup.boolean().notRequired(),
    red: yup.boolean().notRequired(),
    parmesan: yup.boolean().notRequired(),
    mozzarella: yup.boolean().notRequired(),
    pepperoni: yup.boolean().notRequired(),
    sausage: yup.boolean().notRequired(),
    chicken: yup.boolean().notRequired(),
    bacon: yup.boolean().notRequired(),
    beef: yup.boolean().notRequired(),
    olives: yup.boolean().notRequired(),
    mushrooms: yup.boolean().notRequired(),
    peppers: yup.boolean().notRequired(),
    jalapenos: yup.boolean().notRequired(),
    arugula: yup.boolean().notRequired(),
    special: yup.string().notRequired()
 })
export default schema;