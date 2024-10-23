const Header = (props: { toggleSideBar }) => {
  return (
    <header className="fixed top-0 z-50 w-screen h-12 bg-blue-header border-b border-gray-200">
      <div className="p-1 flex justify-between">
        <button
          onClick={props.toggleSideBar}
          className="p-1.5 text-xs text-gray-100 rounded-lg hover:bg-blue-hover-header focus:ring-offset-blue-500"
        >
          <svg className="h-5 w-5">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <button className="mx-1 p-1.5 flex text-gray-200 hover:bg-blue-hover-header rounded-lg items-center space-x-1">
          <img
            src={"../assets/img/ilogic.png"}
            alt="Logo"
            className="h-6 me-1"
          />
          <span className="text-sm font-semibold sm:text-lg whitespace-nowrap text-white">
            WMS
          </span>
        </button>
        <button className="right-0 mx-1 p-1.5 flex text-gray-200 hover:bg-blue-hover-header rounded-lg items-center">
          <img
            src={"../assets/img/ilogic.png"}
            alt="Logo"
            className="h-6 me-1"
          />
          <span className="text-sm font-semibold sm:text-lg whitespace-nowrap text-white">
            WMS
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
