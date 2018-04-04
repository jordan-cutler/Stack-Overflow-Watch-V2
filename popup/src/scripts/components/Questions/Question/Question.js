import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './Question.css';

const question = (props) => {
  return (
    <ListGroupItem href={props.url} target="_blank" className="question">
      <div className="name">
        {props.questionName}
      </div>

      <div className="more">
        <span className="creationDate">Asked {formatDate(new Date(props.creationTime))} by</span>
        <span className="owner">{props.owner} ({props.ownerReputation})</span>
      </div>
    </ListGroupItem>
  );
};

const formatDate = (date) => {
  const diff = ((new Date()).getTime() - date.getTime()) / 1000;
  const dayDiff = Math.floor(diff / 86400);
  if (isNaN(dayDiff) || dayDiff < 0) {
    return;
  }

  if (dayDiff === 0) {
    if (diff < 60) {
      return 'just now';
    }
    if (diff < 120) {
      return '1 minute ago';
    }
    if (diff < 3600) {
      return Math.floor(diff / 60) + ' minutes ago';
    }
    if (diff < 7200) {
      return '1 hour ago';
    }
    if (diff < 86400) {
      return Math.floor(diff / 3600) + ' hours ago';
    }
  }
  else if (dayDiff === 1) {
    return 'yesterday';
  } else if (dayDiff < 7) {
    return dayDiff + ' days ago';
  } else if (dayDiff < 31) {
    return Math.ceil(dayDiff / 7) + ' weeks ago';
  } else {
    return 'over a month ago';
  }
};

export default question;
