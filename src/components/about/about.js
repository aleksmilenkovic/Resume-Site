import React from "react"
import styled from "styled-components"

export default styled(({ className, title = "about", text = "" }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
})`


  p {
    font-size: 24px;
  }

  @media (max-width: 400px) {
    p {
      font-size: 20px;
      text-align:center;
    }

    h1{
      text-align:center;
    }
  }
`
