


export default function SignUp (){
    return(
        <>
            <p>Create an account</p>

            <input type="text" placeholder="First Name"/>

            <input type="text" placeholder="Last Name"/>

            <input type="email" placeholder="Email Address"/>

            <input type="number" placeholder="Phone Number" />

            <input type="hidden" placeholder="Create PIN"/>

            <input type="hidden" placeholder="Confirm PIN" />

            <button className="bg-green-600">Create Account...</button>

            <p>Back to Login</p>
        </>
    )
}