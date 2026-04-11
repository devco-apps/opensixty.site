export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  content: string;
  paragraphs: string[];
}

export const services: Service[] = [
  {
    slug: "construction-infrastructure",
    title: "Construction & Infrastructure",
    description:
      "Delivering end-to-end solutions for commercial, industrial, and civil projects.",
    image: "/images/services/construction-infrastructure.webp",
    thumbnail: "/images/services/construction-infrastructure-thumb.webp",
    content:
      "Open Sixty delivers construction and infrastructure solutions ranging from project planning and material supply to execution support. They work on commercial, industrial, and civil projects, ensuring quality delivery, regulatory compliance, and alignment with client timelines and budgets.",
    paragraphs: [
      "Open Sixty delivers comprehensive construction and infrastructure solutions that support the development of commercial, industrial, and civil projects. Our services span project planning, material sourcing, supply chain coordination, and execution support, ensuring that each project is delivered efficiently and to the highest standards.",
      "We work closely with clients, contractors, and stakeholders to align project objectives with practical implementation strategies. Our expertise in procurement and logistics enables us to secure quality materials and ensure their timely delivery, minimizing delays and cost overruns.",
      "Open Sixty is committed to maintaining strict adherence to regulatory requirements, safety standards, and quality benchmarks. We understand the critical role infrastructure plays in economic development and strive to deliver projects that are durable, sustainable, and impactful.",
      "By combining operational excellence with strategic oversight, Open Sixty positions itself as a reliable partner in the successful delivery of infrastructure and construction initiatives.",
    ],
  },
  {
    slug: "logistics-supply-chain-management",
    title: "Logistics & Supply Chain Management",
    description:
      "Optimizing the movement of goods from origin to destination with efficiency and cost control.",
    image: "/images/services/logistics-supply.webp",
    thumbnail: "/images/services/logistics-supply-thumb.webp",
    content:
      "Open Sixty optimizes the movement of goods from origin to destination. This includes transportation coordination, warehousing, and delivery planning to ensure efficiency and cost control.",
    paragraphs: [
      "Efficient logistics and supply chain management are critical to operational success, and Open Sixty offers tailored solutions that ensure the seamless movement of goods from origin to destination. Our services encompass transportation planning, freight coordination, warehousing, inventory management, and distribution.",
      "We take a data-driven approach to optimizing supply chains, identifying opportunities to reduce costs, improve delivery timelines, and enhance overall reliability. By integrating multiple logistics components into a cohesive system, we eliminate inefficiencies and provide clients with end-to-end visibility.",
      "Our partnerships with trusted logistics providers, combined with our operational oversight, allow us to manage complex supply chains across multiple regions. Open Sixty remains committed to delivering consistent, scalable, and resilient logistics solutions that support our clients’ growth and operational objectives.",
    ],
  },
  {
    slug: "commodity-trading-sourcing",
    title: "Commodity Trading & Sourcing",
    description:
      "Facilitating the buying and selling of key commodities across local and international markets.",
    image: "/images/services/commodity-trading.webp",
    thumbnail: "/images/services/commodity-trading-thumb.webp",
    content:
      "Open Sixty facilitates the buying and selling of key commodities across local and international markets. They connect producers with buyers, ensuring reliable supply chains, competitive pricing, and quality assurance.",
    paragraphs: [
      "Open Sixty delivers structured and reliable commodity trading solutions designed to connect producers, suppliers, and buyers across both regional and international markets. Our approach is rooted in market intelligence, strong supplier relationships, and a commitment to quality assurance. We specialize in identifying viable trade opportunities, negotiating competitive pricing, and ensuring that commodities meet defined specifications and regulatory standards.",
      "Through a carefully managed sourcing process, we mitigate supply risks and maintain consistency in delivery, enabling our clients to operate with confidence in dynamic market conditions. Our team continuously monitors global and local commodity trends, allowing us to anticipate fluctuations and position our clients advantageously. Whether facilitating bulk transactions or long-term supply agreements, Open Sixty acts as a dependable trading partner focused on transparency, efficiency, and value creation.",
    ],
  },
  {
    slug: "import-export-solutions",
    title: "Import & Export Solutions",
    description:
      "Handling end-to-end cross-border trade processes, including sourcing, compliance, and customs coordination.",
    image: "/images/services/import-export.webp",
    thumbnail: "/images/services/import-export-thumb.webp",
    content:
      "They handle end-to-end cross-border trade processes, including sourcing, compliance, documentation, and customs coordination—making international trade seamless for clients.",
    paragraphs: [
      "Open Sixty provides comprehensive import and export services that simplify the complexities of cross-border trade. We manage the full lifecycle of international transactions, including supplier coordination, regulatory compliance, documentation, customs clearance, and final delivery.",
      "Our expertise ensures that all trade activities adhere to applicable laws and international standards, reducing delays and minimizing risk. We work closely with clients to structure shipments efficiently, optimize duties and tariffs where applicable, and maintain full visibility throughout the logistics process.",
      "By combining operational precision with deep knowledge of trade frameworks, Open Sixty enables businesses to expand beyond domestic markets with confidence. Our goal is to transform international trade from a challenge into a strategic advantage for our clients.",
    ],
  },
  {
    slug: "procurement-services",
    title: "Procurement Services",
    description:
      "Acting as a strategic sourcing partner to acquire goods and materials at the best value.",
    image: "/images/services/procurement-services.webp",
    thumbnail: "/images/services/procurement-services-thumb.webp",
    content:
      "They act as a strategic sourcing partner, helping businesses acquire goods and materials at the best value while maintaining quality and supplier reliability.",
    paragraphs: [
      "Open Sixty offers strategic procurement services designed to help organizations acquire the goods and materials they need with maximum efficiency and value. We act as a trusted intermediary, leveraging our supplier network and market knowledge to secure high-quality products at competitive prices.",
      "Our procurement process is guided by transparency, due diligence, and strict quality control measures. We carefully evaluate suppliers, negotiate favorable terms, and ensure that all purchases align with client specifications and timelines.",
      "By outsourcing procurement to Open Sixty, clients benefit from reduced operational burden, improved cost management, and access to a broader supplier base. Our goal is to streamline procurement functions while maintaining the highest standards of reliability and accountability.",
    ],
  },
  {
    slug: "business-consulting-trade-advisory",
    title: "Business Consulting & Trade Advisory",
    description:
      "Providing insights into market trends, trade regulations, and business strategy.",
    image: "/images/services/business-consulting.webp",
    thumbnail: "/images/services/business-consulting-thumb.webp",
    content:
      "Open Sixty provides insights into market trends, trade regulations, and business strategy, helping clients make informed decisions and expand into new markets confidently.",
    paragraphs: [
      "Open Sixty provides strategic consulting and advisory services to support informed decision-making and sustainable business growth. Our expertise spans market analysis, trade regulations, risk assessment, and operational strategy.",
      "We work closely with clients to understand their objectives and develop tailored solutions that address both immediate challenges and long-term opportunities. Our advisory services are grounded in practical insights and real-world experience, enabling businesses to navigate complex environments with clarity and confidence.",
      "Whether entering new markets, optimizing existing operations, or adapting to regulatory changes, Open Sixty serves as a trusted advisor committed to delivering measurable impact and strategic value.",
    ],
  },
  {
    slug: "project-support-execution",
    title: "Project Support & Execution",
    description:
      "Supporting commercial and industrial projects with materials, vendor management, and timely delivery.",
    image: "/images/services/project-support.webp",
    thumbnail: "/images/services/project-support-thumb.webp",
    content:
      "They support commercial and industrial projects by supplying materials, managing vendor relationships, and ensuring timely delivery aligned with project timelines.",
    paragraphs: [
      "Open Sixty plays a critical role in supporting the successful execution of commercial and industrial projects. We provide end-to-end assistance, from planning and resource allocation to procurement and delivery coordination.",
      "Our team ensures that all project requirements are met efficiently, with a focus on maintaining timelines, controlling costs, and upholding quality standards. We collaborate with contractors, suppliers, and stakeholders to create a cohesive execution framework that minimizes disruptions and maximizes productivity.",
      "By aligning our services with project objectives, we enable clients to focus on core operations while we manage the complexities of supply chain coordination and resource management. Open Sixty is committed to delivering projects that meet both operational and strategic expectations.",
    ],
  },
  {
    slug: "financial-trade-facilitation",
    title: "Financial & Trade Facilitation",
    description:
      "Assisting in structuring trade deals, offering solutions around payment terms and risk mitigation.",
    image: "/images/services/financial-trade.webp",
    thumbnail: "/images/services/financial-trade-thumb.webp",
    content:
      "Open Sixty assists in structuring trade deals, offering solutions around payment terms, risk mitigation, and transaction facilitation to enable smoother business operations.",
    paragraphs: [
      "Open Sixty offers financial and trade facilitation services designed to support smooth and secure commercial transactions. We assist clients in structuring trade deals, managing payment terms, and mitigating financial risks associated with domestic and international trade.",
      "Our solutions include facilitating negotiations between parties, advising on appropriate payment instruments, and ensuring that transactions are executed efficiently and transparently. We understand the financial complexities of trade and work to create arrangements that protect the interests of all stakeholders.",
      "By bridging gaps between buyers and sellers, Open Sixty enhances trust, reduces transactional friction, and enables deals to be completed with confidence. Our role is to ensure that financial processes support, rather than hinder, business growth.",
    ],
  },
  {
    slug: "market-access-networking",
    title: "Market Access & Networking",
    description:
      "Leveraging their network to connect clients with trusted partners and new opportunities.",
    image: "/images/services/market-access.webp",
    thumbnail: "/images/services/market-access-thumb.webp",
    content:
      "They leverage their network to connect clients with trusted partners, opening up new opportunities in both regional and international markets.",
    paragraphs: [
      "Open Sixty leverages its extensive network to provide clients with access to new markets, strategic partnerships, and business opportunities. We connect organizations with reliable suppliers, buyers, and collaborators, facilitating relationships that drive growth and expansion.",
      "Our market access services are informed by deep regional knowledge and industry insights, allowing us to identify opportunities that align with our clients’ strategic goals. We focus on building long-term partnerships that create sustainable value rather than short-term gains.",
      "Through active engagement and relationship management, Open Sixty positions clients to compete effectively in both established and emerging markets. Our network becomes an extension of our clients’ capabilities, opening doors to new possibilities.",
    ],
  },
];
