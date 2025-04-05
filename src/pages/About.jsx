import React from 'react';
import {Rocket, X, Check} from 'lucide-react'

const About = () => {
  return (
    <div className="bg-yellow-100 shadow-lg p-4">
      <div className="bg-amber-700 dark:bg-amber-900 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        <div className="flex items-center gap-8 p-6">
          {/* Imagem à esquerda */}
          <div className="w-1/2">
            <img
              src="https://i.pinimg.com/736x/d2/b6/e1/d2b6e167dfc283db62d6817693f9213f.jpg"
              alt="Feira"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Texto à direita */}
          <div className="w-1/2">
            <h3 className="text-white dark:text-white text-xl font-semibold tracking-tight">
              WilPaz - Gerenciamento de Feiras
            </h3>
            <p className="text-white mt-4 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Etiam vestibulum erat sed lacus maximus tristique. 
              Morbi ultricies magna et nibh semper sollicitudin. 
              Sed elementum nec dui congue posuere. Sed mi ex, 
              pretium eget neque id, aliquet accumsan lacus. 
              Sed semper dapibus magna, non ornare nibh sagittis at. 
              Etiam ultricies bibendum lectus, id ornare odio pretium vitae. 
              Nulla dapibus finibus dolor vel bibendum. 
              dignissim massa nec, mattis quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;