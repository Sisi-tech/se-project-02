import React, { useState }  from 'react';

function SignIn({ onClose }) {
    const [isSignIn, setIsSignIn] = useState(true);
    const [signInBgColor, setSignInBgColor] = useState('#fce7f3');
    const [signUpBgColor, setSignUpBgColor] = useState('white');
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleToggle = (formType) => {
        if (formType === 'signIn') {
            setIsSignIn(true);
            setSignInBgColor('#fce7f3');
            setSignUpBgColor('white');
        } else {
            setIsSignIn(false);
            setSignInBgColor('white');
            setSignUpBgColor('#fce7f3');
        }
    }
    const handleSignSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", signInEmail);
        console.log("Password: ", signInPassword)
        setSignInEmail('');
        setSignInPassword('');
        onClose();
    }
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("FirstName: ", firstName);
        console.log("LastName ", lastName);
        setFirstName('');
        setLastName('');
        setSignUpEmail('');
        setSignUpPassword('');
        setConfirmPassword('');
        onClose();
    }
    return (
        <div className='flex flex-col items-center'>
            <div className='mb-6'>
                <button 
                    type="button" 
                    onClick={() => handleToggle('signIn')}
                    style={{backgroundColor: signInBgColor}}
                    className="p-1 rounded-full w-[140px]"
                >
                    Sign In
                </button>
                <button 
                    type="button" 
                    onClick={() => handleToggle('signUp')}
                    style={{backgroundColor: signUpBgColor}}
                    className="p-1 rounded-full w-[140px]"
                >
                    Sign Up
                </button>
            </div>
            {isSignIn ? (
                <form id="signInForm" className='w-full flex flex-col gap-4 border items-center p-10 bg-pink-50' onSubmit={handleSignSubmit}>
                <div className='flex flex-col gap-2 text-left'>
                    <label className='pl-1'>Email:</label>
                    <input 
                        className='border p-1 pl-2 w-[600px]' 
                        type="email"
                        required 
                        value={signInEmail} 
                        onChange={(e) => setSignInEmail(e.target.value)}
                    />
                </div> 
                <div className='flex flex-col gap-2 text-left'>
                    <label className='pl-1'>Password:</label>
                    <input 
                        className='border p-1 pl-2 w-[600px]' 
                        type="password"
                        required 
                        value={signInPassword} 
                        onChange={(e) => setSignInPassword(e.target.value)}
                    />
                </div>  
                <button type="submit" className='bg-pink-200 p-1 w-[140px] rounded-full hover:bg-pink-400 shadow-md mt-4'>Submit</button>    
            </form>  
            ) : (
                <form id="signUpForm" className='w-full flex flex-col gap-4 border items-center p-10 bg-pink-50' onSubmit={handleSignUpSubmit}>
                    <div className='flex flex-col gap-2 text-left'>
                        <label className='pl-1'>First Name:</label>
                        <input 
                            className='border p-1 pl-2 w-[600px]' 
                            required 
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div> 
                    <div className='flex flex-col gap-2 text-left'>
                        <label className='pl-1'>Last Name:</label>
                        <input 
                            className='border p-1 pl-2 w-[600px]' 
                            required 
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div> 
                    <div className='flex flex-col gap-2 text-left'>
                        <label className='pl-1'>Email:</label>
                        <input 
                            className='border p-1 pl-2 w-[600px]' 
                            required 
                            type='email'
                            value={signUpEmail}
                            onChange={(e) => setSignUpEmail(e.target.value)}
                        />
                    </div> 
                    <div className='flex flex-col gap-2 text-left'>
                        <label className='pl-1'>Password:</label>
                        <input 
                            className='border p-1 pl-2 w-[600px]' 
                            required 
                            type='password' 
                            value={signUpPassword}
                            onChange={(e) => setSignUpPassword(e.target.value)}
                        />
                    </div>  
                    <div className='flex flex-col gap-2 text-left'>
                        <label className='pl-1'>Confirm Password:</label>
                        <input 
                            className='border p-1 pl-2 w-[600px]' 
                            required 
                            type='password' 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </div>  
                    <button type="submit" className='bg-pink-200 p-1 w-[140px] rounded-full hover:bg-pink-400 shadow-md mt-4'>Submit</button>    
                </form> 
            )}
        </div>
    )
}

export default SignIn;