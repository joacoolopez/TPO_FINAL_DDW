import clsx from "clsx";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { alertInfo } from "../../helpers";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { handleAuth } = useContext(UserContext);


  const onSubmit = handleSubmit((data) => {
    
    const { email, password } = data;
    if (email === "mclovin@cineflix.com" && password === "admin") {
      handleAuth(true);
      localStorage.setItem("auth", JSON.stringify(true));
      return;
    }
    alertInfo(
      `<p class="font-semibold text-md">Su email y/o contraseña son incorrectos</p>`,
      6000
    );
    return;
  });

  return (
    <div className="bg-[#141414] p-7 rounded-lg bg-opacity-65 relative">
      <Link to="/">
        <IoMdClose className="absolute right-2 top-2 text-2xl text-gray-500 hover:text-gray-400" />
      </Link>

      <form className="mx-auto flex flex-col gap-5 " onSubmit={onSubmit}>
        <h3 className="text-[#ffffff] text-center text-2xl sm:text-3xl">
          Iniciar sesión
        </h3>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Correo electrónico
          </label>
          <input
            type="text"
            id="email"
            className={clsx(
              "bg-[#141414] border border-[#141414] text-white text-sm rounded-lg block w-full p-2.5 pr-10",
              {
                "border-red-500 focus:ring-red-600 focus:border-red-500":
                  errors.email,
                "focus:ring-[#141414] focus:border-[#141414]": !errors.email,
              }
            )}
            {...register("email", {
              required: {
                value: true,
                message: "El correo electrónico es obligatorio",
              }
            })}
          />

          {errors.email && (
            <span className="text-red-500 font-normal text-xs block mt-1">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Contraseña
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className={clsx(
                "bg-[#141414] border border-[#141414] text-white text-sm rounded-lg block w-full p-2.5 pr-10",
                {
                  "border-red-500 focus:ring-red-600 focus:border-red-500":
                    errors.email,
                  "focus:ring-[#141414] focus:border-[#141414]":
                    !errors.email,
                }
              )}
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es obligatoria",
                }
              })}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 font-normal text-xs block mt-1">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-center w-full">
          <button type="submit" className="btn-primary w-[200px]">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
