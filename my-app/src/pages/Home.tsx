import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Button from "../components/ui/button";

function Home() {
  return (
    <>
      <Header />

      <div className="bg-gray-900 px-8 py-32 flex flex-col items-center justify-center gap-6">
        <p className="font-noto-serif text-gray-400 text-sm tracking-widest uppercase">
          Plateforme de financement participatif
        </p>
        <h1 className="cursor-default font-assimovian text-8xl text-white text-center leading-none hover:text-purple-400 transition-all duration-300">
          Result
        </h1>
        <h2 className="font-noto-serif text-2xl text-gray-300 text-center max-w-xl leading-relaxed">
          Faisons vivre les projets qui nous inspirent.
        </h2>
        <div className="flex gap-4 mt-4">
          <Button text="Créer un projet" />
          <button className="border border-gray-500 hover:border-white hover:translate-y-1 text-gray-300 hover:text-white px-8 py-3 rounded-full transition-all duration-200">
            Découvrir
          </button>
        </div>
      </div>

      <div className="bg-gray-100 px-8 py-16 max-w-6xl mx-auto">
        <h3 className="font-noto-serif text-4xl text-gray-800 mb-8">
          Projets en vedette
        </h3>
        <p className="font-noto-serif text-gray-500">
          Les projets arrivent bientôt...
        </p>
      </div>

      <Footer companyName="Result" date={2026} />
    </>
  );
}

export default Home;
