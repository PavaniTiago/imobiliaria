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
import { SelectProps } from "@radix-ui/react-select";

  interface searchProps extends SelectProps {
    title: string;
    icon?: React.ReactNode;
    sendToFather: (value: string) => void
  }

export function SelectGroupRadio({ title, icon, sendToFather }: searchProps) {
    return (
            <Select>
                <SelectTrigger className="flex items-center justify-between w-full lg:w-[220px] py-7 bg-primary">
                    <div className="flex items-center justify-center gap-4">
                        <span>{icon}</span>
                        <SelectValue placeholder={title} />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup className="px-3 py-3">
                        <RadioGroup onValueChange={(value) => sendToFather(value)} defaultValue="Todos os Imóveis">
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