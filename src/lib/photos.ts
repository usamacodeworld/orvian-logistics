/** Central photo library. To add a picture: drop it in public/photos and add a line here. */
export const photos = {
  nightTruck: { src: "/photos/night-truck.jpg", alt: "Refrigerated trailer on the road at dusk" },
  containers: { src: "/photos/containers.jpg", alt: "Stacked freight containers under a blue sky" },
  loading: { src: "/photos/loading.jpg", alt: "Courier loading a delivery van" },
  vanRoad: { src: "/photos/van-road.jpg", alt: "Delivery van on the motorway" },
  courier: { src: "/photos/courier.jpg", alt: "Courier carrying a parcel" },
  scanner: { src: "/photos/scanner.jpg", alt: "Cold-store operative scanning goods" },
  coldMeat: { src: "/photos/cold-meat.jpg", alt: "Chilled goods racked in a cold store" },
  frozenFruit: { src: "/photos/frozen-fruit.jpg", alt: "Fresh produce preserved in ice" },
  glacier: { src: "/photos/glacier.jpg", alt: "Arctic ice shelf" },
  sea: { src: "/photos/sea.jpg", alt: "Calm polar sea" },
} as const;

export type Photo = { src: string; alt: string };

export const gallery: Photo[] = [
  photos.nightTruck,
  photos.scanner,
  photos.containers,
  photos.coldMeat,
  photos.loading,
  photos.frozenFruit,
  photos.vanRoad,
  photos.courier,
  photos.glacier,
  photos.sea,
];
