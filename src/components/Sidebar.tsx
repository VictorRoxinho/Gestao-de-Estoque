import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <FontAwesomeIcon icon={faSlack} />
        <h1>Avion</h1>
      </div>
      <div className="shortcuts">
        <div className="shortcut">
          <FontAwesomeIcon icon={faHouse} />
          <h3>Início</h3>
        </div>
        <div className="shortcut has-submenu">
          <h3>Vendas</h3>
          <div className="submenu">
            <Link to="/vendas/novo" className="submenu-item">
              Nova Venda
            </Link>
            <div className="submenu-item">Histórico de Vendas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
