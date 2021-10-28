import React, { Fragment } from "react";
import "../tailwind.css";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { BaseButton } from "@reusejs/react-buttons";
import { DropdownMenu } from "@reusejs/react-dropdowns";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = function ({
  sidebarOpen = false,
  onPress,
  navigation,
  secondaryNavigation,
  router,
}) {
  console.log("check here sidebarOpen", sidebarOpen);
  console.log("check here navigation", navigation);
  console.log("check here secondaryNavigation", secondaryNavigation);
  console.log("check here router", router);

  return (
    <>
      <div>Helloo</div>
      <BaseButton>Hello Button</BaseButton>
      <DropdownMenu
        profilePictureUrl={
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        teams={[
          { name: "Beta", href: "#", current: false },
          { name: "Betalectic", href: "#", current: true },
        ]}
      />
    </>
  );
};

export default Sidebar;
