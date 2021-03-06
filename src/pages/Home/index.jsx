import "./style.css";
import Logo from "../../svg/Logo02.svg";
import { Link, useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <div className="login">
      <div className="conteiner_login">
        <img src={Logo} alt="Logo AlexLan.png" />
        <hr />
        <Link to="/user-register">
          {" "}
          <button onClick={() => history.push("/user-register")}>
            Registrar-se
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};
export default Home;
