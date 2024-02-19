import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { NavigationAction } from "./navigation-action";

export const NavigationSidebar = () => {
  const renderSidebar = async () => {
    const profile = await currentProfile();

    if (!profile) {
      redirect("/");
      return null; // Return null if redirecting
    }

    return (
      <div className="space-y-4 flex felx-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
        <NavigationAction />
      </div>
    );
  };

  // Render the sidebar asynchronously and handle loading state
  const renderAsyncSidebar = async () => {
    const sidebar = await renderSidebar();
    return sidebar;
  };

  return <div>{renderAsyncSidebar()}</div>;
};
