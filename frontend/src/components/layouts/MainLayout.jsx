import Header from "../home/Header";
import Sidebar from "../home/Sidebar";

const MainLayout = ({ children, theme, setTheme }) => {
  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar />
      <div className="flex-grow">
        <Header theme={theme} setTheme={setTheme} />
        <div className="px-8 py-12">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;