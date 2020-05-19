import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
//import { faSave } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledResumeButton = styled.a`
  z-index: 999;
  height: 0;
  padding: 1em 0;
  width: 9em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5em;
  border: 2px solid blue;
  background-color: white;
  color: black; 
  text-transform: capitalize;
  cursor: pointer;
  svg {
    margin-right: 0.5em;
  }
   &:hover {
    color: white;
    background-color: blue;
  } 
`;

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
  
     
  `);
  return (
    <StyledResumeButton
      href={about.childMarkdownRemark.frontmatter.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* <FontAwesomeIcon icon={faSave} /> */}
      Resume
    </StyledResumeButton>
  );
};

export default ResumeButton;