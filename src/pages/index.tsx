import * as React from "react"
import { ScrollWrapper } from "sukuroru"
import Profile from "../sections/Profile"
import Section1 from "../sections/Section1"
import Section2 from "../sections/Section2"
import Singles from "../sections/Singles"
import Socials from "../sections/Socials"
import '../styles/index.css'

// markup
const IndexPage = () => {
  return (
    <ScrollWrapper innerProps={{ id: 'main'}} horizontal>
      <Section1 />
      <Section2 />
      <Singles />
      <Profile />
      <Socials />
    </ScrollWrapper>
  )}

export default IndexPage
