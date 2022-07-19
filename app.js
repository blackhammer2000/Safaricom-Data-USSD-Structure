const USSD = prompt("Enter USSD KEY:");

if (USSD === "*544#") {
  const option = entryPointQuery();

  switch (option) {
    case 0:
      const levelOneNyakuaOptions = nyakuaQuery();
      switch (levelOneNyakuaOptions) {
        case 1:
          const NyakuaBonusOption = NyakuaBuyBundlesQuery();
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
                              successfulDataPurchase(35, 35, 10, "24HRS");
                              break;
                            case 2:
                              cancelPurchase();
                              break;
                          }
                      }
                  }
              }
              break;
          }
          break;
        case 2:
          checkMyTargetQuery(1245);
          break;
        case 3:
          checkMyDailyUsage(45, 80);
          break;
        case 4:
          checkFreeDataBalance(234);
          break;
        case 5:
          joinDataBonusQuery("subscribed");
          break;
        case 6:
          optOutNyakua();
          break;
        case 7:
          const howItWorksOption = howItWorksQuery();
          switch (howItWorksOption) {
            case 1:
              howToAchieveTarget();
              break;
            case 2:
              howMuchDoIget(75);
              break;
            case 3:
              whichBundlesQualify();
              break;
            case 4:
              whichBundlesDoNotQualify();
              break;
          }
      }
      break;

    case 1:
      const levelOneDataDealsOption = levelOneDataDealsQuery();
      switch (levelOneDataDealsOption) {
        case 1:
          const oneHourPaymentOption = paymentOptionQuery(1000, 0, 20);
          switch (oneHourPaymentOption) {
            case 1:
              const oneHourAcceptOrRejectOption = acceptOrRejectQuery(
                1000,
                0,
                20
              );
              switch (oneHourAcceptOrRejectOption) {
                case 1:
                  successfulDataPurchase(1000, 0, 20, "1hr");
                  break;
                case 2:
                  cancelPurchase();
                  break;
              }
          }
          break;
        case 2:
          const daily4GBpaymentOption = paymentOptionQuery(
            4000,
            0,
            300,
            "24hr"
          );
          switch (daily4GBpaymentOption) {
            case 1:
              const daily4GBacceptOrRejectOption = acceptOrRejectQuery(
                4000,
                0,
                300,
                "24hr"
              );
              switch (daily4GBacceptOrRejectOption) {
                case 1:
                  successfulDataPurchase(4000, 0, 300, "24hr");
                  break;
                case 2:
                  cancelPurchase();
                  break;
              }
              break;
          }
          break;

        case 3:
          const monthly2GBpaymentOption = paymentOptionQuery(
            2000,
            0,
            250,
            "30 Days"
          );
          switch (monthly2GBpaymentOption) {
            case 1:
              const monthly2GBacceptOrReject = acceptOrRejectQuery(
                2000,
                0,
                250,
                "30 Days"
              );
              switch (monthly2GBacceptOrReject) {
                case 1:
                  successfulDataPurchase(2000, 0, 250, "30 Days");
                  break;
                case 2:
                  cancelPurchase();
                  break;
              }
              break;
          }
          break;
        case 4:
          const monthly5GBpaymentOption = paymentOptionQuery(
            2000,
            0,
            250,
            "30 Days"
          );
          switch (monthly5GBpaymentOption) {
            case 1:
              const monthly5GBacceptOrReject = acceptOrRejectQuery(
                5000,
                0,
                500,
                "30 Days"
              );
              switch (monthly5GBacceptOrReject) {
                case 1:
                  successfulDataPurchase(5000, 0, 500, "30 Days");
                  break;
                case 2:
                  cancelPurchase();
                  break;
              }
              break;
          }
          break;
        case 5:
          const monthly30GBpaymentOption = paymentOptionQuery(
            30000,
            0,
            1000,
            "30 Days"
          );
          switch (monthly30GBpaymentOption) {
            case 1:
              const monthly30GBacceptOrReject = acceptOrRejectQuery(
                30000,
                0,
                1000,
                "30 Days"
              );
              switch (monthly30GBacceptOrReject) {
                case 1:
                  successfulDataPurchase(1000, 0, 1000, "30 Days(1GB/Day)");
                  break;
                case 2:
                  cancelPurchase();
                  break;
              }
              break;
          }
          break;
      }
      break;

    case 2:
      const levelOneDailyBundlesNEW = dailyBundlesNEWquery();
      switch (levelOneDailyBundlesNEW) {
        case 1:
          const dailyBundlesOption = dailyBundlesNEWquery();
          switch (dailyBundlesOption) {
            case 1:
              const buy35MbOption = BuyOptionQuery();
              switch (buy35MbOption) {
                case 1:
                  const buy35MbPaymentOption = paymentOptionQuery(35, 25, 10);
                  switch (buy35MbPaymentOption) {
                    case 1:
                      const buy35MbOptionAcceptOrReject = acceptOrRejectQuery(
                        35,
                        25,
                        10,
                        "24hr"
                      );
                      switch (buy35MbOptionAcceptOrReject) {
                        case 1:
                          successfulDataPurchase(35, 25, 10, "24hr");
                          break;
                        case 2:
                          cancelPurchase();
                          break;
                      }
                      break;
                  }
                  break;
              }
              break;

            case 2:
              const buyForMyNumberOptions = NyakuaDailyQuery();
              switch (buyForMyNumberOptions) {
                case 1:
                  const buy10MbPaymentOption = paymentOptionQuery(35, 25, 10);
                  switch (buy10MbPaymentOption) {
                    case 1:
                      const buy10MbAcceptOrRejectOption = acceptOrRejectQuery(
                        35,
                        25,
                        10
                      );
                      switch (buy10MbAcceptOrRejectOption) {
                        case 1:
                          successfulDataPurchase(35, 25, 10, "24hr");
                          break;
                        case 2:
                          cancelPurchase();
                          break;
                      }
                  }
                  break;
                case 2:
                  const buy100MbPaymentOption = paymentOptionQuery(100, 70, 20);
                  switch (buy100MbPaymentOption) {
                    case 1:
                      const buy100MbAcceptOrRejectOption = acceptOrRejectQuery(
                        100,
                        70,
                        20
                      );
                      switch (buy100MbAcceptOrRejectOption) {
                        case 1:
                          successfulDataPurchase(100, 70, 20, "24hr");
                          break;
                        case 2:
                          cancelPurchase();
                          break;
                      }
                  }
                  break;

                case 3:
                  const buy300MbPaymentOption = paymentOptionQuery(
                    300,
                    200,
                    50
                  );
                  switch (buy300MbPaymentOption) {
                    case 1:
                      const buy300MbAcceptOrRejectOption = acceptOrRejectQuery(
                        300,
                        200,
                        50
                      );
                      switch (buy300MbAcceptOrRejectOption) {
                        case 1:
                          successfulDataPurchase(300, 200, 50, "24hr");
                          break;
                        case 2:
                          cancelPurchase();
                          break;
                      }
                  }
                  break;
                case 4:
                  const buy1GBPaymentOption = paymentOptionQuery(
                    1000,
                    200,
                    100
                  );
                  switch (buy1GBPaymentOption) {
                    case 1:
                      const buy1GBAcceptOrRejectOption = acceptOrRejectQuery(
                        1000,
                        200,
                        100
                      );
                      switch (buy1GBAcceptOrRejectOption) {
                        case 1:
                          successfulDataPurchase(1000, 200, 100, "24hr");
                          break;
                        case 2:
                          cancelPurchase();
                          break;
                      }
                  }
                  break;
              }
              break;
          }
          break;
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

function paymentOptionQuery(dataPlan, smsPlan, price) {
  const data = dataPlan >= 1000 ? dataPlan / 1000 : dataPlan;
  const dataSuffix = dataPlan >= 1000 ? "GB" : "MB";
  const smsSuffix = smsPlan > 0 ? "SMS" : "";
  const choice = parseInt(
    prompt(
      `Buy ${data}${dataSuffix} + ${
        smsPlan > 0 ? smsPlan : ""
      }${smsSuffix} @ Sh ${price} using: \n1: Airtime \n2: MPESA \n0: BACK 00: HOME`
    )
  );
  return query(choice, 1, 2);
}

function acceptOrRejectQuery(dataPlan, smsPlan, price, validity) {
  const data = dataPlan >= 1000 ? dataPlan / 1000 : dataPlan;
  const dataSuffix = dataPlan >= 1000 ? "GB" : "MB";
  const smsSuffix = smsPlan > 0 ? "SMS" : "";

  const choice = parseInt(
    prompt(
      `Do you Accept to purchase ${data}${dataSuffix} + ${
        smsPlan > 0 ? smsPlan : ""
      }${smsSuffix} @ Sh ${price} valid for ${validity}: \n1: Accept \n2: Cancel \n0: BACK 00: HOME`
    )
  );
  return query(choice, 1, 2);
}

function successfulDataPurchase(dataPlan, smsPlan, Price, validity) {
  const dataSuffix = dataPlan >= 1000 ? "GB" : "MB";
  const smsSuffix = smsPlan > 0 ? "SMS" : "";
  alert(
    `You have successfully purchased ${
      dataPlan >= 1000 ? dataPlan / 1000 : dataPlan
    }${dataSuffix} + ${smsPlan}SMS @ Sh ${Price} valid for ${validity}. Thank you for choosing Safaricom. `
  );
}

function cancelPurchase() {
  alert(`Purchase canceled...Thank for choosing Safaricom.`);
}

function checkMyTargetQuery(target) {
  alert(
    `Spend your target of ${target}MB and get ${target}MB Nyakua Bonus. To achieve your Nyakua Bonus quickly dial *544# and buy a bundle.`
  );
}

function checkMyDailyUsage(usage, bonus) {
  alert(
    `Your Usage for today is ${usage}MB. To achieve your Nyakua Bonus target faster, buy a bundle by dialing *544# and use to get up to ${bonus}% Extra Data everyday.`
  );
}

function checkFreeDataBalance(balance) {
  alert(
    `You will receive  SMS shortly. Simply dial *544# to Buy or Okoa Data and Browse bila waas!!`
  );

  const suffix = balance > 0 ? MB : "";

  alert(
    `Your current balance is ${balance}${suffix} \nClick on https://safaricom.com/account/usage.Click on  https://safaricom.com/account/usage to view your data usage.`
  );
}

function joinDataBonusQuery(subscriptionStatus) {
  if (subscriptionStatus === "subscribed") {
    alert(`Dear customer you are already subscribed to Nyakua Bonus.`);
  } else {
  }
}

function optOutNyakua() {
  alert(`You have successfuly opted out of Nyakua Bonus.`);
}

function howToAchieveTarget() {
  alert(`Browse more to achieve your daily.`);
}

function howMuchDoIget(bonus) {
  alert(`Get ${bonus}% when you achieve your daily target.`);
}

function whichBundlesQualify() {
  alert(
    `Daily Bundles, Weekly Bundles, Monthly Bundles and No Expiry Bundles qualify.`
  );
}

function whichBundlesDoNotQualify() {
  alert(
    `Promotional Bundles, Data Deals, Tunukiwa and Free Bundles do not qualify for Nyakua Bonus.`
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

function NyakuaBuyBundlesQuery() {
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

function howItWorksQuery() {
  const choice = parseInt(
    prompt(
      "\n1: How do I achieve my target \n2: How much do I get  \n3: Which bundles qualify \n4: Which bundles do not qualify  \n0:BACK"
    )
  );
  return query(choice, 1, 4);
}

/////////////MY DATA DEALS QUERIES//////////////////////////////////
function levelOneDataDealsQuery() {
  const choice = parseInt(
    prompt(
      "1: Sh 99 = 1GB, 24hr \n2: Sh 20 = 1GB, 1hr \n3: Sh 3000 = 25GB, 30 Days \n4:Hot Deals (Tunukiwa) \n0: BACK 00: HOME"
    )
  );

  return query(choice, 1, 4);
}

///////////////////////DAILY BUNDLES NEW ////////////////////////////////
function dailyBundlesNEWquery() {
  const choice = parseInt(
    prompt(
      "1: Buy 35MB + 25SMS @ Sh10 \n2: Buy For My Number \n3: Buy for Other Number \n4: Stop Autorenew \n0: BACK 00: HOME"
    )
  );

  return query(choice, 1, 4);
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
