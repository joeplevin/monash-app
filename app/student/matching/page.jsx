import React from "react";
import {
  getCvSkills,
  getJobsBySkills,
  getJobs,
} from "@/lib/actions/charityActions";
import MatchingSkills from "@/app/components/student/MatchingSkills";
import MatchingJobs from "@/app/components/student/MatchingJobs";
import { all } from "axios";
import { match } from "assert";

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

  const jobs = await getJobs();
  // console.log("all jobs with skills", jobs);
  const allJobSkills = {};
  // put job id, skill in the object {jobId: [skill,skill,skill]} ?
  const lowercaseCvSkills = cvSkills.map((skill) => skill.toLowerCase());
  const lowercaseResumeSkills = resumeSkills.map((skill) =>
    skill.toLowerCase()
  );

  for (const job of jobs) {
    if (job.cvSkills) {
      allJobSkills[job.id] = [];
      for (const skill of job.cvSkills) {
        allJobSkills[job.id].push(skill.skill);
      }
    }
  }

  // console.log("allJobSkills before match", allJobSkills);
  // job = jobID: [skill, skill, skill]

  let matchedJobIds = [];
  let matchedJobsWithSkills = {};
  for (let job in allJobSkills) {
    matchedJobsWithSkills[job] = [];
    for (let skill of allJobSkills[job]) {
      for (let resSkill of lowercaseResumeSkills) {
        if (skill == resSkill) {
          matchedJobIds.push(job);
          matchedJobsWithSkills[job].push(skill);
        }
      }
    }
  }
  matchedJobIds = Array.from(new Set(matchedJobIds));
  console.log("matchedJobIds", matchedJobIds);

  // const matchedJobs = [];
  // for (id in matchedJobs) {
  //   matchedJobs.push(await getJob(id));
  // }
  console.log("allJobSkills after match", matchedJobsWithSkills);

  // Convert both lists to lowercase for case-insensitive comparison

  const MatchingSkills = () => {
    const findMatchingSkills = (cvSkills, resumeSkills) => {
      const matchingSkills = [];

      for (let i = 0; i < resumeSkills.length; i++) {
        const resumeSkill = resumeSkills[i].toLowerCase();
        const matchingSkill = cvSkills.find(
          (cvSkill) => cvSkill.toLowerCase() === resumeSkill
        );
        if (matchingSkill) {
          matchingSkills.push(matchingSkill);
        }
      }

      return matchingSkills;
    };

    const matchingSkills = resumeSkills.filter((skill) =>
      cvSkills.includes(skill)
    );
    console.log("matchingSkills", matchingSkills);

    // Find matched skills between CV skills and resume skills
    // const matchedSkills = lowercaseResumeSkills.filter((resumeSkill) =>
    //   lowercaseCvSkills.includes(resumeSkill)
    // );
    // console.log("matchedSkills", matchedSkills);
    // try {
    //   // Retrieve jobs based on matched skills
    //   const jobs = await getJobsBySkills(matchedSkills);

    //   // Filter jobs to check if they require matched skills
    //   const matchedJobs = await Promise.all(
    //     jobs.map(async (job) => {
    //       const cvSkillsForJob = await getCvSkills(job.id);
    //       const jobContainsMatchedSkill = cvSkillsForJob.some((cvSkill) =>
    //         matchedSkills.includes(cvSkill.skill.toLowerCase())
    //       );
    //       return jobContainsMatchedSkill ? job : null;
    //     })
    //   );

    // Filter out null values from matchedJobs array
    // const finalJobs = matchedJobs.filter((job) => job !== null);

    // console.log("matchedJobs", finalJobs);

    return (
      <>
        {/* <div className="justify-center">
        <MatchingSkills matchedSkills={matchedSkills} />
        <MatchingJobs matchedJobs={finalJobs} />
      </div> */}
      </>
    );
    // } catch (error) {
    //   console.error("Error fetching jobs:", error);
    //   return null;
    // }
  };
};
export default Matching;
