import { useEffect, useState } from "react";

const Clima = () => {
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Clima em Guarapuava</h1>
        <div className="space-y-2">
            <p><strong>Cidade:</strong> Guarapuava</p>
            <p><strong>Temperatura Atual:</strong> 22°C</p>
            <p><strong>Umidade:</strong> 65%</p>
        </div>
        </div>
    );
    };

export default Clima;
