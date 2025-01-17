import "dayjs/locale/en";

import { MRT_Localization_EN } from "mantine-react-table/locales/en/index.cjs";

export default {
  user: {
    title: "Users",
    name: "User",
    page: {
      login: {
        title: "Log in to your account",
        subtitle: "Welcome back! Please enter your credentials",
      },
      invite: {
        title: "Join Homarr",
        subtitle: "Welcome to Homarr! Please create your account",
        description: "You were invited by {username}",
      },
      init: {
        title: "New Homarr installation",
        subtitle: "Please create the initial administrator user",
      },
    },
    field: {
      email: {
        label: "E-Mail",
      },
      username: {
        label: "Username",
      },
      password: {
        label: "Password",
        requirement: {
          length: "Includes at least 8 characters",
          lowercase: "Includes lowercase letter",
          uppercase: "Includes uppercase letter",
          number: "Includes number",
          special: "Includes special symbol",
        },
      },
      passwordConfirm: {
        label: "Confirm password",
      },
      previousPassword: {
        label: "Previous password",
      },
      homeBoard: {
        label: "Home board",
      },
    },
    error: {
      usernameTaken: "Username already taken",
    },
    action: {
      login: {
        label: "Login",
        labelWith: "Login with {provider}",
        notification: {
          success: {
            title: "Login successful",
            message: "You are now logged in",
          },
          error: {
            title: "Login failed",
            message: "Your login failed",
          },
        },
        forgotPassword: {
          label: "Forgotten your password?",
          description: "An administrator can use the following command to reset your password:",
        },
      },
      register: {
        label: "Create account",
        notification: {
          success: {
            title: "Account created",
            message: "Please log in to continue",
          },
          error: {
            title: "Account creation failed",
            message: "Your account could not be created",
          },
        },
      },
      create: "Create user",
      changePassword: {
        label: "Change password",
        notification: {
          success: {
            message: "Password changed successfully",
          },
          error: {
            message: "Unable to change password",
          },
        },
      },
      changeHomeBoard: {
        notification: {
          success: {
            message: "Home board changed successfully",
          },
          error: {
            message: "Unable to change home board",
          },
        },
      },
      manageAvatar: {
        changeImage: {
          label: "Change image",
          notification: {
            success: {
              message: "The image changed successfully",
            },
            error: {
              message: "Unable to change image",
            },
            toLarge: {
              title: "Image is too large",
              message: "Max image size is {size}",
            },
          },
        },
        removeImage: {
          label: "Remove image",
          confirm: "Are you sure you want to remove the image?",
          notification: {
            success: {
              message: "Image removed successfully",
            },
            error: {
              message: "Unable to remove image",
            },
          },
        },
      },
      editProfile: {
        notification: {
          success: {
            message: "Profile updated successfully",
          },
          error: {
            message: "Unable to update profile",
          },
        },
      },
      delete: {
        label: "Delete user permanently",
        description:
          "Deletes this user including their preferences. Will not delete any boards. User will not be notified.",
        confirm: "Are you sure, that you want to delete the user {username} with his preferences?",
      },
      select: {
        label: "Select user",
        notFound: "No user found",
      },
      transfer: {
        label: "Select new owner",
      },
    },
  },
  group: {
    title: "Groups",
    name: "Group",
    search: "Find a group",
    field: {
      name: "Name",
      members: "Members",
    },
    permission: {
      admin: {
        title: "Admin",
        item: {
          admin: {
            label: "Administrator",
            description: "Members with this permission have full access to all features and settings",
          },
        },
      },
      board: {
        title: "Boards",
        item: {
          create: {
            label: "Create boards",
            description: "Allow members to create boards",
          },
          "view-all": {
            label: "View all boards",
            description: "Allow members to view all boards",
          },
          "modify-all": {
            label: "Modify all boards",
            description: "Allow members to modify all boards (Does not include access control and danger zone)",
          },
          "full-all": {
            label: "Full board access",
            description:
              "Allow members to view, modify, and delete all boards (Including access control and danger zone)",
          },
        },
      },
      integration: {
        title: "Integrations",
        item: {
          create: {
            label: "Create integrations",
            description: "Allow members to create integrations",
          },
          "use-all": {
            label: "Use all integrations",
            description: "Allows members to add any integrations to their boards",
          },
          "interact-all": {
            label: "Interact with any integration",
            description: "Allow members to interact with any integration",
          },
          "full-all": {
            label: "Full integration access",
            description: "Allow members to manage, use and interact with any integration",
          },
        },
      },
    },
    memberNotice: {
      mixed: "Some members are from external providers and cannot be managed here",
      external: "All members are from external providers and cannot be managed here",
    },
    action: {
      create: {
        label: "New group",
        notification: {
          success: {
            message: "The group was successfully created",
          },
          error: {
            message: "The group could not be created",
          },
        },
      },
      transfer: {
        label: "Transfer ownership",
        description: "Transfer ownership of this group to another user.",
        confirm: "Are you sure you want to transfer ownership for the group {name} to {username}?",
        notification: {
          success: {
            message: "Transfered group {group} successfully to {user}",
          },
          error: {
            message: "Unable to transfer ownership",
          },
        },
      },
      addMember: {
        label: "Add member",
      },
      removeMember: {
        label: "Remove member",
        confirm: "Are you sure you want to remove {user} from this group?",
      },
      delete: {
        label: "Delete group",
        description: "Once you delete a group, there is no going back. Please be certain.",
        confirm: "Are you sure you want to delete the group {name}?",
        notification: {
          success: {
            message: "Deleted group {name} successfully",
          },
          error: {
            message: "Unable to delete group {name}",
          },
        },
      },
      changePermissions: {
        notification: {
          success: {
            title: "Permissions saved",
            message: "Permissions have been saved successfully",
          },
          error: {
            title: "Permissions not saved",
            message: "Permissions have not been saved",
          },
        },
      },
      update: {
        notification: {
          success: {
            message: "The group {name} was saved successfully",
          },
          error: {
            message: "Unable to save group {name}",
          },
        },
      },
      select: {
        label: "Select group",
        notFound: "No group found",
      },
    },
  },
  app: {
    page: {
      list: {
        title: "Apps",
        noResults: {
          title: "There aren't any apps.",
          description: "Create your first app",
        },
      },
      create: {
        title: "New app",
        notification: {
          success: {
            title: "Creation successful",
            message: "The app was successfully created",
          },
          error: {
            title: "Creation failed",
            message: "The app could not be created",
          },
        },
      },
      edit: {
        title: "Edit app",
        notification: {
          success: {
            title: "Changes applied successfully",
            message: "The app was successfully saved",
          },
          error: {
            title: "Unable to apply changes",
            message: "The app could not be saved",
          },
        },
      },
      delete: {
        title: "Delete app",
        message: "Are you sure you want to delete the app {name}?",
        notification: {
          success: {
            title: "Deletion successful",
            message: "The app was successfully deleted",
          },
          error: {
            title: "Deletion failed",
            message: "Unable to delete the app",
          },
        },
      },
    },
    field: {
      name: {
        label: "Name",
      },
      description: {
        label: "Description",
      },
      url: {
        label: "Url",
      },
    },
  },
  integration: {
    page: {
      list: {
        title: "Integrations",
        search: "Search integrations",
        empty: "No integrations found",
      },
      create: {
        title: "New {name} integration",
        notification: {
          success: {
            title: "Creation successful",
            message: "The integration was successfully created",
          },
          error: {
            title: "Creation failed",
            message: "The integration could not be created",
          },
        },
      },
      edit: {
        title: "Edit {name} integration",
        notification: {
          success: {
            title: "Changes applied successfully",
            message: "The integration was successfully saved",
          },
          error: {
            title: "Unable to apply changes",
            message: "The integration could not be saved",
          },
        },
      },
      delete: {
        title: "Delete integration",
        message: "Are you sure you want to delete the integration {name}?",
        notification: {
          success: {
            title: "Deletion successful",
            message: "The integration was successfully deleted",
          },
          error: {
            title: "Deletion failed",
            message: "Unable to delete the integration",
          },
        },
      },
    },
    field: {
      name: {
        label: "Name",
      },
      url: {
        label: "Url",
      },
    },
    action: {
      create: "New integration",
    },
    testConnection: {
      action: {
        create: "Test connection and create",
        edit: "Test connection and save",
      },
      alertNotice: "The Save button is enabled once a successful connection is established",
      notification: {
        success: {
          title: "Connection successful",
          message: "The connection was successfully established",
        },
        invalidUrl: {
          title: "Invalid URL",
          message: "The URL is invalid",
        },
        secretNotDefined: {
          title: "Missing credentials",
          message: "Not all credentials were provided",
        },
        invalidCredentials: {
          title: "Invalid credentials",
          message: "The credentials are invalid",
        },
        commonError: {
          title: "Connection failed",
          message: "The connection could not be established",
        },
        badRequest: {
          title: "Bad request",
          message: "The request was malformed",
        },
        unauthorized: {
          title: "Unauthorized",
          message: "Probably wrong credentials",
        },
        forbidden: {
          title: "Forbidden",
          message: "Probably missing permissions",
        },
        notFound: {
          title: "Not found",
          message: "Probably wrong url or path",
        },
        internalServerError: {
          title: "Internal server error",
          message: "The server encountered an error",
        },
        serviceUnavailable: {
          title: "Service unavailable",
          message: "The server is currently unavailable",
        },
        connectionAborted: {
          title: "Connection aborted",
          message: "The connection was aborted",
        },
        domainNotFound: {
          title: "Domain not found",
          message: "The domain could not be found",
        },
        connectionRefused: {
          title: "Connection refused",
          message: "The connection was refused",
        },
        invalidJson: {
          title: "Invalid JSON",
          message: "The response was not valid JSON",
        },
        wrongPath: {
          title: "Wrong path",
          message: "The path is probably not correct",
        },
      },
    },
    secrets: {
      title: "Secrets",
      lastUpdated: "Last updated {date}",
      secureNotice: "This secret cannot be retrieved after creation",
      reset: {
        title: "Reset secret",
        message: "Are you sure you want to reset this secret?",
      },
      noSecretsRequired: {
        segmentTitle: "No secrets",
        text: "No secrets required for this integration",
      },
      kind: {
        username: {
          label: "Username",
          newLabel: "New username",
        },
        apiKey: {
          label: "API Key",
          newLabel: "New API Key",
        },
        password: {
          label: "Password",
          newLabel: "New password",
        },
      },
    },
    permission: {
      use: "Select integrations in items",
      interact: "Interact with integrations",
      full: "Full integration access",
    },
  },
  common: {
    rtl: "{value}{symbol}",
    symbols: {
      colon: ": ",
    },
    beta: "Beta",
    error: "Error",
    errors: {
      noData: "No data to show",
      noIntegration: "No integration selected",
    },
    action: {
      add: "Add",
      apply: "Apply",
      backToOverview: "Back to overview",
      create: "Create",
      edit: "Edit",
      import: "Import",
      insert: "Insert",
      remove: "Remove",
      save: "Save",
      saveChanges: "Save changes",
      cancel: "Cancel",
      delete: "Delete",
      discard: "Discard",
      confirm: "Confirm",
      continue: "Continue",
      previous: "Previous",
      next: "Next",
      checkoutDocs: "Check out the documentation",
      tryAgain: "Try again",
      loading: "Loading",
    },
    iconPicker: {
      label: "Icon URL",
      header: "Type name or objects to filter for icons... Homarr will search through {countIcons} icons for you.",
    },
    information: {
      min: "Min",
      max: "Max",
    },
    notification: {
      create: {
        success: "Creation successful",
        error: "Creation failed",
      },
      delete: {
        success: "Deletion successful",
        error: "Deletion failed",
      },
      update: {
        success: "Changes applied successfully",
        error: "Unable to apply changes",
      },
      transfer: {
        success: "Transfer successful",
        error: "Transfer failed",
      },
    },
    multiSelect: {
      placeholder: "Pick one or more values",
    },
    multiText: {
      placeholder: "Add more values",
      addLabel: "Add {value}",
    },
    select: {
      placeholder: "Pick value",
      badge: {
        recommended: "Recommended",
      },
    },
    userAvatar: {
      menu: {
        switchToDarkMode: "Switch to dark mode",
        switchToLightMode: "Switch to light mode",
        management: "Management",
        preferences: "Your preferences",
        logout: "Logout",
        login: "Login",
        homeBoard: "Your home board",
        loggedOut: "Logged out",
      },
    },
    dangerZone: "Danger zone",
    noResults: "No results found",
    preview: {
      show: "Show preview",
      hide: "Hide preview",
    },
    zod: {
      errors: {
        default: "This field is invalid",
        required: "This field is required",
        string: {
          startsWith: "This field must start with {startsWith}",
          endsWith: "This field must end with {endsWith}",
          includes: "This field must include {includes}",
          invalidEmail: "This field must be a valid email",
        },
        tooSmall: {
          string: "This field must be at least {minimum} characters long",
          number: "This field must be greater than or equal to {minimum}",
        },
        tooBig: {
          string: "This field must be at most {maximum} characters long",
          number: "This field must be less than or equal to {maximum}",
        },
        custom: {
          passwordsDoNotMatch: "Passwords do not match",
          passwordRequirements: "Password does not meet the requirements",
          boardAlreadyExists: "A board with this name already exists",
          invalidFileType: "Invalid file type, expected {expected}",
          fileTooLarge: "File is too large, maximum size is {maxSize}",
          invalidConfiguration: "Invalid configuration",
        },
      },
    },
    mantineReactTable: MRT_Localization_EN,
  },
  section: {
    dynamic: {
      action: {
        create: "New dynamic section",
        remove: "Remove dynamic section",
      },
      remove: {
        title: "Remove dynamic section",
        message:
          "Are you sure you want to remove this dynamic section? Items will be moved at the same location in the parent section.",
      },
    },
    category: {
      field: {
        name: {
          label: "Name",
        },
      },
      action: {
        create: "New category",
        edit: "Rename category",
        remove: "Remove category",
        moveUp: "Move up",
        moveDown: "Move down",
        createAbove: "New category above",
        createBelow: "New category below",
      },
      create: {
        title: "New category",
        submit: "Add category",
      },
      remove: {
        title: "Remove category",
        message: "Are you sure you want to remove the category {name}?",
      },
      edit: {
        title: "Rename category",
        submit: "Rename category",
      },
      menu: {
        label: {
          create: "New category",
          changePosition: "Change position",
        },
      },
    },
  },
  item: {
    action: {
      create: "New item",
      import: "Import item",
      edit: "Edit item",
      moveResize: "Move / resize item",
      duplicate: "Duplicate item",
      remove: "Remove item",
    },
    menu: {
      label: {
        settings: "Settings",
      },
    },
    create: {
      title: "Choose item to add",
      addToBoard: "Add to board",
    },
    moveResize: {
      title: "Move / resize item",
      field: {
        width: {
          label: "Width",
        },
        height: {
          label: "Height",
        },
        xOffset: {
          label: "X offset",
        },
        yOffset: {
          label: "Y offset",
        },
      },
    },
    edit: {
      title: "Edit item",
      advancedOptions: {
        label: "Advanced options",
        title: "Advanced item options",
      },
      field: {
        integrations: {
          label: "Integrations",
        },
        customCssClasses: {
          label: "Custom css classes",
        },
      },
    },
    remove: {
      title: "Remove item",
      message: "Are you sure you want to remove this item?",
    },
  },
  widget: {
    app: {
      name: "App",
      description: "Embeds an app into the board.",
      option: {
        appId: {
          label: "Choose app",
        },
        openInNewTab: {
          label: "Open in new tab",
        },
        showTitle: {
          label: "Show app name",
        },
        showDescriptionTooltip: {
          label: "Show description tooltip",
        },
        pingEnabled: {
          label: "Enable simple ping",
        },
      },
      error: {
        notFound: {
          label: "No app",
          tooltip: "You have no valid app selected",
        },
      },
    },
    dnsHoleSummary: {
      name: "DNS Hole Summary",
      description: "Displays the summary of your DNS Hole",
      option: {
        layout: {
          label: "Layout",
          option: {
            row: {
              label: "Horizontal",
            },
            column: {
              label: "Vertical",
            },
            grid: {
              label: "Grid",
            },
          },
        },
        usePiHoleColors: {
          label: "Use Pi-Hole colors",
        },
      },
      error: {
        internalServerError: "Failed to fetch DNS Hole Summary",
      },
      data: {
        adsBlockedToday: "Blocked today",
        adsBlockedTodayPercentage: "Blocked today",
        dnsQueriesToday: "Queries today",
        domainsBeingBlocked: "Domains on blocklist",
      },
    },
    dnsHoleControls: {
      name: "DNS Hole Controls",
      description: "Control PiHole or AdGuard from your dashboard",
      option: {
        layout: {
          label: "Layout",
          option: {
            row: {
              label: "Horizontal",
            },
            column: {
              label: "Vertical",
            },
            grid: {
              label: "Grid",
            },
          },
        },
        showToggleAllButtons: {
          label: "Show Toggle All Buttons",
        },
      },
      error: {
        internalServerError: "Failed to control DNS Hole",
      },
      controls: {
        enableAll: "Enable All",
        disableAll: "Disable All",
        setTimer: "Set Timer",
        set: "Set",
        enabled: "Enabled",
        disabled: "Disabled",
        hours: "Hours",
        minutes: "Minutes",
        unlimited: "Leave blank to unlimited",
      },
    },
    clock: {
      name: "Date and time",
      description: "Displays the current date and time.",
      option: {
        customTitleToggle: {
          label: "Custom Title/City display",
          description: "Show off a custom title or the name of the city/country on top of the clock.",
        },
        customTitle: {
          label: "Title",
        },
        is24HourFormat: {
          label: "24-hour format",
          description: "Use 24-hour format instead of 12-hour format",
        },
        showSeconds: {
          label: "Display seconds",
        },
        useCustomTimezone: {
          label: "Use a fixed timezone",
        },
        timezone: {
          label: "Timezone",
          description: "Choose the timezone following the IANA standard",
        },
        showDate: {
          label: "Show the date",
        },
        dateFormat: {
          label: "Date Format",
          description: "How the date should look like",
        },
      },
    },
    notebook: {
      name: "Notebook",
      description: "A simple notebook widget that supports markdown",
      option: {
        showToolbar: {
          label: "Show the toolbar to help you write markdown",
        },
        allowReadOnlyCheck: {
          label: "Allow check in read only mode",
        },
        content: {
          label: "The content of the notebook",
        },
      },
      controls: {
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        colorText: "Color text",
        colorHighlight: "Colored highlight text",
        code: "Code",
        clear: "Clear formatting",
        heading: "Heading {level}",
        align: "Align text: {position}",
        blockquote: "Blockquote",
        horizontalLine: "Horizontal line",
        bulletList: "Bullet list",
        orderedList: "Ordered list",
        checkList: "Check list",
        increaseIndent: "Increase Indent",
        decreaseIndent: "Decrease Indent",
        link: "Link",
        unlink: "Remove link",
        image: "Embed Image",
        addTable: "Add table",
        deleteTable: "Delete Table",
        colorCell: "Color Cell",
        mergeCell: "Toggle cell merging",
        addColumnLeft: "Add column before",
        addColumnRight: "Add column after",
        deleteColumn: "Delete column",
        addRowTop: "Add row before",
        addRowBelow: "Add row after",
        deleteRow: "Delete row",
      },
      align: {
        left: "Left",
        center: "Center",
        right: "Right",
      },
      popover: {
        clearColor: "Clear color",
        source: "Source",
        widthPlaceholder: "Value in % or pixels",
        columns: "Columns",
        rows: "Rows",
        width: "Width",
        height: "Height",
      },
    },
    iframe: {
      name: "iFrame",
      description: "Embed any content from the internet. Some websites may restrict access.",
      option: {
        embedUrl: {
          label: "Embed URL",
        },
        allowFullScreen: {
          label: "Allow full screen",
        },
        allowTransparency: {
          label: "Allow transparency",
        },
        allowScrolling: {
          label: "Allow scrolling",
        },
        allowPayment: {
          label: "Allow payment",
        },
        allowAutoPlay: {
          label: "Allow auto play",
        },
        allowMicrophone: {
          label: "Allow microphone",
        },
        allowCamera: {
          label: "Allow camera",
        },
        allowGeolocation: {
          label: "Allow geolocation",
        },
      },
      error: {
        noUrl: "No iFrame URL provided",
        noBrowerSupport: "Your Browser does not support iframes. Please update your browser.",
      },
    },
    "smartHome-entityState": {
      name: "Entity State",
      description: "Display the state of an entity and toggle it optionally",
      option: {
        entityId: {
          label: "Entity ID",
        },
        displayName: {
          label: "Display-name",
        },
        entityUnit: {
          label: "Entity Unit",
        },
        clickable: {
          label: "Clickable",
        },
      },
    },
    "smartHome-executeAutomation": {
      name: "Execute Automation",
      description: "Trigger an automation with one click",
      option: {
        displayName: {
          label: "Display name",
        },
        automationId: {
          label: "Automation ID",
        },
      },
    },
    calendar: {
      name: "Calendar",
      description: "Display events from your integrations in a calendar view within a certain relative time period",
      option: {
        filterPastMonths: {
          label: "Start from",
        },
        filterFutureMonths: {
          label: "End at",
        },
      },
    },
    weather: {
      name: "Weather",
      description: "Displays the current weather information of a set location.",
      option: {
        isFormatFahrenheit: {
          label: "Temperature in Fahrenheit",
        },
        location: {
          label: "Weather location",
        },
        showCity: {
          label: "Show city",
        },
        hasForecast: {
          label: "Show forecast",
        },
        forecastDayCount: {
          label: "Amount of forecast days",
          description: "When the widget is not wide enough, less days are shown",
        },
      },
      kind: {
        clear: "Clear",
        mainlyClear: "Mainly clear",
        fog: "Fog",
        drizzle: "Drizzle",
        freezingDrizzle: "Freezing drizzle",
        rain: "Rain",
        freezingRain: "Freezing rain",
        snowFall: "Snow fall",
        snowGrains: "Snow grains",
        rainShowers: "Rain showers",
        snowShowers: "Snow showers",
        thunderstorm: "Thunderstorm",
        thunderstormWithHail: "Thunderstorm with hail",
        unknown: "Unknown",
      },
    },
    indexerManager: {
      name: "Indexer manager status",
      description: "Status of your indexers",
      option: {
        openIndexerSiteInNewTab: {
          label: "Open indexer site in new tab",
        },
      },
      title: "Indexer manager",
      testAll: "Test all",
      error: {
        internalServerError: "Failed to fetch indexers status",
      },
    },
    common: {
      location: {
        query: "City / Postal code",
        latitude: "Latitude",
        longitude: "Longitude",
        disabledTooltip: "Please enter a city or postal code",
        unknownLocation: "Unknown location",
        search: "Search",
        table: {
          header: {
            city: "City",
            country: "Country",
            coordinates: "Coordinates",
            population: "Population",
          },
          action: {
            select: "Select {city}, {countryCode}",
          },
          population: {
            fallback: "Unknown",
          },
        },
      },
      error: {
        action: {
          logs: "Check logs for more details",
        },
        noIntegration: "No integration selected",
      },
      option: {},
    },
    video: {
      name: "Video Stream",
      description: "Embed a video stream or video from a camera or a website",
      option: {
        feedUrl: {
          label: "Feed URL",
        },
        hasAutoPlay: {
          label: "Autoplay",
          description: "Autoplay only works when muted because of browser restrictions",
        },
        isMuted: {
          label: "Muted",
        },
        hasControls: {
          label: "Show controls",
        },
      },
      error: {
        noUrl: "No Video URL provided",
        forYoutubeUseIframe: "For YouTube videos use the iframe option",
      },
    },
    mediaServer: {
      name: "Current media server streams",
      description: "Show the current streams on your media servers",
      option: {},
    },
    downloads: {
      name: "Download Client",
      description: "Allows you to view and manage your Downloads from both Torrent and Usenet clients.",
      option: {
        columns: {
          label: "Columns to show",
        },
        enableRowSorting: {
          label: "Enable items sorting",
        },
        defaultSort: {
          label: "Column used for sorting by default",
        },
        descendingDefaultSort: {
          label: "Invert sorting",
        },
        showCompletedUsenet: {
          label: "Show usenet entries marked as completed",
        },
        showCompletedTorrent: {
          label: "Show torrent entries marked as completed",
        },
        activeTorrentThreshold: {
          label: "Hide completed torrent under this threshold (in kiB/s)",
        },
        categoryFilter: {
          label: "Categories/labels to filter",
        },
        filterIsWhitelist: {
          label: "Filter as a whitelist",
        },
        applyFilterToRatio: {
          label: "Use filter to calculate Ratio",
        },
      },
      errors: {
        noColumns: "Select Columns in Items",
        noCommunications: "Can't load data from integration",
      },
      items: {
        actions: { columnTitle: "Controls" },
        added: { columnTitle: "Added", detailsTitle: "Date Added" },
        category: { columnTitle: "Extras", detailsTitle: "Categories (Or extra information)" },
        downSpeed: { columnTitle: "Down", detailsTitle: "Download Speed" },
        index: { columnTitle: "#", detailsTitle: "Current index within client" },
        id: { columnTitle: "Id" },
        integration: { columnTitle: "Integration" },
        name: { columnTitle: "Job name" },
        progress: { columnTitle: "Progress", detailsTitle: "Download Progress" },
        ratio: { columnTitle: "Ratio", detailsTitle: "Torrent ratio (received/sent)" },
        received: { columnTitle: "Total down", detailsTitle: "Total downloaded" },
        sent: { columnTitle: "Total up", detailsTitle: "Total Uploaded" },
        size: { columnTitle: "File Size", detailsTitle: "Total Size of selection/files" },
        state: { columnTitle: "State", detailsTitle: "Job State" },
        time: { columnTitle: "Finish time", detailsTitle: "Time since/to completion" },
        type: { columnTitle: "Type", detailsTitle: "Download Client type" },
        upSpeed: { columnTitle: "Up", detailsTitle: "Upload Speed" },
      },
      states: {
        downloading: "Downloading",
        queued: "Queued",
        paused: "Paused",
        completed: "Completed",
        failed: "Failed",
        processing: "Processing",
        leeching: "Leeching",
        stalled: "Stalled",
        unknown: "Unknown",
        seeding: "Seeding",
      },
      actions: {
        clients: {
          modalTitle: "Download clients list",
          pause: "Pause all clients/items",
          resume: "Resume all clients/items",
        },
        client: {
          pause: "Pause client",
          resume: "Resume client",
        },
        item: {
          pause: "Pause Item",
          resume: "Resume Item",
          delete: {
            title: "Delete Item",
            modalTitle: "Are you sure you want to delete this job?",
            entry: "Delete entry",
            entryAndFiles: "Delete entry and file(s)",
          },
        },
      },
      globalRatio: "Global Ratio",
    },
    "mediaRequests-requestList": {
      name: "Media Requests List",
      description: "See a list of all media requests from your Overseerr or Jellyseerr instance",
      option: {
        linksTargetNewTab: {
          label: "Open links in new tab",
        },
      },
      pending: {
        approve: "Approve request",
        approving: "Approving request...",
        decline: "Decline request",
      },
      availability: {
        unknown: "Unknown",
        pending: "Pending",
        processing: "Processing",
        partiallyAvailable: "Partial",
        available: "Available",
      },
      toBeDetermined: "TBD",
    },
    "mediaRequests-requestStats": {
      name: "Media Requests Stats",
      description: "Statistics about your media requests",
      option: {},
      titles: {
        stats: {
          main: "Media Stats",
          approved: "Already approved",
          pending: "Pending approvals",
          processing: "Being processed",
          declined: "Already declined",
          available: "Already Available",
          tv: "TV requests",
          movie: "Movie requests",
          total: "Total",
        },
        users: {
          main: "Top Users",
          requests: "Requests",
        },
      },
    },
    rssFeed: {
      name: "RSS feeds",
      description: "Monitor and display one or more generic RSS, ATOM or JSON feeds",
      option: {
        feedUrls: {
          label: "Feed URLs",
        },
        textLinesClamp: {
          label: "Description line clamp",
        },
        maximumAmountPosts: {
          label: "Amount posts limit",
        },
      },
    },
  },
  widgetPreview: {
    toggle: {
      enabled: "Edit mode enabled",
      disabled: "Edit mode disabled",
    },
    dimensions: {
      title: "Change dimensions",
    },
  },
  board: {
    action: {
      edit: {
        notification: {
          success: {
            title: "Changes applied successfully",
            message: "The board was successfully saved",
          },
          error: {
            title: "Unable to apply changes",
            message: "The board could not be saved",
          },
        },
      },
      oldImport: {
        label: "Import from homarr before 1.0.0",
        notification: {
          success: {
            title: "Import successful",
            message: "The board was successfully imported",
          },
          error: {
            title: "Import failed",
            message: "The board could not be imported, check the logs for further details",
          },
        },
        form: {
          file: {
            label: "Select JSON file",
            invalidError: "Invalid configuration file",
          },
          apps: {
            label: "Apps",
            avoidDuplicates: {
              label: "Avoid duplicates",
              description: "Ignores apps where an app with the same href already exists",
            },
            onlyImportApps: {
              label: "Only import apps",
              description: "Only adds the apps, the board need to be recreated manually",
            },
          },
          name: {
            label: "Board name",
          },
          screenSize: {
            label: "Screen size",
            option: {
              sm: "Small",
              md: "Medium",
              lg: "Large",
            },
          },
          sidebarBehavior: {
            label: "Sidebar behavior",
            description: "Sidebars were removed in 1.0, you can select what should happen with the items inside them.",
            option: {
              lastSection: {
                label: "Last section",
                description: "Sidebar will be displayed below the last section",
              },
              removeItems: {
                label: "Remove items",
                description: "Items contained in the sidebar will be removed",
              },
            },
          },
        },
      },
    },
    field: {
      pageTitle: {
        label: "Page title",
      },
      metaTitle: {
        label: "Meta title",
      },
      logoImageUrl: {
        label: "Logo image URL",
      },
      faviconImageUrl: {
        label: "Favicon image URL",
      },
      backgroundImageUrl: {
        label: "Background image URL",
      },
      backgroundImageAttachment: {
        label: "Background image attachment",
        option: {
          fixed: {
            label: "Fixed",
            description: "Background stays in the same position.",
          },
          scroll: {
            label: "Scroll",
            description: "Background scrolls with your mouse.",
          },
        },
      },
      backgroundImageRepeat: {
        label: "Background image repeat",
        option: {
          repeat: {
            label: "Repeat",
            description: "The image is repeated as much as needed to cover the whole background image painting area.",
          },
          "no-repeat": {
            label: "No repeat",
            description: "The image is not repeated and may not fill the entire space.",
          },
          "repeat-x": {
            label: "Repeat X",
            description: "Same as 'Repeat' but only on horizontal axis.",
          },
          "repeat-y": {
            label: "Repeat Y",
            description: "Same as 'Repeat' but only on vertical axis.",
          },
        },
      },
      backgroundImageSize: {
        label: "Background image size",
        option: {
          cover: {
            label: "Cover",
            description:
              "Scales the image as small as possible to cover the entire window by cropping excessive space.",
          },
          contain: {
            label: "Contain",
            description:
              "Scales the image as large as possible within its container without cropping or stretching the image.",
          },
        },
      },
      primaryColor: {
        label: "Primary color",
      },
      secondaryColor: {
        label: "Secondary color",
      },
      opacity: {
        label: "Opacity",
      },
      customCss: {
        label: "Custom css for this board",
        description: "Further, customize your dashboard using CSS, only recommended for experienced users",
        customClassesAlert: {
          title: "Custom classes",
          description:
            "You can add custom classes to your board items in the advanced options of each item and use them in the custom CSS above.",
        },
      },
      columnCount: {
        label: "Column count",
      },
      name: {
        label: "Name",
      },
      isPublic: {
        label: "Public",
        description: "Public boards are accessible by everyone, even without an account.",
      },
    },
    content: {
      metaTitle: "{boardName} board",
    },
    setting: {
      title: "Settings for {boardName} board",
      section: {
        general: {
          title: "General",
          unrecognizedLink: "The provided link is not recognized and won't preview, it might still work.",
        },
        layout: {
          title: "Layout",
        },
        background: {
          title: "Background",
        },
        color: {
          title: "Colors",
        },
        customCss: {
          title: "Custom css",
        },
        access: {
          title: "Access control",
          permission: {
            item: {
              view: {
                label: "View board",
              },
              modify: {
                label: "Modify board",
              },
              full: {
                label: "Full access",
              },
            },
          },
        },
        dangerZone: {
          title: "Danger zone",
          action: {
            rename: {
              label: "Rename board",
              description: "Changing the name will break any links to this board.",
              button: "Change name",
              modal: {
                title: "Rename board",
              },
            },
            visibility: {
              label: "Change board visibility",
              description: {
                public: "This board is currently public.",
                private: "This board is currently private.",
              },
              button: {
                public: "Make private",
                private: "Make public",
              },
              confirm: {
                public: {
                  title: "Make board private",
                  description:
                    "Are you sure you want to make this board private? This will hide the board from the public. Links for guest users will break.",
                },
                private: {
                  title: "Make board public",
                  description:
                    "Are you sure you want to make this board public? This will make the board accessible to everyone.",
                },
              },
            },
            delete: {
              label: "Delete this board",
              description: "Once you delete a board, there is no going back. Please be certain.",
              button: "Delete this board",
              confirm: {
                title: "Delete board",
                description:
                  "Are you sure you want to delete this board? This will permanently delete the board and all its content.",
              },
            },
          },
        },
      },
    },
  },
  management: {
    metaTitle: "Management",
    title: {
      morning: "Good morning, {username}",
      afternoon: "Good afternoon, {username}",
      evening: "Good evening, {username}",
    },
    notFound: {
      title: "Not Found",
      text: "Could not find requested resource",
    },
    navbar: {
      items: {
        home: "Home",
        boards: "Boards",
        apps: "Apps",
        integrations: "Integrations",
        users: {
          label: "Users",
          items: {
            manage: "Manage",
            invites: "Invites",
            groups: "Groups",
          },
        },
        tools: {
          label: "Tools",
          items: {
            docker: "Docker",
            logs: "Logs",
            api: "API",
            tasks: "Tasks",
          },
        },
        settings: "Settings",
        help: {
          label: "Help",
          items: {
            documentation: "Documentation",
            submitIssue: "Submit an issue",
            discord: "Community Discord",
            sourceCode: "Source Code",
          },
        },
        about: "About",
      },
    },
    page: {
      home: {
        statistic: {
          countBoards: "Boards",
          createUser: "Create new user",
          createInvite: "Create new invite",
          addIntegration: "Create integration",
          addApp: "Add app",
          manageRoles: "Manage roles",
        },
        statisticLabel: {
          boards: "Boards",
          resources: "Resources",
          authentication: "Authentication",
          authorization: "Authorization",
        },
      },
      board: {
        title: "Your boards",
        action: {
          new: {
            label: "New board",
          },
          open: {
            label: "Open board",
          },
          settings: {
            label: "Settings",
          },
          setHomeBoard: {
            label: "Set as your home board",
            badge: {
              label: "Home",
              tooltip: "This board will show as your home board",
            },
          },
          delete: {
            label: "Delete permanently",
            confirm: {
              title: "Delete board",
              description: "Are you sure you want to delete the {name} board?",
            },
          },
        },
        visibility: {
          public: "This board is public",
          private: "This board is private",
        },
        modal: {
          createBoard: {
            field: {
              name: {
                label: "Name",
              },
            },
          },
        },
      },
      user: {
        back: "Back to users",
        fieldsDisabledExternalProvider:
          "Certain fields are disabled because they are managed by an external authentication provider.",
        setting: {
          general: {
            title: "General",
            item: {
              language: "Language & Region",
              board: "Home board",
            },
          },
          security: {
            title: "Security",
          },
          board: {
            title: "Boards",
          },
        },
        list: {
          metaTitle: "Manage users",
          title: "Users",
        },
        edit: {
          metaTitle: "Edit user {username}",
        },
        create: {
          metaTitle: "Create user",
          title: "Create new user",
          step: {
            personalInformation: {
              label: "Personal information",
            },
            security: {
              label: "Security",
            },
            permissions: {
              label: "Permissions",
              description: "Coming soon",
            },
            review: {
              label: "Review",
            },
            completed: {
              title: "User created",
            },
            error: {
              title: "User creation failed",
            },
          },
          action: {
            createAnother: "Create another user",
            back: "Return to the user list",
          },
        },
        invite: {
          title: "Manage user invites",
          action: {
            new: {
              title: "New invite",
              description:
                "After the expiration, an invite will no longer be valid and the recipient of the invite won't be able to create an account.",
            },
            copy: {
              title: "Copy invite",
              description:
                "Your invitation has been generated. After this modal closes, you'll not be able to copy this link anymore. If you do no longer wish to invite said person, you can delete this invitation any time.",
              link: "Invitation link",
              button: "Copy & close",
            },
            delete: {
              title: "Delete invite",
              description:
                "Are you sure, that you want to delete this invitation? Users with this link will no longer be able to create an account using that link.",
            },
          },
          field: {
            id: {
              label: "ID",
            },
            creator: {
              label: "Creator",
            },
            expirationDate: {
              label: "Expiration date",
            },
            token: {
              label: "Token",
            },
          },
        },
      },
      group: {
        back: "Back to groups",
        setting: {
          general: {
            title: "General",
          },
          members: {
            title: "Members",
            search: "Find a member",
            notFound: "No members found",
          },
          permissions: {
            title: "Permissions",
            form: {
              unsavedChanges: "You have unsaved changes!",
            },
          },
        },
      },
      settings: {
        title: "Settings",
        section: {
          analytics: {
            title: "Analytics",
            general: {
              title: "Send anonymous analytics",
              text: "Homarr will send anonymized analytics using the open source software Umami. It never collects any personal information and is therefore fully GDPR & CCPA compliant. We encourage you to enable analytics because it helps our open source team to identify issues and prioritize our backlog.",
            },
            widgetData: {
              title: "Widget data",
              text: "Send which widgets (and their quantity) you have configured. Does not include URLs, names or any other data.",
            },
            integrationData: {
              title: "Integration data",
              text: "Send which integrations (and their quantity) you have configured. Does not include URLs, names or any other data.",
            },
            usersData: {
              title: "Users data",
              text: "Send the amount of users and whether you've activated SSO",
            },
          },
          crawlingAndIndexing: {
            title: "Crawling and Indexing",
            warning:
              "Enabling or disabling any settings here will severely impact how search engines will index & crawl your page. Any setting is a request and it is up to the crawler to apply these settings. Any modification may take up to multiple days or weeks to apply. Some settings may be search engine specific.",
            noIndex: {
              title: "No index",
              text: "Do not index the website on search engines and don't show it in any search results",
            },
            noFollow: {
              title: "No follow",
              text: "Do not follow any links while indexing. Disabling this will lead to crawlers attempting to follow all links on Homarr.",
            },
            noTranslate: {
              title: "No translate",
              text: "When the site language is likely not that the user is likely to want to read, Google will show a translation link in the search results",
            },
            noSiteLinksSearchBox: {
              title: "No site links search box",
              text: "Google will build a search box with the crawled links along with other direct links. Enabling this will ask Google to disable that box.",
            },
          },
        },
      },
      tool: {
        tasks: {
          title: "Tasks",
          status: {
            idle: "Idle",
            running: "Running",
            error: "Error",
          },
          job: {
            iconsUpdater: {
              label: "Icons Updater",
            },
            analytics: {
              label: "Analytics",
            },
            smartHomeEntityState: {
              label: "Smart Home Entity State",
            },
            ping: {
              label: "Pings",
            },
            mediaServer: {
              label: "Media Server",
            },
            mediaOrganizer: {
              label: "Media Organizers",
            },
            downloads: {
              label: "Downloads",
            },
            mediaRequests: {
              label: "Media Requests",
            },
            rssFeeds: {
              label: "RSS feeds",
            },
            indexerManager: {
              label: "Indexer Manager",
            },
          },
        },
      },
      about: {
        version: "Version {version}",
        text: "Homarr is a community driven open source project that is being maintained by volunteers. Thanks to these people, Homarr has been a growing project since 2021. Our team is working completely remote from many different countries on Homarr in their leisure time for no compensation.",
        accordion: {
          contributors: {
            title: "Contributors",
            subtitle: "{count} maintaining code & Homarr",
          },
          translators: {
            title: "Translators",
            subtitle: "{count} contributing translations in many languages",
          },
          libraries: {
            title: "Libraries",
            subtitle: "{count} used in the Code of Homarr",
          },
        },
      },
    },
  },
  docker: {
    title: "Containers",
    table: {
      updated: "Updated {when}",
      search: "Seach {count} containers",
      selected: "{selectCount} of {totalCount} containers selected",
    },
    field: {
      name: {
        label: "Name",
      },
      state: {
        label: "State",
        option: {
          created: "Created",
          running: "Running",
          paused: "Paused",
          restarting: "Restarting",
          exited: "Exited",
          removing: "Removing",
          dead: "Dead",
        },
      },
      containerImage: {
        label: "Image",
      },
      ports: {
        label: "Ports",
      },
    },
    action: {
      start: {
        label: "Start",
        notification: {
          success: {
            title: "Containers started",
            message: "The containers were started successfully",
          },
          error: {
            title: "Containers not started",
            message: "The containers could not be started",
          },
        },
      },
      stop: {
        label: "Stop",
        notification: {
          success: {
            title: "Containers stopped",
            message: "The containers were stopped successfully",
          },
          error: {
            title: "Containers not stopped",
            message: "The containers could not be stopped",
          },
        },
      },
      restart: {
        label: "Restart",
        notification: {
          success: {
            title: "Containers restarted",
            message: "The containers were restarted successfully",
          },
          error: {
            title: "Containers not restarted",
            message: "The containers could not be restarted",
          },
        },
      },
      remove: {
        label: "Remove",
        notification: {
          success: {
            title: "Containers removed",
            message: "The containers were removed successfully",
          },
          error: {
            title: "Containers not removed",
            message: "The containers could not be removed",
          },
        },
      },
      refresh: {
        label: "Refresh",
        notification: {
          success: {
            title: "Containers refreshed",
            message: "You are now viewing the most recent data",
          },
          error: {
            title: "Containers not refreshed",
            message: "Something went wrong while refreshing the containers",
          },
        },
      },
    },
  },
  permission: {
    title: "Permissions",
    userSelect: {
      title: "Add user permission",
    },
    groupSelect: {
      title: "Add group permission",
    },
    tab: {
      user: "Users",
      group: "Groups",
      inherited: "Inherited groups",
    },
    field: {
      user: {
        label: "User",
      },
      group: {
        label: "Group",
      },
      permission: {
        label: "Permission",
      },
    },
    action: {
      saveUser: "Save user permission",
      saveGroup: "Save group permission",
    },
  },
  navigationStructure: {
    manage: {
      label: "Manage",
      boards: {
        label: "Boards",
      },
      integrations: {
        label: "Integrations",
        edit: {
          label: "Edit",
        },
        new: {
          label: "New",
        },
      },
      apps: {
        label: "Apps",
        new: {
          label: "New App",
        },
        edit: {
          label: "Edit App",
        },
      },
      users: {
        label: "Users",
        create: {
          label: "Create",
        },
        general: "General",
        security: "Security",
        board: "Boards",
        groups: {
          label: "Groups",
        },
        invites: {
          label: "Invites",
        },
      },
      tools: {
        label: "Tools",
        docker: {
          label: "Docker",
        },
        logs: {
          label: "Logs",
        },
      },
      settings: {
        label: "Settings",
      },
      about: {
        label: "About",
      },
    },
  },
  search: {
    placeholder: "Search for anything",
    nothingFound: "Nothing found",
    error: {
      fetch: "An error occurred while fetching data",
    },
    mode: {
      appIntegrationBoard: {
        help: "Search for apps, integrations or boards",
        group: {
          app: {
            title: "Apps",
            children: {
              action: {
                open: {
                  label: "Open app url",
                },
                edit: {
                  label: "Edit app",
                },
              },
              detail: {
                title: "Select an action for the app",
              },
            },
          },
          board: {
            title: "Boards",
            children: {
              action: {
                open: {
                  label: "Open board",
                },
                homeBoard: {
                  label: "Set as home board",
                },
                settings: {
                  label: "Open settings",
                },
              },
              detail: {
                title: "Select an action for the board",
              },
            },
          },
          integration: {
            title: "Integrations",
          },
        },
      },
      command: {
        help: "Activate command mode",
        group: {
          globalCommand: {
            title: "Global commands",
            option: {
              colorScheme: {
                light: "Switch to light mode",
                dark: "Switch to dark mode",
              },
              language: {
                label: "Change language",
                children: {
                  detail: {
                    title: "Select your prefered language",
                  },
                },
              },
              newBoard: {
                label: "Create a new board",
              },
              importBoard: {
                label: "Import a board",
              },
              newApp: {
                label: "Create a new app",
              },
              newIntegration: {
                label: "Create a new integration",
                children: {
                  detail: {
                    title: "Select the integration type you want to create",
                  },
                },
              },
              newUser: {
                label: "Create a new user",
              },
              newInvite: {
                label: "Create a new invite",
              },
              newGroup: {
                label: "Create a new group",
              },
            },
          },
        },
      },
      external: {
        help: "Use an external search engine",
        group: {
          searchEngine: {
            title: "Search engines",
            option: {
              google: {
                name: "Google",
                description: "Search the web with Google",
              },
              bing: {
                name: "Bing",
                description: "Search the web with Bing",
              },
              duckduckgo: {
                name: "DuckDuckGo",
                description: "Search the web with DuckDuckGo",
              },
              torrent: {
                name: "Torrents",
                description: "Search for torrents on torrentdownloads.pro",
              },
              youTube: {
                name: "YouTube",
                description: "Search for videos on YouTube",
              },
            },
          },
        },
      },
      help: {
        group: {
          mode: {
            title: "Modes",
          },
          help: {
            title: "Help",
            option: {
              documentation: {
                label: "Documentation",
              },
              submitIssue: {
                label: "Submit an issue",
              },
              discord: {
                label: "Community Discord",
              },
            },
          },
        },
      },
      page: {
        help: "Search for pages",
        group: {
          page: {
            title: "Pages",
            option: {
              manageHome: {
                label: "Manage home page",
              },
              manageBoard: {
                label: "Manage boards",
              },
              manageApp: {
                label: "Manage apps",
              },
              manageIntegration: {
                label: "Manage integrations",
              },
              manageUser: {
                label: "Manage users",
              },
              manageInvite: {
                label: "Manage invites",
              },
              manageGroup: {
                label: "Manage groups",
              },
              manageDocker: {
                label: "Manage docker",
              },
              manageApi: {
                label: "Swagger API",
              },
              manageLog: {
                label: "View logs",
              },
              manageTask: {
                label: "Manage tasks",
              },
              manageSettings: {
                label: "Global settings",
              },
              about: {
                label: "About",
              },
              homeBoard: {
                label: "Home board",
              },
              preferences: {
                label: "Your preferences",
              },
            },
          },
        },
      },
      userGroup: {
        help: "Search for users or groups",
        group: {
          user: {
            title: "Users",
            children: {
              action: {
                detail: {
                  label: "Show user details",
                },
              },
              detail: {
                title: "Select an action for the user",
              },
            },
          },
          group: {
            title: "Groups",
            children: {
              action: {
                detail: {
                  label: "Show group details",
                },
                manageMember: {
                  label: "Manage members",
                },
                managePermission: {
                  label: "Manage permissions",
                },
              },
              detail: {
                title: "Select an action for the group",
              },
            },
          },
        },
      },
    },
  },
} as const;
