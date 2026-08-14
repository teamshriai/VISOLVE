#!/usr/bin/env node
/**
 * Script to strip duplicate header+footer functions from OpenEMR Pro sub-pages.
 * Each file has:
 *   - A private *Header() function starting at line 4, ending around line 61-62
 *   - A private *Footer() function starting around line 64-66, ending around line 116-117  
 *   - Calls to those components inside the main function
 * 
 * Strategy: Use regex to remove all content before "function <PageName>() {",
 *           remove the header and footer invocations inside the main function,
 *           then add the OpenEMRSubNav import + usage.
 */

const fs = require('fs');
const path = require('path');

const files = [
  { file: 'src/pages/services/openemr-pro/TwoFA.jsx', name: 'TwoFA', active: '2FA' },
  { file: 'src/pages/services/openemr-pro/Features.jsx', name: 'OpenEMRProFeatures', active: 'Features' },
  { file: 'src/pages/services/openemr-pro/GoogleCalendar.jsx', name: 'GoogleCalendar', active: 'Google Calendar' },
  { file: 'src/pages/services/openemr-pro/Scheduler.jsx', name: 'Scheduler', active: 'Scheduler Pro' },
  { file: 'src/pages/services/openemr-pro/EPrescription.jsx', name: 'EPrescription', active: 'e-Prescription' },
  { file: 'src/pages/services/openemr-pro/Telehealth.jsx', name: 'Telehealth', active: 'Telehealth' },
  { file: 'src/pages/services/openemr-pro/Interoperability.jsx', name: 'OpenEMRProInteroperability', active: 'Interoperability' },
  { file: 'src/pages/services/OpenEMRPro.jsx', name: 'OpenEMRPro', active: 'OpenEMR Pro' },
  { file: 'src/pages/services/PatientPortal.jsx', name: 'PatientPortal', active: 'Patient Portal' },
  { file: 'src/pages/services/Customization.jsx', name: 'Customization', active: 'Customization' },
];

for (const { file, name, active } of files) {
  const fullPath = path.join(process.cwd(), file);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Find the main function definition
  const mainFnRegex = new RegExp(`^function ${name}\\(\\)`, 'm');
  const match = mainFnRegex.exec(content);
  
  if (!match) {
    console.log(`WARNING: Could not find "function ${name}()" in ${file}`);
    continue;
  }
  
  // Keep only from the main function onwards
  let mainContent = content.slice(match.index);
  
  // Remove header invocation (e.g., <TwoFAHeader /> or <OpenEMRProHeader />)
  mainContent = mainContent.replace(/\s*\{\/\* Header \*\/\}\s*\n\s*<\w+Header\s*\/>/g, '');
  // Also try pattern without comment
  mainContent = mainContent.replace(/\s*<\w+Header\s*\/>/g, '');
  
  // Remove footer invocation (e.g., <TwoFAFooter />)
  mainContent = mainContent.replace(/\s*\{\/\* Footer \*\/\}\s*\n\s*<\w+Footer\s*\/>/g, '');
  mainContent = mainContent.replace(/\s*<\w+Footer\s*\/>/g, '');
  
  // Build final file content
  // Determine relative path for OpenEMRSubNav
  const depth = file.split('/').length - 3; // relative to src/pages
  const relPath = depth >= 2
    ? '../../../components/ui/OpenEMRSubNav'
    : '../../components/ui/OpenEMRSubNav';
  
  const newContent = `import React from "react";
import { Link } from "react-router-dom";
import OpenEMRSubNav from "${relPath}";

${mainContent}`;

  // Add the SubNav into the render — after the first <div ...> opening line
  const subNavInsert = `      {/* OpenEMR Section Sub-Navigation */}\n      <OpenEMRSubNav activeLabel="${active}" />\n`;
  
  const fixedContent = newContent.replace(
    /(<div className="w-full bg-white font-sans text-gray-700">)\s*\n/,
    `$1\n${subNavInsert}`
  );
  
  fs.writeFileSync(fullPath, fixedContent, 'utf8');
  console.log(`✓ Cleaned ${file}`);
}
