import { Typography, Avatar, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Ismail from '../assets/imgs/ismail.jpg';
import Martin from '../assets/imgs/martin.jpg';
import Tahany from '../assets/imgs/tahany.png';
import Fatima from '../assets/imgs/fatima.jpeg';
import Abouticon from '../assets/imgs/university.svg';

const useStyles = makeStyles(theme => ({
  teamSection: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },

  link: {
    textDecoration: 'none',
    color: '#000',
  },

  picGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
  },
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
  },
  avatarWidth: {
    width: '100%',
    height: '100%',
    maxWidth: 200,
    maxHeight: 200,
  },
  imageWidth: {
    width: '100%',
    maxWidth: 80,
    margin: theme.spacing(5),
  },

  marginBottom14: {
    marginBottom: 14,
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        This website is dedicated for you! it helps you search universities in
        your chosen city. Hence, you can wisely know and choose your next
        university to enroll in.
      </Typography>
      <img
        className={classes.imageWidth}
        src={Abouticon}
        borderRadius="50%"
        alt="icon"
      />
      <Grid className={classes.teamSection} container item>
        <Typography variant="h4" align="center">
          Meet Our Team
        </Typography>
        <Grid className={classes.teamSection}>
          <Grid container item justifyContent="space-between">
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ismailkhalil20"
            >
              <Grid>
                <Avatar
                  className={classes.avatarWidth}
                  src={Ismail}
                  alt="Ismail"
                />
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  align="center"
                  className={classes.marginBottom14}
                >
                  Ismail Khalil
                </Typography>
              </Grid>
            </a>
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/martinnajjar12"
            >
              <Grid>
                <Avatar
                  className={classes.avatarWidth}
                  src={Martin}
                  alt="Martin Najjar"
                />
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  align="center"
                  className={classes.marginBottom14}
                >
                  Martin Najjar
                </Typography>
              </Grid>
            </a>
          </Grid>
          <Grid container item justifyContent="space-between">
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Tahany-Alswoidy"
            >
              <Grid>
                <Avatar
                  className={classes.avatarWidth}
                  src={Tahany}
                  alt="Tahany Alswoidy"
                />
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  align="center"
                  className={classes.marginBottom14}
                >
                  Tahany Alswoidy
                </Typography>
              </Grid>
            </a>
            <a
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fatima-katrib"
            >
              <Grid>
                <Avatar
                  className={classes.avatarWidth}
                  src={Fatima}
                  alt="Martin"
                />
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  align="center"
                  className={classes.marginBottom14}
                >
                  Fatima Katrib
                </Typography>
              </Grid>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default About;
