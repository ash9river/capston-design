// Initialize and add the map
async function initMap(): Promise<void> {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };

  // Request needed libraries.
  const { Map } = (await google.maps.importLibrary(
    'maps',
  )) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker',
  )) as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  const map = new Map(document.getElementById('map') as HTMLElement, {
    zoom: 4,
    center: position,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map,
    position,
    title: 'Uluru',
  });
}

export default initMap;
