import {React, useState} from 'react'
import pattern from '../images/pattern.jpg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
      const [FirstName, setFirstName] = useState('');
      const [LastName, setLastName] = useState('');
      const [Email, setEmail] = useState('');
      const [PhoneNumber, setPhoneNumber] = useState('');
      const [password, setpassword] = useState('');
      const [ConfirmPassword, setConfirmPassword] = useState('');

      const navigate = useNavigate();
const handleclick=()=>{
      const newErrors = {};

    // Validate first name
    if (FirstName.trim() === '') {
     window.alert("first Name required")
     return;
    }

    // Validate last name
    if (LastName.trim() === '') {
      window.alert("Last Name required")
      return;
    }

    // Validate email
    if (Email.trim() === '') {
      window.alert("Email required")
      return ;
    } else if (!/^\S+@\S+\.\S+$/.test(Email)) {
      window.alert("Invalid format ")
      return;
    }

    // Validate phone number
    if (PhoneNumber.trim() === '') {
      window.alert("phone number required");
      return;
    } else if (!/^\d{10}$/.test(PhoneNumber)) {
      window.alert("phone number is invalid")
      return;
    }

    // Validate password
    if (password === '') {
      window.alert("password is required required")
      return;
    } else if (password.length < 6) {
      window.alert('Password must be at least 6 characters');
      return;
    }

    // Validate confirm password
    if (ConfirmPassword !== password) {
      window.alert('Passwords do not match');
      return;
    }

    
 navigate('/2');
}

     
  return (
      <>
    {/* <svg viewBox="0 0 500 200 " height="100%" width="100%">
      <path d="M 0 150 C 50 170 280 10 500 100 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
      </svg> */}


<svg className='hidden sm:block' viewBox="0 0 500 200" height="100%" width="100%">
<path d="M 0 150 C 50 170 280 10 500 100 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
<path d="M 0 160 C 50 180 105 50 500 105 L 500 0 L 0 0" fill="rgb(57, 27, 112)" opacity="0.8"></path>
<path d="M 0 170 C 50 180 105 40 500 110 L 500 0 L 0 0" fill="rgb(57, 27, 112)" opacity="0.7"></path>
 
</svg>
<svg className=' md:hidden' viewBox="0 0 100 200" height="100%" width="140%">
<path d="M 0 150 C 50 170 280 10 200 70 L 500 0 L 0 0" fill="rgb(57, 27, 112)"></path>
<path d="M 0 160 C 50 180 105 50 500 105 L 500 0 L 0 0" fill="rgb(57, 27, 112)" opacity="0.8"></path>
<path d="M 0 170 C 50 180 105 40 500 110 L 500 0 L 0 0" fill="rgb(57, 27, 112)" opacity="0.7"></path>
 
</svg>
  
      
      <div  className=' absolute top-0 h-auto flex flex-col items-center pb-10 '>
      
       <div className='flex justify-between w-full px-10 h-20 items-center text-white'>
            <svg className='fill-white  h-8' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></svg>    
            <h1 className='w-[15rem] text-xl'>Create New Account</h1>
            <p>Contact Us</p>
       </div>
       <div className='w-3/4  pb-8   bg-white shadow-lg  rounded-lg'>
           <div className='flex  bg-slate-300 '>
            <div className='flex items-center bg-blue-400 w-1/3 h-[2.5rem]  rounded-r-3xl justify-center gap-2'>
                <p className=' text-white text-xs sm:text-sm '><span className=" px-2 py-[2.5px] bg-white rounded-full  text-blue-500">1</span> Your Profile</p>

            </div>
            <div className='flex items-center  w-1/3 h-[2.5rem]  rounded-r-md justify-center '>
                <p className=' text-slate-600 text-xs sm:text-sm '><span className=" px-2 py-[2.5px] bg-slate-400 rounded-full  ">2</span> Business Information</p>

            </div>
            <div className='flex items-center w-1/3 h-[2.5rem] rounded-r-md justify-center '>
                <p className=' text-slate-600 text-xs sm:text-sm'><span className=" px-2 py-[2.5px] bg-slate-400 rounded-full  ">3</span> Additional User</p>

            </div>
                
           </div>
           <div className='flex flex-col items-center gap-2  mt-5 '>
               <p className='w-[10rem] text-lg text-slate-400 '>Step 1</p>
               <p className='w-[10rem] text-2xl text-slate-500'>Your Profile</p>
               <p className='w-2/4'>Enter the login infomation for your account. you will be able to create additional users after registering.</p>
               <div className='flex flex-wrap px-32 mt-4 gap-x-10 gap-y-4'>
                  <div className=' flex flex-col items-start gap-2'>
                        <label className='text-slate-400'>First Name*</label>
                        <input
                        className=' md:w-[14rem] xl:w-[19rem] px-3 py-2 outline-none border-[1.5px] rounded-md border-slate-400 focus:border-blue-400 text-blue-400'
                        placeholder='Input Your First Name'
                        value={FirstName}
                        onChange={(e) => setFirstName(e.currentTarget.value)}
                        />
                  </div>
                 
                  <div className='flex flex-col items-start gap-2'>
                        <label className='text-slate-400'>Last Name*</label>
                        <input
                        className='md:w-[14rem] xl:w-[19rem] px-3 py-2 outline-none border-[1.5px] rounded-md border-slate-400 focus:border-blue-400 text-blue-400'
                        placeholder='Input Your Last Name'
                        value={LastName}
                        onChange={(e) => setLastName(e.currentTarget.value)}
                        />
                  </div>
                  <div className='flex flex-col items-start gap-2'>
                        <label className='text-slate-400'>Email*</label>
                        <input
                        className='md:w-[14rem] xl:w-[19rem] px-3 py-2 outline-none border-[1.5px] rounded-md border-slate-400 focus:border-blue-400 text-blue-400'
                        placeholder='Input Your Email'
                        value={Email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                  </div>
                  <div className='flex flex-col items-start gap-2'>
                        <label className='text-slate-400'>Phone Number*</label>
                        <input
                        className='md:w-[14rem] xl:w-[19rem] px-3 py-2 outline-none border-[1.5px] rounded-md border-slate-400 focus:border-blue-400 text-blue-400'
                        placeholder='Input Your Phone Number'
                        value={PhoneNumber}
                        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                        />
                  </div>
                  <div className='flex flex-col items-start gap-2'>
                        <label className='text-slate-400'>Password*</label>
                        <input
                        className='md:w-[14rem] xl:w-[19rem] px-3 py-2 outline-none border-[1.5px] rounded-md border-slate-400 focus:border-blue-400 text-blue-400'
                        placeholder='Input Your Password'
                        value={password}
                        onChange={(e) => setpassword(e.currentTarget.value)}
                        />
                  </div>
                 <div className='flex flex-col items-start gap-2'>
                        <label className='text-slate-400'>Confirm Password*</label>
                        <input
                        className='md:w-[14rem] xl:w-[19rem] px-3 py-2 outline-none border-[1.5px] rounded-md border-slate-400 focus:border-blue-400 text-blue-400'
                        placeholder='Input Your Confirm Password'
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                        />
                  </div>
                    
               </div>   
           </div>
       </div>
       <div  className='flex justify-between  w-full px-14 mt-6'> 
            <p className='flex gap-3 items-center cursor-pointer' ><span><svg  className="h-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></span>Back to Login</p>
            <button  className='flex gap-3 items-center bg-violet-500 px-4 py-2 rounded-md text-white' onClick={()=>handleclick()}>Next Step <span><svg className="h-3 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span></button>
       </div>
    </div>
   
   
    </>
  )
}

export default Register