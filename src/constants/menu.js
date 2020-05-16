const data = [
  {
    id: "dashboards",
    icon: "iconsminds-monitor-analytics",
    label: "Strategies",
    to: "/app/dashboards",
    subs: [
      {
        label: "AM6",
        to: "/app/dashboards/AM6"
      },
      {
        label: "AMC",
        to: "/app/dashboards/AMC"
      },
      {
        label: "Barriers To Entry 2",
        to: "/app/dashboards/Barriers-To-Entry-2"
      },
      {
        label: "Ben Graham Earnings Yield",
        to: "/app/dashboards/Ben-Graham-Earnings-Yield"
      },
      {
        label: "Big Dividends",
        to: "/app/dashboards/Big-Dividends"
      },
      {
        label: "Big T",
        to: "/app/dashboards/Biotech-T"
      },
      {
        label: "Buybacks",
        to: "/app/dashboards/Buybacks"
      },
      {
        label: "Capital Misers",
        to: "/app/dashboards/Capital-Misers"
      },
      {
        label: "Capital Stewards",
        to: "/app/dashboards/Capital-Stewards"
      },
      {
        label: "Capital Stewards Core",
        to: "/app/dashboards/Capital-Stewards-Core"
      },
      {
        label: "Cash Flow Titans",
        to: "/app/dashboards/Cash-Flow-Titans"
      },
      {
        label: "Cash Flow Titans Core",
        to: "/app/dashboards/Cash-Flow-Titans-Core"
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
        label: "Compounders",
        to: "/app/dashboards/Compounders"
      },
      {
        label: "Dividend Growers",
        to: "/app/dashboards/Dividend-Growers"
      },
      {
        label: "Dividend Growers 1",
        to: "/app/dashboards/Dividend-Growers-1"
      },
      {
        label: "Delevered Value 2",
        to: "/app/dashboards/Delevered-Value-2"
      },
      {
        label: "Dividend Payout",
        to: "/app/dashboards/Dividend-Payout"
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
        label: "HLV1",
        to: "/app/dashboards/HLV1"
      },
      {
        label: "HLVC",
        to: "/app/dashboards/HLVC"
      },
      {
        label: "INSURANCE",
        to: "/app/dashboards/INSURANCE"
      },
      {
        label: "LCM-T",
        to: "/app/dashboards/LCM-T"
      },
      {
        label: "Levered Value",
        to: "/app/dashboardsLevered-Value"
      },
      {
        label: "MFI",
        to: "/app/dashboards/MFI"
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
        label: "Quality On Sale",
        to: "/app/dashboards/Quality-On-Sale"
      },
      {
        label: "Quality On Sale Core",
        to: "/app/dashboards/Quality-On-Sale-Core"
      },
      {
        label: "SGC",
        to: "/app/dashboards/SGC"
      },
      {
        label: "Share Buybacks",
        to: "/app/dashboards/Share-Buybacks"
      },
      {
        label: "Value & Quality",
        to: "/app/dashboards/Value-&-Quality"
      },
      {
        label: "Value & Quality Core",
        to: "/app/dashboards/Value-&-Quality-Core"
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
