import Folder from "../assets/FolderNotchOpen.svg";
import ThreeDots from "../assets/DotsThree.svg";

const Content = () => {
  return (
    <div className="bg-white p-[20px] flex  justify-between items-center  w-[60%] max-h-min min-w-max">
      <div className="min-w-max">
        <p className="text-[14px]">Laws Of Motion</p>
        <div className="flex gap-[4px]">
          <img src={Folder} className="object-contain" />
          <p>0 Videos</p>
          <p>0 Documents</p>
          <p>0 Tests</p>
          <p>0 Quizes</p>
          <p>0 Assignments</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img src={ThreeDots} className="object-contain"/>
      </div>
    </div>
  );
};

export default Content;
