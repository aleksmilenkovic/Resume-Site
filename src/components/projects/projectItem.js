import React from "react"
import siteConfig from "../../../data/siteConfig"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import { Separator } from "../../pages/index"

const Project = ({ className }) => {
  return (
    <div className={className}>
      <h1>Projects</h1>
      {siteConfig.projects &&
        siteConfig.projects.map(project => (
          <div key={project.id}>
            <h2 className="title">{project.title}</h2>
            <div className="hvrbox">
              <img className="hvrbox-layer_bottom" src={project.image} alt="" />
              <div className="hvrbox-layer_top">
                <div className="hvrbox-text">{project.text}</div>
              </div>
            </div>
            <h4>{project.stack}</h4>
            <div className="linkCheck">
              {project.source !== "" ? (
                <a href={project.source}>
                  <FaGithub size="20" />
                  <span>Demo</span>
                </a>
              ) : (
                <span>Local development</span>
              )}
            </div>
            <Separator />
            {/* <Separator /> */}
          </div>
        ))}
    </div>
  )
}

export default styled(Project)`
  .hvrbox,
  .hvrbox * {
    box-sizing: border-box;
  }
  .hvrbox {
    position: relative;
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }
  .hvrbox img {
    max-width: 100%;
  }
  .hvrbox .hvrbox-layer_bottom {
    display: block;
  }
  .hvrbox .hvrbox-layer_top {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(94, 87, 72, 0.9);
    color: #f0eadf;
    padding: 15px;
    -moz-transition: all 0.1s ease-in-out 0s;
    -webkit-transition: all 0.1s ease-in-out 0s;
    -ms-transition: all 0.1s ease-in-out 0s;
    transition: all 0.1s ease-in-out 0s;
  }
  .hvrbox:hover .hvrbox-layer_top,
  .hvrbox.active .hvrbox-layer_top {
    opacity: 1;
    transform: scale(1.2);
  }
  .hvrbox .hvrbox-text {
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  @media (max-width: 780px) {
    .hvrbox .hvrbox-text {
      font-size: 20px;
    }
  }

  @media (max-width: 400px) {
    .hvrbox .hvrbox-text {
      font-size: 10px;
      font-weight: 200;
    }
  }
`
