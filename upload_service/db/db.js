import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function addVideoDetailsToDB(title, description, author, url) {
 const videoData = await prisma.videoData.create({
  data: {
      title: title,
      description: description,
      author: author,
      url: url
  } })
 console.log("this is video data : "+videoData);
}
// C:\Users\DELL\Desktop\Test\Youtube-hld\transcode_service