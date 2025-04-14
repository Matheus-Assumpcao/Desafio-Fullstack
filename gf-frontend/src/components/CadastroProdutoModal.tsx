import { useState } from "react";
import { ModalContainer, ModalContent, Overlay, Input, Button } from "../styles/ModalStyles";
import api from "../services/api";
import { toast } from "react-toastify";

export default function CadastroProdutoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");
            await api.post("/produtos", { nome, descricao, valor }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            toast.success("✅ Produto cadastrado com sucesso!", { theme: "dark" });
            onClose();

            setTimeout(() => {
                window.location.reload();
            }, 3000);
            onClose();
        } catch (error) {
            toast.error("❌ Erro ao cadastrar produto!", { theme: "dark" });
        }
    };

    if (!isOpen) return null;

    return (
        <Overlay>
            <ModalContainer>
                <ModalContent>
                    <h2>Cadastrar Produto</h2>
                    <Input type="text" placeholder="Nome do Produto" onChange={(e) => setNome(e.target.value)} />
                    <Input type="text" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value)} />
                    <Input type="number" placeholder="Valor" onChange={(e) => setValor(e.target.value)} />
                    <Button onClick={handleSubmit}>Cadastrar</Button>
                    <Button onClick={onClose} style={{ background: "#777" }}>Cancelar</Button>
                </ModalContent>
            </ModalContainer>
        </Overlay>
    );
}
