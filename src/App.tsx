import Footer from "./components/Footer";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";
import luffyImage from "./assets/luffyImage.svg";

function App() {
  return (
    <div className="bg-primary min-h-screen ">
      <Header />
      <ListTodo />
      <img className="w-[20%] fixed bottom-0 right-0 " src={luffyImage} alt="" />
      <Footer />
    </div>
  );
}

export default App;
