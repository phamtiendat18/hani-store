import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginCustomForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex overflow-hidden flex-col bg-rose-100">
      <Header />
      <main className="self-end mt-0 w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-32 text-4xl font-medium text-red-400 max-md:mt-10">
              <h1 className="text-center">Hani xin chào !</h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ec0e8e9f81c3ba6fa75051596ec6f3d8cbfe45500b7179d4bef953a2752c9b?placeholderIfAbsent=true&apiKey=d825a2d2e4c44d7c86e54f9c921e2d61"
                alt="Welcome illustration"
                className="object-contain self-center mt-7 max-w-full aspect-[0.62] w-[200px]"
              />
            </div>
          </div>
          <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full bg-white">
            <LoginCustomForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
