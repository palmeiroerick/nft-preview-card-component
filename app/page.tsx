import Image from "next/image";

const Home = () => {
  return (
    <main className="flex w-80 flex-col gap-5 rounded-2xl bg-darkblueCard p-6">
      <div className="group relative cursor-pointer">
        <Image
          className="rounded-lg transition duration-300"
          src="/assets/image-equilibrium.jpg"
          alt=""
          width={288}
          height={288}
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
        <Image
          className="absolute inset-0 mx-auto my-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          src="/assets/icon-view.svg"
          alt=""
          width={64}
          height={64}
        />
      </div>
      <h1 className="cursor-pointer text-2xl font-semibold text-white hover:text-cyan">
        Equilibrium #3429
      </h1>
      <p className="font-light text-softBlue">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="relative h-6 w-3">
            <Image
              className="object-contain"
              src="assets/icon-ethereum.svg"
              alt=""
              fill
            />
          </div>
          <p className="font-semibold text-cyan">0.041 ETH</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative h-4 w-4">
            <Image
              className="object-contain"
              src="assets/icon-clock.svg"
              alt=""
              fill
            />
          </div>
          <p className="text-softBlue">3 days left</p>
        </div>
      </div>
      <div className="flex items-center gap-4 border-t border-darkblueLine pt-5">
        <Image
          className="rounded-full border border-white"
          src="/assets/image-avatar.png"
          alt=""
          width={32}
          height={32}
        />
        <p className="text-softBlue">
          Creation of{" "}
          <span className="cursor-pointer text-white hover:text-cyan">
            Jules Wyvern
          </span>
        </p>
      </div>
    </main>
  );
};

export default Home;
