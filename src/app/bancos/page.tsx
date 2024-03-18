import Image from "next/image";

import bancoDoBrasil from "../../../public/bancoDoBrasil.png"
import bradesco from "../../../public/bradesco.jpg"
import caixa from "../../../public/caixa.png"
import itau from "../../../public/itauLogo.jpg"
import santander from "../../../public/santander.png"
import Link from "next/link";


export default function Bancos(){
    return (
        <main className="flex items-center justify-center h-full w-full bg-primary pt-32 lg:pt-[20rem] pb-12">
            <div className="flex flex-col items-center justify-center max-w-5xl w-full px-8">
                <h2 className="text-white text-2xl lg:text-3xl mb-4">Financiamento e bancos</h2>
                <div className="flex flex-col gap-6 p-4 lg:p-12 w-full max-w-4xl bg-white">
                    <h2 className="text-black">Escolha um banco e faça a sua simulação:</h2>
                    <div className="flex flex-wrap gap-3">
                        <Link target="_blank" href="https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx?eni_gclid=Cj0KCQjwp86EBhD7ARIsAFkgakg39StNF0YBE3S5bgNiBlnuM-BMJd6hXU5ACfQtaweeFYraleQ5fqUaAlvvEALw_wcB&pk_vid=e096ac2feeed30bf162033156524f1ab"><Image alt="image de banco" width={0} height={0} src={bancoDoBrasil} className="h-[7rem] w-[7rem] rounded-full hover:border cursor-pointer object-cover bg-yellow-200"></Image></Link>
                        <Link target="_blank" href="https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm#box1-comprar"><Image alt="image de banco" width={0} height={0} src={bradesco} className="h-[7rem] w-[7rem] rounded-full hover:border cursor-pointer object-cover"></Image></Link>
                        <Link target="_blank" href="https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso"><Image alt="image de banco" width={0} height={0} src={caixa} className="h-[7rem] w-[7rem] rounded-full hover:border cursor-pointer object-contain"></Image></Link>
                        <Link target="_blank" href="https://credito-imobiliario.itau.com.br/"><Image alt="image de banco" width={0} height={0} src={itau} className="h-[7rem] w-[7rem] rounded-full hover:border cursor-pointer object-cover"></Image></Link>
                        <Link target="_blank" href="https://www.santander.com.br/hotsite/credito-financiamento-imobiliario/?ic=homepf-cardsprod-creditoimobiliario#/dados-pessoais"><Image alt="image de banco" width={0} height={0} src={santander} className="h-[7rem] w-[7rem] rounded-full hover:border cursor-pointer object-contain"></Image></Link>
                    </div>
                </div>
            </div>
        </main>
    )
}