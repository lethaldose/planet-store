import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Planet = props => {
  return (
    <div>
      {props.planet ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={props.planet.imageUrl}
            title={props.planet.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.planet.name}
            </Typography>
            <Typography component="p">{props.planet.description}</Typography>
            <Typography component="p">
              Price: {props.planet.price.value} {props.planet.price.currency}
            </Typography>
            <Typography component="p">
              Area: {props.planet.area.value} {props.planet.price.unit}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={props.planet.url}
              target="_blank"
            >
              Go To Planet
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default Planet;
