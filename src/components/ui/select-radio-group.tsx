import {
    Select,
    SelectContent,
    SelectGroup,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from "react";

  interface searchProps {
    title: string;
    icon?: React.ReactNode;
  }

export function SelectGroupRadio({ title, icon }: searchProps) {
    return (
            <Select>
                <SelectTrigger className="w-[260px] py-6 text-md">
                    <span className="pt-1">{icon}</span>
                    <SelectValue placeholder={title} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="px-3 py-3">
                        <RadioGroup defaultValue="Todos os Imóveis">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Todos os Imóveis" id="r1"/>
                            <Label htmlFor="r1">Todos os Imóveis</Label>
                        </div>
                        <span className="text-foreground/80">Residencial</span>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="apartamento" id="r2" />
                            <Label htmlFor="r2">Apartamento</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="apartamento garden" id="r3" />
                            <Label htmlFor="r3">Apartamento garden</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="casa" id="r3" />
                            <Label htmlFor="r3">Casa</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cobertura" id="r3" />
                            <Label htmlFor="r3">Cobertura</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="terreno" id="r3" />
                            <Label htmlFor="r3">Terreno</Label>
                        </div>
                        <span className="text-foreground/80">Comercial</span>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="casa" id="r3" />
                            <Label htmlFor="r3">Casa</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hotel" id="r3" />
                            <Label htmlFor="r3">Hotel</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="loja" id="r3" />
                            <Label htmlFor="r3">Loja</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="terreno" id="r3" />
                            <Label htmlFor="r3">Terreno</Label>
                        </div>
                    </RadioGroup>
                    </SelectGroup>
                </SelectContent>
            </Select>
    )
}