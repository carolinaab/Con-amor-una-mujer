import {
  makeStyles,
  styled,
  Grid,
  Container,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';

const image = 'https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(6),
  },

  appbar: {
    background: "#FDBCB4",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    color: "black"
  },
  menuContainer: {

    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    maxWidth: "50%"
  },
  link: {
    textDecoration: "none",
    color: "black"
  },
  containerDescription: {
    background: "#FDBCB4",
    marginTop: 100,
    height: "100%",
    paddingBottom: 25,
    paddingTop: 25,
    '& h4': {
      fontWeight: "bold"
    }


  },

  containerImage: {
    position: "relative",
  },
  containerText: {
    padding: theme.spacing(8, 0, 10, 18),
    [theme.breakpoints.down('sm')]: {
      padding: 25
    },
    '& h6': {
      fontWeight: "bold",
      marginBottom: 35
    }
  },
  avatarInformation: {
    margin: 5,
    padding: 50,
    position: "relative"

  },
  avatar: {
    width: "165px",
    height: "165px",
    position: 'absolute',
    top: 95,
    zIndex: 1
  },
  SocialContainer: {
    padding: theme.spacing(0, 15),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 10, 0, 0)
    }
  },

  // footer
  footer:{
    background:"#273746",
    height:"7rem",
    color:"white"
  }


}));

export const HomeContainer = styled(Grid)({
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
  minHeight: "100vh",
  width: "100%",
  position: "relative",

})

export const ContainerCenter = styled(Grid)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "rgb(255, 255, 255, 0.3)",
  top: 50,
  left: 0,
  right: 0,
  margin: "0px auto",
  borderRadius: 15,
  minHeight: "60vh",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, "10rem", 10, "10rem"),
    maxWidth: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 0, 3, 0),
    maxWidth: "95%",
  },
  '& .MuiTypography-h4': {
    fontWeight: 600,
    fontFamily: "Arial, Helvetica, sans-serif"
  },



}))

export const TextContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),

}))

export const Text = styled(Typography)({
  fontFamily: "Arial, Helvetica, sans-serif",
  textAlign: "center",
  fontSize: 18
})

export const Buttons = styled(Button)(({ theme }) => ({
  background: "#FA8072",
  padding: theme.spacing(2, 8, 2, 8),
  margin: theme.spacing(2),
  textTransform: "none",
  fontSize: 17,
  fontWeight: 400
}))

export const DivContainer = styled('div')(({ theme }) => ({
  background: "#FA8072",
  height: 430,
  width: "60%",
  marginTop: 50,
  borderRadius: 15,
  [theme.breakpoints.down('sm')]: {
    width: "90%",

  }

}))

export const DivImage = styled('div')(({ theme }) => ({
  backgroundImage: `url(${image})`,
  height: 430,
  position: "absolute",
  width: "60%",
  top: 20,
  right: 100,
  bottom: 0,
  margin: "0px auto",
  borderRadius: 15,
  [theme.breakpoints.down('sm')]: {
    width: "90%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 15
  }
}))
export const CirclesImage = styled('img')({
  width: 230,
  marginBottom: 20
})

export const IconsButton = styled(IconButton)(({ theme }) => ({
  background: "#FA8072",
  '& svg': {
    color: "black",
    width: 40,
    height: 40
  },
  marginLeft: 20,

}))

export const ContactImage = styled('div')({
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  width: "100%"
})
export const ContactContainer = styled(Grid)({
  minHeight: "90vh",
})
export const ContactDescription = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10, 10, 10, 10),
  '& .MuiTypography-h4': {
    fontWeight: "bold",
    marginBottom: 20,
    margin: "auto"

  },

  '& .MuiTypography-subtitle1': {
    marginTop: 30,
    fontWeight: "bold"
  }
}))

export const SocialIcon = styled(IconButton)({
  background: props => props.background,
  color: "white",
  width: 63,
  height: 63,
  margin: props => props.margin,

})