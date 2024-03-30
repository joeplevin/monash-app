import spacy
import os
import sys
import json
from pdfminer.high_level import extract_text

# Define a list of technical skills to look for in resumes
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

# Attempt to load the SpaCy model
try:
    nlp = spacy.load("en_core_web_sm")
except Exception as e:
    print(json.dumps({"error": f"Failed to load SpaCy model: {e}"}))
    sys.exit(1)

# Function to extract text from a PDF file
def read_pdf_file(file_path):
    try:
        return extract_text(file_path)
    except Exception as e:
        print(json.dumps({"error": f"Failed to extract text from {file_path}: {e}"}))
        return ""

# Initialize a dictionary to store resume names and their matched skills
resume_skills = {}

# Process each resume to find matching skills
def process_resume(file_path):
    resume_text = read_pdf_file(file_path).lower()
    if not resume_text:
        return  # Skip processing if text extraction failed

    try:
        # Use SpaCy to process the extracted text
        doc = nlp(resume_text)
        extracted_skills = set([entity.text for entity in doc.ents if entity.label_ in {"ORG", "NORP", "GPE", "LANGUAGE"}])

        # Match the extracted text against the predefined skills list
        matched_skills = set([skill for skill in skills_list if skill.lower() in resume_text])

        # Combine skills found through NLP and direct matching
        all_skills = extracted_skills.union(matched_skills)

        # Update the dictionary with skills found in the current resume
        resume_skills[os.path.basename(file_path)] = list(all_skills)

    except Exception as e:
        print(json.dumps({"error": f"Error processing resume {file_path}: {e}"}))

# Main function to process the resume provided via command-line argument
def main(cv_path):
    if not os.path.isfile(cv_path):
        print(json.dumps({"error": "The specified path does not point to a file."}))
        return

    process_resume(cv_path)

    # Output the final dictionary of resumes and their associated skills as JSON
    print(json.dumps(resume_skills, indent=2))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "Usage: python script.py <path_to_cv>"}))
        sys.exit(1)

    cv_path = sys.argv[1]
    main(cv_path)