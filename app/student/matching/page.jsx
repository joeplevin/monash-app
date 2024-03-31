import React from "react";
import {
  getCvSkillList,
  getJobsBySkills,
  getJobs,
  getJob,
} from "@/lib/actions/charityActions2";
import MatchingSkills from "@/app/components/student/MatchingSkills";
import MatchingJobs from "@/app/components/student/MatchingJobs";
import { all } from "axios";
import { match } from "assert";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions2";
import { runPythonScript } from "@/index.js";
import PDFView from "@/app/components/student/PDFView";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const Matching = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const student = await getStudent(user.id);
  const cvSkills = await getCvSkillList();
  let matchedJobIds = [];
  const matchedJobsWithSkills = {};
  let matchedSkills = [];
  let finalJobs = [];
  // console.log("cvSkills", cvSkills);
  if (student.Cv?.cvUrl) {
    const result = await runPythonScript(student.Cv?.cvUrl);
    const fileName = result[1].toString();
    const resumeSkills = result[0][fileName];

    const jobs = await getJobs();
    // console.log("all jobs with skills", jobs);
    const allJobSkills = {};
    // put job id, skill in the object {jobId: [skill,skill,skill]} ?
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
    const matchedJobs = [];
    // console.log("allJobSkills before match", allJobSkills);
    // job = jobID: [skill, skill, skill]

    for (let job in allJobSkills) {
      matchedJobsWithSkills[job] = [];
      for (let skill of allJobSkills[job]) {
        for (let resSkill of lowercaseResumeSkills) {
          if (skill == resSkill) {
            matchedJobIds.push(job);
            matchedJobsWithSkills[job].push(skill);
            matchedSkills.push(skill);
          }
        }
      }
    }
    matchedJobIds = Array.from(new Set(matchedJobIds));
    for (let i = 0; i < matchedJobIds.length; i++) {
      const finalJob = await getJob(matchedJobIds[i]);
      console.log("finalJob", finalJob);
      finalJobs.push(finalJob);
    }
    matchedSkills = Array.from(new Set(matchedSkills));
    // This would be based on matchedSkills and some form of lookup or logic

    console.log("matchedSkills", matchedSkills);

    // Assuming a function or logic to map matchedSkills to matchedJobs is needed but not provided
    // const matchedJobs = []; // This would be based on matchedSkills and some form of lookup or logic
    // console.log("allJobSkills after match", matchedJobsWithSkills);

    // const matchedSkills = lowercaseResumeSkills.filter((resumeSkill) =>
    //   cvSkills.includes(resumeSkill)
    // );

    // Assuming a function or logic to map matchedSkills to matchedJobs is needed but not provided
    // const matchedJobs = []; // This would be based on matchedSkills and some form of lookup or logic

    // console.log("matchedSkills", matchedSkills);

    // Convert both lists to lowercase for case-insensitive comparison

    // const MatchingSkills = () => {
    //   const findMatchingSkills = (cvSkills, resumeSkills) => {
    //     const matchingSkills = [];

    //     for (let i = 0; i < resumeSkills.length; i++) {
    //       const resumeSkill = resumeSkills[i].toLowerCase();
    //       const matchingSkill = cvSkills.find(
    //         (cvSkill) => cvSkill.toLowerCase() === resumeSkill
    //       );
    //       if (matchingSkill) {
    //         matchingSkills.push(matchingSkill);
    //       }
    //     }

    //     return matchingSkills;
    //   };

    //   const matchingSkills = resumeSkills.filter((skill) =>
    //     cvSkills.includes(skill)
    //   );
    //   console.log("matchingSkills", matchingSkills);
    // };

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
  }
  return (
    <>
      {student.Cv?.cvUrl ? (
        <div className="justify-center">
          <PDFView cvUrl={student.Cv?.cvUrl} />
          <div className="justify-center">
            <MatchingSkills matchedSkills={matchedSkills} />
            <MatchingJobs matchedJobs={finalJobs} />
          </div>
        </div>
      ) : (
        <div class="upload">
          <h1> No Cv Found</h1>
          <Button as={Link} href="/student/edit-profile">
            Upload CV
          </Button>
        </div>
      )}
    </>
  );
  // catch (error) {
  //  console.error("Error fetching jobs:", error);
  // return null;
  // }
};
export default Matching;

// const cvSkills = [
//   "Python",
//   "Java",
//   "JavaScript",
//   "C#",
//   "C++",
//   "Ruby",
//   "PHP",
//   "Swift",
//   "Kotlin",
//   "TypeScript",
//   "Go",
//   "Rust",
//   "HTML5",
//   "CSS3",
//   "Bootstrap",
//   "jQuery",
//   "AJAX",
//   "Agile Methodologies",
//   "Scrum",
//   "Kanban",
//   "Software Development Life Cycle (SDLC)",
//   "Test-Driven Development (TDD)",
//   "Continuous Integration/Continuous Deployment (CI/CD)",
//   "Microservices Architecture",
//   "RESTful API Development",
//   "SQL",
//   "MySQL",
//   "PostgreSQL",
//   "SQL Server",
//   "NoSQL",
//   "MongoDB",
//   "Cassandra",
//   "DynamoDB",
//   "Data Modeling",
//   "Database Management",
//   "Linux/Unix Administration",
//   "Docker",
//   "Kubernetes",
//   "Jenkins",
//   "Ansible",
//   "Puppet",
//   "AWS",
//   "Azure",
//   "Google Cloud Platform",
//   "Machine Learning Algorithms",
//   "Deep Learning",
//   "TensorFlow",
//   "PyTorch",
//   "Natural Language Processing (NLP)",
//   "Computer Vision",
//   "Big Data Technologies",
//   "Hadoop",
//   "Spark",
//   "Network Security",
//   "Cryptography",
//   "Ethical Hacking",
//   "Security Audits and Compliance",
//   "Incident Response",
//   "Problem-Solving",
//   "Communication",
//   "Teamwork and Collaboration",
//   "Adaptability",
//   "Time Management",
//   "Mobile Development",
//   "iOS Development",
//   "Android Development",
//   "Internet of Things (IoT)",
//   "Blockchain",
//   "Quantum Computing",
// ];

// const resumeSkills = [
//   "Rust",
//   "node",
//   "JavaScript",
//   "spanish",
//   "github",
//   "newcastle",
//   "microsoft",
//   "MongoDB",
//   "french",
//   "english",
//   "northumbria university",
//   "Go",
//   "Java",
//   "java",
//   "ci/cd & including \nbuilding authentication",
//   "C#",
//   "the \ndesign & development",
//   "Azure",
//   "Chef",
//   "TypeScript",
//   "chef &",
// ];
