import React from "react";
import {
  getCvSkillList,
  getJobsBySkills,
  getJobs,
  getJob,
} from "@/lib/actions/charityActions";
import MatchingSkills from "@/app/components/student/MatchingSkills";
import MatchingJobs from "@/app/components/student/MatchingJobs";
import { all } from "axios";
import { match } from "assert";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getStudent } from "@/lib/actions/studentActions";
import { runPythonScript } from "@/index.js";
import PDFView from "@/app/components/student/PDFView";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { addCvSkill } from "@/lib/actions/studentActions";

const Matching = async () => {
  // Get student session
  const session = await getServerSession(authOptions);
  const user = session?.user?.id;
  const student = await getStudent(user);

  //Initialise variables
  let matchedJobIds = [];
  const matchedJobsWithSkills = {};
  let matchedSkills = [];
  let finalJobs = [];
  // Check if student has a CV
  if (student.Cv?.cvUrl) {
    const result = await runPythonScript(student.Cv?.cvUrl);
    const fileName = result[1].toString();
    const resumeSkills = result[0][fileName];

    let cvSkills = await getCvSkillList();
    for (let i = 0; i < cvSkills.length; i++) {
      cvSkills[i].skill = cvSkills[i].skill.toLowerCase();
    }

    const jobs = await getJobs();
    const allJobSkills = {};
    // put job id, skill in the object {jobId: [skill,skill,skill]} ?
    const lowercaseResumeSkills = resumeSkills.map((skill) =>
      skill.toLowerCase()
    );

    // Add all job skills to an object with job id as key, lowercase for matching
    for (const job of jobs) {
      if (job.cvSkills) {
        allJobSkills[job.id] = [];
        for (const skill of job.cvSkills) {
          skill.skill = skill.skill.toLowerCase();
          allJobSkills[job.id].push(skill.skill);
        }
      }
    }
    const matchedJobs = [];
    //find matching skills between resume and job skills
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
    // remove duplicates
    matchedJobIds = Array.from(new Set(matchedJobIds));
    // get job details for matched job ids
    for (let i = 0; i < matchedJobIds.length; i++) {
      const finalJob = await getJob(matchedJobIds[i]);
      finalJobs.push(finalJob);
    }
    // remove duplicates
    matchedSkills = Array.from(new Set(matchedSkills));

    // store matched cv skills to all db skills in db for future reference
    // get Skills list from the database & convert to lowercase

    for (let skill of lowercaseResumeSkills) {
      for (let dbSkill of cvSkills) {
        if (skill == dbSkill.skill) {
          try {
            await addCvSkill(student.Cv.id, dbSkill);
          } catch (error) {
            console.error("Error creating cv skill", error);
          }
        }
      }
    }
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
