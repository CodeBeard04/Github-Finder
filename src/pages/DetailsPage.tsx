import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GithubData from "../models/githubData";

interface DetailProps {
  cardData?: GithubData;
}

export default function DetailsPage(props: DetailProps) {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [detailData, setDetailData] = useState<GithubData>();

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => {
        if (res.ok) {
          console.log("Detail Response Fetched");
        } else {
          console.log("Invalid UserId");
        }
        return res.json();
      })
      .then((data) => {
        setDetailData(data);
      });
  }, []);

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <Button onClick={redirectToHome} variant="outlined" color="primary">
        Back to Home
      </Button>
      Hello I Am Details Page for {id}
      <div>user Details Are {JSON.stringify(detailData)}</div>
    </div>
  );
}
