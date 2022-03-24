import styled from "styled-components";
import { CardTemplate } from "../components/CardTemplate";
import { SectionContainer } from "../components/SectionContainer";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiCsharp,
} from "react-icons/si";

const Wrapper = styled.div`
  .skillIconDiv{
      padding: 30px 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  }

  .iconWrapper {
    height: 150px;
    display: flex;
    justify-content: space-around;
  }

  .icon {
    height: 80%;
    width: 100%;
    color: ${(props) => props.theme.colors.primary};
  }

  .skillLabel {
    font-size: 1.3rem;
  }
`;

const Skills = (props) => {
  return (
    <SectionContainer>
      <CardTemplate>
        <Wrapper>
          <div className="infoWrapper">
            <h1>Minhas Habilidades</h1>
            <hr />
            <div className="skillIconDiv">
              <div className="iconWrapper">
                <div>
                  <SiHtml5 className="icon" />
                  <span className="skillLabel">Html</span>
                </div>
                <div>
                  <SiCss3 className="icon" />
                  <span className="skillLabel">Css</span>
                </div>
              </div>

              <div className="iconWrapper">
                <div>
                  <SiJavascript className="icon" />
                  <span className="skillLabel">Javascript</span>
                </div>
                <div>
                  <SiReact className="icon" />
                  <span className="skillLabel">React</span>
                </div>
              </div>

              <div className="iconWrapper">
                <div>
                  <SiPython className="icon" />
                  <span className="skillLabel">Python</span>
                </div>
                <div>
                  <SiCsharp className="icon" />
                  <span className="skillLabel">C#</span>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </CardTemplate>
    </SectionContainer>
  );
};

export default Skills;
