import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-yellow-100 p-8 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-orange-600 mb-4 text-center">
          Bem-vindo à WilPaz - Gerenciamento de Feiras!
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Nossa feira acontece todos os sábados na Praça Central de Guarapuava, das 8h às 14h. 
          Venha conhecer nossos produtos artesanais, alimentos frescos e muito mais!
        </p>

        <div className="bg-orange-100 rounded-lg p-6 mb-6 shadow-inner">
          <h2 className="text-xl font-semibold text-orange-700 mb-2">
            Quer se juntar a nós?
          </h2>
          <p className="text-gray-600">
            Se você é produtor local ou artesão e quer expor seus produtos na feira, entre em contato!
            Nosso sistema facilita o cadastro, organização e acompanhamento das vendas. 
            Juntos, fortalecemos o comércio local!
          </p>
        </div>

        <div className="bg-yellow-200 p-4 rounded-md text-center text-sm text-gray-800">
          Plataforma de gerenciamento de feiras desenvolvida para otimizar seu dia a dia, 
          controlar produtos, vendas e muito mais. Simples, prática e eficiente!
        </div>
      </div>
    </div>
  );
};

export default Home;
