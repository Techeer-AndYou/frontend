import styled from '@emotion/styled'

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  margin: auto;
  position: relative;

  &:hover > div:nth-of-type(2) {
    top: 0;
  }

  &:hover > div:nth-of-type(3) {
    top: 0;
  }
`

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.7s;
  backdrop-filter: opacity(100%);
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
  opacity: 0.4;
  top: 100%;
  transition: 0.2s;
`

const ContentWrapper = styled.div`
  position: absolute;
  background-image: linear-gradient(to top, black, transparent);
  width: 100%;
  height: 100%;
  top: 75%;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Monospace';
    font-weight: 800;
    text-align: center;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    color: white;
    margin-top: 10px;
  }

  h3 {
    font-family: 'Monospace';
    text-align: center;
    width: 80%;
    color: white;
    font-size: 24px;
    margin-top: 5px;
  }

  button {
    background-color: white;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    height: 40px;
    width: 240px;
    margin-top: 4px;
  }
`

const Information = () => {
  return (
    <div>
      <SlideContainer>
        <BackgroundImage src='https://uk.fi-group.com/wp-content/uploads/sites/7/2022/04/FI-Connect-1920x700.jpg' />
        <Overlay></Overlay>
        <ContentWrapper>
          <h1>명함을 등록하고 관계있는 사람들을 한눈에 확인해보세요</h1>
          <h3>Register your business card and check the people involved at a glance!</h3>
          <button>Information</button>
        </ContentWrapper>
      </SlideContainer>
    </div>
  )
}

export default Information
