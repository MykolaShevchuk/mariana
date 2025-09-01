import Image from "next/image";
import Tag from "./Tag";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  year?: string;
  description: string;
  note?: string;
  skills: string[];
  imageSrc: string;
  imageSrcMobile?: string;
  imageAlt: string;
  priority?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  year,
  description,
  note,
  skills,
  imageSrc,
  imageSrcMobile,
  imageAlt,
  priority = false
}: ProjectCardProps) {
  return (
    <div className="py-8 sm:py-12">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:px-12 lg:pt-12 lg:pb-0 lg:pl-6 flex flex-col justify-center">
            <h3 className="text-5xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-3 whitespace-nowrap relative -left-2">{title}</h3>
            <h4 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-2 font-medium">{subtitle}</h4>
            {year && <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{year}</p>}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-4 leading-relaxed">
              {description}
            </p>
            {note && (
              <div className="mb-6 sm:mb-6">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-400" />
                  {note}
                </span>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Tag key={index}>
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-3/5 h-[300px] sm:h-[500px] lg:h-[700px] flex items-center justify-center relative overflow-hidden">
            {imageSrcMobile && (
              <Image
                src={imageSrcMobile}
                alt={imageAlt}
                fill
                className="object-contain md:hidden"
                priority={priority}
              />
            )}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={`object-contain ${imageSrcMobile ? 'hidden md:block' : 'block'}`}
              priority={priority}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
