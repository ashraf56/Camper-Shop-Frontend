import AllCart from "@/components/CartspageComponent/AllCart";
import Nocart from "@/components/CartspageComponent/Nocart";
import HelperBanner from "@/components/ProductsCompo/HelperBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


const Carts = () => {

    const carts = useAppSelector((state) => state.cartsState.carts)
    const totalcartQuantoty = useAppSelector((state) => state.cartsState.totalQuantoty)
    const totalPrice= useAppSelector((state) => state.cartsState.totalPrice)
    const dispatch = useAppDispatch()


    return (
        <div className=" font-CustomFont">
            <HelperBanner />
            <div className="container pt-5">
                <h1 className="font-semibold text-xl">View all Carts</h1>
            </div>
            {/* here is   all carts  */}
          {
            carts.length === 0 ?<Nocart/>
            : <div className="lg:flex my-10 justify-center items-center gap-3 container">
              <div className="w-full">
                  <AllCart carts={carts} dispatch={dispatch}></AllCart>
              </div>
              {/* payment checkout */}
              <div className="w-full mt-4 lg:mt-0">
                  <Card >
                      <CardHeader>
                          <CardTitle>
                              Payment
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="gap-y-5">
                          <div className="flex justify-between mb-3 container">
                              <p>Total Price</p>
                              <p>${totalPrice}</p>
                          </div>

                          <div className="flex justify-between mb-3  container">
                              <p>Total Items</p>
                              <p>{totalcartQuantoty}</p>
                          </div>
                          <hr className="mt-1" />
                          <div className="flex  flex-col mb-3  container">
                              <p className="text-lg font-medium">Delivery</p>
                              <p className="text-sm ">Shipped by CampGear</p>
                          </div>
                          <hr className="mt-1 mb-3 " />
                          <div className="flex justify-between container">
                              <p className="text-xl font-semibold">Order total<span className="text-sm font-light ps-2">(Vat)</span></p>
                              <p className="text-lg font-semibold">$20.00</p>
                          </div>
                          <div className="w-full mt-4">
                              <Button size={'lg'} className="uppercase w-full h-12">
                                  Checkout
                              </Button>
                          </div>
                      </CardContent>
                  </Card>
              </div>
          </div>
          }
        </div>
    );
};

export default Carts;