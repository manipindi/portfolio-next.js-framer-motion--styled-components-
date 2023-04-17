import Explore from '@/components/explore'
import IntroSection from '@/components/intro'
import InformationWrapper from 'components/information/index'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <div>
      <IntroSection/>
      <InformationWrapper/>
      <Explore/>
    </div>
  )
}
