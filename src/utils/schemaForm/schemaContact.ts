import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  first_name: yup.string().min(3, 'No cumple con los carácteres mínimos (3)').required('Este campo es requerido'),
  last_name: yup.string().min(3, 'No cumple con los carácteres mínimos (3)').required('Este campo es requerido'),
  email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Formato de email incorrecto').required('Este campo es requerido'),
  phone: yup.string().min(8, 'No cumple con los carácteres mínimos (8)').max(8).required('Este campo es requerido'),
  mcuadrados: yup.number().required('Este campo es requerido'),
  region: yup.string().required('Este campo es requerido'),
  asunto: yup.string().required('Este campo es requerido'),
  comentario: yup.string().required('Este campo es requerido'),
});