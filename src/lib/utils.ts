import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function pegarPrimeiraPalavraComCondominio(frase: string) {
  frase = frase.trim();
    const contemCondominio = frase.toLowerCase().includes('condomínio');
    const indiceEspaco = frase.indexOf(' ');
  
  if (indiceEspaco === -1) {
      return frase;
  } else {
      const primeiraPalavra = frase.substring(0, indiceEspaco);
      
      if (contemCondominio) {
          return primeiraPalavra + ' em Condomínio';
      } else {
          return primeiraPalavra;
      }
  }
}