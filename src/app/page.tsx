import Image from 'next/image'
import Form from './components/Form'
import Slider from './components/Slides'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <Form />
    {/* <Slider /> */}
    </>
  )
}
