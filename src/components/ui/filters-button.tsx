import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { Button } from "./button"
import { Plus } from "@phosphor-icons/react"
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

export function FiltersButtons(){
    return (
        <Sheet>
            <SheetTrigger><Button className="rounded-3xl gap-2 hover:bg-neutral-100 transition-colors" variant="secondary">Mais filtros <Plus size={16}/></Button></SheetTrigger>
            <SheetContent className="flex flex-col sm:max-w-lg">
                <h2>Mais filtros</h2>
                <div className="w-full h-full space-y-4 relative">
                    <div className="flex items-center justify-between mt-8">
                        <Label className="text-lg font-medium">Aceita pet?</Label>
                        <div className="space-x-2">
                            <Button value="true">Sim</Button>
                            <Button value="">Não</Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <Label className="text-lg font-medium">Banheiros</Label>
                        <div className="space-x-2">
                            <Button value="1">1+</Button>
                            <Button value="2">2+</Button>
                            <Button value="3">3+</Button>
                            <Button value="4">4+</Button>
                            <Button value="5">5+</Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <Label className="text-lg font-medium">Vagas</Label>
                        <div className="space-x-2">
                            <Button value="1">1+</Button>
                            <Button value="2">2+</Button>
                            <Button value="3">3+</Button>
                            <Button value="4">4+</Button>
                            <Button value="5">5+</Button>
                        </div>
                    </div>
                    <RadioGroup className="flex flex-wrap">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Default</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">Comfortable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">Compact</Label>
                        </div>
                    </RadioGroup>
                    <Button className="w-full absolute bottom-0">Encontrar imóveis</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}