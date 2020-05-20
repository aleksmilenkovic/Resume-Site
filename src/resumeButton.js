import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { FaRegFilePdf } from "react-icons/fa"
const StyledResumeButton = styled.a`
  z-index: 999;
  height: 3em;
  padding: 1em 0;
  width: 7em;
  margin: 3em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4em;
  border: 3px solid #ab1b1b;
  background-color: rgba(37, 48, 59, 0.7);
  color: #cce9ed;
  text-transform: capitalize;
  cursor: pointer;
  svg {
    margin-right: 0.5em;
  }
  &:hover {
    color: #cce9ed;
    background-color: #ab1b1b;
    border: 3px solid rgba(37, 48, 59, 0.5);
    font-weight: 600;
  }
`

const ResumeButton = () => {
  const { about } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          frontmatter {
            resume
          }
        }
      }
    }
  `)
  return (
    <StyledResumeButton
      href={about.childMarkdownRemark.frontmatter.resume}
      target="_blank"
      rel="noopener noreferrer"
      
    >
      {<FaRegFilePdf />}
      Resume
    </StyledResumeButton>
  )
}

export default ResumeButton
