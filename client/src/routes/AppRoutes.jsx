import { Navigate, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import About from "../pages/company/About";
import CoreTeam from "../pages/company/CoreTeam";
import Services from "../pages/services/Services";
import EMR from "../pages/services/EMR";
import OpenEMR from "../pages/services/OpenEMR";
import MedicalBilling from "../pages/services/MedicalBilling";
import Interoperability from "../pages/services/Interoperability";
import Customization from "../pages/services/Customization";
import PatientPortal from "../pages/services/PatientPortal";
import OpenEMRPro from "../pages/services/OpenEMRPro";
import OpenEMRProFeatures from "../pages/services/openemr-pro/Features";
import TwoFA from "../pages/services/openemr-pro/TwoFA";
import EPrescription from "../pages/services/openemr-pro/EPrescription";
import GoogleCalendar from "../pages/services/openemr-pro/GoogleCalendar";
import OpenEMRProInteroperability from "../pages/services/openemr-pro/Interoperability";
import MeaningfulUse from "../pages/services/openemr-pro/MeaningfulUse";
import Scheduler from "../pages/services/openemr-pro/Scheduler";
import Support from "../pages/services/openemr-pro/Support";
import Telehealth from "../pages/services/openemr-pro/Telehealth";

import TechnicalWriting from "../pages/services/TechnicalWriting";
import ViCacheFilter from "../pages/products/ViCacheFilter";
import PBM from "../pages/products/PBM";

// Enterprise IT Service Pages
import EnterpriseIT from "../pages/services/EnterpriseIT";
import Migration from "../pages/services/Migration";
import CloudServices from "../pages/services/CloudServices";
import PerformanceTools from "../pages/services/PerformanceTools";
import QACertification from "../pages/services/QACertification";
import Virtualization from "../pages/services/Virtualization";
import OpenSourceServices from "../pages/services/OpenSourceServices";
import EnterpriseSecurity from "../pages/services/EnterpriseSecurity";
import SolutionDemoPortals from "../pages/services/SolutionDemoPortals";
import IoT from "../pages/services/IoT";
import DatabaseServices from "../pages/services/DatabaseServices";
import HadoopBusinessAnalytics from "../pages/services/HadoopBusinessAnalytics";
import MigrationMethodology from "../pages/services/MigrationMethodology";
import HP9000Containers from "../pages/services/HP9000Containers";
import ApplicationPortingKits from "../pages/services/ApplicationPortingKits";
import PostgreSQLMigration from "../pages/services/PostgreSQLMigration";
import WebCaching from "../pages/services/WebCaching";
import VistaEHR from "../pages/services/VistaEHR";

import Blogs from "../pages/Blogs";
import BlogArticle from "../pages/BlogArticle";
import CaseStudy from "../pages/CaseStudy";
import CustomizationContents from "../pages/CustomizationContents";
import Datasheet from "../pages/Datasheet";
import Demo from "../pages/Demo";
import EMRCustomization from "../pages/EMRCustomization";
import Flick from "../pages/Flick";
import MySalutem from "../pages/MySalutem";
import SmartAWSContents from "../pages/SmartAWSContents";
import SmartBillingContents from "../pages/SmartBillingContents";
import SmartFHIRContents from "../pages/SmartFHIRContents";
import Videos from "../pages/Videos";
import Webinars from "../pages/Webinars";
import Careers from "../pages/careers/Careers";
import Contact from "../pages/contact/Contact";
import FAQ from "../pages/FAQ";
import NotFound from "../pages/errors/NotFound";

// AI & Precision Medicine portfolio — own chrome, so it sits outside MainLayout
import Portfolio from "../pages/portfolio/Portfolio";
import PortfolioContact from "../pages/portfolio/PortfolioContact";

function AppRoutes() {
  return (
    <Routes>
      {/* Portfolio — standalone chrome, rendered outside the ViSolve layout */}
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/contact" element={<PortfolioContact />} />
      <Route path="/portfolio/*" element={<Navigate to="/portfolio" replace />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="core-team" element={<CoreTeam />} />
        <Route path="services" element={<Services />} />
        <Route path="services/enterprise-it" element={<EnterpriseIT />} />
        <Route path="services/emr" element={<EMR />} />
        <Route path="services/openemr" element={<OpenEMR />} />
        <Route path="services/medicalbilling" element={<MedicalBilling />} />
        <Route path="services/medical-billing" element={<MedicalBilling />} />
        <Route path="services/interoperability" element={<Interoperability />} />
        <Route path="services/customization" element={<Customization />} />
        <Route path="services/patientportal" element={<PatientPortal />} />
        <Route path="services/patient-portal" element={<PatientPortal />} />
        <Route path="services/openemr-pro" element={<OpenEMRPro />} />
        <Route path="services/openemr-pro/features" element={<OpenEMRProFeatures />} />
        <Route path="services/openemr-pro/2fa" element={<TwoFA />} />
        <Route path="services/openemr-pro/eprescription" element={<EPrescription />} />
        <Route path="services/openemr-pro/googlecalendar" element={<GoogleCalendar />} />
        <Route path="services/openemr-pro/interoperability" element={<OpenEMRProInteroperability />} />
        <Route path="services/openemr-pro/meaningfuluse" element={<MeaningfulUse />} />
        <Route path="services/openemr-pro/scheduler" element={<Scheduler />} />
        <Route path="services/openemr-pro/support" element={<Support />} />
        <Route path="services/openemr-pro/telehealth" element={<Telehealth />} />

        {/* Enterprise IT Service Routes */}
        <Route path="services/migration" element={<Migration />} />
        <Route path="services/migration/methodology" element={<MigrationMethodology />} />
        <Route path="services/migration/hp-9000-containers" element={<HP9000Containers />} />
        <Route path="services/migration/application-porting-kits" element={<ApplicationPortingKits />} />
        <Route path="services/migration/postgresql" element={<PostgreSQLMigration />} />
        <Route path="services/cloud" element={<CloudServices />} />
        <Route path="services/performance-tools" element={<PerformanceTools />} />
        <Route path="services/qa-certification" element={<QACertification />} />
        <Route path="services/technical-writing" element={<TechnicalWriting />} />
        <Route path="services/virtualization" element={<Virtualization />} />
        <Route path="services/opensource" element={<OpenSourceServices />} />
        <Route path="services/security" element={<EnterpriseSecurity />} />
        <Route path="services/demo-portals" element={<SolutionDemoPortals />} />
        <Route path="services/iot" element={<IoT />} />
        <Route path="services/database" element={<DatabaseServices />} />
        <Route path="services/web-caching" element={<WebCaching />} />
        <Route path="products/vicache-filter" element={<ViCacheFilter />} />
        <Route path="products/pbm" element={<PBM />} />
        <Route path="services/vista-ehr" element={<VistaEHR />} />
        <Route path="services/hadoop-analytics" element={<HadoopBusinessAnalytics />} />

        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:slug" element={<BlogArticle />} />
        <Route path="casestudy" element={<CaseStudy />} />
        <Route path="customization-contents" element={<CustomizationContents />} />
        <Route path="datasheet" element={<Datasheet />} />
        <Route path="demo" element={<Demo />} />
        <Route path="emr-customization" element={<EMRCustomization />} />
        <Route path="flick" element={<Flick />} />
        <Route path="mysalutem" element={<MySalutem />} />
        <Route path="smart-aws-contents" element={<SmartAWSContents />} />
        <Route path="smart-billing-contents" element={<SmartBillingContents />} />
        <Route path="smart-fhir-contents" element={<SmartFHIRContents />} />
        <Route path="videos" element={<Videos />} />
        <Route path="webinars" element={<Webinars />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
