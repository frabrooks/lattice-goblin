
export interface BatteryDatapoint {
    'Period': number;
    'Action': 'NONE' | 'CHARGE' | 'DISCHARGE';
    'State-of-Charge': number;
    'Charged-kwH': number;
    'Discharged-kwH': number;
}

