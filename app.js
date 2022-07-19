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
                          break;
                      }
                      break;
                  }
                  break;
                case 2:
                  const BuyOption2 = BuyOptionQuery();
                  switch (BuyOption2) {
                    case 1:
                      const paymentOption2 = paymentOptionQuery(100, 70, 20);
                      switch (paymentOption2) {
                        case 1:
                          const acceptOrRejectOption2 = acceptOrRejectQuery(
                            100,
                            70,
                            20
                          );
                          switch (acceptOrRejectOption2) {
                            case 1:
                              successfulDataPurchase(100, 70, 20, "24HRS");
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
                case 3:
                  const BuyOption3 = BuyOptionQuery();
                  switch (BuyOption3) {
                    case 1:
                      const paymentOption3 = paymentOptionQuery(300, 200, 50);
                      switch (paymentOption3) {
                        case 1:
                          const acceptOrRejectOption3 = acceptOrRejectQuery(
                            300,
                            200,
                            50,
                            "24hrs"
                          );
                          switch (acceptOrRejectOption3) {
                            case 1:
                              successfulDataPurchase(300, 200, 50, "24hrs");
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
              }
              break;
            case 4:
              const BuyOption4 = BuyOptionQuery();
              switch (BuyOption4) {
                case 1:
                  const paymentOption4 = paymentOptionQuery(1000, 200, 100);
                  switch (paymentOption4) {
                    case 1:
                      const acceptOrRejectOption4 = acceptOrRejectQuery(
                        1000,
                        200,
                        100,
                        "24hrs"
                      );
                      switch (acceptOrRejectOption4) {
                        case 1:
                          successfulDataPurchase(1000, 200, 100, "24HRS");
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
            case 5:
              const powerHourOption = BuyOptionQuery();
              switch (powerHourOption) {
                case 1:
                  const powerHourPaymentOption = paymentOptionQuery(250, 0, 19);
                  switch (powerHourPaymentOption) {
                    case 1:
                      const powerHourAcceptOrRejectOption = acceptOrRejectQuery(
                        250,
                        0,
                        19,
                        "1hr"
                      );
                      switch (powerHourAcceptOrRejectOption) {
                        case 1:
                          successfulDataPurchase(250, 0, 19, "1hr");
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
              const weeklyNyakuaOptions = weeklyNyakuaQuery();
              switch (weeklyNyakuaOptions) {
                case 1:
                  const option1 = BuyOptionQuery();
                  switch (option1) {
                    case 1:
                      const option1PaymentChoice = paymentOptionQuery(
                        200,
                        0,
                        50
                      );
                      switch (option1PaymentChoice) {
                        case 1:
                          const option1AcceptOrRejectOption =
                            acceptOrRejectQuery(200, 0, 50, "7 Days");
                          switch (option1AcceptOrRejectOption) {
                            case 1:
                              successfulDataPurchase(200, 0, 50, "7 Days");
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
                  const option2 = BuyOptionQuery();
                  switch (option2) {
                    case 1:
                      const option2PaymentChoice = paymentOptionQuery(
                        500,
                        0,
                        100,
                        "WhatsApp"
                      );
                      switch (option2PaymentChoice) {
                        case 1:
                          const option2AcceptOrRejectOption =
                            acceptOrRejectQuery(
                              500,
                              0,
                              100,
                              "7 Days",
                              "WhatsApp"
                            );
                          switch (option2AcceptOrRejectOption) {
                            case 1:
                              successfulDataPurchase(
                                500,
                                0,
                                100,
                                "7 Days",
                                "WhatsApp"
                              );
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
                case 3:
                  const option3 = BuyOptionQuery();
                  switch (option3) {
                    case 1:
                      const option3PaymentChoice = paymentOptionQuery(
                        1500,
                        0,
                        250,
                        "WhatsApp"
                      );
                      switch (option3PaymentChoice) {
                        case 1:
                          const option3AcceptOrRejectOption =
                            acceptOrRejectQuery(
                              1500,
                              0,
                              250,
                              "7 Days",
                              "WhatsApp"
                            );
                          switch (option3AcceptOrRejectOption) {
                            case 1:
                              successfulDataPurchase(
                                1500,
                                0,
                                250,
                                "7 Days",
                                "WhatsApp"
                              );
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
                case 4:
                  const option4 = BuyOptionQuery();
                  switch (option4) {
                    case 1:
                      const option4PaymentChoice = paymentOptionQuery(
                        4000,
                        0,
                        500,
                        "WhatsApp"
                      );
                      switch (option4PaymentChoice) {
                        case 1:
                          const option4AcceptOrRejectOption =
                            acceptOrRejectQuery(
                              4000,
                              0,
                              500,
                              "7 Days",
                              "WhatsApp"
                            );
                          switch (option4AcceptOrRejectOption) {
                            case 1:
                              successfulDataPurchase(
                                4000,
                                0,
                                500,
                                "7 Days",
                                "WhatsApp"
                              );
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
              }
              break;
            case 3:
              const monthlyNyakuaOptions = monthlyNyakuaQuery();
              switch (monthlyNyakuaOptions) {
                case 1:
                  alert("Error in application.");
                  break;
                case 2:
                  const monthlyDataOnlyOptions = monthlyDataOnlyQuery();
                  switch (monthlyDataOnlyOptions) {
                    case 1:
                      const option1 = BuyOptionQuery();
                      switch (option1) {
                        case 1:
                          const option1PaymentChoice = paymentOptionQuery(
                            1000,
                            0,
                            250
                          );
                          switch (option1PaymentChoice) {
                            case 1:
                              const option1AcceptOrRejectOption =
                                acceptOrRejectQuery(1000, 0, 250, "30 Days");
                              switch (option1AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    1000,
                                    0,
                                    500,
                                    "30 Days"
                                  );
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
                      const option2 = BuyOptionQuery();
                      switch (option2) {
                        case 1:
                          const option2PaymentChoice = paymentOptionQuery(
                            2500,
                            0,
                            500,
                            "WhatsApp"
                          );
                          switch (option2PaymentChoice) {
                            case 1:
                              const option2AcceptOrRejectOption =
                                acceptOrRejectQuery(
                                  2500,
                                  0,
                                  500,
                                  "30 Days",
                                  "WhatsApp"
                                );
                              switch (option2AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    2500,
                                    0,
                                    500,
                                    "30 Days",
                                    "WhatsApp"
                                  );
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
                    case 3:
                      const option3 = BuyOptionQuery();
                      switch (option3) {
                        case 1:
                          const option3PaymentChoice = paymentOptionQuery(
                            7000,
                            0,
                            1000,
                            "WhatsApp"
                          );
                          switch (option3PaymentChoice) {
                            case 1:
                              const option3AcceptOrRejectOption =
                                acceptOrRejectQuery(
                                  7000,
                                  0,
                                  1000,
                                  "30 Days",
                                  "WhatsApp"
                                );
                              switch (option3AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    7000,
                                    0,
                                    1000,
                                    "30 Days",
                                    "WhatsApp"
                                  );
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
                    case 4:
                      const option4 = BuyOptionQuery();
                      switch (option4) {
                        case 1:
                          const option4PaymentChoice = paymentOptionQuery(
                            20000,
                            0,
                            2000,
                            "WhatsApp"
                          );
                          switch (option4PaymentChoice) {
                            case 1:
                              const option4AcceptOrRejectOption =
                                acceptOrRejectQuery(
                                  20000,
                                  0,
                                  2000,
                                  "30 Days",
                                  "WhatsApp"
                                );
                              switch (option4AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    20000,
                                    0,
                                    2000,
                                    "30 Days",
                                    "WhatsApp"
                                  );
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
                  }
                  break;
                case 3:
                  const allInOneOptions = monthlyAllInOneQuery();
                  switch (allInOneOptions) {
                    case 1:
                      const option1 = BuyOptionQuery();
                      switch (option1) {
                        case 1:
                          const option1PaymentChoice = paymentOptionQuery(
                            5000,
                            1000,
                            1050,
                            "WhatsApp"
                          );
                          switch (option1PaymentChoice) {
                            case 1:
                              const option1AcceptOrRejectOption =
                                acceptOrRejectQuery(
                                  5000,
                                  1000,
                                  1050,
                                  "30 Days",
                                  "WhatsApp"
                                );
                              switch (option1AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    5000,
                                    1000,
                                    1050,
                                    "30 Days",
                                    "WhatsApp"
                                  );
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
                      const option2 = BuyOptionQuery();
                      switch (option2) {
                        case 1:
                          const option2PaymentChoice = paymentOptionQuery(
                            15000,
                            2000,
                            2100,
                            "WhatsApp"
                          );
                          switch (option2PaymentChoice) {
                            case 1:
                              const option2AcceptOrRejectOption =
                                acceptOrRejectQuery(
                                  15000,
                                  2000,
                                  2100,
                                  "30 Days",
                                  "WhatsApp"
                                );
                              switch (option2AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    15000,
                                    2000,
                                    2100,
                                    "30 Days",
                                    "WhatsApp"
                                  );
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
                    case 3:
                      const option3 = BuyOptionQuery();
                      switch (option3) {
                        case 1:
                          const option3PaymentChoice = paymentOptionQuery(
                            25000,
                            3000,
                            3150,
                            "WhatsApp"
                          );
                          switch (option3PaymentChoice) {
                            case 1:
                              const option3AcceptOrRejectOption =
                                acceptOrRejectQuery(
                                  25000,
                                  3000,
                                  3150,
                                  "30 Days",
                                  "WhatsApp"
                                );
                              switch (option3AcceptOrRejectOption) {
                                case 1:
                                  successfulDataPurchase(
                                    25000,
                                    3000,
                                    3150,
                                    "30 Days",
                                    "WhatsApp"
                                  );
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
                  }
                  break;
                case 4:
                  const otherNumber = enterOtherNumber();
                  const otherNumberMenuOptions = otherNumberMenuQuery();
                  switch (otherNumberMenuOptions) {
                    case 1:
                      const otherNumberDataOnlyOptions =
                        otherNumberDataOnlyQuery();
                      switch (otherNumberDataOnlyOptions) {
                        case 1:
                          const option1 = BuyOptionQuery();
                          switch (option1) {
                            case 1:
                              const option1PaymentChoice = paymentOptionQuery(
                                60000,
                                0,
                                5000,
                                "WhatsApp"
                              );
                              switch (option1PaymentChoice) {
                                case 1:
                                  const option1AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      60000,
                                      0,
                                      5000,
                                      "30 Days",
                                      "WhatsApp"
                                    );
                                  switch (option1AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        60000,
                                        0,
                                        5000,
                                        `30 Days for ${otherNumber}`,
                                        "WhatsApp"
                                      );
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
                          const option2 = BuyOptionQuery();
                          switch (option2) {
                            case 1:
                              const option2PaymentChoice = paymentOptionQuery(
                                40000,
                                0,
                                3000,
                                "WhatsApp"
                              );
                              switch (option2PaymentChoice) {
                                case 1:
                                  const option2AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      40000,
                                      0,
                                      3000,
                                      "30 Days",
                                      "WhatsApp"
                                    );
                                  switch (option2AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        40000,
                                        0,
                                        3000,
                                        `30 Days for ${otherNumber}`,
                                        "WhatsApp"
                                      );
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
                        case 3:
                          const option3 = BuyOptionQuery();
                          switch (option3) {
                            case 1:
                              const option3PaymentChoice = paymentOptionQuery(
                                20000,
                                0,
                                2000,
                                "WhatsApp"
                              );
                              switch (option3PaymentChoice) {
                                case 1:
                                  const option3AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      20000,
                                      0,
                                      2000,
                                      "30 Days",
                                      "WhatsApp"
                                    );
                                  switch (option3AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        20000,
                                        0,
                                        2000,
                                        `30 Days for ${otherNumber}`,
                                        "WhatsApp"
                                      );
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
                        case 4:
                          const option4 = BuyOptionQuery();
                          switch (option4) {
                            case 1:
                              const option4PaymentChoice = paymentOptionQuery(
                                7000,
                                0,
                                1000,
                                "WhatsApp"
                              );
                              switch (option4PaymentChoice) {
                                case 1:
                                  const option4AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      7000,
                                      0,
                                      1000,
                                      "30 Days",
                                      "WhatsApp"
                                    );
                                  switch (option4AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        7000,
                                        0,
                                        1000,
                                        `30 Days for ${otherNumber}`,
                                        "WhatsApp"
                                      );
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
                        case 5:
                          const option5 = BuyOptionQuery();
                          switch (option5) {
                            case 1:
                              const option5PaymentChoice = paymentOptionQuery(
                                2500,
                                0,
                                500,
                                "WhatsApp"
                              );
                              switch (option5PaymentChoice) {
                                case 1:
                                  const option5AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      2500,
                                      0,
                                      500,
                                      "30 Days",
                                      "WhatsApp"
                                    );
                                  switch (option5AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        2500,
                                        0,
                                        500,
                                        `30 Days for ${otherNumber}`,
                                        "WhatsApp"
                                      );
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
                        case 6:
                          const option6 = BuyOptionQuery();
                          switch (option6) {
                            case 1:
                              const option6PaymentChoice = paymentOptionQuery(
                                1000,
                                0,
                                250
                              );
                              switch (option6PaymentChoice) {
                                case 1:
                                  const option6AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      1000,
                                      0,
                                      250,
                                      "30 Days",
                                      "WhatsApp"
                                    );
                                  switch (option6AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        1000,
                                        0,
                                        250,
                                        `30 Days for ${otherNumber}`,
                                        "WhatsApp"
                                      );
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
                      }
                      break;
                    case 2:
                      const allInOneOtherNumberOptions = monthlyAllInOneQuery();
                      switch (allInOneOtherNumberOptions) {
                        case 1:
                          const option1 = BuyOptionQuery();
                          switch (option1) {
                            case 1:
                              const option1PaymentChoice = paymentOptionQuery(
                                5000,
                                1000,
                                1050,
                                "400MINS + WhatsApp"
                              );
                              switch (option1PaymentChoice) {
                                case 1:
                                  const option1AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      5000,
                                      1000,
                                      1050,
                                      "30 Days",
                                      "400MINS + WhatsApp"
                                    );
                                  switch (option1AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        5000,
                                        1000,
                                        1050,
                                        `30 Days for ${otherNumber}`,
                                        "400MINS + WhatsApp"
                                      );
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
                          const option2 = BuyOptionQuery();
                          switch (option2) {
                            case 1:
                              const option2PaymentChoice = paymentOptionQuery(
                                15000,
                                2000,
                                2100,
                                "1000MINS + WhatsApp"
                              );
                              switch (option2PaymentChoice) {
                                case 1:
                                  const option2AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      15000,
                                      2000,
                                      2100,
                                      "30 Days",
                                      "1000MINS + WhatsApp"
                                    );
                                  switch (option2AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        15000,
                                        2000,
                                        2100,
                                        `30 Days for ${otherNumber}`,
                                        "1000MINS + WhatsApp"
                                      );
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
                        case 3:
                          const option3 = BuyOptionQuery();
                          switch (option3) {
                            case 1:
                              const option3PaymentChoice = paymentOptionQuery(
                                25000,
                                3000,
                                3050,
                                "1500MINS + WhatsApp"
                              );
                              switch (option3PaymentChoice) {
                                case 1:
                                  const option3AcceptOrRejectOption =
                                    acceptOrRejectQuery(
                                      25000,
                                      3000,
                                      3150,
                                      "30 Days",
                                      "1500MINS + WhatsApp"
                                    );
                                  switch (option3AcceptOrRejectOption) {
                                    case 1:
                                      successfulDataPurchase(
                                        25000,
                                        3000,
                                        3150,
                                        `30 Days for ${otherNumber}`,
                                        "1500MINS + WhatsApp"
                                      );
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
                      }
                      break;
                  }
                  break;
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
                20,
                "1hr"
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
          const daily4GBpaymentOption = paymentOptionQuery(4000, 0, 300);
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
          const monthly2GBpaymentOption = paymentOptionQuery(2000, 0, 250);
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
          const monthly5GBpaymentOption = paymentOptionQuery(2000, 0, 250);
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
          const monthly30GBpaymentOption = paymentOptionQuery(30000, 0, 1000);
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
                    100,
                    "WhatsApp"
                  );
                  switch (buy1GBPaymentOption) {
                    case 1:
                      const buy1GBAcceptOrRejectOption = acceptOrRejectQuery(
                        1000,
                        200,
                        100,
                        "24hr"
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
      const levelWeeklyBundlesNEW = levelOneWeeklyBundlesNEWquery();
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
  alert("Connection Problem or Invalid MMI Code");
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

function paymentOptionQuery(dataPlan, smsPlan, price, extra) {
  const data = dataPlan >= 1000 ? dataPlan / 1000 : dataPlan;
  const dataSuffix = dataPlan >= 1000 ? "GB" : "MB";
  const smsSuffix = smsPlan > 0 ? "SMS" : "";
  const plus1 = smsPlan > 0 ? "+" : "";
  const plus2 = extra ? "+" : "";
  const choice = parseInt(
    prompt(
      `Buy ${data}${dataSuffix} ${plus1} ${
        smsPlan > 0 ? smsPlan : ""
      }${smsSuffix} ${plus2} ${
        extra ? extra : ""
      } @ Sh ${price} using: \n1: Airtime \n2: MPESA \n0: BACK 00: HOME`
    )
  );
  return query(choice, 1, 2);
}

function acceptOrRejectQuery(dataPlan, smsPlan, price, validity, extra) {
  const data = dataPlan >= 1000 ? dataPlan / 1000 : dataPlan;
  const dataSuffix = dataPlan >= 1000 ? "GB" : "MB";
  const smsSuffix = smsPlan > 0 ? "SMS" : "";
  const plus = smsPlan > 0 ? "+" : "";
  const plus2 = extra ? "+" : "";

  const choice = parseInt(
    prompt(
      `Confirm the purchase of ${data}${dataSuffix} ${plus} ${
        smsPlan > 0 ? smsPlan : ""
      }${smsSuffix} ${plus2} ${
        extra ? extra : ""
      } @ Sh ${price} valid for ${validity}: \n1: Accept \n2: Cancel \n0: BACK 00: HOME`
    )
  );
  return query(choice, 1, 2);
}

function successfulDataPurchase(dataPlan, smsPlan, Price, validity, extra) {
  const dataSuffix = dataPlan >= 1000 ? "GB" : "MB";
  const smsSuffix = smsPlan > 0 ? "SMS" : "";
  const plus = smsPlan > 0 ? "+" : "";
  const plus2 = extra ? "+" : "";
  alert(
    `Do more with Safaricom. You have successfully purchased ${
      dataPlan >= 1000 ? dataPlan / 1000 : dataPlan
    }${dataSuffix} ${plus} ${smsPlan > 0 ? smsPlan : ""}${smsSuffix} ${plus2} ${
      extra ? extra : ""
    } @ Sh ${Price} valid for ${validity}. Thank you for choosing Safaricom. `
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

function weeklyNyakuaQuery() {
  const choice = parseInt(
    prompt(
      "\n1: 200MB @ Sh50 \n2: 500MB + WhatsApp @ Sh100  \n3: 1.5GB + WhatsApp @ Sh250 \n4: 4GB + WhatsApp @ Sh500 \n0:BACK 00:HOME "
    )
  );
  return query(choice, 1, 4);
}
/**Nyakua Monthly Queries */
function monthlyNyakuaQuery() {
  const choice = parseInt(
    prompt(
      "\n1: Buy \n2: Data Only Plans  \n3: All In One \n4: Buy For Other Number \n5: Join Postpay \n6: Easy-Talk Minutes \n7: Postpay FAQs \n0:BACK 00:HOME "
    )
  );
  return query(choice, 1, 7);
}

function monthlyDataOnlyQuery() {
  const choice = parseInt(
    prompt(
      "\n1: Ksh 250: 1GB \n2: Ksh 500: 2.5GB + WhatsApp  \n3: Ksh 1000: 7GB + WhatsApp \n4: Ksh 2000: 20GB + WhatsApp \n0:BACK 00:HOME "
    )
  );
  return query(choice, 1, 4);
}

function monthlyAllInOneQuery() {
  const choice = parseInt(
    prompt(
      "\n1: Sh 1050(5GB+2GB YT+400MINS+1000SMS) \n2: Sh 2100(15GB+2GB YT+1000MINS+2000SMS)  \n3: Sh 3150(25GB+2GB YT+1500MINS+3000SMS)  \n0:BACK 00:HOME 98:MORE"
    )
  );
  return query(choice, 1, 3);
}

function enterOtherNumber() {
  const phoneNumber = prompt("Please Enter Other Number");
  if (phoneNumber.length <= 9 || phoneNumber.length >= 11) {
    alert("Enter a valid phone number.");
    return;
  } else {
    return phoneNumber;
  }
}

function otherNumberMenuQuery() {
  const choice = parseInt(
    prompt("\n1: Data Only Plans \n2: All In One \n0:BACK 00:HOME 98:MORE")
  );
  return query(choice, 1, 2);
}

function otherNumberDataOnlyQuery() {
  const choice = parseInt(
    prompt(
      "\n1: Sh5000 (60GB + WhatsApp) \n2: Sh3000 (40GB + WhatsApp)  \n3: Sh2000 (20GB + WhatsApp) \n4: Sh1000 (7GB + WhatsApp) \n5: Sh500 (2.5GB + WhatsApp) \n6: Sh250 (1GB) \n0:BACK 00:HOME 98:MORE"
    )
  );
  return query(choice, 1, 6);
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

// case 4:
//                   const option4 = BuyOptionQuery();
//                   switch (option4) {
//                     case 1:
//                       const option4PaymentChoice = paymentOptionQuery(
//                         4000,
//                         0,
//                         500,
//                         "WhatsApp"
//                       );
//                       switch (option4PaymentChoice) {
//                         case 1:
//                           const option4AcceptOrRejectOption =
//                             acceptOrRejectQuery(
//                               4000,
//                               0,
//                               500,
//                               "7 Days",
//                               "WhatsApp"
//                             );
//                           switch (option4AcceptOrRejectOption) {
//                             case 1:
//                               successfulDataPurchase(
//                                 4000,
//                                 0,
//                                 500,
//                                 "7 Days",
//                                 "WhatsApp"
//                               );
//                               break;
//                             case 2:
//                               cancelPurchase();
//                               break;
//                           }
//                           break;
//                       }
//                       break;
//                   }
//                   break;
