import spacy
import os
import sys
from pdfminer.high_level import extract_text

# Predefined skills list
skills_list = [
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

# Try to load the pre-trained SpaCy model
try:
    nlp = spacy.load("en_core_web_sm")
except Exception as e:
    print(f"Failed to load SpaCy model: {e}")
    sys.exit(1)

# Function to read from a PDF file
def read_pdf_file(file_path):
    try:
        return extract_text(file_path)
    except Exception as e:
        print(f"Failed to extract text from {file_path}: {e}")
        return ""

# Initialize a dictionary to store resume names and their matched skills
resume_skills = {}

# Function to process each resume
def process_resume(file_path):
    resume_text = read_pdf_file(file_path).lower()
    if not resume_text:
        return  # Skip processing if reading failed

    try:
        # Process the resume text with SpaCy
        doc = nlp(resume_text)
        extracted_skills = set([entity.text for entity in doc.ents if entity.label_ in {"ORG", "NORP", "GPE", "LANGUAGE"}])

        # Simple text matching for predefined skills in 'skills_list'
        matched_skills = set([skill for skill in skills_list if skill.lower() in resume_text])

        # Combine the results
        all_skills = extracted_skills.union(matched_skills)

        # Add the skills set to the resume_skills dictionary
        resume_skills[os.path.basename(file_path)] = all_skills

        print(f"Skills in {os.path.basename(file_path)}:")
        print(all_skills, '\n')
    except Exception as e:
        print(f"Error processing resume {file_path}: {e}")

# Main function to handle command line argument for the CV file path
def main(cv_path):
    if not os.path.isfile(cv_path):
        print("The specified path does not point to a file.")
        return

    # Process the resume
    process_resume(cv_path)

    # After processing the resume, print out the skills associated with it
    for resume, skills in resume_skills.items():
        print(f"Skills in {resume}:")
        print(skills, '\n')

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python script.py <path_to_cv>")
        sys.exit(1)

    cv_path = sys.argv[1]
    main(cv_path)
