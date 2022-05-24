import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  bottom: 20%;
  left: 7%;
  position: fixed;
  /* top: 20%; */
  transform: translateX(-10px) translateZ(100px);
  transform-style: preserve-3d;
`;

export function PigCorn({ yPig }) {
  const svgVariants = {
    start: {
      // opacity: 0,
      // pathLength: 0,
    },
    finished: {
      // opacity: 1,
      // pathLength: 1,
      // transition: {
      //   duration: 4,
      //   delay: 4.5,
      //   ease: 'easeInOut',
      // },
    },
  };

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="4.8in"
      height="4.8in"
      viewBox="0 0 1440 1440"
    >
      <motion.path
        style={{ pathLength: yPig }}
        id="Pig Unicorn"
        fill="none"
        stroke="black"
        strokeWidth="6"
        // variants={svgVariants}
        // initial="start"
        // animate="finished"
        d="M 795.00,1440.00
           C 784.18,1439.98 786.30,1438.08 778.95,1427.17
             778.95,1427.17 771.91,1418.00 771.91,1418.00
             771.91,1418.00 767.08,1410.20 767.08,1410.20
             763.41,1405.13 758.12,1405.59 753.26,1403.15
             751.07,1402.06 748.17,1398.81 746.73,1396.83
             738.66,1385.73 740.39,1358.04 750.21,1348.21
             750.21,1348.21 762.13,1338.41 762.13,1338.41
             766.68,1335.65 768.22,1337.48 779.00,1327.83
             779.00,1327.83 789.49,1318.63 789.49,1318.63
             795.38,1312.63 801.27,1302.73 811.00,1304.00
             811.00,1304.00 810.00,1300.00 810.00,1300.00
             817.39,1294.17 828.88,1283.10 833.48,1275.00
             833.48,1275.00 840.63,1258.17 840.63,1258.17
             846.83,1244.97 851.89,1230.32 854.88,1216.00
             859.59,1193.44 856.92,1156.74 852.69,1134.00
             852.69,1134.00 842.31,1092.00 842.31,1092.00
             842.31,1092.00 839.85,1074.00 839.85,1074.00
             839.85,1074.00 837.74,1062.00 837.74,1062.00
             837.74,1062.00 836.96,1047.00 836.96,1047.00
             836.69,1040.92 835.33,1041.03 836.00,1034.00
             836.00,1034.00 849.00,1034.68 849.00,1034.68
             849.00,1034.68 877.00,1032.74 877.00,1032.74
             877.00,1032.74 888.00,1033.32 888.00,1033.32
             888.00,1033.32 895.00,1034.82 895.00,1034.82
             895.00,1034.82 915.09,1036.70 915.09,1036.70
             915.09,1036.70 931.00,1043.00 931.00,1043.00
             931.00,1043.00 931.00,1039.06 931.00,1039.06
             932.30,1039.13 934.56,1039.48 935.78,1039.06
             941.37,1037.46 942.05,1025.26 933.87,1017.44
             933.87,1017.44 908.00,1000.81 908.00,1000.81
             908.00,1000.81 890.39,982.89 890.39,982.89
             890.39,982.89 879.58,974.20 879.58,974.20
             879.58,974.20 873.28,970.20 873.28,970.20
             869.43,967.11 866.72,962.82 862.00,960.45
             858.77,958.84 853.94,958.96 850.00,958.00
             854.50,948.42 869.25,937.91 880.00,937.26
             880.00,937.26 899.00,939.00 899.00,939.00
             899.00,939.00 899.00,937.00 899.00,937.00
             906.56,938.70 916.19,941.12 924.00,940.62
             931.61,940.14 942.34,935.74 950.00,937.40
             953.34,938.12 956.26,940.35 959.00,942.30
             969.79,949.98 972.88,955.72 973.00,969.00
             973.00,969.00 980.00,968.00 980.00,968.00
             980.00,968.00 985.00,972.00 985.00,972.00
             988.94,962.02 996.48,947.07 993.69,936.09
             993.03,933.51 990.29,930.62 988.79,927.99
             988.79,927.99 976.84,906.00 976.84,906.00
             972.10,897.36 966.50,884.72 956.30,881.26
             956.30,881.26 933.28,880.60 933.28,880.60
             917.85,881.18 922.18,878.94 909.00,875.59
             901.59,873.71 896.16,873.39 890.04,867.81
             877.06,855.99 877.19,844.10 872.38,829.00
             870.20,822.14 866.90,815.51 863.87,809.00
             861.29,803.44 860.51,799.44 856.00,795.00
             856.00,795.00 855.00,782.00 855.00,782.00
             852.07,779.36 848.04,765.34 846.46,761.00
             846.46,761.00 841.74,750.00 841.74,750.00
             836.89,735.70 833.18,714.10 833.00,699.00
             832.98,696.75 832.66,691.32 834.02,689.60
             835.45,687.79 838.87,688.03 841.00,687.68
             845.21,687.00 851.10,685.74 855.00,684.14
             872.90,676.79 884.45,670.03 904.00,664.71
             911.43,662.69 911.33,661.20 920.00,661.00
             918.54,659.66 918.07,658.94 915.96,658.46
             911.51,657.45 895.50,662.80 891.00,664.83
             891.00,664.83 876.00,670.12 876.00,670.12
             862.54,676.23 841.95,687.25 827.00,683.00
             827.00,683.00 831.00,687.00 831.00,687.00
             826.34,700.05 828.34,694.59 827.69,707.00
             827.23,715.93 828.38,715.23 829.68,723.00
             829.68,723.00 831.17,734.00 831.17,734.00
             831.17,734.00 838.58,757.00 838.58,757.00
             838.58,757.00 846.95,775.00 846.95,775.00
             850.90,784.24 849.58,785.45 852.09,792.00
             852.09,792.00 861.73,815.00 861.73,815.00
             861.73,815.00 866.29,825.00 866.29,825.00
             866.29,825.00 871.24,844.00 871.24,844.00
             873.10,849.71 876.05,853.81 878.74,859.00
             881.31,863.96 883.44,868.92 888.04,872.43
             891.89,875.38 902.09,878.55 907.00,879.85
             907.00,879.85 924.00,884.79 924.00,884.79
             924.00,884.79 943.00,885.66 943.00,885.66
             943.00,885.66 953.00,885.04 953.00,885.04
             959.10,885.39 963.00,890.27 966.37,895.00
             966.37,895.00 974.43,911.00 974.43,911.00
             979.32,920.36 984.14,927.40 987.00,938.00
             983.79,941.21 983.83,942.68 983.00,947.00
             983.00,947.00 978.00,946.00 978.00,946.00
             978.00,946.00 977.00,960.00 977.00,960.00
             977.00,960.00 972.74,951.00 972.74,951.00
             968.44,944.27 959.39,937.46 952.00,934.52
             945.94,932.11 930.18,936.29 923.00,936.54
             923.00,936.54 916.00,936.04 916.00,936.04
             916.00,936.04 877.00,934.74 877.00,934.74
             868.14,935.28 854.85,944.24 849.38,951.00
             847.88,952.85 844.04,958.43 844.24,960.80
             844.48,963.46 847.30,962.61 849.00,962.40
             853.85,961.80 860.79,961.82 864.49,965.35
             866.89,967.65 867.08,968.84 871.04,972.20
             871.04,972.20 886.58,984.43 886.58,984.43
             886.58,984.43 907.00,1005.61 907.00,1005.61
             915.97,1012.68 926.11,1014.59 933.00,1021.00
             933.00,1021.00 927.09,1022.01 927.09,1022.01
             927.09,1022.01 915.00,1029.00 915.00,1029.00
             915.00,1029.00 919.00,1033.00 919.00,1033.00
             919.00,1033.00 906.00,1031.68 906.00,1031.68
             906.00,1031.68 900.00,1030.48 900.00,1030.48
             900.00,1030.48 893.00,1030.48 893.00,1030.48
             893.00,1030.48 886.09,1028.80 886.09,1028.80
             886.09,1028.80 869.00,1028.80 869.00,1028.80
             869.00,1028.80 851.00,1029.96 851.00,1029.96
             851.00,1029.96 840.00,1029.00 840.00,1029.00
             840.00,1029.00 831.00,1029.00 831.00,1029.00
             831.00,1029.00 813.00,1024.00 813.00,1024.00
             817.02,1030.76 826.75,1029.43 829.57,1034.28
             831.73,1037.98 831.81,1053.96 832.04,1059.00
             832.04,1059.00 833.71,1071.00 833.71,1071.00
             833.71,1071.00 834.30,1079.00 834.30,1079.00
             834.30,1079.00 837.44,1096.00 837.44,1096.00
             837.44,1096.00 842.11,1114.00 842.11,1114.00
             842.11,1114.00 849.57,1152.58 849.57,1152.58
             849.57,1152.58 850.84,1188.00 850.84,1188.00
             851.08,1195.14 851.85,1201.80 850.84,1209.00
             847.60,1227.98 843.25,1240.40 835.87,1258.00
             832.64,1265.73 830.48,1271.69 825.89,1279.00
             823.07,1283.49 812.75,1295.08 808.72,1298.01
             808.72,1298.01 797.51,1305.10 797.51,1305.10
             797.51,1305.10 787.38,1315.88 787.38,1315.88
             787.38,1315.88 769.58,1330.59 769.58,1330.59
             769.58,1330.59 760.00,1336.10 760.00,1336.10
             757.83,1337.48 742.90,1349.43 741.65,1351.09
             736.13,1358.43 735.90,1369.29 736.00,1378.00
             736.12,1388.30 742.01,1398.46 751.00,1403.85
             754.36,1405.86 759.98,1406.99 762.68,1409.45
             765.38,1411.93 767.07,1416.75 769.11,1420.00
             769.11,1420.00 775.15,1428.00 775.15,1428.00
             775.15,1428.00 782.00,1440.00 782.00,1440.00
             782.00,1440.00 691.00,1440.00 691.00,1440.00
             679.48,1439.98 672.70,1434.75 662.00,1431.08
             662.00,1431.08 645.00,1425.28 645.00,1425.28
             645.00,1425.28 620.00,1413.61 620.00,1413.61
             620.00,1413.61 595.00,1405.00 595.00,1405.00
             597.82,1419.00 599.39,1418.10 607.22,1429.00
             607.22,1429.00 615.00,1440.00 615.00,1440.00
             615.00,1440.00 579.00,1440.00 579.00,1440.00
             579.00,1440.00 571.09,1438.99 571.09,1438.99
             571.09,1438.99 563.72,1432.37 563.72,1432.37
             563.72,1432.37 549.00,1420.17 549.00,1420.17
             549.00,1420.17 539.32,1412.96 539.32,1412.96
             539.32,1412.96 524.26,1393.00 524.26,1393.00
             524.26,1393.00 511.48,1376.00 511.48,1376.00
             511.48,1376.00 497.87,1345.00 497.87,1345.00
             497.87,1345.00 491.61,1326.00 491.61,1326.00
             491.61,1326.00 488.47,1317.17 488.47,1317.17
             488.47,1317.17 493.00,1308.00 493.00,1308.00
             493.00,1308.00 487.00,1312.00 487.00,1312.00
             487.00,1312.00 485.00,1312.00 485.00,1312.00
             485.00,1312.00 475.70,1291.09 475.70,1291.09
             468.30,1278.18 458.79,1264.74 453.07,1251.00
             453.07,1251.00 449.46,1240.00 449.46,1240.00
             447.17,1233.55 444.62,1229.19 443.47,1222.00
             442.59,1216.57 444.34,1215.75 444.98,1211.00
             444.98,1211.00 444.98,1203.00 444.98,1203.00
             444.98,1203.00 446.14,1185.00 446.14,1185.00
             446.14,1185.00 448.29,1161.00 448.29,1161.00
             448.29,1161.00 450.56,1150.00 450.56,1150.00
             450.56,1150.00 451.89,1139.00 451.89,1139.00
             451.89,1139.00 455.38,1126.00 455.38,1126.00
             455.38,1126.00 458.33,1119.00 458.33,1119.00
             458.33,1119.00 463.55,1097.00 463.55,1097.00
             463.55,1097.00 465.76,1077.00 465.76,1077.00
             466.01,1072.76 464.49,1070.64 465.76,1066.00
             465.76,1066.00 477.63,1038.00 477.63,1038.00
             477.63,1038.00 486.81,1013.00 486.81,1013.00
             491.98,997.57 493.57,991.09 501.36,976.00
             501.36,976.00 527.08,930.00 527.08,930.00
             527.08,930.00 532.55,920.00 532.55,920.00
             532.55,920.00 548.79,898.00 548.79,898.00
             548.79,898.00 566.72,869.00 566.72,869.00
             566.72,869.00 572.67,857.00 572.67,857.00
             572.67,857.00 582.71,838.00 582.71,838.00
             582.71,838.00 585.60,830.00 585.60,830.00
             585.60,830.00 589.79,821.00 589.79,821.00
             589.79,821.00 607.67,777.00 607.67,777.00
             607.67,777.00 614.37,765.00 614.37,765.00
             614.37,765.00 624.74,741.00 624.74,741.00
             624.74,741.00 637.73,718.00 637.73,718.00
             637.73,718.00 640.32,708.00 640.32,708.00
             640.32,708.00 644.18,699.00 644.18,699.00
             644.18,699.00 646.46,692.17 646.46,692.17
             646.46,692.17 649.33,686.91 649.33,686.91
             649.33,686.91 655.36,669.00 655.36,669.00
             655.36,669.00 662.54,653.00 662.54,653.00
             662.54,653.00 665.68,643.00 665.68,643.00
             668.85,636.97 676.59,629.46 678.00,625.00
             680.68,624.68 681.22,624.63 682.00,622.00
             682.00,622.00 685.00,620.00 685.00,620.00
             685.00,620.00 681.00,621.00 681.00,621.00
             681.00,621.00 697.53,602.00 697.53,602.00
             703.92,594.14 706.15,588.82 710.30,580.00
             711.67,577.07 714.51,571.55 714.76,568.42
             714.76,568.42 714.00,562.00 714.00,562.00
             714.00,562.00 709.00,566.00 709.00,566.00
             709.00,566.00 711.00,561.00 711.00,561.00
             711.00,561.00 716.00,562.00 716.00,562.00
             716.00,562.00 721.38,552.00 721.38,552.00
             732.15,532.20 743.61,516.87 761.00,502.32
             761.00,502.32 781.86,486.22 781.86,486.22
             781.86,486.22 787.27,480.35 787.27,480.35
             792.62,476.37 794.58,477.88 800.00,471.00
             792.06,470.96 784.15,476.53 780.00,483.00
             773.18,482.78 763.71,491.79 757.83,495.59
             754.83,497.54 752.66,499.67 749.00,499.00
             749.00,499.00 766.75,478.81 766.75,478.81
             766.75,478.81 779.00,472.46 779.00,472.46
             779.00,472.46 797.53,466.44 797.53,466.44
             797.53,466.44 799.00,463.00 799.00,463.00
             799.00,463.00 785.00,467.24 785.00,467.24
             785.00,467.24 770.00,473.00 770.00,473.00
             770.00,473.00 777.08,454.00 777.08,454.00
             779.74,443.92 779.95,433.26 781.29,423.00
             782.43,414.23 785.63,409.27 783.00,400.00
             783.00,400.00 781.64,413.00 781.64,413.00
             780.62,417.80 778.41,421.08 780.00,426.00
             774.87,434.43 777.59,438.65 775.42,447.00
             773.54,454.22 768.70,460.40 769.00,468.00
             763.89,470.99 765.55,472.90 762.44,476.68
             759.62,480.11 747.22,489.26 743.00,491.00
             743.00,491.00 744.00,493.00 744.00,493.00
             739.87,495.98 737.93,498.28 736.00,503.00
             730.32,503.32 724.53,508.09 722.00,513.00
             722.00,513.00 727.00,512.00 727.00,512.00
             724.42,519.50 715.22,527.93 709.00,532.58
             696.80,541.69 690.68,546.86 677.00,554.00
             682.03,556.78 686.08,557.81 691.00,554.00
             698.70,554.87 702.32,549.83 709.00,547.00
             708.48,553.53 701.95,557.78 697.00,561.42
             697.00,561.42 689.58,567.15 689.58,567.15
             680.23,573.23 674.59,576.04 666.10,583.96
             662.66,587.16 657.93,590.29 657.00,595.00
             657.00,595.00 674.00,579.00 674.00,579.00
             678.56,580.49 680.59,579.13 684.00,576.00
             684.00,576.00 689.00,575.00 689.00,575.00
             689.00,575.00 690.00,576.00 690.00,576.00
             690.00,576.00 690.00,577.00 690.00,577.00
             690.00,577.00 688.00,577.00 688.00,577.00
             692.15,583.51 681.80,589.87 677.28,595.95
             669.78,606.05 656.87,612.37 646.00,617.98
             646.00,617.98 639.00,621.96 639.00,621.96
             629.07,626.71 620.71,628.61 613.00,637.00
             619.11,635.05 617.92,634.40 622.42,631.79
             622.42,631.79 631.17,627.72 631.17,627.72
             640.44,623.79 660.55,615.55 668.00,609.96
             668.00,609.96 685.00,595.96 685.00,595.96
             689.39,591.77 693.41,586.58 699.00,584.00
             694.29,598.21 680.08,605.07 671.00,616.00
             669.40,615.69 661.14,621.01 659.00,622.16
             659.00,622.16 642.17,631.91 642.17,631.91
             642.17,631.91 632.00,639.77 632.00,639.77
             626.65,643.30 621.82,644.89 622.00,652.00
             622.00,652.00 619.00,650.00 619.00,650.00
             617.49,654.85 615.43,654.62 612.00,658.00
             624.61,656.02 638.88,641.94 649.00,634.12
             653.67,630.51 660.64,623.61 667.00,625.00
             667.00,625.00 653.28,637.75 653.28,637.75
             653.28,637.75 647.67,641.58 647.67,641.58
             647.67,641.58 641.25,650.28 641.25,650.28
             641.25,650.28 623.91,666.98 623.91,666.98
             623.91,666.98 603.82,680.98 603.82,680.98
             603.82,680.98 602.00,685.00 602.00,685.00
             602.00,685.00 623.00,677.00 623.00,677.00
             622.13,682.47 620.62,682.31 618.10,687.01
             614.13,694.41 613.09,703.40 602.00,699.00
             602.07,700.35 601.77,701.23 602.78,702.48
             604.74,704.92 614.19,705.11 617.00,704.12
             624.97,701.32 633.61,693.92 639.00,687.49
             642.01,683.89 643.47,678.61 648.00,677.00
             644.64,685.26 642.08,691.40 636.24,698.28
             636.24,698.28 605.00,730.00 605.00,730.00
             611.89,727.07 624.39,716.30 629.98,710.91
             633.99,707.06 634.26,705.14 639.00,702.00
             639.00,702.00 625.62,733.00 625.62,733.00
             625.62,733.00 618.80,743.00 618.80,743.00
             618.80,743.00 611.69,760.00 611.69,760.00
             611.69,760.00 602.60,777.00 602.60,777.00
             602.60,777.00 598.80,787.00 598.80,787.00
             598.80,787.00 581.37,830.00 581.37,830.00
             581.37,830.00 577.41,838.00 577.41,838.00
             577.41,838.00 575.26,843.58 575.26,843.58
             575.26,843.58 560.11,872.00 560.11,872.00
             560.11,872.00 555.92,881.00 555.92,881.00
             555.92,881.00 550.83,888.00 550.83,888.00
             550.83,888.00 527.73,921.00 527.73,921.00
             527.73,921.00 521.58,933.00 521.58,933.00
             521.58,933.00 514.16,946.00 514.16,946.00
             514.16,946.00 507.86,958.00 507.86,958.00
             507.86,958.00 490.70,987.00 490.70,987.00
             490.70,987.00 488.49,995.00 488.49,995.00
             488.49,995.00 481.17,1018.00 481.17,1018.00
             481.17,1018.00 476.57,1036.00 476.57,1036.00
             476.57,1036.00 472.95,1045.96 472.95,1045.96
             469.84,1052.23 465.91,1058.09 463.95,1065.00
             462.57,1070.69 463.87,1073.85 463.95,1079.00
             463.95,1079.00 462.12,1094.00 462.12,1094.00
             462.12,1094.00 456.32,1117.00 456.32,1117.00
             456.32,1117.00 453.39,1124.00 453.39,1124.00
             453.39,1124.00 451.33,1132.00 451.33,1132.00
             451.33,1132.00 448.55,1139.00 448.55,1139.00
             448.55,1139.00 447.63,1149.00 447.63,1149.00
             447.63,1149.00 445.43,1159.00 445.43,1159.00
             445.43,1159.00 444.41,1168.00 444.41,1168.00
             444.41,1168.00 442.62,1177.00 442.62,1177.00
             442.62,1177.00 442.62,1188.00 442.62,1188.00
             442.62,1188.00 441.17,1223.00 441.17,1223.00
             442.38,1235.55 445.13,1235.75 447.32,1242.00
             448.48,1245.32 448.16,1248.11 450.63,1252.72
             453.09,1257.28 459.87,1266.72 461.14,1270.96
             462.23,1274.60 460.35,1275.29 460.59,1279.04
             460.86,1283.17 462.90,1285.68 463.00,1294.00
             463.10,1302.62 464.25,1315.76 459.30,1322.99
             454.09,1330.60 445.42,1331.04 438.00,1335.35
             428.76,1340.72 407.63,1357.75 401.24,1366.00
             399.55,1368.18 395.35,1373.77 394.47,1376.17
             392.29,1382.12 394.17,1387.42 388.61,1396.91
             384.71,1403.59 375.19,1409.52 368.00,1412.00
             368.00,1412.00 368.00,1414.00 368.00,1414.00
             375.78,1414.43 378.54,1409.38 386.00,1407.00
             385.11,1412.31 384.39,1414.37 379.00,1416.00
             379.00,1416.00 384.00,1429.00 384.00,1429.00
             386.36,1422.54 386.60,1419.14 392.00,1414.00
             391.51,1424.60 387.58,1425.05 393.00,1430.00
             393.00,1430.00 398.47,1416.00 398.47,1416.00
             398.47,1416.00 400.00,1384.00 400.00,1384.00
             406.00,1380.44 404.94,1374.69 407.57,1369.00
             410.13,1363.44 416.32,1357.23 421.00,1353.32
             434.66,1341.94 445.81,1337.95 462.00,1331.61
             462.00,1331.61 473.00,1327.51 473.00,1327.51
             473.00,1327.51 486.00,1319.00 486.00,1319.00
             491.12,1330.56 488.46,1325.58 491.52,1335.00
             491.52,1335.00 501.33,1361.00 501.33,1361.00
             510.44,1381.77 511.54,1379.58 523.25,1396.28
             523.25,1396.28 529.12,1405.56 529.12,1405.56
             537.80,1417.24 539.83,1417.33 551.04,1426.11
             557.17,1430.90 561.99,1432.87 566.00,1440.00
             566.00,1440.00 795.00,1440.00 795.00,1440.00 Z
           M 860.00,440.00
           C 860.07,432.75 865.69,411.56 868.70,405.00
             868.70,405.00 873.09,397.00 873.09,397.00
             873.09,397.00 882.63,377.00 882.63,377.00
             882.63,377.00 893.61,361.00 893.61,361.00
             896.01,356.22 895.64,352.68 897.09,348.00
             897.09,348.00 900.32,338.00 900.32,338.00
             900.32,338.00 904.93,328.00 904.93,328.00
             904.93,328.00 909.45,314.17 909.45,314.17
             909.45,314.17 920.19,293.00 920.19,293.00
             920.19,293.00 921.89,281.00 921.89,281.00
             922.45,277.56 924.04,270.36 921.89,267.32
             919.47,263.60 915.69,266.01 914.05,269.11
             912.04,272.91 909.45,284.59 909.00,289.00
             901.78,291.04 903.00,296.29 900.10,302.00
             900.10,302.00 887.90,323.00 887.90,323.00
             887.90,323.00 885.23,331.00 885.23,331.00
             883.36,335.78 882.60,335.36 882.00,341.00
             877.35,342.62 877.30,345.12 874.62,349.00
             870.95,354.34 865.38,358.18 866.00,365.00
             861.35,367.75 855.35,380.77 852.45,386.00
             850.37,389.75 848.99,390.52 849.00,395.00
             843.56,398.68 839.61,405.51 839.00,412.00
             843.57,409.52 845.85,404.36 848.54,400.04
             852.51,393.66 864.37,375.03 866.00,369.00
             868.71,371.58 872.61,377.20 872.98,381.00
             873.21,383.40 871.50,387.62 870.66,390.00
             867.59,398.68 863.22,404.53 861.00,414.00
             861.00,414.00 854.00,400.00 854.00,400.00
             854.00,400.00 851.00,401.00 851.00,401.00
             851.00,401.00 857.99,420.00 857.99,420.00
             857.99,420.00 857.99,428.00 857.99,428.00
             853.09,431.82 856.00,437.35 853.18,441.06
             851.36,443.45 838.41,449.44 835.00,451.00
             831.37,441.55 831.80,443.25 833.40,434.00
             834.53,427.49 833.50,429.28 836.00,422.00
             829.75,423.99 829.84,428.76 827.73,434.12
             824.43,442.53 821.12,450.97 813.98,457.00
             817.50,450.32 815.15,441.24 813.98,434.00
             813.98,434.00 813.98,427.00 813.98,427.00
             812.65,421.22 811.00,416.00 810.79,410.00
             810.79,410.00 810.03,389.28 810.03,389.28
             809.34,384.36 808.66,372.52 803.86,369.88
             800.60,368.09 796.49,372.24 794.52,374.59
             792.84,376.59 792.40,378.66 791.04,380.83
             787.05,387.17 781.55,391.29 785.00,400.00
             785.00,400.00 785.00,393.00 785.00,393.00
             785.00,393.00 793.46,383.00 793.46,383.00
             793.46,383.00 803.00,374.00 803.00,374.00
             803.00,374.00 808.13,403.00 808.13,403.00
             802.65,409.68 806.13,417.59 808.13,424.83
             809.22,428.08 808.46,430.71 810.95,433.00
             810.95,433.00 810.95,449.42 810.95,449.42
             810.95,449.42 809.00,467.00 809.00,467.00
             803.70,469.31 801.51,471.07 803.00,477.00
             808.82,474.93 814.83,467.67 821.00,464.25
             821.00,464.25 831.83,458.64 831.83,458.64
             831.83,458.64 846.00,450.47 846.00,450.47
             846.00,450.47 868.99,440.66 868.99,440.66
             875.24,436.70 882.36,426.89 885.00,420.00
             880.85,422.54 875.85,429.50 874.00,434.00
             874.00,434.00 860.00,440.00 860.00,440.00 Z
           M 916.14,273.00
           C 918.96,277.66 917.06,280.90 916.14,286.00
             914.08,300.16 908.40,307.28 904.00,321.00
             901.56,319.16 901.89,319.02 902.00,316.00
             897.97,319.06 901.22,321.71 900.50,326.00
             899.94,329.28 892.19,343.94 893.00,353.00
             893.00,353.00 889.00,355.00 889.00,355.00
             889.00,355.00 885.62,340.00 885.62,340.00
             885.62,340.00 895.32,316.00 895.32,316.00
             895.32,316.00 901.00,304.00 901.00,304.00
             906.09,301.20 905.29,298.75 907.66,294.00
             907.66,294.00 911.75,287.00 911.75,287.00
             914.13,282.67 914.64,277.70 916.14,273.00 Z
           M 900.15,398.00
           C 895.25,400.02 891.22,403.37 893.00,409.00
             893.00,409.00 897.00,402.00 897.00,402.00
             898.40,422.25 895.35,420.49 893.43,436.72
             892.37,445.66 894.43,450.15 889.88,458.83
             886.30,465.66 881.18,468.27 876.46,474.00
             872.75,478.52 871.00,484.61 867.00,487.00
             864.96,493.37 859.07,494.66 859.18,498.97
             859.28,502.64 867.90,507.70 871.00,509.10
             874.60,510.71 875.92,510.48 879.00,511.46
             879.00,511.46 885.00,514.02 885.00,514.02
             885.00,514.02 892.00,516.05 892.00,516.05
             896.74,517.75 905.30,522.73 908.79,526.29
             911.75,529.31 913.41,533.44 915.70,537.00
             915.70,537.00 922.96,547.17 922.96,547.17
             922.96,547.17 930.31,562.00 930.31,562.00
             930.31,562.00 946.06,586.00 946.06,586.00
             946.06,586.00 961.39,607.79 961.39,607.79
             965.73,612.54 977.91,618.51 979.73,620.30
             982.79,623.31 983.22,628.56 989.30,634.82
             994.07,639.73 997.83,639.64 1000.00,647.00
             993.71,648.35 992.02,649.11 987.00,653.00
             987.00,653.00 988.00,657.00 988.00,657.00
             983.75,657.89 981.57,663.14 980.45,667.00
             979.73,669.47 979.87,672.17 976.85,672.97
             973.42,673.89 963.25,671.29 960.00,669.73
             955.93,667.77 953.59,665.38 949.00,667.00
             949.00,667.00 962.00,674.52 962.00,674.52
             962.00,674.52 974.00,677.89 974.00,677.89
             980.94,681.08 981.15,684.07 990.00,683.76
             994.49,683.61 998.60,685.52 1001.16,683.14
             1004.95,679.63 1005.00,670.77 1005.00,666.00
             1005.00,666.00 1008.00,666.00 1008.00,666.00
             1008.00,666.00 1009.54,658.00 1009.54,658.00
             1009.43,654.31 1004.97,643.17 1002.57,640.18
             1002.57,640.18 992.08,631.05 992.08,631.05
             987.51,626.55 985.83,620.76 982.59,617.84
             980.53,615.98 972.02,611.72 964.17,603.83
             957.86,597.49 955.36,592.11 950.77,585.00
             950.77,585.00 933.19,556.00 933.19,556.00
             933.19,556.00 928.57,546.00 928.57,546.00
             928.57,546.00 920.17,534.01 920.17,534.01
             917.13,528.62 913.91,522.03 907.00,522.00
             906.00,518.08 900.57,514.87 897.00,513.18
             897.00,513.18 875.00,505.41 875.00,505.41
             875.00,505.41 864.00,500.00 864.00,500.00
             864.00,500.00 876.19,479.58 876.19,479.58
             882.17,473.03 883.28,473.79 886.82,470.61
             892.79,465.26 897.89,458.16 897.93,450.00
             897.93,450.00 897.93,438.28 897.93,438.28
             897.67,431.23 899.20,431.77 900.15,426.13
             902.08,417.02 902.73,406.93 900.15,398.00 Z
           M 892.00,411.00
           C 892.00,411.00 891.00,411.00 891.00,411.00
             891.00,411.00 892.00,412.00 892.00,412.00
             892.00,412.00 892.00,411.00 892.00,411.00 Z
           M 845.00,432.00
           C 844.70,425.97 843.40,418.10 837.00,416.00
             837.76,421.60 838.81,428.90 844.00,432.00
             844.30,437.81 848.14,438.42 849.83,436.41
             850.97,435.04 850.90,432.67 851.00,431.00
             851.00,431.00 845.00,432.00 845.00,432.00 Z
           M 888.00,416.00
           C 888.00,416.00 885.00,420.00 885.00,420.00
             885.00,420.00 888.00,416.00 888.00,416.00 Z
           M 758.00,496.00
           C 758.00,496.00 759.00,496.00 759.00,496.00
             759.00,496.00 758.00,497.00 758.00,497.00
             758.00,497.00 758.00,496.00 758.00,496.00 Z
           M 871.00,575.00
           C 858.44,574.08 855.78,578.26 850.00,578.28
             844.46,578.30 843.04,574.32 836.00,575.00
             839.42,579.33 846.16,584.09 852.00,583.70
             855.08,583.49 858.06,581.56 861.00,580.60
             865.88,579.00 868.20,580.01 871.00,575.00 Z
           M 675.00,577.00
           C 675.00,577.00 676.00,577.00 676.00,577.00
             676.00,577.00 675.00,578.00 675.00,578.00
             675.00,578.00 675.00,577.00 675.00,577.00 Z
           M 448.00,1187.00
           C 448.00,1187.00 447.00,1187.00 447.00,1187.00
             447.00,1187.00 448.00,1188.00 448.00,1188.00
             448.00,1188.00 448.00,1187.00 448.00,1187.00 Z"
      />
    </StyledSvg>
  );
}
