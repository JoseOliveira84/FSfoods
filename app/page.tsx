import Header from "./_components/Header/Header";
import Search from "./_components/Search";
const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <Search />
      </div>
    </>
  );
};
export default Home;
