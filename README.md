# Scalable Web App with Kubernetes on AWS

This project demonstrates how to build and deploy a scalable web application using **AWS EKS (Elastic Kubernetes Service)**. The app is containerized with Docker and automatically scales up or down based on incoming traffic, ensuring high availability and efficient resource utilization.

---

## Overview

The goal of this project was to simulate high traffic on a web application and manage the load effectively using Kubernetes' auto-scaling features. The application responds to the number of incoming requests by dynamically increasing or decreasing the number of pods.

---

## Key Features

- **Auto-scaling Kubernetes Pods:** Automatically scales the number of pods based on CPU/memory usage.
- **High Load Simulation:** Used `hey` to simulate hundreds of thousands of HTTP requests.
- **Dockerized App Deployment:** Built a Docker image and pushed it to Amazon ECR.
- **Managed Kubernetes with AWS EKS:** Used AWS EKS to manage and orchestrate container deployment and scaling.

---

## Technologies Used

- **Docker**: To containerize the application.
- **Amazon Elastic Container Registry (ECR)**: To store the Docker image.
- **Amazon Elastic Kubernetes Service (EKS)**: To deploy and manage the Kubernetes cluster.
- **Kubernetes Horizontal Pod Autoscaler (HPA)**: To scale pods based on load.
- **hey**: A load testing tool to simulate high traffic.

## Project Flow

1. Build and containerize the web app using Docker
2. Push Docker image to Amazon ECR
3. Deploy the application on AWS EKS
4. Set up Horizontal Pod Autoscaler
5. Simulate load using hey
6. Observe pod scaling

## Benefits

- **Scalability**: Automatically adjusts resources based on real-time demand.
- **Cost-Efficiency**: Reduces unused resources when load decreases.
- **Reliability**: Ensures uptime during traffic spikes.

## Real World Use Case

- Ideal for businesses expecting unpredictable traffic patterns, such as flash sales, seasonal events, or viral content, where automatic scalability ensures service continuity and resource optimization.

## License

- This project is licensed under the MIT License.
