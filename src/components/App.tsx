import React from 'react'
import styled from '@emotion/styled'

import c from 'classnames'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 75px);
  width: 100%;

  color: #f1f3f5;
  background: #121213;
`

const ChoiceText = styled.div`
  margin-top: 1em;
  font-size: 1.4em;
`

const Day = styled.div`
  font-size: 2em;
  font-weight: 600;
  text-align: right;
`

const Header = styled.div`
  position: relative;
  padding: 0.5em 2em;
`

interface ChoiceProps {
  text: string
  icon: string
  color?: string
}

const Choice = ({text, icon, color}: ChoiceProps) => (
  <div>
    <span className="icon is-large">
      <i className={c('fa-3x', icon)} style={{color}} />
    </span>

    <ChoiceText>{text}</ChoiceText>
  </div>
)

const ProgressContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.5em;
  z-index: 1;
  width: 200px;

  progress {
    box-shadow: 2px 2px 8px #2c3e5033;
  }
`

const TitleSection = styled.div`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 2em;
`

export function App() {
  return (
    <div>
      <Header>
        <Day>Day 1</Day>

        <ProgressContainer>
          <progress
            className="progress is-primary is-medium"
            value="55"
            max="100"
          />
        </ProgressContainer>
      </Header>
      <Container>
        <TitleSection>What would you do now?</TitleSection>

        <div className="columns is-centered is-variable is-7 is-mobile">
          <div className="column">
            <Choice text="Walk outside" icon="fad fa-rocket" />
          </div>

          <div className="column">
            <Choice text="Return to home" icon="fad fa-house-night" />
          </div>

          <div className="column">
            <Choice text="Grab medicine" icon="fad fa-capsules" />
          </div>
        </div>
      </Container>
    </div>
  )
}
