import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Projects() {
  const dummyProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully-featured e-commerce website with user registration, product catalog, shopping cart, and payment processing. This project includes a responsive design and integrates with popular payment gateways for a seamless shopping experience.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Building a mobile app for both Android and iOS platforms. The app is designed to provide users with real-time weather information, including forecasts, weather alerts, and location-based weather data.",
    },
    {
      id: 3,
      title: "Machine Learning Model",
      description:
        "Creating a machine learning model for sentiment analysis. This project involves collecting and preprocessing a large dataset of text data, training a deep learning model, and deploying it as a web service for real-time sentiment analysis.",
    },
    {
      id: 4,
      title: "Smart Home Automation",
      description:
        "Developing a smart home automation system that allows users to control lighting, temperature, and security systems remotely. The project includes IoT device integration, a user-friendly mobile app, and voice control functionality.",
    },
    {
      id: 5,
      title: "Community Health Tracker",
      description:
        "Building a web platform for tracking community health data. This project involves creating data visualizations, allowing users to input health information, and generating health reports for local communities and health organizations.",
    },
  ];

  const containerStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    // maxWidth: "600px",
    margin: "20px",
  };

  const navStyle = {
    justifyContent: "center",
  };

  const linkStyle = {
    color: "#007bff",
    fontWeight: "bold",
  };

  const contentStyle = {
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <Tab.Container defaultActiveKey="project-1">
        <Nav variant="tabs" style={navStyle}>
          {dummyProjects.map((project) => (
            <Nav.Item key={project.id}>
              <Nav.Link eventKey={`project-${project.id}`} style={linkStyle}>
                {project.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content style={contentStyle}>
          {dummyProjects.map((project) => (
            <Tab.Pane key={project.id} eventKey={`project-${project.id}`}>
              <WithHeaderExample
                title={project.title}
                description={project.description}
              />
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

interface ProjectProps {
  title: string;
  description: string;
}

function WithHeaderExample({ title, description }: ProjectProps) {
  return (
    <Card
      style={{
        margin: "20px 0",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Header
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Featured
      </Card.Header>
      <Card.Body style={{ padding: "15px" }}>
        <Card.Title style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: "#333" }}>{description}</Card.Text>
        <Button style={{ backgroundColor: "#007bff", color: "#fff" }}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Projects;
