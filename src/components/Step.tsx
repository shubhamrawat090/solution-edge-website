import * as Icons from "@/utils/iconUtils";

interface StepProps {
  title: string;
  icon: string; // Allow dynamic icon name
  text: string;
}

const Step = ({ title, icon, text }: StepProps) => {
  const iconPkgName = icon.substring(0, 2) + "Icons";
  const iconPkg = Icons[iconPkgName as keyof typeof Icons];
  const SelectedIcon = iconPkg[
    icon as keyof typeof iconPkg
  ] as React.ComponentType;

  if (!SelectedIcon) {
    return <div>Icon not found</div>; // Handle the case where the icon is not found
  }

  return (
    <div className="flex flex-col cursor-pointer w-full h-full text-center">
      <p className="text-white text-2xl font-semibold">{title}</p>
      <div className="transition-colors flex flex-col gap-7 justify-center items-center border-2 text-white px-4 py-8 mt-5 flex-1 hover:text-caribbeangreen-400 hover:bg-white focus:text-caribbeangreen-400 focus:bg-white text-[5rem] flex-grow-1">
        <SelectedIcon />
        <p className="text-lg/6 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Step;
