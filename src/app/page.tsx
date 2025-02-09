export default function Home() {
  return (
      <div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <div
              className="flex items-center justify-center min-h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/western.jpg')",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "overlay"
              }}
          >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl text-center max-w-md w-full sm:w-auto m-4">
              <h1 className="text-5xl font-extrabold text-gray-800 mb-2">inSHEIN</h1>
              <h1 className="text-2xl font-extrabold text-gray-500 mb-6">Every style has a story</h1>
              <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Coming Soon</h1>
              <p className="text-lg text-gray-600 mb-8">
                We are working hard to bring you the latest trends in western wear. Stay tuned!
              </p>
              <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-600 transition">
                Notify Me
              </button>
            </div>
          </div>
        </main>
      </div>
  );
}
