"use client";
import { Button, Group } from "@mantine/core";
import { SpotlightProvider, spotlight } from "@mantine/spotlight";
// import { SpotlightAction } from '@mantine/spotlight';
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";

function SpotlightControl() {
  return (
    <Group position="center">
      <form
        className="flex items-center justify-center w-full"
        onClick={spotlight.open}
      >
        <input
          type="search"
          className="bg-backgroud rounded h-[2rem] outline-none p-[1rem] border-[1px] border-slate-400 text-white md:h-[2.5rem]  w-full flex-grow flex-[1]"
          onChange={(event) => {
            setsearchData(event.target.value);
          }}
        />
      </form>
    </Group>
  );
}

export const actions = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
];

export default function Demo({ ...props }) {
  return (
    <SpotlightProvider
      {...props}
      className="flex-1"
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="shift + 1"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl className="w-full" />
    </SpotlightProvider>
  );
}
