import { useState } from "react";
import { Container, Card, Input, Button } from "../styles/LoginStyles";
import api from "../services/api";
import { toast } from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await api.post("/usuarios/login", { email, senha: password });
            localStorage.setItem("token", response.data.token);
            toast.success("✅ Login realizado com sucesso", { theme: "dark" });

            setTimeout(() => {
                window.location.reload();
            }, 3000);
            window.location.href = "/Products";
        } catch (error) {
            toast.error("❌ Erro ao realizar login!", { theme: "dark" });
        }
    };

    return (
        <Container>
            <Card>
                <h2 style={{ color: "white" }}>Entrar</h2>
                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleLogin}>Login</Button>
            </Card>
        </Container>
    );
}
