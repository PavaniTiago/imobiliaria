-- CreateTable
CREATE TABLE "Imoveis" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "aluguel" INTEGER,
    "precoCondominio" INTEGER,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT[],
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
    "vestiario" BOOLEAN,

    CONSTRAINT "Imoveis_pkey" PRIMARY KEY ("id")
);
