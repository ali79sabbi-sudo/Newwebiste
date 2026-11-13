/**
 * Stock photo credits. Unsplash and Pexels licences allow free commercial use without attribution,
 * but we credit them anyway. TODO(owner): replace stock images with real spa photos.
 * TODO(owner): Unsplash photographer names were not available from the CDN. Open each source URL and add the name.
 */
export type Credit = { file: string; source: "Unsplash" | "Pexels"; url: string; photographer: string };

const U = (file: string, id: string): Credit => ({
  file,
  source: "Unsplash",
  url: `https://images.unsplash.com/photo-${id}`,
  photographer: "Unsplash contributor",
});
const P = (file: string, id: string): Credit => ({
  file,
  source: "Pexels",
  url: `https://www.pexels.com/photo/${id}/`,
  photographer: "Pexels contributor",
});

export const IMAGE_CREDITS: Credit[] = [
  U("hero-oil-dark", "1515377905703-c4788e51af15"),
  U("hot-stones", "1600334129128-685c5582fd35"),
  U("hot-stones-alt", "1600334089648-b0d9d3028eb2"),
  P("swedish-face-orchids", "3757657"),
  P("back-massage-calm", "3757952"),
  P("massage-relax-window", "3757942"),
  P("thai-shoulder", "3764568"),
  U("balinese-overhead", "1596178060671-7a80dc8059ea"),
  P("deep-tissue", "3865792"),
  P("oil-back-dark", "3997991"),
  P("aroma-lavender", "3865676"),
  P("oil-drop-dark", "3998013"),
  P("amber-bottles", "6621462"),
  P("foot-reflexology", "5240641"),
  P("foot-massage-warm", "5240677"),
  P("foot-care", "6628700"),
  P("facial-towel", "3212164"),
  P("facial-mask", "6663368"),
  U("facial-clay", "1570172619644-dfd03ed5d881"),
  P("body-scrub", "5938567"),
  U("oil-pour", "1544161515-4ab6ce6db874"),
  P("stones-dark", "6187645"),
  U("room-bath", "1507652313519-d4e9174996dd"),
  U("lounge-pool", "1560750588-73207b1ef5b8"),
  U("sauna", "1583416750470-965b2707b355"),
  U("treatment-room", "1595871151608-bc7abd1caca3"),
  U("towels-candle", "1540555700478-4be289fbecef"),
  U("diffuser-candles", "1620733723572-11c53f73a416"),
  U("products-stones", "1612817288484-6f916006741a"),
  U("gua-sha", "1600428877878-1a0fd85beda8"),
  U("hands-massage", "1519823551278-64ac92734fb1"),
  U("oil-skin", "1573461160327-b450ce3d8e7f"),
  P("room-empty-blinds", "6560308"),
  P("room-window-therapy", "6560277"),
  P("room-bright-studio", "6663364"),
  P("room-bright-facial", "6663366"),
  P("room-luxe-suite", "6187650"),
  P("room-sunlit", "6560274"),
  P("therapist-hot-stone", "6187652"),
  P("therapist-foot-male", "5240640"),
  P("therapist-foot-smile", "5240674"),
  P("hot-stone-back-male", "5240639"),
];
