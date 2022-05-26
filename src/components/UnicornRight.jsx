import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  bottom: 25%;
  right: 10%;
  transform: translateZ(25px);
  transform-style: preserve-3d;
`;

export function UnicornRight({ yRight }) {
  // const svgVariants = {
  //   start: {
  //     opacity: 0,
  //     //   pathLength: 0,
  //   },
  //   finished: {
  //     opacity: 1,
  //     //   pathLength: 1,
  //     transition: {
  //       duration: 2,
  //       delay: 3,
  //       ease: 'easeIn',
  //     },
  //   },
  // };

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="4.8in"
      height="4.8in"
      viewBox="0 0 1440 1440"
    >
      <motion.path
        style={{ opacity: yRight }}
        id="Right Unicorn"
        fill="none"
        stroke="black"
        strokeWidth="5"
        // variants={svgVariants}
        // initial="start"
        // animate="finished"
        d="M 1233.00,0.00
           C 1239.16,1.02 1241.85,6.54 1245.34,11.28
             1253.99,23.03 1260.00,47.39 1260.00,62.00
             1267.35,58.08 1268.96,53.80 1273.00,60.00
             1273.00,60.00 1279.00,56.00 1279.00,56.00
             1279.00,56.00 1281.00,59.00 1281.00,59.00
             1281.00,59.00 1281.00,34.00 1281.00,34.00
             1281.00,34.00 1283.15,15.00 1283.15,15.00
             1283.15,15.00 1286.02,1.59 1286.02,1.59
             1286.02,1.59 1289.00,0.00 1289.00,0.00
             1289.00,0.00 1285.17,23.00 1285.17,23.00
             1285.17,23.00 1284.09,42.00 1284.09,42.00
             1284.57,50.52 1285.14,47.09 1284.67,57.00
             1284.67,57.00 1284.67,63.00 1284.67,63.00
             1285.19,69.20 1282.96,78.81 1276.00,80.00
             1274.65,90.02 1273.35,104.56 1265.00,111.00
             1259.48,102.99 1259.77,109.63 1250.00,111.00
             1250.00,111.00 1252.00,104.00 1252.00,104.00
             1248.12,105.86 1241.42,111.40 1241.00,104.00
             1241.00,104.00 1233.00,104.00 1233.00,104.00
             1230.22,109.22 1227.08,113.28 1221.00,114.00
             1224.23,106.50 1227.01,99.01 1232.07,92.43
             1235.61,87.82 1241.77,83.52 1242.00,78.00
             1242.00,78.00 1231.96,86.96 1231.96,86.96
             1231.96,86.96 1223.42,93.12 1223.42,93.12
             1223.42,93.12 1204.00,110.00 1204.00,110.00
             1204.00,110.00 1203.00,109.00 1203.00,109.00
             1203.00,109.00 1204.00,103.00 1204.00,103.00
             1202.51,103.49 1201.93,103.42 1200.63,104.59
             1200.63,104.59 1188.39,125.00 1188.39,125.00
             1178.74,140.64 1162.51,155.48 1149.00,167.91
             1145.75,170.90 1134.19,177.56 1133.43,180.10
             1132.86,182.03 1134.35,185.11 1135.00,187.00
             1125.17,189.52 1127.15,190.43 1117.00,190.00
             1116.94,196.39 1117.24,199.40 1110.00,200.00
             1110.00,200.00 1113.00,193.00 1113.00,193.00
             1113.00,193.00 1115.00,196.00 1115.00,196.00
             1115.00,196.00 1115.00,190.00 1115.00,190.00
             1107.44,191.42 1097.23,197.91 1092.63,204.04
             1092.63,204.04 1087.60,213.00 1087.60,213.00
             1083.92,220.57 1082.80,227.41 1090.00,233.00
             1088.26,227.09 1085.39,218.59 1093.00,216.00
             1093.00,216.00 1097.00,234.00 1097.00,234.00
             1106.22,228.14 1104.05,228.29 1108.85,220.15
             1109.61,218.86 1110.75,217.16 1112.50,218.17
             1114.51,219.33 1114.97,223.93 1114.77,226.00
             1113.96,234.80 1104.90,236.99 1102.69,240.26
             1100.42,243.62 1102.62,247.68 1106.06,249.11
             1108.46,250.11 1111.45,249.90 1114.00,250.09
             1126.17,250.98 1126.21,250.74 1138.00,247.12
             1138.00,247.12 1169.00,234.44 1169.00,234.44
             1169.00,234.44 1185.00,230.04 1185.00,230.04
             1196.39,226.39 1192.05,224.91 1206.00,225.00
             1214.76,225.06 1221.49,226.30 1230.00,227.68
             1230.00,227.68 1239.00,228.46 1239.00,228.46
             1239.00,228.46 1251.00,231.54 1251.00,231.54
             1251.00,231.54 1259.00,232.17 1259.00,232.17
             1269.71,233.21 1281.02,233.57 1291.00,228.58
             1294.68,226.73 1299.84,222.33 1302.82,219.42
             1309.54,212.84 1311.45,204.39 1316.00,197.00
             1319.46,204.52 1316.82,208.44 1312.68,215.00
             1306.23,225.23 1299.02,232.71 1287.00,235.87
             1287.00,235.87 1267.22,239.30 1267.22,239.30
             1263.79,241.17 1263.55,245.56 1263.73,249.00
             1263.73,249.00 1263.73,261.00 1263.73,261.00
             1263.73,261.00 1263.73,268.00 1263.73,268.00
             1263.73,268.00 1263.73,278.00 1263.73,278.00
             1263.88,286.86 1263.28,296.43 1260.91,305.00
             1260.91,305.00 1250.08,330.00 1250.08,330.00
             1250.08,330.00 1240.77,350.28 1240.77,350.28
             1240.77,350.28 1231.31,374.00 1231.31,374.00
             1231.31,374.00 1222.49,397.00 1222.49,397.00
             1222.49,397.00 1208.77,429.00 1208.77,429.00
             1208.77,429.00 1197.31,462.00 1197.31,462.00
             1197.31,462.00 1188.86,477.00 1188.86,477.00
             1188.86,477.00 1175.81,501.00 1175.81,501.00
             1175.81,501.00 1158.55,531.00 1158.55,531.00
             1158.55,531.00 1144.57,565.00 1144.57,565.00
             1144.57,565.00 1141.10,581.00 1141.10,581.00
             1141.10,581.00 1136.28,602.00 1136.28,602.00
             1136.28,602.00 1134.87,619.00 1134.87,619.00
             1134.87,619.00 1133.72,625.00 1133.72,625.00
             1133.72,625.00 1133.00,641.00 1133.00,641.00
             1133.00,641.00 1133.96,651.00 1133.96,651.00
             1133.96,651.00 1133.96,665.00 1133.96,665.00
             1134.16,680.55 1134.15,679.84 1137.00,695.00
             1137.00,695.00 1136.00,699.00 1136.00,699.00
             1129.58,704.07 1127.48,711.85 1124.20,719.00
             1121.90,724.02 1118.68,728.51 1115.50,732.99
             1115.50,732.99 1090.37,765.00 1090.37,765.00
             1090.37,765.00 1076.77,783.42 1076.77,783.42
             1064.16,797.60 1062.14,795.66 1053.51,813.83
             1051.43,818.20 1050.18,820.49 1049.87,825.58
             1049.87,825.58 1052.04,849.00 1052.04,849.00
             1052.04,849.00 1053.80,858.00 1053.80,858.00
             1053.80,858.00 1054.78,877.00 1054.78,877.00
             1054.78,877.00 1053.62,883.00 1053.62,883.00
             1052.99,888.50 1056.30,897.36 1057.33,902.91
             1057.33,902.91 1059.21,915.00 1059.21,915.00
             1059.52,920.33 1058.14,920.82 1059.76,930.74
             1059.76,930.74 1062.95,940.00 1062.95,940.00
             1062.95,940.00 1065.09,962.00 1065.09,962.00
             1065.49,967.76 1067.00,969.85 1066.00,976.00
             1066.00,976.00 1073.00,985.00 1073.00,985.00
             1074.17,978.81 1073.85,976.64 1080.00,974.00
             1080.00,974.00 1075.41,945.00 1075.41,945.00
             1072.54,933.54 1065.63,906.87 1065.08,896.00
             1065.08,896.00 1063.49,878.00 1063.49,878.00
             1061.29,866.64 1057.92,857.80 1061.62,846.00
             1063.08,841.35 1073.12,830.20 1077.00,827.19
             1077.00,827.19 1083.87,822.92 1083.87,822.92
             1083.87,822.92 1090.04,817.29 1090.04,817.29
             1092.97,814.72 1100.62,809.07 1104.00,807.17
             1111.03,803.22 1117.80,802.35 1125.00,799.69
             1133.75,796.46 1145.21,790.86 1153.87,796.99
             1156.78,799.05 1160.99,807.75 1163.93,811.58
             1174.01,824.67 1182.19,840.14 1182.00,857.00
             1181.91,865.01 1176.21,884.67 1173.92,893.41
             1173.92,893.41 1172.50,901.00 1172.50,901.00
             1172.50,901.00 1169.09,913.00 1169.09,913.00
             1169.09,913.00 1166.26,926.00 1166.26,926.00
             1166.26,926.00 1159.13,949.00 1159.13,949.00
             1159.13,949.00 1151.66,986.00 1151.66,986.00
             1150.69,990.55 1150.79,996.87 1147.00,1000.00
             1147.00,1000.00 1141.02,1025.00 1141.02,1025.00
             1141.02,1025.00 1131.68,1054.00 1131.68,1054.00
             1131.68,1054.00 1109.00,1088.00 1109.00,1088.00
             1109.00,1088.00 1117.00,1094.00 1117.00,1094.00
             1117.00,1094.00 1139.88,1063.58 1139.88,1063.58
             1139.88,1063.58 1150.23,1045.00 1150.23,1045.00
             1150.23,1045.00 1162.03,1025.00 1162.03,1025.00
             1162.03,1025.00 1169.08,1009.00 1169.08,1009.00
             1169.08,1009.00 1183.87,982.00 1183.87,982.00
             1183.87,982.00 1189.54,973.00 1189.54,973.00
             1189.54,973.00 1199.68,953.00 1199.68,953.00
             1199.68,953.00 1203.17,943.00 1203.17,943.00
             1208.62,929.84 1214.92,919.19 1225.02,909.09
             1227.12,907.00 1232.87,899.94 1235.82,900.74
             1238.27,901.41 1239.25,904.86 1239.84,907.00
             1240.86,910.67 1241.55,922.08 1241.41,926.00
             1241.41,926.00 1243.00,965.00 1243.00,965.00
             1243.00,965.00 1241.94,974.96 1241.94,974.96
             1241.94,974.96 1241.00,1002.00 1241.00,1002.00
             1240.87,1013.10 1234.73,1026.26 1231.17,1037.00
             1231.17,1037.00 1226.05,1052.00 1226.05,1052.00
             1226.05,1052.00 1198.84,1101.00 1198.84,1101.00
             1198.84,1101.00 1186.48,1120.00 1186.48,1120.00
             1186.48,1120.00 1169.50,1157.09 1169.50,1157.09
             1169.50,1157.09 1157.23,1187.00 1157.23,1187.00
             1157.23,1187.00 1152.95,1201.00 1152.95,1201.00
             1151.67,1204.81 1149.43,1216.84 1147.00,1219.00
             1149.42,1227.63 1145.79,1227.96 1145.42,1235.00
             1145.42,1235.00 1145.42,1243.00 1145.42,1243.00
             1145.42,1243.00 1144.01,1252.00 1144.01,1252.00
             1144.01,1252.00 1143.00,1270.00 1143.00,1270.00
             1142.91,1275.63 1142.17,1275.45 1141.94,1279.00
             1141.94,1279.00 1141.94,1309.00 1141.94,1309.00
             1141.94,1309.00 1141.00,1323.00 1141.00,1323.00
             1140.97,1330.03 1141.01,1337.11 1139.30,1344.00
             1139.30,1344.00 1137.21,1351.00 1137.21,1351.00
             1132.37,1372.51 1132.09,1372.73 1123.29,1393.00
             1123.29,1393.00 1110.32,1419.00 1110.32,1419.00
             1110.32,1419.00 1105.41,1429.00 1105.41,1429.00
             1099.95,1438.96 1101.08,1439.77 1094.00,1440.00
             1094.00,1440.00 1103.96,1421.00 1103.96,1421.00
             1103.96,1421.00 1113.61,1401.42 1113.61,1401.42
             1113.61,1401.42 1115.58,1395.99 1115.58,1395.99
             1115.58,1395.99 1118.96,1390.00 1118.96,1390.00
             1118.96,1390.00 1125.65,1375.00 1125.65,1375.00
             1125.65,1375.00 1128.43,1365.00 1128.43,1365.00
             1132.10,1351.96 1135.31,1338.64 1134.51,1325.00
             1134.51,1325.00 1136.00,1301.00 1136.00,1301.00
             1136.00,1301.00 1139.17,1262.00 1139.17,1262.00
             1139.17,1262.00 1141.29,1235.00 1141.29,1235.00
             1141.29,1235.00 1144.33,1221.00 1144.33,1221.00
             1144.33,1221.00 1145.68,1211.00 1145.68,1211.00
             1145.68,1211.00 1155.66,1180.00 1155.66,1180.00
             1155.66,1180.00 1169.05,1149.00 1169.05,1149.00
             1169.05,1149.00 1171.47,1142.00 1171.47,1142.00
             1171.47,1142.00 1184.19,1116.00 1184.19,1116.00
             1184.19,1116.00 1193.81,1101.17 1193.81,1101.17
             1193.81,1101.17 1198.41,1094.96 1198.41,1094.96
             1198.41,1094.96 1221.41,1051.00 1221.41,1051.00
             1221.41,1051.00 1226.24,1035.00 1226.24,1035.00
             1231.30,1020.90 1235.50,1011.49 1236.15,996.00
             1236.15,996.00 1236.15,987.00 1236.15,987.00
             1236.15,987.00 1236.98,978.00 1236.98,978.00
             1236.98,978.00 1236.98,962.00 1236.98,962.00
             1236.98,962.00 1236.98,941.00 1236.98,941.00
             1236.98,941.00 1236.00,928.00 1236.00,928.00
             1235.99,921.56 1236.01,912.70 1233.00,907.00
             1230.12,911.66 1225.91,914.76 1222.47,919.00
             1222.47,919.00 1210.88,937.00 1210.88,937.00
             1210.88,937.00 1203.36,957.00 1203.36,957.00
             1203.36,957.00 1194.34,975.00 1194.34,975.00
             1194.34,975.00 1188.24,984.00 1188.24,984.00
             1188.24,984.00 1182.19,994.91 1182.19,994.91
             1182.19,994.91 1178.66,1003.01 1178.66,1003.01
             1178.66,1003.01 1170.12,1018.00 1170.12,1018.00
             1170.12,1018.00 1164.10,1032.00 1164.10,1032.00
             1164.10,1032.00 1153.33,1048.00 1153.33,1048.00
             1153.33,1048.00 1146.95,1060.91 1146.95,1060.91
             1146.95,1060.91 1128.52,1086.99 1128.52,1086.99
             1124.80,1091.55 1124.60,1090.65 1120.72,1096.44
             1116.67,1102.47 1116.69,1109.04 1110.00,1109.81
             1104.92,1110.39 1096.22,1096.86 1097.61,1092.28
             1098.46,1089.48 1104.91,1083.65 1107.08,1080.91
             1110.79,1076.22 1125.75,1054.65 1127.79,1050.00
             1127.79,1050.00 1133.93,1029.01 1133.93,1029.01
             1133.93,1029.01 1137.05,1019.96 1137.05,1019.96
             1138.31,1015.52 1138.04,1010.72 1142.00,1008.00
             1141.34,1002.74 1142.88,999.98 1143.88,995.00
             1143.88,995.00 1148.49,973.00 1148.49,973.00
             1148.49,973.00 1149.32,965.00 1149.32,965.00
             1149.32,965.00 1154.03,947.00 1154.03,947.00
             1154.03,947.00 1162.85,921.00 1162.85,921.00
             1162.85,921.00 1165.32,908.00 1165.32,908.00
             1165.32,908.00 1169.44,890.00 1169.44,890.00
             1173.62,873.57 1179.47,856.77 1173.19,840.00
             1167.37,824.48 1165.51,824.03 1157.59,811.00
             1154.49,805.90 1153.56,800.73 1147.00,798.80
             1141.67,797.24 1128.50,802.90 1123.00,804.83
             1115.29,807.53 1106.15,810.06 1099.30,814.72
             1096.17,816.86 1094.18,820.15 1091.47,822.73
             1091.47,822.73 1079.00,833.00 1079.00,833.00
             1070.93,840.67 1064.38,845.43 1065.09,858.00
             1065.09,858.00 1068.58,884.00 1068.58,884.00
             1068.58,884.00 1069.28,894.00 1069.28,894.00
             1069.28,894.00 1072.14,908.91 1072.14,908.91
             1072.14,908.91 1073.51,919.00 1073.51,919.00
             1073.51,919.00 1079.67,943.00 1079.67,943.00
             1079.67,943.00 1084.51,967.00 1084.51,967.00
             1085.07,968.95 1087.61,976.53 1088.59,977.86
             1090.91,980.97 1094.29,981.10 1094.87,984.14
             1096.12,990.62 1087.38,995.21 1084.00,999.00
             1074.71,997.31 1061.57,987.45 1063.00,977.00
             1059.37,974.18 1060.22,971.18 1059.91,967.00
             1059.91,967.00 1057.99,949.00 1057.99,949.00
             1057.74,942.22 1056.20,940.85 1055.29,935.00
             1055.29,935.00 1053.57,915.00 1053.57,915.00
             1051.78,902.67 1048.91,890.51 1049.00,878.00
             1049.00,878.00 1047.83,851.00 1047.83,851.00
             1047.83,851.00 1045.09,826.00 1045.09,826.00
             1045.47,820.48 1048.89,811.88 1051.51,807.00
             1059.01,793.03 1065.96,789.04 1075.58,777.83
             1075.58,777.83 1092.31,755.00 1092.31,755.00
             1098.81,747.06 1112.57,731.11 1117.53,723.00
             1120.35,718.40 1122.90,711.17 1125.00,706.00
             1125.00,706.00 1129.87,695.72 1129.87,695.72
             1129.87,695.72 1129.00,681.00 1129.00,681.00
             1129.00,681.00 1129.00,667.00 1129.00,667.00
             1129.00,667.00 1127.04,639.00 1127.04,639.00
             1127.04,639.00 1127.91,631.00 1127.91,631.00
             1127.91,631.00 1131.08,599.00 1131.08,599.00
             1131.08,599.00 1134.55,583.00 1134.55,583.00
             1134.55,583.00 1137.57,568.00 1137.57,568.00
             1137.57,568.00 1153.03,530.00 1153.03,530.00
             1153.03,530.00 1172.37,496.00 1172.37,496.00
             1172.37,496.00 1188.32,467.00 1188.32,467.00
             1188.32,467.00 1194.23,457.00 1194.23,457.00
             1197.11,450.58 1198.70,443.70 1200.72,437.00
             1200.72,437.00 1205.91,423.00 1205.91,423.00
             1205.91,423.00 1223.80,382.00 1223.80,382.00
             1223.80,382.00 1232.20,359.00 1232.20,359.00
             1232.20,359.00 1255.84,303.00 1255.84,303.00
             1257.94,295.03 1259.99,274.41 1260.00,266.00
             1260.02,254.67 1258.74,249.27 1262.00,238.00
             1262.00,238.00 1252.00,236.68 1252.00,236.68
             1252.00,236.68 1242.28,234.04 1242.28,234.04
             1242.28,234.04 1209.00,230.00 1209.00,230.00
             1209.00,230.00 1204.00,230.00 1204.00,230.00
             1194.24,230.02 1189.84,233.01 1181.00,236.14
             1181.00,236.14 1163.00,242.87 1163.00,242.87
             1147.04,249.77 1140.62,254.92 1122.17,255.72
             1116.20,255.97 1101.70,254.17 1097.04,250.53
             1092.86,247.26 1091.15,242.90 1087.79,239.00
             1084.27,234.91 1080.12,232.82 1079.84,227.00
             1079.36,217.24 1084.42,202.77 1092.02,196.51
             1092.02,196.51 1109.09,184.61 1109.09,184.61
             1109.79,183.56 1110.88,172.13 1111.05,170.00
             1111.69,162.23 1109.93,156.02 1109.88,153.00
             1109.88,153.00 1110.95,146.00 1110.95,146.00
             1111.42,140.35 1111.76,132.54 1110.95,127.00
             1110.10,120.41 1106.19,110.92 1110.00,105.00
             1110.00,105.00 1118.49,129.00 1118.49,129.00
             1118.49,129.00 1119.78,137.00 1119.78,137.00
             1119.78,137.00 1124.00,154.00 1124.00,154.00
             1124.00,154.00 1127.00,153.00 1127.00,153.00
             1127.23,155.67 1127.70,156.19 1125.00,157.00
             1125.00,157.00 1129.00,175.00 1129.00,175.00
             1129.00,175.00 1142.96,165.64 1142.96,165.64
             1142.96,165.64 1153.00,156.07 1153.00,156.07
             1171.28,139.30 1181.56,128.07 1193.26,106.00
             1193.26,106.00 1198.00,97.00 1198.00,97.00
             1187.49,102.15 1187.76,105.96 1175.00,106.00
             1177.87,101.61 1179.50,101.62 1182.63,97.96
             1182.63,97.96 1188.61,90.04 1188.61,90.04
             1195.15,82.23 1204.11,74.31 1213.00,69.37
             1218.74,66.19 1221.49,64.50 1228.00,62.90
             1232.28,61.84 1237.73,61.45 1239.94,56.91
             1241.60,53.47 1237.78,46.74 1236.58,43.00
             1233.66,33.93 1228.03,14.56 1233.00,6.00
             1233.00,6.00 1232.21,15.00 1232.21,15.00
             1232.62,21.47 1238.41,39.88 1241.20,46.00
             1242.33,48.48 1243.37,54.20 1244.60,55.32
             1246.10,56.69 1253.54,56.74 1256.00,57.00
             1255.26,47.96 1249.33,26.21 1245.19,18.00
             1245.19,18.00 1236.00,3.00 1236.00,3.00
             1236.00,3.00 1233.00,5.00 1233.00,5.00
             1233.00,5.00 1233.00,0.00 1233.00,0.00 Z
           M 1298.00,0.00
           C 1303.56,0.95 1303.65,4.14 1305.41,9.00
             1307.78,15.52 1309.89,28.96 1309.93,35.91
             1309.93,35.91 1310.98,47.00 1310.98,47.00
             1310.98,47.00 1309.58,67.00 1309.58,67.00
             1309.21,69.76 1308.95,73.45 1308.16,76.00
             1307.26,78.93 1305.19,81.80 1305.91,85.00
             1306.38,87.10 1308.62,90.01 1309.76,92.00
             1309.76,92.00 1323.70,115.00 1323.70,115.00
             1323.70,115.00 1333.90,146.00 1333.90,146.00
             1333.90,146.00 1339.14,157.00 1339.14,157.00
             1339.14,157.00 1342.04,164.83 1342.04,164.83
             1342.04,164.83 1345.79,171.04 1345.79,171.04
             1345.79,171.04 1348.19,178.00 1348.19,178.00
             1355.15,195.11 1362.87,214.66 1365.71,233.00
             1365.71,233.00 1369.29,260.00 1369.29,260.00
             1369.29,260.00 1371.83,277.00 1371.83,277.00
             1371.83,277.00 1373.17,301.00 1373.17,301.00
             1373.17,301.00 1374.81,314.00 1374.81,314.00
             1374.81,314.00 1376.71,324.00 1376.71,324.00
             1377.16,327.29 1376.71,328.96 1376.71,332.00
             1376.71,332.00 1377.49,348.00 1377.49,348.00
             1377.49,348.00 1374.56,377.00 1374.56,377.00
             1374.56,377.00 1365.01,418.00 1365.01,418.00
             1365.01,418.00 1361.57,440.00 1361.57,440.00
             1361.57,440.00 1358.44,457.00 1358.44,457.00
             1356.80,467.51 1356.88,478.38 1357.00,489.00
             1357.19,504.71 1363.78,514.33 1364.00,523.00
             1359.85,520.54 1356.93,512.49 1354.00,508.00
             1354.00,508.00 1353.00,511.00 1353.00,511.00
             1353.00,511.00 1348.00,509.00 1348.00,509.00
             1348.00,509.00 1347.10,524.00 1347.10,524.00
             1347.10,524.00 1349.00,544.00 1349.00,544.00
             1349.00,544.00 1349.90,563.00 1349.90,563.00
             1349.90,563.00 1352.00,585.00 1352.00,585.00
             1344.37,580.56 1345.82,572.73 1343.00,565.00
             1343.00,579.06 1343.67,572.50 1346.00,583.00
             1346.00,583.00 1342.00,583.00 1342.00,583.00
             1342.00,583.00 1342.00,579.00 1342.00,579.00
             1342.00,579.00 1337.00,579.00 1337.00,579.00
             1337.00,579.00 1343.84,599.00 1343.84,599.00
             1343.84,599.00 1347.37,606.00 1347.37,606.00
             1347.37,606.00 1350.55,614.00 1350.55,614.00
             1350.55,614.00 1354.72,621.00 1354.72,621.00
             1354.72,621.00 1358.19,629.00 1358.19,629.00
             1358.19,629.00 1363.87,639.00 1363.87,639.00
             1363.87,639.00 1367.46,648.00 1367.46,648.00
             1370.85,655.19 1375.74,661.39 1380.06,668.00
             1380.06,668.00 1388.88,684.00 1388.88,684.00
             1392.32,690.77 1397.21,702.70 1398.96,710.00
             1398.96,710.00 1401.00,722.00 1401.00,722.00
             1401.00,722.00 1403.71,734.00 1403.71,734.00
             1403.71,734.00 1404.92,745.00 1404.92,745.00
             1404.92,745.00 1401.71,790.00 1401.71,790.00
             1401.71,790.00 1399.10,803.00 1399.10,803.00
             1398.61,810.14 1402.04,828.42 1403.55,836.00
             1403.55,836.00 1412.72,885.00 1412.72,885.00
             1412.72,885.00 1415.30,910.00 1415.30,910.00
             1415.30,910.00 1421.84,957.00 1421.84,957.00
             1421.84,957.00 1423.17,973.00 1423.17,973.00
             1423.17,973.00 1426.71,999.00 1426.71,999.00
             1426.71,999.00 1427.30,1008.00 1427.30,1008.00
             1427.30,1008.00 1433.71,1047.00 1433.71,1047.00
             1433.71,1047.00 1436.28,1070.00 1436.28,1070.00
             1436.28,1070.00 1438.83,1086.00 1438.83,1086.00
             1440.75,1105.76 1440.23,1126.13 1440.00,1146.00
             1440.00,1146.00 1438.02,1169.00 1438.02,1169.00
             1438.02,1169.00 1438.91,1180.00 1438.91,1180.00
             1439.13,1183.86 1438.51,1185.47 1437.92,1189.00
             1437.92,1189.00 1437.92,1197.00 1437.92,1197.00
             1437.92,1197.00 1434.28,1213.00 1434.28,1213.00
             1434.28,1213.00 1431.54,1234.00 1431.54,1234.00
             1431.54,1234.00 1429.30,1244.00 1429.30,1244.00
             1429.30,1244.00 1428.48,1256.00 1428.48,1256.00
             1428.48,1256.00 1424.05,1269.72 1424.05,1269.72
             1424.05,1269.72 1422.25,1281.00 1422.25,1281.00
             1422.25,1281.00 1412.80,1303.00 1412.80,1303.00
             1412.80,1303.00 1408.98,1318.04 1408.98,1318.04
             1408.98,1318.04 1401.59,1342.00 1401.59,1342.00
             1401.59,1342.00 1396.57,1364.00 1396.57,1364.00
             1396.57,1364.00 1392.74,1375.00 1392.74,1375.00
             1392.74,1375.00 1387.50,1395.00 1387.50,1395.00
             1387.50,1395.00 1382.91,1425.00 1382.91,1425.00
             1382.91,1425.00 1379.00,1440.00 1379.00,1440.00
             1379.00,1440.00 1375.00,1440.00 1375.00,1440.00
             1375.00,1440.00 1378.58,1421.00 1378.58,1421.00
             1378.58,1421.00 1383.23,1394.00 1383.23,1394.00
             1383.23,1394.00 1392.99,1360.00 1392.99,1360.00
             1392.99,1360.00 1408.19,1307.00 1408.19,1307.00
             1408.19,1307.00 1418.53,1283.00 1418.53,1283.00
             1418.53,1283.00 1422.04,1268.00 1422.04,1268.00
             1422.04,1268.00 1425.76,1257.00 1425.76,1257.00
             1427.75,1248.83 1426.43,1246.91 1427.46,1241.00
             1427.46,1241.00 1433.14,1205.00 1433.14,1205.00
             1434.58,1196.18 1435.98,1196.57 1436.00,1186.00
             1436.00,1186.00 1436.00,1165.00 1436.00,1165.00
             1436.00,1165.00 1438.91,1141.00 1438.91,1141.00
             1438.91,1141.00 1438.91,1117.00 1438.91,1117.00
             1438.91,1117.00 1438.09,1107.00 1438.09,1107.00
             1438.09,1107.00 1436.83,1088.00 1436.83,1088.00
             1436.83,1088.00 1433.27,1065.00 1433.27,1065.00
             1433.27,1065.00 1424.42,1010.00 1424.42,1010.00
             1424.42,1010.00 1419.17,973.00 1419.17,973.00
             1419.17,973.00 1417.85,957.00 1417.85,957.00
             1417.85,957.00 1406.72,874.00 1406.72,874.00
             1403.75,851.95 1395.26,830.50 1395.00,808.00
             1394.88,796.65 1395.97,800.34 1397.62,792.00
             1397.62,792.00 1398.83,780.00 1398.83,780.00
             1398.83,780.00 1400.75,747.00 1400.75,747.00
             1400.46,738.59 1398.09,730.20 1396.45,722.00
             1395.33,716.40 1395.21,713.77 1393.33,708.00
             1390.62,699.68 1382.18,682.52 1377.57,675.00
             1377.57,675.00 1363.79,653.00 1363.79,653.00
             1363.79,653.00 1342.06,608.00 1342.06,608.00
             1342.06,608.00 1333.57,581.00 1333.57,581.00
             1329.82,568.73 1325.89,564.59 1326.00,551.00
             1326.00,551.00 1326.00,543.00 1326.00,543.00
             1326.00,543.00 1330.00,542.00 1330.00,542.00
             1330.00,537.40 1330.82,519.61 1332.63,516.27
             1333.47,514.72 1333.74,514.87 1335.00,514.00
             1333.57,506.94 1337.14,499.90 1338.38,493.00
             1339.28,488.02 1338.92,483.97 1339.00,479.00
             1339.00,479.00 1342.68,456.00 1342.68,456.00
             1343.22,450.72 1340.85,450.29 1340.36,446.83
             1340.03,444.53 1341.82,436.33 1342.67,434.00
             1342.67,434.00 1347.74,422.00 1347.74,422.00
             1347.74,422.00 1359.37,386.00 1359.37,386.00
             1360.89,380.16 1363.50,374.09 1363.00,368.00
             1361.07,374.76 1352.73,394.64 1346.91,398.05
             1344.45,399.49 1342.66,399.26 1340.00,399.00
             1340.00,399.00 1351.00,378.00 1351.00,378.00
             1348.97,382.07 1348.47,383.56 1344.00,385.00
             1344.00,385.00 1350.00,370.00 1350.00,370.00
             1350.00,370.00 1340.00,380.00 1340.00,380.00
             1340.00,380.00 1339.00,379.00 1339.00,379.00
             1340.24,374.98 1341.31,373.61 1342.91,370.00
             1350.40,353.15 1356.54,346.28 1358.04,327.00
             1358.55,321.19 1359.72,320.06 1358.04,314.00
             1354.90,323.46 1353.22,333.24 1351.39,343.00
             1350.53,347.56 1350.80,352.27 1346.00,354.00
             1346.03,344.87 1348.12,335.65 1351.00,327.00
             1351.00,327.00 1346.00,326.00 1346.00,326.00
             1346.00,326.00 1355.18,295.00 1355.18,295.00
             1355.18,295.00 1356.26,277.00 1356.26,277.00
             1356.26,277.00 1357.00,261.00 1357.00,261.00
             1357.00,261.00 1357.00,243.00 1357.00,243.00
             1353.54,251.31 1353.39,265.33 1351.34,275.00
             1350.20,280.36 1350.73,285.10 1345.00,287.00
             1345.00,287.00 1346.00,273.00 1346.00,273.00
             1344.31,276.84 1344.19,277.27 1340.00,278.00
             1340.00,278.00 1346.30,252.00 1346.30,252.00
             1346.30,252.00 1348.00,232.00 1348.00,232.00
             1348.05,222.01 1347.36,205.21 1344.00,196.00
             1344.00,196.00 1344.00,221.00 1344.00,221.00
             1343.99,225.46 1344.74,227.20 1341.00,230.00
             1338.10,220.99 1339.02,204.88 1339.00,195.00
             1338.99,187.12 1334.72,172.83 1332.03,165.09
             1328.63,155.32 1322.82,147.16 1318.25,138.00
             1318.25,138.00 1308.58,114.00 1308.58,114.00
             1303.73,102.85 1303.09,104.57 1301.83,92.00
             1301.52,88.91 1300.93,87.29 1301.18,84.00
             1301.72,76.97 1306.03,69.32 1306.00,49.00
             1306.00,49.00 1303.49,19.00 1303.49,19.00
             1303.49,19.00 1298.00,0.00 1298.00,0.00 Z
           M 1257.00,61.00
           C 1257.00,61.00 1252.00,62.00 1252.00,62.00
             1252.00,62.00 1254.00,66.00 1254.00,66.00
             1254.00,66.00 1256.00,66.00 1256.00,66.00
             1256.00,66.00 1257.00,61.00 1257.00,61.00 Z
           M 1249.00,65.00
           C 1249.00,65.00 1247.00,65.00 1247.00,65.00
             1247.00,65.00 1246.00,68.00 1246.00,68.00
             1246.00,68.00 1249.00,65.00 1249.00,65.00 Z
           M 1254.00,86.00
           C 1248.75,89.84 1244.06,95.79 1242.00,102.00
             1246.65,98.37 1252.11,91.60 1254.00,86.00 Z
           M 1211.00,91.00
           C 1206.47,93.12 1201.70,95.87 1206.00,101.00
             1206.00,101.00 1211.00,91.00 1211.00,91.00 Z
           M 1261.00,95.00
           C 1261.00,95.00 1259.00,95.00 1259.00,95.00
             1259.00,95.00 1260.00,99.00 1260.00,99.00
             1260.00,99.00 1261.00,95.00 1261.00,95.00 Z
           M 1311.00,100.00
           C 1308.14,107.30 1315.53,117.66 1318.00,125.00
             1318.00,125.00 1322.00,123.00 1322.00,123.00
             1322.00,123.00 1311.00,100.00 1311.00,100.00 Z
           M 1115.00,125.00
           C 1111.80,129.34 1113.01,135.82 1113.00,141.00
             1113.00,141.00 1112.25,152.00 1112.25,152.00
             1112.25,152.00 1113.00,164.00 1113.00,164.00
             1113.00,164.00 1117.00,164.00 1117.00,164.00
             1116.43,155.66 1112.68,157.68 1115.00,148.00
             1115.00,148.00 1121.00,151.00 1121.00,151.00
             1121.00,151.00 1117.45,137.00 1117.45,137.00
             1117.45,137.00 1115.00,125.00 1115.00,125.00 Z
           M 1258.00,142.71
           C 1262.12,141.96 1273.54,143.33 1276.40,146.57
             1280.20,150.87 1276.56,163.61 1273.21,167.44
             1272.04,168.79 1270.65,169.57 1268.98,170.15
             1260.10,173.26 1238.76,167.46 1242.65,155.00
             1244.55,148.92 1252.48,145.02 1258.00,142.71 Z
           M 1262.00,146.00
           C 1261.94,148.93 1264.10,150.13 1264.65,153.01
             1265.59,157.92 1262.39,163.03 1260.00,167.05
             1262.23,167.47 1263.70,167.96 1265.98,167.05
             1270.73,165.34 1274.57,156.91 1273.85,152.05
             1273.03,146.52 1266.24,147.04 1262.00,146.00 Z
           M 1255.00,151.00
           C 1242.92,154.61 1244.87,162.97 1256.00,166.00
             1253.51,160.10 1253.49,157.19 1255.00,151.00 Z
           M 1123.00,164.00
           C 1123.46,158.02 1122.86,154.47 1117.00,152.00
             1116.06,157.28 1117.82,161.98 1123.00,164.00 Z
           M 1126.00,172.00
           C 1126.00,172.00 1116.00,168.00 1116.00,168.00
             1116.00,168.00 1121.00,179.00 1121.00,179.00
             1125.39,177.37 1125.62,176.57 1126.00,172.00 Z
           M 1114.00,170.00
           C 1114.00,170.00 1113.00,183.00 1113.00,183.00
             1120.58,181.26 1117.46,174.52 1114.00,170.00 Z
           M 1128.00,182.00
           C 1128.00,182.00 1126.00,182.00 1126.00,182.00
             1126.00,182.00 1125.00,184.00 1125.00,184.00
             1125.00,184.00 1126.00,185.00 1126.00,185.00
             1126.00,185.00 1128.00,182.00 1128.00,182.00 Z
           M 1110.00,227.00
           C 1110.00,227.00 1108.00,227.00 1108.00,227.00
             1108.00,227.00 1107.00,231.00 1107.00,231.00
             1107.00,231.00 1110.00,227.00 1110.00,227.00 Z
           M 1359.00,228.00
           C 1357.75,231.77 1358.58,233.98 1361.00,237.00
             1361.00,237.00 1359.00,228.00 1359.00,228.00 Z
           M 1107.00,231.00
           C 1107.00,231.00 1106.00,231.00 1106.00,231.00
             1106.00,231.00 1107.00,232.00 1107.00,232.00
             1107.00,232.00 1107.00,231.00 1107.00,231.00 Z
           M 1366.00,294.00
           C 1362.82,298.91 1363.71,304.38 1367.00,309.00
             1367.00,309.00 1366.00,294.00 1366.00,294.00 Z
           M 1364.00,313.00
           C 1362.37,316.99 1360.67,328.01 1362.00,332.00
             1364.96,323.11 1365.68,322.39 1364.00,313.00 Z
           M 1367.00,332.00
           C 1367.00,332.00 1358.58,354.00 1358.58,354.00
             1358.58,354.00 1357.00,363.00 1357.00,363.00
             1363.21,352.09 1366.99,344.71 1367.00,332.00 Z
           M 1373.00,351.00
           C 1373.00,351.00 1372.00,351.00 1372.00,351.00
             1372.00,351.00 1373.00,352.00 1373.00,352.00
             1373.00,352.00 1373.00,351.00 1373.00,351.00 Z
           M 1356.00,363.00
           C 1356.00,363.00 1355.00,363.00 1355.00,363.00
             1355.00,363.00 1356.00,364.00 1356.00,364.00
             1356.00,364.00 1356.00,363.00 1356.00,363.00 Z
           M 1365.00,367.00
           C 1365.00,367.00 1364.00,367.00 1364.00,367.00
             1364.00,367.00 1365.00,368.00 1365.00,368.00
             1365.00,368.00 1365.00,367.00 1365.00,367.00 Z
           M 1353.00,377.00
           C 1353.00,377.00 1352.00,377.00 1352.00,377.00
             1352.00,377.00 1353.00,378.00 1353.00,378.00
             1353.00,378.00 1353.00,377.00 1353.00,377.00 Z
           M 1362.00,401.00
           C 1362.00,401.00 1360.00,401.00 1360.00,401.00
             1360.00,401.00 1354.00,419.00 1354.00,419.00
             1359.23,415.63 1360.33,406.72 1362.00,401.00 Z
           M 1356.00,424.00
           C 1356.00,424.00 1351.70,426.31 1351.70,426.31
             1351.70,426.31 1345.78,443.00 1345.78,443.00
             1345.78,443.00 1346.83,451.00 1346.83,451.00
             1346.83,451.00 1346.83,463.00 1346.83,463.00
             1346.83,463.00 1350.89,444.00 1350.89,444.00
             1350.89,444.00 1356.00,424.00 1356.00,424.00 Z
           M 1353.00,478.00
           C 1350.25,484.73 1349.53,495.62 1355.00,501.00
             1355.00,501.00 1354.09,493.00 1354.09,493.00
             1354.09,493.00 1353.00,478.00 1353.00,478.00 Z
           M 1346.00,487.00
           C 1344.15,489.86 1343.82,490.75 1345.00,494.00
             1345.00,494.00 1346.00,487.00 1346.00,487.00 Z
           M 1348.00,501.00
           C 1348.00,501.00 1346.00,501.00 1346.00,501.00
             1346.00,501.00 1347.00,505.00 1347.00,505.00
             1347.00,505.00 1348.00,501.00 1348.00,501.00 Z
           M 1340.00,540.00
           C 1339.03,541.32 1338.73,541.33 1338.29,543.11
             1337.37,546.91 1337.52,562.38 1339.02,566.00
             1339.02,566.00 1339.02,553.00 1339.02,553.00
             1339.02,553.00 1340.00,540.00 1340.00,540.00 Z
           M 1335.00,551.00
           C 1335.00,551.00 1334.00,551.00 1334.00,551.00
             1334.00,551.00 1335.00,552.00 1335.00,552.00
             1335.00,552.00 1335.00,551.00 1335.00,551.00 Z
           M 1330.00,554.00
           C 1329.03,557.58 1332.73,567.93 1335.00,571.00
             1334.75,565.95 1333.46,557.69 1330.00,554.00 Z
           M 1337.00,575.00
           C 1337.00,575.00 1336.00,575.00 1336.00,575.00
             1336.00,575.00 1337.00,576.00 1337.00,576.00
             1337.00,576.00 1337.00,575.00 1337.00,575.00 Z
           M 1089.00,984.00
           C 1089.00,984.00 1088.00,989.00 1088.00,989.00
             1090.35,987.11 1090.40,986.64 1089.00,984.00 Z
           M 1133.00,1440.00
           C 1136.32,1433.91 1142.97,1430.11 1147.56,1424.97
             1147.56,1424.97 1158.21,1412.00 1158.21,1412.00
             1158.21,1412.00 1170.58,1398.72 1170.58,1398.72
             1170.58,1398.72 1177.61,1390.04 1177.61,1390.04
             1183.39,1383.31 1184.62,1384.62 1190.46,1375.00
             1193.57,1369.88 1193.24,1367.94 1195.24,1363.09
             1195.24,1363.09 1205.38,1339.00 1205.38,1339.00
             1205.38,1339.00 1208.91,1325.00 1208.91,1325.00
             1208.91,1325.00 1212.49,1317.00 1212.49,1317.00
             1212.49,1317.00 1214.60,1310.00 1214.60,1310.00
             1216.44,1305.71 1219.34,1301.99 1221.71,1298.00
             1221.71,1298.00 1232.92,1279.17 1232.92,1279.17
             1232.92,1279.17 1249.84,1256.00 1249.84,1256.00
             1256.49,1246.60 1259.20,1241.51 1268.08,1233.21
             1268.08,1233.21 1273.58,1228.63 1273.58,1228.63
             1277.98,1224.52 1283.11,1218.67 1289.00,1216.70
             1294.23,1214.95 1298.08,1217.21 1303.00,1217.82
             1315.82,1219.41 1310.84,1219.55 1321.00,1222.37
             1321.00,1222.37 1328.00,1223.49 1328.00,1223.49
             1333.64,1225.08 1339.68,1230.18 1342.88,1235.00
             1346.23,1240.03 1349.20,1255.39 1351.01,1262.00
             1351.01,1262.00 1356.32,1294.00 1356.32,1294.00
             1356.32,1294.00 1362.19,1318.00 1362.19,1318.00
             1362.19,1318.00 1362.19,1327.00 1362.19,1327.00
             1363.08,1333.72 1364.44,1337.60 1364.26,1345.00
             1364.26,1345.00 1364.95,1357.83 1364.95,1357.83
             1364.95,1357.83 1364.95,1396.00 1364.95,1396.00
             1364.95,1396.00 1362.17,1424.00 1362.17,1424.00
             1362.17,1424.00 1361.00,1440.00 1361.00,1440.00
             1361.00,1440.00 1357.00,1440.00 1357.00,1440.00
             1357.00,1440.00 1358.10,1432.00 1358.10,1432.00
             1358.10,1432.00 1358.10,1422.00 1358.10,1422.00
             1358.10,1422.00 1361.00,1397.00 1361.00,1397.00
             1361.00,1397.00 1361.00,1371.00 1361.00,1371.00
             1361.00,1371.00 1359.00,1344.00 1359.00,1344.00
             1358.75,1322.04 1355.25,1312.56 1351.61,1292.00
             1351.61,1292.00 1349.54,1277.00 1349.54,1277.00
             1349.54,1277.00 1345.43,1260.00 1345.43,1260.00
             1344.27,1253.11 1342.57,1242.72 1338.21,1237.17
             1331.22,1228.28 1326.69,1228.67 1317.00,1225.72
             1306.18,1222.42 1307.51,1221.95 1295.42,1220.92
             1286.13,1220.13 1282.94,1224.60 1276.89,1229.88
             1267.40,1238.17 1260.49,1244.56 1253.25,1255.00
             1249.21,1260.84 1246.93,1267.13 1240.00,1270.00
             1239.97,1276.21 1237.15,1276.92 1234.20,1282.00
             1234.20,1282.00 1217.11,1312.00 1217.11,1312.00
             1217.11,1312.00 1210.35,1330.00 1210.35,1330.00
             1210.35,1330.00 1208.42,1340.00 1208.42,1340.00
             1208.42,1340.00 1203.44,1353.00 1203.44,1353.00
             1203.44,1353.00 1201.11,1361.00 1201.11,1361.00
             1198.91,1367.79 1195.33,1375.75 1191.88,1382.00
             1188.31,1388.47 1185.91,1388.89 1181.28,1394.01
             1181.28,1394.01 1163.95,1414.00 1163.95,1414.00
             1163.95,1414.00 1147.16,1432.28 1147.16,1432.28
             1145.00,1434.43 1142.64,1437.62 1139.99,1438.98
             1137.78,1440.11 1135.40,1439.97 1133.00,1440.00 Z"
      />
    </StyledSvg>
  );
}