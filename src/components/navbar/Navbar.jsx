import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { H1, H6, H4, H5, H3 } from '../reusable_components/Typography';
import Cart from './Cart';

function Navbar() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <div className='fixed w-screen px-1 sm:px-10 py-5 z-50 bg-white'>
      <div className="flex flex-row justify-between items-center">
        <div className="hidden sm:flex flex-row gap-10">
          <div className="flex flex-row cursor-pointer items-center">
            <svg fill="none" height="24" viewBox="0 0 32 24" width="32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><mask id="a" height="24" maskUnits="userSpaceOnUse" width="32" x="0" y="0"><path d="m0 0h32v24h-32z" fill="#fff"/></mask><g mask="url(#a)"><g clipRule="evenodd" fillRule="evenodd"><path d="m0 0h32v24h-32z" fill="#f7fcff"/><path d="m0 14.6667v2h32v-2z" fill="#e31d1c"/><path d="m0 18.3333v2h32v-2z" fill="#e31d1c"/><path d="m0 7.33325v2h32v-2z" fill="#e31d1c"/><path d="m0 22v2h32v-2z" fill="#e31d1c"/><path d="m0 11v2h32v-2z" fill="#e31d1c"/><path d="m0 0v2h32v-2z" fill="#e31d1c"/><path d="m0 3.66675v2h32v-2z" fill="#e31d1c"/></g><path d="m0 0h20v13h-20z" fill="#2e42a5"/><path clipRule="evenodd" d="m1.72197 2.93871-.725883.50888.245063-.90561-.644714-.57391h.842084l.28243-.73907.33117.73907h.71786l-.56404.57391.21836.90561zm4 0-.72588.50888.24506-.90561-.64471-.57391h.84208l.28243-.73907.33117.73907h.71786l-.56404.57391.21836.90561zm3.27412.50888.72588-.50888.70233.50888-.2184-.90561.5641-.57391h-.7179l-.33115-.73907-.28243.73907h-.84208l.64471.57391zm4.72591-.50888-.7259.50888.2451-.90561-.6448-.57391h.8421l.2825-.73907.3311.73907h.7179l-.5641.57391.2184.90561zm-12.725913 4.50888.725883-.50888.70233.50888-.21836-.90561.56404-.57391h-.71786l-.33117-.73907-.28243.73907h-.842084l.644714.57391zm4.725883-.50888-.72588.50888.24506-.90561-.64471-.57391h.84208l.28243-.73907.33117.73907h.71786l-.56404.57391.21836.90561zm3.27412.50888.72588-.50888.70233.50888-.2184-.90561.5641-.57391h-.7179l-.33115-.73907-.28243.73907h-.84208l.64471.57391zm4.72591-.50888-.7259.50888.2451-.90561-.6448-.57391h.8421l.2825-.73907.3311.73907h.7179l-.5641.57391.2184.90561zm-12.725913 4.50889.725883-.5089.70233.5089-.21836-.9056.56404-.57393h-.71786l-.33117-.73907-.28243.73907h-.842084l.644714.57393zm4.725883-.5089-.72588.5089.24506-.9056-.64471-.57393h.84208l.28243-.73907.33117.73907h.71786l-.56404.57393.21836.9056zm3.27412.5089.72588-.5089.70233.5089-.2184-.9056.5641-.57393h-.7179l-.33115-.73907-.28243.73907h-.84208l.64471.57393zm4.72591-.5089-.7259.5089.2451-.9056-.6448-.57393h.8421l.2825-.73907.3311.73907h.7179l-.5641.57393.2184.9056zm3.2741-7.49111.7259-.50888.7023.50888-.2184-.90561.5641-.57391h-.7179l-.3311-.73907-.2825.73907h-.8421l.6448.57391zm.7259 3.49112-.7259.50888.2451-.90561-.6448-.57391h.8421l.2825-.73907.3311.73907h.7179l-.5641.57391.2184.90561zm-.7259 4.50889.7259-.5089.7023.5089-.2184-.9056.5641-.57393h-.7179l-.3311-.73907-.2825.73907h-.8421l.6448.57393zm-13.27413-6.50889-.72588.50888.24506-.90561-.64471-.57391h.84208l.28243-.73907.33117.73907h.71786l-.56404.57391.21836.90561zm3.27412.50888.72588-.50888.70233.50888-.21836-.90561.56404-.57391h-.71786l-.33117-.73907-.28243.73907h-.84208l.64471.57391zm4.72591-.50888-.7259.50888.2451-.90561-.6448-.57391h.8421l.2825-.73907.3311.73907h.7179l-.5641.57391.2184.90561zm-8.72591 4.50888.72588-.50888.70233.50888-.21836-.90561.56404-.57391h-.71786l-.33117-.73907-.28243.73907h-.84208l.64471.57391zm4.72588-.50888-.72588.50888.24506-.90561-.64471-.57391h.84208l.28243-.73907.33117.73907h.71786l-.56404.57391.21836.90561zm3.27413.50888.7259-.50888.7023.50888-.2184-.90561.5641-.57391h-.7179l-.3311-.73907-.2825.73907h-.8421l.6448.57391zm4.7259-4.50888-.7259.50888.2451-.90561-.6448-.57391h.8421l.2825-.73907.3311.73907h.7179l-.5641.57391.2184.90561zm-.7259 4.50888.7259-.50888.7023.50888-.2184-.90561.5641-.57391h-.7179l-.3311-.73907-.2825.73907h-.8421l.6448.57391z" fill="#f7fcff" fillRule="evenodd"/></g></svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <span><H6>USD</H6></span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="item">
            <Link className ="link" to="/products/1"><H6>Women</H6></Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2"><H6>Men</H6></Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3"><H6>Children</H6></Link>
          </div>
        </div>
        <div>
          <Link className ="font-outfit" to="/"><H4>ONE STOP SHOP</H4></Link>
          {/* <H1>ONE STOP SHOP</H1> */}
        </div>
        <div className="hidden sm:flex flex-row gap-10">
          <div className="item">
            <Link className ="link" to="/"><H6>Homepage</H6></Link>
          </div>
          <div className="item">
            <Link className ="link" to="/"><H6>About</H6></Link>
          </div>
          <div className="item">
            <Link className ="link" to="/"><H6>Contact</H6></Link>
          </div>
          <div className="item">
            <Link className ="link" to="/"><H6>Stores</H6></Link>
          </div>
          <div className="flex flex-row gap-5">
            <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>

            <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </div>

            <div className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>


            <div className="cursor-pointer relative" onClick={()=>setOpenCart(!openCart)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              <span className='px-[7px] bg-blue-500 rounded-full text-white text-[14px] absolute bottom-[16px] left-[16px]'>0</span>
            </div>
          </div>
        </div>
        <div 
          className='block sm:hidden'
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
      </div>
      {openCart && <Cart/>}
    </div>
  )
}

export default Navbar