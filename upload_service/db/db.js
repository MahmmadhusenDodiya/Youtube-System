import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function addVideoDetailsToDB(title, description, author, url,videoDuration) {
 const videoData = await prisma.videoData.create({
  data: {
      title: title,
      description: description,
      author: author,
      url: url,
      videoDuration:videoDuration
  } })
 console.log("this is video data : "+videoData);
}
