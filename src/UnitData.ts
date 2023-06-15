/// Armory category for a unit
export type UnitCategory = 'log' | 'inf' | 'art' | 'tank' | 'aa' | 'rec' | 'hel' | 'air' | 'trans'

/// Unit information
export interface UnitDefinition {
    id: number
    name: string
    descriptor: string
    category: string
}

/// Definition of all units
export const AllUnits: UnitDefinition[] = [
    {
        id: 12,
        name: 'HEMTT',
        descriptor: 'Descriptor_Unit_HEMTT_US',
        category: 'log'
    },
    {
        id: 14,
        name: 'M106A2 MORTAR',
        descriptor: 'Descriptor_Unit_M106A2_HOWZ_US',
        category: 'art'
    },
    {
        id: 15,
        name: 'M109A2',
        descriptor: 'Descriptor_Unit_M109A2_HOWZ_US',
        category: 'art'
    },
    {
        id: 17,
        name: 'M110A2',
        descriptor: 'Descriptor_Unit_M110A2_HOWZ_US',
        category: 'art'
    },
    {
        id: 19,
        name: 'M150',
        descriptor: 'Descriptor_Unit_M113A1_TOW_US',
        category: 'rec'
    },
    {
        id: 21,
        name: 'M113A3',
        descriptor: 'Descriptor_Unit_M113A3_US',
        category: 'trans'
    },
    {
        id: 24,
        name: 'M163 PIVADS',
        descriptor: 'Descriptor_Unit_M163_PIVADS_US',
        category: 'aa'
    },
    {
        id: 25,
        name: 'M1A1(HA) ABRAMS',
        descriptor: 'Descriptor_Unit_M1A1HA_Abrams_US',
        category: 'tank'
    },
    {
        id: 26,
        name: 'M1A1 ABRAMS',
        descriptor: 'Descriptor_Unit_M1A1_Abrams_US',
        category: 'tank'
    },
    {
        id: 27,
        name: 'M1IP ABRAMS',
        descriptor: 'Descriptor_Unit_M1IP_Abrams_US',
        category: 'tank'
    },
    {
        id: 28,
        name: 'M1 ABRAMS',
        descriptor: 'Descriptor_Unit_M1_Abrams_US',
        category: 'tank'
    },
    {
        id: 29,
        name: 'M270 MLRS',
        descriptor: 'Descriptor_Unit_M270_MLRS_US',
        category: 'art'
    },
    {
        id: 31,
        name: 'M3A1 BRADLEY CFV',
        descriptor: 'Descriptor_Unit_M3A1_Bradley_CFV_US',
        category: 'rec'
    },
    {
        id: 33,
        name: 'M48A1 CHAPARRAL',
        descriptor: 'Descriptor_Unit_M48_Chaparral_MIM72F_US',
        category: 'aa'
    },
    {
        id: 35,
        name: 'M577 CPC',
        descriptor: 'Descriptor_Unit_M577_US',
        category: 'log'
    },
    {
        id: 37,
        name: 'M60A3 (TTS)',
        descriptor: 'Descriptor_Unit_M60A3_Patton_US',
        category: 'tank'
    },
    {
        id: 39,
        name: 'M901A3 ITV',
        descriptor: 'Descriptor_Unit_M901A1_ITW_US',
        category: 'tank'
    },
    {
        id: 40,
        name: 'M901 ITV',
        descriptor: 'Descriptor_Unit_M901_TOW_US',
        category: 'tank'
    },
    {
        id: 43,
        name: 'AH-1F TOWCOBRA',
        descriptor: 'Descriptor_Unit_AH1F_Cobra_US',
        category: 'hel'
    },
    {
        id: 45,
        name: 'AH-1F COBRA',
        descriptor: 'Descriptor_Unit_AH1S_Cobra_US',
        category: 'hel'
    },
    {
        id: 46,
        name: 'AH-64A APACHE',
        descriptor: 'Descriptor_Unit_AH64_Apache_US',
        category: 'hel'
    },
    {
        id: 47,
        name: 'AH-6F LITTLE BIRD',
        descriptor: 'Descriptor_Unit_AH6C_Little_Bird_US',
        category: 'hel'
    },
    {
        id: 48,
        name: 'CH-47C CHINOOK',
        descriptor: 'Descriptor_Unit_CH47_Chinook_US',
        category: 'trans'
    },
    {
        id: 49,
        name: 'CH-47C SUPPLY',
        descriptor: 'Descriptor_Unit_CH47_Super_Chinook_US',
        category: 'log'
    },
    {
        id: 52,
        name: 'OH-58D KIOWA',
        descriptor: 'Descriptor_Unit_OH58D_Combat_Scout_US',
        category: 'rec'
    },
    {
        id: 53,
        name: 'OH-58D KIOWA WR.',
        descriptor: 'Descriptor_Unit_OH58D_Kiowa_Warrior_US',
        category: 'rec'
    },
    {
        id: 54,
        name: 'OH-58C/S',
        descriptor: 'Descriptor_Unit_OH58_CS_US',
        category: 'aa'
    },
    {
        id: 56,
        name: 'UH-1H HUEY',
        descriptor: 'Descriptor_Unit_UH1H_Huey_US',
        category: 'trans'
    },
    {
        id: 57,
        name: 'UH-60A BLACKHAWK',
        descriptor: 'Descriptor_Unit_UH60A_Black_Hawk_US',
        category: 'trans'
    },
    {
        id: 60,
        name: 'EF-111A RAVEN [SEAD]',
        descriptor: 'Descriptor_Unit_EF111_Raven_US',
        category: 'air'
    },
    {
        id: 77,
        name: 'T-64BV',
        descriptor: 'Descriptor_Unit_T64BV_SOV',
        category: 'tank'
    },
    {
        id: 78,
        name: 'T-64B',
        descriptor: 'Descriptor_Unit_T64B_SOV',
        category: 'tank'
    },
    {
        id: 79,
        name: 'T-80B',
        descriptor: 'Descriptor_Unit_T80B_SOV',
        category: 'tank'
    },
    {
        id: 80,
        name: 'T-80U',
        descriptor: 'Descriptor_Unit_T80U_SOV',
        category: 'tank'
    },
    {
        id: 81,
        name: '9K37 BUK-M1',
        descriptor: 'Descriptor_Unit_Buk_9K37M_SOV',
        category: 'aa'
    },
    {
        id: 82,
        name: 'MT-LB STRELA-10M',
        descriptor: 'Descriptor_Unit_MTLB_Strela10_SOV',
        category: 'aa'
    },
    {
        id: 83,
        name: '9K33M3 OSA-AKM',
        descriptor: 'Descriptor_Unit_Osa_9K33M3_SOV',
        category: 'aa'
    },
    {
        id: 84,
        name: '2K22 TUNGUSKA',
        descriptor: 'Descriptor_Unit_Tunguska_2K22_SOV',
        category: 'aa'
    },
    {
        id: 85,
        name: 'BM-30 SMERCH',
        descriptor: 'Descriptor_Unit_BM30_Smerch_SOV',
        category: 'art'
    },
    {
        id: 86,
        name: 'TOS-1 BURATINO',
        descriptor: 'Descriptor_Unit_TOS1_Buratino_SOV',
        category: 'art'
    },
    {
        id: 87,
        name: '2S1 GVOZDIKA',
        descriptor: 'Descriptor_Unit_2S1_Gvozdika_SOV',
        category: 'art'
    },
    {
        id: 88,
        name: '2S3M AKATSIYA',
        descriptor: 'Descriptor_Unit_2S3M_Akatsiya_SOV',
        category: 'art'
    },
    {
        id: 89,
        name: '2S7M MALKA',
        descriptor: 'Descriptor_Unit_2S7M_Malka_SOV',
        category: 'art'
    },
    {
        id: 90,
        name: 'KSHM R-149',
        descriptor: 'Descriptor_Unit_UAZ_469_CMD_SOV',
        category: 'log'
    },
    {
        id: 91,
        name: 'BMP-1P',
        descriptor: 'Descriptor_Unit_BMP_1P_SOV',
        category: 'trans'
    },
    {
        id: 92,
        name: 'BMP-2',
        descriptor: 'Descriptor_Unit_BMP_2_SOV',
        category: 'trans'
    },
    {
        id: 93,
        name: 'BMP-3',
        descriptor: 'Descriptor_Unit_BMP_3_SOV',
        category: 'trans'
    },
    {
        id: 94,
        name: 'BRDM-2 KONKURS',
        descriptor: 'Descriptor_Unit_BRDM_2_Konkurs_SOV',
        category: 'tank'
    },
    {
        id: 96,
        name: 'BTR-80',
        descriptor: 'Descriptor_Unit_BTR_80_SOV',
        category: 'trans'
    },
    {
        id: 97,
        name: 'MT-LB SHTURM-S',
        descriptor: 'Descriptor_Unit_MTLB_Shturm_SOV',
        category: 'tank'
    },
    {
        id: 99,
        name: 'DESANT. UAZ-3151 AGS-17',
        descriptor: 'Descriptor_Unit_UAZ_469_AGL_SOV',
        category: 'inf'
    },
    {
        id: 101,
        name: 'URAL-4320 SNAB.',
        descriptor: 'Descriptor_Unit_Ural_4320_SOV',
        category: 'log'
    },
    {
        id: 102,
        name: 'KA-50 AKULA [AT]',
        descriptor: 'Descriptor_Unit_Ka_50_SOV',
        category: 'hel'
    },
    {
        id: 104,
        name: 'MI-24VP',
        descriptor: 'Descriptor_Unit_Mi_24VP_SOV',
        category: 'hel'
    },
    {
        id: 106,
        name: 'MI-26 GRUZOVOI',
        descriptor: 'Descriptor_Unit_Mi_26_SOV',
        category: 'log'
    },
    {
        id: 109,
        name: 'MIG-23MLD [AA]',
        descriptor: 'Descriptor_Unit_MiG_23P_SOV',
        category: 'air'
    },
    {
        id: 110,
        name: 'MIG-25BM [SEAD]',
        descriptor: 'Descriptor_Unit_MiG_25BM_SOV',
        category: 'air'
    },
    {
        id: 111,
        name: 'MIG-27M [AT]',
        descriptor: 'Descriptor_Unit_MiG_27M_SOV',
        category: 'air'
    },
    {
        id: 113,
        name: 'MIG-31M [AA]',
        descriptor: 'Descriptor_Unit_MiG_31M_SOV',
        category: 'air'
    },
    {
        id: 114,
        name: 'SU-24MP [SEAD]',
        descriptor: 'Descriptor_Unit_Su_24MP_SOV',
        category: 'air'
    },
    {
        id: 115,
        name: 'SU-24M [HE]',
        descriptor: 'Descriptor_Unit_Su_24M_SOV',
        category: 'air'
    },
    {
        id: 118,
        name: 'SU-27S [AA]',
        descriptor: 'Descriptor_Unit_Su_27S_SOV',
        category: 'air'
    },
    {
        id: 122,
        name: 'M998 HUMVEE',
        descriptor: 'Descriptor_Unit_M998_Humvee_US',
        category: 'trans'
    },
    {
        id: 124,
        name: 'SU-25 [AT]',
        descriptor: 'Descriptor_Unit_Su_25_SOV',
        category: 'air'
    },
    {
        id: 133,
        name: 'ENGINEERS (DRAGON)',
        descriptor: 'Descriptor_Unit_Engineers_Dragon_US',
        category: 'inf'
    },
    {
        id: 134,
        name: 'ENGINEERS (FLASH)',
        descriptor: 'Descriptor_Unit_Engineers_Flash_US',
        category: 'inf'
    },
    {
        id: 136,
        name: 'MECH. RIFLES',
        descriptor: 'Descriptor_Unit_Rifles_US',
        category: 'inf'
    },
    {
        id: 137,
        name: 'FIRE TEAM (DRAGON)',
        descriptor: 'Descriptor_Unit_Rifles_half_Dragon_US',
        category: 'inf'
    },
    {
        id: 138,
        name: 'FIRE TEAM (LAW)',
        descriptor: 'Descriptor_Unit_Rifles_half_LAW_US',
        category: 'inf'
    },
    {
        id: 139,
        name: 'SCOUTS',
        descriptor: 'Descriptor_Unit_Scout_US',
        category: 'rec'
    },
    {
        id: 141,
        name: 'MIG-23ML [AA]',
        descriptor: 'Descriptor_Unit_MiG_23ML_SOV',
        category: 'air'
    },
    {
        id: 163,
        name: 'T-80BV',
        descriptor: 'Descriptor_Unit_T80BV_SOV',
        category: 'tank'
    },
    {
        id: 164,
        name: 'M2A2 BRADLEY IFV',
        descriptor: 'Descriptor_Unit_M2A2_Bradley_IFV_US',
        category: 'trans'
    },
    {
        id: 165,
        name: 'ZSU-23-4M3 BIRYUSA',
        descriptor: 'Descriptor_Unit_ZSU_23_Shilka_SOV',
        category: 'aa'
    },
    {
        id: 166,
        name: 'BM-21 GRAD',
        descriptor: 'Descriptor_Unit_BM21_Grad_SOV',
        category: 'art'
    },
    {
        id: 167,
        name: 'M1025 HUMVEE TOW',
        descriptor: 'Descriptor_Unit_M1025_Humvee_TOW_US',
        category: 'tank'
    },
    {
        id: 168,
        name: 'M1025 HUMVEE AGL',
        descriptor: 'Descriptor_Unit_M1025_Humvee_AGL_US',
        category: 'rec'
    },
    {
        id: 169,
        name: 'ILTIS FUHRUNGS',
        descriptor: 'Descriptor_Unit_Iltis_RFA',
        category: 'log'
    },
    {
        id: 170,
        name: 'GEPARD 1A1',
        descriptor: 'Descriptor_Unit_Gepard_1A2_RFA',
        category: 'aa'
    },
    {
        id: 173,
        name: 'HS.30 PZ.MORSER',
        descriptor: 'Descriptor_Unit_HS30_Panzermorser_120mm_RFA',
        category: 'art'
    },
    {
        id: 175,
        name: 'CH-53G MUN.',
        descriptor: 'Descriptor_Unit_CH53G_RFA',
        category: 'log'
    },
    {
        id: 177,
        name: 'DESANTNIKI',
        descriptor: 'Descriptor_Unit_VDV_SOV',
        category: 'inf'
    },
    {
        id: 180,
        name: 'AERO-RIFLES',
        descriptor: 'Descriptor_Unit_AeroRifles_US',
        category: 'inf'
    },
    {
        id: 183,
        name: 'ENGINEERS LDR.',
        descriptor: 'Descriptor_Unit_Engineer_CMD_US',
        category: 'inf'
    },
    {
        id: 185,
        name: 'M1025 HUMVEE CP',
        descriptor: 'Descriptor_Unit_M1025_Humvee_CMD_US',
        category: 'log'
    },
    {
        id: 186,
        name: 'M113A2 SUPPLY',
        descriptor: 'Descriptor_Unit_M113A2_supply_US',
        category: 'log'
    },
    {
        id: 187,
        name: 'M151 MUTT CP',
        descriptor: 'Descriptor_Unit_M151_MUTT_CMD_US',
        category: 'log'
    },
    {
        id: 189,
        name: 'M1A1 ABRAMS CP',
        descriptor: 'Descriptor_Unit_M1A1_Abrams_CMD_US',
        category: 'tank'
    },
    {
        id: 190,
        name: 'M35 SUPPLY',
        descriptor: 'Descriptor_Unit_M35_supply_US',
        category: 'log'
    },
    {
        id: 191,
        name: 'M728 CEV',
        descriptor: 'Descriptor_Unit_M728_CEV_US',
        category: 'tank'
    },
    {
        id: 192,
        name: 'M981 FISTV',
        descriptor: 'Descriptor_Unit_M981_FISTV_US',
        category: 'rec'
    },
    {
        id: 194,
        name: 'MILITARY POLICE (M67)',
        descriptor: 'Descriptor_Unit_MP_RCL_US',
        category: 'inf'
    },
    {
        id: 195,
        name: 'MILITARY POLICE',
        descriptor: 'Descriptor_Unit_MP_US',
        category: 'inf'
    },
    {
        id: 196,
        name: 'MECH. RIFLES LDR.',
        descriptor: 'Descriptor_Unit_Rifles_CMD_US',
        category: 'inf'
    },
    {
        id: 198,
        name: 'OH-58C CMD',
        descriptor: 'Descriptor_Unit_OH58C_CMD_US',
        category: 'log'
    },
    {
        id: 199,
        name: 'OH-58C SCOUT',
        descriptor: 'Descriptor_Unit_OH58C_Scout_US',
        category: 'rec'
    },
    {
        id: 200,
        name: 'UH-1H SUPPLY',
        descriptor: 'Descriptor_Unit_UH1H_supply_US',
        category: 'log'
    },
    {
        id: 201,
        name: 'UH-60A CO',
        descriptor: 'Descriptor_Unit_UH60A_CO_US',
        category: 'log'
    },
    {
        id: 202,
        name: 'UH-60A SUPPLY',
        descriptor: 'Descriptor_Unit_UH60A_Supply_US',
        category: 'log'
    },
    {
        id: 203,
        name: 'ENGINEERS',
        descriptor: 'Descriptor_Unit_Engineers_US',
        category: 'inf'
    },
    {
        id: 204,
        name: 'S21 GWOSDIKA',
        descriptor: 'Descriptor_Unit_2S1_DDR',
        category: 'art'
    },
    {
        id: 205,
        name: '2S3M AKATSIYA',
        descriptor: 'Descriptor_Unit_2S3_DDR',
        category: 'art'
    },
    {
        id: 206,
        name: 'SPz BMP-1 SP2',
        descriptor: 'Descriptor_Unit_BMP_1_SP2_DDR',
        category: 'trans'
    },
    {
        id: 208,
        name: 'SPW-70',
        descriptor: 'Descriptor_Unit_BTR_70_DDR',
        category: 'trans'
    },
    {
        id: 209,
        name: '9K33M3 OSA-AKM',
        descriptor: 'Descriptor_Unit_Osa_9K33M3_DDR',
        category: 'aa'
    },
    {
        id: 210,
        name: 'FLA-SFL 23-4 SHILKA',
        descriptor: 'Descriptor_Unit_ZSU_23_Shilka_DDR',
        category: 'aa'
    },
    {
        id: 211,
        name: 'URAL-4320 MUN.',
        descriptor: 'Descriptor_Unit_Ural_4320_DDR',
        category: 'log'
    },
    {
        id: 212,
        name: 'PSSE-B',
        descriptor: 'Descriptor_Unit_GreenBerets_MP5_US',
        category: 'rec'
    },
    {
        id: 213,
        name: 'GREEN BERETS',
        descriptor: 'Descriptor_Unit_GreenBerets_US',
        category: 'inf'
    },
    {
        id: 214,
        name: 'RANGERS',
        descriptor: 'Descriptor_Unit_Ranger_US',
        category: 'inf'
    },
    {
        id: 217,
        name: 'SAPERI (RPO)',
        descriptor: 'Descriptor_Unit_Engineers_Flam_SOV',
        category: 'inf'
    },
    {
        id: 218,
        name: 'SAPERI',
        descriptor: 'Descriptor_Unit_Engineers_SOV',
        category: 'inf'
    },
    {
        id: 219,
        name: 'RAZVEDKA SAPERI',
        descriptor: 'Descriptor_Unit_Engineers_Scout_SOV',
        category: 'rec'
    },
    {
        id: 220,
        name: 'IGLA',
        descriptor: 'Descriptor_Unit_MANPAD_Igla_SOV',
        category: 'aa'
    },
    {
        id: 221,
        name: 'MOTOSTRELKI',
        descriptor: 'Descriptor_Unit_MotRifles_BTR_SOV',
        category: 'inf'
    },
    {
        id: 222,
        name: 'MOTOSTRELKI (METIS)',
        descriptor: 'Descriptor_Unit_MotRifles_Metis_SOV',
        category: 'inf'
    },
    {
        id: 223,
        name: 'MOTOSTRELKI (BMP)',
        descriptor: 'Descriptor_Unit_MotRifles_SOV',
        category: 'inf'
    },
    {
        id: 224,
        name: 'SPETSNAZ G.R.U.',
        descriptor: 'Descriptor_Unit_Scout_LRRP_SOV',
        category: 'rec'
    },
    {
        id: 225,
        name: 'RAZVEDKA',
        descriptor: 'Descriptor_Unit_Scout_SOV',
        category: 'rec'
    },
    {
        id: 226,
        name: 'SPETSNAZ',
        descriptor: 'Descriptor_Unit_Spetsnaz_SOV',
        category: 'inf'
    },
    {
        id: 227,
        name: 'UAZ-469 FUH.',
        descriptor: 'Descriptor_Unit_UAZ_469_CMD_DDR',
        category: 'log'
    },
    {
        id: 229,
        name: 'UAZ-469 KPV',
        descriptor: 'Descriptor_Unit_UAZ_469_Reco_DDR',
        category: 'trans'
    },
    {
        id: 231,
        name: 'LARS 2',
        descriptor: 'Descriptor_Unit_Lars_2_RFA',
        category: 'art'
    },
    {
        id: 232,
        name: 'UNIMOG S404 MUN.',
        descriptor: 'Descriptor_Unit_Unimog_S_404_RFA',
        category: 'log'
    },
    {
        id: 233,
        name: 'LUCHS A1',
        descriptor: 'Descriptor_Unit_Luchs_A1_RFA',
        category: 'rec'
    },
    {
        id: 234,
        name: 'TPz FUCHS',
        descriptor: 'Descriptor_Unit_TPZ_Fuchs_1_RFA',
        category: 'trans'
    },
    {
        id: 235,
        name: 'LEOPARD 1A1A1',
        descriptor: 'Descriptor_Unit_Leopard_1A1_RFA',
        category: 'tank'
    },
    {
        id: 236,
        name: 'JAGUAR 2',
        descriptor: 'Descriptor_Unit_Jaguar_2_RFA',
        category: 'tank'
    },
    {
        id: 239,
        name: 'M109A2',
        descriptor: 'Descriptor_Unit_M109A2_UK',
        category: 'art'
    },
    {
        id: 240,
        name: 'GAZELLE',
        descriptor: 'Descriptor_Unit_Gazelle_UK',
        category: 'rec'
    },
    {
        id: 241,
        name: 'PUMA HC.1 SUPPLY',
        descriptor: 'Descriptor_Unit_Puma_UK',
        category: 'log'
    },
    {
        id: 243,
        name: 'FV107 SCIMITAR',
        descriptor: 'Descriptor_Unit_FV107_Scimitar_UK',
        category: 'rec'
    },
    {
        id: 244,
        name: 'FV510 WARRIOR',
        descriptor: 'Descriptor_Unit_MCV_80_Warrior_UK',
        category: 'trans'
    },
    {
        id: 245,
        name: 'M107A2 175MM',
        descriptor: 'Descriptor_Unit_M107A2_175mm_UK',
        category: 'art'
    },
    {
        id: 246,
        name: 'FV432 MORTAR',
        descriptor: 'Descriptor_Unit_FV432_Mortar_UK',
        category: 'art'
    },
    {
        id: 247,
        name: 'FV432 RARDEN',
        descriptor: 'Descriptor_Unit_FV432_Rarden_UK',
        category: 'tank'
    },
    {
        id: 248,
        name: 'FV432',
        descriptor: 'Descriptor_Unit_FV432_UK',
        category: 'trans'
    },
    {
        id: 249,
        name: 'L16 81MM',
        descriptor: 'Descriptor_Unit_81mm_mortar_UK',
        category: 'art'
    },
    {
        id: 250,
        name: 'CHALLENGER MK.2',
        descriptor: 'Descriptor_Unit_Challenger_1_Mk1_UK',
        category: 'tank'
    },
    {
        id: 251,
        name: 'TRACKED RAPIER',
        descriptor: 'Descriptor_Unit_Tracked_Rapier_UK',
        category: 'aa'
    },
    {
        id: 252,
        name: 'LYNX AH MK1',
        descriptor: 'Descriptor_Unit_Lynx_AH_Mk1_UK',
        category: 'trans'
    },
    {
        id: 253,
        name: 'FERRET MK2',
        descriptor: 'Descriptor_Unit_Ferret_Mk2_UK',
        category: 'rec'
    },
    {
        id: 254,
        name: 'FV433 ABBOT',
        descriptor: 'Descriptor_Unit_FV433_Abbot_UK',
        category: 'art'
    },
    {
        id: 255,
        name: 'FV105 SULTAN',
        descriptor: 'Descriptor_Unit_FV105_Sultan_UK',
        category: 'log'
    },
    {
        id: 256,
        name: 'FV103 SPARTAN',
        descriptor: 'Descriptor_Unit_FV103_Spartan_UK',
        category: 'trans'
    },
    {
        id: 257,
        name: 'FV101 SCORPION',
        descriptor: 'Descriptor_Unit_FV101_Scorpion_UK',
        category: 'rec'
    },
    {
        id: 258,
        name: 'L121 155MM',
        descriptor: 'Descriptor_Unit_FH70_155mm_UK',
        category: 'art'
    },
    {
        id: 260,
        name: 'FV721 FOX',
        descriptor: 'Descriptor_Unit_FV721_Fox_UK',
        category: 'rec'
    },
    {
        id: 261,
        name: 'SAXON',
        descriptor: 'Descriptor_Unit_Saxon_UK',
        category: 'trans'
    },
    {
        id: 263,
        name: 'HARRIER GR.3 [AA]',
        descriptor: 'Descriptor_Unit_Harrier_UK',
        category: 'air'
    },
    {
        id: 264,
        name: 'CHIEFTAIN MK. 10',
        descriptor: 'Descriptor_Unit_FV4201_Chieftain_UK',
        category: 'tank'
    },
    {
        id: 265,
        name: '2K12 KUB',
        descriptor: 'Descriptor_Unit_2K12_KUB_DDR',
        category: 'aa'
    },
    {
        id: 267,
        name: 'AMX AUF1',
        descriptor: 'Descriptor_Unit_AMX_30_AuF1_FR',
        category: 'art'
    },
    {
        id: 269,
        name: 'AML-60-12',
        descriptor: 'Descriptor_Unit_AML_60_FR',
        category: 'rec'
    },
    {
        id: 270,
        name: 'AML-90 LYNX',
        descriptor: 'Descriptor_Unit_AML_90_FR',
        category: 'rec'
    },
    {
        id: 271,
        name: 'AMX-13 DCA',
        descriptor: 'Descriptor_Unit_AMX_13_DCA_FR',
        category: 'aa'
    },
    {
        id: 272,
        name: 'ALOUETTE III',
        descriptor: 'Descriptor_Unit_Alouette_III_FR',
        category: 'trans'
    },
    {
        id: 273,
        name: 'GAZELLE CANON',
        descriptor: 'Descriptor_Unit_Gazelle_20mm_FR',
        category: 'hel'
    },
    {
        id: 274,
        name: 'GAZELLE HOT',
        descriptor: 'Descriptor_Unit_Gazelle_HOT_FR',
        category: 'hel'
    },
    {
        id: 275,
        name: 'GAZELLE CELTIC',
        descriptor: 'Descriptor_Unit_Gazelle_Mistral_FR',
        category: 'aa'
    },
    {
        id: 276,
        name: 'T813 MUN.',
        descriptor: 'Descriptor_Unit_T813_DDR',
        category: 'log'
    },
    {
        id: 277,
        name: 'MFRW RM-70',
        descriptor: 'Descriptor_Unit_MFRW_RM70_DDR',
        category: 'art'
    },
    {
        id: 278,
        name: 'AUFKL.PZ BRM-1',
        descriptor: 'Descriptor_Unit_BRM_1_DDR',
        category: 'rec'
    },
    {
        id: 279,
        name: 'SPW-40P2 KONKURS',
        descriptor: 'Descriptor_Unit_BRDM_Konkurs_DDR',
        category: 'tank'
    },
    {
        id: 280,
        name: 'SPW-40P2 MALYUTKA-P',
        descriptor: 'Descriptor_Unit_BRDM_Malyu_P_DDR',
        category: 'tank'
    },
    {
        id: 281,
        name: 'SPW-40P2 STRELA-1',
        descriptor: 'Descriptor_Unit_BRDM_Strela_1_DDR',
        category: 'aa'
    },
    {
        id: 282,
        name: 'MIG-21BIS [RKT1]',
        descriptor: 'Descriptor_Unit_MiG_21PFM_DDR',
        category: 'air'
    },
    {
        id: 283,
        name: 'MIRAGE III E',
        descriptor: 'Descriptor_Unit_Mirage_III_E_FR',
        category: 'air'
    },
    {
        id: 287,
        name: 'KPZ. T-72',
        descriptor: 'Descriptor_Unit_T72_DDR',
        category: 'tank'
    },
    {
        id: 288,
        name: 'TRM-2000',
        descriptor: 'Descriptor_Unit_TRM_2000_FR',
        category: 'trans'
    },
    {
        id: 289,
        name: 'MIRAGE IV [HE]',
        descriptor: 'Descriptor_Unit_Mirage_IV_FR',
        category: 'air'
    },
    {
        id: 290,
        name: 'MIRAGE 2000C RDI',
        descriptor: 'Descriptor_Unit_Mirage_2000_C_FR',
        category: 'air'
    },
    {
        id: 291,
        name: 'MIRAGE 5 F [HE]',
        descriptor: 'Descriptor_Unit_Mirage_5_F_FR',
        category: 'air'
    },
    {
        id: 292,
        name: 'MIRAGE F1 CT [LGB]',
        descriptor: 'Descriptor_Unit_Mirage_F1_CT_FR',
        category: 'air'
    },
    {
        id: 293,
        name: 'MIRAGE F1C-200',
        descriptor: 'Descriptor_Unit_Mirage_F1_C_FR',
        category: 'air'
    },
    {
        id: 294,
        name: 'PUMA KANGOUROU',
        descriptor: 'Descriptor_Unit_Puma_FR',
        category: 'log'
    },
    {
        id: 296,
        name: 'STINGER',
        descriptor: 'Descriptor_Unit_MANPAD_Stinger_C_US',
        category: 'aa'
    },
    {
        id: 298,
        name: 'M30 107MM',
        descriptor: 'Descriptor_Unit_Mortier_107mm_US',
        category: 'art'
    },
    {
        id: 301,
        name: 'MECH. RIFLES (LAW)',
        descriptor: 'Descriptor_Unit_Rifles_LAW_US',
        category: 'inf'
    },
    {
        id: 304,
        name: 'M125 MORTAR',
        descriptor: 'Descriptor_Unit_M125_HOWZ_US',
        category: 'art'
    },
    {
        id: 305,
        name: 'M1025 HUMVEE M2HB',
        descriptor: 'Descriptor_Unit_M1025_Humvee_scout_US',
        category: 'trans'
    },
    {
        id: 306,
        name: 'M151A2 M2HB',
        descriptor: 'Descriptor_Unit_M151A2_scout_US',
        category: 'trans'
    },
    {
        id: 308,
        name: 'SPW-152K',
        descriptor: 'Descriptor_Unit_SPW_152K_DDR',
        category: 'trans'
    },
    {
        id: 309,
        name: 'P4',
        descriptor: 'Descriptor_Unit_VLTT_P4_FR',
        category: 'trans'
    },
    {
        id: 312,
        name: 'ROLAND 2',
        descriptor: 'Descriptor_Unit_Roland_2_FR',
        category: 'aa'
    },
    {
        id: 313,
        name: 'SUPER PUMA',
        descriptor: 'Descriptor_Unit_Super_Puma_FR',
        category: 'trans'
    },
    {
        id: 314,
        name: 'MIG-23MF [HE]',
        descriptor: 'Descriptor_Unit_MiG_23MF_DDR',
        category: 'air'
    },
    {
        id: 315,
        name: 'SU-22M4 [HE]',
        descriptor: 'Descriptor_Unit_Su_22_DDR',
        category: 'air'
    },
    {
        id: 316,
        name: 'AMX-13/90',
        descriptor: 'Descriptor_Unit_AMX_13_90mm_FR',
        category: 'tank'
    },
    {
        id: 317,
        name: 'AMX-13 VCI 12,7MM',
        descriptor: 'Descriptor_Unit_AMX_13_VCI_12_7mm_FR',
        category: 'trans'
    },
    {
        id: 318,
        name: 'AMX-13 VCI 20MM',
        descriptor: 'Descriptor_Unit_AMX_13_VCI_20mm_FR',
        category: 'trans'
    },
    {
        id: 320,
        name: 'VAB',
        descriptor: 'Descriptor_Unit_VAB_FR',
        category: 'trans'
    },
    {
        id: 321,
        name: 'VAB MEPHISTO',
        descriptor: 'Descriptor_Unit_VAB_HOT_FR',
        category: 'tank'
    },
    {
        id: 322,
        name: 'VAB MILAN',
        descriptor: 'Descriptor_Unit_VAB_MILAN_FR',
        category: 'trans'
    },
    {
        id: 324,
        name: 'PANZERJAGER',
        descriptor: 'Descriptor_Unit_MotSchutzen_DDR',
        category: 'inf'
    },
    {
        id: 326,
        name: 'GRENZER',
        descriptor: 'Descriptor_Unit_Grenzer_DDR',
        category: 'rec'
    },
    {
        id: 327,
        name: 'B.G.S',
        descriptor: 'Descriptor_Unit_BGS_RFA',
        category: 'rec'
    },
    {
        id: 328,
        name: 'FS-JAGER',
        descriptor: 'Descriptor_Unit_Fallschirm_RFA',
        category: 'inf'
    },
    {
        id: 329,
        name: 'FERNSPAHER',
        descriptor: 'Descriptor_Unit_Fernspaher_RFA',
        category: 'rec'
    },
    {
        id: 330,
        name: 'JAGER',
        descriptor: 'Descriptor_Unit_Jager_RFA',
        category: 'inf'
    },
    {
        id: 331,
        name: 'PZ.GRENADIER (CARLG)',
        descriptor: 'Descriptor_Unit_PzGrenadier_RFA',
        category: 'inf'
    },
    {
        id: 332,
        name: 'AMX-10 P',
        descriptor: 'Descriptor_Unit_AMX_10_P_FR',
        category: 'trans'
    },
    {
        id: 333,
        name: 'AMX-10 P MILAN',
        descriptor: 'Descriptor_Unit_AMX_10_P_MILAN_FR',
        category: 'trans'
    },
    {
        id: 334,
        name: 'AMX-10 RC',
        descriptor: 'Descriptor_Unit_AMX_10_RC_FR',
        category: 'rec'
    },
    {
        id: 335,
        name: 'AMX-10 HOT',
        descriptor: 'Descriptor_Unit_AMX_10_HOT_FR',
        category: 'tank'
    },
    {
        id: 336,
        name: 'AMX-30 B2',
        descriptor: 'Descriptor_Unit_AMX_30_B2_FR',
        category: 'tank'
    },
    {
        id: 337,
        name: 'AMX-30 B',
        descriptor: 'Descriptor_Unit_AMX_30_B_FR',
        category: 'tank'
    },
    {
        id: 338,
        name: 'GRENADIER-VOLTIGEURS',
        descriptor: 'Descriptor_Unit_Rifles_FR',
        category: 'inf'
    },
    {
        id: 340,
        name: 'RMP',
        descriptor: 'Descriptor_Unit_RMP_UK',
        category: 'inf'
    },
    {
        id: 341,
        name: 'ARM. RIFLES',
        descriptor: 'Descriptor_Unit_Rifles_UK',
        category: 'inf'
    },
    {
        id: 342,
        name: 'SAS',
        descriptor: 'Descriptor_Unit_SAS_UK',
        category: 'inf'
    },
    {
        id: 343,
        name: 'TERRIERS',
        descriptor: 'Descriptor_Unit_Territorial_UK',
        category: 'inf'
    },
    {
        id: 349,
        name: 'PIONIER',
        descriptor: 'Descriptor_Unit_Engineers_DDR',
        category: 'inf'
    },
    {
        id: 350,
        name: 'PIONIER (FLAM)',
        descriptor: 'Descriptor_Unit_Engineers_Flam_DDR',
        category: 'inf'
    },
    {
        id: 351,
        name: 'DESANT. SAPERI (RPO)',
        descriptor: 'Descriptor_Unit_Engineers_Flam_VDV_SOV',
        category: 'inf'
    },
    {
        id: 352,
        name: 'PIONIER',
        descriptor: 'Descriptor_Unit_Engineers_RFA',
        category: 'inf'
    },
    {
        id: 353,
        name: 'DESANT. SAPERI',
        descriptor: 'Descriptor_Unit_Engineers_VDV_SOV',
        category: 'inf'
    },
    {
        id: 354,
        name: 'FS-JAGER',
        descriptor: 'Descriptor_Unit_Fallschirmjager_DDR',
        category: 'inf'
    },
    {
        id: 355,
        name: 'FS-EINSATZGRUPPE',
        descriptor: 'Descriptor_Unit_Fallschirmjager_FalseFlag_DDR',
        category: 'rec'
    },
    {
        id: 356,
        name: 'FS-JAGER (METIS)',
        descriptor: 'Descriptor_Unit_Fallschirmjager_Metys_DDR',
        category: 'inf'
    },
    {
        id: 358,
        name: 'FELDJAGER',
        descriptor: 'Descriptor_Unit_Feldgendarmerie_RFA',
        category: 'inf'
    },
    {
        id: 359,
        name: 'HEIMATSCHUTZEN',
        descriptor: 'Descriptor_Unit_HeimatschutzJager_RFA',
        category: 'inf'
    },
    {
        id: 360,
        name: 'MOT. AUFKLARER',
        descriptor: 'Descriptor_Unit_HvyScout_DDR',
        category: 'rec'
    },
    {
        id: 361,
        name: 'MOT. RAZVEDKA',
        descriptor: 'Descriptor_Unit_HvyScout_SOV',
        category: 'rec'
    },
    {
        id: 362,
        name: 'JAGER AUFKL.',
        descriptor: 'Descriptor_Unit_Jager_Aufk_RFA',
        category: 'rec'
    },
    {
        id: 365,
        name: 'DESANT. IGLA',
        descriptor: 'Descriptor_Unit_MANPAD_Igla_VDV_SOV',
        category: 'aa'
    },
    {
        id: 366,
        name: 'FLIEGERFAUST',
        descriptor: 'Descriptor_Unit_MANPAD_Redeye_RFA',
        category: 'aa'
    },
    {
        id: 367,
        name: 'FLA-RAK. STRELA-2M',
        descriptor: 'Descriptor_Unit_MANPAD_Strela_2M_DDR',
        category: 'aa'
    },
    {
        id: 368,
        name: 'FS-FLA-RAK. STRELA-2M',
        descriptor: 'Descriptor_Unit_MANPAD_Strela_2M_FJ_DDR',
        category: 'aa'
    },
    {
        id: 369,
        name: 'MOT.-SCHUTZEN (BTR)',
        descriptor: 'Descriptor_Unit_MotRifles_BTR_DDR',
        category: 'inf'
    },
    {
        id: 370,
        name: 'MOT.-SCHUTZEN',
        descriptor: 'Descriptor_Unit_MotRifles_DDR',
        category: 'inf'
    },
    {
        id: 374,
        name: 'PZ.GRENADIER (M113)',
        descriptor: 'Descriptor_Unit_Panzergrenadier_APC_RFA',
        category: 'inf'
    },
    {
        id: 375,
        name: 'PZ.GRENADIER (MARDER)',
        descriptor: 'Descriptor_Unit_Panzergrenadier_IFV_RFA',
        category: 'inf'
    },
    {
        id: 376,
        name: 'AUFKLARER',
        descriptor: 'Descriptor_Unit_Scout_DDR',
        category: 'rec'
    },
    {
        id: 379,
        name: 'AUFKLARER',
        descriptor: 'Descriptor_Unit_Scout_RFA',
        category: 'rec'
    },
    {
        id: 380,
        name: 'DESANT. RAZVEDKA',
        descriptor: 'Descriptor_Unit_Scout_VDV_SOV',
        category: 'rec'
    },
    {
        id: 383,
        name: 'DESANTNIKI (BMD)',
        descriptor: 'Descriptor_Unit_VDV_Mech_SOV',
        category: 'inf'
    },
    {
        id: 384,
        name: 'DESANTNIKI (METIS)',
        descriptor: 'Descriptor_Unit_VDV_Metis_SOV',
        category: 'inf'
    },
    {
        id: 385,
        name: 'SICHERUNGS.',
        descriptor: 'Descriptor_Unit_Security_RFA',
        category: 'inf'
    },
    {
        id: 386,
        name: 'TORNADO F.3 [AA]',
        descriptor: 'Descriptor_Unit_Tornado_ADV_UK',
        category: 'air'
    },
    {
        id: 388,
        name: 'M113A3 ACAV',
        descriptor: 'Descriptor_Unit_M113_ACAV_US',
        category: 'trans'
    },
    {
        id: 389,
        name: 'M113A3 DRAGON',
        descriptor: 'Descriptor_Unit_M113_Dragon_US',
        category: 'trans'
    },
    {
        id: 390,
        name: 'M1IP ABRAMS CP',
        descriptor: 'Descriptor_Unit_M1IP_Abrams_CMD_US',
        category: 'tank'
    },
    {
        id: 391,
        name: 'M35',
        descriptor: 'Descriptor_Unit_M35_trans_US',
        category: 'trans'
    },
    {
        id: 392,
        name: 'M60A3 (TTS)',
        descriptor: 'Descriptor_Unit_M60A3_CMD_US',
        category: 'tank'
    },
    {
        id: 393,
        name: 'AB FIRE TEAM (DRAGON)',
        descriptor: 'Descriptor_Unit_Airborne_half_Dragon_US',
        category: 'inf'
    },
    {
        id: 394,
        name: 'AB FIRE TEAM (AT4)',
        descriptor: 'Descriptor_Unit_Airborne_half_LAW_US',
        category: 'inf'
    },
    {
        id: 396,
        name: 'BERLIN LIGHT RIFLES',
        descriptor: 'Descriptor_Unit_LightRifles_RCL_US',
        category: 'inf'
    },
    {
        id: 398,
        name: 'M151',
        descriptor: 'Descriptor_Unit_M151_MUTT_trans_US',
        category: 'trans'
    },
    {
        id: 399,
        name: 'AERO-RIFLE LDR.',
        descriptor: 'Descriptor_Unit_AeroRifles_CMD_US',
        category: 'inf'
    },
    {
        id: 400,
        name: 'GREEN BERETS LDR.',
        descriptor: 'Descriptor_Unit_GreenBerets_CMD_US',
        category: 'inf'
    },
    {
        id: 404,
        name: 'AMX-10 RC SURBLINDE',
        descriptor: 'Descriptor_Unit_AMX_10_RCR_FR',
        category: 'rec'
    },
    {
        id: 406,
        name: '2K12 KUB',
        descriptor: 'Descriptor_Unit_2K12_KUB_SOV',
        category: 'aa'
    },
    {
        id: 407,
        name: 'RAZV. BMP-1P',
        descriptor: 'Descriptor_Unit_BMP_1P_reco_SOV',
        category: 'trans'
    },
    {
        id: 408,
        name: 'BMP-1K3',
        descriptor: 'Descriptor_Unit_BMP_1_CMD_SOV',
        category: 'log'
    },
    {
        id: 409,
        name: 'BRDM-2U',
        descriptor: 'Descriptor_Unit_BRDM_2_CMD_SOV',
        category: 'log'
    },
    {
        id: 410,
        name: 'BRDM-2',
        descriptor: 'Descriptor_Unit_BRDM_2_SOV',
        category: 'rec'
    },
    {
        id: 411,
        name: 'BRDM STRELA-1',
        descriptor: 'Descriptor_Unit_BRDM_Strela_1_SOV',
        category: 'aa'
    },
    {
        id: 412,
        name: 'BRM-1',
        descriptor: 'Descriptor_Unit_BRM_1_SOV',
        category: 'rec'
    },
    {
        id: 413,
        name: 'BTR-60PBK',
        descriptor: 'Descriptor_Unit_BTR_60_CMD_SOV',
        category: 'log'
    },
    {
        id: 414,
        name: 'BTR-60PB',
        descriptor: 'Descriptor_Unit_BTR_60_SOV',
        category: 'trans'
    },
    {
        id: 415,
        name: 'SAPERI KOM.',
        descriptor: 'Descriptor_Unit_Engineers_CMD_SOV',
        category: 'inf'
    },
    {
        id: 416,
        name: 'MT-LB SNAB.',
        descriptor: 'Descriptor_Unit_MTLB_supply_SOV',
        category: 'log'
    },
    {
        id: 417,
        name: 'MT-LB',
        descriptor: 'Descriptor_Unit_MTLB_transp_SOV',
        category: 'trans'
    },
    {
        id: 418,
        name: 'MOTOSTRELKI KOM.',
        descriptor: 'Descriptor_Unit_MotRifles_CMD_SOV',
        category: 'inf'
    },
    {
        id: 419,
        name: 'SPETSNAZ KOM.',
        descriptor: 'Descriptor_Unit_Spetsnaz_CMD_SOV',
        category: 'inf'
    },
    {
        id: 420,
        name: 'T-64BVK',
        descriptor: 'Descriptor_Unit_T64BV_CMD_SOV',
        category: 'tank'
    },
    {
        id: 421,
        name: 'T-80BVK',
        descriptor: 'Descriptor_Unit_T80BV_CMD_SOV',
        category: 'tank'
    },
    {
        id: 422,
        name: 'T-80BK',
        descriptor: 'Descriptor_Unit_T80B_CMD_SOV',
        category: 'tank'
    },
    {
        id: 423,
        name: 'T-80UK',
        descriptor: 'Descriptor_Unit_T80U_CMD_SOV',
        category: 'tank'
    },
    {
        id: 424,
        name: 'TO-55',
        descriptor: 'Descriptor_Unit_TO_55_SOV',
        category: 'tank'
    },
    {
        id: 425,
        name: 'UAZ-3151 KPV',
        descriptor: 'Descriptor_Unit_UAZ_469_Reco_SOV',
        category: 'trans'
    },
    {
        id: 426,
        name: 'UAZ-3151',
        descriptor: 'Descriptor_Unit_UAZ_469_SOV',
        category: 'trans'
    },
    {
        id: 429,
        name: 'DESANT. KOM.',
        descriptor: 'Descriptor_Unit_VDV_CMD_SOV',
        category: 'inf'
    },
    {
        id: 430,
        name: 'DESANT. SAPERI KOM.',
        descriptor: 'Descriptor_Unit_Engineers_CMD_VDV_SOV',
        category: 'inf'
    },
    {
        id: 431,
        name: 'AH-64A APACHE [ATGM]',
        descriptor: 'Descriptor_Unit_AH64_Apache_emp1_US',
        category: 'hel'
    },
    {
        id: 432,
        name: 'AH-64A APACHE [RKT]',
        descriptor: 'Descriptor_Unit_AH64_Apache_emp2_US',
        category: 'hel'
    },
    {
        id: 435,
        name: 'F-117A NIGHTHAWK [LGB]',
        descriptor: 'Descriptor_Unit_F117_Nighthawk_US',
        category: 'air'
    },
    {
        id: 437,
        name: 'F-111E [CLU]',
        descriptor: 'Descriptor_Unit_F111E_Aardvark_CBU_US',
        category: 'air'
    },
    {
        id: 438,
        name: 'F-111E [HE]',
        descriptor: 'Descriptor_Unit_F111E_Aardvark_US',
        category: 'air'
    },
    {
        id: 439,
        name: 'F-111E [NPLM]',
        descriptor: 'Descriptor_Unit_F111E_Aardvark_napalm_US',
        category: 'air'
    },
    {
        id: 441,
        name: 'F-4E PHANTOM II [AA]',
        descriptor: 'Descriptor_Unit_F4E_Phantom_II_AA_US',
        category: 'air'
    },
    {
        id: 442,
        name: 'F-4E PHANTOM II [CLU]',
        descriptor: 'Descriptor_Unit_F4E_Phantom_II_CBU_US',
        category: 'air'
    },
    {
        id: 443,
        name: 'F-4G WILD WEASEL V [SEAD]',
        descriptor: 'Descriptor_Unit_F4_Wild_Weasel_US',
        category: 'air'
    },
    {
        id: 444,
        name: 'F-4E PHANTOM II [NPLM]',
        descriptor: 'Descriptor_Unit_F4E_Phantom_II_napalm_US',
        category: 'air'
    },
    {
        id: 445,
        name: 'M270 MLRS CLUSTER',
        descriptor: 'Descriptor_Unit_M270_MLRS_cluster_US',
        category: 'art'
    },
    {
        id: 447,
        name: 'F-111F [CLU]',
        descriptor: 'Descriptor_Unit_F111F_Aardvark_CBU_US',
        category: 'air'
    },
    {
        id: 448,
        name: 'F-111F [HE]',
        descriptor: 'Descriptor_Unit_F111F_Aardvark_US',
        category: 'air'
    },
    {
        id: 449,
        name: 'F-111F [NPLM]',
        descriptor: 'Descriptor_Unit_F111F_Aardvark_napalm_US',
        category: 'air'
    },
    {
        id: 450,
        name: 'A-10A THUNDERBOLT II [AT]',
        descriptor: 'Descriptor_Unit_A10_Thunderbolt_II_ATGM_US',
        category: 'air'
    },
    {
        id: 451,
        name: 'A-10A [HE]',
        descriptor: 'Descriptor_Unit_A10_Thunderbolt_II_US',
        category: 'air'
    },
    {
        id: 452,
        name: 'F-15C EAGLE [AA]',
        descriptor: 'Descriptor_Unit_F15C_Eagle_AA_US',
        category: 'air'
    },
    {
        id: 456,
        name: 'F-16C [HE]',
        descriptor: 'Descriptor_Unit_F16E_HE_US',
        category: 'air'
    },
    {
        id: 457,
        name: 'F-16C [AT]',
        descriptor: 'Descriptor_Unit_F16E_AGM_US',
        category: 'air'
    },
    {
        id: 458,
        name: 'F-16C FIGHTING FALCON [AA]',
        descriptor: 'Descriptor_Unit_F16E_AA_US',
        category: 'air'
    },
    {
        id: 459,
        name: 'F-16C [SEAD]',
        descriptor: 'Descriptor_Unit_F16E_SEAD_US',
        category: 'air'
    },
    {
        id: 460,
        name: 'F-16C [CLU]',
        descriptor: 'Descriptor_Unit_F16E_CBU_US',
        category: 'air'
    },
    {
        id: 461,
        name: 'F-16C [NPLM]',
        descriptor: 'Descriptor_Unit_F16E_napalm_US',
        category: 'air'
    },
    {
        id: 464,
        name: 'MIG-27M [HE]',
        descriptor: 'Descriptor_Unit_MiG_27M_bombe_SOV',
        category: 'air'
    },
    {
        id: 465,
        name: 'MIG-27M [NPLM]',
        descriptor: 'Descriptor_Unit_MiG_27M_napalm_SOV',
        category: 'air'
    },
    {
        id: 466,
        name: 'MIG-27M [RKT]',
        descriptor: 'Descriptor_Unit_MiG_27M_rkt_SOV',
        category: 'air'
    },
    {
        id: 467,
        name: 'MIG-27K [SEAD]',
        descriptor: 'Descriptor_Unit_MiG_27M_sead_SOV',
        category: 'air'
    },
    {
        id: 476,
        name: 'MIG-29 [AA]',
        descriptor: 'Descriptor_Unit_MiG_29_AA_SOV',
        category: 'air'
    },
    {
        id: 481,
        name: 'SU-24M [CLU]',
        descriptor: 'Descriptor_Unit_Su_24M_clu_SOV',
        category: 'air'
    },
    {
        id: 482,
        name: 'SU-24M [NPLM]',
        descriptor: 'Descriptor_Unit_Su_24M_nplm_SOV',
        category: 'air'
    },
    {
        id: 483,
        name: 'SU-25 [CLU]',
        descriptor: 'Descriptor_Unit_Su_25_clu_SOV',
        category: 'air'
    },
    {
        id: 484,
        name: 'SU-25 [HE]',
        descriptor: 'Descriptor_Unit_Su_25_he_SOV',
        category: 'air'
    },
    {
        id: 485,
        name: 'SU-25 [NPLM]',
        descriptor: 'Descriptor_Unit_Su_25_nplm_SOV',
        category: 'air'
    },
    {
        id: 486,
        name: 'SU-25 [RKT]',
        descriptor: 'Descriptor_Unit_Su_25_rkt_SOV',
        category: 'air'
    },
    {
        id: 487,
        name: 'Mi-8T [RKT]',
        descriptor: 'Descriptor_Unit_Mi_8TV_SOV',
        category: 'trans'
    },
    {
        id: 488,
        name: 'RKHM',
        descriptor: 'Descriptor_Unit_MTLB_CMD_SOV',
        category: 'log'
    },
    {
        id: 489,
        name: 'MI-8MT GRUZOVOI',
        descriptor: 'Descriptor_Unit_Mi_8TZ_SOV',
        category: 'log'
    },
    {
        id: 490,
        name: 'MI-9',
        descriptor: 'Descriptor_Unit_Mi_8K_CMD_SOV',
        category: 'log'
    },
    {
        id: 491,
        name: 'MI-8MTA',
        descriptor: 'Descriptor_Unit_Mi_8R_SOV',
        category: 'rec'
    },
    {
        id: 492,
        name: 'F-4E PHANTOM II [HE]',
        descriptor: 'Descriptor_Unit_F4E_Phantom_II_HE_US',
        category: 'air'
    },
    {
        id: 493,
        name: 'GAZ-66',
        descriptor: 'Descriptor_Unit_GAZ_66_SOV',
        category: 'trans'
    },
    {
        id: 494,
        name: 'M1A1(HA) ABRAMS CP',
        descriptor: 'Descriptor_Unit_M1A1HA_Abrams_CMD_US',
        category: 'tank'
    },
    {
        id: 495,
        name: 'JAGER FUH.',
        descriptor: 'Descriptor_Unit_Jager_CMD_RFA',
        category: 'inf'
    },
    {
        id: 496,
        name: 'KANJPZ',
        descriptor: 'Descriptor_Unit_KanJagdPanzer_RFA',
        category: 'tank'
    },
    {
        id: 497,
        name: 'M1 ABRAMS CP',
        descriptor: 'Descriptor_Unit_M1_Abrams_CMD_US',
        category: 'tank'
    },
    {
        id: 498,
        name: 'UNIMOG S404',
        descriptor: 'Descriptor_Unit_Unimog_trans_RFA',
        category: 'trans'
    },
    {
        id: 499,
        name: 'ILTIS',
        descriptor: 'Descriptor_Unit_Iltis_trans_RFA',
        category: 'trans'
    },
    {
        id: 500,
        name: 'MTW M113A1G',
        descriptor: 'Descriptor_Unit_M113A1G_RFA',
        category: 'trans'
    },
    {
        id: 501,
        name: 'UAZ-469 SPG9',
        descriptor: 'Descriptor_Unit_UAZ_469_SPG9_DDR',
        category: 'inf'
    },
    {
        id: 502,
        name: 'UAZ-469',
        descriptor: 'Descriptor_Unit_UAZ_469_trans_DDR',
        category: 'trans'
    },
    {
        id: 503,
        name: 'W50 LA/A',
        descriptor: 'Descriptor_Unit_W50_LA_A_DDR',
        category: 'trans'
    },
    {
        id: 506,
        name: 'BM-27 URAGAN',
        descriptor: 'Descriptor_Unit_BM27_Uragan_SOV',
        category: 'art'
    },
    {
        id: 507,
        name: 'ALPHA JET A [CLU]',
        descriptor: 'Descriptor_Unit_Alpha_Jet_A_clu_RFA',
        category: 'air'
    },
    {
        id: 508,
        name: 'ALPHA JET A [HE]',
        descriptor: 'Descriptor_Unit_Alpha_Jet_A_he_RFA',
        category: 'air'
    },
    {
        id: 509,
        name: 'ALPHA JET A [NPLM]',
        descriptor: 'Descriptor_Unit_Alpha_Jet_A_nplm_RFA',
        category: 'air'
    },
    {
        id: 511,
        name: 'MI-8MT [RKT 3]',
        descriptor: 'Descriptor_Unit_Mi_8TV_s80_SOV',
        category: 'hel'
    },
    {
        id: 512,
        name: 'MI-8MT [RKT 1]',
        descriptor: 'Descriptor_Unit_Mi_8TV_s57_16_SOV',
        category: 'hel'
    },
    {
        id: 513,
        name: 'MI-8MT [RKT 2]',
        descriptor: 'Descriptor_Unit_Mi_8TV_s57_32_SOV',
        category: 'hel'
    },
    {
        id: 514,
        name: 'MI-24V [AT]',
        descriptor: 'Descriptor_Unit_Mi_24V_AT_SOV',
        category: 'hel'
    },
    {
        id: 515,
        name: 'PIONIER FUH.',
        descriptor: 'Descriptor_Unit_Engineers_CMD_RFA',
        category: 'inf'
    },
    {
        id: 516,
        name: 'FS-JAGER FUH.',
        descriptor: 'Descriptor_Unit_Fallschirmjager_CMD_DDR',
        category: 'inf'
    },
    {
        id: 517,
        name: 'FS-JAGER FUH.',
        descriptor: 'Descriptor_Unit_Fallschirmjager_CMD_RFA',
        category: 'inf'
    },
    {
        id: 519,
        name: 'FS-SPRENGTAUCHER',
        descriptor: 'Descriptor_Unit_Fallschirmjager_FlaseFlag_Demo_DDR',
        category: 'rec'
    },
    {
        id: 520,
        name: 'FS-JAGER AUFK.',
        descriptor: 'Descriptor_Unit_Fallschirmjager_Scout_RFA',
        category: 'rec'
    },
    {
        id: 522,
        name: 'K.D.A. FUH.',
        descriptor: 'Descriptor_Unit_KdA_CMD_DDR',
        category: 'inf'
    },
    {
        id: 523,
        name: 'K.D.A. SCHUTZEN.',
        descriptor: 'Descriptor_Unit_KdA_DDR',
        category: 'inf'
    },
    {
        id: 524,
        name: 'MOT.-SCHUTZEN FUH.',
        descriptor: 'Descriptor_Unit_MotRifles_CMD_DDR',
        category: 'inf'
    },
    {
        id: 525,
        name: 'PZ.GREN. FUH.',
        descriptor: 'Descriptor_Unit_Panzergrenadier_CMD_RFA',
        category: 'inf'
    },
    {
        id: 528,
        name: 'SPEZIALAUFKLARER',
        descriptor: 'Descriptor_Unit_Scout_LRRP_DDR',
        category: 'rec'
    },
    {
        id: 529,
        name: 'WACHSCHUTZEN FUH.',
        descriptor: 'Descriptor_Unit_Wachregiment_CMD_DDR',
        category: 'inf'
    },
    {
        id: 530,
        name: 'WACHSCHUTZEN',
        descriptor: 'Descriptor_Unit_Wachregiment_DDR',
        category: 'inf'
    },
    {
        id: 531,
        name: 'WACHSCHUTZEN (STOSS)',
        descriptor: 'Descriptor_Unit_Wachregiment_SMG_DDR',
        category: 'inf'
    },
    {
        id: 532,
        name: 'MI-24V [AA]',
        descriptor: 'Descriptor_Unit_Mi_24V_AA_SOV',
        category: 'hel'
    },
    {
        id: 533,
        name: 'MI-24V [RKT]',
        descriptor: 'Descriptor_Unit_Mi_24V_RKT_SOV',
        category: 'hel'
    },
    {
        id: 534,
        name: 'SU-22M4 [CLU]',
        descriptor: 'Descriptor_Unit_Su_22_clu_DDR',
        category: 'air'
    },
    {
        id: 535,
        name: 'SU-22M4 [NPLM]',
        descriptor: 'Descriptor_Unit_Su_22_nplm_DDR',
        category: 'air'
    },
    {
        id: 536,
        name: 'MFRW BM-21 [NPLM]',
        descriptor: 'Descriptor_Unit_BM21_Grad_DDR',
        category: 'art'
    },
    {
        id: 537,
        name: 'AUFKL. BMP-1',
        descriptor: 'Descriptor_Unit_BMP_1P_reco_DDR',
        category: 'trans'
    },
    {
        id: 538,
        name: 'BMP-1K SP2',
        descriptor: 'Descriptor_Unit_BMP_1_CMD_DDR',
        category: 'log'
    },
    {
        id: 539,
        name: 'SPW-40P2(K)',
        descriptor: 'Descriptor_Unit_BRDM_2_CMD_DDR',
        category: 'log'
    },
    {
        id: 540,
        name: 'BRDM-2',
        descriptor: 'Descriptor_Unit_BRDM_2_DDR',
        category: 'rec'
    },
    {
        id: 541,
        name: 'BTR-50PU',
        descriptor: 'Descriptor_Unit_BTR_50_CMD_DDR',
        category: 'log'
    },
    {
        id: 542,
        name: 'BTR-50PK',
        descriptor: 'Descriptor_Unit_BTR_50_DDR',
        category: 'trans'
    },
    {
        id: 543,
        name: 'BTR-60PU',
        descriptor: 'Descriptor_Unit_BTR_60_CMD_DDR',
        category: 'log'
    },
    {
        id: 544,
        name: 'BTR-60PB',
        descriptor: 'Descriptor_Unit_BTR_60_DDR',
        category: 'log'
    },
    {
        id: 545,
        name: 'PIONIER FUH.',
        descriptor: 'Descriptor_Unit_Engineers_CMD_DDR',
        category: 'inf'
    },
    {
        id: 546,
        name: 'OTDELENIE PODDERZHKI',
        descriptor: 'Descriptor_Unit_FireSupport_SOV',
        category: 'inf'
    },
    {
        id: 547,
        name: 'ILTIS MILAN',
        descriptor: 'Descriptor_Unit_Iltis_MILAN_RFA',
        category: 'tank'
    },
    {
        id: 549,
        name: 'LRS',
        descriptor: 'Descriptor_Unit_LRRP_US',
        category: 'rec'
    },
    {
        id: 550,
        name: 'PZ.BEF. LEOPARD 1A1A1',
        descriptor: 'Descriptor_Unit_Leopard_1A1_CMD_RFA',
        category: 'tank'
    },
    {
        id: 551,
        name: 'PZ.BEF. LEOPARD 1A5',
        descriptor: 'Descriptor_Unit_Leopard_1A5_CMD_RFA',
        category: 'tank'
    },
    {
        id: 552,
        name: 'LEOPARD 1A5',
        descriptor: 'Descriptor_Unit_Leopard_1A5_RFA',
        category: 'tank'
    },
    {
        id: 553,
        name: 'PZ.BEF. LEOPARD 2A3',
        descriptor: 'Descriptor_Unit_Leopard_2A3_CMD_RFA',
        category: 'tank'
    },
    {
        id: 554,
        name: 'LEOPARD 2A3',
        descriptor: 'Descriptor_Unit_Leopard_2A3_RFA',
        category: 'tank'
    },
    {
        id: 555,
        name: 'M109A3GA1',
        descriptor: 'Descriptor_Unit_M109A3G_HOWZ_RFA',
        category: 'art'
    },
    {
        id: 556,
        name: 'M110A2G',
        descriptor: 'Descriptor_Unit_M110A2_Howz_RFA',
        category: 'art'
    },
    {
        id: 557,
        name: 'M113A1G AUFKL.',
        descriptor: 'Descriptor_Unit_M113A1G_reco_RFA',
        category: 'trans'
    },
    {
        id: 558,
        name: 'M113A1 MUN.',
        descriptor: 'Descriptor_Unit_M113A1G_supply_RFA',
        category: 'log'
    },
    {
        id: 559,
        name: 'PANZERMORSER',
        descriptor: 'Descriptor_Unit_M113_PzMorser_RFA',
        category: 'art'
    },
    {
        id: 560,
        name: 'M48A2CGA1',
        descriptor: 'Descriptor_Unit_M48A2C_RFA',
        category: 'tank'
    },
    {
        id: 561,
        name: 'M577GA2',
        descriptor: 'Descriptor_Unit_M577_RFA',
        category: 'log'
    },
    {
        id: 562,
        name: 'FLA-RAK. STRELA-10M',
        descriptor: 'Descriptor_Unit_MTLB_Strela10_DDR',
        category: 'aa'
    },
    {
        id: 563,
        name: 'MT-LB MUN.',
        descriptor: 'Descriptor_Unit_MTLB_supply_DDR',
        category: 'log'
    },
    {
        id: 564,
        name: 'MT-LB',
        descriptor: 'Descriptor_Unit_MTLB_trans_DDR',
        category: 'trans'
    },
    {
        id: 565,
        name: 'MARDER 1A2 MILAN',
        descriptor: 'Descriptor_Unit_Marder_1A2_MILAN_RFA',
        category: 'trans'
    },
    {
        id: 566,
        name: 'MARDER 1A2',
        descriptor: 'Descriptor_Unit_Marder_1A2_RFA',
        category: 'trans'
    },
    {
        id: 567,
        name: 'MARDER 1A3 MILAN',
        descriptor: 'Descriptor_Unit_Marder_1A3_MILAN_RFA',
        category: 'trans'
    },
    {
        id: 568,
        name: 'MARDER 1A3',
        descriptor: 'Descriptor_Unit_Marder_1A3_RFA',
        category: 'trans'
    },
    {
        id: 569,
        name: 'FRP ROLAND 3',
        descriptor: 'Descriptor_Unit_Marder_Roland_RFA',
        category: 'aa'
    },
    {
        id: 570,
        name: 'KPZ. T-55AM2B',
        descriptor: 'Descriptor_Unit_T55AM2B_DDR',
        category: 'tank'
    },
    {
        id: 571,
        name: 'FUPZ. T-55AM2K3',
        descriptor: 'Descriptor_Unit_T55AM2_CMD_DDR',
        category: 'tank'
    },
    {
        id: 572,
        name: 'KPZ. T-55AM2',
        descriptor: 'Descriptor_Unit_T55AM2_DDR',
        category: 'tank'
    },
    {
        id: 573,
        name: 'FUPZ. T-55AK',
        descriptor: 'Descriptor_Unit_T55A_CMD_DDR',
        category: 'tank'
    },
    {
        id: 574,
        name: 'KPZ. T-55A',
        descriptor: 'Descriptor_Unit_T55A_DDR',
        category: 'tank'
    },
    {
        id: 575,
        name: 'FUPZ. T-72MK',
        descriptor: 'Descriptor_Unit_T72M_CMD_DDR',
        category: 'tank'
    },
    {
        id: 576,
        name: 'KPZ. T-72GM',
        descriptor: 'Descriptor_Unit_T72M_DDR',
        category: 'tank'
    },
    {
        id: 577,
        name: 'FUCHS FU.FU.',
        descriptor: 'Descriptor_Unit_TPZ_Fuchs_CMD_RFA',
        category: 'log'
    },
    {
        id: 578,
        name: 'TPz FUCHS MILAN',
        descriptor: 'Descriptor_Unit_TPZ_Fuchs_MILAN_RFA',
        category: 'trans'
    },
    {
        id: 579,
        name: 'MI-24P',
        descriptor: 'Descriptor_Unit_Mi_24P_SOV',
        category: 'hel'
    },
    {
        id: 580,
        name: 'F-4F [AA]',
        descriptor: 'Descriptor_Unit_F4F_Phantom_II_AA_RFA',
        category: 'air'
    },
    {
        id: 611,
        name: 'ERC-90 SAGAIE',
        descriptor: 'Descriptor_Unit_ERC_90_Sagaie_FR',
        category: 'tank'
    },
    {
        id: 612,
        name: 'FLA-SFL 57-2',
        descriptor: 'Descriptor_Unit_ZSU_57_2_DDR',
        category: 'aa'
    },
    {
        id: 613,
        name: 'MAN KAT 6X6 MUN.',
        descriptor: 'Descriptor_Unit_MAN_Kat_6x6_RFA',
        category: 'log'
    },
    {
        id: 614,
        name: 'FIRE TEAM (AT-4)',
        descriptor: 'Descriptor_Unit_Rifles_half_AT4_US',
        category: 'inf'
    },
    {
        id: 615,
        name: 'ALPHA JET A [RKT]',
        descriptor: 'Descriptor_Unit_Alpha_Jet_A_rkt_RFA',
        category: 'air'
    },
    {
        id: 617,
        name: 'G.91R/3 GINA [HE]',
        descriptor: 'Descriptor_Unit_G91_R3_Gina_HE_RFA',
        category: 'air'
    },
    {
        id: 618,
        name: 'G.91R/3 GINA [NPLM]',
        descriptor: 'Descriptor_Unit_G91_R3_Gina_NPL_RFA',
        category: 'air'
    },
    {
        id: 619,
        name: 'G.91R/3 GINA [RKT]',
        descriptor: 'Descriptor_Unit_G91_R3_Gina_RKT_RFA',
        category: 'air'
    },
    {
        id: 620,
        name: 'SU-22M4 [RKT]',
        descriptor: 'Descriptor_Unit_Su_22_RKT_DDR',
        category: 'air'
    },
    {
        id: 621,
        name: 'SPz BMP-1 SP1',
        descriptor: 'Descriptor_Unit_BMP_1_SP1_DDR',
        category: 'trans'
    },
    {
        id: 622,
        name: 'PIONIER (ARMBRUST)',
        descriptor: 'Descriptor_Unit_Engineers_AT_RFA',
        category: 'inf'
    },
    {
        id: 623,
        name: 'PIONIER (FLAM)',
        descriptor: 'Descriptor_Unit_Engineers_Flam_RFA',
        category: 'inf'
    },
    {
        id: 624,
        name: 'CVR(T) STRIKER',
        descriptor: 'Descriptor_Unit_FV102_Striker_BEL',
        category: 'tank'
    },
    {
        id: 625,
        name: 'FV102 STRIKER',
        descriptor: 'Descriptor_Unit_FV102_Striker_UK',
        category: 'tank'
    },
    {
        id: 627,
        name: 'JAGUAR 1',
        descriptor: 'Descriptor_Unit_Jaguar_1_RFA',
        category: 'tank'
    },
    {
        id: 628,
        name: 'MARS',
        descriptor: 'Descriptor_Unit_M270_MLRS_RFA',
        category: 'art'
    },
    {
        id: 629,
        name: 'M48A2GA2',
        descriptor: 'Descriptor_Unit_M48A2GA2_RFA',
        category: 'tank'
    },
    {
        id: 630,
        name: 'FRP ROLAND 2',
        descriptor: 'Descriptor_Unit_Marder_Roland_2_RFA',
        category: 'aa'
    },
    {
        id: 631,
        name: 'ECLAIREURS',
        descriptor: 'Descriptor_Unit_Scout_BEL',
        category: 'rec'
    },
    {
        id: 632,
        name: 'KPZ. T-72M1',
        descriptor: 'Descriptor_Unit_T72M1_DDR',
        category: 'tank'
    },
    {
        id: 633,
        name: 'FLAMPZ. TO-55',
        descriptor: 'Descriptor_Unit_TO_55_DDR',
        category: 'tank'
    },
    {
        id: 637,
        name: 'ALOUETTE II',
        descriptor: 'Descriptor_Unit_Alouette_II_reco_RFA',
        category: 'rec'
    },
    {
        id: 638,
        name: 'BO-105 PAH-1A1',
        descriptor: 'Descriptor_Unit_Bo_105_PAH_1A1_RFA',
        category: 'hel'
    },
    {
        id: 639,
        name: 'BO-105 PAH-1',
        descriptor: 'Descriptor_Unit_Bo_105_PAH_1_RFA',
        category: 'hel'
    },
    {
        id: 640,
        name: 'MI-24D [AT]',
        descriptor: 'Descriptor_Unit_Mi_24D_s5_AT_DDR',
        category: 'hel'
    },
    {
        id: 641,
        name: 'MI-24P [AT]',
        descriptor: 'Descriptor_Unit_Mi_24P_s8_AT_DDR',
        category: 'hel'
    },
    {
        id: 642,
        name: 'MI-2',
        descriptor: 'Descriptor_Unit_Mi_2_reco_DDR',
        category: 'rec'
    },
    {
        id: 643,
        name: 'Mi-2T',
        descriptor: 'Descriptor_Unit_Mi_2_trans_DDR',
        category: 'trans'
    },
    {
        id: 644,
        name: 'MI-8TV [RKT 1]',
        descriptor: 'Descriptor_Unit_Mi_8TV_DDR',
        category: 'hel'
    },
    {
        id: 645,
        name: 'MI-8MT [GUV]',
        descriptor: 'Descriptor_Unit_Mi_8TV_PodGatling_DDR',
        category: 'hel'
    },
    {
        id: 646,
        name: 'MI-8MT [GUV]',
        descriptor: 'Descriptor_Unit_Mi_8TV_PodGatling_PodAGL_SOV',
        category: 'hel'
    },
    {
        id: 647,
        name: 'MI-8TV [RKT 2]',
        descriptor: 'Descriptor_Unit_Mi_8TV_s57_32_DDR',
        category: 'hel'
    },
    {
        id: 648,
        name: 'Mi-8T [RKT]',
        descriptor: 'Descriptor_Unit_Mi_8T_DDR',
        category: 'trans'
    },
    {
        id: 649,
        name: 'UH-1D',
        descriptor: 'Descriptor_Unit_UH1D_RFA',
        category: 'trans'
    },
    {
        id: 650,
        name: 'F-104G [HE]',
        descriptor: 'Descriptor_Unit_F104G_Starfighter_HE_RFA',
        category: 'air'
    },
    {
        id: 651,
        name: 'F-104G [AA]',
        descriptor: 'Descriptor_Unit_F104G_Starfighter_RFA',
        category: 'air'
    },
    {
        id: 652,
        name: 'F-4F [AT]',
        descriptor: 'Descriptor_Unit_F4F_Phantom_II_AT_RFA',
        category: 'air'
    },
    {
        id: 653,
        name: 'F-4F [HE1]',
        descriptor: 'Descriptor_Unit_F4F_Phantom_II_HE1_RFA',
        category: 'air'
    },
    {
        id: 654,
        name: 'F-4F [HE2]',
        descriptor: 'Descriptor_Unit_F4F_Phantom_II_HE2_RFA',
        category: 'air'
    },
    {
        id: 657,
        name: 'MIG-21BIS [AA]',
        descriptor: 'Descriptor_Unit_MiG_21PFM_AA_DDR',
        category: 'air'
    },
    {
        id: 658,
        name: 'MIG-21BIS [HE]',
        descriptor: 'Descriptor_Unit_MiG_21bis_HE_DDR',
        category: 'air'
    },
    {
        id: 659,
        name: 'MIG-23MF [AT]',
        descriptor: 'Descriptor_Unit_MiG_23BN_AT_DDR',
        category: 'air'
    },
    {
        id: 660,
        name: 'MIG-29A [AA]',
        descriptor: 'Descriptor_Unit_MiG_29_AA_DDR',
        category: 'air'
    },
    {
        id: 661,
        name: 'SU-22M-4K [AT]',
        descriptor: 'Descriptor_Unit_Su_22_AT_DDR',
        category: 'air'
    },
    {
        id: 662,
        name: 'SU-22M-4P [SEAD]',
        descriptor: 'Descriptor_Unit_Su_22_SEAD_DDR',
        category: 'air'
    },
    {
        id: 663,
        name: 'TORNADO IDS [AT]',
        descriptor: 'Descriptor_Unit_Tornado_IDS_AT1_RFA',
        category: 'air'
    },
    {
        id: 665,
        name: 'TORNADO IDS [CLU]',
        descriptor: 'Descriptor_Unit_Tornado_IDS_CLUS_RFA',
        category: 'air'
    },
    {
        id: 666,
        name: 'TORNADO IDS [HE]',
        descriptor: 'Descriptor_Unit_Tornado_IDS_HE1_RFA',
        category: 'air'
    },
    {
        id: 668,
        name: 'TORNADO IDS [MW1]',
        descriptor: 'Descriptor_Unit_Tornado_IDS_MW1_RFA',
        category: 'air'
    },
    {
        id: 707,
        name: 'TORNADO GR.1 [SEAD]',
        descriptor: 'Descriptor_Unit_Tornado_ADV_SEAD_UK',
        category: 'air'
    },
    {
        id: 708,
        name: 'HARRIER GR.3 [RKT2]',
        descriptor: 'Descriptor_Unit_Harrier_RKT2_UK',
        category: 'air'
    },
    {
        id: 709,
        name: 'TPZ FUCHS RASIT',
        descriptor: 'Descriptor_Unit_TPZ_Fuchs_RASIT_RFA',
        category: 'rec'
    },
    {
        id: 711,
        name: 'TPZ GREEN ARCHER',
        descriptor: 'Descriptor_Unit_M113_GreenArcher_RFA',
        category: 'rec'
    },
    {
        id: 712,
        name: 'GREEN ARCHER',
        descriptor: 'Descriptor_Unit_M113_GreenArcher_UK',
        category: 'rec'
    },
    {
        id: 713,
        name: 'T813',
        descriptor: 'Descriptor_Unit_T813_trans_DDR',
        category: 'trans'
    },
    {
        id: 714,
        name: 'AH-1F ATAS',
        descriptor: 'Descriptor_Unit_AH1F_ATAS_US',
        category: 'aa'
    },
    {
        id: 715,
        name: 'F-104G [AT]',
        descriptor: 'Descriptor_Unit_F104G_Starfighter_AT_RFA',
        category: 'air'
    },
    {
        id: 716,
        name: 'MIG-21BIS [AA2]',
        descriptor: 'Descriptor_Unit_MiG_21bis_AA2_DDR',
        category: 'air'
    },
    {
        id: 717,
        name: 'Mi-2T',
        descriptor: 'Descriptor_Unit_Mi_2_trans_SOV',
        category: 'trans'
    },
    {
        id: 718,
        name: 'FS-PALR FAGOT',
        descriptor: 'Descriptor_Unit_ATteam_Fagot_FJ_DDR',
        category: 'inf'
    },
    {
        id: 721,
        name: 'BMP-1PG',
        descriptor: 'Descriptor_Unit_BMP_1PG_SOV',
        category: 'trans'
    },
    {
        id: 752,
        name: 'DESANT. KOM. (DSH)',
        descriptor: 'Descriptor_Unit_DShV_CMD_SOV',
        category: 'inf'
    },
    {
        id: 753,
        name: 'DESANTNIKI (DSH)',
        descriptor: 'Descriptor_Unit_DShV_SOV',
        category: 'inf'
    },
    {
        id: 754,
        name: 'PALR FAGOT',
        descriptor: 'Descriptor_Unit_ATteam_Fagot_DDR',
        category: 'inf'
    },
    {
        id: 755,
        name: 'FAGOT',
        descriptor: 'Descriptor_Unit_ATteam_Fagot_SOV',
        category: 'inf'
    },
    {
        id: 756,
        name: 'I-TOW',
        descriptor: 'Descriptor_Unit_ATteam_ITOW_US',
        category: 'inf'
    },
    {
        id: 757,
        name: 'PALR KONKURS',
        descriptor: 'Descriptor_Unit_ATteam_Konkurs_DDR',
        category: 'inf'
    },
    {
        id: 758,
        name: 'KONKURS',
        descriptor: 'Descriptor_Unit_ATteam_Konkurs_SOV',
        category: 'inf'
    },
    {
        id: 759,
        name: 'MILAN 1',
        descriptor: 'Descriptor_Unit_ATteam_Milan_1_FR',
        category: 'inf'
    },
    {
        id: 760,
        name: 'PALR MILAN 1',
        descriptor: 'Descriptor_Unit_ATteam_Milan_1_RFA',
        category: 'inf'
    },
    {
        id: 761,
        name: 'PALR MILAN 2',
        descriptor: 'Descriptor_Unit_ATteam_Milan_2_RFA',
        category: 'inf'
    },
    {
        id: 762,
        name: 'FS-PALR MILAN 2',
        descriptor: 'Descriptor_Unit_ATteam_Milan_2_para_RFA',
        category: 'inf'
    },
    {
        id: 763,
        name: 'M40A1',
        descriptor: 'Descriptor_Unit_ATteam_RCL_M40A1_RFA',
        category: 'inf'
    },
    {
        id: 764,
        name: 'SPG-9',
        descriptor: 'Descriptor_Unit_ATteam_RCL_SPG9_DDR',
        category: 'inf'
    },
    {
        id: 765,
        name: 'FS-SPG-9',
        descriptor: 'Descriptor_Unit_ATteam_RCL_SPG9_FJ_DDR',
        category: 'inf'
    },
    {
        id: 766,
        name: 'TOW-2',
        descriptor: 'Descriptor_Unit_ATteam_TOW2_US',
        category: 'inf'
    },
    {
        id: 767,
        name: 'AB TOW-2',
        descriptor: 'Descriptor_Unit_ATteam_TOW2_para_US',
        category: 'inf'
    },
    {
        id: 768,
        name: 'SPz BMP-1P',
        descriptor: 'Descriptor_Unit_BMP_1P_DDR',
        category: 'trans'
    },
    {
        id: 769,
        name: 'CVR(T) SCORPION',
        descriptor: 'Descriptor_Unit_FV101_Scorpion_BEL',
        category: 'rec'
    },
    {
        id: 770,
        name: 'CVR(T) SPARTAN',
        descriptor: 'Descriptor_Unit_FV103_Spartan_BEL',
        category: 'trans'
    },
    {
        id: 771,
        name: 'CVR(T) SULTAN',
        descriptor: 'Descriptor_Unit_FV105_Sultan_BEL',
        category: 'log'
    },
    {
        id: 772,
        name: 'CVR(T) SCIMITAR',
        descriptor: 'Descriptor_Unit_FV107_Scimitar_BEL',
        category: 'rec'
    },
    {
        id: 773,
        name: 'MAN KAT 6X6',
        descriptor: 'Descriptor_Unit_MAN_Kat_6x6_trans_RFA',
        category: 'trans'
    },
    {
        id: 774,
        name: 'MOT.-SCHUTZEN (S.MG)',
        descriptor: 'Descriptor_Unit_MotRifles_HMG_DDR',
        category: 'inf'
    },
    {
        id: 775,
        name: 'PULEMETCHIKI',
        descriptor: 'Descriptor_Unit_MotRifles_HMG_SOV',
        category: 'inf'
    },
    {
        id: 776,
        name: 'AUFKL. PT-76B',
        descriptor: 'Descriptor_Unit_PT76B_DDR',
        category: 'rec'
    },
    {
        id: 777,
        name: 'GUNNERS',
        descriptor: 'Descriptor_Unit_Rifles_HMG_US',
        category: 'inf'
    },
    {
        id: 780,
        name: 'VAB RASIT',
        descriptor: 'Descriptor_Unit_VAB_RASIT_FR',
        category: 'rec'
    },
    {
        id: 781,
        name: 'AH-1F HEAVY HOG',
        descriptor: 'Descriptor_Unit_AH1F_HeavyHog_US',
        category: 'hel'
    },
    {
        id: 784,
        name: 'B0-105M VBH',
        descriptor: 'Descriptor_Unit_Bo_105_reco_RFA',
        category: 'rec'
    },
    {
        id: 785,
        name: 'B0-105M',
        descriptor: 'Descriptor_Unit_Bo_105_trans_RFA',
        category: 'trans'
    },
    {
        id: 787,
        name: 'MI-24D [AA]',
        descriptor: 'Descriptor_Unit_Mi_24D_AA_DDR',
        category: 'hel'
    },
    {
        id: 788,
        name: 'MI-24D [AT 2]',
        descriptor: 'Descriptor_Unit_Mi_24D_s8_AT_DDR',
        category: 'hel'
    },
    {
        id: 789,
        name: 'MI-24P [AT 2]',
        descriptor: 'Descriptor_Unit_Mi_24P_s8_AT2_DDR',
        category: 'hel'
    },
    {
        id: 790,
        name: 'MI-2',
        descriptor: 'Descriptor_Unit_Mi_2_reco_SOV',
        category: 'rec'
    },
    {
        id: 791,
        name: 'MI-8TB',
        descriptor: 'Descriptor_Unit_Mi_8TB_DDR',
        category: 'hel'
    },
    {
        id: 792,
        name: 'MI-8T MUN.',
        descriptor: 'Descriptor_Unit_Mi_8_supply_DDR',
        category: 'log'
    },
    {
        id: 793,
        name: 'MI-9',
        descriptor: 'Descriptor_Unit_Mi_9_DDR',
        category: 'log'
    },
    {
        id: 794,
        name: 'UH-1D MUN.',
        descriptor: 'Descriptor_Unit_UH1D_Supply_RFA',
        category: 'log'
    },
    {
        id: 795,
        name: 'MIG-23MF [AA]',
        descriptor: 'Descriptor_Unit_MiG_23MF_AA_DDR',
        category: 'air'
    },
    {
        id: 796,
        name: 'MIG-23ML [AA]',
        descriptor: 'Descriptor_Unit_MiG_23ML_DDR',
        category: 'air'
    },
    {
        id: 797,
        name: 'MILAN 1',
        descriptor: 'Descriptor_Unit_ATteam_Milan_1_UK',
        category: 'inf'
    },
    {
        id: 798,
        name: 'MILAN 2',
        descriptor: 'Descriptor_Unit_ATteam_Milan_2_FR',
        category: 'inf'
    },
    {
        id: 799,
        name: 'MILAN 2',
        descriptor: 'Descriptor_Unit_ATteam_Milan_2_UK',
        category: 'inf'
    },
    {
        id: 800,
        name: 'MILAN 2 PARA.',
        descriptor: 'Descriptor_Unit_ATteam_Milan_2_para_FR',
        category: 'inf'
    },
    {
        id: 801,
        name: 'MILAN 2 PARA.',
        descriptor: 'Descriptor_Unit_ATteam_Milan_2_para_UK',
        category: 'inf'
    },
    {
        id: 802,
        name: 'DESANT. SPG-9',
        descriptor: 'Descriptor_Unit_ATteam_RCL_SPG9_VDV_SOV',
        category: 'inf'
    },
    {
        id: 803,
        name: 'AB ENGINEERS LDR.',
        descriptor: 'Descriptor_Unit_Airborne_Engineer_CMD_US',
        category: 'inf'
    },
    {
        id: 804,
        name: 'AIRBORNE ENGINEERS',
        descriptor: 'Descriptor_Unit_Airborne_Engineers_US',
        category: 'inf'
    },
    {
        id: 805,
        name: 'AB MILITARY POLICE (M67)',
        descriptor: 'Descriptor_Unit_Airborne_MP_RCL_US',
        category: 'inf'
    },
    {
        id: 806,
        name: 'AB MILITARY POLICE',
        descriptor: 'Descriptor_Unit_Airborne_MP_US',
        category: 'inf'
    },
    {
        id: 807,
        name: 'DESANT. FAGOT',
        descriptor: 'Descriptor_Unit_Atteam_Fagot_VDV_SOV',
        category: 'inf'
    },
    {
        id: 808,
        name: 'DESANT. KONKURS',
        descriptor: 'Descriptor_Unit_Atteam_Konkurs_VDV_SOV',
        category: 'inf'
    },
    {
        id: 809,
        name: 'BM-21V GRAD-V',
        descriptor: 'Descriptor_Unit_BM21V_GradV_SOV',
        category: 'art'
    },
    {
        id: 810,
        name: 'FH155-1 155MM',
        descriptor: 'Descriptor_Unit_FH70_155mm_RFA',
        category: 'art'
    },
    {
        id: 811,
        name: 'T-62M1',
        descriptor: 'Descriptor_Unit_T62M1_SOV',
        category: 'tank'
    },
    {
        id: 812,
        name: 'T-62MV',
        descriptor: 'Descriptor_Unit_T62MV_SOV',
        category: 'tank'
    },
    {
        id: 813,
        name: 'T-62MK',
        descriptor: 'Descriptor_Unit_T62M_CMD_SOV',
        category: 'tank'
    },
    {
        id: 814,
        name: 'T-62M',
        descriptor: 'Descriptor_Unit_T62M_SOV',
        category: 'tank'
    },
    {
        id: 815,
        name: 'DESANT. UAZ-3151 AGS-17',
        descriptor: 'Descriptor_Unit_UAZ_469_AGL_VDV_SOV',
        category: 'inf'
    },
    {
        id: 816,
        name: 'A-10A [RKT]',
        descriptor: 'Descriptor_Unit_A10_Thunderbolt_II_Rkt_US',
        category: 'air'
    },
    {
        id: 817,
        name: '2S9 NONA',
        descriptor: 'Descriptor_Unit_2S9_Nona_SOV',
        category: 'art'
    },
    {
        id: 818,
        name: 'PAK D-44 85MM',
        descriptor: 'Descriptor_Unit_AT_D44_85mm_DDR',
        category: 'tank'
    },
    {
        id: 820,
        name: 'DESANT. D-44 85MM',
        descriptor: 'Descriptor_Unit_AT_D44_85mm_VDV_SOV',
        category: 'tank'
    },
    {
        id: 821,
        name: 'PAK MT-12 100M',
        descriptor: 'Descriptor_Unit_AT_T12_Rapira_DDR',
        category: 'tank'
    },
    {
        id: 822,
        name: 'MT-12 RAPIRA 100M',
        descriptor: 'Descriptor_Unit_AT_T12_Rapira_SOV',
        category: 'tank'
    },
    {
        id: 823,
        name: 'AIRBORNE LDR.',
        descriptor: 'Descriptor_Unit_Airborne_CMD_US',
        category: 'inf'
    },
    {
        id: 824,
        name: 'AIRBORNE (DRAGON)',
        descriptor: 'Descriptor_Unit_Airborne_Dragon_US',
        category: 'inf'
    },
    {
        id: 825,
        name: 'AIRBORNE GUNNERS',
        descriptor: 'Descriptor_Unit_Airborne_HMG_US',
        category: 'inf'
    },
    {
        id: 826,
        name: 'AIRBORNE SCOUTS',
        descriptor: 'Descriptor_Unit_Airborne_Scout_US',
        category: 'rec'
    },
    {
        id: 827,
        name: 'AIRBORNE',
        descriptor: 'Descriptor_Unit_Airborne_US',
        category: 'inf'
    },
    {
        id: 828,
        name: 'BMD-1KSH SOROKA',
        descriptor: 'Descriptor_Unit_BMD_1_CMD_SOV',
        category: 'log'
    },
    {
        id: 829,
        name: 'BMD-1',
        descriptor: 'Descriptor_Unit_BMD_1_SOV',
        category: 'trans'
    },
    {
        id: 830,
        name: 'BMD-2',
        descriptor: 'Descriptor_Unit_BMD_2_SOV',
        category: 'trans'
    },
    {
        id: 831,
        name: 'BTR-RD ROBOT',
        descriptor: 'Descriptor_Unit_BTR_D_Robot_SOV',
        category: 'trans'
    },
    {
        id: 832,
        name: 'BTR-D',
        descriptor: 'Descriptor_Unit_BTR_D_SOV',
        category: 'trans'
    },
    {
        id: 833,
        name: 'BTR-ZD SKREZHET',
        descriptor: 'Descriptor_Unit_BTR_ZD_Skrezhet_SOV',
        category: 'trans'
    },
    {
        id: 834,
        name: 'FK2O-2 20MM ZWILLINGE',
        descriptor: 'Descriptor_Unit_DCA_FK20_2_20mm_Zwillinge_RFA',
        category: 'aa'
    },
    {
        id: 835,
        name: 'I-HAWK',
        descriptor: 'Descriptor_Unit_DCA_I_Hawk_RFA',
        category: 'aa'
    },
    {
        id: 836,
        name: 'I-HAWK',
        descriptor: 'Descriptor_Unit_DCA_I_Hawk_US',
        category: 'aa'
    },
    {
        id: 837,
        name: 'M167 VULCAN 20MM',
        descriptor: 'Descriptor_Unit_DCA_M167_Vulcan_20mm_US',
        category: 'aa'
    },
    {
        id: 838,
        name: 'ZU-23-2',
        descriptor: 'Descriptor_Unit_DCA_ZU_23_2_SOV',
        category: 'aa'
    },
    {
        id: 839,
        name: 'FS-JAGER (S.MG)',
        descriptor: 'Descriptor_Unit_Fallschirmjager_HMG_DDR',
        category: 'inf'
    },
    {
        id: 840,
        name: 'GAZ-66B',
        descriptor: 'Descriptor_Unit_GAZ_66B_SOV',
        category: 'trans'
    },
    {
        id: 841,
        name: 'GAZ-66 ZU-23-2',
        descriptor: 'Descriptor_Unit_GAZ_66B_ZU_SOV',
        category: 'aa'
    },
    {
        id: 842,
        name: 'D-20 152MM',
        descriptor: 'Descriptor_Unit_Howz_D20_152mm_DDR',
        category: 'art'
    },
    {
        id: 843,
        name: 'D-20 152MM',
        descriptor: 'Descriptor_Unit_Howz_D20_152mm_SOV',
        category: 'art'
    },
    {
        id: 844,
        name: 'D-30 122MM',
        descriptor: 'Descriptor_Unit_Howz_D30_122mm_DDR',
        category: 'art'
    },
    {
        id: 845,
        name: 'D-30 122MM',
        descriptor: 'Descriptor_Unit_Howz_D30_122mm_SOV',
        category: 'art'
    },
    {
        id: 846,
        name: 'DESANT. D-30 122MM',
        descriptor: 'Descriptor_Unit_Howz_D30_122mm_VDV_SOV',
        category: 'art'
    },
    {
        id: 847,
        name: 'M102 105MM',
        descriptor: 'Descriptor_Unit_Howz_M102_105mm_US',
        category: 'art'
    },
    {
        id: 848,
        name: 'M-46 130MM',
        descriptor: 'Descriptor_Unit_Howz_M46_130mm_DDR',
        category: 'art'
    },
    {
        id: 849,
        name: 'AB M1025 HUMVEE CP',
        descriptor: 'Descriptor_Unit_M1025_Humvee_CMD_para_US',
        category: 'log'
    },
    {
        id: 850,
        name: 'AB M1025 HUMVEE TOW',
        descriptor: 'Descriptor_Unit_M1025_Humvee_TOW_para_US',
        category: 'tank'
    },
    {
        id: 851,
        name: 'M551 TTS SHERIDAN',
        descriptor: 'Descriptor_Unit_M551A1_TTS_Sheridan_CMD_US',
        category: 'tank'
    },
    {
        id: 852,
        name: 'M551 TTS SHERIDAN',
        descriptor: 'Descriptor_Unit_M551A1_TTS_Sheridan_US',
        category: 'tank'
    },
    {
        id: 853,
        name: 'M998 AVENGER PARAS',
        descriptor: 'Descriptor_Unit_M998_Avenger_US',
        category: 'aa'
    },
    {
        id: 854,
        name: 'AB STINGER',
        descriptor: 'Descriptor_Unit_MANPAD_Stinger_C_para_US',
        category: 'aa'
    },
    {
        id: 855,
        name: 'MT-LB VASILEK',
        descriptor: 'Descriptor_Unit_MTLB_Vasilek_SOV',
        category: 'art'
    },
    {
        id: 856,
        name: 'AB M30 107MM',
        descriptor: 'Descriptor_Unit_Mortier_107mm_Airborne_US',
        category: 'art'
    },
    {
        id: 857,
        name: '2B9 VASILEK',
        descriptor: 'Descriptor_Unit_Mortier_2B9_Vasilek_SOV',
        category: 'art'
    },
    {
        id: 858,
        name: '2S12 120MM',
        descriptor: 'Descriptor_Unit_Mortier_2S12_120mm_SOV',
        category: 'art'
    },
    {
        id: 859,
        name: 'DESANT. 2S12 120MM',
        descriptor: 'Descriptor_Unit_Mortier_2S12_120mm_VDV_SOV',
        category: 'art'
    },
    {
        id: 860,
        name: 'GR.WFR. M43 120MM',
        descriptor: 'Descriptor_Unit_Mortier_PM43_120mm_DDR',
        category: 'art'
    },
    {
        id: 861,
        name: 'MRS. 120MM TAMPELLA',
        descriptor: 'Descriptor_Unit_Mortier_Tampella_120mm_RFA',
        category: 'art'
    },
    {
        id: 862,
        name: 'DESANT. KSHM R-149',
        descriptor: 'Descriptor_Unit_UAZ_469_CMD_VDV_SOV',
        category: 'log'
    },
    {
        id: 863,
        name: 'DESANT. UAZ-3151 KONKURS',
        descriptor: 'Descriptor_Unit_UAZ_469_Konkurs_VDV_SOV',
        category: 'tank'
    },
    {
        id: 864,
        name: 'DESANT. UAZ-3151 SPG9',
        descriptor: 'Descriptor_Unit_UAZ_469_SPG9_VDV_SOV',
        category: 'inf'
    },
    {
        id: 865,
        name: 'DESANT. UAZ-3151 SNAB.',
        descriptor: 'Descriptor_Unit_UAZ_469_supply_VDV_SOV',
        category: 'log'
    },
    {
        id: 866,
        name: 'DESANT. PULEMETCHIKI',
        descriptor: 'Descriptor_Unit_VDV_HMG_SOV',
        category: 'inf'
    },
    {
        id: 867,
        name: 'MI-24K',
        descriptor: 'Descriptor_Unit_Mi_24K_reco_SOV',
        category: 'rec'
    },
    {
        id: 869,
        name: 'MIG-21BIS [RKT2]',
        descriptor: 'Descriptor_Unit_MiG_21bis_RKT2_DDR',
        category: 'air'
    },
    {
        id: 870,
        name: 'MIG-25RBF [HE]',
        descriptor: 'Descriptor_Unit_MiG_25RBF_SOV',
        category: 'air'
    },
    {
        id: 871,
        name: 'FH M1A2 (A2) 105MM',
        descriptor: 'Descriptor_Unit_Howz_M101_105mm_RFA',
        category: 'art'
    },
    {
        id: 872,
        name: 'PZ.BEF. M48A2GA2',
        descriptor: 'Descriptor_Unit_M48A2GA2_CMD_RFA',
        category: 'tank'
    },
    {
        id: 873,
        name: 'PT-76B FUH.',
        descriptor: 'Descriptor_Unit_PT76B_CMD_DDR',
        category: 'tank'
    },
    {
        id: 874,
        name: 'BEDFORD MJ SUPPLY',
        descriptor: 'Descriptor_Unit_Bedford_MJ_4t_UK',
        category: 'log'
    },
    {
        id: 875,
        name: 'L118 105MM',
        descriptor: 'Descriptor_Unit_Howz_L118_105mm_UK',
        category: 'art'
    },
    {
        id: 876,
        name: 'FLAK ZU-23-2',
        descriptor: 'Descriptor_Unit_DCA_ZU_23_2_DDR',
        category: 'aa'
    },
    {
        id: 877,
        name: 'MILAN 1 PARAS',
        descriptor: 'Descriptor_Unit_ATteam_Milan_1_para_FR',
        category: 'inf'
    },
    {
        id: 878,
        name: 'AIRBORNE ENGINEERS (FLASH)',
        descriptor: 'Descriptor_Unit_Airborne_Engineers_Flash_US',
        category: 'inf'
    },
    {
        id: 879,
        name: 'RESERVE PIONIER',
        descriptor: 'Descriptor_Unit_Engineers_Reserve_RFA',
        category: 'inf'
    },
    {
        id: 883,
        name: 'TORNADO GR.1 [HE]',
        descriptor: 'Descriptor_Unit_Tornado_ADV_HE_UK',
        category: 'air'
    },
    {
        id: 884,
        name: 'TORNADO GR.1 [CLU]',
        descriptor: 'Descriptor_Unit_Tornado_ADV_clu_UK',
        category: 'air'
    },
    {
        id: 885,
        name: 'FLAK L/70 BOFORS',
        descriptor: 'Descriptor_Unit_Bofors_40mm_RFA',
        category: 'aa'
    },
    {
        id: 886,
        name: 'FK20-2 20MM',
        descriptor: 'Descriptor_Unit_DCA_FK20_2_20mm_RFA',
        category: 'aa'
    },
    {
        id: 887,
        name: 'AANFI 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_AANF1_FR',
        category: 'inf'
    },
    {
        id: 888,
        name: 'PLAMYA 30MM',
        descriptor: 'Descriptor_Unit_HMGteam_AGS17_SOV',
        category: 'inf'
    },
    {
        id: 890,
        name: 'M2HB 12,7MM',
        descriptor: 'Descriptor_Unit_HMGteam_M2HB_US',
        category: 'inf'
    },
    {
        id: 891,
        name: 'M60 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_M60_US',
        category: 'inf'
    },
    {
        id: 892,
        name: 'MAG 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_MAG_UK',
        category: 'inf'
    },
    {
        id: 893,
        name: 'MG-3 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_MG3_RFA',
        category: 'inf'
    },
    {
        id: 895,
        name: 'PKM 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_PKM_DDR',
        category: 'inf'
    },
    {
        id: 896,
        name: 'PKM 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_PKM_SOV',
        category: 'inf'
    },
    {
        id: 898,
        name: 'CMDT AEROMOBILES',
        descriptor: 'Descriptor_Unit_Rifles_Aero_CMD_FR',
        category: 'inf'
    },
    {
        id: 899,
        name: 'AEROMOBILES',
        descriptor: 'Descriptor_Unit_Rifles_Aero_FR',
        category: 'inf'
    },
    {
        id: 900,
        name: 'CMDT GREN.-VOLTIGEURS',
        descriptor: 'Descriptor_Unit_Rifles_CMD_FR',
        category: 'inf'
    },
    {
        id: 901,
        name: 'KPZ. T-34/85M',
        descriptor: 'Descriptor_Unit_T34_85M_DDR',
        category: 'tank'
    },
    {
        id: 902,
        name: 'UAZ-469 FAGOT',
        descriptor: 'Descriptor_Unit_UAZ_469_Fagot_DDR',
        category: 'tank'
    },
    {
        id: 903,
        name: 'P4 MILAN',
        descriptor: 'Descriptor_Unit_VLTT_P4_MILAN_FR',
        category: 'tank'
    },
    {
        id: 904,
        name: 'P4 MILAN PARAS',
        descriptor: 'Descriptor_Unit_VLTT_P4_MILAN_para_FR',
        category: 'tank'
    },
    {
        id: 905,
        name: 'VOPOS FUH.',
        descriptor: 'Descriptor_Unit_Volkspolizei_CMD_DDR',
        category: 'inf'
    },
    {
        id: 906,
        name: 'VOPOS',
        descriptor: 'Descriptor_Unit_Volkspolizei_DDR',
        category: 'inf'
    },
    {
        id: 907,
        name: 'GAZELLE CANON',
        descriptor: 'Descriptor_Unit_Gazelle_20mm_reco_FR',
        category: 'rec'
    },
    {
        id: 908,
        name: 'GAZELLE HOT 2',
        descriptor: 'Descriptor_Unit_Gazelle_HOT_2_FR',
        category: 'hel'
    },
    {
        id: 909,
        name: 'GAZELLE LISSE',
        descriptor: 'Descriptor_Unit_Gazelle_reco_FR',
        category: 'rec'
    },
    {
        id: 910,
        name: 'KA-50 AKULA [AA]',
        descriptor: 'Descriptor_Unit_Ka_50_AA_SOV',
        category: 'aa'
    },
    {
        id: 911,
        name: 'MIRAGE 5 F (CLU)',
        descriptor: 'Descriptor_Unit_Mirage_5_F_clu_FR',
        category: 'air'
    },
    {
        id: 912,
        name: 'SU-17M4 [RKT]',
        descriptor: 'Descriptor_Unit_Su_17M4_SOV',
        category: 'air'
    },
    {
        id: 913,
        name: 'FS-JAGER B1',
        descriptor: 'Descriptor_Unit_Fallschirm_B1_RFA',
        category: 'rec'
    },
    {
        id: 914,
        name: 'SCHWIM.PZ. PT-76B',
        descriptor: 'Descriptor_Unit_PT76B_tank_DDR',
        category: 'tank'
    },
    {
        id: 915,
        name: 'F-111F [LGB2]',
        descriptor: 'Descriptor_Unit_F111F_Aardvark_LGB2_US',
        category: 'air'
    },
    {
        id: 916,
        name: 'F-111F [LGB]',
        descriptor: 'Descriptor_Unit_F111F_Aardvark_LGB_US',
        category: 'air'
    },
    {
        id: 1039,
        name: 'M1038 HUMVEE',
        descriptor: 'Descriptor_Unit_M1038_Humvee_US',
        category: 'trans'
    },
    {
        id: 1040,
        name: 'MFRW RM-70 [CLU]',
        descriptor: 'Descriptor_Unit_MFRW_RM70_cluster_DDR',
        category: 'art'
    },
    {
        id: 1042,
        name: 'T-80BV IZD. 29',
        descriptor: 'Descriptor_Unit_T80BV_Beast_SOV',
        category: 'tank'
    },
    {
        id: 1043,
        name: 'T-80UD',
        descriptor: 'Descriptor_Unit_T80UD_SOV',
        category: 'tank'
    },
    {
        id: 1044,
        name: 'AMX-10 PC',
        descriptor: 'Descriptor_Unit_AMX_10_PC_CMD_FR',
        category: 'log'
    },
    {
        id: 1045,
        name: 'AMX-10 VOA',
        descriptor: 'Descriptor_Unit_AMX_10_P_VOA_FR',
        category: 'rec'
    },
    {
        id: 1046,
        name: 'AMX-30 B2 BRENUS',
        descriptor: 'Descriptor_Unit_AMX_30_B2_Brennus_FR',
        category: 'tank'
    },
    {
        id: 1047,
        name: 'AMX-30 B2 PC',
        descriptor: 'Descriptor_Unit_AMX_30_B2_CMD_FR',
        category: 'tank'
    },
    {
        id: 1048,
        name: 'AMX-30 EBG',
        descriptor: 'Descriptor_Unit_AMX_30_EBG_FR',
        category: 'tank'
    },
    {
        id: 1049,
        name: 'CMDT CHASSEURS',
        descriptor: 'Descriptor_Unit_Chasseurs_CMD_FR',
        category: 'inf'
    },
    {
        id: 1050,
        name: 'CHASSEURS',
        descriptor: 'Descriptor_Unit_Chasseurs_FR',
        category: 'inf'
    },
    {
        id: 1051,
        name: 'COMMANDOS',
        descriptor: 'Descriptor_Unit_Commandos_FR',
        category: 'inf'
    },
    {
        id: 1052,
        name: 'ESCORTE PC',
        descriptor: 'Descriptor_Unit_Escorte_FR',
        category: 'inf'
    },
    {
        id: 1053,
        name: 'PREVOTE',
        descriptor: 'Descriptor_Unit_Gendarmerie_FR',
        category: 'inf'
    },
    {
        id: 1054,
        name: 'GROUPE ANTICHAR',
        descriptor: 'Descriptor_Unit_Groupe_AT_FR',
        category: 'inf'
    },
    {
        id: 1055,
        name: 'AANFI 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_AANF1_para_FR',
        category: 'inf'
    },
    {
        id: 1056,
        name: 'GR.-MG 30MM',
        descriptor: 'Descriptor_Unit_HMGteam_AGS17_DDR',
        category: 'inf'
    },
    {
        id: 1057,
        name: 'DESANT. PLAMYA 30MM',
        descriptor: 'Descriptor_Unit_HMGteam_AGS17_VDV_SOV',
        category: 'inf'
    },
    {
        id: 1058,
        name: 'M2HB 12,7MM',
        descriptor: 'Descriptor_Unit_HMGteam_M2HB_AB_US',
        category: 'inf'
    },
    {
        id: 1059,
        name: 'M2HB 12,7MM',
        descriptor: 'Descriptor_Unit_HMGteam_M2HB_FR',
        category: 'inf'
    },
    {
        id: 1060,
        name: 'PARA. M2HB 12,7MM',
        descriptor: 'Descriptor_Unit_HMGteam_M2HB_para_FR',
        category: 'inf'
    },
    {
        id: 1062,
        name: 'AB M60 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_M60_AB_US',
        category: 'inf'
    },
    {
        id: 1064,
        name: 'FS-MG-3 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_MG3_FJ_RFA',
        category: 'inf'
    },
    {
        id: 1065,
        name: 'AB MK.19 40MM',
        descriptor: 'Descriptor_Unit_HMGteam_Mk19_AB_US',
        category: 'inf'
    },
    {
        id: 1066,
        name: 'NSV 12,7MM',
        descriptor: 'Descriptor_Unit_HMGteam_NSV_DDR',
        category: 'inf'
    },
    {
        id: 1067,
        name: 'NSV 12,7MM',
        descriptor: 'Descriptor_Unit_HMGteam_NSV_SOV',
        category: 'inf'
    },
    {
        id: 1068,
        name: 'FS-PKM 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_PKM_FJ_DDR',
        category: 'inf'
    },
    {
        id: 1069,
        name: 'DESANT. PKM 7,62MM',
        descriptor: 'Descriptor_Unit_HMGteam_PKM_VDV_SOV',
        category: 'inf'
    },
    {
        id: 1070,
        name: 'LEOPARD 2A4',
        descriptor: 'Descriptor_Unit_Leopard_2A4_RFA',
        category: 'tank'
    },
    {
        id: 1071,
        name: 'MISTRAL',
        descriptor: 'Descriptor_Unit_MANPAD_Mistral_FR',
        category: 'aa'
    },
    {
        id: 1072,
        name: 'MO-120-RT61',
        descriptor: 'Descriptor_Unit_Mortier_MORT61_120mm_FR',
        category: 'art'
    },
    {
        id: 1073,
        name: 'RESERVISTES',
        descriptor: 'Descriptor_Unit_Reserviste_FR',
        category: 'inf'
    },
    {
        id: 1074,
        name: 'GREN.-VOLTIGEURS (APILAS)',
        descriptor: 'Descriptor_Unit_Rifles_APILAS_FR',
        category: 'inf'
    },
    {
        id: 1075,
        name: 'ROLAND 3',
        descriptor: 'Descriptor_Unit_Roland_3_FR',
        category: 'aa'
    },
    {
        id: 1076,
        name: 'CMDT SAPEURS',
        descriptor: 'Descriptor_Unit_Sapeurs_CMD_FR',
        category: 'inf'
    },
    {
        id: 1077,
        name: 'SAPEURS',
        descriptor: 'Descriptor_Unit_Sapeurs_FR',
        category: 'inf'
    },
    {
        id: 1078,
        name: 'SAPEURS (FLAM.)',
        descriptor: 'Descriptor_Unit_Sapeurs_Flam_FR',
        category: 'inf'
    },
    {
        id: 1079,
        name: 'ECLAIREURS',
        descriptor: 'Descriptor_Unit_Scout_FR',
        category: 'rec'
    },
    {
        id: 1080,
        name: 'TRM-2000 TARASQUE',
        descriptor: 'Descriptor_Unit_TRM_2000_20mm_FR',
        category: 'aa'
    },
    {
        id: 1081,
        name: 'TRM-2000 LOG.',
        descriptor: 'Descriptor_Unit_TRM_2000_supply_FR',
        category: 'log'
    },
    {
        id: 1082,
        name: 'VAB PC',
        descriptor: 'Descriptor_Unit_VAB_CMD_FR',
        category: 'log'
    },
    {
        id: 1083,
        name: 'VAB PM-81',
        descriptor: 'Descriptor_Unit_VAB_Mortar_81_FR',
        category: 'art'
    },
    {
        id: 1084,
        name: 'VAB T20/13',
        descriptor: 'Descriptor_Unit_VAB_T20_FR',
        category: 'trans'
    },
    {
        id: 1085,
        name: 'VLRA .50',
        descriptor: 'Descriptor_Unit_VLRA_HMG_FR',
        category: 'trans'
    },
    {
        id: 1086,
        name: 'P4 PC',
        descriptor: 'Descriptor_Unit_VLTT_P4_PC_FR',
        category: 'log'
    },
    {
        id: 1087,
        name: 'ALOUETTE III',
        descriptor: 'Descriptor_Unit_Alouette_III_reco_FR',
        category: 'rec'
    },
    {
        id: 1088,
        name: 'JAGUAR [HE]',
        descriptor: 'Descriptor_Unit_Jaguar_HE_FR',
        category: 'air'
    },
    {
        id: 1089,
        name: 'JAGUAR [SEAD]',
        descriptor: 'Descriptor_Unit_Jaguar_SEAD_FR',
        category: 'air'
    },
    {
        id: 1090,
        name: 'MIRAGE 5 F [NPLM]',
        descriptor: 'Descriptor_Unit_Mirage_5_F_nplm_FR',
        category: 'air'
    },
    {
        id: 1091,
        name: 'BEDFORD MJ',
        descriptor: 'Descriptor_Unit_Bedford_MJ_4t_trans_UK',
        category: 'trans'
    },
    {
        id: 1092,
        name: 'CHALLENGER MK.2',
        descriptor: 'Descriptor_Unit_Challenger_1_Mk1_CMD_UK',
        category: 'tank'
    },
    {
        id: 1093,
        name: 'JAVELIN LML',
        descriptor: 'Descriptor_Unit_DCA_Javelin_LML_UK',
        category: 'aa'
    },
    {
        id: 1094,
        name: 'ASSAULT PIONIERS (CARL. G)',
        descriptor: 'Descriptor_Unit_Engineers_AT_UK',
        category: 'inf'
    },
    {
        id: 1095,
        name: 'ASSAULT PIONIERS LDR.',
        descriptor: 'Descriptor_Unit_Engineers_CMD_UK',
        category: 'inf'
    },
    {
        id: 1096,
        name: 'ASSAULT PIONIERS',
        descriptor: 'Descriptor_Unit_Engineers_UK',
        category: 'inf'
    },
    {
        id: 1097,
        name: 'FV120 SPARTAN MCT',
        descriptor: 'Descriptor_Unit_FV120_Spartan_MCT_UK',
        category: 'trans'
    },
    {
        id: 1098,
        name: 'CENTURION MK.5 AVRE',
        descriptor: 'Descriptor_Unit_FV4003_Centurion_AVRE_UK',
        category: 'tank'
    },
    {
        id: 1099,
        name: 'CHIEFTAIN MK. 11 CMD',
        descriptor: 'Descriptor_Unit_FV4201_Chieftain_Mk11_CMD_UK',
        category: 'tank'
    },
    {
        id: 1100,
        name: 'CHIEFTAIN MK. 11',
        descriptor: 'Descriptor_Unit_FV4201_Chieftain_Mk11_UK',
        category: 'tank'
    },
    {
        id: 1101,
        name: 'CHIEFTAIN MK. 9',
        descriptor: 'Descriptor_Unit_FV4201_Chieftain_Mk9_UK',
        category: 'tank'
    },
    {
        id: 1102,
        name: 'FV432 COMMAND',
        descriptor: 'Descriptor_Unit_FV432_CMD_UK',
        category: 'log'
    },
    {
        id: 1103,
        name: 'FV438 SWINGFIRE',
        descriptor: 'Descriptor_Unit_FV438_Swingfire_UK',
        category: 'tank'
    },
    {
        id: 1104,
        name: 'GUN GROUP',
        descriptor: 'Descriptor_Unit_Gun_Group_UK',
        category: 'inf'
    },
    {
        id: 1105,
        name: 'SAS PATROL',
        descriptor: 'Descriptor_Unit_LRRP_UK',
        category: 'rec'
    },
    {
        id: 1106,
        name: 'ROVER CP',
        descriptor: 'Descriptor_Unit_LandRover_CMD_UK',
        category: 'log'
    },
    {
        id: 1107,
        name: 'ROVER',
        descriptor: 'Descriptor_Unit_LandRover_UK',
        category: 'trans'
    },
    {
        id: 1108,
        name: 'JAVELIN',
        descriptor: 'Descriptor_Unit_MANPAD_Javelin_UK',
        category: 'aa'
    },
    {
        id: 1109,
        name: 'FV510 WARRIOR MILAN',
        descriptor: 'Descriptor_Unit_MCV_80_Warrior_MILAN_UK',
        category: 'trans'
    },
    {
        id: 1110,
        name: 'RIFLES',
        descriptor: 'Descriptor_Unit_Rifles_AT_UK',
        category: 'inf'
    },
    {
        id: 1111,
        name: 'RIFLES LDR.',
        descriptor: 'Descriptor_Unit_Rifles_CMD_UK',
        category: 'inf'
    },
    {
        id: 1112,
        name: 'SCOUTS (LAW-80)',
        descriptor: 'Descriptor_Unit_Scout_AT_UK',
        category: 'rec'
    },
    {
        id: 1113,
        name: 'SCOUTS',
        descriptor: 'Descriptor_Unit_Scout_UK',
        category: 'rec'
    },
    {
        id: 1115,
        name: 'VBL MILAN',
        descriptor: 'Descriptor_Unit_VBL_MILAN_FR',
        category: 'rec'
    },
    {
        id: 1116,
        name: 'VBL RECO',
        descriptor: 'Descriptor_Unit_VBL_Reco_FR',
        category: 'rec'
    },
    {
        id: 1117,
        name: 'CHINOOK HC.1 SUPPLY',
        descriptor: 'Descriptor_Unit_CH47D_Chinook_supply_UK',
        category: 'log'
    },
    {
        id: 1118,
        name: 'GAZELLE AH.1 [RKT]',
        descriptor: 'Descriptor_Unit_Gazelle_SNEB_UK',
        category: 'hel'
    },
    {
        id: 1119,
        name: 'GAZELLE LBH.1',
        descriptor: 'Descriptor_Unit_Gazelle_trans_UK',
        category: 'trans'
    },
    {
        id: 1120,
        name: 'LYNX AH.1 HELARM',
        descriptor: 'Descriptor_Unit_Lynx_AH_Mk1_TOW_UK',
        category: 'hel'
    },
    {
        id: 1121,
        name: 'LYNX AH.7 HELARM',
        descriptor: 'Descriptor_Unit_Lynx_AH_Mk7_I_TOW_UK',
        category: 'hel'
    },
    {
        id: 1122,
        name: 'HARRIER GR.3 [CLU]',
        descriptor: 'Descriptor_Unit_Harrier_CLU_UK',
        category: 'air'
    },
    {
        id: 1123,
        name: 'HARRIER GR.3 [HE2]',
        descriptor: 'Descriptor_Unit_Harrier_HE2_UK',
        category: 'air'
    },
    {
        id: 1124,
        name: 'JAGUAR GR.1A [HE2]',
        descriptor: 'Descriptor_Unit_Jaguar_HE2_UK',
        category: 'air'
    },
    {
        id: 1125,
        name: 'JAGUAR GR.1A [RKT]',
        descriptor: 'Descriptor_Unit_Jaguar_RKT_UK',
        category: 'air'
    },
    {
        id: 1126,
        name: 'JAGUAR [ATGM]',
        descriptor: 'Descriptor_Unit_Jaguar_ATGM_FR',
        category: 'air'
    },
    {
        id: 1127,
        name: 'TERRIERS AT GROUP',
        descriptor: 'Descriptor_Unit_AT_Group_TA_UK',
        category: 'inf'
    },
    {
        id: 1128,
        name: 'AIRMOBILE LDR.',
        descriptor: 'Descriptor_Unit_Airmobile_CMD_UK',
        category: 'inf'
    },
    {
        id: 1129,
        name: 'AIRMOBILE',
        descriptor: 'Descriptor_Unit_Airmobile_MILAN_UK',
        category: 'inf'
    },
    {
        id: 1130,
        name: 'AIRMOBILE GUN GROUP',
        descriptor: 'Descriptor_Unit_Airmobile_UK',
        category: 'inf'
    },
    {
        id: 1131,
        name: 'RAPIER',
        descriptor: 'Descriptor_Unit_DCA_Rapier_UK',
        category: 'aa'
    },
    {
        id: 1132,
        name: 'TERRIERS PIONIERS',
        descriptor: 'Descriptor_Unit_Engineers_TA_UK',
        category: 'inf'
    },
    {
        id: 1136,
        name: 'TERRIERS GUN GROUP',
        descriptor: 'Descriptor_Unit_Gun_Group_TA_UK',
        category: 'inf'
    },
    {
        id: 1137,
        name: 'ROVER MILAN',
        descriptor: 'Descriptor_Unit_LandRover_MILAN_UK',
        category: 'tank'
    },
    {
        id: 1138,
        name: 'L6 WOMBAT',
        descriptor: 'Descriptor_Unit_RCL_L6_Wombat_UK',
        category: 'inf'
    },
    {
        id: 1140,
        name: 'TERRIERS SCOUTS',
        descriptor: 'Descriptor_Unit_Scout_TA_UK',
        category: 'rec'
    },
    {
        id: 1141,
        name: 'TERRIERS LDR.',
        descriptor: 'Descriptor_Unit_Territorial_CMD_UK',
        category: 'inf'
    },
    {
        id: 1142,
        name: 'PUMA PC',
        descriptor: 'Descriptor_Unit_Puma_PC_FR',
        category: 'log'
    },
    {
        id: 1143,
        name: 'PUMA PIRATE',
        descriptor: 'Descriptor_Unit_Puma_Pirate_FR',
        category: 'hel'
    },
    {
        id: 1144,
        name: 'PHANTOM F.3 [AA]',
        descriptor: 'Descriptor_Unit_F4_Phantom_AA_F3_UK',
        category: 'air'
    },
    {
        id: 1145,
        name: 'HARRIER GR.3 [HE1]',
        descriptor: 'Descriptor_Unit_Harrier_HE1_UK',
        category: 'air'
    },
    {
        id: 1146,
        name: 'HARRIER GR.3 [RKT1]',
        descriptor: 'Descriptor_Unit_Harrier_RKT1_UK',
        category: 'air'
    },
    {
        id: 1147,
        name: 'JAGUAR GR.1A [CLU]',
        descriptor: 'Descriptor_Unit_Jaguar_CLU_UK',
        category: 'air'
    },
    {
        id: 1148,
        name: 'JAGUAR GR.1A [HE1]',
        descriptor: 'Descriptor_Unit_Jaguar_HE1_UK',
        category: 'air'
    },
    {
        id: 1149,
        name: 'JAGUAR [RKT]',
        descriptor: 'Descriptor_Unit_Jaguar_RKT_FR',
        category: 'air'
    },
    {
        id: 1150,
        name: 'JAGUAR [SEAD2]',
        descriptor: 'Descriptor_Unit_Jaguar_SEAD2_FR',
        category: 'air'
    },
    {
        id: 1151,
        name: 'JAGUAR [CLUS]',
        descriptor: 'Descriptor_Unit_Jaguar_clu_FR',
        category: 'air'
    },
    {
        id: 1152,
        name: 'JAGUAR [NPLM]',
        descriptor: 'Descriptor_Unit_Jaguar_nplm_FR',
        category: 'air'
    },
    {
        id: 1153,
        name: 'AIRMOBILE SCOUTS',
        descriptor: 'Descriptor_Unit_Scout_Airmobile_UK',
        category: 'rec'
    },
    {
        id: 1154,
        name: 'BLOWPIPE',
        descriptor: 'Descriptor_Unit_MANPAD_Blowpipe_UK',
        category: 'aa'
    },
    {
        id: 1155,
        name: '53T2 PARAS 20MM',
        descriptor: 'Descriptor_Unit_DCA_53T2_20mm_Para_FR',
        category: 'aa'
    },
    {
        id: 1156,
        name: 'GROUPE ANTICHAR PARAS',
        descriptor: 'Descriptor_Unit_Groupe_AT_para_FR',
        category: 'inf'
    },
    {
        id: 1157,
        name: 'HM2A1 105MM',
        descriptor: 'Descriptor_Unit_Howz_M101_105mm_FR',
        category: 'art'
    },
    {
        id: 1158,
        name: 'MISTRAL PARAS',
        descriptor: 'Descriptor_Unit_MANPAD_Mistral_para_FR',
        category: 'aa'
    },
    {
        id: 1159,
        name: 'MO-120-RT61 PARAS',
        descriptor: 'Descriptor_Unit_Mortier_MORT61_120mm_para_FR',
        category: 'art'
    },
    {
        id: 1162,
        name: 'CMDT PARAS',
        descriptor: 'Descriptor_Unit_Para_CMD_FR',
        category: 'inf'
    },
    {
        id: 1163,
        name: 'CHASSEURS PARAS',
        descriptor: 'Descriptor_Unit_Para_FR',
        category: 'inf'
    },
    {
        id: 1164,
        name: 'LEGIONNAIRES PARAS',
        descriptor: 'Descriptor_Unit_Para_Legion_FR',
        category: 'inf'
    },
    {
        id: 1165,
        name: 'CMDT SAPEURS PARAS',
        descriptor: 'Descriptor_Unit_Para_Sapeurs_CMD_FR',
        category: 'inf'
    },
    {
        id: 1166,
        name: 'SAPEURS PARAS',
        descriptor: 'Descriptor_Unit_Para_Sapeurs_FR',
        category: 'inf'
    },
    {
        id: 1167,
        name: 'SAPEURS PARAS (FLAM.)',
        descriptor: 'Descriptor_Unit_Para_Sapeurs_Flam_FR',
        category: 'inf'
    },
    {
        id: 1168,
        name: 'PARAS SAS',
        descriptor: 'Descriptor_Unit_SAS_FR',
        category: 'rec'
    },
    {
        id: 1169,
        name: 'ECLAIREURS PARAS',
        descriptor: 'Descriptor_Unit_Scout_para_FR',
        category: 'rec'
    },
    {
        id: 1170,
        name: 'SPETSNAZ (O.P.)',
        descriptor: 'Descriptor_Unit_Spetsnaz_FireSupport_SOV',
        category: 'inf'
    },
    {
        id: 1171,
        name: 'VBL PC',
        descriptor: 'Descriptor_Unit_VBL_PC_FR',
        category: 'log'
    },
    {
        id: 1172,
        name: 'VLRA 20MM',
        descriptor: 'Descriptor_Unit_VLRA_20mm_FR',
        category: 'aa'
    },
    {
        id: 1173,
        name: 'VLRA MILAN',
        descriptor: 'Descriptor_Unit_VLRA_MILAN_FR',
        category: 'tank'
    },
    {
        id: 1174,
        name: 'VLRA PAMELA',
        descriptor: 'Descriptor_Unit_VLRA_Mistral_FR',
        category: 'aa'
    },
    {
        id: 1175,
        name: 'VLRA PMB',
        descriptor: 'Descriptor_Unit_VLRA_Mortier81_FR',
        category: 'art'
    },
    {
        id: 1176,
        name: 'VLRA LOG.',
        descriptor: 'Descriptor_Unit_VLRA_supply_FR',
        category: 'log'
    },
    {
        id: 1177,
        name: 'VLRA',
        descriptor: 'Descriptor_Unit_VLRA_trans_FR',
        category: 'trans'
    },
    {
        id: 1178,
        name: 'ZSU-23-4M2 AFGHANSKII',
        descriptor: 'Descriptor_Unit_ZSU_23_Shilka_Afghan_SOV',
        category: 'aa'
    },
    {
        id: 1179,
        name: 'MI-8MT [UPK]',
        descriptor: 'Descriptor_Unit_Mi_8TV_UPK_DDR',
        category: 'hel'
    },
    {
        id: 1180,
        name: 'Mi-8T',
        descriptor: 'Descriptor_Unit_Mi_8TV_non_arme_SOV',
        category: 'trans'
    },
    {
        id: 1181,
        name: 'Mi-8T',
        descriptor: 'Descriptor_Unit_Mi_8T_non_arme_DDR',
        category: 'trans'
    },
    {
        id: 1182,
        name: 'SAXON CP',
        descriptor: 'Descriptor_Unit_Saxon_CMD_UK',
        category: 'log'
    },
    {
        id: 1183,
        name: 'F-16CG [LGB]',
        descriptor: 'Descriptor_Unit_F16C_LGB_US',
        category: 'air'
    },
    {
        id: 1184,
        name: 'MIG-27K [LGB]',
        descriptor: 'Descriptor_Unit_MiG_27K_LGB_SOV',
        category: 'air'
    },
    {
        id: 1185,
        name: 'ROVER MILAN PARA',
        descriptor: 'Descriptor_Unit_LandRover_MILAN_Para_UK',
        category: 'tank'
    },
    {
        id: 1186,
        name: 'PARAS LDR.',
        descriptor: 'Descriptor_Unit_Paratroopers_CMD_UK',
        category: 'inf'
    },
    {
        id: 1187,
        name: 'TERRIERS PARAS (CARLG)',
        descriptor: 'Descriptor_Unit_Paratroopers_MILAN_TA_UK',
        category: 'inf'
    },
    {
        id: 1188,
        name: 'TERRIERS PARAS',
        descriptor: 'Descriptor_Unit_Paratroopers_TA_UK',
        category: 'inf'
    },
    {
        id: 1189,
        name: 'RAPIER FSA',
        descriptor: 'Descriptor_Unit_DCA_Rapier_FSA_UK',
        category: 'aa'
    },

    {
        id: 1192,
        name: 'AMX-30 B CMDT',
        descriptor: 'Descriptor_Unit_AMX_30_B_CMD_FR',
        category: 'tank'
    },
    {
        id: 1193,
        name: 'PAK ZIS-2 57MM',
        descriptor: 'Descriptor_Unit_AT_ZiS2_57mm_DDR',
        category: 'tank'
    },
    {
        id: 1194,
        name: '1V119 REOSTAT',
        descriptor: 'Descriptor_Unit_BMD_1_Reostat_SOV',
        category: 'rec'
    },
    {
        id: 1195,
        name: '53T2 20MM',
        descriptor: 'Descriptor_Unit_DCA_53T2_20mm_FR',
        category: 'aa'
    },
    {
        id: 1196,
        name: 'PIONIER (AGI)',
        descriptor: 'Descriptor_Unit_Engineers_AGI_DDR',
        category: 'inf'
    },
    {
        id: 1197,
        name: 'CHIEFTAIN MK. 10 CMD',
        descriptor: 'Descriptor_Unit_FV4201_Chieftain_CMD_UK',
        category: 'tank'
    },
    {
        id: 1198,
        name: 'MOT. GRENZER',
        descriptor: 'Descriptor_Unit_Grenzer_Mot_DDR',
        category: 'rec'
    },
    {
        id: 1199,
        name: 'M198 155MM',
        descriptor: 'Descriptor_Unit_Howz_M198_155mm_US',
        category: 'art'
    },
    {
        id: 1200,
        name: 'ZIS-3 76,2MM',
        descriptor: 'Descriptor_Unit_Howz_ZiS3_76mm_DDR',
        category: 'art'
    },
    {
        id: 1201,
        name: 'ROVER WOMBAT',
        descriptor: 'Descriptor_Unit_LandRover_WOMBAT_UK',
        category: 'inf'
    },
    {
        id: 1202,
        name: 'LIGHT RIFLES LDR.',
        descriptor: 'Descriptor_Unit_LightRifles_CMD_US',
        category: 'inf'
    },
    {
        id: 1203,
        name: 'SPW PSH',
        descriptor: 'Descriptor_Unit_PSzH_IV_DDR',
        category: 'trans'
    },
    {
        id: 1204,
        name: 'R.A.F. RIFLES',
        descriptor: 'Descriptor_Unit_Rifles_RAF_UK',
        category: 'inf'
    },
    {
        id: 1205,
        name: 'Mi-8MTV [RKT]',
        descriptor: 'Descriptor_Unit_Mi_8MTV_SOV',
        category: 'trans'
    },
    {
        id: 1207,
        name: 'MIRAGE IV [SEAD]',
        descriptor: 'Descriptor_Unit_Mirage_IV_SEAD_FR',
        category: 'air'
    },
    {
        id: 1208,
        name: 'SU-22M4 [UPK]',
        descriptor: 'Descriptor_Unit_Su_22_UPK_DDR',
        category: 'air'
    },
    {
        id: 1209,
        name: 'SPW FUG',
        descriptor: 'Descriptor_Unit_OT_65_DDR',
        category: 'trans'
    },
    {
        id: 1210,
        name: 'FR. POLIZEI-RESERVE',
        descriptor: 'Descriptor_Unit_Reserve_Polizei_RFA',
        category: 'inf'
    },
    {
        id: 1211,
        name: 'M2A2 BRADLEY CP',
        descriptor: 'Descriptor_Unit_M2A2_Bradley_Leader_US',
        category: 'log'
    },
    {
        id: 1213,
        name: 'FIRE TEAM LDR.',
        descriptor: 'Descriptor_Unit_Rifles_half_CMD_US',
        category: 'inf'
    },
    {
        id: 1214,
        name: 'SONDERWAGEN 4',
        descriptor: 'Descriptor_Unit_Sonderwagen_4_RFA',
        category: 'trans'
    },
    {
        id: 1215,
        name: 'SONDERWAGEN 4 AUFKL.',
        descriptor: 'Descriptor_Unit_Sonderwagen_4_recon_RFA',
        category: 'rec'
    },
    {
        id: 1216,
        name: 'MIG-29 [AA2]',
        descriptor: 'Descriptor_Unit_MiG_29_AA2_SOV',
        category: 'air'
    },
    {
        id: 1217,
        name: 'FLA-RAK. IGLA',
        descriptor: 'Descriptor_Unit_MANPAD_Igla_DDR',
        category: 'aa'
    },
    {
        id: 1387,
        name: '2A65 MSTA-B 152MM',
        descriptor: 'Descriptor_Unit_Howz_MstaB_150mm_SOV',
        category: 'art'
    },
    {
        id: 1405,
        name: 'DRAGON-PARAS',
        descriptor: 'Descriptor_Unit_LRRP_FR',
        category: 'rec'
    },
    {
        id: 1471,
        name: 'MILITARSTREIFEN',
        descriptor: 'Descriptor_Unit_MP_DDR',
        category: 'inf'
    },
    {
        id: 1474,
        name: 'KOMENDATURA',
        descriptor: 'Descriptor_Unit_MP_SOV',
        category: 'inf'
    },
    {
        id: 1596,
        name: 'FERN. SCHARFSCHUTZE',
        descriptor: 'Descriptor_Unit_Sniper_Fern_RFA',
        category: 'rec'
    },
    {
        id: 1578,
        name: 'SNIPER SAS',
        descriptor: 'Descriptor_Unit_SAS_Sniper_FR',
        category: 'rec'
    },
    {
        id: 1593,
        name: 'HSF',
        descriptor: 'Descriptor_Unit_Security_UK',
        category: 'inf'
    },
    {
        id: 1595,
        name: 'FJ SCHARFSCHUTZE',
        descriptor: 'Descriptor_Unit_Sniper_FJ_DDR',
        category: 'rec'
    },
    {
        id: 1598,
        name: 'SNAYPERI SPETSNAZ',
        descriptor: 'Descriptor_Unit_Sniper_Spetsnaz_SOV',
        category: 'rec'
    },
    {
        id: 1599,
        name: 'SNIPER',
        descriptor: 'Descriptor_Unit_Sniper_UK',
        category: 'rec'
    },
    {
        id: 1600,
        name: 'SNIPER',
        descriptor: 'Descriptor_Unit_Sniper_US',
        category: 'rec'
    },
    {
        id: 1644,
        name: 'UAZ-469 KOMENDATURA',
        descriptor: 'Descriptor_Unit_UAZ_469_MP_SOV',
        category: 'trans'
    },
    {
        id: 1670,
        name: 'GAZELLE AH.1 CP',
        descriptor: 'Descriptor_Unit_Gazelle_CMD_UK',
        category: 'log'
    },
    {
        id: 1732,
        name: 'SKLAD SNABZHENIYA',
        descriptor: 'Descriptor_Unit_FOB_SOV',
        category: 'log'
    },
    {
        id: 1733,
        name: 'FIELD SUPPLY POINT',
        descriptor: 'Descriptor_Unit_FOB_US',
        category: 'log'
    },
    {
        id: 1753,
        name: 'FELDDEPOT',
        descriptor: 'Descriptor_Unit_FOB_DDR',
        category: 'log'
    },
    {
        id: 1754,
        name: 'DEPOT DE MUNITION',
        descriptor: 'Descriptor_Unit_FOB_FR',
        category: 'log'
    },
    {
        id: 1755,
        name: 'FELDDEPOT',
        descriptor: 'Descriptor_Unit_FOB_RFA',
        category: 'log'
    },
    {
        id: 1757,
        name: 'FIELD SUPPLY POINT',
        descriptor: 'Descriptor_Unit_FOB_UK',
        category: 'log'
    },
    {
        id: 1847,
        name: 'AML-60 GENDARM.',
        descriptor: 'Descriptor_Unit_AML_60_Gendarmerie_FR',
        category: 'rec'
    },
    {
        id: 1921,
        name: 'GRENZER (FLAM)',
        descriptor: 'Descriptor_Unit_Grenzer_Flam_DDR',
        category: 'rec'
    },
    {
        id: 1922,
        name: 'BERLIN LIGHT RIFLES (LAW)',
        descriptor: 'Descriptor_Unit_LightRifles_LAW_US',
        category: 'inf'
    },
    {
        id: 1923,
        name: 'RESERVISTEN',
        descriptor: 'Descriptor_Unit_Reserve_DDR',
        category: 'inf'
    },
    {
        id: 1924,
        name: 'SEK',
        descriptor: 'Descriptor_Unit_SEK_RFA',
        category: 'rec'
    },
    {
        id: 1925,
        name: 'M1A1 ACAV',
        descriptor: 'Descriptor_Unit_M1A1_Abrams_reco_US',
        category: 'rec'
    },
    {
        id: 1926,
        name: 'DISMOUNT. TROOPERS',
        descriptor: 'Descriptor_Unit_Rifles_Cavalry_US',
        category: 'inf'
    },
    {
        id: 1932,
        name: '2B9 VASILEK',
        descriptor: 'Descriptor_Unit_Mortier_2B9_Vasilek_nonPara_SOV',
        category: 'art'
    },
    {
        id: 1938,
        name: 'SICHERUNGS',
        descriptor: 'Descriptor_Unit_Security_DDR',
        category: 'inf'
    },
    {
        id: 1939,
        name: 'AFGANTSY',
        descriptor: 'Descriptor_Unit_VDV_Afgantsy_SOV',
        category: 'inf'
    },
    {
        id: 1953,
        name: 'AH-1F C-NITE',
        descriptor: 'Descriptor_Unit_AH1F_CNITE_US',
        category: 'hel'
    },
    {
        id: 1954,
        name: 'URAL-4320',
        descriptor: 'Descriptor_Unit_Ural_4320_trans_SOV',
        category: 'trans'
    },
    {
        id: 1955,
        name: 'SU-24M [CLU2]',
        descriptor: 'Descriptor_Unit_Su_24M_clu2_SOV',
        category: 'air'
    },
    {
        id: 1956,
        name: 'SU-24M [LGB]',
        descriptor: 'Descriptor_Unit_Su_24M_LGB_SOV',
        category: 'air'
    }
]
