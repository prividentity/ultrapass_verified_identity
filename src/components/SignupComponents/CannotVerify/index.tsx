import {
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import smallLock from "../../../assets/smallLock.png";
import { styles, useStyles } from "../../../pages/signup/styles";

interface props {
  theme: string;
  skin: string;
  palette: { [key: string]: any };
  sessionData: { successUrl?: string; failureUrl?: string };
  navigateToUrl: (e: string) => void;
  setStep: (e: number) => void;
  prevStep: number;
}

const CannotVerify = (props: props) => {
  const {
    theme,
    skin,
    palette,
    sessionData,
    navigateToUrl,
    setStep,
    prevStep,
  } = props;
  const muiTheme = useTheme();
  const matchesSM = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center" justifyContent={"center"}>
        <Typography
          component="p"
          textAlign="center"
          fontSize={16}
          fontWeight={900}
          letterSpacing={"1px"}
          sx={{ paddingTop: 3, paddingBottom: 2 }}
          className={classes.cardHeading}
        >
          <img src={smallLock} alt="smallLock" className={classes.smallLock} />{" "}
          ANONYMOUS AGE VERIFICATION
        </Typography>
      </Grid>
      {!matchesSM && <Divider color={palette?.[skin]?.listText} />}
      <Grid style={styles.cardGrid} className={classes.cardGridMobile}>
        <Typography
          component="p"
          textAlign="center"
          fontSize={25}
          fontWeight={700}
          mt={4}
        >
          ARE YOU SURE <br />
          YOU WANT TO EXIT?
        </Typography>
        <Typography
          component="p"
          textAlign="center"
          fontSize={20}
          fontWeight={500}
          mt={7}
        >
          AllpassTrust cannot verify your age
          <br /> without your consent.
        </Typography>
      </Grid>
      {!matchesSM && <Divider color={palette?.[skin]?.listText} />}
      <Button
        variant="contained"
        color={theme as "inherit"}
        style={styles.continueButton}
        onClick={() => setStep(prevStep)}
      >
        <Typography
          component="p"
          color={palette?.[skin]?.listText}
          textAlign="center"
          fontWeight={600}
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          textTransform="capitalize"
        >
          Back to consent
        </Typography>
      </Button>
      <Button
        variant="text"
        color={theme as "inherit"}
        style={styles.textButton}
        onClick={() => navigateToUrl(sessionData?.failureUrl || '')}
      >
        <Typography
          component="p"
          color={palette?.[skin]?.listText}
          textAlign="center"
          fontWeight={500}
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          textTransform="capitalize"
          fontSize={14}
          className={classes.textButtonUnderline}
        >
          Exit
        </Typography>
      </Button>
    </>
  );
};

export default CannotVerify;
