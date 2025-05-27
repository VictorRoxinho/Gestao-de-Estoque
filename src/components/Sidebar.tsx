import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faBagShopping,
  faBuilding,
  faCoins,
  faBox,
  faChartBar,
  faUserPlus,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;

  .logo {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #4a154b;
    color: white;

    h1 {
      margin-left: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    svg {
      font-size: 32px;
    }
  }

  .shortcuts {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .shortcut {
    display: flex;
  }

  .submenu {
    display: flex;
    flex-direction: column;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
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
          <FontAwesomeIcon icon={faBagShopping} />
          <h3>Vendas</h3>

          <div className="submenu">
            <Link to="/vendas/novo" className="submenu-item">
              Nova Venda
            </Link>
          </div>
        </div>

        <div className="shortcut has-submenu">
          <FontAwesomeIcon icon={faBuilding} />
          <h3>Fornecedores</h3>

          <div className="submenu">
            <Link to="/fornecedores/novo" className="submenu-item">
              Novo Fornecedor
            </Link>
            <Link to="/fornecedores/lista" className="submenu-item">
              Lista de Fornecedores
            </Link>
          </div>
        </div>

        <div className="shortcut has-submenu">
          <FontAwesomeIcon icon={faCoins} />
          <h3>Financeiro</h3>

          <div className="submenu">
            <Link to="/financeiro/contas-a-pagar" className="submenu-item">
              Contas a Pagar
            </Link>
            <Link to="/financeiro/contas-a-receber" className="submenu-item">
              Contas a Receber
            </Link>
          </div>
        </div>

        <div className="shortcut has-submenu">
          <FontAwesomeIcon icon={faBox} />
          <h3>Produtos</h3>
          <div className="submenu">
            <Link to="/produtos/novo" className="submenu-item">
              Novo Produto
            </Link>
            <Link to="/produtos/lista" className="submenu-item">
              Lista de Produtos
            </Link>
          </div>
        </div>

        <div className="shortcut has-submenu">
          <FontAwesomeIcon icon={faChartBar} />
          <h3>Relatórios</h3>
          <div className="submenu">
            <Link to="/relatorios/vendas" className="submenu-item">
              Relatório de Vendas
            </Link>
            <Link to="/relatorios/estoque" className="submenu-item">
              Relatório de Estoque
            </Link>
          </div>
        </div>

        <div className="shortcut has-submenu">
          <FontAwesomeIcon icon={faUserPlus} />
          <h3>Cadastro</h3>
          <div className="submenu">
            <Link to="/cadastro/usuarios" className="submenu-item">
              Usuários
            </Link>
            <Link to="/cadastro/perfis" className="submenu-item">
              Perfis
            </Link>
          </div>
        </div>

        <div className="shortcut has-submenu">
          <FontAwesomeIcon icon={faFileInvoice} />
          <h3>Fiscal</h3>
          <div className="submenu">
            <Link to="/fiscal/nota-fiscal" className="submenu-item">
              Nota Fiscal
            </Link>
            <Link to="/fiscal/nota-fiscal-eletronica" className="submenu-item">
              Nota Fiscal Eletrônica
            </Link>
          </div>
        </div>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
