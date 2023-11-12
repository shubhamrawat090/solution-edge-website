import * as Icons from "react-icons/fa";

// Utility function to validate the icon name
const isValidIcon = (icon: string): icon is keyof typeof Icons => {
  return icon in Icons;
};

interface StepProps {
  title: string;
  icon: string; // Allow dynamic icon name
  text: string;
}

const Step = ({ title, icon, text }: StepProps) => {
  if (!isValidIcon(icon)) {
    // Handle invalid icon here
    return <div>Invalid Icon</div>;
  }

  const SelectedIcon = Icons[icon as keyof typeof Icons]; // Type assertion to access Icons object

  return (
    <div className="flex flex-col cursor-pointer">
      <p className="text-white text-2xl font-semibold">{title}</p>
      <div className="transition-colors flex flex-col gap-7 justify-center items-center border-2 text-white px-4 py-8 w-[200px] mt-5 flex-1 hover:text-caribbeangreen-400 hover:bg-white focus:text-caribbeangreen-400 focus:bg-white">
        <SelectedIcon className="text-[5rem]" />
        <p className="text-lg/6 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Step;
