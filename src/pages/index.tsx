import * as React from "react"
import { ScrollWrapper } from "sukuroru"
import create from 'zustand'
import {Helmet} from 'react-helmet'

import Nav from "../components/Nav"
import Profile from "../sections/Profile"
import Section1 from "../sections/Section1"
import Section2 from "../sections/Section2"
import Singles from "../sections/Singles"
import Socials from "../sections/Socials"
import Icon from '../images/laptop.svg'
import '../styles/index.css'
import useMatchMedia from "../utils/useMatchMedia"


export const useStore = create(set => ({
  pageIdx: 0,
  changePage: (n: number | boolean) => set({pageIdx: n}),
  isMobile: false,
  changeMedia: (x: boolean) => set({isMobile: x})
}))


const IndexPage = () => {
  const isMatch = useMatchMedia()
  const {isMobile, changeMedia} = useStore()
  React.useEffect(() => {
    changeMedia(isMatch)
  }, [isMatch])

  return (
    <>
      <Helmet>
        <title>YONA YONA WEEKENDERS</title>
        <link rel="icon" type="svg" href='/laptop.svg' sizes="16x16" />
        <meta name="image" property="og:image" content='/laptop.svg'></meta>
        <meta name='description' content='Yona yona weekenders' />
        <html lang='en' />
        
      </Helmet>
      
      <Nav />
      <ScrollWrapper innerProps={{ id: 'main'}} horizontal={!isMobile}>
        
        <Section1 />
        <Section2 />
        <Singles />
        <Profile />
        <Socials />
      </ScrollWrapper>
    </>
  )}

export default IndexPage
