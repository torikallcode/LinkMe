import { ListWeb } from "./ListWeb"

const WEB_DEVELOPMENT_LIST = [
  {
    text: 'Pembuatan Website Statis',
  },
  {
    text: 'Pembuatan Website Dinamis',
  },
  {
    text: 'Konversi Desain Ke Website',
  },
  {
    text: 'Pembuatan Landing Page',
  },
  {
    text: 'E-commerce & Toko Online',
  },
]

export const ListProduct = () => {
  return (
    <div className='flex space-y-3 flex-col items-center font-poppins mb-10'>
      {WEB_DEVELOPMENT_LIST.map((item, index) => (
        // <List
        //   icon={item.icon}
        //   link={item.link}
        //   text={item.text}
        //   key={index}
        // />
        <ListWeb
          icon={item.icon}
          link={item.link}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  )
}