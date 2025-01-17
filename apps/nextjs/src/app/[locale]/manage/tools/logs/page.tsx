import { Box } from "@mantine/core";

import { getScopedI18n } from "@homarr/translation/server";

import "@xterm/xterm/css/xterm.css";

import { DynamicBreadcrumb } from "~/components/navigation/dynamic-breadcrumb";
import { fullHeightWithoutHeaderAndFooter } from "~/constants";
import { createMetaTitle } from "~/metadata";
import { ClientSideTerminalComponent } from "./client";

export async function generateMetadata() {
  const t = await getScopedI18n("management");

  return {
    title: createMetaTitle(t("metaTitle")),
  };
}

export default function LogsManagementPage() {
  return (
    <>
      <DynamicBreadcrumb />
      <Box style={{ borderRadius: 6 }} h={fullHeightWithoutHeaderAndFooter} p="md" bg="black">
        <ClientSideTerminalComponent />
      </Box>
    </>
  );
}
