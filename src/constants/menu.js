const data = [
  {
    id: "dashboards",
    icon: "iconsminds-monitor-analytics",
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
    label: "Books",
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
    icon: "iconsminds-optimization",
    label: "Screens",
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
    id: "blankpage",
    icon: "iconsminds-security-block",
    label: "Settings",
    to: "/app/blank-page"
  }
];
export default data;
