import styled from '@emotion/styled'
import ThreeDPieChart from './ThreeDPieChart'
import IntroLineChart from './IntroLineChart'
import { blue } from '@mui/material/colors'

const Container = styled.div`
  background-color: white;

  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 90px;
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 1px solid #f4f7ff;
  background-color: #f4f7ff;
  padding: 8px 6px;
`

const TextContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 58.333333%;
  }

  @media (min-width: 1024px) {
    width: 66.666667%;
  }
`

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  @media (min-width: 768px) {
    width: 41.666667%;
  }

  @media (min-width: 1024px) {
    width: 33.333333%;
  }
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 10px 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:first-of-type {
    background-color: #307bbb; // Assuming #307BBB is the color for "rememberBlue"
    color: white;

    &:hover {
      background-color: rgba(48, 123, 187, 0.9);
    }
  }

  &:last-of-type {
    background-color: white;
    color: #4b5563; // Assuming #4B5563 is the color for "body-color"
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.05);

    &:hover {
      background-color: #307bbb;
      color: white;
    }
  }
`

const Charts = () => {
  const data: [string, number][] = [
    ['Teacher', 11.1],
    ['Engineer', 18.1],
    ['Doctor', 13.6],
    ['Accountant', 9.2],
    ['Lawyer', 12.8],
    ['Salesperson', 7.5],
    ['Artist', 8.4],
    ['Chef', 7.0],
    ['Other', 12.3],
  ]
  const chartData: {
    name: string
    data: number[] | null[]
  }[] = [
    {
      name: 'Subscriber',
      data: [21908, 25000, 24000, 32000, 35000, 32500, 42000, 35000, 50000, 53000, 57000],
    },
  ]

  return (
    <>
      <div>
        <ThreeDPieChart data={data} />
      </div>
      <div>
        <IntroLineChart chartData={chartData} />
      </div>

      {/* <Container>
        <InnerContainer>
          <TextContainer>
            <div>
              <h4>We use cookies</h4>
              <p>Please, accept these sweeties to continue enjoying our site!</p>
            </div>
          </TextContainer>
          <ButtonsContainer>
            <Button>Accept</Button>
            <Button>Close</Button>
          </ButtonsContainer>
        </InnerContainer>
      </Container> */}
    </>
  )
}

export default Charts
