import { useEffect, useState, useContext } from "react";
import { Container, Grid, Card, Button } from "../styles/ProdutosStyles";
import api from "../services/api";
import Header from "../components/Header";
import EditarProdutoModal from "../components/EditarProdutoModal";
import { AuthContext } from "../context/AuthContext"; 

export default function Produtos() {
  const { user } = useContext(AuthContext); 
  const [produtos, setProdutos] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    api.get("/produtos", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Lista de Produtos</h1>
        <Grid>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <Card key={produto._id}>
                <h2>{produto.nome}</h2>
                <p>{produto.descricao}</p>
                <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>

                {user?.role === "admin" && (
                  <Button onClick={() => { setSelectedProduto(produto); setIsModalOpen(true); }}>
                    Gerenciar
                  </Button>
                )}
              </Card>
            ))
          ) : (
            <p style={{ color: "white" }}>Nenhum produto cadastrado.</p>
          )}
        </Grid>
      </Container>

      {user?.role === "admin" && (
        <EditarProdutoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} produto={selectedProduto} />
      )}
    </>
  );
}
