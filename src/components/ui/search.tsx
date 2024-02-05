import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from "react";

  interface searchProps {
    title: string;
    icon?: React.ReactNode;
  }

export const Search = ({ title, icon }: searchProps) => {
    return (
            <Select>
                <SelectTrigger className="w-[220px] py-6 text-md gap-2">
                    {icon}
                    <SelectValue placeholder={title} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                      <SelectItem value="comprar">Comprar</SelectItem>
                      <SelectItem value="alugar">Alugar</SelectItem>
                      <SelectItem value="novos">Novos</SelectItem>
                      <SelectItem value="código">Código</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
    )
}