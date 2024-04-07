import { HiArrowSmRight } from "react-icons/hi";

import main from "../../assets/main.png";
import "./Banner.css"
export default function Banner() {
  return (
    <section
      className=" bg-gradient-to-tr  pt-24 pb-10 to-green-700  from-green-400 text-white rounded-br-[60px]  md:rounded-br-[170px]"
      id="inicio" 
    >
      <div className="container mx-auto max-w-4x1 px-2 py-6 sm:pb-0  " >
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2 md:ml-8" >
            <h1 className="mb-6 text-center  sm:text-left  ">
              <span className="font-handwriting block text-3xl text-center mb-5 md:text-left ">
                Olá, sou
              </span>
         
              <span className="font-handwriting block text-5xl font-light text-green-800 text-center  md:text-left ">
                {" "}
                Casali Tech
              </span>
            </h1>
            <h2 className="font-semibold flex items-center gap-2 h-20 text-2xl text-center  md:text-left   ">
              <div className="h-1 w-12 rounded-full bg-blue-800 " />
              Desenvolvedor FullStack{" "}
            </h2>

            <div className="flex items-center h-20 md:justify-start gap-2  ">
              <button className="btn "  id="projetos">
                <a
                  className="flex m-auto gap-2 items-center"
                  href="https://github.com/JacquelineCasali"
                
                  target="_blank">
                  {" "}
                  Visitar o Github
                  <HiArrowSmRight />
                </a>
              </button>

              <button className="btn">
                <a
                  className="flex m-auto gap-2 items-center"
                  href="https://www.linkedin.com/in/jaquelinecasali/"
                  target="_blank"
                >
                  {" "}
                  Visitar o Linkedin
                  <HiArrowSmRight />
                </a>
              </button>
            </div>
          </div>
          <div className="     basis-1/2 flex items-center " >
            <img src={main} />
          </div>
       
        </div>
     
      </div>
  
    </section>
  );
}
