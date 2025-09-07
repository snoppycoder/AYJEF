"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle, Eye, Target } from "lucide-react";
import TechnicalQualification from "../component/qual";
export default function About() {
  return (
    <div className="w-full min-h-screen px-4 py-8 flex flex-col gap-y-6 bg-gradient-to-r from-blue-100 to-blue-50">
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg  ">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700 mb-4">
            <Eye className="w-6 h-6 text-blue-500" />
            Our vision & mission
          </div>
          <div className="flex">
            <Image
              src="/mission-vision.jfif"
              height={100}
              width={200}
              alt="mission and vision"
            />
            <p>
              AYJEF Water Works and Business Service PLC aspires to see itself
              to be efficient, effective and competent consultancy service
              providing firm on water works and other development activities.{" "}
              <br />
              AYJEF Water Works and Business Service PLC intends to provide
              professional Consultancy services to implementing agents on water
              works and other development activities. To attain these mottos,
              the company makes use of qualified experienced & relevant staff
              and adopts result based management and participatory approaches;
              and focuses on effective and efficient services
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-white p-6 rounded-xl leading-relaxed shadow-lg "
      >
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700 mb-4">
          <Award className="w-6 h-6 text-blue-500" />
          About Us
        </div>
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
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Ministry of Water and Energy (as represented by Oromia Bureau of
              Water, Mineral and Energy),
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Ethiopian Management Institute (EMI),
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
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
      <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg ">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700 mb-4">
          {/* <Award className="w-6 h-6 text-blue-500" /> */}
          Principles and Values
        </div>
        The company's principles and values include:
        <ul className="list-disc list-inside  text-gray-700">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Result based management
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Efficiency and effectiveness
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Quality professional and /or technical services
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Staff commitment and dedication
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              Creativity of staff
            </li>
          </motion.div>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl leading-relaxed shadow-lg ">
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700 mb-4">
          <Target className="w-6 h-6 text-blue-500" />
          Strategic Objectives
        </div>
        The strategic objectives of the company has emanated from its overall
        mission. As a result, the major objectives of the company include:
        <ul className="list-disc list-inside  text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            To produce standardized study based/ research based documents so as
            to enable the clientele make use of it accordingly,
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            To improve implementation and management capacity of implementing
            agents through provision of consultancy services/ technical supports
            for the same,
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
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
      <TechnicalQualification />
    </div>
  );
}
