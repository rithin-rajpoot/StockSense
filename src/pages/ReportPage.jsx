import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import jsPDF from "jspdf";

export default function ReportPage() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const handleDownload = () => {
    console.log("Downloading report...");
    const doc = new jsPDF();

    // Set title
    doc.setFontSize(18);
    doc.text("Stock Analysis Report", 20, 20);

    // Add sections
    doc.setFontSize(14);
    doc.text("Company Overview", 20, 40);
    doc.setFontSize(12);
    doc.text(
      "Report content will be generated here based on the analyzed data.",
      20,
      50
    );

    doc.setFontSize(14);
    doc.text("Technical Analysis", 20, 70);
    doc.setFontSize(12);
    doc.text("Chart and metrics analysis will be displayed here.", 20, 80);

    doc.setFontSize(14);
    doc.text("News Analysis", 20, 100);
    doc.setFontSize(12);
    doc.text(
      "Recent news and their impact on the stock will be summarized here.",
      20,
      110
    );

    // Save the PDF
    doc.save("Stock_Analysis_Report.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="mr-2" />
            Back to Analysis
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
          >
            {darkMode ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-gray-600" />
            )}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold dark:text-white">
              Stock Analysis Report
            </h1>
            <button
              onClick={handleDownload}
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download className="mr-2" size={20} />
              Download Report
            </button>
          </div>

          <div className="space-y-8">
            <section className="border-b dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Company Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Report content will be generated here based on the analyzed
                data.
              </p>
            </section>

            <section className="border-b dark:border-gray-700 pb-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Technical Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Chart and metrics analysis will be displayed here.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                News Analysis
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Recent news and their impact on the stock will be summarized
                here.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <button
        onClick={handleDownload}
        className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700' >
          <Download className='w-5 h-5' />
          Download Report
        </button>
      </div>

      <div className="bg-white mx-4 mb-5 dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className='text-3xl mb-5 font-bold dark:text-white'>Stock Analysis Report</h1>
      </div> */
}


// import jsPDF from 'jspdf';
// import { useState, useEffect } from 'react';

// export default function ReportPage() {
//   const [reportData, setReportData] = useState(null);

//   // Fetch data from an API
//   useEffect(() => {
//     fetch('https://api.example.com/report') // Replace with your API URL
//       .then(response => response.json())
//       .then(data => setReportData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleDownload = () => {
//     if (!reportData) {
//       console.error('No report data available.');
//       return;
//     }

//     const doc = new jsPDF();
    
//     // Title
//     doc.setFontSize(18);
//     doc.text('Stock Analysis Report', 20, 20);

//     // Company Overview
//     doc.setFontSize(14);
//     doc.text('Company Overview', 20, 40);
//     doc.setFontSize(12);
//     doc.text(reportData.companyOverview || 'No data available.', 20, 50, { maxWidth: 170 });

//     // Technical Analysis
//     doc.setFontSize(14);
//     doc.text('Technical Analysis', 20, 70);
//     doc.setFontSize(12);
//     doc.text(reportData.technicalAnalysis || 'No data available.', 20, 80, { maxWidth: 170 });

//     // News Analysis
//     doc.setFontSize(14);
//     doc.text('News Analysis', 20, 100);
//     doc.setFontSize(12);
//     doc.text(reportData.newsAnalysis || 'No data available.', 20, 110, { maxWidth: 170 });

//     // Save PDF
//     doc.save('Stock_Analysis_Report.pdf');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto p-4">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold dark:text-white">Stock Analysis Report</h1>
//           <button 
//             onClick={handleDownload} 
//             className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             Download Report
//           </button>
//         </div>

//         {reportData ? (
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
//             <h2 className="text-xl font-semibold dark:text-white">Company Overview</h2>
//             <p className="text-gray-600 dark:text-gray-400">{reportData.companyOverview}</p>

//             <h2 className="text-xl font-semibold mt-6 dark:text-white">Technical Analysis</h2>
//             <p className="text-gray-600 dark:text-gray-400">{reportData.technicalAnalysis}</p>

//             <h2 className="text-xl font-semibold mt-6 dark:text-white">News Analysis</h2>
//             <p className="text-gray-600 dark:text-gray-400">{reportData.newsAnalysis}</p>
//           </div>
//         ) : (
//           <p className="text-gray-600 dark:text-gray-400">Loading report data...</p>
//         )}
//       </div>
//     </div>
//   );
// }

