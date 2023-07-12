import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

await prismaClient.document.deleteMany();
await prismaClient.user.deleteMany();

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
  data: { title: "sign to test", file: "/uploads/contract-1.pdf", description: "any description of the file", signatureX: 20, signatureY: 100}
});
console.log(result);
result = await prismaClient.document.create({
  data: { title: "yet another sign to test", file: "/uploads/contract-2.pdf", description: "any description of the file", signatureX: 20, signatureY: 100}
});

console.log(result);



