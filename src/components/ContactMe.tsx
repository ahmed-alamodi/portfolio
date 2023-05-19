import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { contactMe } from '@/utils/data';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactMe } from 'typing';

const ContactMe = () => {
  const {
    register,
    handleSubmit,
  } = useForm<ContactMe>();

  const onSubmit: SubmitHandler<ContactMe> = data => {
    window.location.href = `mailto:amodi.ahmedaziz@gmail.com?subject=${data.subject}&body=hi, my name is ${data.name}. ${data.message} (${data.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-start md:flex-row max-w-7xl max-sm:max-w-xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-8 mt-[48px]'>
        <h4 className='text-4xl font-semibold text-center max-sm:text-2xl'>
          I have got just what you need.{' '}
          <span className='decoration-[#f7ab0a]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-10 max-sm:space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse max-sm:w-6 max-sm:h-6' />
            <p className='text-2xl max-sm:text-xl'>{contactMe.phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse max-sm:w-6 max-sm:h-6' />
            <p className='text-2xl max-sm:text-xl'>{contactMe.address}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse max-sm:w-6 register_establishmenth-6' />
            <p className='text-2xl max-sm:text-xl'>{contactMe.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 mx-auto max-sm:!mt-4'>
          <div className='flex space-x-2 max-sm:flex-col max-sm:w-[360px] max-sm:space-x-0 max-sm:space-y-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type="text"
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />

          <button
            type='submit'
            className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe