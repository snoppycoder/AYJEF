"use client";
import { motion } from "framer-motion";
import ProjectCard from "../component/project-card";

export default function Projects() {
  const projects = [
    {
      src: "/badeno.jfif",
      detail:
        "Project: Ten Medium towns water supply and sanitation project in agreement with Oromia Water and Energy Bureau (Group IV- Bedeno town WaSH project):Contract Components: Feasibility study, Detail Design, Construction Supervision, contract administration; and capacity building. Client: Oromia Water and Energy Bureau (OWNP Coordination Office)Contact Person: Mr. Tamirat Abera, Telephone: +251 939264434",
    },
    {
      src: "/watersupply.jpg",
      detail:
        " Project: Twenty one towns and Multi Villages Water Supply Projects in agreement with Oromia Water and Energy Bureau (Lot 5: Haro Sebu, Gembel and Jitu Water Supply Projects) Contract Components: Construction Supervision, contract administration Client: Oromia Water and Energy Bureau Contact Person: Eng. Gurmessa Oljira, Telephone: +251 947119750",
    },
    {
      src: "/climate.jpg",
      detail:
        "Project: Development of Climate Resilient Water Resources Management Plans, Feasibility Study, Detail Design and Tender Document Preparation for Drinking Water and Small Scale Irrigation Infrastructure for Burka and Sofi kebeles in Sofi Woreda of Harari Region; and Wahil and Lege Oda Gununfeta kebeles in Wahil cluster of Diredawa City Administration",
    },
    // {
    //   src: "/logo.png",
    //   detail:
    //     "Project: Development of Climate Resilient Water Resources Management Plans, Feasibility Study, Detail Design and Tender Document Preparation for Drinking Water and Small Scale Irrigation Infrastructure for Burka and Sofi kebeles in Sofi Woreda of Harari Region; and Wahil and Lege Oda Gununfeta kebeles in Wahil cluster of Diredawa City Administration",
    // },
    {
      src: "/placeholder.png",
      detail:
        "Project: Technical Assistance to Selected woredas of Borena and West Guji zones (Gelana, Bule Hora, Yaballo, Arero, Dhas, Teltelle and Moyale) for preparation and implementation of Rural WaSHP Sub-component Contract Components: Capacity building and Construction Supervision Client: Oromia Water and Energy Bureau (OWNP Coordination Office) Contact Person: Mr. Tsige Getachew Telephone: +251 913660156",
    },
    {
      src: "/placeholder.png",
      detail:
        "Project: Technical Assistance to Genji and Kumbabe Towns for planning and Implementation of Towns Water Supply and Sanitation Improvement Programs Contract Components: Design Review, Contract Administration, Construction Supervision; and Capacity building Client: Oromia Water and Energy Bureau Contact Person: Girma Telephone: +251 913660156",
    },
    {
      src: "/placeholder.png",
      detail:
        "Project: Twenty two towns and multi villages Water Supply Study and Design Project in agreement with Oromia Water and Energy Bureau (Lot 5 projects/ Obora, Kiltu Kara and Lalo towns Water Supply Projects): Client: Oromia Water and Energy Bureau Contact Person: Mr. Abreham Gebisa, Telephone: +251 923608870",
    },
  ];
  return (
    <div className="w-full min-h-screen px-4 py-8 flex flex-col gap-y-6 bg-gradient-to-r from-blue-100 to-blue-50">
      <h1 className="text-2xl font-semibold text-center">Projects</h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // delay between cards
            },
          },
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjectCard src={p.src} detail={p.detail} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
