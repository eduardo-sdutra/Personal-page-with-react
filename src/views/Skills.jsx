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
  }

  .iconWrapper {
    height: 150px;
    display: flex;
    justify-content: space-around;
  }

  .infoWrapper h1 {
    color: ${(props) => props.theme.elements.text};
  }

  .icon {
    height: 80%;
    width: 100%;
    color: ${(props) => props.theme.colors.primary};
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
                  <SiHtml5 className="icon" />
                  <SiCss3 className="icon" />
                </div>

              <div className="iconWrapper">
                <SiJavascript className="icon" />
                <SiReact className="icon" />
              </div>
        
              <div className="iconWrapper">
                <SiPython className="icon" />
                <SiCsharp className="icon" />
              </div>
            </div>
          </div>
        </Wrapper>
      </CardTemplate>
    </SectionContainer>
  );
};

export default Skills;
