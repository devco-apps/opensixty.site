import Introduction from "./Introduction";
import CompanyMetrics from "./CompanyMetrics";
import CompanyValues from "./CompanyValues";
import CompanyHistory from "./CompanyHistory";

const AboutUsPage = () => {
  return (
    <main>
      <Introduction />
      <CompanyValues />
      <CompanyHistory />
      <CompanyMetrics />
    </main>
  );
};

export default AboutUsPage;
