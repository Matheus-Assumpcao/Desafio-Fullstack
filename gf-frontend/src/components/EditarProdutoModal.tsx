import { useState, useEffect } from "react";
import { ModalContainer, ModalContent, Overlay, Input, Button } from "../styles/ModalStyles";
import api from "../services/api";
import { toast } from "react-toastify";

export default function EditarProdutoModal({ isOpen, onClose, produto }: { isOpen: boolean; onClose: () => void; produto: any }) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    useEffect(() => {
        if (produto) {
            setNome(produto.nome);
            setDescricao(produto.descricao);
            setValor(produto.valor);
        }
    }, [produto]);

    const handleEdit = async () => {
        try {
            const token = localStorage.getItem("token");
            await api.put(`/produtos/${produto._id}`, { nome, descricao, valor }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("✅ Produto atualizado com sucesso!", { theme: "dark" }); 
            onClose();
        
            setTimeout(() => {
              window.location.reload(); 
            }, 3000);
        } catch (error) {
            toast.error("❌ Erro ao atualizar produto!", { theme: "dark" });
        }
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem("token");
            await api.delete(`/produtos/${produto._id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
    
            toast.success("🗑 Produto excluído com sucesso!", { theme: "dark" });
            onClose();
    
            setTimeout(() => {
                window.location.reload(); 
            }, 3000); 
        } catch (error) {
            toast.error("❌ Erro ao excluir produto!", { theme: "dark" });
        }
    };

    if (!isOpen || !produto) return null;

    return (
        <Overlay>
            <ModalContainer>
                <ModalContent>
                    <h2>Editar Produto</h2>
                    <Input type="text" value={nome} placeholder="Nome do Produto" onChange={(e) => setNome(e.target.value)} />
                    <Input type="text" value={descricao} placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                    <Input type="number" value={valor} placeholder="Valor" onChange={(e) => setValor(e.target.value)} />
                    <Button onClick={handleEdit}>Salvar Modificações</Button>
                    <Button onClick={handleDelete} style={{ background: "#ff3b1f" }}>Excluir Produto</Button>
                    <Button onClick={onClose} style={{ background: "#777" }}>Cancelar</Button>
                </ModalContent>
            </ModalContainer>
        </Overlay>
    );
}
