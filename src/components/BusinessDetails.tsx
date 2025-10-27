


export default function BusinessDetails (){
    return(
        <>
            <p>
                Buiness Details
            </p>

            <input type="text" placeholder="Business Name"/>

            <input type="text" placeholder="Branch Name"/>

            <input type="number" placeholder="Branch Phone No." />

            <input type="text" placeholder="Area e.g Oshodi" />

            <input type="radio" placeholder="Gender" />

            <input type="text" placeholder="State"/>

            <input type="text" placeholder="Local Government Area"/>

            <button className="bg-green-600">Create Account...</button>
        </>
    )
}