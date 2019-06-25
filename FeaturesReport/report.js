$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/any-member_bookavtc.feature");
formatter.feature({
  "name": "Tout client - Réserver un VTC",
  "description": "  Un client veut réserver un VTC de sorte à se déplacer d\u0027un point A à un point B.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.step({
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "prénom_client",
        "solde_avant",
        "solde_après",
        "avoir_avant",
        "avoir_après",
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ]
    },
    {
      "cells": [
        "Jean-Michel",
        "35",
        "5",
        "10",
        "10",
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ]
    },
    {
      "cells": [
        "Patrick",
        "46",
        "16",
        "10",
        "10",
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ]
    },
    {
      "cells": [
        "Michael",
        "30",
        "0",
        "10",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ]
    },
    {
      "cells": [
        "Michael",
        "50",
        "10",
        "10",
        "0",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ]
    },
    {
      "cells": [
        "Michael",
        "50",
        "50",
        "51",
        "1",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ]
    },
    {
      "cells": [
        "Michael",
        "50",
        "50",
        "10",
        "10",
        "Vincent",
        "111 avenue Victor Hugo, 93300 Aubervilliers",
        "2 Avenue de Flandre 75019 Paris"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Jean-Michel\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"35\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsValidated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"5\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Patrick\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"46\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsValidated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"16\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"30\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsValidated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"2 Avenue de Flandre 75019 Paris\" à \"111 avenue Victor Hugo, 93300 Aubervilliers\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsValidated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"10\" euros TTC avec \"0\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"51\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"2 Avenue de Flandre 75019 Paris\" à \"111 avenue Victor Hugo, 93300 Aubervilliers\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsValidated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"1\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde suffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"111 avenue Victor Hugo, 93300 Aubervilliers\" à \"2 Avenue de Flandre 75019 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation est effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsValidated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"50\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "solde insuffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"\u003cprénom_client\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "le solde de mon compte est de \"\u003csolde_avant\u003e\" euros TTC avec \"\u003cavoir_avant\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.step({
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.step({
  "name": "le solde de mon compte est de \"\u003csolde_après\u003e\" euros TTC avec \"\u003cavoir_après\u003e\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "prénom_client",
        "solde_avant",
        "solde_après",
        "avoir_avant",
        "avoir_après",
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ]
    },
    {
      "cells": [
        "Jean-Michel",
        "0",
        "0",
        "10",
        "10",
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ]
    },
    {
      "cells": [
        "Patrick",
        "26",
        "26",
        "10",
        "10",
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ]
    },
    {
      "cells": [
        "Michael",
        "29",
        "29",
        "10",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ]
    },
    {
      "cells": [
        "Michael",
        "20",
        "20",
        "15",
        "10",
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ]
    },
    {
      "cells": [
        "Michael",
        "2",
        "2",
        "10",
        "10",
        "Vincent",
        "2 Avenue de Flandre 75019 Paris",
        "111 avenue Victor Hugo, 93300 Aubervilliers"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde insuffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Jean-Michel\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.theBookingIsNotValidated(BookingSteps.java:57)\n\tat ✽.la réservation n\u0027est pas effective(file:src/test/resources/any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.step({
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForTooLowBalance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "le solde de mon compte est de \"0\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde insuffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Patrick\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"26\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.theBookingIsNotValidated(BookingSteps.java:57)\n\tat ✽.la réservation n\u0027est pas effective(file:src/test/resources/any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.step({
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForTooLowBalance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "le solde de mon compte est de \"26\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde insuffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"29\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.theBookingIsNotValidated(BookingSteps.java:57)\n\tat ✽.la réservation n\u0027est pas effective(file:src/test/resources/any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.step({
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForTooLowBalance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "le solde de mon compte est de \"29\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde insuffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"20\" euros TTC avec \"15\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.theBookingIsNotValidated(BookingSteps.java:57)\n\tat ✽.la réservation n\u0027est pas effective(file:src/test/resources/any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.step({
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForTooLowBalance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "le solde de mon compte est de \"20\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "solde insuffisant",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis authentifié en tant que \"Michael\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmAuthenticatedAs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le solde de mon compte est de \"2\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"2 Avenue de Flandre 75019 Paris\" à \"111 avenue Victor Hugo, 93300 Aubervilliers\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.BookingSteps.theBookingIsNotValidated(BookingSteps.java:57)\n\tat ✽.la réservation n\u0027est pas effective(file:src/test/resources/any-member_bookavtc.feature:35)\n",
  "status": "pending"
});
formatter.step({
  "name": "et une alerte pour insuffisance de solde se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForTooLowBalance()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "le solde de mon compte est de \"2\" euros TTC avec \"10\" euros TTC d\u0027avoir",
  "keyword": "And "
});
formatter.match({
  "location": "CustomerAccountSteps.myAccountBalanceIsWithCreditNoteOf(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Je ne suis pas authentifié",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.step({
  "name": "je tente de réserver le VTC \"\u003cprénom_vtc\u003e\" de \"\u003cpoint_départ\u003e\" à \"\u003cpoint_arrivée\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.step({
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "prénom_vtc",
        "point_départ",
        "point_arrivée"
      ]
    },
    {
      "cells": [
        "Marc",
        "43 rue Archereau 75019 Paris",
        "2 rue Clisson 75013 Paris"
      ]
    },
    {
      "cells": [
        "Marc",
        "5 rue Clisson 75013 Paris",
        "21 rue Laffitte 75009 Paris"
      ]
    },
    {
      "cells": [
        "Vincent",
        "136 avenue de Flandre 75019 Paris",
        "2 Avenue de Flandre 75019 Paris"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Je ne suis pas authentifié",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmNotAuthenticated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.iAmNotAuthenticated(UserSteps.java:34)\n\tat ✽.je ne suis pas authentifié(file:src/test/resources/any-member_bookavtc.feature:48)\n",
  "status": "pending"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Marc\" de \"43 rue Archereau 75019 Paris\" à \"2 rue Clisson 75013 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForCustomerAuthenticationFailure()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Je ne suis pas authentifié",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmNotAuthenticated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.iAmNotAuthenticated(UserSteps.java:34)\n\tat ✽.je ne suis pas authentifié(file:src/test/resources/any-member_bookavtc.feature:48)\n",
  "status": "pending"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Marc\" de \"5 rue Clisson 75013 Paris\" à \"21 rue Laffitte 75009 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForCustomerAuthenticationFailure()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "des clients existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Michael",
        "AZERHAD"
      ]
    },
    {
      "cells": [
        "def",
        "Jean-Michel",
        "DUPONT"
      ]
    },
    {
      "cells": [
        "ghi",
        "Patrick",
        "THOMAS"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "CustomerSteps.customersExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "des VTC existent:",
  "rows": [
    {
      "cells": [
        "id",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "abc",
        "Marc",
        "DUPUIS"
      ]
    },
    {
      "cells": [
        "def",
        "Vincent",
        "RONNI"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "VTCSteps.vtcExist(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Je ne suis pas authentifié",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je ne suis pas authentifié",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSteps.iAmNotAuthenticated()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat acceptance.UserSteps.iAmNotAuthenticated(UserSteps.java:34)\n\tat ✽.je ne suis pas authentifié(file:src/test/resources/any-member_bookavtc.feature:48)\n",
  "status": "pending"
});
formatter.step({
  "name": "je tente de réserver le VTC \"Vincent\" de \"136 avenue de Flandre 75019 Paris\" à \"2 Avenue de Flandre 75019 Paris\"",
  "keyword": "When "
});
formatter.match({
  "location": "BookingSteps.iAttemptToBookTheVtcFromTo(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "la réservation n\u0027est pas effective",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingSteps.theBookingIsNotValidated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "et une alerte pour identification du client impossible se lève",
  "keyword": "And "
});
formatter.match({
  "location": "BookingSteps.andAnAlertIsThrownForCustomerAuthenticationFailure()"
});
formatter.result({
  "status": "skipped"
});
});