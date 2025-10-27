



export default function OTP (){
    return(
        <>
            {/* INPUT IMAGE FOR PHONE MESSEAGE  */}

            <p>A 4-digit code has been sent to your registered phone number</p>

            <input type="number" placeholder="Enter OTP Code" />

            <button>Verify Code</button>

            <p>Resend Code</p>

            <p>Back to Login</p>
        </>
    )
}