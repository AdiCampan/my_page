import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Body() {

  return (
    <Card className="text-center">
      <Card.Header>About me</Card.Header>
      <Card.Body>
        <Card.Title>Titles and experience</Card.Title>
        <Card.Text>
          I have the title of electrician, and I have professed since 1992 as an electrician
          in various companies. <br />
          Since the year 2000 I began to be very curious about new technologies,
          especially computers and computing.
          I started repairing computers, phones, tablets etc. to all my friends,
          however the way of programming fascinated me more and more.<br />
          So a few years ago I did a couple of tutorials on YouTube, but in January 2022,
          with the constant help of my mentor Flaviu Cimpan (Senior Web Developer),<br />
          I start studying on a daily basis and very determined Java Script with React.
          I like to be self-taught, search and ask.
          Of course working in the web development sector would be a very interesting challenge
          and it would make me very excited, although it is very scary to change the professional sector
          after so many years.<br />
          Life can give you many rewarding surprises.<br />
          Adrian Campan
        </Card.Text>
        <a href="https://github.com/AdiCampan?tab=repositories" target="_blank" rel="noreferrer">
          <Button variant="primary" >My Projects (Github)</Button>
        </a>

      </Card.Body>
      <Card.Footer className="text-muted"> adicampan1974@gmail.com</Card.Footer>
    </Card>
  );
}


export default Body;
