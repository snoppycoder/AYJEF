import { Award, CheckCircle } from "lucide-react";

export default function TechnicalQualification() {
  const qualifications = [
    "Feasibility study and detail design of water supply and sanitation projects",
    "Study and design of climate resilient water resource planning, feasibility study and detail design of water supply and small scale irrigation project",
    "Feasibility study and detail design of small scale irrigation projects (diversion weir, micro earth dam, pump irrigation systems)",
    "Contract administration and Construction supervision",
    "Water well drilling, construction, pumping test and rehabilitation supervision",
    "Capacity building",
    "Solar and wind water pumping study and design works to replace diesel driven water supply system",
    "Mid Term and Terminal Evaluation of Water and Sanitation Projects",
    "Water Resources potential evaluation and mapping (hydrological, hydrogeological, geotechnical and geophysical investigations and mapping)",
    "Natural resources management study, preparation of conservation plan and strategy design",
    "Land use mapping and land suitability evaluation/analysis",
    "Socio-economic study and baseline survey",
    "Participatory Geographic information System (GIS) & Remote Sensing (RS) applications",
    "Monitoring and evaluation",
    "Environmental and Social Impact Assessment (ESIA)",
    "Training and research in the areas of water resources, water supply management and environment",
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-700 mb-4">
        <Award className="w-6 h-6 text-blue-500" />
        Areas of Technical Qualification
      </div>

      <ul className="space-y-3 text-gray-700">
        {qualifications.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
