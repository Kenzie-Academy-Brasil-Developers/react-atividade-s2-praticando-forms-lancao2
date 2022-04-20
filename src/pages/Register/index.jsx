import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../svg/Logo02.svg";
import { useHistory } from "react-router-dom";

const Register = ({ setUserLoged }) => {
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

  const history = useHistory();

  const formSchema = yup.object().shape({
    Name: yup
      .string()
      .required("Este campo é obrigatorio")
      .min(18, "Caracteres insufcientes"),
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
    ComfirmarSenha: yup
      .string()
      .required("Este campo é obrigatorio")
      .oneOf([yup.ref("Senha"), null], "Senhas divergentes"),
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
    setUserLoged(data);
    history.push("/page");
  };
  return (
    <div className="bgForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={Logo} alt="Logo AlexLan.png" />
        <div className="inputs_form">
          <div>
            <input placeholder="Nome de usuario" {...register("Name")} />
            <div className="error">{errors.Name?.message}</div>
          </div>
          <div>
            <input placeholder="Email" {...register("Email")} />
            <div className="error">{errors.Email?.message}</div>
          </div>
          <div>
            <input placeholder="Senha" {...register("Senha")} />
            <div className="error">{errors.Senha?.message}</div>
          </div>
          <div>
            <input
              placeholder="Comfirmar Senha"
              {...register("ComfirmarSenha")}
            />
            <div className="error">{errors.ComfirmarSenha?.message}</div>
          </div>
          <div>
            <input placeholder="Endereço" {...register("Endereço")} />
            <div className="error">{errors.Endereço?.message}</div>
          </div>
          <div>
            <input placeholder="Cidade" {...register("Cidade")} />
            <div className="error">{errors.Cidade?.message}</div>
          </div>
          <div>
            <select {...register("Estado")}>
              <div className="error">{errors.Estado?.message}</div>
              <option value="" disabled selected>
                Selecione seu Estado
              </option>
              {BrazilStates.map((element) => (
                <option value={element}>{element}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit">Enviar Resgistro</button>
      </form>
    </div>
  );
};
export default Register;
