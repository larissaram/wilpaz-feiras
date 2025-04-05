import React, { useState } from "react";

const Login = () => {
  const [modoEdicao, setModoEdicao] = useState(false);

  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login realizado com sucesso!");
  };

  const handleEditar = (e) => {
    e.preventDefault();
    alert("Dados atualizados com sucesso!");
    setModoEdicao(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={modoEdicao ? handleEditar : handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          {modoEdicao ? "Editar Usuário" : "Login"}
        </h2>

        {modoEdicao ? (
          <>
            <input
              type="text"
              placeholder="Apelido"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
              className="w-full mb-4 p-3 border rounded"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 border rounded"
            />

            <input
              type="date"
              placeholder="Data de Nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="w-full mb-4 p-3 border rounded"
            />

            <input
              type="password"
              placeholder="Nova Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mb-6 p-3 border rounded"
            />
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-3 border rounded"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-6 p-3 border rounded"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded"
        >
          {modoEdicao ? "Salvar Alterações" : "Entrar"}
        </button>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setModoEdicao(!modoEdicao)}
            className="text-sm text-orange-600 hover:underline"
          >
            {modoEdicao ? "Voltar para Login" : "Editar meus dados"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
