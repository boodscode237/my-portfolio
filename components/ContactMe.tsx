import { useForm, SubmitHandler } from "react-hook-form"
import {PhoneIcon, MapIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:boodscode@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})})`
    }

  return (
      <div className='h-screen relative flex px-10 flex-col text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>

          <div className="flex-col space-y-10">
              <h4 className="text-4xl font-semibold text-center">I am the dev you need.{' '} 
                  <span className='underline decoration-[#f7bb1a]/50' >Let&apos;s discuss</span></h4>

              <div className="space-y-10">
                  <div className="flex items-center space-x-5 justify-center">
                      <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                      <p className="text-2xl">+1234567890</p>
                  </div>
                  <div className="flex items-center space-x-5 justify-center">
                      <MapIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                      <p className="text-2xl">SVERDLOVSKAYA OBLAST YEKATERINBURG</p>
                  </div>
                  <div className="flex items-center space-x-5 justify-center">
                      <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                      <p className="text-2xl">boodscode@gmail.com</p>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 mx-auto w-fit">
                    <div className="flex space-x-2">
                        <input 
                        {...register('name')}
                        placeholder="Name" 
                        className="contactInput" type="text" />
                        <input 
                        {...register('email')}
                        placeholder="Email" 
                        className="contactInput" type="email" />
                    </div>
                    <input 
                    {...register('subject')}
                    placeholder="Subject"
                    className="contactInput" type="text" />
                    <textarea
                    {...register('message')}
                    placeholder="Message"
                    className="contactInput"/>
                    <button 
                    type="submit" 
                    className="bg-[#b3882e] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                  </form>
              </div>
          </div>          
    </div>
  )
}

export default ContactMe