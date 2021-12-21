import * as React from "react"
import { ScrollWrapper } from "sukuroru"
import Section1 from "../sections/Section1"
import Section2 from "../sections/Section2"
import '../styles/index.css'

// markup
const IndexPage = () => {
  return (
    <ScrollWrapper innerProps={{ id: 'main'}} horizontal>
      <Section1 />
      <Section2 />
    </ScrollWrapper>
  )}

export default IndexPage
