import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, Subject } from "rxjs";
import { BatteryDatapoint } from "../models/battery-status.model";
import { mockData1, mockData2 } from "./battery-status-mock-data";

@Injectable({
    providedIn: 'root'
})
export class BatteryStatusService {
    
    constructor (private httpClient: HttpClient) {}

    // Mock function, replace with call to real endpoint when ready
    public getBatteryStatus(date: string): Observable<BatteryDatapoint[]> {
        const mockAPIResponse: Subject<BatteryDatapoint[]> = new Subject<BatteryDatapoint[]>();
        setTimeout(() => {
            const dateNum = Number(date);
            mockAPIResponse.next(dateNum % 2 != 0 ? mockData1 : mockData2);
        }, Math.floor(Math.random() * (800 - 20 + 1)) + 20); // Rand num. 80~800ms
        return mockAPIResponse;
    }

}
