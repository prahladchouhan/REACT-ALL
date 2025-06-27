function PageNotFound() {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <div className="text-center animate-bounce">
        <h1 className="font-bold text-red-700 text-5xl sm:text-6xl md:text-7xl transition-all duration-300">
          Page Not Found!
        </h1>
      </div>
    </div>
  );
}

export default PageNotFound;
