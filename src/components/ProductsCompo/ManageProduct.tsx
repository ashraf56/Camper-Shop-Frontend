/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '../ui/button';
import { TrashIcon } from '@heroicons/react/24/outline';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Addproduct } from './Addproduct';
import UpdateProduct from './UpdateProduct';
import { useDeleteaProductMutation, useGetproductsQuery } from '@/redux/feature/productApi';
import { toast } from 'sonner';
   


const ManageProduct = () => {
    const { data, isLoading } = useGetproductsQuery(undefined,{pollingInterval:1000})

const[deleteaProduct,]=useDeleteaProductMutation()
    if (isLoading) {
        return <p>loading...</p>
    }

const handleDelet = async (id:string)=>{
  
try {
  await deleteaProduct(id)
toast.success('data deleted successfully')
} catch (error:any) {
  toast.error( error)
}
  
}


    return (
        <div className='mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont'>
          
            <div className='flex flex-col my-5 w-full container gap-4'>
                <div className=' flex justify-center  w-full'>
                    <Addproduct></Addproduct>
                </div>


            </div>
            <div className='w-full max-w-5xl mx-auto'>
            <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Product name</TableHead>
          <TableHead className="w-[200px]">Description</TableHead>
          <TableHead className='w-16'>price</TableHead>
          <TableHead className='w-32'>Stock Quantity</TableHead>
          <TableHead className='w-44 text-center'>Category</TableHead>
          <TableHead className='w-44 text-center'>Rating</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.data.map((p:any) => (
          <TableRow key={p._id}>
            <TableCell className="font-medium">{p.name}</TableCell>
            <TableCell className="font-medium">{p.description.slice(0,40)}...</TableCell>
            <TableCell className="font-medium">{p.price}</TableCell>
            <TableCell className="font-medium text-center">{p.stockQuantity}</TableCell>
            <TableCell className="font-medium text-center">{p.stockQuantity}</TableCell>
            <TableCell className="font-medium text-center">{p.rating}</TableCell>
    
            <TableCell className="font-medium flex gap-3">            
            <UpdateProduct p={p}/>
              <Button size={'icon'} onClick={()=> handleDelet(p._id)} ><TrashIcon className="h-6 w-6 text-white" /> </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
            </div>
        </div>
    );
};

export default ManageProduct;