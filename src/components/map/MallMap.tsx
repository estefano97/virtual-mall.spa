import MapDescriptionItems from "./MapDescriptionItems";

const MallMap = () => {
  return (
    <div className="main">
      <header className="codrops-header">
        {/* <div className="codrops-links">
						<a className="codrops-icon codrops-icon--prev" href="" title="Previous Demo"><span>Previous Demo</span></a>
						<a className="codrops-icon codrops-icon--drop" href="" title="Back to the article"><span>Back to the Codrops article</span></a>
					</div> */}
        <h1>Interactive Mall Map</h1>
      </header>
      <div className="mall">
        <div className="surroundings">
          <img
            className="surroundings__map"
            src="img/surroundings.svg"
            alt="Surroundings"
          />
        </div>
        <div className="levels">
          <div className="level level--1" aria-label="Level 1">
            <svg
              className="map map--1"
              viewBox="0 0 1200 800"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Map Level 1</title>
              <polygon
                points="1035.94 787.41 1035.94 423.16 855.37 423.16 855.37 350.52 1187.28 350.52 1187.28 12.59 548.09 12.59 548.09 68.87 437.36 68.87 437.36 12.59 49.37 12.59 49.37 366.5 12.72 366.5 12.72 787.41 356.2 787.41 414.93 584.41 554.4 584.41 627.81 787.41 1035.94 787.41"
                className="map__ground"
              />
              <path
                d="M1187.28,12.59V350.52H855.37v72.64h180.58V787.41H627.81l-73.41-203H414.93l-58.73,203H12.72V366.5H49.37V12.59h388V68.87H548.08V12.59h639.19M1200,0H535.36V56.28H450.09V0H36.65V353.91H0V800H365.8l2.64-9.13L424.52,597H545.44l70.39,194.65,3,8.35h429.82V410.57H868.09V363.11H1200V0h0Z"
                className="map__outline"
              />
              <path
                d="M425.68,198.63c-6.85-14.83-46.38-30.35-58-11.24-41.24,67.9-83.63,118.16-65.12,124.22,7.55,2.48,56.77.11,94.11-54.39,21.35-31.13,31.71-52.74,29-58.59h0Z"
                className="map__lake"
              />
              <ellipse
                cx="389.64"
                cy="214.94"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <ellipse
                cx="369.54"
                cy="191.71"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <ellipse
                cx="354.59"
                cy="220.27"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <path
                d="M724.87,696.45c14.61,7.58,42.34-6.42,52.85-26.15,24.57-46.13-43.25-126.94-61.66-120.57-7.5,2.6-6.47,29.34-4.4,82.81C713.74,686.25,719.12,693.46,724.87,696.45Z"
                className="map__lake"
              />
              <ellipse
                cx="738.82"
                cy="595.48"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <ellipse
                cx="768.46"
                cy="605.4"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <ellipse
                cx="744.64"
                cy="624.92"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <polygon
                data-space="1.04"
                points="874.9,554.3 874.9,422.9 1036.1,422.9 1036.1,576.6 965.2,576.6 965.2,555"
                className="map__space"
              />
              <rect
                x="854.08"
                y="639.79"
                width="88.09"
                height="147.62"
                className="map__space"
              />
              <rect
                x="947.85"
                y="639.79"
                width="88.09"
                height="147.62"
                className="map__space"
              />
              <polygon
                points="768.46 722.99 789.65 735.1 789.65 759.31 768.46 771.42 747.27 759.31 747.27 735.1 768.46 722.99"
                className="map__space"
              />
              <rect
                x="666.88"
                y="565.62"
                width="26.26"
                height="25.99"
                className="map__space"
              />
              <rect
                data-space="1.07"
                x="716.66"
                y="354.39"
                width="110.72"
                height="136.73"
                className="map__space"
              />
              <rect
                x="602.1"
                y="354.39"
                width="110.72"
                height="136.73"
                className="map__space"
              />
              <path
                data-space="1.05"
                d="M454.76,266.19h63a24.34,24.34,0,0,1,24.47,24.21h0V489.82A24.34,24.34,0,0,1,517.74,514h-63a24.34,24.34,0,0,1-24.47-24.21h0V290.4a24.34,24.34,0,0,1,24.47-24.21h0Z"
                className="map__space"
              />
              <path
                d="M492.72,123.19c30.57,0,55.36-24.53,55.36-54.78H437.36C437.36,98.67,462.15,123.19,492.72,123.19Z"
                className="map__space"
              />
              <rect
                data-space="1.09"
                x="600"
                y="12.59"
                width="93.14"
                height="168.14"
                className="map__space"
              />
              <rect
                data-space="1.08"
                x="698.07"
                y="12"
                width="93.14"
                height="168.14"
                className="map__space"
              />
              <rect
                x="796.13"
                y="12"
                width="93.14"
                height="107.12"
                className="map__space"
              />
              <rect
                x="894.18"
                y="12"
                width="93.14"
                height="107.12"
                className="map__space"
              />
              <rect
                data-space="1.03"
                x="991.9"
                y="12"
                width="195.4"
                height="339.1"
                className="map__space"
              />
              <rect
                x="602"
                y="278.06"
                width="385.71"
                height="72.46"
                className="map__space"
              />
              <rect
                x="48.89"
                y="209.37"
                width="169.92"
                height="94.85"
                className="map__space"
              />
              <rect
                data-space="1.02"
                x="49.12"
                y="110.57"
                width="254.49"
                height="94.85"
                className="map__space"
              />
              <rect
                data-space="1.06"
                x="49.09"
                y="12.16"
                width="334.73"
                height="94.85"
                className="map__space"
              />
              <polygon
                points="898.12 182.42 919.31 194.53 919.31 218.74 898.12 230.85 876.93 218.74 876.93 194.53 898.12 182.42"
                className="map__space"
              />
              <polygon
                points="49.18 309.14 218.94 309.14 218.94 358.1 277.46 358.1 277.46 474.63 11.72 474.63 11.72 365.63 49.18 365.63 49.18 309.14"
                className="map__space"
              />
              <polygon
                data-space="1.01"
                points="12.72 685.56 153.78 685.56 153.78 747.64 215.44 747.64 215.44 712.85 263.89 712.85 263.89 787.41 12.72 787.41 12.72 685.56"
                className="map__space"
              />
              <rect
                x="48.08"
                y="501.73"
                width="35.61"
                height="35.23"
                className="map__space"
              />
              <rect
                x="94.01"
                y="501.73"
                width="35.61"
                height="35.23"
                className="map__space"
              />
              <rect
                x="139.5"
                y="501.73"
                width="35.61"
                height="35.23"
                className="map__space"
              />
              <rect
                x="48.3"
                y="547.25"
                width="35.61"
                height="35.23"
                className="map__space"
              />
              <rect
                x="94.24"
                y="547.25"
                width="35.61"
                height="35.23"
                className="map__space"
              />
              <rect
                x="139.72"
                y="547.25"
                width="35.61"
                height="35.23"
                className="map__space"
              />
              <rect
                x="282.3"
                y="478.13"
                width="26.26"
                height="25.99"
                className="map__space"
              />
              <polygon
                points="218.01 585.07 239.2 597.17 239.2 621.38 218.01 633.49 196.82 621.38 196.82 597.17 218.01 585.07"
                className="map__space"
              />
              <polygon
                points="410.01 601.42 358.8 778.44 320.06 767.07 372.92 591.6 410.01 601.42"
                className="map__space"
              />
              <polygon
                points="561.3,603.9 624,777 661.9,763.2 597.7,591.5"
                className="map__space"
              />
            </svg>
            <div className="level__pins">
              <a
                className="pin pin--1-1"
                data-category="1"
                data-space="1.01"
                href="#"
                aria-label="Pin for Apple Heart"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use fill="orange" xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--appleheart">
                    <use xlinkHref="#icon-appleheart"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-2"
                data-category="1"
                data-space="1.02"
                href="#"
                aria-label="Pin for Crazy Banana"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--bananas">
                    <use xlinkHref="#icon-bananas"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-3"
                data-category="2"
                data-space="1.03"
                href="#"
                aria-label="Pin for Folding Life"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--origami">
                    <use xlinkHref="#icon-origami"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-4"
                data-category="3"
                data-space="1.04"
                href="#"
                aria-label="Pin for Dress me not"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--dress">
                    <use xlinkHref="#icon-dress"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-5"
                data-category="4"
                data-space="1.05"
                href="#"
                aria-label="Pin for Meditation Garden"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--tree2">
                    <use xlinkHref="#icon-tree2"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-6"
                data-category="1"
                data-space="1.06"
                href="#"
                aria-label="Pin for Seed of Life"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--avocado">
                    <use xlinkHref="#icon-avocado"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-7"
                data-category="1"
                data-space="1.07"
                href="#"
                aria-label="Pin for Raw Delight"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--cake">
                    <use xlinkHref="#icon-cake"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-8"
                data-category="1"
                data-space="1.08"
                href="#"
                aria-label="Pin for The Wizard"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--mushroom">
                    <use xlinkHref="#icon-mushroom"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--1-9"
                data-category="1"
                data-space="1.09"
                href="#"
                aria-label="Pin for Smoothies &amp; Soul"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--pear">
                    <use xlinkHref="#icon-pear"></use>
                  </svg>
                </span>
              </a>
            </div>
            {/* <!-- /level__pins --> */}
          </div>
          <div className="level level--2" aria-label="Level 2">
            <svg
              className="map map--2"
              viewBox="0 0 1200 800"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Map Level 2</title>
              <polygon
                points="1035.94 787.41 1035.94 423.16 855.37 423.16 855.37 350.52 1187.28 350.52 1187.28 12.59 548.09 12.59 548.09 68.87 437.36 68.87 437.36 12.59 49.37 12.59 49.37 366.5 12.72 366.5 12.72 787.41 356.2 787.41 414.93 584.41 554.4 584.41 627.81 787.41 1035.94 787.41"
                className="map__ground"
              />
              <path
                d="M1187.28,12.59V350.52H855.37v72.64h180.58V787.41H627.81l-73.41-203H414.93l-58.73,203H12.72V366.5H49.37V12.59h388V68.87H548.08V12.59h639.19M1200,0H535.36V56.28H450.09V0H36.65V353.91H0V800H365.8l2.64-9.13L424.52,597H545.44l70.39,194.65,3,8.35h429.82V410.57H868.09V363.11H1200V0h0Z"
                className="map__outline"
              />
              <polygon
                points="768.46 722.99 789.65 735.1 789.65 759.31 768.46 771.42 747.27 759.31 747.27 735.1 768.46 722.99"
                className="map__space"
              />
              <rect
                x="666.88"
                y="565.62"
                width="26.26"
                height="25.99"
                className="map__space"
              />
              <path
                data-space="2.07"
                d="M454.76,266.19h63a24.34,24.34,0,0,1,24.47,24.21h0V489.82A24.34,24.34,0,0,1,517.74,514h-63a24.34,24.34,0,0,1-24.47-24.21h0V290.4a24.34,24.34,0,0,1,24.47-24.21h0Z"
                className="map__space"
              />
              <path
                d="M492.72,123.19c30.57,0,55.36-24.53,55.36-54.78H437.36C437.36,98.67,462.15,123.19,492.72,123.19Z"
                className="map__space"
              />
              <polygon
                points="898.12 182.42 919.31 194.53 919.31 218.74 898.12 230.85 876.93 218.74 876.93 194.53 898.12 182.42"
                className="map__space"
              />
              <rect
                x="282.3"
                y="478.13"
                width="26.26"
                height="25.99"
                className="map__space"
              />
              <polygon
                data-space="2.06"
                points="395.25 652.42 12.72 652.42 12.72 787.41 356.2 787.41 395.25 652.42"
                className="map__space"
              />
              <rect
                data-space="2.02"
                x="12.72"
                y="366.5"
                width="157.39"
                height="212.11"
                className="map__space"
              />
              <rect
                x="49.37"
                y="12.59"
                width="120.74"
                height="120.74"
                className="map__space"
              />
              <rect
                data-space="2.01"
                x="177.56"
                y="12"
                width="240.03"
                height="121.33"
                className="map__space"
              />
              <rect
                x="49.37"
                y="170.48"
                width="60.37"
                height="60.37"
                className="map__space"
              />
              <rect
                x="49.37"
                y="238.6"
                width="278.23"
                height="111.92"
                className="map__space"
              />
              <rect
                data-space="2.05"
                x="600"
                y="12"
                width="93.14"
                height="249.1"
                className="map__space"
              />
              <rect
                x="702.59"
                y="12.59"
                width="484.68"
                height="98.51"
                className="map__space"
              />
              <rect
                data-space="2.03"
                x="968.07"
                y="120.1"
                width="219.21"
                height="230.42"
                className="map__space"
              />
              <rect
                x="855.37"
                y="277.6"
                width="103.7"
                height="72.92"
                className="map__space"
              />
              <circle
                data-space="2.04"
                cx="680.68"
                cy="466.59"
                r="66.59"
                className="map__space"
              />
              <rect
                data-space="2.08"
                x="855.37"
                y="423.16"
                width="180.58"
                height="364.25"
                className="map__space"
              />
              <polygon
                points="627.81 787.41 716.09 787.41 716.09 646.58 576.88 646.58 627.81 787.41"
                className="map__space"
              />
            </svg>
            <div className="level__pins">
              <a
                className="pin pin--2-1"
                data-category="1"
                data-space="2.01"
                href="#"
                aria-label="Pin for Grilled Chipotle"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--pepper">
                    <use xlinkHref="#icon-pepper"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-2"
                data-category="2"
                data-space="2.02"
                href="#"
                aria-label="Pin for Rocketship Tech"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--rocket">
                    <use xlinkHref="#icon-rocket"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-3"
                data-category="2"
                data-space="2.03"
                href="#"
                aria-label="Pin for Which Bug?"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--bug">
                    <use xlinkHref="#icon-bug"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-4"
                data-category="3"
                data-space="2.04"
                href="#"
                aria-label="Pin for Cognitio"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--books">
                    <use xlinkHref="#icon-books"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-5"
                data-category="1"
                data-space="2.05"
                href="#"
                aria-label="Pin for The Eggplanthead"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--eggplant">
                    <use xlinkHref="#icon-eggplant"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-6"
                data-category="1"
                data-space="2.06"
                href="#"
                aria-label="Pin for Superfood"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--strawberry">
                    <use xlinkHref="#icon-strawberry"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-7"
                data-category="3"
                data-space="2.07"
                href="#"
                aria-label="Pin for No Princess"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--heart">
                    <use xlinkHref="#icon-heart"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--2-8"
                data-category="3"
                data-space="2.08"
                href="#"
                aria-label="Pin for Tool Exchange"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--wrench">
                    <use xlinkHref="#icon-wrench"></use>
                  </svg>
                </span>
              </a>
            </div>
            {/* <!-- /level__pins --> */}
          </div>
          <div className="level level--3" aria-label="Level 3">
            <svg
              className="map map--3"
              viewBox="0 0 1200 800"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Map Level 3</title>
              <polygon
                points="1035.94 787.41 1035.94 423.16 855.37 423.16 855.37 350.52 1187.28 350.52 1187.28 12.59 548.09 12.59 548.09 68.87 437.36 68.87 437.36 12.59 49.37 12.59 49.37 366.5 12.72 366.5 12.72 787.41 356.2 787.41 414.93 584.41 554.4 584.41 627.81 787.41 1035.94 787.41"
                className="map__ground"
              />
              <path
                d="M1187.28,12.59V350.52H855.37v72.64h180.58V787.41H627.81l-73.41-203H414.93l-58.73,203H12.72V366.5H49.37V12.59h388V68.87H548.08V12.59h639.19M1200,0H535.36V56.28H450.09V0H36.65V353.91H0V800H365.8l2.64-9.13L424.52,597H545.44l70.39,194.65,3,8.35h429.82V410.57H868.09V363.11H1200V0h0Z"
                className="map__outline"
              />
              <rect
                x="666.9"
                y="565.6"
                width="26.3"
                height="26"
                className="map__space"
              />
              <path
                data-space="3.07"
                d="M454.8,266.2h63c13.4-0.1,24.4,10.8,24.5,24.2c0,0,0,0,0,0l0,0v199.4c-0.1,13.4-11.1,24.3-24.5,24.2h-63c-13.4,0.1-24.4-10.8-24.5-24.2c0,0,0,0,0,0l0,0V290.4C430.3,277,441.3,266.1,454.8,266.2C454.7,266.2,454.7,266.2,454.8,266.2L454.8,266.2L454.8,266.2z"
                className="map__space"
              />
              <polygon
                points="898.1,182.4 919.3,194.5 919.3,218.7 898.1,230.9 876.9,218.7 876.9,194.5 "
                className="map__space"
              />
              <rect
                x="282.3"
                y="478.1"
                width="26.3"
                height="26"
                className="map__space"
              />
              <rect
                x="381.5"
                y="12.6"
                width="55.8"
                height="55.8"
                className="map__space"
              />
              <rect
                x="566"
                y="12.6"
                width="110.6"
                height="110.6"
                className="map__space"
              />
              <rect
                x="566"
                y="157.4"
                width="110.6"
                height="73.5"
                className="map__space"
              />
              <rect
                x="742"
                y="12.6"
                width="445.3"
                height="110.6"
                className="map__space"
              />
              <rect
                data-space="3.03"
                x="972.8"
                y="128.5"
                width="214.5"
                height="222"
                className="map__space"
              />
              <rect
                x="756"
                y="423.2"
                width="279.9"
                height="161.2"
                className="map__space"
              />
              <rect
                x="876.9"
                y="591.6"
                width="159"
                height="195.8"
                className="map__space"
              />
              <polygon
                data-space="3.04"
                points="871.6,680 589.4,680 627.8,787.4 871.6,787.4 "
                className="map__space"
              />
              <circle
                data-space="3.06"
                cx="735.7"
                cy="343.8"
                r="55.7"
                className="map__space"
              />
              <rect
                x="12.7"
                y="696"
                width="91.4"
                height="91.4"
                className="map__space"
              />
              <rect
                x="12.7"
                y="591.6"
                width="146.9"
                height="97.9"
                className="map__space"
              />
              <rect
                data-space="3.02"
                x="12.7"
                y="366.5"
                width="146.9"
                height="217.9"
                className="map__space"
              />
              <polygon
                data-space="3.05"
                points="356.2,787.4 414.9,584.4 275.1,584.4 275.1,787.4 "
                className="map__space"
              />
              <rect
                data-space="3.01"
                x="49.4"
                y="12.6"
                width="312.7"
                height="343"
                className="map__space"
              />
            </svg>
            <div className="level__pins">
              <a
                className="pin pin--3-1"
                data-category="1"
                data-space="3.01"
                href="#"
                aria-label="Pin for Oolong House"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--tea">
                    <use xlinkHref="#icon-tea"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--3-2"
                data-category="2"
                data-space="3.02"
                href="#"
                aria-label="Pin for Enlightend Path"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--pyramid">
                    <use xlinkHref="#icon-pyramid"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--3-3"
                data-category="3"
                data-space="3.03"
                href="#"
                aria-label="Pin for What makes us walk"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--shoe">
                    <use xlinkHref="#icon-shoe"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--3-4"
                data-category="3"
                data-space="3.04"
                href="#"
                aria-label="Pin for Your Last Shirt"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--shirt">
                    <use xlinkHref="#icon-shirt"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--3-5"
                data-category="4"
                data-space="3.05"
                href="#"
                aria-label="Pin for Breathe"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--tree">
                    <use xlinkHref="#icon-tree"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--3-6"
                data-category="4"
                data-space="3.06"
                href="#"
                aria-label="Pin for Feel the Grass"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--grass">
                    <use xlinkHref="#icon-grass"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--3-7"
                data-category="4"
                data-space="3.07"
                href="#"
                aria-label="Pin for Star Gazer"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--star">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </span>
              </a>
            </div>
            {/* <!-- /level__pins --> */}
          </div>
          <div className="level level--4" aria-label="Level 4">
            <svg
              className="map map--4"
              viewBox="0 0 1200 800"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            >
              <title>Map Level 2</title>
              <polygon
                points="1035.94 787.41 1035.94 423.16 855.37 423.16 855.37 350.52 1187.28 350.52 1187.28 12.59 548.09 12.59 548.09 68.87 437.36 68.87 437.36 12.59 49.37 12.59 49.37 366.5 12.72 366.5 12.72 787.41 356.2 787.41 414.93 584.41 554.4 584.41 627.81 787.41 1035.94 787.41"
                className="map__ground"
              />
              <path
                d="M1187.28,12.59V350.52H855.37v72.64h180.58V787.41H627.81l-73.41-203H414.93l-58.73,203H12.72V366.5H49.37V12.59h388V68.87H548.08V12.59h639.19M1200,0H535.36V56.28H450.09V0H36.65V353.91H0V800H365.8l2.64-9.13L424.52,597H545.44l70.39,194.65,3,8.35h429.82V410.57H868.09V363.11H1200V0h0Z"
                className="map__outline"
              />
              <path
                d="M674.5,647c2,16.3,29.2,31.3,51.4,28.9c51.9-5.8,80.3-107.4,64.7-119c-6.4-4.7-27.9,11.2-70.8,43.1C676.6,632,673.7,640.5,674.5,647z"
                className="map__lake"
              />
              <ellipse
                cx="738.82"
                cy="595.48"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <ellipse
                cx="768.46"
                cy="605.4"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <ellipse
                cx="744.64"
                cy="624.92"
                rx="13.95"
                ry="13.8"
                className="map__tree"
              />
              <rect
                x="666.9"
                y="565.6"
                width="26.3"
                height="26"
                className="map__space"
              />
              <path
                data-space="4.05"
                d="M454.8,266.2h63c13.4-0.1,24.4,10.8,24.5,24.2c0,0,0,0,0,0l0,0v199.4c-0.1,13.4-11.1,24.3-24.5,24.2h-63c-13.4,0.1-24.4-10.8-24.5-24.2c0,0,0,0,0,0l0,0V290.4C430.3,277,441.3,266.1,454.8,266.2C454.7,266.2,454.7,266.2,454.8,266.2L454.8,266.2L454.8,266.2z"
                className="map__space"
              />
              <rect
                x="282.3"
                y="478.1"
                width="26.3"
                height="26"
                className="map__space"
              />
              <rect
                x="12.7"
                y="366.5"
                width="202.4"
                height="175.1"
                className="map__space"
              />
              <rect
                x="12.7"
                y="550.6"
                width="50.9"
                height="236.8"
                className="map__space"
              />
              <circle
                data-space="4.07"
                cx="143.1"
                cy="708.1"
                r="49.5"
                className="map__space"
              />
              <circle
                data-space="4.01"
                cx="288.6"
                cy="658.6"
                r="66"
                className="map__space"
              />
              <polygon
                data-space="4.02"
                points="49.4,354.1 362.1,354.1 362.1,230.9 600,230.9 600,297.1 855.4,297.1 855.4,12.6 548.1,12.6 548.1,68.9 437.4,68.9 437.4,12.6 49.4,12.6 "
                className="map__space"
              />
              <rect
                x="1065.6"
                y="12.6"
                width="121.7"
                height="110.5"
                className="map__space"
              />
              <rect
                data-space="4.03"
                x="1065.6"
                y="132.1"
                width="121.7"
                height="218.4"
                className="map__space"
              />
              <polygon
                points="901.3,92.6 886.9,67.8 901.3,43 929.9,43 944.2,67.8 929.9,92.6 "
                className="map__space"
              />
              <polygon
                points="953.3,129.1 938.6,103.6 953.3,78.1 982.8,78.1 997.5,103.6 982.8,129.1 "
                className="map__space"
              />
              <rect
                x="951.6"
                y="213.1"
                width="73.5"
                height="73.5"
                className="map__space"
              />
              <rect
                data-space="4.06"
                x="639.6"
                y="399.5"
                width="151.5"
                height="121.1"
                className="map__space"
              />
              <rect
                data-space="4.04"
                x="855.4"
                y="423.2"
                width="180.6"
                height="364.2"
                className="map__space"
              />
              <polygon
                points="613.2,747 846.6,658.6 846.6,787.4 627.8,787.4"
                className="map__space"
              />
            </svg>
            <div className="level__pins">
              <a
                className="pin pin--4-1"
                data-category="1"
                data-space="4.01"
                href="#"
                aria-label="Pin for Cold Soup Kitchen"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--tomato">
                    <use xlinkHref="#icon-tomato"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--4-2"
                data-category="2"
                data-space="4.02"
                href="#"
                aria-label="Pin for Docu Dome"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--cinema">
                    <use xlinkHref="#icon-cinema"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--4-3"
                data-category="3"
                data-space="4.03"
                href="#"
                aria-label="Pin for Little Artist"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--paint-brush">
                    <use xlinkHref="#icon-paint-brush"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--4-4"
                data-category="4"
                data-space="4.04"
                href="#"
                aria-label="Pin for Sacred Symmetry"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--modx">
                    <use xlinkHref="#icon-modx"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--4-5"
                data-category="4"
                data-space="4.05"
                href="#"
                aria-label="Pin for Hot Tub Festival"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--droplet">
                    <use xlinkHref="#icon-droplet"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--4-6"
                data-category="2"
                data-space="4.06"
                href="#"
                aria-label="Pin for Love 2 Cook"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--cupcake">
                    <use xlinkHref="#icon-cupcake"></use>
                  </svg>
                </span>
              </a>
              <a
                className="pin pin--4-7"
                data-category="2"
                data-space="4.07"
                href="#"
                aria-label="Pin for Permaculture Hub"
              >
                <span className="pin__icon">
                  <svg className="icon icon--pin">
                    <use xlinkHref="#icon-pin"></use>
                  </svg>
                  <svg className="icon icon--logo icon--leafcircle">
                    <use xlinkHref="#icon-leafcircle"></use>
                  </svg>
                </span>
              </a>
            </div>
            {/* <!-- /level__pins --> */}
          </div>
        </div>
        {/* <!-- /levels --> */}
      </div>
      {/* <!-- /mall --> */}
      <button
        className="boxbutton boxbutton--dark open-search"
        aria-label="Show search"
      >
        <svg className="icon icon--search">
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
      <nav className="mallnav mallnav--hidden">
        <button className="boxbutton mallnav__button--up" aria-label="Go up">
          <svg className="icon icon--angle-down">
            <use xlinkHref="#icon-angle-up"></use>
          </svg>
        </button>
        <button
          className="boxbutton boxbutton--dark mallnav__button--all-levels"
          aria-label="Back to all levels"
        >
          <svg className="icon icon--stack">
            <use xlinkHref="#icon-stack"></use>
          </svg>
        </button>
        <button
          className="boxbutton mallnav__button--down"
          aria-label="Go down"
        >
          <svg className="icon icon--angle-down">
            <use xlinkHref="#icon-angle-down"></use>
          </svg>
        </button>
      </nav>
      <div className="content">
       <MapDescriptionItems />
        <button
          className="boxbutton boxbutton--dark content__button content__button--hidden"
          aria-label="Close details"
        >
          <svg className="icon icon--cross">
            <use xlinkHref="#icon-cross"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MallMap;
