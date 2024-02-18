import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";

const EasyHaatDownloadBtn = () => {
  return (
    <Link
      to={`https://play.google.com/store/apps/details?id=com.Easyhaat`}
      className="unset flex items-center gap-x-2 bg-gradient-to-r hover:bg-gradient-to-br from-caribbeangreen-200 to-caribbeangreen-600 w-max text-white rounded-2xl p-2 pr-4 hover:opacity focus:ring-4 focus:outline-none focus:ring-caribbeangreen-25"
      target="_blank"
      title="Click the button to download EASY HAAT app"
    >
      <div className="text-3xl">
        <BiLogoPlayStore />
      </div>
      <div>
        <p className="text-sm leading-[1rem] tracking-widest">Download</p>
        <p className="text-lg font-semibold">EASY HAAT</p>
      </div>
    </Link>
  );
};

export default EasyHaatDownloadBtn;
