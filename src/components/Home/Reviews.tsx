import { useState } from "react";
// import "./Reviews.css";
import { Container, Row, Col, Card, Image, ButtonGroup, Button, Badge } from 'react-bootstrap';


const reviewsData = [
    {
        name: "John Doe",
        image: "https://via.placeholder.com/50",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
    },
    {
        name: "Jane Smith",
        image: "https://via.placeholder.com/50",
        review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 3,
    },
    {
        name: "Alice Johnson",
        image: "https://via.placeholder.com/50",
        review: "This is a fantastic product! It exceeded my expectations. I can't believe how amazing it is. Highly recommended!",
        rating: 5,
    },
    {
        name: "Bob Brown",
        image: "https://via.placeholder.com/50",
        review: "I was initially skeptical, but this product proved me wrong. It's a game-changer. I can't imagine my life without it.",
        rating: 1,
    },
    {
        name: "Eva Williams",
        image: "https://via.placeholder.com/50",
        review: "The quality of this product is outstanding. It's worth every penny. I've been using it for months, and it hasn't let me down.",
        rating: 4,
    },
    {
        name: "Michael Wilson",
        image: "https://via.placeholder.com/50",
        review: "At first, I wasn't sure if I needed this, but now I can't imagine my daily routine without it. It's a must-have!",
        rating: 4,
    },
    {
        name: "Olivia Martinez",
        image: "https://via.placeholder.com/50",
        review: "This product is the best thing that happened to me this year. It's easy to use, and it's so versatile.",
        rating: 5,
    },
    {
        name: "David Davis",
        image: "https://via.placeholder.com/50",
        review: "I've tried many similar products, but this one stands out. It's incredibly user-friendly and works flawlessly.",
        rating: 4,
    },
    {
        name: "Sophia Lee",
        image: "https://via.placeholder.com/50",
        review: "I can't thank the creators of this product enough. It's a true game-changer for me. The quality is top-notch.",
        rating: 5,
    },
    {
        name: "William Miller",
        image: "https://via.placeholder.com/50",
        review: "I've been using this for a while now, and I have no complaints. It's a reliable and high-quality product.",
        rating: 4,
    },
];

const Reviews = () => {
    const [selectedReview, setSelectedReview] = useState(0);

    const handleReviewChange = (index: Number) => {
        setSelectedReview(+index);
    };

    return (
        <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Customer Reviews</h2>
          <Card className="review-container">
            <Card.Body>
              <Image
                src={reviewsData[selectedReview].image}
                alt={reviewsData[selectedReview].name}
                roundedCircle
                className="mb-3"
              />
              <Card.Title className="text-center font-weight-bold">{reviewsData[selectedReview].name}</Card.Title>
              <Card.Text className="text-center">{reviewsData[selectedReview].review}</Card.Text>
              <div className="text-center mt-3">
                <Badge bg="primary">{reviewsData[selectedReview].rating} out of 5</Badge>
              </div>
            </Card.Body>
          </Card>
          <ButtonGroup className="d-flex justify-content-center mt-4">
            {reviewsData.map((review, index) => (
              <Button
                key={index}
                variant={index === selectedReview ? 'primary' : 'secondary'}
                onClick={() => handleReviewChange(index)}
              >
                {index + 1}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
    </Container>


    );
};

export default Reviews;
