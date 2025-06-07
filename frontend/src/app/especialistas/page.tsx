import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSpecialists, urlFor } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Especialistas | Meu Guia Pet',
  description: 'Conheça os especialistas que validam nosso conteúdo sobre cuidados com pets.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function SpecialistsPage() {
  const specialists = await getSpecialists();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Especialistas</h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Conheça os especialistas veterinários que revisam e validam nosso conteúdo,
          garantindo a qualidade e precisão das informações.
        </p>
        
        {specialists?.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {specialists.map((specialist: any) => (
              <Link 
                key={specialist._id}
                href={`/especialistas/${specialist.slug?.current}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="p-6 text-center">
                  {specialist.image && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={urlFor(specialist.image).width(120).height(120).url()}
                        alt={specialist.name}
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  
                  <h2 className="text-xl font-bold mb-1">{specialist.name}</h2>
                  
                  {specialist.speciality && (
                    <p className="text-blue-600 mb-3">{specialist.speciality}</p>
                  )}
                  
                  {specialist.bio && (
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {specialist.bio}
                    </p>
                  )}
                  
                  <div className="flex justify-center gap-4 mt-4">
                    {specialist.crmv && (
                      <div className="text-sm text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                        CRMV: {specialist.crmv}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4">
                    <span className="inline-block text-blue-600 font-medium hover:underline">
                      Ver perfil completo →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Especialistas em breve</h2>
            <p className="text-gray-600">
              Estamos trabalhando para trazer perfis detalhados dos especialistas que
              validam nosso conteúdo. Volte em breve!
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 