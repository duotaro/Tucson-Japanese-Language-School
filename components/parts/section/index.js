export default function Section({ children, py="py-8 md:py-12 lg:py-20", bg="bg-white", px="px-2 sm:px-16 md:px-28 lg:px-32 xl:px-52", maxWidth="max-w-4xl" }) {

    return (
      <div className={` stack-section w-full px-2 sm:px-24 ${bg} `}>
        <section className={`${py} ${maxWidth} mx-auto `}>
          {children}
        </section>
      </div>
    );
};