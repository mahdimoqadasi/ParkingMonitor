const standaloneMode =
  window.navigator.standalone === true ||
  window.matchMedia("(display-mode: standalone)").matches ||
  window.matchMedia("(display-mode: fullscreen)").matches;

document.documentElement.classList.toggle("standalone-mode", standaloneMode);

const schedule = [
  {
    "date": "1405/04/26",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/04/27",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/04/28",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/04/29",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/04/30",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/04/31",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/05/01",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/02",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/03",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/05/04",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/05/05",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/05/06",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/05/07",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/05/08",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/09",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/10",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/05/11",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/05/12",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/05/13",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/14",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/05/15",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/16",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/17",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/05/18",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/05/19",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/05/20",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/05/21",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/22",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/23",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/24",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/05/25",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/05/26",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/05/27",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/05/28",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/05/29",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/30",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/05/31",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/06/01",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/06/02",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/06/03",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/06/04",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/05",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/06",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/07",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/06/08",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/09",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/06/10",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/06/11",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/06/12",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/13",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/14",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/06/15",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/06/16",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/06/17",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/06/18",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/06/19",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/20",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/21",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/06/22",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/06/23",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/06/26",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/27",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/06/28",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/06/29",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/06/30",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/06/31",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/07/01",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/02",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/03",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/04",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/07/05",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/07/06",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/07/07",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/07/08",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/07/09",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/10",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/11",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/07/12",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/07/13",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  },
  {
    "date": "1405/07/14",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهشید"
      },
      {
        "parking": "20",
        "person": "علیرضا"
      },
      {
        "parking": "21",
        "person": "جعفر"
      }
    ]
  },
  {
    "date": "1405/07/15",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "خسروان"
      },
      {
        "parking": "20",
        "person": "مهدی"
      },
      {
        "parking": "21",
        "person": "امین"
      }
    ]
  },
  {
    "date": "1405/07/16",
    "weekday": "پنجشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/17",
    "weekday": "جمعه",
    "assignments": [
      {
        "parking": "19",
        "person": ""
      },
      {
        "parking": "20",
        "person": ""
      },
      {
        "parking": "21",
        "person": ""
      }
    ]
  },
  {
    "date": "1405/07/18",
    "weekday": "شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مصطفی"
      },
      {
        "parking": "20",
        "person": "مهشید"
      },
      {
        "parking": "21",
        "person": "علیرضا"
      }
    ]
  },
  {
    "date": "1405/07/19",
    "weekday": "یکشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "جعفر"
      },
      {
        "parking": "20",
        "person": "خسروان"
      },
      {
        "parking": "21",
        "person": "مهدی"
      }
    ]
  },
  {
    "date": "1405/07/20",
    "weekday": "دوشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "امین"
      },
      {
        "parking": "20",
        "person": "مصطفی"
      },
      {
        "parking": "21",
        "person": "خسروان"
      }
    ]
  },
  {
    "date": "1405/07/21",
    "weekday": "سه شنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "علیرضا"
      },
      {
        "parking": "20",
        "person": "جعفر"
      },
      {
        "parking": "21",
        "person": "مهشید"
      }
    ]
  },
  {
    "date": "1405/07/22",
    "weekday": "چهارشنبه",
    "assignments": [
      {
        "parking": "19",
        "person": "مهدی"
      },
      {
        "parking": "20",
        "person": "امین"
      },
      {
        "parking": "21",
        "person": "مصطفی"
      }
    ]
  }
];

const todayCard = document.querySelector("#todayCard");
const tomorrowCard = document.querySelector("#tomorrowCard");
const todayStatus = document.querySelector("#todayStatus");
const liveDateLabel = document.querySelector("#liveDateLabel");
const liveHour = document.querySelector("#liveHour");
const liveMinute = document.querySelector("#liveMinute");
const liveSecond = document.querySelector("#liveSecond");
const parkingHint = document.querySelector("#parkingHint");
const personChips = document.querySelector("#personChips");
const scheduleList = document.querySelector("#scheduleList");
const selectedPersonStorageKey = "parkingMonitor.selectedPerson";
let activePerson = readSavedPerson();

function div(className, text) {
  const element = document.createElement("div");
  element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function pad(number) {
  return String(number).padStart(2, "0");
}

function gregorianToJalali(gy, gm, gd) {
  const gdm = [0,31,59,90,120,151,181,212,243,273,304,334];
  let jy = gy <= 1600 ? 0 : 979;
  gy -= gy <= 1600 ? 621 : 1600;
  const gy2 = gm > 2 ? gy + 1 : gy;
  let days = 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100)
    + Math.floor((gy2 + 399) / 400) - 80 + gd + gdm[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }
  const jm = days < 186 ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  const jd = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
  return `${jy}/${pad(jm)}/${pad(jd)}`;
}

