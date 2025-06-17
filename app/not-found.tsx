import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="not-found flex flex-col items-center justify-center bg-[#185fab] opacity-80">
        <div className="mx-auto text-center">
          <h2 className="mb-2 text-[40px] font-bold leading-none text-primary sd:text-[50px] sm:text-[80px] md:text-[100px]">
            404
          </h2>
          <h4 className="mb-3 text-18 font-semibold leading-tight text-primary sd:text-22">
            Oops! That page can’t be found
          </h4>
          <p className="mb-8 text-lightwhite sd:text-lg">
            The page you are looking for it maybe deleted
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-primary transition hover:bg-white hover:text-primary"
          >
            Go To Home
          </Link>
        </div>
        <div className="absolute inset-0 -z-10 flex items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
}
