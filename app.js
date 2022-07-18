const USSD = prompt("Enter USSD KEY:");

if (USSD === "*544#") {
  const choice = parseInt(
    prompt(
      "0: Nyakua Bonus \n1:My Data Deals\n2:Daily Bundles NEW\n3:Weekly Bundles NEW\n4:Monthly Bundles NEW\n5:No Expiry Bundles\n6:Entertainment Bundles \n7:Okoa Data \n8: Lipa Mdogo Mdogo"
    )
  );
  const option = query(choice, 0, 8);

  switch (option) {
    case 0:
      const levelOneNyakuaOptions = levelOneNyakuaQuery();
      switch (levelOneNyakuaOptions > 0) {
        case 1:
          const NyakuaBonusOption = NyakuaBonusOptionQuery();
      }
      break;

    case 1:
      const levelOneDataDealsOption = levelOneDataDealsQuery();
      switch (levelOneDataDealsOption) {
      }
      break;

    case 2:
      const levelOneDailyBundlesNEW = levelOneDailyBundlesNEWquery();
      switch (levelOneDailyBundlesNEW) {
      }
      break;

    case 3:
      const levelWeeklyBundlesNEW = levelWeeklyBundlesNEWquery();
      switch (levelWeeklyBundlesNEW) {
      }
      break;

    case 4:
      const levelOneMonthlyBundlesNEW = levelOneMonthlyBundlesNEWquery();
      switch (levelOneMonthlyBundlesNEW) {
      }
      break;

    case 5:
      const levelOneNoExpiryBundles = levelOneNoExpiryBundlesQuery();
      switch (levelOneNoExpiryBundles) {
      }
      break;

    case 6:
      const levelOneEntertainmentBundles = levelOneEntertainmentBundlesQuery();
      switch (levelOneEntertainmentBundles) {
      }
      break;

    case 7:
      const levelOneOkoaData = levelOneOkoaDataQuery();
      switch (levelOneOkoaData) {
      }
      break;

    case 8:
      const lipaMdogoMdogo = lipaMdogoMdogoQuery();
      switch (lipaMdogoMdogo) {
      }
      break;
  }
} else {
  alert("Connection Problem or Invalid USSD");
}

///////////////////////////////////////// HELPER FUNCTIONS///////////////////////////////////

function query(choice, base, limit) {
  if (choice >= base && choice <= limit) {
    return choice;
  } else {
    alert("Invalid Input");
  }
}

/////////////////////NYAKUA QUERIES////////////////////////////////

function levelOneNyakuaQuery() {
  const choice = parseInt(
    prompt(
      "1: Buy Nyakua Bundles \n2:Check My Target \n3:Check My Daily Usage \n4:Check My Free Data Balance \n5:Join Data Bonus \n6: Opt Out \n0: BACK 00: HOME"
    )
  );
  if (choice) {
    return choice;
  } else {
    alert("Invalid Input");
  }
}

/////////////MY DATA DEALS QUERIES//////////////////////////////////
function levelOneDataDealsQuery() {
  const choice = parseInt(
    prompt(
      "1: Sh 99 = 1GB, 24hr \n2: Sh 20 = 1GB, 1hr \n3: Sh 3000 = 25GB, 30 Days \n4:Hot Deals (Tunukiwa) \n0: BACK 00: HOME"
    )
  );
  if (choice) {
    return choice;
  } else {
    alert("Invalid Input");
  }
}

///////////////////////DAILY BUNDLES NEW ////////////////////////////////
function levelOneDailyBundlesNEWquery() {
  const choice = parseInt(
    prompt(
      "1: Buy For My Number \n2: Buy for Other Number \n3: Stop Autorenew \n0: BACK 00: HOME"
    )
  );
  if (choice >= 1) {
    return choice;
  } else {
    alert("Invalid Input");
  }
}

///////////////////////////////////WEEKLY BUNDLES NEW///////////////////////
function levelOneDailyBundlesNEWquery() {
  const choice = parseInt(
    prompt(
      "1: Buy For My Number \n2: Buy for Other Number \n3: Stop Autorenew \n0: BACK 00: HOME"
    )
  );
  if (choice >= 1) {
    return choice;
  } else {
    alert("Invalid Input");
  }
}
