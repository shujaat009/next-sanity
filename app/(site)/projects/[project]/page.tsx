import { gtProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {project: string};
};

export default  async function Project({params}: Props){

    const slug = params.project;
    const project = await gtProjects(slug);


    return <div > 
        
        <header className="flex items-center justify-between">
        
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent  drop-shadow text-5xl font-extrabold"> 
        {project.name} 
        
        </h1>

        <a 
        
        href={project.url} 
        
        title = "View Project" 
        
        target="_blank" 
        
        rel = "noopener noreferrer" 
        
        className="bg-gray-200 rounded-lg text-gray-700 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition " >
       
        View Project
 
        </a>

        </header>


        {/* content */}
        
        <div className="text-lg text-gray-700 mt-5">

            <PortableText value = {project.content} />

        </div>
        

        {/* image goes here */}

        <Image

        src = {project.image}
        alt = {project.name}
        width = {1920}
        height={1080}
        className="mt-10 border-gray-700 object-cover rounded-xl"
        
        />
       
        
         </div>
}

