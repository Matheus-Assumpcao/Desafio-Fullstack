import { AuthContext } from "../context/AuthContext.tsx";
import { HeaderContainer, NavButton } from "../styles/HeaderStyles.ts";
import CadastroProdutoModal from "../components/CadastroProdutoModal.tsx";
import { useState, useContext } from "react"; 

export default function Header() {
    const { user } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <>
            <HeaderContainer>
                <h1>GF Software</h1>
                <div>
                    {user?.role === "admin" && (
                        <>
                            <NavButton onClick={() => setIsModalOpen(true)}>
                                + Cadastrar Produto
                            </NavButton>
                        </>
                    )}
                    <NavButton onClick={handleLogout}>🚪 Sair</NavButton>
                </div>
            </HeaderContainer>
            <CadastroProdutoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
