import prisma from "../prisma";

export async function createJob(data) {
    try {
        const result = prisma.job.create({
            data: {
                ...job,
                charity: data.charity
            }
        })
        return result;
    } catch (error) {
        console.log("error creating job",error);
        throw error;
    }
}