"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="w-full min-h-screen px-4 py-8 flex flex-col gap-y-6 bg-gradient-to-r from-blue-100 to-blue-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-xl font-semibold text-center">
          Our Vision and Mission
        </h2>
        <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg ">
          <div>
            AYJEF Water Works and Business Service PLC aspires to see itself to
            be efficient, effective and competent consultancy service providing
            firm on water works and other development activities.
          </div>

          <div>
            AYJEF Water Works and Business Service PLC intends to provide
            professional Consultancy services to implementing agents on water
            works and other development activities. To attain these mottos, the
            company makes use of qualified experienced & relevant staff and
            adopts result based management and participatory approaches; and
            focuses on effective and efficient services
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-white p-6 rounded-xl leading-relaxed shadow-lg "
      >
        <div>
          AYJEF Water Works and Business Service PLC is a private limited
          company established by professional associates with very rich
          experience in water supply study, design and supervision, project
          evaluation, baseline survey, as well as organizational management and
          financial management. The founders of the company have excellent track
          record of undertaking developmental researches, designing and
          construction of water supply systems, irrigation, facilitating
          trainings and other hydro-engineering and management related
          activities.
        </div>
        <div>
          AYJEF Water Works and Business Service PLC has accreditation
          certificates consisting of Eligibility Certificates from:
          <ul className="list-disc list-inside  text-gray-700">
            <li>
              Ministry of Water and Energy (as represented by Oromia Bureau of
              Water, Mineral and Energy),
            </li>
            <li>Ethiopian Management Institute (EMI),</li>
            <li>
              value added tax (VAT) registration certificates from Revenue and
              Customs Authority (the former ERCA).
            </li>
          </ul>
          Thus, it is the dynamic firm as all bound to the required nature of
          the businesses under operations, and being registered among under such
          services suppliers list in Ethiopia. The company is legally registered
          as a private limited company with a license issued by the Trade and
          Industry Bureau of Nifas Silk Lafto Sub City, Addis Ababa. The firm
          obtained its legal entity status in 2010, with principal registration
          number 08/2/27310/03 and service license number 08/2/3/24542/03. The
          trade license issued is in light of offering services of conducting
          Water Works Consultancy and Management Consultancy.
        </div>
      </motion.div>
      <h2 className="text-xl font-semibold text-center">
        Principles and Values
      </h2>
      <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg ">
        The company's principles and values include:
        <ul className="list-disc list-inside  text-gray-700">
          <li>Result based management</li>
          <li>Efficiency and effectiveness</li>
          <li>Quality professional and /or technical services</li>
          <li>Staff commitment and dedication</li>
          <li>Creativity of staff</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold text-center">
        Strategic Objectives
      </h2>
      <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg ">
        The strategic objectives of the company has emanated from its overall
        mission. As a result, the major objectives of the company include:
        <ul className="list-disc list-inside  text-gray-700">
          <li>
            To produce standardized study based/ research based documents so as
            to enable the clientele make use of it accordingly,
          </li>
          <li>
            To improve implementation and management capacity of implementing
            agents through provision of consultancy services/ technical supports
            for the same,
          </li>
          <li>
            To improve implementation and management capacity of implementing
            agents through provision of feasible and timely trainings/capacity
            building.
          </li>
        </ul>
        The firm has required human as well as capital resources with a head
        office at Addis Ababa, composing multi-disciplinary teams of associate
        professionals and support staffs. The firm has employee equipped with
        all relevant equipment, working computer hard wares, soft wares, and the
        like to carry out all projects and operations or the lateral services
        with sufficient availability and management. In addition, it has 1HZ
        Field Car (Long Base) with plate number A00431AA. AYJEF Water Works and
        Business Service PLC exists to help its clients realize the best future
        that they aspire to become or achieve by providing the utmost quality
        services possible with a great sense of responsibility, integrity and
        accountability to our clients and the public at large.
      </div>
      <h2 className="text-xl font-semibold text-center">
        Areas Of Technical Qualification
      </h2>
      <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg ">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Feasibility study and detail design of water supply and sanitation
            projects
          </li>
          <li>
            Study and design of climate resilient water resource planning,
            feasibility study and detail design of water supply and small scale
            irrigation project
          </li>
          <li>
            Feasibility study and detail design of small scale irrigation
            projects (diversion weir, micro earth dam, pump irrigation systems)
          </li>
          <li>Contract administration and Construction supervision</li>
          <li>
            Water well drilling, construction, pumping test and rehabilitation
            supervision
          </li>
          <li>Capacity building</li>
          <li>
            Solar and wind water pumping study and design works to replace
            diesel driven water supply system
          </li>
          <li>
            Mid Term and Terminal Evaluation of Water and Sanitation Projects
          </li>
          <li>
            Water Resources potential evaluation and mapping (i.e. hydrological,
            hydrogeological, geotechnical and geophysical investigations and
            mapping)
          </li>
          <li>
            Natural resources management study, preparation of conservation plan
            and strategy design
          </li>
          <li>Land use mapping and land suitability evaluation/analysis</li>
          <li>Socio-economic study and baseline survey</li>
          <li>
            Participatory Geographic information System (GIS) & Remote Sensing
            (RS) applications
          </li>
          <li>Monitoring and evaluation</li>
          <li>Environmental and Social Impact Assessment (ESIA)</li>
          <li>
            Training and research in the areas of water resources, water supply
            management and environment
          </li>
        </ul>
      </div>
    </div>
  );
}
