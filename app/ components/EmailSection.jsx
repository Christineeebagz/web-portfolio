import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import InstaIcon from "../../public/instagram.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact " >
        <div className="flex flex-col items-center justify-center ">
            <h4 className="mb-3 text-3xl font-bold text-white my-12">Let's Connect</h4>
            
           
            <div className = "socials flex flex-row gap-6">
                <Link href="https://github.com/Christineeebagz">
                    <Image className ="w-8" src={GithubIcon} alt ="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/christine-mae-bagazin-851a2427a/">
                    <Image className ="w-8" src={LinkedinIcon} alt ="Linkedin Icon"  />
                </Link>
                <Link href="https://www.instagram.com/christinebagzzz/">
                    <Image className ="w-8" src={InstaIcon} alt ="Instag Icon"  />
                </Link>
            </div>
            <div>
            <p className="underline mt-2 mb-4">chrisbagazin@gmailcom</p>
            </div>
            </div>
        {/* 
            <div>
                <form className = "flex flex-col ">
                <div classname="mb-6">
                    <label htmlFor="email"  className="text-white mb-2 block text-sm font-medium">
                    E-mail</label>
                    <input 
                        type ="email" 
                        id="email" 
                        className = "bg-[#776B5D] border mb-5  border-[#B0A695] placeholder-[#EBE3D5] text-sm rounded-lg block w-full p-2.5"
                        required placeholder ="your@email.com"
                    />
                </div>

                <div classname="mb-6">
                    <label htmlFor="subject"  className="text-white mb-2  block  text-sm font-medium">
                    Subject</label>
                    <input 
                        type ="text" 
                        id="subject" 
                        className = "bg-[#776B5D] mb-5  border border-[#B0A695] placeholder-[#EBE3D5] text-sm rounded-lg block w-full p-2.5"
                        required placeholder ="(e.g., Question, Feedback, Request)"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white mb-2  block  text-sm font-medium"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className = "bg-[#776B5D] mb-5  border border-[#B0A695] placeholder-[#EBE3D5] text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk!"
                        />
                </div>
                <button
                    type="submit"
                    className="bg-[#EBE3D5] text-[#776B5D] hover:bg-[#B0A695] hover:text-[#EBE3D5] font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>

                    
                       
                   
                </form>
            </div> */}
    </section>
  )
}

export default EmailSection