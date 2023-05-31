import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { contactMe } from '@/utils/data';
import { ChangeEvent, useState } from 'react';

const ContactMe = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const onSubmit = () => {
    window.location.href = `mailto:amodi.ahmedaziz@gmail.com?subject=${data.subject}&body=hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  const onChangeData = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-start md:flex-row max-w-7xl max-sm:max-w-xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl max-sm:text-xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-8 mt-[48px]'>
        <h4 className='text-lg font-semibold text-center sm:text-3xl md:text-4xl'>
          I have got just what you need.{' '}
          <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-5 sm:space-y-10 !mt-2'>
          <div className='flex items-center space-x-5 justify-center !mt-0 sm:!mt-5'>
            <PhoneIcon className='text-[#f7ab0a] h-3 w-3 animate-pulse sm:w-7 sm:h-7' />
            <p className='text-base sm:text-2xl'>{contactMe.phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center !mt-0 sm:!mt-5'>
            <MapPinIcon className='text-[#f7ab0a] h-3 w-3 animate-pulse sm:w-7 sm:h-7' />
            <p className='text-base sm:text-2xl'>{contactMe.address}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center !mt-0 sm:!mt-5'>
            <EnvelopeIcon className='text-[#f7ab0a] h-3 w-3 animate-pulse sm:w-7 sm:h-7 register_establishmenth-6' />
            <p className='text-base sm:text-2xl'>{contactMe.email}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className='flex flex-col min-w-[250px] space-y-2 mx-auto max-sm:!mt-4'>
          <div className='flex space-x-2 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2'>
            <input
              name='name'
              placeholder='Name'
              className='contactInput'
              onChange={onChangeData}
              type="text"
            />
            <input
              name='email'
              placeholder='Email'
              className='contactInput'
              onChange={onChangeData}
              type="email"
            />
          </div>

          <input
            name='subject'
            placeholder='Subject'
            className='contactInput'
            onChange={onChangeData}
            type="text"
          />
          <textarea
            name='message'
            placeholder='Message'
            className='contactInput'
            onChange={onChangeData}
          />

          <button
            type='submit'
            className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg max-sm:py-3 max-sm:px-6'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe