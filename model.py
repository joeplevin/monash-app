import spacy
import os
from pdfminer.high_level import extract_text
import sys

# Predefined skills list
x = [
    "Python", "Java", "JavaScript", "C#", "C++", "Ruby", "PHP", "Swift", "Kotlin", "TypeScript",
    "Go", "Rust", "HTML5", "CSS3", "Bootstrap", "jQuery", "AJAX", "Agile Methodologies", "Scrum",
    "Kanban", "Software Development Life Cycle (SDLC)", "Test-Driven Development (TDD)",
    "Continuous Integration/Continuous Deployment (CI/CD)", "Microservices Architecture",
    "RESTful API Development", "SQL", "MySQL", "PostgreSQL", "SQL Server", "NoSQL", "MongoDB",
    "Cassandra", "DynamoDB", "Data Modeling", "Database Management", "Linux/Unix Administration",
    "Docker", "Kubernetes", "Jenkins", "Ansible", "Chef", "Puppet", "AWS", "Azure", "Google Cloud Platform",
    "Machine Learning Algorithms", "Deep Learning", "TensorFlow", "PyTorch", "Natural Language Processing (NLP)",
    "Computer Vision", "Big Data Technologies", "Hadoop", "Spark", "Network Security", "Cryptography",
    "Ethical Hacking", "Security Audits and Compliance", "Incident Response", "Problem-Solving",
    "Communication", "Teamwork and Collaboration", "Adaptability", "Time Management", "Mobile Development",
    "iOS Development", "Android Development", "Internet of Things (IoT)", "Blockchain", "Quantum Computing"
]

# Load the pre-trained SpaCy model
nlp = spacy.load("en_core_web_sm")

# Function to read from a PDF file
def read_pdf_file(file_path):
    return extract_text(file_path)

# Initialize a dictionary to store resume names and their matched skills
resume_skills = {}

# Function to process each resume
def process_resume(file_path):
    resume_text = read_pdf_file(file_path).lower()

    # Process the resume text with SpaCy
    doc = nlp(resume_text)
    extracted_skills = set([entity.text for entity in doc.ents if entity.label_ in {"ORG", "NORP", "GPE", "LANGUAGE"}])

    # Simple text matching for predefined skills in 'x'
    matched_skills = set([skill for skill in x if skill.lower() in resume_text])

    # Combine the results
    all_skills = extracted_skills.union(matched_skills)

    # Add the skills set to the resume_skills dictionary
    resume_skills[os.path.basename(file_path)] = all_skills

    print(f"Skills in {os.path.basename(file_path)}:")
    print(all_skills, '\n')

# Main function to handle command line argument for the CV file path
def main(cv_path):
    # Process the resume
    process_resume(cv_path)
    # After processing the resume, print out the skills associated with it
    for resume, skills in resume_skills.items():
        print(f"Skills in {resume}:")
        print(skills, '\n')

if __name__ == "__main__":
    cv_path = sys.argv[1]  # The path to the PDF file is the first command-line argument
    main(cv_path)
