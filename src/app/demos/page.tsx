import Image from 'next/image';
import DemoNavbar from "../components/DemoNavbar";
import Footer from "../components/Footer";


const demos = [
  {
    name: 'CarieCero',
    image: '/images/demoo1.png',
    link: 'https://89da03f9-cariecero.sebastiancdlm1101.workers.dev/',
  },
  {
    name: 'StrikeProductions',
    image: '/images/demoo2.png',
    link: 'https://0c2fd156-strikeproject.sebastiancdlm1101.workers.dev/',
  },
  
];

export default function DemosPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 pt-24 py-16">
        <DemoNavbar />
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
            Nuestros Demos
          </h1>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 place-items-center justify-center">
            {demos.map((demo) => (
              <div 
                key={demo.name}
                className="w-full max-w-md group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={demo.image}
                    alt={demo.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-gray-600">{demo.name}</h2>
                  <a
                    href={demo.link}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Probar Demo
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
