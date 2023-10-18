import '../index.css'
import image from "../assets/usakvisit.png"
import background2 from "../assets/background2.jpg"
import Card12 from './Card12'
import Carousel from 'better-react-carousel'
import usak from '../assets/carouselimg/usak.jpg'
import ulubey from '../assets/carouselimg/ulubey.jpg'
import sivasli from '../assets/carouselimg/sivasli.jpg'
import karahalli from '../assets/carouselimg/karahalli.jpg'
import esme from '../assets/carouselimg/esme.jpg'
import banaz from '../assets/carouselimg/banaz.jpg'
import React from 'react'
import { ImLocation2 } from 'react-icons/im'

export default function Home() {

  return (
    <html className='Backimage'>
      <div className=' bg-white h-[4px] w-full flex px-16 py-20 gap-1 place-items-center whitespace-nowrap '>
        <img height={64} width={96} alt='' src={image} className=' rounded-3xl' />
        <div className=' text-black font-serif font-bold	text-base h-[72px] w-full flex p-5 gap-10 place-items-center whitespace-nowrap '>
          <a href="/">Ana Sayfa</a>
          <a href="/hakkimizda">Hakkımızda</a>
          <a href="/blog">Blog</a>
          <a href="/sss">SSS</a>
          <a href="/bize-ulasin">Bize Ulaşın</a>
          <a href="/nerede-kalinir">Nerede Kalınır</a>
          <a href="/ne-yenir-icilir">Ne Yenir - İçilir</a>
          <a href="/nerelere-gidilir">Nerelere Gidilir</a>
          <a href="/tumu">Tümü</a>

          <form className='w-[150px] '>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ara</button>
            </div>
          </form>

        </div>
      </div>
      <div className='justify-between relative whitespace-nowrap  ' >
        <img className='Background2' alt="manzara"
          src={background2} />
        <div className='ImageBox absolute top-16'>
          <p>HELLO UŞAK</p>
          <form className='w-full py-10'>
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arama" required="" />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ara</button>
            </div>
          </form>

        </div>

        <div className='bg-white p-52 py-2 w-[1519px]' >
          <h1 className='px-6 py-5 text-4xl p-4 text-gray-500 text-center'>Konumlar
            <div className=' mt-[-5px]'>
              <div className='w-[80px] h-[1px] inline-block bg-gray-300'></div>
              <div className='inline-block h-[12px] mr-[5px] ml-[5px] relative t-[5px] w-[12px] Circle'></div>
              <div className='w-[80px] h-[1px] inline-block bg-gray-300'></div>
            </div>
          </h1>
          <Carousel cols={3} rows={1} gap={96} loop autoplay={5000} >
            <Carousel.Item>
              <Card12 image={usak}
              />
            </Carousel.Item>

            <Carousel.Item>
              <Card12 image={ulubey}
              />
            </Carousel.Item>

            <Carousel.Item>
              <Card12 image={sivasli}
              />
            </Carousel.Item>

            <Carousel.Item>
              <Card12 image={karahalli}
              />
            </Carousel.Item>

            <Carousel.Item>
              <Card12 image={esme}
              />
            </Carousel.Item>

            <Carousel.Item>
              <Card12 image={banaz}
              />
            </Carousel.Item>

          </Carousel>
        </div>

        <div>
          <div className='Yazi'>
            <h1 className='Yazi'>Visit Uşak</h1>
            <h1 className='text-center text-3xl'>Şehir Tur Rehberi</h1>
          </div>
        </div>
        <div className='bg-white'>
          <h1 className='p-[70px] font-sans text-4xl text-center font-bold'>Nereyi Gezebilirsiniz?
            <div className=' mt-[-5px]'>
              <div className='w-[80px] h-[1px] inline-block bg-gray-300'></div>
              <div className='inline-block h-[12px] mr-[5px] ml-[5px] relative t-[5px] w-[12px] Circle'></div>
              <div className='w-[80px] h-[1px] inline-block bg-gray-300'></div>
            </div>
          </h1>
        </div>
        <div>
          <div className='flex justify-center '>
            <div className='Kutu'>
              <img src="https://lh3.googleusercontent.com/p/AF1QipPn7M4a2FYLeCUnPrYxxatTaihxSKbJEVXM2GAl=s1360-w1360-h1020" alt="Ulubey Kanyonları" />
              <p className=' py-3'>ULUBEY KANYONLARI
                <h1 className='px-[292px] '><a href='https://goo.gl/maps/BgSZSxi7bioko68j9'><ImLocation2 /></a></h1>
              </p>
            </div>
            <div className='Kutu'>
              <img className='h-[247px]' src="https://res.cloudinary.com/turna/image/upload/v1662379947/clandras_k%C3%B6pr%C3%BCs%C3%BC_tarihi.jpg" alt="Clandras Köprüsü" />
              <p className=' py-3'>CLANDRAS KÖPRÜSÜ
                <h1 className='px-[292px] '><a href='https://goo.gl/maps/XNYwWUQj5UTbxcD48'><ImLocation2 /></a></h1>
              </p>
            </div>
            <div className='Kutu'>
              <img src="https://lh3.googleusercontent.com/p/AF1QipOnJgU6y8gUeLbLKbvyYrObEVDlQ3lbUAPB5XQB=s1360-w1360-h1020" alt="Ulubey Kanyonları" />
              <p className=' py-3'>TAŞYARAN VADİSİ
                <h1 className='px-[292px]'><a href='https://goo.gl/maps/YTeKSDbKTFr4iRhFA'><ImLocation2 /></a></h1>
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='Kutu'>
              <img src="https://www.kulturportali.gov.tr/repoKulturPortali/large/06022013/1aee6e92-9c80-42f7-b3af-3a5640dc24f7.jpg?format=jpg&quality=50" alt="Ulubey Kanyonları" />
              <p className=' py-3'>ULU CAMİ
                <h1 className='px-[292px] '><meta /><a href='https://goo.gl/maps/FkG6qbU97ZctMTmbA'><ImLocation2 /></a></h1>
              </p>
            </div>
            <div className='Kutu'>
              <img className='h-[247px] w-[370.4px]' src="https://lh3.googleusercontent.com/p/AF1QipN400Ho9DGaUhQJOTutHhPENqo7EhcOqAVbV-KZ=s1360-w1360-h1020" alt="Ulubey Kanyonları" />
              <p className=' py-3'>UŞAK ARKEOLOJİ MÜZESİ
                <h1 className='px-[292px] '><a href='https://goo.gl/maps/otcP8vvWJnyrbkUJ7'><ImLocation2 /></a></h1>
              </p>
            </div>
            <div className='Kutu'>
              <img className='h-[247px] w-[370.4px]' src="https://lh3.googleusercontent.com/p/AF1QipMJDYsAMEb1br_0G5eHenZ8COW-qtNzSoU8lQ-E=s1360-w1360-h1020" alt="Ulubey Kanyonları" />
              <p className=' py-3'>UŞAK TARİHİ EVLERİ
                <h1 className='px-[292px]'><a href='https://goo.gl/maps/RiNtYRk887K4aQQL9'><ImLocation2 /></a></h1>
              </p>
            </div>
          </div>
        </div>


      </div>

    </html>
  )

}