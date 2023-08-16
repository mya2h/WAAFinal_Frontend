import React from 'react';
import { Card, CardContent, Typography, Grid, Badge, Avatar } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '10px',
    padding: theme.spacing(2),
    position: 'relative',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
    background: theme.palette.background.paper, // Set card background color
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  content: {
    flexGrow: 1,
  },
  typeBadge: {
    borderRadius: '4px',
    padding: theme.spacing(0.5, 1),
    textTransform: 'uppercase',
    fontSize: '12px',
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    marginLeft:theme.spacing(2)
  },
  avatar: {
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    width: '36px',
    height: '36px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: theme.spacing(2),
  },
  editButton: {
    color: theme.palette.primary.main,
  },
}));

const EventCard = ({ event }) => {
  const classes = useStyles();

  let eventTypeStyle;
  switch (event.eventType) {
  case 'Reunion':
    eventTypeStyle = 'error';
    break;
  case 'Workshop':
    eventTypeStyle = 'primary';
    break;
  case 'Seminar':
    eventTypeStyle = 'success';
    break;
  default:
    eventTypeStyle = '';
  }

  return (
    <Card elevation={3} className={`${classes.card} `}>
      <Badge badgeContent={event.eventType.toUpperCase()} className={`${classes.typeBadge} `} color={eventTypeStyle}>
        {/* Event type badge */}
      </Badge>
      <CardContent className={classes.content}>
        <Typography variant="h6" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {event.date}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {event.description}
        </Typography>
      </CardContent>
      <Grid container justifyContent="space-between" alignItems="center">
        <Avatar className={classes.avatar}>E</Avatar>
      </Grid>
    </Card>
  );
};

export default EventCard;
