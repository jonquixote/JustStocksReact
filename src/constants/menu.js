const data = [
  {
    id: "dashboards",
    icon: "iconsminds-shop-4",
    label: "Strategies",
    to: "/app/dashboards",
    subs: [
      {
        label: "AM",
        to: "/app/dashboards/AM"
      },
      {
        label: "AMC",
        to: "/app/dashboards/AMC"
      },
      {
        label: "AM6",
        to: "/app/dashboards/AM6"
      },
      {
        label: "AM15",
        to: "/app/dashboards/AM15"
      },
      {
        label: "AM30",
        to: "/app/dashboards/AM30"
      },
      {
        label: "Biotech-T",
        to: "/app/dashboards/Biotech-T"
      },
      {
        label: "Buybacks",
        to: "/app/dashboards/Buybacks"
      },
      {
        label: "CDV",
        to: "/app/dashboards/CDV"
      },
      {
        label: "CK-RV",
        to: "/app/dashboards/CK-RV"
      },
      {
        label: "CK-T",
        to: "/app/dashboards/CK-T"
      },
      {
        label: "CK1",
        to: "/app/dashboards/CK1"
      },
      {
        label: "CK2",
        to: "/app/dashboards/CK2"
      },
      {
        label: "CKDM-T",
        to: "/app/dashboards/CKDM-T"
      },
      {
        label: "CKV",
        to: "/app/dashboards/CKV"
      },
      {
        label: "CM",
        to: "/app/dashboards/CM"
      },
      {
        label: "CM15",
        to: "/app/dashboards/CM15"
      },
      {
        label: "Compounders",
        to: "/app/dashboards/Compounders"
      },
      {
        label: "Delevered Value 2",
        to: "/app/dashboards/Delevered-Value-2"
      },
      {
        label: "DG",
        to: "/app/dashboards/DG"
      },
      {
        label: "Dividend Growers",
        to: "/app/dashboards/Dividend-Growers"
      },
      {
        label: "Dividend Payout",
        to: "/app/dashboards/Dividend-Payout"
      },
      {
        label: "DP",
        to: "/app/dashboards/DP"
      },
      {
        label: "G2F",
        to: "/app/dashboards/G2F"
      },
      {
        label: "G2F3",
        to: "/app/dashboards/G2F3"
      },
      {
        label: "G2FC",
        to: "/app/dashboards/G2FC"
      },
      {
        label: "HLV",
        to: "/app/dashboards/HLV"
      },
      {
        label: "HLV1",
        to: "/app/dashboards/HLV1"
      },
      {
        label: "HLVC",
        to: "/app/dashboards/HLVC"
      },
      {
        label: "Insurance",
        to: "/app/dashboards/INSURANCE"
      },
      {
        label: "LCM-T",
        to: "/app/dashboards/LCM-T"
      },
      {
        label: "MF30",
        to: "/app/dashboards/MF30"
      },
      {
        label: "MF2",
        to: "/app/dashboards/MF2"
      },
      {
        label: "MFI",
        to: "/app/dashboards/MFI"
      },
      {
        label: "Natural Monopolies",
        to: "/app/dashboards/Natural-Monopolies"
      },
      {
        label: "NM",
        to: "/app/dashboards/NM"
      },
      {
        label: "NM2",
        to: "/app/dashboards/NM2"
      },
      {
        label: "NN",
        to: "/app/dashboards/NN"
      },
      {
        label: "PB",
        to: "/app/dashboards/PB"
      },
      {
        label: "PBBPD",
        to: "/app/dashboards/PBBPD"
      },
      {
        label: "PE",
        to: "/app/dashboards/PE"
      },
      {
        label: "PEPBD",
        to: "/app/dashboards/PEPBD"
      },
      {
        label: "PS",
        to: "/app/dashboards/PS"
      },
      {
        label: "PSPBD",
        to: "/app/dashboards/PSPBD"
      },
      {
        label: "SG",
        to: "/app/dashboards/SG"
      },
      {
        label: "SGC",
        to: "/app/dashboards/SGC"
      },
      {
        label: "WC",
        to: "/app/dashboards/WC"
      },
      {
        icon: "simple-icon-briefcase",
        label: "menu.default",
        to: "/app/dashboards/default"
      }
    ]
  },
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "menu.pages",
    to: "/app/pages",
    subs: [
      {
        icon: "simple-icon-credit-card",
        label: "menu.data-list",
        to: "/app/pages/data-list"
      },
      {
        icon: "simple-icon-list",
        label: "menu.thumb-list",
        to: "/app/pages/thumb-list"
      },
      {
        icon: "simple-icon-grid",
        label: "menu.image-list",
        to: "/app/pages/image-list"
      },
      {
        icon: "simple-icon-book-open",
        label: "menu.details",
        to: "/app/pages/details"
      },
      {
        icon: "simple-icon-magnifier",
        label: "menu.search",
        to: "/app/pages/search"
      },
      {
        icon: "simple-icon-envelope-open",
        label: "menu.mailing",
        to: "/app/pages/mailing"
      },
      {
        icon: "simple-icon-bag",
        label: "menu.invoice",
        to: "/app/pages/invoice"
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.login",
        to: "/user/login",
        newWindow: true
      },
      {
        icon: "simple-icon-user-follow",
        label: "menu.register",
        to: "/user/register",
        newWindow: true
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.forgot-password",
        to: "/user/forgot-password",
        newWindow: true
      },
      {
        icon: "simple-icon-exclamation",
        label: "menu.error",
        to: "/error",
        newWindow: true
      }
    ]
  },
  {
    id: "applications",
    icon: "iconsminds-air-balloon-1",
    label: "menu.applications",
    to: "/app/applications",
    subs: [
      {
        icon: "simple-icon-check",
        label: "menu.todo",
        to: "/app/applications/todo"
      },
      {
        icon: "simple-icon-calculator",
        label: "menu.survey",
        to: "/app/applications/survey"
      },
      {
        icon: "simple-icon-bubbles",
        label: "menu.chat",
        to: "/app/applications/chat"
      }
    ]
  },
  {
    id: "ui",
    icon: "iconsminds-pantone",
    label: "menu.ui",
    to: "/app/ui",
    subs: [
      { icon: "simple-icon-bell", label: "menu.alerts", to: "/app/ui/alerts" },
      { icon: "simple-icon-badge", label: "menu.badges", to: "/app/ui/badges" },
      {
        icon: "simple-icon-control-play",
        label: "menu.buttons",
        to: "/app/ui/buttons"
      },
      { icon: "simple-icon-layers", label: "menu.cards", to: "/app/ui/cards" },
      {
        icon: "simple-icon-picture",
        label: "menu.carousel",
        to: "/app/ui/carousel"
      },
      { icon: "simple-icon-chart", label: "menu.charts", to: "/app/ui/charts" },
      {
        icon: "simple-icon-arrow-up",
        label: "menu.collapse",
        to: "/app/ui/collapse"
      },
      {
        icon: "simple-icon-arrow-down",
        label: "menu.dropdowns",
        to: "/app/ui/dropdowns"
      },
      {
        icon: "simple-icon-book-open",
        label: "menu.editors",
        to: "/app/ui/editors"
      },
      {
        icon: "simple-icon-notebook",
        label: "menu.form-layouts",
        to: "/app/ui/form-layouts"
      },
      {
        icon: "simple-icon-puzzle",
        label: "menu.form-components",
        to: "/app/ui/form-components"
      },
      {
        icon: "simple-icon-check",
        label: "menu.form-validations",
        to: "/app/ui/form-validations"
      },
      { icon: "simple-icon-star", label: "menu.icons", to: "/app/ui/icons" },
      {
        icon: "simple-icon-note",
        label: "menu.input-groups",
        to: "/app/ui/input-groups"
      },
      {
        icon: "simple-icon-screen-desktop",
        label: "menu.jumbotron",
        to: "/app/ui/jumbotron"
      },
      { icon: "simple-icon-map", label: "menu.maps", to: "/app/ui/maps" },
      { icon: "simple-icon-docs", label: "menu.modal", to: "/app/ui/modal" },
      {
        icon: "simple-icon-cursor",
        label: "menu.navigation",
        to: "/app/ui/navigation"
      },
      {
        icon: "simple-icon-pin",
        label: "menu.popover-tooltip",
        to: "/app/ui/popover-tooltip"
      },
      {
        icon: "simple-icon-shuffle",
        label: "menu.sortable",
        to: "/app/ui/sortable"
      },
      { icon: "simple-icon-grid", label: "menu.tables", to: "/app/ui/tables" }
    ]
  },
  {
    id: "menu",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.menu",
    to: "/app/menu",
    subs: [
      {
        icon: "simple-icon-logout",
        label: "menu.types",
        to: "/app/menu/types"
      },
      {
        icon: "simple-icon-layers",
        label: "menu.levels",
        to: "/app/menu/levels",
        subs: [
          {
            icon: "simple-icon-arrow-right",
            label: "menu.third-level-1",
            to: "/app/menu/levels/third-level-1"
          },
          {
            icon: "simple-icon-arrow-right",
            label: "menu.third-level-2",
            to: "/app/menu/levels/third-level-2"
          },
          {
            icon: "simple-icon-arrow-right",
            label: "menu.third-level-3",
            to: "/app/menu/levels/third-level-3"
          }
        ]
      }
    ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "menu.blank-page",
    to: "/app/blank-page"
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow:true
  }
];
export default data;
