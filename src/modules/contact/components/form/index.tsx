'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { validationSchema } from '@utils/schemaForm/schemaContact';
const FormContact = () => {

    const resolver = yupResolver(validationSchema)
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver });
    const onSubmit = data => console.log(data);

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap mb-4">
                <span className="w-full text-[14px] text-[#5D5D5D] font-semibold">
                    Contactenos:
                </span>
            </div>
            <div className="flex flex-wrap">
                <div className="form-group w-full md:w-1/2 px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Nombres</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("first_name")}
                        type="text"
                        placeholder="Ej: Rodrigo Alejandro"
                    />
                    {errors.first_name && (
                        <span className="text-red-500">{errors.message}</span>
                    )}
                </div>
                <div className="form-group w-full md:w-1/2 px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Apellidos</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("last_name")}
                        type="text"
                        placeholder="Ej: Hernandez Gonzales"
                    />
                </div>
                <div className="form-group w-full md:w-1/2 px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Correo Electrónico</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("email")}
                        type="text"
                        placeholder="Ej: nombre@correo.cl"
                    />
                </div>
                <div className="form-group w-full md:w-1/2 px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Teléfono</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("phone")}
                        type="text"
                        placeholder="Ej: 987654321"
                    />
                </div>
                <div className="form-group w-full md:w-1/2 px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Metros Cuadrados</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("mcuadrados")}
                    >
                        <option selected>--</option>
                        {/* Other options */}
                    </select>
                </div>
                <div className="form-group w-full md:w-1/2 px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Región</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("region")}
                    >
                        <option selected>--</option>
                        {/* Other options */}
                    </select>
                </div>
                <div className="form-group w-full px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Asunto</label>
                    <select
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        {...register("asunto")}
                    >
                        <option selected>--</option>
                        {/* Other options */}
                    </select>
                </div>
                <div className="form-group w-full px-2">
                    <label className="block text-[14px] text-[#5D5D5D]">Comentario</label>
                    <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        style={{ height: '200px' }}
                        {...register("comentario")}
                        placeholder="Comentario"
                    ></textarea>
                </div>
                <div className="text-start lg:text-center pl-3 lg:pl-0 w-full py-4">
                    <button type="submit" className="bg-gray-500 text-white py-4 px-8 rounded">Enviar</button>
                </div>
            </div>
        </form>
    )

}

export default FormContact;        