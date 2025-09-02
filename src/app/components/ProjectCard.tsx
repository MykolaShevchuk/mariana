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
  featured?: boolean;
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
  priority = false,
  featured = false
}: ProjectCardProps) {
  if (featured) {
    return (
      <div className="py-16 sm:py-20 ">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row mb-8">
            <div className="w-full lg:w-2/5 px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:px-12 lg:pt-12 lg:pb-0 lg:pl-6 flex flex-col justify-start">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-2 lg:-left-2 font-serif relative">{title}</h3>
              <h4 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-2 font-medium">{subtitle}</h4>
              {year && <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-4">{year}</p>}
              {note && (
                <p className="text-base sm:text-lg text-gray-400">
                  {note}
                </p>
              )}
            </div>
            <div className="w-full lg:w-3/5 px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:pl-6 lg:pr-6 lg:pt-12 lg:pb-0 flex flex-col justify-start">
              <p className="text-sm sm:text-base lg:text-base text-gray-600 mb-4 sm:mb-4 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Tag key={index}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center -ml-[100px] -mr-[100px] lg:-ml-[150px] lg:-mr-[150px]">
            {imageSrcMobile && (
              <Image
                src={imageSrcMobile}
                alt={imageAlt}
                width={800}
                height={600}
                sizes="100%"
                className="w-full object-contain md:hidden"
                priority={priority}
              />
            )}
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              sizes="100%"
              className={`w-full object-contain ${imageSrcMobile ? 'hidden md:block' : 'block'}`}
              priority={priority}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5 px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:px-12 lg:pt-12 lg:pb-0 lg:pl-6 flex flex-col justify-center">
            <h3 className="text-5xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-3 whitespace-nowrap relative lg:-left-2 font-serif">{title}</h3>
            <h4 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-2 font-medium">{subtitle}</h4>
            {year && <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">{year}</p>}
            <p className="text-sm sm:text-base lg:text-base text-gray-600 mb-4 sm:mb-4 leading-relaxed">
              {description}
            </p>
            {note && (
              <div className="mb-6 sm:mb-6">
                <span className="text-sm sm:text-base text-gray-600">
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
                sizes="100vw"
                className="object-contain md:hidden"
                priority={priority}
              />
            )}
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={`object-contain ${imageSrcMobile ? 'hidden md:block' : 'block'}`}
              priority={priority}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
