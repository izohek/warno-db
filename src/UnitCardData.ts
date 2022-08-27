type UnitCardRawData = [
    number, string, string
]

/// Warno Unit Definitions
const AllUnitCards: UnitCardRawData[] = [

    [13, 'HEMTT', 'log'],

    [15, 'M106A2 MORTAR', 'art'],
    [16, 'M109A2', 'art'],

    [18, 'M110A2', 'art'],

    [20, 'M150', 'rec'],

    [22, 'M113A3', 'log'],

    [25, 'M163 PIVADS', 'aa'],
    [26, 'M1A1(HA) ABRAMS', 'tank'],
    [27, 'M1A1 ABRAMS', 'tank'],
    [28, 'M1IP ABRAMS', 'tank'],
    [29, 'M1 ABRAMS', 'tank'],
    [30, 'M270 MLRS', 'art'],

    [32, 'M3A1 BRADLEY CFV', 'rec'],

    [34, 'M48A1 CHAPARRAL', 'aa'],

    [36, 'M577 CPC', 'log'],

    [38, 'M60A3 (TTS)', 'tank'],

    [40, 'M901A3 ITV', 'tank'],
    [41, 'M901 ITV', 'tank'],

    [44, 'AH-1F TOWCOBRA', 'hel'],

    [46, 'AH-1F COBRA', 'hel'],
    [47, 'AH-64A APACHE', 'hel'],
    [48, 'AH-6F LITTLE BIRD', 'hel'],
    [49, 'CH-47C CHINOOK', 'trans'],
    [50, 'CH-47C SUPPLY', 'log'],

    [54, 'OH-58D KIOWA WR.', 'rec'],
    [55, 'OH-58C/S', 'aa'],

    [58, 'UH-60A BLACKHAWK', 'trans'],

    [61, 'EF-111A RAVEN [SEAD]', 'air'],

    [80, 'T-80B', 'tank'],
    [81, 'T-80U', 'tank'],
    [82, '9K37 BUK-M1', 'aa'],
    [83, 'MT-LB STRELA-10M', 'aa'],
    [84, '9K33M3 OSA-AKM', 'aa'],
    [85, '2K22 TUNGUSKA', 'aa'],
    [86, 'BM-30 SMERCH', 'art'],
    [87, 'TOS-1 BURATINO', 'art'],
    [88, '2S1 GVOZDIKA', 'art'],
    [89, '2S3M AKATSIYA', 'art'],

    [90, '2S7M MALKA', 'art'],

    [92, 'BMP-1P', 'trans'],
    [93, 'BMP-2', 'trans'],
    [94, 'BMP-3', 'trans'],

    [95, 'BRDM-2 KONKURS', 'tank'],

    [97, 'BTR-80', 'trans'],

    [100, 'DESANT. UAZ-3151 AGS-17', 'inf'],
    [102, 'URAL-4320 SNAB.', 'log'],
    [103, 'KA-50 AKULA [AT]', 'hel'],

    [105, 'MI-24VP', 'hel'],

    [107, 'MI-26 GRUZOVDI', 'log'],

    [110, 'MIG-23MLD [AA]', 'air'],
    [111, 'MIG-25BM [SEAD]', 'air'],
    [112, 'MIG-27M [AT]', 'air'],

    [114, 'MIG-31M [AA]', 'air'],
    [115, 'SU-24MP [SEAD]', 'air'],
    [116, 'SU-24M [HE]', 'air'],

    [119, 'SU-27S [AA]', 'air'],

    [123, 'M998 HUMVEE', 'trans'],

    [125, 'SU-25 [AT]', 'air'],

    [134, 'ENGINEERS (DRAGON)', 'inf'],
    [135, 'ENGINEERS (FLASH)', 'inf'],

    [137, 'MECH. RIFLES', 'inf'],
    [138, 'FIRE TEAM (DRAGON)', 'inf'],
    [139, 'FIRE TEAM (LAW)', 'inf'],
    [140, 'SCOUTS', 'rec'],

    [142, 'MIG-23ML [AA]', 'air'],

    [164, 'T-80BV IZD. 39', 'tank'],
    [165, 'M2A2 BRADLEY IFV', 'trans'],
    [166, 'ZSU-23-4M3 BIRYUSA', 'aa'],
    [167, 'BM-21 GRAD', 'art'],

    [169, 'M1025 HUMVEE AGL', 'rec'],
    [170, 'ILTIS FUHRUNGS', 'log'],
    [171, 'GEPARD 1A1', 'aa'],

    [174, 'HS.30 PZ.MORSER', 'art'],

    [176, 'CH-53G MUN.', 'log'],

    [178, 'DESANTNIKI', 'inf'],

    [181, 'AERO-RIFLES', 'inf'],

    [184, 'ENGINEERS LDR.', 'inf'],

    [187, 'M113A2 SUPPLY', 'log'],
    [188, 'M151 MUTT CP', 'log'],

    [190, 'M1A1 ABRAMS CP', 'tank'],
    [191, 'M35 SUPPLY', 'log'],
    [192, 'M728 CEV', 'tank'],

    [195, 'MILITARY POLICE (M67)', 'inf'],
    [196, 'MILITARY POLICE', 'inf'],
    [197, 'MECH. RIFLES LDR.', 'inf'],

    [199, 'OH-58C CMD', 'log'],
    [200, 'OH-58C SCOUT', 'rec'],

    [202, 'UH-60A CO', 'log'],
    [203, 'UH-60A SUPPLY', 'log'],
    [204, 'ENGINEERS', 'inf'],

    [205, 'S21 GWOSDIKA', 'art'],
    [206, '2S3M AKATSIYA', 'art'],
    [207, 'SPz BMP-1 SP2', 'trans'],

    [209, 'SPW-70', 'log'],
    [210, '9K33M3 OSA-AKM', 'aa'],
    [211, 'FLA-SFL 23-4 SHILKA', 'aa'],
    [212, 'URAL-4320 MUN.', 'log'],

    [214, 'GREEN BERETS', 'inf'],
    [215, 'RANGERS', 'inf'],

    [218, 'SAPERI (RPO)', 'inf'],
    [219, 'SAPERI', 'inf'],

    [221, 'IGLA', 'aa'],
    [222, 'MOTOSTRELKI', 'inf'],
    [223, 'MOTOSTRELKI (METIS)', 'inf'],
    [224, 'MOTOSTRELKI (BMP)', 'inf'],
    [225, 'SPETSNAZ G.R.U.', 'rec'],
    [226, 'RAZVEDKA', 'rec'],
    [227, 'SPETSNAZ', 'inf'],
    [228, 'UAZ-469 FUH.', 'log'],

    [232, 'LARS 2', 'art'],
    [233, 'UNIMOG S404 MUN.', 'log'],
    [234, 'LUCHS A1', 'rec'],
    [235, 'TPz FUCHS', 'trans'],
    [236, 'LEOPARD 1A1A1', 'tank'],
    [237, 'JAGUAR 2', 'tank'],

    [264, 'HARRIER GR.3 [AA]', 'air'],

    [266, 'SK12M3 KUB-M3', 'aa'],

    [274, 'GAZELLE CANON', 'hel'],
    [275, 'GAZELLE HOT', 'hel'],

    [277, 'T813 MUN.', 'log'],
    [278, 'MFRW RM-70', 'art'],
    [279, 'AUFKL.PZ BRM-1', 'rec'],
    [280, 'SPW-40P2 KONKURS', 'tank'],
    [281, 'SPW-40P2 MALYUTKA-P', 'tank'],

    [283, 'MIG-21BIS [RKT1]', 'air'],

    [288, 'KPZ. T-72', 'tank'],

    [291, 'MIRAGE 2000C RDI', 'air'],

    [297, 'STINGER', 'aa'],

    [299, 'M30 107MM', 'art'],

    [302, 'MECH. RIFLES (LAW)', 'inf'],

    [305, 'M125 MORTAR', 'art'],
    [306, 'M1025 HUMVEE M2HB', 'trans'],
    [307, 'M151A2 M2HB', 'trans'],

    [309, 'SPW-152K', 'trans'],

    [314, 'SUPER PUMA', 'trans'],
    [315, 'MIG-23MF [HE]', 'air'],
    [316, 'SU-22M4 [HE]', 'air'],

    [325, 'PANZERJAGER', 'inf'],

    [327, 'GRENZER', 'rec'],

    [329, 'FS-JAGER', 'inf'],
    [330, 'FERNSPAHER', 'rec'],
    [331, 'JAGER', 'inf'],
    [332, 'PZ.GRENADIER (CARLG)', 'inf'],

    [335, 'AMX-10 RC', 'rec'],

    [350, 'PIONIER', 'inf'],
    [351, 'PIONIER (FLAM)', 'inf'],
    [352, 'DESANT. SAPERI (RPO)', 'inf'],
    [353, 'PIONIER', 'inf'],
    [354, 'DESANT. SAPERI', 'inf'],
    [355, 'FS-JAGER', 'inf'],
    [356, 'FS-EINSATZGRUPPE', 'rec'],
    [357, 'FS-JAGER (METIS)', 'inf'],

    [359, 'FeldJager', 'inf'],
    [360, 'HEIMATSCHUTZEN', 'inf'],
    [361, 'AUFKLARER (HVY)', 'rec'],
    [362, 'RAZVEDKA (HVY)', 'rec'],
    [363, 'JAGER AUFKL.', 'rec'],

    [366, 'DESANT. IGLA', 'aa'],
    [367, 'FLIEGERFAUST', 'aa'],
    [368, 'FLA-RAK. STRELA-2M', 'aa'],

    [370, 'MOT.-SCHUTZEN (BTR)', 'inf'],
    [371, 'MOT.-SCHUTZEN', 'inf'],

    [375, 'PZ.GRENADIER (M113)', 'inf'],
    [376, 'PZ.GRENADIER (MARDER)', 'inf'],

    [377, 'AUFKLARER', 'rec'],

    [380, 'AUFKLARER', 'rec'],
    [381, 'DESANT. RAZVEDKA', 'rec'],

    [384, 'DESANTNIKI (BMD)', 'inf'],
    [385, 'DESANTNIKI (METIS)', 'inf'],
    [386, 'SICHERUNGS.', 'inf'],
    [387, 'TORNADO F.3 [AA]', 'air'],

    [389, 'M113A3 ACAV', 'trans'],
    [390, 'M113A3 DRAGON', 'trans'],

    [392, 'M35', 'trans'],
    [393, 'M60A3 (TTS)', 'tank'] /* COMMAND VERSION */,
    [394, 'AB FIRE TEAM (DRAGON)', 'inf'],
    [395, 'AB FIRE TEAM (AT4)', 'inf'],

    [399, 'M151', 'trans'],

    [401, 'GREEN BERETS LDR.', 'inf'],

    [407, '2K12M3 KUB-M3', 'aa'],
    [408, 'RAZV. BMP-1P', 'trans'],
    [409, 'BMP-1K3', 'log'],
    [410, 'BRDM-2U', 'log'],
    [411, 'BRDM-2', 'rec'],
    [412, 'BRDM STRELA-1', 'aa'],
    [413, 'BRM-1', 'rec'],
    [414, 'BTR-60PBK', 'log'],
    [415, 'BTR-60PB', 'log'],
    [416, 'SAPERI KOM.', 'inf'],
    [417, 'MT-LB SNAB.', 'log'],
    [418, 'MT-LB', 'log'],
    [419, 'MOTOSTRELKI KOM.', 'inf'],
    [420, 'SPETSNAZ KOM.', 'inf'],

    [422, 'T-80BVK', 'tank'],

    [424, 'T-80UK', 'tank'],

    [426, 'WARNOBUG-RAZVEDKA TRANSPORT?', 'trans'],
    [427, 'UAZ-3151', 'trans'],

    [430, 'DESANT. KOM.', 'inf'],
    [431, 'DESANT. SAPERI KOM.', 'inf'],

    [432, 'AH-64A APACHE [ATGM]', 'hel'],
    [433, 'AH-64A APACHE [RKT]', 'hel'],

    [438, 'F-111E [CLU]', 'air'],
    [439, 'F-111E [HE]', 'air'],
    [440, 'F-111E [NPLM]', 'air'],

    [442, 'F-4E PHANTOM II [AA]', 'air'],
    [443, 'F-4E PHANTOM II [CLU]', 'air'],
    [444, 'F-4G WILD WEASEL V [SEAD]', 'air'],
    [445, 'F-4E PHANTOM II [NPLM]', 'air'],
    [446, 'M270 MLRS CLUSTER', 'art'],

    [448, 'F-111F [CLU]', 'air'],
    [449, 'F-111F [HE]', 'air'],
    [450, 'F-111F [NPLM]', 'air'],
    [451, 'A-10A THUNDERBOLT II [AT]', 'air'],
    [452, 'A-10A [HE]', 'air'],
    [453, 'F-15C EAGLE [AA]', 'air'],

    [457, 'F-16C [HE]', 'air'],
    [458, 'F-16C [AT]', 'air'],
    [459, 'F-16C FIGHTING FALCON [AA]', 'air'],
    [460, 'F-16C [SEAD]', 'air'],
    [461, 'F-16C [CLU]', 'air'],
    [462, 'F-16C [NPLM]', 'air'],

    [465, 'MIG-27M [HE]', 'air'],
    [466, 'MIG-27M [NPLM]', 'air'],
    [467, 'MIG-27M [RKT]', 'air'],
    [468, 'MIG-27K [SEAD]', 'air'],

    [477, 'MIG-29 [AA]', 'air'],

    [482, 'SU-24M [CLU]', 'air'],
    [483, 'SU-24M [NPLM]', 'air'],
    [484, 'SU-25 [CLU]', 'air'],

    [485, 'SU-25 [HE]', 'air'],
    [486, 'SU-25 [NPLM]', 'air'],
    [487, 'SU-25 [RKT]', 'air'],
    [488, 'Mi-8T', 'trans'],

    [490, 'MI-8MT GRUZOVDI', 'log'],
    [491, 'MI-9', 'log'],
    [492, 'MI-8MTA', 'rec'],
    [493, 'F-4E PHANTOM II [HE]', 'air'],
    [494, 'GAZ-66', 'trans'],

    [496, 'JAGER FUH.', 'inf'],
    [497, 'KANJPZ', 'tank'],
    [498, 'M1 ABRAMS CP', 'tank'],
    [499, 'UNIMOG S404', 'trans'],

    [500, 'ILTIS', 'trans'],
    [501, 'MTW M113A1G', 'trans'],
    [502, 'UAZ-469 SPG9', 'inf'],
    [503, 'UAZ-469', 'trans'],
    [504, 'W50 LA/A', 'trans'],

    [507, 'BM-27 URAGAN', 'art'],

    [509, 'ALPHA JET A [HE]', 'air'],
    [510, 'ALPHA JET A [NPLM]', 'air'],

    [512, 'MI-8MT [RKT 3]', 'hel'],
    [513, 'MI-8MT [RKT 1]', 'hel'],
    [514, 'MI-8MT [RKT 2]', 'hel'],
    [515, 'MI-24V [AT]', 'hel'],
    [516, 'PIONIER FUH.', 'inf'],
    [517, 'FS-JAGER FUH.', 'inf'],
    [518, 'FS-JAGER FUH.', 'inf'],

    [520, 'FS-SPRENGTAUCHER', 'rec'],
    [521, 'FS-JAGER AUFK.', 'rec'],

    [523, 'K.D.A. FUH.', 'inf'],
    [524, 'K.D.A. SCHUTZEN.', 'inf'],
    [525, 'MOT.-SCHUTZEN FUH.', 'inf'],
    [526, 'PZ.GREN. FUH.', 'inf'],

    [529, 'SPEZIALAUFKLARER', 'rec'],

    [533, 'MI-24V [AA]', 'hel'],
    [534, 'MI-24V [RKT]', 'hel'],
    [535, 'SU-22M4 [CLU]', 'air'],
    [536, 'SU-22M4 [NPLM]', 'air'],

    [538, 'AUFKL. BMP-1', 'rec'],
    [539, 'BMP-1K SP2', 'log'],
    [540, 'SPW-40P2(K)', 'log'],
    [541, 'BRDM-2', 'rec'],
    [542, 'BTR-50PU', 'log'],
    [543, 'BTR-50PK', 'trans'],

    [546, 'PIONIER FUH.', 'inf'],
    [547, 'OTDELENIE PODDERZHKI', 'inf'],

    [550, 'LRS', 'rec'],

    [552, 'LEOPARD 1A5 FUH.', 'tank'],
    [553, 'LEOPARD 1A5', 'tank'],
    [554, 'LEOPARD 2A3 FUH.', 'tank'],
    [555, 'LEOPARD 2A3', 'tank'],

    [556, 'M109A3GA1', 'art'],
    [557, 'M110A2G', 'art'],
    [558, 'M113A1G AUFKL.', 'trans'],
    [559, 'M113A1 MUN.', 'log'],
    [560, 'PANZERMORSER', 'art'],
    [561, 'M48A2CGA1', 'tank'],
    [562, 'M577GA2', 'log'],
    [563, 'MT-LB STRELA-10M', 'aa'],
    [564, 'MT-LB MUN.', 'log'],
    [565, 'MT-LB', 'trans'],

    [566, 'MARDER 1A2 MILAN', 'trans'],
    [567, 'MARDER 1A2', 'trans'],
    [568, 'MARDER 1A3 MILAN', 'trans'],
    [569, 'MARDER 1A3', 'trans'],
    [570, 'FRP ROLAND 3', 'aa'],
    [571, 'KPZ. T-55AM2B', 'tank'],
    [572, 'KPZ. T-55AM2 FUH.', 'tank'],
    [573, 'KPZ. T-55AM2', 'tank'],
    [574, 'KPZ. T-55A FUH.', 'tank'],
    [575, 'KPZ. T-55A', 'tank'],
    [576, 'KPZ. T-72GM FUH.', 'tank'],
    [577, 'KPZ. T-72GM', 'tank'],
    [578, 'FUCHS FÜ.FU.', 'log'],
    [579, 'TPz FUCHS MILAN', 'trans'],
    [580, 'MI-24P', 'hel'],
    [581, 'F-4F [AA]', 'air'],

    [613, 'FLA-SFL 57-2', 'aa'],
    [614, 'MAN KAT 6X6 MUN.', 'log'],
    [615, 'FIRE TEAM (AT-4)', 'inf'],
    [616, 'ALPHA JET A [RKT]', 'air'],

    [618, 'G.91R/3 GINA [HE]', 'air'],
    [619, 'G.91R/3 GINA [NPLM]', 'air'],
    [620, 'G.91R/3 GINA [RKT]', 'air'],

    [622, 'SPz BMP-1 SP1', 'trans'],
    [623, 'PIONIER (ARMBRUST)', 'inf'],
    [624, 'PIONIER (FLAM)', 'inf'],
    [625, 'CVR(T) STRIKER', 'tank'],

    [628, 'JAGUAR 1', 'tank'],
    [629, 'MARS', 'art'],
    [630, 'M48A2GA2', 'tank'],
    [631, 'FRP ROLAND 2', 'aa'],
    [632, 'ECLAIREURS', 'rec'],
    [633, 'KPZ. T-72GM1', 'tank'],
    [634, 'FLAMPZ. TO-55', 'tank'],

    [638, 'ALOUETTE II', 'rec'],
    [639, 'BO-105 PAH-1A1', 'hel'],
    [640, 'BO-105 PAH-1', 'hel'],
    [641, 'MI-24D [AT]', 'hel'],
    [642, 'MI-24P [AT]', 'hel'],
    [643, 'MI-2', 'rec'],
    [644, 'Mi-2T', 'trans'],
    [645, 'MI-8TV [RKT 1]', 'hel'],
    [646, 'MI-8MT [GUV]', 'hel'],
    [647, 'MI-8MT [GUV]', 'hel'],
    [648, 'MI-8TV [RKT 2]', 'hel'],
    [649, 'Mi-8T', 'trans'],
    [650, 'UH-1D', 'trans'],
    [651, 'F-104G [HE]', 'air'],
    [652, 'F-104G [AA]', 'air'],
    [653, 'F-4F [AT]', 'air'],
    [654, 'F-4F [HE2]', 'air'],
    [655, 'F-4F [HE2]', 'air'],

    [658, 'MIG-21BIS [AA]', 'air'],
    [659, 'MIG-21BIS [HE]', 'air'],
    [660, 'MIG-23MF [AT]', 'air'],
    [661, 'MIG-29A [AA]', 'air'],
    [662, 'SU-22M-4K [AT]', 'air'],
    [663, 'SU-22M-4P [SEAD]', 'air'],
    [664, 'TORNADO IDS [AT]', 'air'],

    [666, 'TORNADO IDS [CLU]', 'air'],
    [667, 'TORNADO IDS [HE]', 'air'],

    [669, 'TORNADO IDS [MW1]', 'air'],

    [708, 'TORNADO GR.1 [SEAD]', 'air'],

    [710, 'TPZ FUCHS RASIT', 'rec'],

    [712, 'TPZ GREEN ARCHER', 'rec'],

    [714, 'T813', 'trans'],
    [715, 'AH-1F ATAS', 'aa'],
    [716, 'F-104G [AT]', 'air'],

    [717, 'MIG-21BIS [AA2]', 'air'],
    [718, 'Mi-2T', 'trans'],
    [719, 'FS-PALR FAGOT', 'inf'],

    [722, 'BMP-1PG', 'trans'],

    [753, 'DESANT. KOM. (DSH)', 'inf'],
    [754, 'DESANTNIKI (DSH)', 'inf'],
    [755, 'PALR FAGOT', 'inf'],
    [756, 'FAGOT', 'inf'],
    [757, 'I-TOW', 'inf'],
    [758, 'PALR KONKURS', 'inf'],
    [759, 'KONKURS', 'inf'],

    [761, 'PALR MILAN 1', 'inf'],
    [762, 'PALR MILAN 2', 'inf'],
    [763, 'FS-PALR MILAN 2', 'inf'],
    [764, 'M40A1', 'inf'],
    [765, 'SPG-9', 'inf'],
    [766, 'FS-SPG-9', 'inf'],
    [767, 'TOW-2', 'inf'],
    [768, 'AB TOW-2', 'inf'],

    [770, 'CVR(T) SCORPION', 'rec'],
    [771, 'CVR(T) SPARTAN', 'trans'],
    [772, 'CVR(T) SULTAN', 'log'],
    [773, 'CVR(T) SCIMITAR', 'rec'],
    [774, 'MAN KAT 6X6', 'trans'],
    [775, 'MOT.-SCHUTZEN (S.MG)', 'inf'],
    [776, 'PULEMETCHIKI', 'inf'],
    [777, 'AUFKL. PT-76B', 'rec'],
    [778, 'GUNNERS', 'inf'],

    [782, 'AH-1F HEAVY HOG', 'hel'],

    [785, 'B0-105M VBH', 'rec'],
    [786, 'B0-105M', 'trans'],

    [788, 'MI-24D [AA]', 'hel'],
    [789, 'MI-24D [AT 2]', 'hel'],
    [790, 'MI-24P [AT 2]', 'hel'],

    [792, 'MI-8TB', 'hel'],
    [793, 'MI-8T MUN.', 'log'],
    [794, 'MI-9', 'log'],

    [796, 'MIG-23MF [AA]', 'air'],
    [797, 'MIG-23ML [AA]', 'air'],

    [799, 'MILAN 2', 'inf'],

    [803, 'DESANT. SPG-9', 'inf'],
    [804, 'AB ENGINEERS LDR.', 'inf'],
    [805, 'AIRBORNE ENGINEERS', 'inf'],
    [806, 'AB MILITARY POLICE (M67)', 'inf'],
    [807, 'AB MILITARY POLICE', 'inf'],
    [808, 'DESANT. FAGOT', 'inf'],
    [809, 'DESANT. KONKURS', 'inf'],
    [810, 'BM-21V GRAD-V', 'art'],
    [811, 'FH155-1 155MM', 'art'],
    [812, 'T-62M1', 'tank'],
    [813, 'T-62MV', 'tank'],
    [814, 'T-62MK', 'tank'],
    [815, 'T-62M', 'tank'],
    [816, 'DESANT. UAZ-3151 AGS-17', 'inf'],
    [817, 'A-10A [RKT]', 'air'],
    [818, '2S9 NONA', 'art'],
    [819, 'PAK D-44 85MM', 'tank'],

    [821, 'DESANT. D-44 85MM', 'tank'],
    [822, 'PAK MT-12 100M', 'tank'],
    [823, 'MT-12 RAPIRA 100M', 'tank'],
    [824, 'AIRBORNE LDR.', 'inf'],
    [825, 'AIRBORNE (DRAGON)', 'inf'],
    [826, 'AIRBORNE GUNNERS', 'inf'],
    [827, 'AIRBORNE SCOUTS', 'rec'],
    [828, 'AIRBORNE', 'inf'],
    [829, 'BMD-1KSH SOROKA', 'log'],

    [830, 'BMD-1', 'trans'],
    [831, 'BMD-2', 'trans'],
    [832, 'BTR-RD ROBOT', 'trans'],
    [833, 'BTR-D', 'trans'],
    [834, 'BTR-ZD SKREZHET', 'trans'],
    [835, 'FK2O-2 20MM ZWILLINGE', 'aa'],
    [836, 'I-HAWK', 'aa'],
    [837, 'I-HAWK', 'aa'],
    [838, 'M167 VULCAN 20MM', 'aa'],
    [839, 'ZU-23-2', 'aa'],

    [841, 'GAZ-66B', 'trans'],

    [842, 'GAZ-66 ZU-23-2', 'aa'],

    [844, 'D-20 152MM', 'art'],
    [845, 'D-30 122MM', 'art'],
    [846, 'D-30 122MM', 'art'],
    [847, 'DESANT. D-30 122MM', 'art'],
    [848, 'M102 105MM', 'art'],
    [849, 'M-46 130MM', 'art'],
    [850, 'AB M1025 HUMVEE CP', 'log'],
    [851, 'AB M1025 HUMVEE TOW', 'tank'],
    [852, 'M551 TTS SHERIDAN', 'tank'] /* COMMAND VERSION */,
    [853, 'M551 TTS SHERIDAN', 'tank'],
    [854, 'M998 AVENGER', 'aa'],
    [855, 'AB STINGER', 'aa'],
    [856, 'MT-LB VASILEK', 'art'],
    [857, 'AB M30 107MM', 'art'],
    [858, '2B9 VASILEK', 'art'],
    [859, '2S12 120MM', 'art'],
    [860, 'DESANT. 2S12 120MM', 'art'],
    [861, 'GR.WFR. M43 120MM', 'art'],
    [862, 'MRS. 120MM TAMPELLA', 'art'],
    [863, 'DESANT. KSHM R-149', 'log'],
    [864, 'DESANT. UAZ-3151 KONKURS', 'tank'],
    [865, 'DESANT. UAZ-3151 SPG9', 'inf'],
    [866, 'DESANT. UAZ-3151 SNAB.', 'log'],
    [867, 'DESANT. PULEMETCHIKI', 'inf'],
    [868, 'MI-24K', 'rec'],

    [870, 'MIG-21BIS [RKT2]', 'air'],
    [871, 'MIG-25RBF [HE]', 'air'],
    [872, 'FH M1A2 (A2) 105MM', 'art'],
    [873, 'M48A2GA2 FUH.', 'tank'],
    [874, 'PT-76B FUH.', 'tank'],

    [877, 'FLAK ZU-23-2', 'aa'],

    [879, 'AIRBORNE ENGINEERS (FLASH)', 'inf'],
    [880, 'RESERVE PIONIER', 'inf'],

    [886, 'FLAK L/70 BOFORS', 'aa'],
    [887, 'FK20-2 20MM', 'aa'],

    [899, 'CMDT AEROMOBILES', 'inf'],
    [900, 'AEROMOBILES', 'inf'],

    [902, 'KPZ. T-34/85M', 'tank'],
    [903, 'UAZ-469 FAGOT', 'tank'],
    [904, 'P4 MILAN', 'tank'],

    [906, 'VPV FUH.', 'inf'],
    [907, 'VPB', 'inf'],
    [908, 'GAZELLE CANON', 'rec'],
    [909, 'GAZELLE HOT 2', 'hel'],
    [910, 'GAZELLE LISSE', 'rec'],
    [911, 'KA-50 AKULA [AA]', 'aa'],
    [912, 'MIRAGE 5 F (CLU)', 'air'],
    [913, 'SU-17M4 [RKT]', 'air'],
    [914, 'FS-JAGER B1', 'rec'],
    [915, 'SCHWIM.PZ. PT-76B', 'tank'],
    [916, 'F-111F [LGB2]', 'air']
]

export { AllUnitCards }
