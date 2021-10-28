import React, { Fragment } from "react";
import "../tailwind.css";
import { XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";

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
    </>
  );
};

export default Sidebar;
