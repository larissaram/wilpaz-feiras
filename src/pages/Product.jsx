import React, { useState } from "react";

const Products = () => {
    const [abaAtiva, setAbaAtiva] = useState("cadastrar");
    const produtos = [
    {
        id: 1,
        nome: "Barraca Rústica",
        preco: "R$ 759,99",
        imagem: "https://i.pinimg.com/236x/c7/98/3d/c7983de4d451dee941fbe67c4e2fb7c8.jpg",
    },
    {
        id: 2,
        nome: "Barraca Simples",
        preco: "R$ 950,00",
        imagem: "https://i.pinimg.com/736x/f6/29/ab/f629ab08973334da9247591bb6f08cf5.jpg",
    },
    {
        id: 3,
        nome: "Barraca",
        preco: "R$ 2499,29",
        imagem: "https://i.pinimg.com/236x/27/a2/c3/27a2c3f3784a1bccea9db58488ab6ae4.jpg",
    },
    ];

    return (
    <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Produtos</h1>

        <div className="flex gap-4 mb-6">
        <button
            onClick={() => setAbaAtiva("cadastrar")}
            className={`px-4 py-2 rounded ${
            abaAtiva === "cadastrar"
                ? "bg-orange-600 text-white"
                : "bg-gray-200"
            }`}
        >
            Cadastrar
        </button>
        <button
            onClick={() => setAbaAtiva("listar")}
            className={`px-4 py-2 rounded ${
            abaAtiva === "listar" ? "bg-orange-600 text-white" : "bg-gray-200"
            }`}
        >
            Listar
        </button>
        <button
            onClick={() => setAbaAtiva("editar")}
            className={`px-4 py-2 rounded ${
            abaAtiva === "editar" ? "bg-orange-600 text-white" : "bg-gray-200"
            }`}
        >
            Editar
        </button>
        </div>

        {abaAtiva === "cadastrar" && (
        <form className="bg-white p-6 rounded shadow-md max-w-md">
            <h2 className="text-lg font-semibold mb-4">Cadastrar Produto</h2>
            <input
            type="text"
            placeholder="Nome do produto"
            className="w-full mb-3 border p-2 rounded"
        />
            <textarea
            placeholder="Descrição"
            className="w-full mb-3 border p-2 rounded"
            />
            <input
            type="text"
            placeholder="Unidade"
            className="w-full mb-3 border p-2 rounded"
        />
            <input
            type="number"
            placeholder="Quantidade em estoque"
            className="w-full mb-3 border p-2 rounded"
        />
            <input
            type="date"
            placeholder="Data de cadastro"
            className="w-full mb-3 border p-2 rounded"
        />
            <input
            type="number"
            placeholder="Valor unitário de venda"
            className="w-full mb-3 border p-2 rounded"
        />
            <label className="flex items-center gap-2 mb-3">
            <input type="checkbox" />
            Produto ativo
            </label>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Salvar
        </button>
        </form>
        )}

        {abaAtiva === "listar" && (
        <div>
            <h2 className="text-lg font-semibold mb-4">Lista de Produtos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produtos.map((produto) => (
                <div
                key={produto.id}
                className="bg-white rounded-lg shadow-md p-4"
                >
                <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-full h-48 object-cover rounded-md mb-3"
                />
                <h3 className="text-lg font-bold text-orange-700">
                    {produto.nome}
                </h3>
                <p className="text-gray-600 mb-2">{produto.preco}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                    Editar
                </button>
                </div>
            ))}
            </div>
        </div>
        )}

        {abaAtiva === "editar" && (
        <div className="bg-white p-6 rounded shadow-md max-w-md">
            <h2 className="text-lg font-semibold mb-4">Editar Produto</h2>
            <p>Selecione um produto na aba "Listar" para editar.</p>
        </div>
        )}
    </div>
    );
};

export default Products;
