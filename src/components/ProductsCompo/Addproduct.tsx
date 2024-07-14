/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { categoryData } from "@/utills/categories"
import { useCreateProductMutation } from "@/redux/feature/productApi";

export function Addproduct() {

const[createProduct,{data}]=useCreateProductMutation()

console.log(data);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data:any) => {
        

        const productInfo ={
            name: data.name,
            description: data.description,
            price: Number(data.price),
            rating: data.rating,
            stockQuantity: Number(data.stockQuantity),
            image: data.image,
            category:data.category
        }

        createProduct(productInfo)

reset()

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add a Product</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                
                <DialogHeader>
                    <DialogDescription>
                        Create a product.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-4">

                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Product name
                            </Label>
                            <Input  {...register('name')} placeholder="product name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Description
                            </Label>
                            <Textarea placeholder="Type product description here." {...register('description')} className='col-span-3' />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right">
                                Price
                            </Label>
                            <Input type="number" {...register('price')} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Stock
                            </Label>
                            <Input type="number" {...register('stockQuantity')} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                rating
                            </Label>
                            <Input type="text" {...register('rating')} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Image
                            </Label>
                            <Input type="text" {...register('image')} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                category
                            </Label>
                            <select {...register("category")} className="col-span-3">
                                {
                                    categoryData.map(c => (
                                        <option key={c.id} value={c.name}>{c.name}</option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter></form>
            </DialogContent>
        </Dialog>
    )
}
