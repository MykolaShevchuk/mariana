interface ProjectCardProps {
  title: string;
  subtitle: string;
  year?: string;
  description: string;
  skills: string[];
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  year,
  description,
  skills,
  imageSrc,
  imageAlt,
  priority = false
}: ProjectCardProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-8 lg:p-12 lg:pl-6 flex flex-col justify-center">
            <h3 className="text-7xl font-bold text-gray-900 mb-3 whitespace-nowrap">{title}</h3>
            <h4 className="text-2xl text-gray-600 mb-2 font-medium">{subtitle}</h4>
            {year && <p className="text-lg text-gray-600 mb-8">{year}</p>}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-3/5 h-[700px] flex items-center justify-center relative overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
