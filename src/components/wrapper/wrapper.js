import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 9px;
  width: 80%;
  max-width: 960px;
  border-bottom: 1px solid #ebf2f6;
  word-wrap: break-word;
  background-color:#cce9ed;
  margin: 0px auto 30px auto;
  top: -35px;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  min-height: 150px;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px;
  }
  @media (max-width: 400px) {
    max-width:100%;
    top:0;
  }
`

export default Wrapper

