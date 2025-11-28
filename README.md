🌾 FARMER ASSISTANT PORTAL

A Smart Agriculture Support System with Crop Recommendation & Plant Disease Detection


<img width="940" height="548" alt="image" src="https://github.com/user-attachments/assets/6f42d245-0492-4842-95de-b8b4e8799684" />







📘 Overview

The Farmer Assistant Portal is an integrated agricultural support platform designed to assist farmers with data-driven decisions. It combines machine learning, image processing, and a clean web-based interface to help users:

Identify plant diseases from images

Get intelligent crop recommendations

Learn how to manage crop diseases through an in-depth disease guide

Interact with a user-friendly portal designed specifically for farmers

This system aims to reduce crop loss, improve decision-making, and empower farmers with simple, accessible technology.

🚀 Key Features


<img width="940" height="378" alt="image" src="https://github.com/user-attachments/assets/5a1ac57a-e51d-48f2-9193-75c200b0419d" />



✅ 1. Crop Recommendation System

<img width="940" height="525" alt="image" src="https://github.com/user-attachments/assets/d03ae822-365f-489a-a5e6-1343c0120ff9" />



Suggests the best crop based on soil, climate, and environmental parameters

Uses trained ML models for accurate recommendations

✅ 2. Plant Disease Detection System


<img width="716" height="1172" alt="image" src="https://github.com/user-attachments/assets/27d50278-d9fe-4ce3-b6cf-52c76f5b8756" />


Accepts input images of plant leaves

Detects disease type using a trained CNN model

Provides treatment suggestions

✅ 3. Farmer Web Portal

Easy-to-use interface built with modern web technologies

Dashboard for crop recommendation, disease detection, and results viewing

✅ 4. Disease Guide

Contains disease descriptions, symptoms, and remedies

Acts as a reference for farmers and agriculture students

✅ 5. Integrated Research Paper

“Smart Crop Recommendation System with Plant Disease Identification” included for academic reference

📁 Project Directory Structure
FARMER_ASSITENT_PORTEL/
│
├── AgriSens-web-app/                 # Main web application (frontend + backend)
│
├── CROP-RECOMMENDATION/              # ML module for crop recommendation
│
├── PLANT-DISEASE-IDENTIFICATION/     # ML module for disease detection
│
├── Results/                          # Sample output results
│
├── DISEASE-GUIDE.md                  # Detailed disease information & remedies
│
├── Smart_Crop_Recommendation_System_with_Plant_Disease_Identification.pdf
│                                      # Research paper related to project
│
└── README.md                         # (This file)

🛠️ Technologies Used
🔹 Frontend

HTML / CSS / JavaScript

React.js (if applicable)

Responsive UI design

🔹 Backend

Node.js

Express.js

🔹 Database

MongoDB (local or MongoDB Atlas)

🔹 Machine Learning

Python

TensorFlow / Keras

Scikit-learn

OpenCV

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/kRamjan/FARMER_ASSITENT_PORTEL.git
cd FARMER_ASSITENT_PORTEL

🌐 Setting up the Web App

Navigate to the web app folder:

cd AgriSens-web-app


Install dependencies:

npm install


Start server:

npm start


Or for development with live reload:

npm run dev


Open the portal in your browser:

http://localhost:3000/

🧠 Running the ML Models
Crop Recommendation
cd CROP-RECOMMENDATION
python recommend.py

Plant Disease Identification
cd PLANT-DISEASE-IDENTIFICATION
python detect.py


(Exact file names may vary — adjust based on your folder)

🧑‍🌾 How to Use the Portal

Launch the web app

Create an account or log in

Use dashboard options:

Crop Recommendation: enter soil/climate data

Disease Detection: upload a leaf image

View the results and suggested remedies

Explore Disease Guide for more details

📄 Research Paper Included

The repository contains a full academic research paper:
📘 Smart Crop Recommendation System with Plant Disease Identification

Useful for students, researchers, and developers.

🔮 Future Enhancements

Real-time weather API integration

Multiple crop datasets

Mobile app version

Multi-language support for farmers

Voice-based query system

Additional crop disease categories

