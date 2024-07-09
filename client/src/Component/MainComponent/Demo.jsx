/* import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const Demo = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const textContent = await pdfDoc.getTextContent();
        const text = textContent.items.map(item => item.str).join(' ');

        const percentage = extractPercentage(text);
        const skills = extractSkills(text);

        setResumeData({ percentage, skills });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractPercentage = (text) => {
    const percentageRegex = /(\d{1,3}\.\d{1,2})%/g;
    const percentages = [];
    let match;
    while ((match = percentageRegex.exec(text)) !== null) {
      percentages.push(match[1]);
    }
    return percentages;
  };

  const extractSkills = (text) => {
    // Define a list of known skills to extract
    const knownSkills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
    const skills = knownSkills.filter(skill => text.includes(skill));
    return skills;
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      {resumeData && (
        <div>
          <h3>Extracted Data:</h3>
          <p>Percentage: {resumeData.percentage.join(', ')}</p>
          <p>Skills: {resumeData.skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Demo;
 */