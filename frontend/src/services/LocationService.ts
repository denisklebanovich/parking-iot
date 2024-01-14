import RestService, { URLS } from "@/services/RestService";
import type {
  LocationRequest,
  LocationResponse,
  LocationUpdateRequest,
  SingleLocationResponse
} from "@/model/Location";

export function addLocation(locationRequest: LocationRequest): Promise<LocationResponse> {
  return RestService.ajax(URLS.location, "POST", undefined, locationRequest);
}

export function getLocations(): Promise<LocationResponse[]> {
  return RestService.ajax(URLS.location, "GET");
}

export function getSingleLocation(id: string): Promise<SingleLocationResponse> {
  return RestService.ajax(`${URLS.location}/${id}`, "GET");
}

export function updateLocation(id: string, locationUpdateRequest: LocationUpdateRequest): Promise<LocationResponse> {
  return RestService.ajax(`${URLS.location}/${id}`, "PUT", undefined, locationUpdateRequest);
}

export function deleteLocation(id: string): Promise<LocationResponse> {
  return RestService.ajax(`${URLS.location}/${id}`, "DELETE");
}

export function searchLocation(search: string): Promise<any> {
  return RestService.ajax(`${URLS.search}?name=${search}`, "GET");
}