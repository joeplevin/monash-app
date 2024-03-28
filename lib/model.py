

# Predefined list of skills to match against resumes
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

# Function to download a file from a URL
def download_file(url):
    local_filename = url.split('/')[-1]
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

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

# Main function to handle command line argument for the CV URL
def main(cv_url):
    # Download the CV
    cv_path = download_file(cv_url)
    # Process the downloaded resume
    process_resume(cv_path)
    # Delete the downloaded file after processing
    os.remove(cv_path)
    # After processing the resume, print out the skills associated with it
    for resume, skills in resume_skills.items():
        print(f"Skills in {resume}:")
        print(skills, '\n')

if __name__ == "__main__":
    cv_url = sys.argv[1]  # The CV URL is the first command-line argument
    main(cv_url)

    print("fin")
