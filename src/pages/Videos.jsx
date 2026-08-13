import React from "react";

const videosList = [
  {
    title: "AWS Instance Performance Monitoring",
    type: "video",
    src: "/assets/openemr/AWS-instance-monitoring.mp4",
  },
  {
    title: "OpenEMR & FHIR demo @ HIMSS 2017",
    type: "iframe",
    src: "https://www.youtube.com/embed/8ZH1Ht-G5IY",
  },
  {
    title: "ViSolve Lab Interoperability Module (LIM) Demo - EMR Integration",
    description: "Pre-recorded video demo on ViSolve Lab Interoperability Module (LIM) - EMR Integration",
    type: "iframe",
    src: "https://www.youtube.com/embed/Us0qwUWUZI4",
  },
  {
    title: "ViSolve Lab Interoperability Module (LIM) Demo - Portal",
    description: "Pre-recorded video demo on ViSolve Lab Interoperability Module (LIM) - Portal",
    type: "iframe",
    src: "https://www.youtube.com/embed/1LScBf-b-qM",
  },
  {
    title: "ViSolve Pluggable Billing Module (PBM) Demo",
    description: "Pre-recorded video demo on ViSolve Pluggable Billing Module (PBM)",
    type: "iframe",
    src: "https://www.youtube.com/embed/MUN3lVurLrQ",
  },
];

function Videos() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Video Demos & Presentations
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Explore ViSolve's video demonstrations covering OpenEMR customization, FHIR interoperability, Lab Interoperability Module (LIM), Pluggable Billing Module (PBM), and AWS Cloud Instance Monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videosList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col space-y-3 p-4 md:p-6"
            >
              <h2 className="text-lg font-bold text-gray-800">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-xs md:text-sm text-gray-600">
                  {item.description}
                </p>
              )}
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-black shadow-inner">
                {item.type === "video" ? (
                  <video controls className="w-full h-full object-cover">
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={item.src}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
