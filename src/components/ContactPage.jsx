export default function ContactPage() {
  return (
    <section className="ml-4 mt-44 sm:mt-52">
      <p className="text-5xl text-black font-bold bg-secondary py-2 px-2 w-fit">
        <strong>contact</strong>
      </p>
      <div className="flex flex-col mt-12">
        <div>
          <p className="text-4xl font-bold mb-4">email</p>
          <p className="bg-red-800 w-fit px-2 py-1"><a href="mailto:ghazytp@gmail.com">ghazytp@gmail.com</a></p>
        </div>
        <div className="mt-8 flex-col gap-3 flex">
          <p className="text-4xl font-bold mb-2">social media</p>
          <button className="bg-blue-600 hover:-translate-y-1 w-fit px-2 py-1">
            {" "}
            <a href="https://www.linkedin.com/in/ghazytp/" target="_blank">
              linkedin
            </a>
          </button>
          <button className="bg-[#333333] hover:-translate-y-1 w-fit px-2 py-1">
            {" "}
            <a href="https://github.com/ghazytp" target="_blank">
              github
            </a>
          </button>
          <button className="bg-[#833AB4] hover:-translate-y-1 w-fit px-2 py-1">
            {" "}
            <a href="https://www.instagram.com/ghzytp/" target="_blank">
              instagram
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
