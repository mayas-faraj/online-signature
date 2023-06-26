import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

let result: unknown;
result = await prismaClient.user.create({
  data: {name: "admin", password: "Zxasqw12", isAdmin: true }
});
console.log(result);
result = await prismaClient.user.create({
  data: { name: "editor", password: "12345", isAdmin: false }
});
console.log(result);
result = await prismaClient.user.create({
  data: { name: "reviewer", password: "98765", isAdmin: false }
});
console.log(result);

result = await prismaClient.document.create({
  data: { title: "contact-1", signatureX: 20, signatureY: 100}
});
console.log(result);
result = await prismaClient.document.create({
  data: { title: "contact-2", signatureX: 30, signatureY: 120}
});
console.log(result);



