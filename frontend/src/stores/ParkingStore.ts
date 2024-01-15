import type { Parking } from "@/model/Parking";
import { defineStore } from "pinia";
import router from "@/router";

export interface ParkingStoreState {
  parking?: Parking;
}

export const useParkingStore = defineStore({
  id: "user",
  state: (): ParkingStoreState => ({
    parking: undefined
  }),
  actions: {
    setParking: function(parking: Parking) {
      localStorage.setItem("parking", JSON.stringify(parking));
      this.parking = parking;
    },
    getParking: function() {
      if (!this.parking) {
        const parking = localStorage.getItem("parking");
        if (parking) {
          this.parking = JSON.parse(parking);
        }
      }
      return this.parking;
    }
  },
});