import { getCvSkills } from "@/lib/actions/studentActions";
import { getJobsBySkills } from "@/lib/actions/charityActions";
import MatchingSkills from "@/app/components/student/MatchingSkills";
import MatchingJobs from "@/app/components/student/MatchingJobs";

const Matching = async () => {
  const cvSkills = [
    "Python",
    "Java",
    "JavaScript",
    "C#",
    "C++",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "TypeScript",
    "Go",
    "Rust",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "jQuery",
    "AJAX",
    "Agile Methodologies",
    "Scrum",
    "Kanban",
    "Software Development Life Cycle (SDLC)",
    "Test-Driven Development (TDD)",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Microservices Architecture",
    "RESTful API Development",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "SQL Server",
    "NoSQL",
    "MongoDB",
    "Cassandra",
    "DynamoDB",
    "Data Modeling",
    "Database Management",
    "Linux/Unix Administration",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Ansible",
    "Chef",
    "Puppet",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Machine Learning Algorithms",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Big Data Technologies",
    "Hadoop",
    "Spark",
    "Network Security",
    "Cryptography",
    "Ethical Hacking",
    "Security Audits and Compliance",
    "Incident Response",
    "Problem-Solving",
    "Communication",
    "Teamwork and Collaboration",
    "Adaptability",
    "Time Management",
    "Mobile Development",
    "iOS Development",
    "Android Development",
    "Internet of Things (IoT)",
    "Blockchain",
    "Quantum Computing",
  ];

  const resumeSkills = [
    "Rust",
    "node",
    "JavaScript",
    "spanish",
    "github",
    "newcastle",
    "microsoft",
    "MongoDB",
    "french",
    "english",
    "northumbria university",
    "Go",
    "Java",
    "java",
    "ci/cd & including \nbuilding authentication",
    "C#",
    "the \ndesign & development",
    "Azure",
    "Chef",
    "TypeScript",
    "chef &",
  ];
  const test = await getCvSkills();

  console.log(test[0].skill);
  console.log("test", test);
  // Convert both lists to lowercase for case-insensitive comparison
  const lowercaseCvSkills = cvSkills.map((skill) => skill.toLowerCase());
  const lowercaseResumeSkills = resumeSkills.map((skill) =>
    skill.toLowerCase()
  );

  // Find matched skills
  const matchedSkills = lowercaseResumeSkills.filter((resumeSkill) =>
    lowercaseCvSkills.includes(resumeSkill)
  );

  // Assuming a function or logic to map matchedSkills to matchedJobs is needed but not provided
  // This would be based on matchedSkills and some form of lookup or logic

  console.log("matchedSkills", matchedSkills);
  const jobs = await getJobs(matchedSkills);

  // we need to get the cvSkills for each job, and check each job to see if it contains the matchedSkill.
  // The problem is that the getJobs function above will return a job object, job:{id:xxx, title:xxx, cvSkills:[{id:xxx, skill:xxx}]}
  // So we need to map over the jobs and check if the job.cvSkills contains the matchedSkill

  return (
    <>
      <div className="justify-center">
        <MatchingSkills matchedSkills={matchedSkills}></MatchingSkills>
        <MatchingJobs matchedJobs={matchedJobs}></MatchingJobs>
      </div>
    </>
  );
};

export default Matching;
