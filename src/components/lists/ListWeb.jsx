
export const ListWeb = ({ text }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className='relative w-full max-w-md overflow-hidden'
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#2D7D4C] to-[#A4D4B4] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl'></div>

      <div className='relative z-10 w-full bg-gray-900/10 backdrop-blur-sm border border-white/10 
        py-4 px-6 rounded-xl 
        text-center text-white 
        font-poppins font-medium
        text-sm tracking-wider
        transform 
         '
      >
        {text}
      </div>
    </a>
  )
}