"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import ReactWhatsapp from "react-whatsapp";
import { useState } from "react";
import { ArrowRight, Envelope, Phone } from "@phosphor-icons/react";

export default function Contact(){
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const formSchema = z.object({
        usermessage: z.string()
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          usermessage: "",
        },
      })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <main className="flex flex-col lg:flex-row items-center lg:gap-16 justify-center h-full w-full bg-primary pt-32 lg:pt-[20rem] pb-24">
            <div className="flex flex-col max-w-xs w-full">
                <h1 className="text-secondary text-3xl font-medium mb-3">Fale conosco!</h1>
                <span className="text-secondary mt-3 mb-3">Apenas preencha o formulário para retirar suas dúvidas e iremos responde-lo em breve.</span>
                <span className="text-secondary text-sm mt-3 font-bold flex gap-2"><Phone size={20}/> Telefone: <span className="font-normal">(19) 99901-6424</span></span>
                <span className="text-secondary text-sm mt-3 font-bold flex gap-2"><Envelope size={20}/> Email: <span className="font-normal">email@email.com</span></span>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 bg-secondary p-6 mt-8 max-w-lg w-full">
                    <FormLabel>Nome</FormLabel>
                        <Input placeholder="Digite seu nome..." value={name} onChange={(e) => setName(e.target.value)}/>
                    <FormLabel>Mensagem</FormLabel>
                        <Input placeholder="Digite sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                    <FormDescription>
                        Esta será sua mensagem enviada.
                    </FormDescription>
                    <FormMessage />
                    <ReactWhatsapp className="flex gap-3 items-center justify-center bg-primary text-center text-secondary hover:cursor-pointer py-2 hover:bg-blue-700 transition-colors shadow-lg" type="submit" number="19 99901-6424" message={`Olá meu nome é ${name} e preenchi o formulário do seu site. ${message}`} element="object">Enviar mensagem<ArrowRight size={20}/></ReactWhatsapp>
                </form>
            </Form>
        </main>
    )
}