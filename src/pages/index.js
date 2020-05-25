import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-awesome-styled-grid"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import siteConfig from "../../data/siteConfig"
import Hero from "../components/hero"

import Layout from "../components/layout"
import SEO from "../components/SEO/seo"
import Wrapper from "../components/wrapper"
import About from "../components/about"
import Skills from "../components/skills"
import Timeline from "../components/timeline/timeline"
import Project from "../components/projects/projectItem"
import Repositories from "../components/repositories"
import StyledResumeButton from "../resumeButton"

export const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  render() {
    const title = siteConfig.siteTitle
     const { keywords } = siteConfig
    return (
      <Layout location={this.props.location}>
        {<SEO title={title} keywords={keywords} />}

        <Hero heroImg={siteConfig.siteCover} title={title} />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={4} className="avatar">
                <img
                  className="avatar__image"
                  src="/images/upworkPhoto.jpg"
                  alt="user avatar"
                />
                <div className="social">
                  {siteConfig.social.github && (
                    <a
                      className="social-link github"
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="social-icon" size="50" />
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      className="social-link linkedin"
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icon" size="50" />
                    </a>
                  )}

                  {siteConfig.social.email && (
                    <a
                      className="social-link email"
                      href={`mailto:${siteConfig.social.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className="social-icon" size="50" />
                    </a>
                  )}
                  <StyledResumeButton />
                  <Separator />
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={4} sm={4}>
                <About title="About" text={siteConfig.authorDescription} />
              </Col>
              <Col xs={4} sm={4}>
                <Skills title="Skills" skills={siteConfig.skills} />
              </Col>
            </Row>

            <Separator />

            <Project />

            <Timeline />
            <StyledResumeButton />

            <Separator />

            <Repositories />
          </Container>
        </Wrapper>
      </Layout>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .social-link {
    padding: 18px;
    color: #555;
  }

  a.social-link.github:hover {
    color: #72bf50;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  @media (max-width: 400px) {
    .social-link {
      padding: 6px;
    }
  }
`
