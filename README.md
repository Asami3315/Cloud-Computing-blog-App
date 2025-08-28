# Cloud-Computing-blog-App
practice app for deployment in aws(ebs,eck/forgate), k8s
# Cloud-Computing-blog-App

A cloud-ready **Blog Application** with separate **frontend** and **backend** services, containerized using Docker and deployed via Kubernetes manifests.



## 🚀 Features

- **Frontend:** React + Node.js based UI for blog interaction.  
- **Backend:** Handles business logic and API.  
- **Containerization:** Each service has its own Dockerfile.  
- **Kubernetes Deployment:** Includes manifests for deployments, services, ingress, PVC, and storage.  
- **CI/CD Ready:** Git-friendly with `.gitignore` and `.gitattributes`.  

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (>=16.x)  
- [Docker](https://www.docker.com/)  
- [Kubernetes](https://kubernetes.io/) cluster (Minikube, Kind, or Cloud Provider)  
- [kubectl](https://kubernetes.io/docs/tasks/tools/) CLI  
- [docker-compose](https://docs.docker.com/compose/)  

---

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/Asami3315/Cloud-Computing-blog-App.git
cd Cloud-Computing-blog-App
2. Install dependencies
bash
Copy code
cd frontend
npm install
(Do the same for backend if needed)

3. Run locally with Docker Compose
bash
Copy code
docker-compose up --build
App will be available at:
👉 http://localhost:3000

☸️ Kubernetes Deployment
1. Build Docker Images
bash
Copy code
docker build -t blog-frontend ./frontend
docker build -t blog-backend ./backend
Push to Docker Hub (or your registry):

bash
Copy code
docker push <your-dockerhub-username>/blog-frontend
docker push <your-dockerhub-username>/blog-backend
2. Apply Kubernetes Manifests
bash
Copy code
kubectl apply -f storageclass.yaml
kubectl apply -f pvc.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
3. Access Application
If using Minikube:

bash
Copy code
minikube service frontend-service
If using Ingress:
👉 Access via the ingress host defined in ingress.yaml.

📦 File Descriptions
Dockerfile → Builds container image for frontend.

deployment.yaml → Defines backend deployment.

service.yaml → Exposes backend service.

frontend-deployment.yaml → Defines frontend deployment.

frontend-service.yaml → Exposes frontend service.

ingress.yaml → Handles external traffic routing.

pvc.yaml → Persistent volume claim for storage.

storageclass.yaml → Defines storage class in Kubernetes.

docker-compose.yml → Local development setup.

🧑‍💻 Development
To run only the frontend locally:

bash
Copy code
cd frontend
npm start
Backend can be started separately (instructions depend on backend stack).
