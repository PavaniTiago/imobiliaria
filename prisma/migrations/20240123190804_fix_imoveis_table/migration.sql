/*
  Warnings:

  - You are about to drop the column `estado` on the `Imoveis` table. All the data in the column will be lost.
  - Added the required column `estadoSigla` to the `Imoveis` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Imoveis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "aluguel" INTEGER,
    "precoCondominio" INTEGER,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "m2" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "apartamento" BOOLEAN,
    "casa" BOOLEAN,
    "sala" BOOLEAN,
    "terreno" BOOLEAN,
    "cobertura" BOOLEAN,
    "loja" BOOLEAN,
    "apartamentoGarden" BOOLEAN,
    "hotel" BOOLEAN,
    "mobiliado" BOOLEAN,
    "vagas" INTEGER,
    "pets" BOOLEAN,
    "estadoSigla" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "numeroAndares" INTEGER,
    "piso" INTEGER,
    "suites" INTEGER,
    "centro" BOOLEAN,
    "aceitaFinanciamento" BOOLEAN,
    "aceitaPermuta" BOOLEAN,
    "aquecimentoSolar" BOOLEAN,
    "armarioCloset" BOOLEAN,
    "beiraMar" BOOLEAN,
    "portaoEletronico" BOOLEAN,
    "areaDeServico" BOOLEAN,
    "banheiroDeEmpregada" BOOLEAN,
    "campoDeFutebol" BOOLEAN,
    "carpeteDeMadeira" BOOLEAN,
    "dormitorioDeEmpregada" BOOLEAN,
    "pisoCeramico" BOOLEAN,
    "pisoArdosia" BOOLEAN,
    "pisoCimentoQueimado" BOOLEAN,
    "pisoDeGranito" BOOLEAN,
    "pisoDeMarmore" BOOLEAN,
    "pisoLaminado" BOOLEAN,
    "quadraPoliesportiva" BOOLEAN,
    "semCondominio" BOOLEAN,
    "tacoDeMadeira" BOOLEAN,
    "armarioAreaDeServico" BOOLEAN,
    "armarioBanheiro" BOOLEAN,
    "armarioCozinha" BOOLEAN,
    "armarioDormitorioDeEmpregada" BOOLEAN,
    "armarioEscritorio" BOOLEAN,
    "armarioHomeTheater" BOOLEAN,
    "armarioQuarto" BOOLEAN,
    "armarioSala" BOOLEAN,
    "pisoVinilico" BOOLEAN,
    "vestiario" BOOLEAN
);
INSERT INTO "new_Imoveis" ("aceitaFinanciamento", "aceitaPermuta", "aluguel", "apartamento", "apartamentoGarden", "aquecimentoSolar", "areaDeServico", "armarioAreaDeServico", "armarioBanheiro", "armarioCloset", "armarioCozinha", "armarioDormitorioDeEmpregada", "armarioEscritorio", "armarioHomeTheater", "armarioQuarto", "armarioSala", "banheiroDeEmpregada", "bathrooms", "beiraMar", "campoDeFutebol", "carpeteDeMadeira", "casa", "cep", "cidade", "cobertura", "description", "dormitorioDeEmpregada", "hotel", "id", "imageUrl", "loja", "m2", "mobiliado", "numeroAndares", "pets", "piso", "pisoArdosia", "pisoCeramico", "pisoCimentoQueimado", "pisoDeGranito", "pisoDeMarmore", "pisoLaminado", "pisoVinilico", "portaoEletronico", "precoCondominio", "price", "quadraPoliesportiva", "rooms", "sala", "semCondominio", "suites", "tacoDeMadeira", "terreno", "title", "vagas", "vestiario") SELECT "aceitaFinanciamento", "aceitaPermuta", "aluguel", "apartamento", "apartamentoGarden", "aquecimentoSolar", "areaDeServico", "armarioAreaDeServico", "armarioBanheiro", "armarioCloset", "armarioCozinha", "armarioDormitorioDeEmpregada", "armarioEscritorio", "armarioHomeTheater", "armarioQuarto", "armarioSala", "banheiroDeEmpregada", "bathrooms", "beiraMar", "campoDeFutebol", "carpeteDeMadeira", "casa", "cep", "cidade", "cobertura", "description", "dormitorioDeEmpregada", "hotel", "id", "imageUrl", "loja", "m2", "mobiliado", "numeroAndares", "pets", "piso", "pisoArdosia", "pisoCeramico", "pisoCimentoQueimado", "pisoDeGranito", "pisoDeMarmore", "pisoLaminado", "pisoVinilico", "portaoEletronico", "precoCondominio", "price", "quadraPoliesportiva", "rooms", "sala", "semCondominio", "suites", "tacoDeMadeira", "terreno", "title", "vagas", "vestiario" FROM "Imoveis";
DROP TABLE "Imoveis";
ALTER TABLE "new_Imoveis" RENAME TO "Imoveis";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
