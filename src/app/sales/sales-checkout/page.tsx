


export default function SalesCheckout (){
    return(
        <>
            <div>
                <p>Sales 1</p>
                
            </div>

            <div>
                <p>Sales 1</p>

                <input type="text" placeholder="Search for a product or scan a barcode"/>
            </div>

            {/* THIS SHOULD BE A TABLE WITH INPUTS */}
            <div>
                <div>
                    <p>Agary Paracetamol A4-3549</p>

                    <p className="text-green-600">In Stock</p>

                    <p>N3,500</p>

                    <button>Add to Cart</button>
                </div>

                <div>
                    <p>Acepol Paracetamol Susp. A4-0704</p>

                    <p className="text-green-600">In Stock</p>

                    <p>N4,000</p>

                    <button>Add to Cart</button>
                </div>

                <div>
                    <p>Albemol Paracetamol Syrup 60ml: A4-7709</p>

                    <p className="text-green-600">Out of Stock</p>

                    <p>N5,000</p>

                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}