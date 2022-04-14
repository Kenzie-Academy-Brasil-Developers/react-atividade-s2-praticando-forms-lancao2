import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const BrazilStates = [
    "AC - Acre",
    "AL - Alagoas",
    "AP - Amapá",
    "AM - Amazonas",
    "BA - Bahia",
    "CE - Ceará",
    "DF - Distrito Federal",
    "ES - Espírito Santo",
    "GO - Goías",
    "MA - Maranhão",
    "MT - Mato Grosso",
    "MS - Mato Grosso do Sul",
    "MG - Minas Gerais",
    "PA - Pará",
    "PB - Paraíba",
    "PR - Paraná",
    "PE - Pernambuco",
    "PI - Piauí",
    "RJ - Rio de Janeiro",
    "RN - Rio Grande do Norte",
    "RS - Rio Grande do Sul",
    "RO - Rondônia",
    "RR - Roraíma",
    "SC - Santa Catarina",
    "SP - São Paulo",
    "SE - Sergipe",
    "TO - Tocantins",
  ];

  const formSchema = yup.object().shape({
    User_name: yup
      .string()
      .required("Este campo é obrigatorio")
      .min(18)
      .matches(/^.{18,}$/, "Caracteres insufcientes"),
    Email: yup
      .string()
      .required("Este campo é obrigatorio")
      .email("Email invalido"),
    Senha: yup
      .string()
      .required("Este campo é obrigatorio")
      .min(6)
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha fraca"
      ),
    Comfirmar_Senha: yup
      .string()
      .required("Este campo é obrigatorio")
      .oneOf([yup.ref("Senha"), null]),
    Endereço: yup.string().required("Este campo é obrigatorio"),
    Cidade: yup.string().required("Este campo é obrigatorio"),
    Estado: yup.string().required("Este campo é obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  const onSubmit = (data) => {
    console.log("oi");
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome de usuario" {...register("User_Name")} />
        <input placeholder="Email" {...register("Email")} />
        <input placeholder="Senha" {...register("Senha")} />
        <input placeholder="Comfirmar Senha" {...register("Comfirmar_Senha")} />
        <input placeholder="Endereço" {...register("Endereço")} />
        <input placeholder="Cidade" {...register("Cidade")} />
        <select {...register("Estado")}>
          <option value="" disabled selected>
            Selecione seu Estado
          </option>
          {BrazilStates.map((element) => (
            <option value={element}>{element}</option>
          ))}
        </select>
        <button type="submit">Enviar Resgistro</button>
      </form>
    </div>
  );
};
export default Register;
