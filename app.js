const USSD = prompt("Enter USSD KEY:");

if (USSD === "*544#") {
  const option = entryPointQuery();

  switch (option) {
    case 0:
      const levelOneNyakuaOptions = nyakuaQuery();
      switch (levelOneNyakuaOptions) {
        case 1:
          const NyakuaBonusOption = NyakuaBonusQuery();
          switch (NyakuaBonusOption) {
            case 1:
              const NyakuaDailyOption = NyakuaDailyQuery();
              switch (NyakuaDailyOption) {
                case 1:
                  const BuyOption = BuyOptionQuery();
                  switch (BuyOption) {
                    case 1:
                      const paymentOption = paymentOptionQuery(35, 35, 10);
                      switch (paymentOption) {
                        case 1:
                          const acceptOrRejectOption = acceptOrRejectQuery(
                            35,
                            35,
                            10
                          );
                          switch (acceptOrRejectOption) {
                            case 1:
                              successfulDataPurchase(35, 35, 10);
                              break;
                          }
                      }
                  }
              }
              break;
          }
          break;
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

function BuyOptionQuery() {
  const choice = parseInt(
    prompt("\n1: Buy Once \n2: Auto Renew \n0: BACK 00: HOME")
  );
  return query(choice, 1, 2);
}

function paymentOptionQuery(dataPlan, smsPlan, Price) {
  const choice = parseInt(
    prompt(
      `Buy ${dataPlan}MB + ${smsPlan}SMS @ Sh ${Price} using: \n1: Airtime \n2: MPESA \n0: BACK 00: HOME`
    )
  );
  return query(choice, 1, 2);
}

function acceptOrRejectQuery(dataPlan, smsPlan, Price) {
  const choice = parseInt(
    prompt(
      `Do you Accept to purchase ${dataPlan}MB + ${smsPlan}SMS @ Sh ${Price} valid for 24Hrs: \n1: Accept \n2: Cancel \n0: BACK 00: HOME`
    )
  );
  return query(choice, 1, 2);
}

function successfulDataPurchase(dataPlan, smsPlan, Price) {
  alert(
    `You have successfully purchased ${dataPlan}MB + ${smsPlan}SMS @ Sh ${Price} valid for 24Hrs. Thank you for choosing Safaricom. `
  );
}

///////////////////////////USSD ENTRY POINT////////////////////////////

function entryPointQuery() {
  const choice = parseInt(
    prompt(
      "0: Nyakua Bonus \n1: My Data Deals \n2: Daily Bundles NEW \n3: Weekly  Bundles NEW \n4: Monthly Bundles NEW \n5: No Expiry Bundles \n6: Entertainment Bundles \n7: Okoa Data \n8: Lipa Mdogo Mdogo \n98: MORE \n0: BACK 00: HOME"
    )
  );
  return query(choice, 0, 8);
}

/////////////////////NYAKUA QUERIES////////////////////////////////

function nyakuaQuery() {
  const choice = parseInt(
    prompt(
      "Nyakua Bonus \n1: Buy Nyakua Bundles \n2:Check My Target \n3:Check My Daily Usage \n4:Check My Free Data Balance \n5:Join Data Bonus \n6: Opt Out \n0: BACK 00: HOME"
    )
  );
  return query(choice, 1, 7);
}

function NyakuaBonusQuery() {
  const choice = parseInt(
    prompt(
      "\n1: Daily Bundles \n2:Weekly Bundles \n3:Monthly Bundles \n4:Bundles With No Expiry "
    )
  );
  return query(choice, 1, 4);
}

function NyakuaDailyQuery() {
  const choice = parseInt(
    prompt(
      "\n1: Sh 10: 35MB + 25SMS \n2: Sh 20: 100MB + 70SMS + FREE WhatsApp  \n3: Sh50: 300MB + 200SMS + FREE WhatsApp \n4:Sh 100: 1GB + 200SMS + FREE WhatsApp \n5: Power Hour 250MB @ Sh 19 With \n0:BACK 00:HOME 98:MORE "
    )
  );
  return query(choice, 1, 5);
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