function addDays(date, days) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function browserJalaliDate(offset = 0) {
  const date = addDays(new Date(), offset);
  return gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

function jalaliDateNumber(dateText) {
  return Number(String(dateText).replaceAll("/", ""));
}

function toPersianDigits(value) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

function getPersianWeekday(date) {
  return new Intl.DateTimeFormat("fa-IR", { weekday: "long" }).format(date);
}

function renderLiveDateTime() {
  const now = new Date();
  const jalaliDate = gregorianToJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
  liveDateLabel.textContent = `${getPersianWeekday(now)} ${toPersianDigits(jalaliDate)}`;
  liveHour.textContent = toPersianDigits(pad(now.getHours()));
  liveMinute.textContent = toPersianDigits(pad(now.getMinutes()));
  liveSecond.textContent = toPersianDigits(pad(now.getSeconds()));
}

function readSavedPerson() {
  try {
    return localStorage.getItem(selectedPersonStorageKey) || "";
  } catch {
    return "";
  }
}

function saveSelectedPerson(person) {
  try {
    if (person) {
      localStorage.setItem(selectedPersonStorageKey, person);
    } else {
      localStorage.removeItem(selectedPersonStorageKey);
    }
  } catch {
    // Ignore storage errors, e.g. private browsing restrictions.
  }
}

function renderPersonChips() {
  const names = [...new Set(
    schedule.flatMap((day) => day.assignments.map((assignment) => assignment.person).filter(Boolean))
  )].sort((a, b) => a.localeCompare(b, "fa"));

  personChips.replaceChildren();
  const allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = `person-chip all-chip ${activePerson ? "" : "active"}`;
  allChip.textContent = "همه";
  allChip.addEventListener("click", () => {
    activePerson = "";
    saveSelectedPerson(activePerson);
    renderPersonChips();
    renderList();
  });
  personChips.append(allChip);

  names.forEach((name) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `person-chip ${name === activePerson ? "active" : ""}`;
    chip.textContent = name;
    chip.addEventListener("click", () => {
      activePerson = activePerson === name ? "" : name;
      saveSelectedPerson(activePerson);
      renderPersonChips();
      renderList();
    });
    personChips.append(chip);
  });
}

function renderCard(day, options = {}) {
  if (!day) {
    const empty = div("notice", options.emptyText || "برای این تاریخ رزروی ثبت نشده است.");
    return empty;
  }

  const card = div(`day-card ${options.featured ? "featured" : ""}`);
  const header = div("day-header");
  header.append(div("day-title", day.weekday || "بدون روز"));
  header.append(div("day-date", day.date));
  card.append(header);

  const grid = div("parking-grid");
  day.assignments.forEach((assignment) => {
    const cell = div("parking-cell");
    cell.append(div("parking-number", assignment.parking));
    cell.append(div(assignment.person ? "person-name" : "person-name empty-name", assignment.person || "ثبت نشده"));
    grid.append(cell);
  });
  card.append(grid);
  return card;
}

function replaceContent(target, node) {
  target.replaceChildren(node);
}

function findByDate(dateText) {
  return schedule.find((day) => day.date === dateText);
}

function renderTopCards() {
  const today = browserJalaliDate(0);
  const tomorrow = browserJalaliDate(1);
  const todayData = findByDate(today);
  const tomorrowData = findByDate(tomorrow);

  todayStatus.textContent = todayData ? "رزرو امروز" : `امروز: ${today}`;
  replaceContent(todayCard, renderCard(todayData, {
    featured: true,
    emptyText: `برای امروز (${today}) رزروی در فایل ثبت نشده است.`
  }));
  replaceContent(tomorrowCard, renderCard(tomorrowData, {
    emptyText: `برای فردا (${tomorrow}) رزروی در فایل ثبت نشده است.`
  }));
}

function matchesSearch(day, query) {
  if (!query) return true;
  return day.assignments.some((assignment) => assignment.person.includes(query));
}

function renderParkingHint() {
  if (!activePerson) {
    parkingHint.textContent = "نام خود را انتخاب کنید";
    parkingHint.classList.remove("active");
    return;
  }

  parkingHint.classList.add("active");
  const today = browserJalaliDate(0);
  const tomorrow = browserJalaliDate(1);
  const todayNumber = jalaliDateNumber(today);
  const personDays = schedule
    .filter((day) => matchesSearch(day, activePerson))
    .filter((day) => jalaliDateNumber(day.date) >= todayNumber);

  const nextDay = personDays[0];
  if (!nextDay) {
    parkingHint.textContent = "رزروی برای روزهای آینده نداری";
  } else if (nextDay.date === today) {
    parkingHint.textContent = "امروز پارکینگ داری";
  } else if (nextDay.date === tomorrow) {
    parkingHint.textContent = "فردا پارکینگ داری";
  } else {
    parkingHint.textContent = `${nextDay.weekday} پارکینگ داری`;
  }
}

function renderList() {
  const query = activePerson;
  const afterTomorrowNumber = jalaliDateNumber(browserJalaliDate(2));
  const filtered = schedule
    .filter((day) => jalaliDateNumber(day.date) >= afterTomorrowNumber)
    .filter((day) => matchesSearch(day, query));

  scheduleList.replaceChildren();
  if (!filtered.length) {
    scheduleList.append(div("notice", query ? "رزروی برای روزهای آینده پیدا نشد." : "روز آینده‌ای در برنامه ثبت نشده است."));
  } else {
    filtered.forEach((day) => scheduleList.append(renderCard(day)));
  }

  renderParkingHint();
}

renderLiveDateTime();
setInterval(renderLiveDateTime, 1000);
renderPersonChips();
renderTopCards();
renderList();
