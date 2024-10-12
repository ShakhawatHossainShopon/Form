const NotFound = () => {
  return (
    <>
      <div>
        <section className="bg-white">
          <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
              <h1 className="text-8xl font-bold text-blue-600">404</h1>
              <h2 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
                Page not found
              </h2>
              <p className="mt-4 text-gray-500 ">
                The page you are looking for doesn't exist. Here are some
                helpful links:
              </p>
              <div className="mt-6">
                <button className="w-1/2 px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 font-semibold">
                  Take me back home
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
