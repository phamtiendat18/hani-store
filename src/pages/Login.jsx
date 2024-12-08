import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginCustomForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex overflow-hidden flex-col bg-home bg-cover">
      <Header />
      <main className="self-end mt-0 w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">

          </div>
          <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full ">
            <LoginCustomForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
