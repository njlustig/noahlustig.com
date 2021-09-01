import { 
  Container, 
  TextContainer, 
  ImageContainer, 
  ContentContainer,
  CaptionText,
  TitleText,
  BodyText,
  Section,
  IconGroupContainer,
  IconBox,
  IconContainer,
  IconText,
  ProjectsContainer,
  ContactContainer,
  ContactIcon,
  ColsContainer,
  Column,
  ColumnHeaderText,
  GradIcon
} from '../styles/index.styles';
import Avatar from '../components/Avatar/Avatar';
import NavBar from '../components/NavBar/NavBar';
import Card from '../components/Card/Card';


const Home = () => {
  return (
    <Container>
      <NavBar />
      <Section id="home">
        <ContentContainer>
          <ImageContainer>
            <Avatar src="/headshot.jpeg" alt="Noah Lustig's headshot" />
            <CaptionText color="black">Data Scientist</CaptionText>
            <CaptionText bold color="black">ProKure Solutions</CaptionText>
            <ContactContainer>
              <a href="https://www.linkedin.com/in/noahlustig/"><ContactIcon src="/linkedin.png" alt="linkedin" /></a>
              <a href="mailto:noah.j.lustig@gmail.com"><ContactIcon src="/email.png" alt="email" /></a>
              <a href="https://github.com/njlustig"><ContactIcon src="/github.png" alt="Noah Lustig's github" /></a>
              <ContactIcon src="/cv.png" alt="Noah Lustig's resume" />
            </ContactContainer>
          </ImageContainer>
          <TextContainer>
            <TitleText color="black">Welcome to NoahLustig.com!</TitleText>
            <BodyText color="black">
            I'm a data scientist, full stack developer and entreprenuer based in Phoenix, AZ.  Check out some of my projects below, or reach out to me here to collaborate on something new!  
            </BodyText>
          </TextContainer>
        </ContentContainer>
      </Section>
      <Section color="darkgrey" id="about">
        <ContentContainer col center color="darkgrey">
          <TitleText center >About Me</TitleText>
          <ColsContainer>
            <Column>
              <ColumnHeaderText>Education</ColumnHeaderText>
              <ul>
                <GradIcon><BodyText>Bachelor of Science-Economics<br/>Arizona State University, 2018</BodyText></GradIcon>
                <GradIcon><BodyText>Minor-Mathematics<br/>Arizona State University, 2018</BodyText></GradIcon>
                <GradIcon><BodyText>Certificate-Applied Business Data Analytics <br/>Arizona State University, 2018</BodyText></GradIcon>
              </ul>
            </Column>
            <Column>
              <ColumnHeaderText>Experience</ColumnHeaderText>
              <BodyText>I work as a data scientist at ProKure Solutions, a chemical consumable products company based in Phoenix, Arizona.  There, I'm responsible for planning, building and maintaining various internal and customer-facing tools to extract value from big data.  Outside of my responsibilities at ProKure, I spend my time working on projects ranging from IoT, to algorithmic trading to sports handicapping.</BodyText>
            </Column>
          </ColsContainer>
        </ContentContainer>
      </Section>
      <Section id="skills">
        <ContentContainer center col>
          <TitleText center>Core Competencies</TitleText>
          <IconBox>
            <IconGroupContainer>
              <IconContainer><img src="/etl.png" width={150} height={150}/></IconContainer>
              <IconText>Extract, Transform & Load (ETL) Pipelines</IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/python.png" width={150} height={150}/></IconContainer>
              <IconText>Pandas, NumPy, sklearn, PyTorch, Plotly, MatPlotLib </IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/database.png" width={150} height={150}/></IconContainer>
              <IconText>SQL and NoSQL Schema Design</IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/aws.png" width={150} height={150}/></IconContainer>
              <IconText>Serverless Development</IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/api.png" width={150} height={150}/></IconContainer>
              <IconText>Rest & GraphQL API Design</IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/laptop.png" width={150} height={150}/></IconContainer>
              <IconText>Full Stack Development</IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/iphone.png" width={150} height={150}/></IconContainer>
              <IconText>Mobile Development</IconText>
            </IconGroupContainer>
            <IconGroupContainer>
              <IconContainer><img src="/devops.png" width={150} height={150}/></IconContainer>
              <IconText>DevOps</IconText>
            </IconGroupContainer>
          </IconBox>
        </ContentContainer>
      </Section>
      <Section color="darkgrey" id="projects">
        <ContentContainer color="darkgrey" col even>
        <TitleText center>Projects</TitleText>
        <ProjectsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </ProjectsContainer>

        </ContentContainer>
      </Section>
    </Container>
  );
};

export default Home;