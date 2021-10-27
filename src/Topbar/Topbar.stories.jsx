import React from "react";
import Topbar from "./index";

export default {
  title: "Navigations/Topbar",
  component: Topbar,
};

const Template = (args) => <Topbar {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: "Teurons",
  navigation: [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ],
  profilePictureUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  teams: [
    { name: "Beta", href: "#", current: false },
    { name: "Betalectic", href: "#", current: true },
  ],
};
