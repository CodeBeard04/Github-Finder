import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, CardActions, CardContent, Button, Typography, Link } from "@material-ui/core";
import GithubData from "../models/githubData";
import { useHistory } from "react-router-dom";

interface CardProps {
  cardData: GithubData;
  goToDetailPage: () => void;
}

export default function GithubCard(props: CardProps) {
  const classes = useStyles();
  const history = useHistory();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  const redirectToDetailPage = () => {
    history.push(`/details/${props.cardData.login}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={redirectToDetailPage}>
        <CardMedia className={classes.media} image={props.cardData.avatar_url} title={props.cardData.login} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.cardData.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Repos : " + props.cardData.public_repos}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Followers : " + props.cardData.followers}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Following : " + props.cardData.following}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Link  onClick={preventDefault}> */}
        <Button size="small" color="primary">
          <a href={props.cardData.html_url}>Visit Profile</a>
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
});
