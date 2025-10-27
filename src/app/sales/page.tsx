


export default function SalesPage (){
    return(
        <>
            <div>
                <div>
                    <p>Sales</p>

                    <button>Add Sales</button>
                </div>
                

                {/* A TAB SHOWING SALES AND CARTS */}

                <div>
                    <p>Sales 1</p>
                    
                    <input type="text" placeholder="Search for a product or scan a barcode" />


                    {/* IMPORT search icon IMAGE */}

                    <p>Search for a product or scan a barcode</p>

                </div>

                <div>
                    {/* IMPORT DELETE ICON */}

                    <p>Cart </p> 

                    <div>
                        {/* Cart with number of order */}

                        {/* IMPORT CART ICON  */}
                        <p>Cart is empty</p>

                        <p>Add Products to your sale</p>


                    </div>


                </div>

                <div>
                    <p>Total</p>

                    {/* AMOUNT ACCUMULATED */}


                </div>

                <button>Record Sale</button>
            

            </div>
        </>
    )
}