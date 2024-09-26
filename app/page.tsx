export default function Home() {
  return (
    <header className="bg-blue-200 h-screen flex-col justify-center items-center ">
      <div className="h-80 flex flex-col justify-center items-center   w-auto">
        <h1 className="font-bold text-black flex justify-center  text-9xl align-middle   ">
          OLÁ
        </h1>
        <p className="font-bold text-black flex justify-center  text-3xl text-center w-auto">
          Seja Bem Vindo{" "}
        </p>
      </div>
      <div className="flex items-center flex-col justify-center">
        <h1 className="font-bold text-5xl md:text-5xl lg:text-5xl  px-4">
          Me Chamo Hiago e sou
        </h1>
      </div>
      <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  max-w-max m-auto">
        <h1 className=" font-bold text-5xl md:text-5xl lg:text-5xl text-center px-4  ">
          Full-Stack Develooper.
        </h1>
      </div>  
    </header>
  );
}
