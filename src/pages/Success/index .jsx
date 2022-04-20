import "./style.css";
import { Link } from "react-router-dom";

const Success = ({ userLoged }) => {
  return (
    <div className="Success">
      <div className="Success_conteiner">
        <h2>Seja muito bem vindo</h2>
        <h1>{userLoged.Name}</h1>
        <Link to="/">
          <button>Sair</button>
        </Link>
      </div>
    </div>
  );
};
export default Success;
