import React from 'react'

export default function Footer() {
  return (
      <footer className='absolute bottom-0 left-1/2 translate-x-[-50%] whitespace-nowrap p-6 text-sm text-gray-600'>
          <p>Copyright &copy; Google Clone {new Date().getFullYear()} Prastowo Adi</p>
      </footer>
  )
}
