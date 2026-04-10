import Introduction from "./Introduction";
import CompanyMetrics from "./CompanyMetrics";
import CompanyValues from "./CompanyValues";
import CompanyHistory from "./CompanyHistory";

import PartnerLogos from "@/features/home/PartnerLogos";

import { getFilesByPrefix } from "@/lib/server-utils";

const AboutUsPage = () => {
  const partnerLogos = getFilesByPrefix("images/home", "partners-");

  return (
    <main>
      <Introduction />
      <CompanyValues />
      <CompanyMetrics />
      <CompanyHistory />
      <PartnerLogos logoPaths={partnerLogos} />
    </main>
  );
};

export default AboutUsPage;
