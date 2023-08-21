import Image from 'next/image'
import Form from '../app/components/PageOne/Form'
import Slider from '../app/components/PageOne/Slides'
import { Navbar } from '../app/components/PageOne/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <Form />
    {/* <Slider /> */}
    </>
  )
}
