import { getServerSession } from "next-auth";
import { getStudent } from "@/lib/actions/studentActions";
import { runPythonScript } from "@/index.js";
import { getCvSkillList } from "@/lib/actions/charityActions";
import { getJobs, getJob } from "@/lib/actions/jobActions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const Matcher = async () => {
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

    return { finalJobs, matchedSkills, matchedJobsWithSkills, student };
  }
};
