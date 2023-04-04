import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  DepartmentsContainer,
  DepartmentsH1,
  DepartmentsWrapper,
  DepartmentsCard,
  DepartmentsH2,
  DepartmentsIcon,
  DepartmentsP,
} from "./DepartmentsElements";

const Departments = () => {
  return (
    <DepartmentsContainer id="departments">
      <DepartmentsH1>Departments</DepartmentsH1>
      <DepartmentsWrapper>
        <DepartmentsCard>
          <DepartmentsIcon src={Icon1} />
          <DepartmentsH2>Quality Assurance</DepartmentsH2>
          <DepartmentsP>
            Bugs, bugs, bugs... the team is very focused and are polishing each
            project until perfection.
          </DepartmentsP>
        </DepartmentsCard>

        <DepartmentsCard>
          <DepartmentsIcon src={Icon2} />
          <DepartmentsH2>Web Development</DepartmentsH2>
          <DepartmentsP>
            We love to work on hard, challenging projects and find the best
            solutions for them!
          </DepartmentsP>
        </DepartmentsCard>

        <DepartmentsCard>
          <DepartmentsIcon src={Icon3} />
          <DepartmentsH2>Human Resources</DepartmentsH2>
          <DepartmentsP>
            Our HR department consists of individuals who are open minded and
            always ready to progress.
          </DepartmentsP>
        </DepartmentsCard>
      </DepartmentsWrapper>
    </DepartmentsContainer>
  );
};

export default Departments;
