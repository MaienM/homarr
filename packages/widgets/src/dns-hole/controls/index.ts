import { IconDeviceGamepad, IconServerOff } from "@tabler/icons-react";

import { getIntegrationKindsByCategory } from "@homarr/definitions";

import { createWidgetDefinition } from "../../definition";
import { optionsBuilder } from "../../options";

export const { definition, componentLoader, serverDataLoader } = createWidgetDefinition("dnsHoleControls", {
  icon: IconDeviceGamepad,
  options: optionsBuilder.from((factory) => ({
    showToggleAllButtons: factory.switch({
      defaultValue: true,
    }),
  })),
  supportedIntegrations: getIntegrationKindsByCategory("dnsHole"),
  errors: {
    INTERNAL_SERVER_ERROR: {
      icon: IconServerOff,
      message: (t) => t("widget.dnsHoleControls.error.internalServerError"),
    },
  },
})
  .withServerData(() => import("./serverData"))
  .withDynamicImport(() => import("./component"));
