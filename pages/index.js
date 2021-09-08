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
import Icon from '../components/Icon/Icon';


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
              {/* <ContactIcon src="/cv.png" alt="Noah Lustig's resume" /> */}
            </ContactContainer>
          </ImageContainer>
          <TextContainer>
            <TitleText color="black">Welcome to NoahLustig.com!</TitleText>
            <BodyText color="black">
            I'm a data scientist, full stack developer and entreprenuer based in Phoenix, AZ.  Check out some of my projects below, or reach out to me to collaborate on something new!  
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
              <BodyText>My entire career has been spent in early stage startups.  During college, I joined <a style={{"color":"blue", 'fontWeight': 700}} href="https://alt36.com/">Alt36</a> shortly after they raised a seed round, and stayed on until shortly after my graduation from college, and Alt36's Series A. I currently work as a data scientist at <a style={{"color":"blue", 'fontWeight': 700}} href="https://prokuresolutions.com/">ProKure Solutions</a>, a chemical consumable products startup based in Phoenix, Arizona.  Here, I'm responsible for planning, building and maintaining various internal and customer-facing tools to organize and extract value from big data.  </BodyText>
            </Column>
          </ColsContainer>
        </ContentContainer>
      </Section>
      <Section id="skills">
        <ContentContainer center col>
          <TitleText center>Core Competencies</TitleText>
          <IconBox>
            <Icon src="/etl.png" text="Extract, Transform & Load (ETL) Pipelines" />
            <Icon src="/python.png" text="Pandas, NumPy, sklearn, PyTorch, Plotly, MatPlotLib" />
            <Icon src="/database.png" text="SQL and NoSQL Schema Design" />
            <Icon src="/aws.png" text="Serverless Engineering" />
            <Icon src="/api.png" text="REST & GraphQL API Design" />
            <Icon src="/laptop.png" text="Full Stack Development" />
            <Icon src="/iphone.png" text="Mobile Development" />
            <Icon src="devops.png" text="CI/CD, Automated Testing" />
          </IconBox>
        </ContentContainer>
      </Section>
      <Section color="darkgrey" id="projects">
        <ContentContainer color="darkgrey" col even>
        <TitleText center>Projects</TitleText>
        <ProjectsContainer>
          <Card 
            title="Personal Website" 
            description="The source code for the site you're on right now!  Have a poke around."
            repolink="https://github.com/njlustig/noahlustig.com"
          />
          <Card 
            title="Car Insurance Classifier" 
            description="A Jupyter Notebook that builds and evaluates several classifiers against a car insurance claim data set from Kaggle." 
            repolink="https://github.com/njlustig/insurance_classifier"
          />
          <Card 
            title="Voice of the Engineer"
            description="An upvote/downvote suggestion box mini-site with any improvement ideas that engineers have.

            Loosely inspired by Hacker News and Stack Overflow.
            
            Intended to be a social tool that helps medium and large tech companies to make improvements in order to empower their developers to do their best work."
            repolink="https://github.com/SilasReinagel/VoiceOfTheEngineers"
          />
          {/* <Card /> */}
        </ProjectsContainer>

        </ContentContainer>
      </Section>
    </Container>
  );
};

export default Home;