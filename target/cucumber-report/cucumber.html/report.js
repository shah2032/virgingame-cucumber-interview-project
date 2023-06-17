$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TopMenu.feature");
formatter.feature({
  "comments": [
    {
      "line": 3,
      "value": "#  Feature: TopMenu Test"
    },
    {
      "line": 4,
      "value": "#    As a  user I want to Join into virgingames website"
    },
    {
      "line": 5,
      "value": "#    Background:"
    },
    {
      "line": 6,
      "value": "#      Given I am on homepage"
    },
    {
      "line": 7,
      "value": "#      And I accept cookies"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#    Scenario: User should navigate to joining page successfully"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#      When I click On Online Slots"
    },
    {
      "line": 12,
      "value": "#      Then I should navigate to Online Slots page"
    },
    {
      "line": 13,
      "value": "#@smoke"
    },
    {
      "line": 14,
      "value": "#    Scenario: User should navigate to All Games page successfully"
    },
    {
      "line": 15,
      "value": "#"
    },
    {
      "line": 16,
      "value": "#      When I click On All Games"
    },
    {
      "line": 17,
      "value": "#      Then I should navigate to Online Slots page"
    }
  ],
  "line": 19,
  "name": "TopMenu",
  "description": "As user I want to navigate to selected menu page",
  "id": "topmenu",
  "keyword": "Feature",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"\u003cTopMenu tab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"\u003cNavigate Page\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;",
  "rows": [
    {
      "cells": [
        "TopMenu tab",
        "Navigate Page"
      ],
      "line": 28,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;1"
    },
    {
      "cells": [
        "Online Slots",
        "Online Slots"
      ],
      "line": 29,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;2"
    },
    {
      "cells": [
        "Live Casino",
        "Live Casino"
      ],
      "line": 30,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;3"
    },
    {
      "cells": [
        "Casino",
        "Casino"
      ],
      "line": 31,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;4"
    },
    {
      "cells": [
        "Online Bingo",
        "Online Bingo"
      ],
      "line": 32,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;5"
    },
    {
      "cells": [
        "Free Games",
        "Free Games"
      ],
      "line": 33,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;6"
    },
    {
      "cells": [
        "Poker",
        "Poker"
      ],
      "line": 34,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;7"
    },
    {
      "cells": [
        "All Games",
        "All Games"
      ],
      "line": 35,
      "id": "topmenu;user-should-navigate-to-selected-menu-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13027056899,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"Online Slots\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"Online Slots\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 219699201,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 156358101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Slots",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 180825800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Slots",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 633510199,
  "status": "passed"
});
formatter.after({
  "duration": 178700,
  "status": "passed"
});
formatter.before({
  "duration": 13705449599,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"Live Casino\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"Live Casino\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 133957100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Live Casino",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 183935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Live Casino",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 893193100,
  "status": "passed"
});
formatter.after({
  "duration": 51600,
  "status": "passed"
});
formatter.before({
  "duration": 35358294900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"Casino\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"Casino\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 143855500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Casino",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 204004600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Casino",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 4980758500,
  "status": "passed"
});
formatter.after({
  "duration": 29600,
  "status": "passed"
});
formatter.before({
  "duration": 54838809799,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"Online Bingo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"Online Bingo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 306039500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Bingo",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 195901900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Online Bingo",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 585128800,
  "status": "passed"
});
formatter.after({
  "duration": 25400,
  "status": "passed"
});
formatter.before({
  "duration": 61792888000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"Free Games\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"Free Games\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 172508100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Games",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 244067200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Free Games",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 594224700,
  "status": "passed"
});
formatter.after({
  "duration": 16700,
  "status": "passed"
});
formatter.before({
  "duration": 70941679500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"Poker\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"Poker\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 126667100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poker",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 176053800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poker",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 576589700,
  "status": "passed"
});
formatter.after({
  "duration": 18700,
  "status": "passed"
});
formatter.before({
  "duration": 74293979700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "topmenu;user-should-navigate-to-selected-menu-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on any menu from \"All Games\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I navigate to selected menu page \"All Games\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 137694900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Games",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 291219500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All Games",
      "offset": 34
    }
  ],
  "location": "TopMenuSteps.iNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 780444500,
  "status": "passed"
});
formatter.after({
  "duration": 26900,
  "status": "passed"
});
});