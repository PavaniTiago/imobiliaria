import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { SelectProps } from "@radix-ui/react-select";
import React from "react";

  interface searchProps extends SelectProps {
    title: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    sendToFather: (value: any) => void;
  }

export const Search = ({ title, icon, children, sendToFather }: searchProps) => {
    return (
            <Select onValueChange={(value) => sendToFather(value)}>
                <SelectTrigger className="w-[200px] py-6 gap-2">
                    {icon}
                    <SelectValue placeholder={title} />
                </SelectTrigger>
                <SelectContent>
                      {children}
                </SelectContent>
            </Select>
    )
}