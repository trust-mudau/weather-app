export function validateCoordinates(lat, lon) {
  if (lat === undefined || String(lat).trim() === "") {
    return { error: "lat must be a number between -90 and 90" };
  }
  if (lon === undefined || String(lon).trim() === "") {
    return { error: "lon must be a number between -180 and 180" };
  }

  const latitude = Number(lat);
  const longitude = Number(lon);

  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) {
    return { error: "lat must be a number between -90 and 90" };
  }
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
    return { error: "lon must be a number between -180 and 180" };
  }

  return { latitude, longitude };
}
