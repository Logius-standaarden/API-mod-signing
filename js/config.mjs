import { processRuleBlocks } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  pubDomain: "api",
  shortName: "mod-signing",
  specType: "ST",
  specStatus: "DEF",
  publishDate: "2024-09-06",
  publishVersion: "1.0.0",
  //previousPublishVersion: "",
  editors: [{
    name: "Logius Standaarden",
    company: "Logius",
    companyURL: "https://www.logius.nl",
  },],
  authors: [{
    name: "Peter Haasnoot",
    company: "Logius",
    companyURL: "https://www.logius.nl",
  },],
  github: "https://github.com/Logius-standaarden/API-mod-signing/",
  postProcess: [processRuleBlocks],

  localBiblio: {
    "JAdES": {
      href: "https://www.etsi.org/deliver/etsi_ts/119100_119199/11918201/01.01.01_60/ts_11918201v010101p.pdf",
      title: "JAdES digital signatures",
    },
  }
});
