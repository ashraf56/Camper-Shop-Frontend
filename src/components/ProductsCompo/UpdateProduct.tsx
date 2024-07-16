/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUpadateProductMutation } from "@/redux/feature/productApi";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { categoryData } from "@/utills/categories";
import { toast } from "sonner";
import { useEffect } from "react";

const UpdateProduct = ({ p }: any) => {

    const { register, handleSubmit, reset, setValue } = useForm();
    const [upadateProduct, { isError }] = useUpadateProductMutation()

    useEffect(() => {
        // it is for geting leatest product info when modal is opened
        if (p) {
            setValue('name', p.name);
            setValue('description', p.description);
            setValue('price', p.price);
            setValue('stockQuantity', p.stockQuantity);
            setValue('rating', p.rating);
            setValue('image', p.image);
            setValue('category', p.category);
        }
    }, [p, setValue]);

    const onSubmit = async (info: any) => {


        const productInfo = {
            id: p._id,
            data: {
                name: info.name,
                description: info.description,
                price: Number(info.price),
                rating: info.rating,
                stockQuantity: Number(info.stockQuantity),
                image: info.image,
                category: info.category
            }
        }

        try {
            await upadateProduct(productInfo)
            if (isError) {
                return toast.error('unable to update')
            }
            toast.success('data updated')

            reset()
        } catch (error) {
            toast.error('unable to update')
        }
    }


    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'icon'} ><PencilSquareIcon className="h-6 w-6  text-white" /></Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] font-CustomFont">
                    <DialogHeader>
                        <DialogTitle>{p.name}</DialogTitle>

                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Product name
                                </Label>
                                <Input defaultValue={p.name}  {...register('name')} placeholder="product name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Description
                                </Label>
                                <Textarea defaultValue={p.description} placeholder="Type product description here." {...register('description')} className='col-span-3' />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Price
                                </Label>
                                <Input type="number" defaultValue={p.price} {...register('price')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Stock
                                </Label>
                                <Input type="number" defaultValue={p.stockQuantity} {...register('stockQuantity')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    rating
                                </Label>
                                <Input type="text" defaultValue={p.rating} {...register('rating')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Image
                                </Label>
                                <Input type="text" defaultValue={p.image} {...register('image')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    category
                                </Label>
                                <select defaultChecked={p.category} {...register("category")} className="col-span-3">
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
        </div>
    );
};

export default UpdateProduct;