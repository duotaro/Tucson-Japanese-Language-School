export default function Section({ children, py="py-8 md:py-12 lg:py-20", bg="bg-white", px="px-4 sm:px-16 md:px-28 lg:px-32 xl:px-52" }) {

    return (
      // <section className={`${py} ${px} ${bg} max-w-1/2`}>
      <div className={`${bg} w-full px-4 sm:px-24`}>
        <section className={`${py} max-w-4xl mx-auto `}>
          {children}
        </section>
      </div>
    );
};