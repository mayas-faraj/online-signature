import React from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { Document, Page as DocumentPage, pdfjs } from "react-pdf";
import Page from "../components/Page";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ContractPage = () => {
  const [file, setFile] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState<[number, number]>([100, 100]);
  const [fontName, setFontName] = React.useState<StandardFonts>(StandardFonts.Helvetica);
  const [fontSize, setFontSize] = React.useState(12);
  const [name, setName] = React.useState("[Your Name]");

  const backendUrl = "http://localhost:5000";
  const graphqlUrl = `${backendUrl}/graphql`;


  React.useEffect(() => {
    const fetchDocument = async () => {
      const response = await fetch(graphqlUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: "query { document(id: 2) { title file description signatureX signatureY }}"
        })
      });
      const result = await response.json();
      console.log(result);

      if (result?.data?.document != null) {
        setFile(backendUrl + result.data.document.file);
        setLocation([result.data.document.signatureX, result.data.document.signatureY]);
        setTitle(result.data.document.title);
        setDescription(result.data.document.description);
      } else {
        setTitle("file not found!");
      }
      };
    fetchDocument();
  }, []);

  const handleAddSignature = async () => {
    const fileResponse = await fetch(file);
    const pdfBytes = await fileResponse.arrayBuffer();
    const pdfDocument = await PDFDocument.load(pdfBytes);
    const page = pdfDocument.getPage(pdfDocument.getPageCount() - 1);
    const textFont = await pdfDocument.embedFont(fontName);
    const { width, height } = page.getSize();
    const textWidth = (await textFont).widthOfTextAtSize(name, fontSize);
    const textHeight = (await textFont).heightAtSize(fontSize);
    const textX = (width - textWidth) / 2;
    const textY = (height - textHeight) / 2;
    page.drawText(name, { x: textX, y: textY, size: fontSize, font: textFont, color: rgb(0, 0, 0) });
    const modifiedPdfBytes = await pdfDocument.save();
    const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "modified.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Page title="Contract">
      <p>Contract page content</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe title="contrct file" src={file} width="100%"></iframe>
      <button onClick={handleAddSignature}>Add Signature</button>
    </Page>
  );
};

export default ContractPage;
