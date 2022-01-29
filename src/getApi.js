import React from "react";
import { useState } from "react";

const Produts = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const url = "https://reqres.in/api/users?page=1";

    const response = await fetch(url);
    const responseJson = await response.json();
    const data = responseJson.results;
    setUsers(data);
  };

  return (
    <>
      {users.map((id) => {
        return (
          <Card style={cardStyle.cardMain} key={id.email}>
            <CardActionArea>
              {id.first_name}
              <CardMedia style={cardStyle.cardImage}>CardMedia</CardMedia>
              <CardContent>cardContainer</CardContent>
            </CardActionArea>
            <CardActions style={cardStyle.cardButton}>
              <Button>Watch</Button>
              <Button>Like</Button>
              <Button>Rent</Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};
export default Produts;
