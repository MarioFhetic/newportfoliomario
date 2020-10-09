import React from "react"

import { Container, Flex } from "../../styles/globalStyles"
import { TitleAbout, SvgContent, TextContent } from "../../styles/homeStyles"

// SVGs
import { GraduationSvg } from "../../assets/svg/graduationSvg"
import { SoccerSvg } from "../../assets/svg/soccerSvg"

const HomeAbout = ({ onCursor }) => {
  return (
    <>
      <Container>
        <TitleAbout>
          My name is Mario, I'm 21
          <br /> and I come from Paris
        </TitleAbout>
      </Container>
      {/* <Container>
        <Flex>
          <SvgContent>
            <GraduationSvg></GraduationSvg>
          </SvgContent>
          <TextContent>
            <h3>Who am I ?</h3>

            <p>
              As a student at the end of the 2nd year of the HETIC Grand School
              program, I am looking for a 3-month internship from July 1st to
              October 4th. This training is versatile and has focused, during
              these first two years, on technology and code, web design, digital
              marketing and project management.
            </p>
          </TextContent>
        </Flex>
        <Flex>
          <TextContent>
            <h3>Who am I ?</h3>

            <p>
              Over the past two years, I have acquired some development and
              design skills that should help me to be useful. Passionate about
              football and sports, I feel at home in a team in which I can
              easily find my place. In group projects, I contribute to the
              fluidity of relationships and the synergy of individual skills. I
              am curious about what others can teach me and what I can bring to
              them.
            </p>
          </TextContent>
          <SvgContent>
            <SoccerSvg></SoccerSvg>
          </SvgContent>
        </Flex>
              </Container>
 */}
    </>
  )
}

export default HomeAbout
