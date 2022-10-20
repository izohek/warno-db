"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divisions = void 0;
/// All Division Descriptors
exports.Divisions = {
    RDA_7_Panzer: 'Descriptor_Deck_Division_RDA_7_Panzer_multi',
    RFA_5_Panzer: 'Descriptor_Deck_Division_RFA_5_Panzer_multi',
    SOV_79_Gds_Tank: 'Descriptor_Deck_Division_SOV_79_Gds_Tank_multi',
    US_3rd_Arm: 'Descriptor_Deck_Division_US_3rd_Arm_multi',
    US_8th_Inf: 'Descriptor_Deck_Division_US_8th_Inf_multi',
    SOV_39_Gds_Rifle: 'Descriptor_Deck_Division_SOV_39_Gds_Rifle_multi',
    RDA_4_MSD: 'Descriptor_Deck_Division_RDA_4_MSD_multi',
    RFA_2_PzGrenadier: 'Descriptor_Deck_Division_RFA_2_PzGrenadier_multi',
    SOV_35_AirAslt_Brig: 'Descriptor_Deck_Division_SOV_35_AirAslt_Brig_multi',
    US_82nd_Airborne: 'Descriptor_Deck_Division_US_82nd_Airborne_multi',
    FR_11e_Para_multi: 'Descriptor_Deck_Division_FR_11e_Para_multi',
    FR_5e_Blindee: 'Descriptor_Deck_Division_FR_5e_Blindee_multi',
    RDA_KdA_Bezirk_Erfurt: 'Descriptor_Deck_Division_RDA_KdA_Bezirk_Erfurt_multi',
    RFA_TerrKdo_Sud: 'Descriptor_Deck_Division_RFA_TerrKdo_Sud_multi',
    UK_1st_Armoured: 'Descriptor_Deck_Division_UK_1st_Armoured_multi',
    UK_2nd_Infantry: 'Descriptor_Deck_Division_UK_2nd_Infantry_multi'
};
/// Warno Division data
const AllDivisions = [
    {
        name: '7th',
        country: 'SOV',
        id: 9,
        alliance: 'axis',
        descriptor: exports.Divisions.RDA_7_Panzer
    },
    {
        name: '5th',
        country: 'RFA',
        id: 10,
        alliance: 'allies',
        descriptor: exports.Divisions.RFA_5_Panzer
    },
    {
        name: '79th',
        country: 'SOV',
        id: 11,
        alliance: 'axis',
        descriptor: exports.Divisions.SOV_79_Gds_Tank
    },
    {
        name: '3rd',
        country: 'USA',
        id: 13,
        alliance: 'allies',
        descriptor: exports.Divisions.US_3rd_Arm
    },
    {
        name: '8th',
        country: 'USA',
        id: 14,
        alliance: 'allies',
        descriptor: exports.Divisions.US_8th_Inf
    },
    {
        name: '39th',
        country: 'SOV',
        id: 17,
        alliance: 'axis',
        descriptor: exports.Divisions.SOV_39_Gds_Rifle
    },
    {
        name: '4th',
        country: 'DDR',
        id: 19,
        alliance: 'axis',
        descriptor: exports.Divisions.RDA_4_MSD
    },
    {
        name: '2nd',
        country: 'RFA',
        id: 20,
        alliance: 'allies',
        descriptor: exports.Divisions.RFA_2_PzGrenadier
    },
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_39GMRD_solo, 21),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_57GMRD_solo, 22),
    {
        name: '35th',
        country: 'SOV',
        id: 23,
        alliance: 'axis',
        descriptor: exports.Divisions.SOV_35_AirAslt_Brig
    },
    {
        name: '82nd',
        country: 'USA',
        id: 24,
        alliance: 'allies',
        descriptor: exports.Divisions.US_82nd_Airborne
    },
    {
        name: '5e',
        country: 'FR',
        id: 26,
        alliance: 'allies',
        descriptor: exports.Divisions.FR_5e_Blindee
    },
    {
        name: 'KDA',
        country: 'DDR',
        id: 27,
        alliance: 'axis',
        descriptor: exports.Divisions.RDA_KdA_Bezirk_Erfurt
    },
    {
        name: 'TKS',
        country: 'RFA',
        id: 28,
        alliance: 'allies',
        descriptor: exports.Divisions.RFA_TerrKdo_Sud
    },
    {
        name: '1st',
        country: 'UK',
        id: 29,
        alliance: 'allies',
        descriptor: exports.Divisions.UK_1st_Armoured
    }
    // TODO: SOLO - (Descriptor_Deck_Division_RDA_11MSD_solo, 62),
    // TODO: SOLO - (Descriptor_Deck_Division_RDA_4MSD_solo, 63),
    // TODO: SOLO - (Descriptor_Deck_Division_RDA_7PzD_solo, 64),
    // TODO: SOLO - (Descriptor_Deck_Division_RDA_MBDIII_solo, 65),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_11GTkD_solo, 66),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_1GTA_solo, 67),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_20GMRD_solo, 68),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_27GMRD_solo, 69),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_79GTkD_solo, 70),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_8GA_solo, 71),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_9TkD_solo, 72),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_WGF_solo, 73),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_308ArtBr_solo, 74),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_35GvDSHB_solo, 75),
    // TODO: SOLO - (Descriptor_Deck_Division_SOV_390ArtBr_solo, 76),
];
