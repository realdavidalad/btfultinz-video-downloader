// https://m.youtube.com/@junya1gou/shorts

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://m.youtube.com/@junya1gou/shorts", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

var ytInitialData = {
  responseContext: {
    serviceTrackingParams: [
      {
        service: "GFEEDBACK",
        params: [
          {
            key: "route",
            value: "channel.shorts",
          },
          {
            key: "is_owner",
            value: "false",
          },
          {
            key: "is_alc_surface",
            value: "false",
          },
          {
            key: "browse_id",
            value: "UCjp_3PEaOau_nT_3vnqKIvg",
          },
          {
            key: "browse_id_prefix",
            value: "",
          },
          {
            key: "logged_in",
            value: "0",
          },
          {
            key: "e",
            value:
              "9405981,23804281,24004644,24007613,24077241,24166867,24181174,24241378,24290153,24439361,24453989,24566687,24699899,39320593,39325854,39327052,39327561,39329006,39329269,39329667,39329674,39329820,51010235,51020570,51025415,51037342,51037351,51063643,51072748,51091058,51095478,51098299,51115164,51115184,51134507,51141472,51152050,51160338,51176421,51178320,51178333,51178340,51178353,51183909,51204329,51222973,51225397,51227037,51237842,51242448,51256074,51257937,51272458,51285052,51300176,51300241,51303432,51311025,51313109,51313765,51313767,51314158,51324733,51332245,51338524,51340662,51341226,51342857,51343619,51344661,51348208,51349914,51353393,51354083,51354114,51354569,51355912,51356621,51359179,51361830,51362040,51364270,51364289,51365851,51366127,51366423,51366620,51367489,51372971,51375205,51375719,51386541,51389629,51394774,51394779,51397332,51398392,51400151,51404808,51404810,51407629,51407632,51410277,51414985,51417452,51417463,51417476,51417497,51417504,51417521,51421832,51425030,51428417,51428624,51429106,51430311,51432294,51432529,51432560,51433501,51435843,51435879,51435884,51435891,51435907,51435912,51435922,51436141,51437206,51439763,51439874,51440401,51440725,51440857,51441003,51441100,51441710,51442501,51442673,51444283,51447191,51447753,51448140,51448334,51448401,51452420,51452481,51452493,51452785,51454385,51455008,51456413,51456421,51456628,51458176,51458922,51458927,51459424,51460091,51462020,51462839,51463530,51463930,51465955,51466900,51467116,51467524,51467676,51468320,51469820,51470314,51471144,51471783,51471920,51472817,51473810,51475247,51475686,51475961,51476588,51476897,51477496,51477582,51478688,51478763,51478931,51479232,51479480,51479905,51481239,51481591,51481788,51483631,51483864,51483888,51484209,51484221,51484412,51485417,51485420,51486018,51486035,51486471,51486667,51488085,51488475,51488863,51488944,51488946,51489536,51490331,51490707,51491419,51491436,51492252,51492548,51493690,51494027,51495412,51495859,51496733,51496968,51499142,51499150,51499188,51499512,51499558,51499761,51500063,51500336,51502946,51503183,51505436,51507126",
          },
          {
            key: "visitor_data",
            value: "CgtWRWVwMHlKM3dHayjv7e3BBjIKCgJORxIEGgAgUA%3D%3D",
          },
        ],
      },
      {
        service: "GOOGLE_HELP",
        params: [
          {
            key: "browse_id",
            value: "UCjp_3PEaOau_nT_3vnqKIvg",
          },
          {
            key: "browse_id_prefix",
            value: "",
          },
        ],
      },
      {
        service: "CSI",
        params: [
          {
            key: "c",
            value: "WEB",
          },
          {
            key: "cver",
            value: "2.20250530.01.00",
          },
          {
            key: "yt_li",
            value: "0",
          },
          {
            key: "GetChannelPage_rid",
            value: "0xdfd49eaca617365e",
          },
        ],
      },
      {
        service: "GUIDED_HELP",
        params: [
          {
            key: "logged_in",
            value: "0",
          },
        ],
      },
      {
        service: "ECATCHER",
        params: [
          {
            key: "client.version",
            value: "2.20250530",
          },
          {
            key: "client.name",
            value: "WEB",
          },
        ],
      },
    ],
    maxAgeSeconds: 300,
    mainAppWebResponseContext: {
      loggedOut: true,
      trackingParam:
        "kx_fmPxhoPZRb1B_PycFoFDBbkMtvJs3o9cHHsU8IJ14sMwRgkuswmIBwOcCE59TDtslLKPQ-SS",
    },
    webResponseContextExtensionData: {
      ytConfigData: {
        visitorData: "CgtWRWVwMHlKM3dHayjv7e3BBjIKCgJORxIEGgAgUA%3D%3D",
        rootVisualElementType: 3611,
      },
      hasDecorated: true,
    },
  },
  contents: {
    twoColumnBrowseResultsRenderer: {
      tabs: [
        {
          tabRenderer: {
            endpoint: {
              clickTrackingParams: "COwBEPCTARgFIhMI6Krb3NXOjQMVihJzCR3gNS31",
              commandMetadata: {
                webCommandMetadata: {
                  url: "/@junya1gou/featured",
                  webPageType: "WEB_PAGE_TYPE_CHANNEL",
                  rootVe: 3611,
                  apiUrl: "/youtubei/v1/browse",
                },
              },
              browseEndpoint: {
                browseId: "UCjp_3PEaOau_nT_3vnqKIvg",
                params: "EghmZWF0dXJlZPIGBAoCMgA%3D",
                canonicalBaseUrl: "/@junya1gou",
              },
            },
            title: "Home",
            trackingParams: "COwBEPCTARgFIhMI6Krb3NXOjQMVihJzCR3gNS31",
          },
        },
        {
          tabRenderer: {
            endpoint: {
              clickTrackingParams: "COsBEPCTARgGIhMI6Krb3NXOjQMVihJzCR3gNS31",
              commandMetadata: {
                webCommandMetadata: {
                  url: "/@junya1gou/videos",
                  webPageType: "WEB_PAGE_TYPE_CHANNEL",
                  rootVe: 3611,
                  apiUrl: "/youtubei/v1/browse",
                },
              },
              browseEndpoint: {
                browseId: "UCjp_3PEaOau_nT_3vnqKIvg",
                params: "EgZ2aWRlb3PyBgQKAjoA",
                canonicalBaseUrl: "/@junya1gou",
              },
            },
            title: "Videos",
            trackingParams: "COsBEPCTARgGIhMI6Krb3NXOjQMVihJzCR3gNS31",
          },
        },
        {
          tabRenderer: {
            endpoint: {
              clickTrackingParams: "CCMQ8JMBGAciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              commandMetadata: {
                webCommandMetadata: {
                  url: "/@junya1gou/shorts",
                  webPageType: "WEB_PAGE_TYPE_CHANNEL",
                  rootVe: 3611,
                  apiUrl: "/youtubei/v1/browse",
                },
              },
              browseEndpoint: {
                browseId: "UCjp_3PEaOau_nT_3vnqKIvg",
                params: "EgZzaG9ydHPyBgUKA5oBAA%3D%3D",
                canonicalBaseUrl: "/@junya1gou",
              },
            },
            title: "Shorts",
            selected: true,
            content: {
              richGridRenderer: {
                contents: [
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-E0wuaz5s_D4",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 8.8 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/E0wuaz5s_D4/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLATWis78thMyK6X_pu2nS-IAqazmw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "COgBEIf2BBgAIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/E0wuaz5s_D4",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "E0wuaz5s_D4",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCwOqwN2Jx-hRTmc7ufSXaykAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/E0wuaz5s_D4/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "COoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IABAjGt8PogfbDwrYD0FhYThFd0ZSSVA1V1NVcUpkS2JmSi1vT2N4cHBfVi1tZTdPR3FXeDAtRkV5U0N3SnVFZkhmTmFKQkpnZGFGVEs1MGQ1MzcyOXg1WWx6ektMWEZxNzBpOVFpcU01Z201SWFTUEFSeFQ0SnZZOG5TMVFpekttU0IwOGxOcWdTSk43dzBQY3drZU9sbFFwQVZWaUtlNElUX2V2Z3NUVnlEQ01pVk5rQWxsTTB4cm5QeGI1dHNmT1Z0RW84dTJWN2lhb2x6WkJaMEZsaE5ZcWVzR3haTHRkNjgxbU1LZFFWQy1wd2xiaGo5VFJibVdtVUl3OWRvdExwZkRMWFlEamZLSnM2N21KRE8xakxuTUNLRTBLSjY1U21sNnlnUHBTUzJud1JUc05oUlpZRmZFOFIwdlYwUklvdjhubzFhakNOVVk4WnZ3S2RiVFFrTV9VYk1GUG9LQlJ0U3FRa1BGWF9Mc2d2WVNPS1RiMXFxMWoxUWp0ZUJrQzg5bTlVQTRnRlRzMURleWwyeHlOZnVsTVE3SWQ4Y244NEN3MDNlcmdtU3VEQzh4emVWSmtudnZOMFlQaDNPNnExZjExcGpSMjh0YnR2OHVnM1QwaWk3QjdNbnhWTmlFemt1Tzd5bFZwSkpsVU16Vk5IcmxCZWdXUGVkd3NwOXE1dmJkVVllZmc3c045MTVfS2pjUkhaY2tpeVJCc3Y4akRRbTYxODEtWHdKazRnN3FHVFJMeFgzUWdIcmxiLXdoQVNMZmxJM3VwOExkOWRLY1hES2llUncySjlLWVgxUkt5RWdVdlFqTjlxUUVDN3hnTXhXRHdnUmp6NTdrcjJ3SEhfem80bl9fS2kyWm44VmNSUkg4ZUszVFpvbkVPVjRtTGV6eGNjeXE0NUFrMXpiV2p0YzliQ0JPQWU1Ym9OUlJzdmNUWGxzdHhGWVYzNGhobFZPTHQzLW4zTE50N1lYdXJXc1FSTkFFSEFvRGpyaUl3TlM0UXBkMkRyVExzdEtmbXdLRmxwaTdUUHVnb29EYnZoWnkyYXViN1JHM0hyYW1HbWoxU3pCTmN0WXZKdzZzV0RaOXh4azBFa1VQMkVnMzBsYk84WWtFcFctcXdYTm1vWEFrS2RadXh5WklnaERhN3VIdGRodnZDVEppOWx0RmQ5MmwzdFg3X3dCMXpLeVgxMVpoZ2RKUFVIdS10VnlPQ09FQm81NnRnR2R6Y2hIMmtVdF96eWJfcG41MFNTSDNKaWpPMWhuTTNCYWJfdU9TUFozVVM0S0UyZ1NvMzk5ZzBZQmF6MVhTcnhlWTdMWFdKZ2tjaXJrZnhxOElNeTFkMXJGbEdJWlJqUTdyVkt4Y3pjZnpfclEzVG1abmJWVnZFbHViUDFmdEFLOThzZHRDNDlMT2o1UHRsU1NMcWhack95ZDAwN3FiSzFsSmxhZkxod3NVdEEyRlN5Q2FrMzM2ekw2ZmVGdU54OFZ2eWs4ZXlsTFVwWDF1LWtvTWJSbnU1VU5pMXR2ejY5MzNpNTduVmgxb2ZfaEVSZkd3bVFxdzdrU1FtYk9zdFdEU2JrUGpWemNmcHg5TjNsTjZEY1pnbllpeGRPNzc2NWRUa3Z6bWUyeFhBcVV6WERmTms3NnBmQ2F5ZHFacUhyM21CQTB5M0MtQlZZQ3JaNkVYeEtNUVlIMlRtNElvUWVSZHFMLUMxXzdWM1p5R2ZJbVA4ZzFPRlFqMXpEZElCWVpYWFFTZ1c3cFp2bFhQNVczWV9YZGhvM2xyRU9lQTlXQjJxYTNZNjEyUDdVVXFrdkJYcDVja2lKbWFucXlIaDl3eU9TVktqWnhWVWhQYTlIajVzbmRULXlHdERmb01vN0trVFpvNUN6RzdhbUQ3eVJ5d1k2M2ozejM0bTZQTWY1MkhaQVVIc2hzS0x2TGRNTm9VTHUzYXFqREdHbXVLYWU4aUhKYm8zT3huQ3k2SHRhVy1wanJLMVhoX3FKY3hRYTlPanVyc29TdlJGR0VTVm5Kb0haYWxOTnBZTXQ5alJNLTBNWEFqbHJudm13Z0Nhb1FtQjlXcE1nNnR5bFczQ005Xzd6N3pvMy1aUUxhOU9ERGdNOE03eVUtSXhRQ1M2bXZ1c1FvcVdGaDRISHZ0dXJEb2g2ZlNjNWtVT0RBRURhdnEwUklEZi0yZEYzdVRWam9veVJFNmx1VUpDbllqYkxXSk15Yk84dGxpU1lCYWZudzZ3NHBSQWJOak1LQUUySFhVekFZSFpreDVKRks5cnJjaDRncThnU3RpYVF0ZElIcnpjOVZrZG9CTmlqS0RWTWhpM0RsUkdZZUtsVnVkT3paSlFTZURPdkFuN0h6cnB1ZWNvNnMzemtwNWhOT25kdVlXT2ZPdWZqeU5MdGZwbm5lVThfaDktR25QemhkS3l3c2tCMlpwVkU3ajZxbW1YTmthMDRxRHh0NGR5VW9fV0Rsa3pvTDdpQzFJNUtZM1pxVEx0cnRTNFQyR3JVSXFSUmhwTTVIYmFzRDdtcXRObGhEeldSUFpRTVdOcWhOOURqWG5Zc2pFZU5MWlZIQ0RKb0FaSWF1d1pWc2F2SFZldUhtLWN3Q1NERVRvNFlQWnpyek5taHBRTlNfaHJ1NVYta0FTN2VEVWx1VkV4Y2I5M3pteWpoSmZMcHBhT3Y0cFFlNGRTU1h3dW03RmoqDQoLRTB3dWF6NXNfRDQqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235911-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "COgBEIf2BBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "COkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "COkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "COkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "E0wuaz5s_D4",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "COkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "E0wuaz5s_D4",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "E0wuaz5s_D4",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "COgBEIf2BBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "E0wuaz5s_D4",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "8.8M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "COgBEIf2BBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "COcBEJmNBRgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-GbwsnTZFwBk",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 14 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/GbwsnTZFwBk/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLB4Li39RikPDGJr6LzI8-viV0c6Bg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "COQBEIf2BBgBIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/GbwsnTZFwBk",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "GbwsnTZFwBk",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymBDqQuSTxaeCIif9J91bncUkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/GbwsnTZFwBk/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "COYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IARAjGt8PogfbDwrYD0FhYThFd0VkZVVJekFtZWVhNXU2UXJYRWNtTFJObnlUMHItcnNYb3pVOEU5XzhjaUppMWpXc1NHMXlVSVBCQ081aW1IdkN3MUQwbmFiVUEtQWUtY2tja19PaFpkdG5CaTZKZ1lTODYwSTZiNEw0WW5qNHpacDZTY3lrQWFQUWwtUE9KOTRGTjg1Smd4aG1zRG9OTk50MnN2cjR1MHR4dTQ2SVBoOFhnR1NlOEM4M2tWdUZNZkxqQ05NeXRhcnBqWnBqZ3Yzai1BNUMyTHU3QkdQWFIydnA0UFAtNWNXZ3hpcW9XdXVSUnZMeVpqT0ZBLXVLOWtwVXdCQWZVelZSeXhuY29ZcHJKU0hjc1BMOEk4eUFCSEtwNWNlSHRpajRSalU0OWhzNzE5TGRMUDVDUHJDVTFrM3F0dnNIcE10V0xWV0FzTFo0WC1sYk5Gb1FEbEwyU2ktXzdkQ1ZycVA4aWIzc1VFaHlGWFZPY3JjQjI4OE9QalhDVnB4Q3hDcUlRQjBTWnN5U21WOHBucmVzd3BscFNYLXVvYjRuOWhYbGlKelczQV81M2RJWVVzT1k0Uk5mZEZaUlFpd1lTbmFVTUt5LVVtQkhDNkhNQ1pfMFhnN1BpSTdwQ1h3Znh5TXd2VEhjdDZJSGJSSWNrc19LYS16dGpjRGxrc29oc25uajVnZlloQldnSkxWMFYxRHpfTXdFaGFrOG5tNjA0STZ2M1dua2FEU01icXpHc0tYMkMxVE15LUhobENuY2tmOV9uTFl0czZ1ODRqbWhPa3RzRzRIWTUxLWJNR2s4RGFIVnJjUkp4TzNBeXRnY1E0ZEFjOGY0VFpZckU4cUZnekJwWkFQdE42RDI0WVJiZEtsR0FXM2lLU2RjclBNNG12bkk4WFVCcjQzNkhLTENOUnd1SVBGQlpoVUltbDhXUWExNm5IZHFtU0p1bVdldndZQ0Rad1pOLXVacTctdGlCdjhtRm15N3Z2RmRjVEFUU1FtOTJZazYtbDdndzBETVd2bW9IQm5jZ1ZVd0puUVAtZmN4ZUVtR1NfS21aNlh3NUtvWWV4V3dvOHpPa1V3TVpZRFRrMnRkTFlfZTBERllwRlB5d2tyTng3TGVJTktiY3NBOC13SnZyRzR4NlNJNE1ILUxhekZ5dTB5LWFWNDhueXRRZHZqUGxZdGZEX1M3ZGQyY01tSFVudE5RV0NjVF9HWFZZcTBlem1GN2I3dVBGVURMbUM5MmhBbGtNQ0szdUVtekdlUjE0RWViWFBycjlxay1tYzdWTTItaVd4WkttUk5KMFJVZDVNeE9RQzJockhwMzBFRGxpREpLbjczekRoblQzSXF0czNaMDlaV24yNWhsVUh4ZjA1b1Jaa2dHTnJmcE9XMkQxQmoweGJBRlBndU5NQVNLLVpHaTloU3ZXcXF5S2FZR184U1NIU1VpRXZTWjNWWmdLQUhfSXpzLUhCblRIMDhIN0YyTnZpZm9YNzA3bVdJeTZfMl9HQWZjeDVxM0ZkOUtYcU8wTG1ycmRXeldUb05PTTl1SUZOallYTnhXOGFubVJ2RHR1U2p0LTlqZjFmZUkwYm1pa09TdDd4YzI4OGdrb09iRnY4Z3Z4VUZpcVkzQ1VWMDd6Nmx6ejlxTUlaUnk0WHBFVzR3RVJhU18wYUJ2c3ZiSjcxdU5xamE3a3JMV0s3NkczVmNpX2N6d3B2c2NlbUR2a2xmbnZoNkpVd0tVUWsxc1hNUE9VOW5XSTNHSXNzWFE3T2hfeHBsaXpwa2c4SjFJUVBNWFczbFVGTFBVMmNOZ19MUU1Fc3plbVhBQUNyY1o1WEp2UGdRdjJXVzNhTGtLUFh2NkVDYi11WmJsSnpaT1Q2V09VTklmNElybDdlX0hWcUFqN2xYbEhfT2RjM1BTZ0loNEp6RW5VWnFqdXlVSWJjMTdzMkNPQ3NTS3NmdG9FbzFFNUE3dlZWaWxyUEdBOVZ2NWhCbDFPMW9aNXlybHY1REg3U0loNzlOVl81S0xJdXh4bkdZN1dMQ0ZTR1p6ZUxNWTVMb0J5bDRRVDVPQnJKa0dyN0RFR09rM3VWZVQzMEdXZ2MyeHI1QWd0a1JXNmtRWU1USTFNUnFDQXdXck43TlpFY3Ezb256Nk5ic29UOUhvQTlfN3VhNG5HQ1pWUmx2dEZRWmlZd1FuSEZJVGtKMXVKYjJHbFZ4V0VWTGs0djYySVFuR1duNjZyLUdmQktQR3lWVnZET0t6WFd6M0t6MFlCSUZrem5NOXlnc3ZLcEFJazBaZWM5WDR1ZGJzNVlid0UzRzVERklVeDhlRlFLdm5wbmlMNmRXQ3hTdGxpQnc3X1d3SzhydmZZeGFYSWtFeHNIaTJvdHJqQklVQkg4UTllSk1YWm55WmRrVjdNVHVyYWYxTWNEOGk5eHZENmJSSk5sdGpNZURkSUpycnl5dV9yODNocmdYWkxFb3dXcXdGaWJDNm5icWEyZTZkQ05JRjlFUGlPRjFhcXlnZHBDMzFhRkRkM1MtWFdud3ZtTUUzNmVnN1U5Y1hQQzNsbV8wSmsxbDBYRVBIdEo3MGFMRGRpZ1VmOHVNTWtQTTJRS1B3MUhsNG41SjlZSkVZSlQ2TnJQdnV2cXZnWlRqcGZlbzRYU2hQTTY5TkVBUm9kMlNLT0VOS2g1OGFGR2o0UDYqDQoLR2J3c25UWkZ3QmsqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235912-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "COQBEIf2BBgBIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "COUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "COUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "COUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "GbwsnTZFwBk",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "COUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "GbwsnTZFwBk",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "GbwsnTZFwBk",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "COQBEIf2BBgBIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "GbwsnTZFwBk",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "14M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "COQBEIf2BBgBIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "COMBEJmNBRgBIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-8dNfh4XZOXc",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 7.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/8dNfh4XZOXc/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDArHZxq6ZQbs9_Zvn9yuLkFkBbtw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "COABEIf2BBgCIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/8dNfh4XZOXc",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "8dNfh4XZOXc",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymBy5SPo-VhiEBrBveeMmW2RkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/8dNfh4XZOXc/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "COIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IAhAjGt8PogfbDwrYD0FhYThFd0ZvNGpOdTVteW9BRzJxRzd4SnFjdUJ3RzlTVUotc2pxSVJJcVJXM2NjTEhfWUFJaWEyU0twM2RSUzJROXFHYlZHdFJGMWRCLWNhUzQyWHBHMDVIX2l1T0NPUHROS2g4Z2RHdWtJWEh0SVlDY0Z2R051eG5ZWFhmZ3BNSTZQaWlUU3A3WHluWHpBQjllNmtsZ1F5TFAzYkNOdXJvaDhIZ0VCLUNkZE42QUllMG9IZ09wTmIxNm9JVGJiSkNYVEp1M1R2RUJvWGVnSWluSXBrWmtKZ2N1TjBjSjJaZm1pRGc4a3JyT25EN3FwWlRwdXRkVnhDcl9nMWpjYWpPcjh6WGdmYmFPNE40X0QzbkxlWmpkUDVQUkIyZnhucG9KU3R2UV96Wkx5X010QWdZYWdrbjdlZkFEc3lvWE82Vm1MZmNQdWc4VThQeWZxdkN1eUQwR21LM3VVZ002WTFvN0Y3WEsxckdmMXNWVXRCVzhWTHhjZ0NibFc5ckZCcG9IVGlhXzdJS2FTcnlRNS1temtpcjZGZGlwN2dfTWlQWUxIa01XRDlxLTRISDhuTkluRkY4eXBIeVZxM2w0cVl2WWFPaHNMUlNlRDFNanNLZTY3ZTIxWDFKWjhNdjFqQ3VEai1tRmM3dTBhTmRZMkFtZDZVbG9KZXdqZXZ1SEpFc1VrNzdYejVUR1kwenp4TU90VVYtd0NobS0wVmE0WE10WmxESVhBMUVKb2lUeHlUOS1HdUJOZDVqZ2VxZFRxX3pyZEYzMmZjSEtaa2t4eWxCSWhVcWlGTzNwVFlsYzk4QWJzM25xZWEwZTliVkRVNGw3Vy1TeEJhMXpleEloTF9rbV9wYjNNLUNTaDNxd2hpdkJIbzdpTkdQQm5mYXRqREZPcEhfQkVPcExZdk44WEVHR0d5bm9ZNHctemZhNDFDOTRSbWhmMnBvX3daMHFOSGRUbGxTQld5MUJqYlF3dTlxWnh0Z3N5VnY2bXAyREdnLU1UNnJhMGtOSUljNm1FU01ZbjhEUnJoNDY3T0R5eG5XOWlMWjBybDhQSm5IcFI4VTJodWppTTNmZkVnWWtKWTNBY0xfbzFjQ0tUUDJvcjc5SUFJWmtWYzEtOF9vcF9QWkV5S2t0d3VwWURoWW0xWVZUbXNLNWdCRm9uVnF5SHhFZk1NUlFfeUNzQUJWcVNCSC16UlZIZzF5OEt1TUlYQjB1N3NUOURia3JVU2k1ejBpOGVxVlhmeDVCR1Y1UUZEUm5fUHpoWl9DSk11UlJBdUplVVdRcHlHVWZndHNoMUVxSDFqczZmc1A3ai1iNlF5dUdlQ0dnZk5GU2xzRmwydWVTN1hxY19ObTFZa0FLMGVELVN0cmlFdFhhaWlxV1I5T3pmZmkxY1hsdzNjQ0YwMnpxOG5CeHlVMEhkcEtISU1LUlpJOE9qbEpaemRnMjJyRWRreWhYbVpVQlByblN0UkxBdGZFaUtIM19YNnBoX2Mtb21WbGlMSFRVeGJETXQtUmdNY01RaEhVNnFTRXE1cmMzMGpVTWZqQ0RMM3M4SW9FcTI0VExwRU9zMnd1dmt1c0FaYnZ5TXNBZEUzMUZnV1IzaFQ2T1lkc0NFdVYwUU1XUGROSDhRUjZteUdKbDBMbUcxUzZmZVd1eG1IZXNUTEtkTFQ4SThrcGhxM3BGcGFTbU9uUkQtdS00MUpOODdJWUtEMkJ1andDa2Q1QkJQUDBGM09fRFJKU3BSMHA5NExweHZhY0lwSHJsT0Q5QnFZTWpNNU9jMFE2aUpHdzJBVnlPZXZHbFV1bElOZkE1UHZueThhaG5KVXZBeVlUX19paERpZlU2bXdBMUxSbUdlb3NvMkJvbDdWc3JGUFAwb1RsOUtkUTY0NWhhRXhKZzZFM29JU3JvMHpLbUhmeWVSeEJZRzhrQlprVnlVajUyblF6NERWZVd1VW1CUzJXRVZJT29mZHdkRDJaaEprbzRkWXlia3lCT2JtamRrSnhKSGhySlZ2QTZ0UDJhZkJBWHF0U2R3N2dqQVJGRHJybDJjRlNadDdaZ3loMG02UjNyM3Nod1FKNkMwenZnWVFkcF8tdkhCYUxmRW1EVzZLOFprNk9BYnlteWJ6WWRaNTBKMkoyTUNKbUhCWm9nb2d6dTBWUFRUeUt4Q2RuV0xtMHl6RURzcTlHeHJBUGVQVmlET2JZcVRlRXlMeHU5WFoycUZRcXE0bXFNZDhDVDF3dWxFSHJ6RG1wVWd0UEQtUkJnNVFiRnF4NU54V3N3bjl6aEc3bFF4ay14MUhnUUtxY01pWEVHbVBEM3k3VDFwbE1SN2k5N2RMMWhqTFQtSE9hbkRyR1k1R3VsWk1jbVctYjhUbzlCOThON3RRRVZFVWlJWVp1YTBWRlNud0NMSHcyQzVraVdjeTdYeWE1T2JERThGcmVSaXVFTVRXYzFzSFJPNUZSR2hjNzJ4S1JqOEVPakJFSmpTTmExNlZXQzRFRWlKMm16NjBKd1NnanJuQ2hZbVpyY0FzQW9yZVJJMkpEOWZCZ2psbXZsb05CQXJZcEpqaHFBMHpSUGtnT04yVnBfQU9RSzd5dXJIZ3lBVUtHV1V4eVVXY2xTaG5NY2ZadUxiME1DVjU4MjJSd1QxQng3RmVxM0wtcmk3c1Zua1ZBeVNzb3Y2S1BYV1MqDQoLOGROZmg0WFpPWGMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235913-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "COABEIf2BBgCIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "COEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "COEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "COEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "8dNfh4XZOXc",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "COEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "8dNfh4XZOXc",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "8dNfh4XZOXc",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "COABEIf2BBgCIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "8dNfh4XZOXc",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "7.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "COABEIf2BBgCIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CN8BEJmNBRgCIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-oSIJSaaqLnQ",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 8.6 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/oSIJSaaqLnQ/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCtLYOtsrMmhXK9HrIo6_sWfCoL_A",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNwBEIf2BBgDIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/oSIJSaaqLnQ",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "oSIJSaaqLnQ",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAFFf527bPDGjN8V9TRECFKkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/oSIJSaaqLnQ/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CN4BELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IAxAjGt8PogfbDwrYD0FhYThFd0VoZU1FVnRrbGthYzhXYTNWX2JoMDRlQnJNQkhxRFdsVmZDMHBFUzNuSy1GY2MzNHV4dGJ1UE5fWmJWM2IwVmlLZnJpOUtvc0E1a2t4RXdKYk51dHd5OUpVTWNoX3c2WmF3azRvOW4wVzMtRi1PRjExN1NqV2lYbXBaSFpNbjl0WHZGODZ3RnBKYzVkejBZM3RmQ2NxdDhOTkpCdnZGekdNUGhTVWRfM1JKTU0tUDVRMkdCaTdkNU1CeHVERFk1NEthVlMzNnhoTXNmN1lyQjdIM1Y3SkpyWVdKVDJydWw5WWE5c1NNRFU5VEs1Z2xOc3pTZ0ZLekY5SWxOYVktdERic3pHV2d3UndSankwcG1ZdWtyNWtkLTRUdXNBZWlTeW44OHZlRXJWVDNYWkw1SnV6WG9GVlFrR1o2SjNBVWdjSG9EZGZEYVZ6QVh2bENKbm40RDJoRzRrYzU4LWIzSmRoT2gzbHFlZUI3QUlMOVJxb2JkWmZRcHNhUlo3UzVGWTRIT081Z3NaM1VuQ0QwMjdra1l0MTdFSFVTeXo4aWIweE1aUXY0TXVJRzdUeXJBZ0tqQksxQzctYU1WS3dmWUpQZDJqck8wbHFPd0puTGR4N2RLZjVvN2JaanZjZmdvUHp0cW12V0V0dktUN0pWZjlVTzRJM1FvNHpxSktPN1ZEY1pPOVNKSXEwQmNDV292UEl3S21ydXAtNVZ5Sy1XVjRWcXNpV2dMcE5TWGtVRzNKY1IydGhSSGVRdWtYM0xIcTExSUZYLTJWei1lb3lUYWVsNVlPbzUwem9fWU1FRTdEN0VleGVPa0J6ajA3SW5nZ2hyS09ZS0ZBSUJrMHVMZzQ3a3JkSGZKU1A1aXpnNEE5aHlwUUFieU1JRksxaWN6NVVfUDhONi0zRjRLNlBtMG1JVWxkY0pGRF9XaV9TR3pRZENydVlnZUtzaFRFRWpNRHh3UHotY0JkZk5OT3gxeHU4RVdiQk8wZGNZV2NtRFlWSW5yV0FlWE0xUEhQUDhNUmZrbVJTalZBQmFiYjlNRmE2NkZJVXRYQ1RIRElxZjAwdjg1b0VwN3FpU0syekFjYkxVTHJKYTRvZ2sxelhOc21BM25fMlRZTHlSZ05CendENkZHU3duSXZfQ09ELVQwV2kxdUxkLUtwbWoxbHo4TnltSkFKMFdhb3dJaVFNcmEwa21hakNQNWVrd19vWDRvVHRDT1EtaVE2dndPYTA1a1BxTXdQMW1IX3YzS0FnNFJqV0FjUzVkNjNuZHJtM0xBYnVsOEJhUjJiT3Qxa24xRjVlX2xBVGVCWE1ZVDJabmlCR08ya3Q1alozdDJiM3VwRVFQVkE2RGFEalJ1TG5abjJkekEwVXhpYW0zRW5CeWE1Zms3Mzc1OGZOM1RlNGlmazJBUHp2Vm5mRlRqM0FaMnBqLVJETnF1emE5Ym1hNXFyZnRvNzVGMHZuaGFtSkNOeFo2dlZZY0kyX3VkdlZsNUdpd2c1U0lFaERna3pQa3hydXBDckpSc2dXSzhOX2t1Zi1wSTFiMHdKb1NuLXpVRU11NkZPTlB1Z1FzNWJlRGZMUHJxdDFfbncxUTJyaTZUS18welBYeEpseDM2aEhuSG14SUNPYVNQUWx3TjlFcXZRZDk5c0pQaE1sMEp1c2hXeEVCRzY0QlhsZXlWWk16TElSY2xYeFhpX0JDblZFQjNfV1ZIaGpfUWI4SGJua0dCYmg0Si0wYkIyb2o2NW1OZVNXUWtxSGVVVnRSbW1mcXNFNTF0eV85dGE0aDhxSFVobnc4UWU0Z2FMQ2c5cS1iN19oa2tEWV9Ub0dmWmFnUzdtMm1wNWtzZ1h4aXF3WDdxN2tiVThxaDRHRHU4TENiSXljYkI5MmZCZHB3dThjNmp1Y2pWdGJCUXhTLW40SDRTcmtVSUFtWWQtRVFwUDdfZVRFczVoZmpqZ0F4UmxiVy04MGN1VFBjeDU3QmJJY0J5ZWgyai00MUxsTjlzN2xUS0dVM21pTkZOMUY0NGE4Y1hfUFFOU0IzSTJraTh4T0dJNlU3NUdqN2pScmRnYzM3clVTdm16ckg5OVlyc3EtN1piM0tTRnBOSTJRSFp2anphek9WTUFhWU1aSmdsUUtvMzllUWpPZmNxMVRIMS1aaXZRTGhZdWdpRG4wVzY2ZEp2dnE3TzhubDhIblNBZ0xKVXdpSWtHdGwzUjlpOXVxeGQxS3h2VFlxa0RJb0VIYjdfc2JOTVV0aHEtZkFvdzhYRzU1bFhaYloyNGN6a2tCMTBobmNZVkRzZkNyeGt1R0hCZ3hoSWRsbmdPVm0xX083V01LODkwX0lMdldQMW5wU0dqa1h2V2ROSEVEU2VGdlpvb05ob0o1SnRXZkdGcGVHeHJ1T21WMEVSR2NuSTk4eHc3OC1iQ1Z0cUd3SEswYmZXd3h3bTJhbENpWmhaREZydjJaLVdUdldobHhIelNXZG1Td3dIUm9RZVZzVDZ0TUFxcjdPbHZCZW4zaWVxVU1TZ0s2YVJfdEowd0FqNjJHbjFYMVktMFkxel9FNjhtMV82SU9fOUdoVTlaQW0zUHZuZXAwdlNwNUhsVjRGUTZkb0VfRzJaTzY4djF6UHVQeDN1MG9xbDZpbkNnNnJ5MFhoaVo5dXVScVQ1VDBkTGpIaWs0cEsqDQoLb1NJSlNhYXFMblEqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235914-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNwBEIf2BBgDIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CN0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CN0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CN0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "oSIJSaaqLnQ",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CN0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "oSIJSaaqLnQ",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "oSIJSaaqLnQ",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNwBEIf2BBgDIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "oSIJSaaqLnQ",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "8.6M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CNwBEIf2BBgDIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CNsBEJmNBRgDIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-I_tHuTe_7k8",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 6.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/I_tHuTe_7k8/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBczJVL6BUbJGRdRkfC0gu3yxXIaw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNgBEIf2BBgEIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/I_tHuTe_7k8",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "I_tHuTe_7k8",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAwP51MmbyCXh2nDgxLMvUJkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/I_tHuTe_7k8/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CNoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IBBAjGt8PogfbDwrYD0FhYThFd0ZYTDNRWlRfcmZ1aW8yTXp6RUs2Yllsc0tPQXBjbU80akxIQVF1UDVGa3pOekFlZWkxRzV2aUtLeEQ3Y0k5bFpwMnAxX0ZCbi1jLWM4WG5lN3FiTzQ3TlpwMjE0OXVueG5HQXhRQWtuS3JtU20xRlJ6TEIwSjBjNk9SWk9PTjc5YmZpSXVvZTdfcENwaW5OYVM0dEZYcHNobUFyRU41ZkNiZUNCTmhxZGhMS1Q1UW4zQVVCeFRWcDJteEtjU2g4ZjhPdENUcHd0UGFFN1Z4X3pWN3VaQk04bDVRQldkak0yRUVGX01GSmhDeUxiR2FDSmN2RVVndUREeWlYdFRTWlh6d1dUMXo4NlFoSHFwQWNGMjJaaDBxc0x2NjRqNGFuRjJvNVBXd25MVXFIMUlsTDNPRl90SVZTY0RzWUJvbkhxSmFNcWxuQTJDUE9McVpMckZFUnFybXJEcmI5TXRNX3JoSThsX0c3ZVNLaDBWczRkbzB1Sk9nYWZ4VWp6R1Y3cEZjMEM3eVlFY3ZJNW5tWXFPdDZJc3VGUkV1LWw1VlpueE9pdVEwUUU4WUh5NS1IMzRrNDZLRHowQXQ3M0pleVlpckxqLXdDMFNqMmk3ODFtTVZqWi1kRzJwbVQ2V1JvWmphUUM2a2t5NGs4NjlfYmcxUjN1NUxTQVcyaVNJUlpvd2xzNjFzMGFoOEh4MlRHcU9PNmdYaFBkWGwzVlhVeG1xVGtCcFJOYjQ4STlkSHlWLTdSVkNnUDNOYzhYTEtiR1JxM09wTktwUlZjdjdTSlZEMzh2Vlh2aVJKM1NKbEZXemNhbVpudjhlWjV0TEVOcTZWN3VXdDJULXRwc1dpUkZtUngtcWV1SUtpM29FcDVoTUJpV1d1d0pmNGVMNHBVYUxVWnB2a1dSRE1OS3FvMWNfcTY2TFFNai1URk4zcDhELVVmUHoxYnhkT3NJeU52SFlTRzJhamgwQlJGMGpCYU1XTnE0bG9nQThscEZmamlVTzlIb3NZQWlWRlFRNlZZRmpiTlpZSUd0Zy1keHVraEJ2dGQzcTN4Z1drV25SWHB2S0ZRal8tMEFSNXNkczdtMWh4Mkt1aHRqWWswZW8zeVBfRDZBaG1TTXRhb2hscFdlRDZ3X3lnV1pfSnhpaWZQaGduMDRocUQ4QURRYlh0dDd3UDNtVTluWE1TWGFKTG9tUGE4Q2hBcWpRckNIdUhnTzloX2poRlRpMTQtTHozLW1tRU1rSVk4MmtjVWF4R29TMnRLcHhXUjk1M1I4eTdoa1Jjc3l6ejQxa2FvcFlNNjdhN2hkQ0ptWlZjanVtd3hlS3BmTm1fWXVsSXVLTlg4OHNWTGdtc2p0YjB2M2ZldU1rOG1Oelc3Z2xjMjlkdGMyZFgycnlNdDVPVWY0THFabk0tVnVIMjRfeHBKUEMyS1NseElUa3E5dGxVOU8wbVY3SXpwMEtNT1JKajlSWDJ2WTk3YUtsTllpb1plUUdQaTNHVnVOaHAtYVdxZXNhUE5mYnVBQ3UxNnlLUHBobmxBNTBkU1luMUx3SUlreGoxa1pwaGVSVC1jVTRLRXBMelJYM3NBMEVYbWNvY1IzTE1HX0FleWlXdUZqNlJWSHROdF9tUTN5LWdCZVpLekN0Vng0X0lKaGNsQzVnb2Q3YUVkOC1wQjZXZkpIQVNYajl4bDR6c2xKR1NzY05laFpqVmpWY3lVQUs2S0RlREpVYWNPY1BhRXY0amNYRGNFN3F1QXRYSU5kb1Jqc3NkRGxjM0VvTFNpaEk3Qkg1cWpNRU9yNjQxbzJZMWpEMjRLWGU5ellnRV9SQVBnd1VtNUtWbnhyODJnU0JaN1E2eDgtbUNLU0c1eWpKV0cyVTlKY19VUU5SOEttWnF5dnJYbC10cG1BMDNkaldKNG9CVE04Z25HbXlrZ3lvY0V3dVpHeGtPMmpCZUQyMXNZc0ZUT3oyUDdQRThIXzVERVJZYWVqRDZyVVgxVXAxc0NFSkFIZkExMWZfVzh2aVhCWVAzY1BNZmNtVnZHbmVmdFlzenJHMFZlLVlwMk9tUFhNdHZIS2J5V09tYzZObW1kYjlWX3RNaUt2UVNpZTdORXlmVGJjQ21Tc3ByMzk2T09pN2xXb2tHVXBDUWlqaHNwUHc5SE4weVhnLVJ3TlZPbnk3RDVhOGhidndJOGNRZUg4SlRCWmRuSEVxZW5QVUN4b3ZYeUdNMEktU3JUU0xQLWV6M1lSQ0QtS3F5Qk1UVHU0RzhfakRCeFhKUkZuMzJfRkFFa3Z3WlJyeGdFTmxWN2lNTHhKMFJ2dHNra2F0V25Fa2FJcG9GcFgzYVBpQzFUUGp5d2Z1dGE5RzhnY3JQQmhiTVU5c1MtR19UMEF2eXIxUEQwdXpRSUFQUWZRUWsxeWVjWEpsQW05ZGNZZDc5NG9jc2ZtMm1SclFXSDB0UTdaeWFIVFJOWjBjSm41cUN2T0ljUldvRDVTNHotSDV4Z3dhM3pzRFBjbmpyUXNJUFBRYlU2ekE3cnN0TWZsYlQySWlnVjZNZzJHOVZ5TkE0RVJ0U2x6QkdhclhrQkh0M1EwOUlpNkNGQjEtU0FYN0hROGItR1NwWmcwLXg1ZHN3ckE4VVI0b3pZdHFOa0JnY25ES1Q0eU1WNDM1bEk1bWZFVEpMRlJCa2wwS2kqDQoLSV90SHVUZV83azgqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235915-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNgBEIf2BBgEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CNkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CNkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "I_tHuTe_7k8",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CNkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "I_tHuTe_7k8",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "I_tHuTe_7k8",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNgBEIf2BBgEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "I_tHuTe_7k8",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "6.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CNgBEIf2BBgEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CNcBEJmNBRgEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-9NlW6f2Wtr0",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 4.8 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/9NlW6f2Wtr0/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCj2vjHZwkGQ4hhrxmOT5dsaQX6vA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNQBEIf2BBgFIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/9NlW6f2Wtr0",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "9NlW6f2Wtr0",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDpaD0AD3y4PVo7hi7Nx7hnkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/9NlW6f2Wtr0/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CNYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IBRAjGt8PogfbDwrYD0FhYThFd0ZhbFkzMldVVWlfeXJhNTF2ZkhKWUczQXZMc3FxTHVtSjNwN0dQakRONHpNZDVFamJYX1J6c280clo3UVhwMVdwY3lFeVIyUUdzTXRKcnZxZ19lTXNJOHBiVmhUREpYbHRCdDl4Z0VhWUJlZEZ1anJOSVYzZklrSktOOXBHYVhjUktObjlKNFJQMmlXdUM0bnRsLW1tdWtsQnVTRzloZ3pzdWNTQVdqeDNobmZGdHpRM0tRUF9VR2huNW91dXp3TUpDd3Q3d0V1MnE2Uy1NMjVuaDRVQlI4ZG15OTduTDE0OWxYZzMzVkVDSWFiMUtyQzA2Slp3YzNnWUprVnljclJvRDNLS0R4U2hxTGdKWjhMaTJGZzBMQWdjaDFEeHY4Nl96Rm9IWlhjS2dla1hPR09fZ05HYl8yWUUtek9kdXZrUzZoM091dnppc0RhUEFwMjJVRTE3S051SDlXSE5ZaG9yX3k0TUJhUHdfbFVUOXg3N2JjN3lXTzVrekV3OElyUEV1WHNmbnVxd3IzUkRnc2tQMkh0Z1RsdFVyWHpnSUlESDZJZFFjcFBCZkxJVk9HTmxTRG5JREN2anZzSWNwZjNFdWppeHpCV3VZQUo5Y2lXbDUyVVlfbUVrWlQyc0JuRWthOGE3bkNjX3lVWlFtMmRKQk1LTEJwZDAxLW9IY1VFZ2VkZnRVSDY0cjFHZ29CWVpuY0dGVG5LaHd1ekc5Z0xuQXBGQjJZSlFLaHpzeWttY3dxdjNqZ0QzWWVDNTVNQ0pUTHE3RVJlZEtUNE9Ja2w3VFQ0QTNRNTJZdkMtdFVBN09hY1hjNzRfSXJpTHNoRHBwTTcxQzdmcm9za2RxbktNZFhVR1dYWmdlN0NPOFRlMFdtSFNEYzNjbTUxZ2VJUldXQTBiMGxyM2tuQTBmVkVwRExTTlRTajNNcFVzRW0zam84N2xidnl6dGlSZ1VSWGMyeXo1cTUzRmlpMFNfWXhLOVlUTTQ3QmpzMXVmSDM2ekhRb1RfcHY4OVBjbEpUcC1Pc0pMTU1uY19WMFQtNGN6VXZXVmpscW85VFdyU0tNNzZCcldzNXE2enVTNnpiNlp1UGZYSFJoVmhIRVVJUWxSUjdzYzhqZW1jM1ZsaGkwdDMtTzktTDVnVldvQ1VtaG1UY1Z2M0xQWG52S2Y3Qi1XVVVYWHoyNkRkdFFDZ1BIdnJoZDkxYnhTMmN6VkNCV0M1WXkzMnlaSlNoVm1TM2RHUUN4TFhsMjZSQ3NfcTliVXh5U09yUWg3WlI1aTBVcnZXdmNCYmdjQTVvRlBqLUVqajRLV0hKY0RISU5GejBfTGRzTVBrcUxuMTVIcUota3didFYtWnM5c0dFMU10a21LUUpVV3NuNXdPNnc3TzVZdnJZUHJqMXFlS2o2LW11Nk5ZdE5IQ3QwTTViYlhaOWxZSHBqeW1HYlpEXzlIVDFGcDBGMk13SU1lTDNqTmtvaEpMc0dSYVY4c3ROejFxMUpDaGVwQk5MRGJCb2ZfcWJ0ZHRXQUxDU29DNkhNTGJHS1VQakh1amx5QnRvOVpBOUdnYnpBMlJZRGx3YUUwblMwNVVFWmxORjJ1ckNFa3JqQzhtLVdtM3VCYTRGVHlGbU5hVFZqOHE0Nnhic0dIYVpmdXVCRDU0UTlNemlkOGtKcGlWN1NpOUJheWNCcTd4dFZiOFZQTTlOSlhSYmF1blJ1WldHTVQtTEliTTYtN0NwV1lSeW5kclFseUVPZEhDLVByaGdZUkQxaHhuY2VodVhnZnVKZ0NzNk5hLVJkM0dqMktqQlRDQWEyY05fMDhua1BGR2xCRlg1STE0eTV6M0ktMVFrek04Z2tkVHY3UVBuNlE3TzZKX3J3NkU4bGFhaVZtLVFocDdQYVo0QlJVb2tPR1FoRkNZLWhYZXVNMThVWXdZQnJEWlRyWU5hbUsxRW1neUtXVjhzWmI5ZjhUdDdJbmQyeDlGVkJoZ0VTRUxsZGRQZ3ZzNGxiZTV1V1BCZl9PSVhDUzNIdnFpVVBvdmVhV1dmMkI1VTMxTk9HVS1WRTlOLUc5SGtFRzBHeHQwX09yVTRRLVliWVF0OTdRckxjaWtUbTdXeUFBTHZMSG1mR0xRaE95YUN0T1ZnWUxRSEJzaF9lWFFpTlhSVlRIaS1JdF9qZ1J6d3NMYWMzalJOZEM4ZGFLY1JZZjVJTFkwdnRGMm0wWjQxN2lUdTVMYkdPUi16TG45Mk1QUVlvVXd2cmQ0VFpFbk9CdDRWcVM2REcxLXZSMENudTFNMlUxV1NRUU80N0YwQl9nS0R0YkY5bFRUejRUaDgyc2ttYTJwdXBYM3hrMkN3V19XWkF5U0RuVjNBTzlQSnZaWVMyTXBqZTRFTER4a2M2ZC1vbURmYXA4a1VDejFWR0MxMF91aEQxMkdjY3dwc2pXUThDY3pSdHJpUk1QZXVJV2ZWQnU3amc2eGhGcDdtQ2M3S3hzUUxvOWc0R0l2bDZ0NXl3NnhWSnZBVktiRmpFU3UtSHhIcHhlS19WYTVvZnBZNEFpMFhaal8tdEZWTmRmX3NXeFVpclVXc010THJ2UjBLazA4LV9JY0ppZUlqc2ItTHR5VHRGN0hfZFhqclZ1eF9ibmpjUXV6V3ZBWm5vZW0wT3huWWc4ZEtFWndkem82eTB4RHlKN18qDQoLOU5sVzZmMld0cjAqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235916-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNQBEIf2BBgFIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CNUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CNUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "9NlW6f2Wtr0",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CNUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "9NlW6f2Wtr0",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "9NlW6f2Wtr0",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNQBEIf2BBgFIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "9NlW6f2Wtr0",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "4.8M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CNQBEIf2BBgFIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CNMBEJmNBRgFIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-sanYUdHCbEs",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 6.3 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/sanYUdHCbEs/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDhsDia84QtU5Mdixz3TOYPWIPf3w",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNABEIf2BBgGIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/sanYUdHCbEs",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "sanYUdHCbEs",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAeN4z-I_sn52Z-SpwyytBskAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/sanYUdHCbEs/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CNIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IBhAjGt8PogfbDwrYD0FhYThFd0VkWXk0VHBNMTd4dDVGdy1aZ25LQzBpbUJfNUtSaXhOdm9aWlNMNXJMZzZNLVFIUktHWUdTTUhuQTNvZGk1aWJBOTZaek1vSm1xWGJYX2xBYkUtdlRTUFlVcWxfR09oUkhvQ3o5VXNTaExMeWJFUHpWa2swS3NVTXVfQlloTGJ0T3dNc2NxaHdpdHM0MDVHb1dvTVRORFY4UGxYTzJ0cm1fVnRrQ2YtWmViUS0zYVVsM3JQNmtEVWZnMWo1eFdSN051N1ptQ1kzMWN3R0ZfaGptVVJNTXA2UkZQM2hzNUI0UGZBQk8tdF9fWEVfRzlUVk9KTnF3ZEtpWUFScTlIbUVqMVQzOFVwb193RTNCSDJoZVM4Vm1NNnQ5WUxVeG5XZ1RzVWRFUTdaT2ZLU3N6dE1QS05sbjJVb1ZkbXNDM1hEZTlNajI2V21xT3hyUTlVd3RZaFh1cW5QOHNsZzVYTDdzQzRLWlR1Mi0wN1VsLXM4eHlZMDd1czl5ZUFjMjIxcWdhY0RBd054Q1ZGSVdGVDZodWhGV3RHNFYtcmpneW5nWHlOTDZTOTVKeWhtdFBuc0ZWZnBfMmRqUV9XNXZsOTNtdXU1bTJ2MWtpbUFhaUJBalNBcGdkZFRlRjBERENYczdjaGFRdVB5WkFfMVQ0U1ZhYkl4Nl9uazFFZVMzTWx4LXBNRkRZT2NSUWMzaEJWMk4ycG9SaVRuaDFaUnRaRFpHTEJHOGxpTkRqcWpYclN5bE1Tam9aWlRRNXBNVElnVF9Pb0Q2V3ZYLWNoWnJNWUh6ZXVaZ2VRQ1JSZnM0UFlpczBINzVuODFYd2J2a1pMWGIxMko2d3hmUGlYbHpQUFZ2dndJa0w4YWNocklUQmFWLTltZTZ2Ti1KRUlSUWhfRDJKS0NQUG82VU5KekQ0R1llSjBQX2JOQVBmUGoyV1R4UW1VQlh6TVVGWDJ6b0VueVo1Q2lzd3JaOVFWQUJCNThDeENEWVZCLUs3cDFndTdzZ2xLX0paYTZxb0ZkcGpJMTJYLUdQZnRvbmxaVXRCMno1RmtNV0NPUHNhM2ZiQmY1MjZ4cmFIeGxOa2hCWGtLSEVNS2lleDQ2ZV8ycWxFMUFabFU4THprWW9iQ2tyZEkzRmNRTWVvLXlJY2NqNG1TZUpreXJHeDFYdmtoZlZUcWJ2QmREemdaUzF0dFhLZXFpY2RiRXd2YWg3X3BpZFZ1V25aZVFUWFktbE1PNkJidHFCWWNLWmFYdnFfZlZhRkpVRlg4b1Mybk1ySFNkaXZfRThDMnpXclFSVnMyZzRlSlpMTzhjZ1lLamhCZ2ZMODhNdl9tdXFyUmZ6cF8wWlBRSEswdmVwR1ZtMUFSX3JnWDhqRlBtRE8zeEU2SWhfLUd4MEpCcnNaM21MZ21WdE5EVTlHQTJlZVk5Vy0wbkM3MnlUMldFWDJCenNaRC1kS2pMLU50ZjFqNVdqMGZwazYtODg4azhnVFVBZU45ZTlQeUZ2bE01QkpXd0poNjBRazRwVXJpbnRGTmhRdEFEbUpyTUdJTUVHY1FKZWR0djlaeXNiN3IwSnp6X0VEM0tqQmVRQ05uc2wyLXd1dFllV0hsREhGUTRTR3gzajh0dVU3R01pdEdyUXFKZ0tvOFRNVTR1b0FLQVZER1MyNTdLS3QzMWFhNGZGb2VLQUs0MFZLMWJXX1V1WEQ4Yk1GRWJmS0tKUklIU2VxdnJwNFdfMlBocGlIa09FS1Z6MmNzX2lmQjk1c0tOQXNtUHg0UUVOTE5FMHZ3aTBVNWxLMkZVNHN6cmVtbHY3YU1KWjBTUHN2Rk5McGdTczUzR0MtQThlUGRkalBWWnhwYjI4RmM5c1FkQnp2cnpCNlVFemRHMjFONUNXSG9EaW1fWVFuRW90NGRHVjdUUWU2N3NDRnVDY18ySWNYak11N01YRzB6cFRoUnVCTzlNQ0xGQ1NBaHdWeHdSbGp6eENJeDctMXYtdnhNWTducG52U1V1WWlSSUZKNWNpbE9zNm1lNWJnamJud1FIRTQ4WDlqNkJOdXdlX1lkdkU2bmNycTNVMGl5b1VQZlVVdHRUT1lkdW5fWG9qMU5aM0U2cC1CM09KWUpkX0VXODBDR21NT1JrZTdEWVVMeXJqb0NqUm9SSUtiTjJmWTgzNGd6ZWNaS2RrcnJ4RlJxZDdPbU45a25VckJNbFZkRFBVTTlfMVRRb1NWdFRSQnB6bF9RMEpTcDZvYmNVaFhDUjk3R25TWDRMY2RaTE1kbmlMOExCSW1iTmF1ajgxMVRiSHJFS1FDZVBMaTRYX3NGNkVqTnI1Zi1sS2xLLWNGNlhVTzVBQl83LVMwYVltZzBrdXZPbHpqQlVrZEE3X1ZzRERkR2pGal9kVXVQdUprbTNUdThkNS01bm00Wm1UOC1QWDktbzRWalo3eFM4b3VKRlhjaVRHMW50ZVFGcG55Zl8zMHVIbERuTnpfbWNTeDkzaks5VTJSSS1WUHV5d0pCMmxheFBDejNqU0MyZm9wNU9rNEVxQVhBSmFQS0VWU0NRT2xvSFRzeFdkOUROQ0twMTZYaXBuYk9vUmtieTZhcERtNUc0QW9ycnVRY0F4aTdsclE0WEg5eDNmalVYX2lheTlBUmg0Y1N4ajZFWGxvMTRJLTNUcVlLLTRrV1lWeFpGS3EqDQoLc2FuWVVkSENiRXMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235917-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CNABEIf2BBgGIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CNEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CNEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "sanYUdHCbEs",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CNEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "sanYUdHCbEs",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "sanYUdHCbEs",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CNABEIf2BBgGIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "sanYUdHCbEs",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "6.3M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CNABEIf2BBgGIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CM8BEJmNBRgGIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-TIecmS8dLrc",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 10 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/TIecmS8dLrc/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLB_qu9EViQYaaZo867vEIubNgRLKQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMwBEIf2BBgHIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/TIecmS8dLrc",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "TIecmS8dLrc",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymBOs9k_Gq90APth6u5ah0f2kAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/TIecmS8dLrc/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CM4BELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IBxAjGt8PogfbDwrYD0FhYThFd0UwWmJzVVpHalpoX0x6TmVoN3VZRWJjbjJEQjFobUl4alNXS19NRW9iQVNKcmRtUFVqdHduWWFaS0poMWdtN2tQdlJzWlVBZVZibHFBTTNuSlBqNjlRX1NaaHgtQmN1emRvNDhIRVJvQXBNNHZDNWVEYjh2X01JTUEwTG5QX1BmZTBZbjhCZXExQ0RvaWEyNFhudVFCa3hMWE1rd0pwelFRQTBsQzIwLVJYTkRseTR1c0dEVWd1djZ0eEpmNzFzZHBzeDRCZldFYUxnZVdFTG5kRC1YVURRV1dvMGRuS1h5MWI5TV93bnhGc0ZVMGh5a3hkNHUxTFM1emhwd0hzc21GRXhkVEM0emFIOFJLUG9ENllFT0lfZzN0WHZSdmI4NEFSOVF2T2Y4QXpNVVpQNXVJc0ZIZnZGVHVta2I4bWlIY3pYTlNJNFN0eXJwMUpiTFhVc2pTejlWclFoWDg2WW1LaTI4Q2dPVkNQVzZRT3prRlhjdUpMc05NZ3Z4RWFjRk1zUE9neEN3d2lsTUZTVjZjR0Nka1R4X2xrZVcwMWFXT0xseXRYeVpFbW9LSG9fSlJnRTVvWGltZVlQTGhvZkw4QnduY3ZfdTY2ZmRGQ1pFTU1Kd0dvVHZSaE1OejYzaEh4SnpqWDlmUkg4UEhNQ3NzcGJCNWVQaVhEY25JZGpTX0xGd3ZFal9YWlRXNXhCMjRQbkpQOG45c0gtaHY2Tm9ZUC13WndoSVJna2NQSXlYVVdEX2lzZ3E1Y2RNVlBvb1N1dUsxMkRDNWRwazJBVlpabU9uUFRoMzd4WFgydDlqZVZVaUw5N2pPTzNwTmlOcnNWS1dCNWNkZlhnS0VybmxBQXNVY0x4WUJGX0VuX0xQM1p1NzF5RVpxOEJxTHdwM2lXbTQzOVctSGlBRVpfeWE0SXlxSjZncWx5dm9MT0p5VWtwT0pic0VRWXctTFlQR2s0TGMwUndZSWVsSkgtdTVITklVenctNFk3RVd4YUgzTHNYZmtBaTdpd0RkeXNhZ0NWTVBLUkhBbkFDem43TzJ1MEc2S0FJaUdGb3ZZR2duWWdyaUsxTjB4WGRvWWVqbjBSSlBvOXpLNWpTU1FHMnBLM21JYVBWQnIzUEUzcmJLSjA2ZS13Q0U5R1Y3dGVaU3BrUWFnZzRDZUs3SmVrdUMxeHYwVy1ldWtlOFgxejJ0ZVVyVFN4TGtvVFpIaHN6aEJHM2gwd0ZtRXR0WlNaa3RqeGdubUhiNFlBVFdvUXdpMjVCdnc0bTJXSENGY1Fjdnl6cThmX0FmZU5KYzZZNTZib1ZydUhkVVRaMVYxcWRFc0VpWUsxYlRkREZqOUlvd2xlVWZHUVNzdldxMUZzTklubkdJYjQzLThWZ01vZEtxTlJCbXhtRFVCMzhjZ3YzWHQ1WnUtcGtEVW1oNGprMGItVnJFcXRjdFhRTW9meVo5TV9SZE44UXEzTE9BdjBhNC01WmNpWHVVNUpPT1ZDNC1YLWZwSGliV3ZsQXJ2bHdoTXpzMENRbXRFWll6WWRYOFI2Q0dVUTdmZjVFRHdUc0xpRG0taVBRQTZVQ1FYT2N3UEg0OWJaSjlvakdYdENHSzE5QnhHdDl4dVNMNHJLTkJvdEtNX1N5QUFqdW0tNkRaLXlIQ05yd3ltUDFQb2lrbHFwSmMtZ0NNU3NBcEQ3SEVzSjRGSlFPdmhOWFdSSVFPaDFrcVlPX295SEMzZW5GSmtUTVdJWE80TGhYejBRVzRWZGdmTVZyQzRFNXk3UU5QVTkxR1VnMXdidGg5YUkxaDJLLUNlYnVfV0FlSzh2dWxxN3psTUxQalN6R2ZPZ01yU2V4LTVaaVBOQk9lSkFfek8zZnpYbzRPNWJZZzA1UTBycVBhQVgyZU9kakpRYks1VG9wY01NRFZWeG5rZ014dlR0d3BwREhjWWxFMnFrNHFQY0FXblVmclRjYWIxLW51eWljNGtZUkprWk1qY2dOaGpKa08xY3JPN1R0eTBpY203eUlpQldxX2Z6dUp4c2d3YVlJZDNKUGI2dmYyMVlKMFJpVnpJQjlrWlRVbzVDMFZIR213RVgwcXBEdXFhOEU3U01QZUFraGk0NXJmOUVwTjk1aGhuMy1keVlwUjc1MWczVlFSQ1M3eGRxOF9INFMxZEYyRGJPTDhSVnNOLXI2MDdPSDY0dVNULTR2VEJfMmNKWlZUVUkxSVdLeGFCU21BWkR6QWRUTVUyLWpFU2NZTWktVG1WY0NfZHVMd2lwYlJBLTJHZUdmNkZYbnNDNDJRcjZjZl9qMGRXR05wMWpPNzBQcGdhcmFmZzdlcnhwVDRNYjFhZkdkd1U1Y0plSWRzYUlIdnNHQ1NuelJhREpqcHB2aEQxQy1XV201UTJ6N0xEX2ZVajdraWJyNHluYjF1U3pfVm5RdndGNmxaOVZVdlo0Uk9VbHUzY0dFZ0d4STVtQjVDOXF1ODAyVE1uSm1oOThxa09iX2RrUG9kVDVobVFYdEM3SlY3SWtXX0xOQkxkb0ZOTjhNRG5VQ2wyWlJFUkF0aHlpdFgwLUdjbnljLVBhS2VTOGsyYnZpVHB6RzJEcEhRWDlMQXBRTFVLQ2VqMUp4T3JRUUNHa2lqVVF5MUhhMGt4STh0VENFVXBGLU92WGQwbGxpc1VlZTlLbExQNXMqDQoLVEllY21TOGRMcmMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235918-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMwBEIf2BBgHIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CM0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CM0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CM0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "TIecmS8dLrc",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CM0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "TIecmS8dLrc",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "TIecmS8dLrc",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMwBEIf2BBgHIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "TIecmS8dLrc",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "10M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CMwBEIf2BBgHIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CMsBEJmNBRgHIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-amsB4iUvxos",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 6.8 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/amsB4iUvxos/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBtr0fEp3FRrBWkCpP9Q6oxIdyCYg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMgBEIf2BBgIIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/amsB4iUvxos",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "amsB4iUvxos",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAKd5wcLBasEiPTEIsmybUYkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/amsB4iUvxos/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CMoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ICBAjGt8PogfbDwrYD0FhYThFd0ZiTjdkNXFaX0xIV0FiU2ItTkMzRkVWemhXUnpMYk5vX1pncFZNYlhnOG1VQ09TcXRGRmJXUTVMZVktZVFoek1TVUVzdHFPTFZBbWRSNVdEVzVERWpMbUNNajhvVlB5Rk1vTXMwZDhSek1vOXZGRUplZzNZZzlsWXA1Qm85LWUtYVpsTklNWUZCQ25uc1ZIWXU3U0hoUlNENm4yczhLSlBPaDVCeGxvVnY1NVdmYUpicWNoZUJGczRLRFI3Z0owam0yVWZINV9jbnowYThzUGpRSnhKSGxIYlpoLW5QWjg1aGVEN3BMSUlLU053N3h5SEJiM0FXdi1oeGdzQXJVZ2RoMkpVaXdmY1BEeHk0dFdEVEJzc0FiWTFFV2FwNnhDc0I4SjlBblB0U1FzWVpVRjhmcUtUdV9RaERDd0NUSE1QckRMVDVkeVpmdUhjbmZlNE5mcjRDVloxYnM1ZEluNWJRWmJiYlBMWEV4ZVYxV1BCajRUVlJhQ2hmRGxmdGFsQXNNX1dmOERtR3dBWmp0cjlTY2JodzBwc3FHVnRvU1ZONExRd2NzRXFnLTQzRUtBYWpVaXV5dUFSYUhoWEhYRjNTZkdseGd3cDYtZEZvazRyRmlaODNNN3BqTHJheE9KN0RNWlVXT3FHMG9JMGRQWlFDTmZMRkc1NjdGSkhJTnJoUmtPZGNqUjFLVlJRbkFIemxKa3lwVGpNMFBYTmlXcXVudi0zdmRJREwyV0R3X0hDdjR1bHdxNVFnUzgzTXRSQ1I1RUtvU1poY0w1eE5WTUNjVUlyOVBmbDJqTDEwanBuMTViLUNyZkJwZHRIX3VaV0tJMUhmN2ZvUUJkTzlXeTZ6bmpfSTRVTXNibVFhSGY0eVdMcThlaUJHaUhic1QtMm8tQ3IwT0g5azlBdWU1XzZNdHlIVXZDNXFmU2hfZ0FabkpPOS1YQVNvNGRManN4Y3IxdjFEVkRvRDNaa0c5MmtiV1ZxaEljNG40MWpJd05zUHRYUFRhV1c4bU45enpJYXdFZEtlUnVNWFBnc2t5TGVCUWE0c3ZrUkdvX2FiQ2RlelZ5UkVsUzZ3ZnZhYWFkZGVwaFBUNjIxdzFWTFd3c2VfRkxvSkhGeU4tRTR1aDBHbE1Rc0VuTEJSaUJQdDhHMmhKcGVmZVVsOFFjX042N0xHXzZzbjE2clYyNEVESVFBLWxveWVyMDRwSERCQzB0YnZTcVNyWFF1S3p6UHJrbklUU2p4d0Q3M2c2T1dmM0cycE5JbDVpUTd6ZHZtYW1tbEpiXzYyYVZObENRY1UtUDRuUlBxdzB0Mk1Ucm5VZTNxSXdkMXI5QWJVWVRBa2hUTE9TYUdLWnQ5WTdNdnhza3dwcXBhdUUyUllmTlRJNW1hOHRRZDdDRzIzM2lNMFdVOVNFY19PenJUQWV1a3llM3B3cmxGa0Q0aEUxcTVkWGhqZDZRcVZmNEtpZi1GN0Fzem1ZZHFET2dZb0l2bmN0anlheEFJOWt2Ti1FdW5PUHA4cmRuRkcyRHIxREp4ZlV1SlJkb25YbDkybld0bzJEUGE3OS1aUDEteVlrREkwbDVUVGQ3QkZDNU8zV2FkYnA5N0lRbU5ZQ0w4R2Z4OUg3N3ZBaE5GUE9WZzEtN0lsMVpKRFJrQ1ZhaGtHQ09qNW5tT01ldUdrWGV5TU9wMjc3YWdjZGVpNWNYNGdJWVhVLVhaSUFBM1lYTlVaX3pjcGthZkJtSldQT2Y5RFJjM0ZqMmFvRXg2SnBlR2hyVHJQN1VSbnpZLUREckIzajg2SjVBR09iM19ocUswQUxpMXF6YzNhdjMyNGhOSFlBVllLczRMRk1JUmFlci10OEF6a0xXX3RtR1MwWEhhNE00eVRvTUVjcVQtMnRsdWNEX1JvV25TdFluandyTDBEZG5PeDBjbXBWX3ZFUWF2dEJxRkF5U19PSFlrRXFUV0g0RXd5Q0Z4cEpfMmJ6S252cDhnaW9CRVdxeU8xX2steUl2eEJ2c2taQ3JNb3VJTlEwUzh3VnNZSjhUNzAxZlpIVHdpRklKTWRIZmhINnZCZHRHYVI3TnJoRUtGTWZ3ZmIxSS1SZVlWSDRvS3FUNUhLd0prY29OWFptc3I4a3VmaG1pelV4TzZRRVlrR3lZaUV4LWg1SUtyVlVDLVlteXUteUFxZXh6b2M1NDFZTThzaGxwVkJqQTdFQ2xaWExmdGpidW5FTloyVDNPZzJoeFpYdE4weDFhMzQ0TWNFRnUybUhxTTR5eUNoYmhncTY2bjdQaEZ4OUpPUUNMWG1VWHRqaDdhMHU0QURIMkZuTGhaUlRNbXZOR0hjbS1pd21pTFh6QUFjNkxfbEE1UTN4Y29nRTZlV1VxVDNkaW9SaFl5eW13Y19jZ29BXzFuTVNQM1ppWDVpV0tBZGFnQ2o2VnhSN1pBeXdiQkRzcjljeC1yU3JWb29MQ1padTVvSGdINURKbXJwalFFQ1ZXSVJuODU5c21seW84SU12NlRqbUNuWlQybjB4d3NRM2ZBamVfWTZEblM5Q0lER0piWElKNnlLMHYyS2VRVWZlLTZ5ZUpyYXBTMl9zVHZLUnVJUE1XQnpocmFTRnZoemhWRHRWcEJubFhxVWU4UlJsbklxdjJlbV9sUVkzMVU2cktOWGFERF9oNGdaNjFUc2MqDQoLYW1zQjRpVXZ4b3MqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235919-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMgBEIf2BBgIIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CMkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CMkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "amsB4iUvxos",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CMkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "amsB4iUvxos",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "amsB4iUvxos",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMgBEIf2BBgIIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "amsB4iUvxos",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "6.8M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CMgBEIf2BBgIIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CMcBEJmNBRgIIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-Agqpksy9sKk",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 4.9 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/Agqpksy9sKk/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAP3vQPYYJnRW1aMjjcI_fTHxVXqA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMQBEIf2BBgJIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/Agqpksy9sKk",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "Agqpksy9sKk",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymB2Y2JMvv7bjihqOMQxB_DYkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/Agqpksy9sKk/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CMYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ICRAjGt8PogfbDwrYD0FhYThFd0d6b2QxX3J1TzNTZWk5NGZVRl8tZkNHbG1mZTBsUm9KVXJsUjVZT3c4eGRMZ095UmROWmZjQzVIZ2ppQWxTYnRPOW1vbk5GSXBIV3kzdDVYS1NreXZwX29CLWlGaHhybWpmd01xWmVfZUZLSDV2QjlpZ3FSbUJqMmY2TVNQa0Zsc0JKTnZ5Y3hFbHh4WHB1QzVCaFd0a29EVWZ0b3NQeG1IWl9LYl9jc2NNci1jcmJIN2tMQnhxYXlnTTVEdDJMTTltRjFIV2E2TE9CNzQ5bHJHd3BxU3hsV3dmODAwbUx5d1EwNDMwb21rbnVDRnJndHk4RjA3dFJYa3MzZ0YxMVlkcjE3d1pWS0xiS2lIOGNLZmVGdWVRYVNaZ1ViWURHdDA0WUowUVQ4Qkp0RGVNRUk4RHdJSjBqZ1A5MFRYOEV5VThoeXN4M0t1TllaT1M5ZVQtbzJrQ3pBNGI0MGpQMkJQR2ZEZ3h0WDNndTIwWkV0U1B6ZTgyVFZBRlV0V1E5UlMzWjAzZ0ZVRHFUY3pORWhTOC1xNGk1T1N2bmhyMjFPSVNpQ0VaZUdPWC1UQ0FzaFZxaUg0TkNPSmNVTHlaaGg2a1dQdENmSkd4Vjh3ckNTTDhUMDFaNDRjbTY0b1FFX1B1NGtHb05rdmtSRjZNWGFBaDNpM0RNNlNvMURSd0lwM0JTSExjWUVQaUpKTW1MRnoyZUFpMUwwRk9ZZlppZVJ3aXV6d2RQM2lwY3VIa3oxaWw3UGtHZjJkWUNKaUhEZUtPOEVncmsycW5MODV2d2N3d19ZaVpmeTRYb3E1V1BCV0lLUjRWMHY3bDkxcmNpVFFKS05URWxwZUJQSjRxekFkY3dTdlVxN0U4aUFCTE4tQ1N4bVpYUHV3dkVvV3ZxaTNiSzl1NHRHM0VyRWstb0taSllCVUJpa3AyQ0U2MTJ2UFAtcDFvdzFMeUlZd2owRG1SMVpKOW9ORVZtNkhmaWFyWjQxTUdSTE50SHRqT2lrNVplSno2ZkNTaWJLdUZsM2VlNUhzRGM3VzN5X25GRFlkblhYa2hLb1ZGX2JKbE1MMVBrdmhoSTFrRFV6SnhPZm1PNmtXc3lvY095WV9uTUYtc1hteGJKbXhUVUZUV1BYMFZab0xIMFdDYldreW1yVWlpS2R2c09GaDBRUzhRUjJDcEQwdlR0aF9ETzhQSXBLNWtfRE81RUcxcGVadnl3b2ZwRmQ0SnBlVzFWOWZhaV9Fb09OMTN1Z3VPajBLb2FwR08wTnpvcUVubFBfb3lNNUxVNFdEWkJiQV9wWkxnTzA5QTVQTW5ZOUFpOFMtaE9RWlJJTU9mR1BsQk92ZFNSam9LQTBtbjBjeWxJc19iSG9Fc3oxa3NFczlFZFNJM3RSanp3VUZScmpxRHZudlFQMm1ab2VoQld4T3R4RjdwajdIOVNkWXFodEZ0c3Y2NWJ1YWpwV0o1VGFneWc5Nzc2bHdXeDVLQ09vYmJ3SEk5TElPM2VOM0NRMmNYUWczYjhmWV95SjE1cVRsQzdKYzJHdXpMVl9lT0txeHNkbzRtZlZCRzhheU9Fc2d5aU5TX3g5RTJ5dTNZeVpTVU8wdXJ5Q0NoU0pPU3p0WnFGdUczcy1YbHhkZTk4SDZhMnFEZjFyLXRoQzhud1BvMzc3czZVQTVHSzhTV0wwYlZ0c0JXdk5FaFRrNFlrelZlX25rSEZXN2Y3d0ZNbEZPOEVFR2xHTVhlTHppVHR6VjhHRWJDbE02OUd4dm90S2R5Z3ZvYk1ONlU2VmdjbU90UTlxaWRRam9nQm9YR28tN3VXSkt0dlNsc1ZucGVXTUdJb2JkbHBma3M3bDF5TEQwS1k1cVM5RWptRU5mWUZ0UmZNV21CR1RIMXRQUWRpbjJDWEdQMWg0eXI3V21zRDVQSjhzX2VXdFNJTF9Lbm5yMkRyVlRtN0lRcXRSMGFqbXppSUduWkk0QnAxV0Q1a001aVhSVWRmZ1FYaUNOXy1XcTNhbmNPeWE2ekNGZG94TFYxMGVSQ0tIbTlpQTZhbk56MFpxRjByTGtqcEJLWG5iMFVBTEJpTW9WdHBNc3NDTVpXd29TZ3p0UmZmZkxvRFFzMjdRa0pzMFBWSEVoSnRJcHZIYzZjejdzNHpTdzRWYTQwREg5Q3BkZld3RjlCZVpvU2tFaF9GYlU5aDB0WWxmc0taTzU3d2UtNGJ2RGdUZm1MQTNtRFA0T05BaEhPQUxmbEdMV01fMDY3NTZvY1ZHby1ZcXl0M1BPMTh4OTVERjlhRHdVWk1mMVVSektUY0IwdE1CTDVVNk9MaVZLQTJTc3BDXzNMVEJTMFFSeVJHcnh1TWEtRzFRU2dwSXJaZmVRTUQ4a25sellrS0RNS3dIQ0FMOTFLdG4zYkFDd1ZLM3hkTUhFdWxRRmtPYTA3UHRQYkVPRm1GN0JDa0dQOXM4T3pGbFlQWUp0YzNjUGpkTUFva2ZPdHNWbG1UVjB4SGVCVnJKZ0ZCamFCaUZTY2xJRE9IVjlnR3RmTHowa0s3U2xrcXV4VkhwOWdFU0pxdm05MjdpdkNhZ3huQVpVR2o4c0c0YzJiMkE0ZnRjMGpIQlZXdjRKTEVmb1BHV2R5VXdNNU1tMGZ4TGdELXdIdTNhQ2g0MEJLVU1qS3ozWlZIeGNJVl8yVFBnTWUqDQoLQWdxcGtzeTlzS2sqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23591a-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMQBEIf2BBgJIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CMUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CMUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "Agqpksy9sKk",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CMUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "Agqpksy9sKk",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "Agqpksy9sKk",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMQBEIf2BBgJIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "Agqpksy9sKk",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "4.9M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CMQBEIf2BBgJIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CMMBEJmNBRgJIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-Ro2t4N9Sfkg",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 3.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/Ro2t4N9Sfkg/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDfrF9M6SKzewS2C_2Zp5mETRrFUA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMABEIf2BBgKIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/Ro2t4N9Sfkg",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "Ro2t4N9Sfkg",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAIanlRtB-E4jkIS4XIvWhRkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/Ro2t4N9Sfkg/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CMIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IChAjGt8PogfbDwrYD0FhYThFd0g1UEZldWgtbUtnNHpBRjNHQ29hYXhMRlNvY25RX2VpSjBRSDViWUM5TnhCZGZ4aXpQdGJGdldkbTJkTU52TG03VnRpVXNmOWVuRmJzcGdpSklLcEFZZUt6ZW1sVXZBYjQxWTY1dTVWZGhYeEI1c0xPSkpzeFRsODFMeGlhUDg2ZV9CX1Vnd2k4U3VlNEpsd2NNdkgwdFZmZ1pXNHB5cnZQTzN0ZzJfQjdRSUZBc1E1QUdyc2hkZ3RMOGRYMmhXX05fdllodXpsMnFVMnA0OE5iNkUwcTlJZEV2ZENrLWxtUFNVSGNnNnVDRTlaOHd4Zk16MlpULURfeXRGUTJiU1dMOGUzUE5CRVZwdzdXb1FiMjI3djU3ZXdRbml6MEZTMUt6V2FKY2x2cVM2QVBEY3A3TGZOSTBjc2kwQWNNemdaTkp6YVJJb2paNHdFLXJFSlB3YjNHZlBWRE9kakVhYlh0d0FJbFpVZGtpMklieDJ5b3pjUU1STkVNOTQ3eVBvc2V1YUJDQzktTmx6ZzFGS1VKSFM2WDdSa25tYUFENlRJb1R4bFlQRGc0am5DWXpGT3RvRW12NVI1VGhyTnFLMlAxbC1DNWVocFk5VzZzN3gyTklwSEpEWmJhWmNiUU1paDRYM1NuZzh0a2pjb0w3cExyTlE5UDhxSEVKMXBQUVJnMUxFeUh0Q3V2UUFMQURCMl9TZkxJNHJEdjhEbnljV1hKWnNMVWdPWUIyWmY2Rjh5YW9oV0h3TWRwcE9LQmVNeTd6WjQzb3lmM1BWMUphbF9XZXU0dTNXUEw1a3pBUHVNWGhBQmtWSGVXYTUtN3pYcTZDcE5yRkZ3N1AzaEpGTHI0blZnd3dDNXpvOUNzSFNYWW56bXNQTXNsNGNCenBXeE5ZZDM1cXpXazNNNlJ6VEY4SjI0Nl9TYlQ3UUpDTDNtdVA0RksyQkt2RkVJUEFJb29YOGlZTmlXSEY4LTMzX2xHVTlFb3h4MDgwamVLQ3E1NjF3U1JLMkFPcElpaV9Dang0SnU5MlV0ZXVEVndhczI1dGowU2ZrZHRqZXFPZHJFZ01nYTE1cWJfRVdVTVhBYWt1c3VHMUtfY0h1Z2xOVy1lZlEwUEQwZjEwWlgtVEZYb0ZyV3dlczM4bk9QdEg0NkJSOE9VOVBIeXNDZzNlQjM0ZUZsdlNBZkNQMExNSHp1WHgtNUZuMS04aVV4YjVEWVhxMFgzQy1QbkFFY2FKdHBZd0JmUElwbnJ3RUxtYlcwNDVaRm1Pczl4UU1oVUdfcU9iOVZWaTBialhXQmlYa2Z3MzU0TWMtSTR1cXdjMGVZdjVhRV83SXdtVmpkZjBtVXQ2bVM3aEI1c2RHR2FUVGttNC1JZHZVT3g2SGZRQUdUUzBpNDl3SkdSSUJEdE9ZTkh4eE14cm5ralhhaHRWZkd3N2lJSjl6UjJLMGYwSWFTZE1pZnZ2eFpKNnlpZVZwXy1qUFBRd1dOd09zRWQ2SENFbzNiVndaelVqV2ZUbTk0eGdyV3VPcUd6a05YQVJEeWh4MWxVa29VV1JkZE1RRmthcWJ0V01XNWloeVUzMnN1SUk0U3A5TjRMaFpHMDVjU1lVMUctaENuM2N2eEdQOFVHd2NRSU0yTnJTSFVZdGJjeWlXMmlucDljYTFJUVFPaF9JZTJOVXA2TU11UHdLdTQtUTBocUZnc1E3QXh6UWJJQ3RYelVzd2RwWGNVdFVxMzNuTXJvMzlrdWFwT0VuaVI1d0FMbFc2M1VZOG1zdjNuMktmWm8ycWxPeEFWdjNvZEl5S1lOcHJDNGg2YXVKck4wTG4tdC1HbWRXZ0ZMeVd1VFhpeEdwSWx0Z3BqajVvWmdKcXZfVlhXU2ZuNGdxY09jX0Y2M253cnlCN1ZnOWdDamg2REJrbGkyTnRqVGR0OVJOemNjdFVVVzJ1ajlsVy1Xd2FWenRQUVYxOXVTMVhYYUVRRlE1d2hwdUFGdUg4d09TcjZ2Q3dXTlFlcVlyRTdQUlVPQVBRWVBpZk9aYjJLcWVqVkhMbkdsSXZOSmlIaURoZ19lUmxRWjZITDJVcHdONjhQcHhiSVBBUHRDWUE4TkIwYmp1RnVkb1RzSFhUOFk4WDJQZVBWYzkzRWJQWG9zTTdPc2N5RmU3b0NnVWpxd3ItUERGQTFyd2lCaTVuNE8wbmtrT0I5bVJPUG8yRUhBSXpyQTBfMk9yQWFqTXRvWlVncUpMREpQaDhrOThUdXBUZXprYUFudEJrSjlLMTFad1JJWUM0d0xUVWpCM2d0TEFFTUpxS3BvNWlfUWhUWHVLTXpQa0dHWEVZTzdLMHMtamdZT3lJbFpfWlA2UGdmUW9BdFdLQUVobGxQQmJ0X2dMcGhDWTFZU091NXQwVVdhUzE1LVV1dEtkMmh6bkJqWmVLOGkteUVYLWJLNHZGdUV2YjNKTk5tV2ptS25zUXBmRXJncWlDWVV5cS1OSzljbEdqWklZU1dYMTNqT2Y0TVpXZU9YdGViQmxva1RJYkdTYU05eWxXWDdPNXJ3N0pOWkFoVTkyRFB3YVZ4eTIzRHRDWFplUTBkeDBhMWZHcl96dVdyMHZHYTBNUlNlMjB1QWRvM1NYMjRjeUczQVdqWFRVOVdqS18tRU0yM2RhVEF5aUpPUHJIMWtKQlR2bVlvd3kqDQoLUm8ydDROOVNma2cqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23591b-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CMABEIf2BBgKIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CMEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CMEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "Ro2t4N9Sfkg",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CMEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "Ro2t4N9Sfkg",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "Ro2t4N9Sfkg",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CMABEIf2BBgKIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "Ro2t4N9Sfkg",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "3.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CMABEIf2BBgKIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CL8BEJmNBRgKIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-P-W8GWNzi_c",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 5.7 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/P-W8GWNzi_c/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLB5EaCCQfO8S3OK45YBLHxlJgcrPQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLwBEIf2BBgLIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/P-W8GWNzi_c",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "P-W8GWNzi_c",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCtY79684lvDncgKo2AhfQxkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/P-W8GWNzi_c/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CL4BELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ICxAjGt8PogfbDwrYD0FhYThFd0hUb0N1eG9aWGpYS205RWx4TXhPcldCT21QVXU5S05NXzhzc1ItaTlyRnpRbnNzOU8tMWlHWFBZVF9rWnhsVmJDZkptVzd0U1YyTUJ4NUY2Ql82UlNyS0YzWFBnN0dhdWIxMjlDaFp2R2pSZ1dSRTBjZkNOZ1k3dkRVbDFoVkFYWWVfRnBCMmZreDFZMmgybHUxblJaX1VIOTlvai12alU5SjhnbUdXc1JqdWRRU3dxSW5ZSzcyVHNDZlc5UlJIUkdxQmdscTVFOGxHVEJCR3pmNlFXMVROaGJlVWtEQUwxMWtNMzZfX0ExV2E5SDNIYTRlSHRJOUY0d3dXWE85M0xLZzBMNl9qR2JjRm1jTDlNSGlJdS1rVk5qQmhXa2NKV25RLUNCZzhKdmF6amNISHYwVXVpTERNdGYzeWtxWjhPR2pOelpEWTBrYy1OV0ZsZU5LVW9RdDhMT0w2UFNuNlgzTmZCM1dBdzl3WjNTUm9TaUxJb0JRRDlEMXlWbnhxM2VldU92NWx0ZzN3cFFjNERkdFhLakRiM01vME5VLUpZbGJvRE9SSXkwczVteFpHR2h2SVlFdU9RZ1ItRHRjVldjR0F1N2hCY0J6aWYzY3dyM2NFczlSSzJKclhtX1pCM1UxZGVnU1NjTVhRa2hiWk43dkFKRWQzeVNwLTFtLVQ0UF9ZOWdTY2Z0cTdYSWxLY1ozeW9NMUc1c19Ec3NmY25VRzVkMWRqTG1nbE9TamVUeTAxOVoxZVdIZXhSYS1PTmM1MFhLM1NXYW1aY1kzbmFUS0M3eVBESHN4TEUxaTZRbzJzaEVMVE9NclRJdUo0dWVNZXIwb19ZNEhnaGR0dWxBeEczRzNENGU0N3BPeWdfM1c1WU5XRzBtZjFKMDZDSkdCNWpuRUUyTGstVUU1YjZncHRoQU8tN0NWdE5HRDBnalNfd0RJQi1LSkNkRUstdjFlcXhNNm9rQXdsb3hMLVR4Mk56a3pza3k4dHgyWUpJMlFQbzUyNGpIX2ZzUXQ0NmFtMWp0WjY4QjFUUml0MFk3TVJPNllYc2MxRlFGM2lYX04xNHFwalJfSTRocENuZ1ZVY29MaTV2WmVyZGFXSXNJSU0yaFJGMmtsQWJCMUkyeTdvU3p0QzFIeFVzVmR6d2g0OU43ck5lNW9SZ25PY1JlSUVKeFFiemdpUExERTI4cjJIUVRFVElJQmRMUTBwUk1MT2xnWHAwMVdjZ2J0S3YzUi1QdEZsZ2xBM2ZmRWU3Z2MyaFo2MDlUN0poTHNWLVVSUlExZl9YT05zQnlNSjJGNzJEdHIwVElmNVdIODBHWktNSEszNGhraVotZjVsLWs4clN4NXg5RzdYUmVLeENzV0FJZzdWano3Y29mb0JYSjRvMmdTNE41Q0IzWFg0Zlk4XzZORHFRTHktbS1XcXJwVEV1dEZ0eUUxOHRCbEp0em8xb0JLX3pWX0RqYXZyZnFvOXZYNy12V2NheC0wa3RpcHJNZ09RUW1sMTJSZEFzLUpvUExFMzhtc2J4cmJoS3Z1aWxhaU1fY2xrbllpODdnYzd2dVlJNDhBVHJpQ1RYbEZqWllQaTVUMHF6WEYtUzhQQktMWVh4UFZvTy1zamZlZmVJSnBRdjd1Rm5ydXdGN05tZW1RZjRMUmVqb01CYVU1dzk0UXVBVUxMY0h0TVlrdjRCbVplQmxRNF93MVlxRnUxbGRTcW1RZEtLcXhDMjdIRnBIYlppVEFKdC1zUGNNS0hjOV8xQndjdXgwX25JbFNLajV1RWxjV3RVMWJacUxYaG5sOVdYZGhJSlJUU0xxR1RnQzdEZHlLYWJZRHlVTnk1cmxSblYta1NOdWFuQU1URG5HSHk1eV9ibzhJUmowOERPWFFLTEJvM1YxX3VKQ0FodnNTWFhzNi1KYlNnWFMwRHNlc2VYSDh3bWhCRnlfVWU3YnVlQ3VNcGNqemZTcTZhREctRzRkLXVuNXNWQnlualgyZ0tENmFmM3Zpd0Jtb3NYTXZwLXRGUV84QWw5QVBOcTlGaFhsdVBPemlaX2VrblBVcGplaXVxR0lHRXhvRUVRLWNzZUJwQzFIeHQ0TDlBWExBRGtXQ042aU9Dc1huY3ltaFVQLUpwRzJiNnpxbHllZG1PZ3daUDA2Z29fRkVjWXg1eFpEQmxQSHJpaG9wN1F1RXgwU1lEdWtINDJUb1JiTVZwMFhweW8tUnA5OGhOeHRFOEUxM2hPSVdWQVM4Y1VwQWI5S2QxRWZPVUxocG8xRFk1MVN1QWxOZGVMaEVYM0RxOGZsdXV1NmVOV3VZLVdsMWZYd2lsazRGY0E3blJic3hwWmppRnRBV20ySzRqR195Y29Id1VYVHhmejNSam00bUh0VXVscFpjcjVmSW84WFRsMkNYWjBjQTF0ek8xZUxkZWRwUWFhYWh3X25RaTJ2TXJVOXZ2SVhEbWVGRkJjQkgwQ1VjMHlHdndremVyVUxGd1EzNHBfek44ZHlrNUh6NVUtTk9LZzdES2xSUXhNNnRnb3JjQWtlYTUyZjYtYXRrWHRPNUdna3dFLWJmV3JXbUtWQzJhUWtlc3FyVjByZHpHdUZLTUhNT0VxOUhUZmVaaWMzNEplRVFiS29fNVpyaHpXQXdFaVdrVHBIQ2pMRi1YV3R2X3NuOUZfR3cqDQoLUC1XOEdXTnppX2MqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23591c-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLwBEIf2BBgLIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CL0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CL0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CL0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "P-W8GWNzi_c",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CL0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "P-W8GWNzi_c",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "P-W8GWNzi_c",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLwBEIf2BBgLIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "P-W8GWNzi_c",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "5.7M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CLwBEIf2BBgLIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CLsBEJmNBRgLIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-kDicEuEyupM",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 4.8 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/kDicEuEyupM/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAKzirLE2EE0Tt8YTgaXsTdzAcKtA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLgBEIf2BBgMIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/kDicEuEyupM",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "kDicEuEyupM",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCwteeKsUQ5Hw25iNZIcflZkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/kDicEuEyupM/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CLoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IDBAjGt8PogfbDwrYD0FhYThFd0VQV20yV2dHN0NpSUVUVXdkZkJfQ1RORjNBd2VsY0tKQVFVT3FocHdIdld2NTNUVDRnWGUwWjVPTXJnNHN5UkVxeVdpdUVBcnpKQUQtN1FkWnRzRHRsSk5oTDhHQUlGR2lQM1EzNTdlQnpCTl9Ccmt2am1lN1BMdXlHekdUa09aeHlDdDZFN1dUVzZUTFpxaDViZ3Q2RDc4djYxR0FJWG5CUDF6TEVNa202OF9SN244SFhZY1RRcXZCWjd4NjZ0TVVIZElnRkNfdWJQOW5hQzQwbkJpTTlMeExVUjUwTjZhYy1jbVhLaWZrekpJeHVkTWxKSWdWT0s0SmZCQU5vbnUzN3RHWENyTFo1WDNmWXdCVWNRbW9MMTdvcXBtYWJCbkNCTFJFdzM5dHk4R1N2UGk1OUh5ekk3dEFlNERNaUdCTVpXWXhkcDJmMElDS1lwcGdNOUE4bm93SmNuWjFtR2M5SG9IQ0VnNnY0TC1lS3hyTWJ3TDQtbEdYYlo2MWJFM0tMWmlnczBtRHFodVJPWWJjcmg0cV9BcVU5Z2RLd240c1VYaHhZMnNnZTlnWFQ2UlQwVFJRR0I5Z3M0NDJGTkluVms3Y29MNHU5LWhTVmN3Njk5bzNBRDVXRUdNWEx4SHk0U1EwRVJsa0RXWHNBaWF1WEQ1UGJ4WHBEbXh1cjRGUnR0LWFKZTJUWkE3eVRwR1BZekR5ZXBicGdHdzQ0alBybGh0VjJDcm1GQmFjd0tXdTM5N2RHeHVwZzY3U2hHbWhwdFNlNDRUdWlLQlk3WWR6RkcyU0hNZm1uVnFBaXpPQlB1RlVxdWVsSDJ5cW93VDBraXQ4WVBwRFdDcHVNc2NoLXlBSVpqVE5XNmZPbWo4dExuajNOTWVNd3A0TG1qN3MwV2F6aWNZY01yMnNaanQwb25rRjVmX2UzQzg0NEZDSzZFTjROQUFWVGtUOHEydUx2SVRueC1kSlFRTTJyOVFualJXYXk3MlZMODRPMld3ZDViWE9tTkVUbnd6V2FDRkVBSnRkVWRBS1JjV0pkY19oOGl2ajI3b1M5QV96WExWN3p1eXN3Q0xDLS02MVNiRDN1bnhja0FMRzJRd2ZxeHFJazlwOGV5LW93TnNKQjFuVDhUTWNDNGhBWVRPUzNkT1NLeGFLeDU5UlZWOC1YSWl6Tk5wMGwteGplNjc2RmxLVVF0REtaY2E5empqTzZ1N3NDaU1YejUwZFYtdWRxNUwtYlNIdUdsWlZQdENDVjZDcFh4NVpUZGd3aTY1LWVJck1sQnUzZEpUWkpmZV9BSVd5b1hWRm5ZcGoyWkMzWGZMUk9BS2h6Qk9PQ1lYRTdobzNSeGlxbjlzNDlTcXdMclh3RkJtVU9hM2Nua2JDNGV2eEVSQnZlTm5KZWJ6OUlGSEpPRkVYUXVPV3pjamxQUnppajhicl82UjZjNnItWU9HOTZsN0VxR2plZGNfbUVZQ3I1MURuUlVqNkJPSng0eFN1ZjNKTURLRU9GWG53ZFN3VXB5Q2FBWWtUMHlORk9ybHl5cFI2cy03eUFVOVM5cjVyaE5GTElITkUtX1YyckZhUU9DWnBxNTQwWmd3SzdhV0YweDYtUlVBN3AwVW5ZRkJ0WVNaanV5bjlLTkJvUnNEODZTQnhDWUg5Z2hrWTIzUlFYenNXTVRSLUV1bW12RmtnU2I2TzhxTVpQNjd6bGFHQjJGZEVfX1djUUZuOHNYMHhYVHZ0Y1pyWWs5ejdTd0tMNm44b2ZLU21kZHAzSDllOXJHcFNEbkxHazhjTFRiTVQyVzFtakJDd01tTFMtOE1mTVA2eW5XdXVBRUJ3Ymx0NUg2WmNvSVZibEc1UWtkOG1SZW1FNTV4c2JJLTRTYy1hVjN6Z1hXQ193dEE1YzMtNGZIenhBYXlRb2hvVTBERGx0MHJwejQzUlRyQnRMdzI5ckZWR05nZDVpYXVJa0ROYlZtampTa0FBcjJPVTBEdGZmN1lrcURjMzU4bFdBYllkVlBFVG5RUGJqSldtQTZJMEUxMVpCNlAxVWw4YkMtS05XaElPb1hnem5Wd1ZWdzRUQkNhLXAzZFJmZ2tqOVRlR0lVSFdxWEFPZ1ZQMS1rWmpKRjdJaDJZcFlPVHV3NFA2Q1Btb3c5OVBScldIa3NmbnVVcWdZSEVYOTlMcjhiY3dBRkc3ZGZXQ0lsS0hNWm9SeXNHSDM5dXk5MlNjbW9OTUhraDI5T2xHUWxUc2dUOFlSMEFSYlhNeG51aVp4LS03WUx6VFZEOVdpejdja3FlbXk1ei1vNzJhUmsycUFoRjh2dXZMQ2lvNVVnVmpmNWMyZ2dmYUdDRmM3LWJYNmo5OUhCc3RzR2NKWm14d0N3SUR1cjFKUW9GMTZNU2FmOVI4OGlSckhKb0tPZHVqdGROU2xCN3REMEd4b1gyZHZCNU1KOUs0OEVEajA4enIySUlzZWFrejBteUZLS1VqZVl2QjJuNngtdDVNdHlDNDFHcEZ5U0JwOC0zT24zWXhBUmRXZGE3VkJjS1JDNHpzT05ud0NxRTB3SDVremZnTUpQVEVkaDUzOTNuN3UwWldGQXZUaEpCcEpjNnB2UGR4U01UdDB1a1BYOGVpamFXYy1hSGxxTUJwcjdzeE5kYzVlalpmOXJtQTdiNkxkUXJGeWx6V3cqDQoLa0RpY0V1RXl1cE0qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23591d-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLgBEIf2BBgMIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CLkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CLkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "kDicEuEyupM",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CLkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "kDicEuEyupM",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "kDicEuEyupM",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLgBEIf2BBgMIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "kDicEuEyupM",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "4.8M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CLgBEIf2BBgMIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CLcBEJmNBRgMIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-KcZ3EdzJMNM",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.7 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/KcZ3EdzJMNM/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLA5JI1Stx3fqWkJnJFFy8x5Ga54xQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLQBEIf2BBgNIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/KcZ3EdzJMNM",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "KcZ3EdzJMNM",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDx2gfVr-8WreIsrqBFHYflkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/KcZ3EdzJMNM/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CLYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IDRAjGt8PogfbDwrYD0FhYThFd0hGYnBjX2ExWHJfX2ZmbkwzTzYwNkNNeDVIT3JkSmZ2Z1VLUUtmQkdOY3RWZkdnaGxjSTJZNFhqbDV2V0tRQm1VZlRaNVVyTTF1MGJzRWk0MWdIc3h1Y2JwRkhPa013V05DWmFxZVJsOFVjT0R2M3lfb1lkWFVQcG9UTUNEeFFaTFB3UEg5ekxIVGh6azhHUldLb0ZwOXQtX1d0QXkyaTlCUzJSODNtVmNzWmVCNU1mTGdmbUlGanRkOGVrM3lyelpQS2wyY0N0cG05MXVZbHRkXzB2ZFg1MUJVVTdBRE5wMXVSZklVZG5SU1FCWk9YTmU1UjFsa2M3YkczSmZGb3VBZTd1MERMMmF5UF9jZVdOSHRfUkt2V3RlbkFza3pNVHo0R0phVWVlMDBIQ3VnSW5pdG1sZlNfTmtjOU1oTFBJUUhMSGhSb2ozR3B3d2tHWlFULU1vSzVxM0JWMGFtWGF2ZWw1OWNVUDdNa25vUzl5cExvY1EyQldRNmNxRTBZa0hOX1dMUE9fTVE0dldIajNHajFvNEMwT29DRGRSVG11TkZlcDZseFVRUDA0UE5FN1NZRTNYM3liX2ZtX09zckZGTS15UlcxQVVRdU5FZUo2MGVsWE5sSWZxMWt2Y1hhRU9yemtCNzFsX0xZb3VwaEkwLXJRaktnTDloekk3ajRpN1lHdEczZF9XRm9lZ0lPWk9PeHpxUExkQncxNjFpMWZZcHRNS182aTA2WllwZVREZDBQaGc4OS1qQ1VlTVBmdDdqTjNPSS11NUpDMTltcVNPZXU1WndIQmhrajBfbGxRdUFEQlhtYVc0SWk1ZktyNWpzWk45OWxiXzFuMHZ3NmozYWlzVnRrTlZ3UVgybEJqS3paams3d3ZRQ0g4YW5kVE1IU3NkQU1Lc2J0Qy1ibkxENml6LXlCNGJ2ckxCampIWEx6TkthY0YwQmU0YzF0S2VMTmVXU1M1bWhKVDdtQy1nNktkMTdha1p4TUMzY1IyOThLeTRVaFA3RW05YzFTVTI3bGdPR1czNmoxSjd4RDk1VXc3SEtWWE0xVFYtNTZ4TDlKMXdzbEhtN3NVVU1zMDZrQkxMSGh3R0RuUUFHRWw2eXF4TnpoeWNzOVJHVUNmaGRUTk5kMGM0ZExoa00wT0dlWHZSOW1iY0hjT1VnbkZzT1BLRWhrOWVWN3BOdjQ5dC1FaDZWaDB3SEIydjNjb2hhMDVmQjk4cE1IaUhoUUtVTXRwUFhIZlUwUlBIMnFnUE9uV2FmRThjWC1ENGRtRUUwYjlLc25zaVlKcTRxLWUyaTQwTUZlaFJWS1A4NmU2M0dwazNjaFJlZUFLRng0MF85b25KbHh0dUM0S1lHUWxRWG81YndrM1QxS3pfZTM5eDZabktaQXZnN2t3QTFNT3RjOGJZNVJQZ3hyNGdhRWFiazlVaERZRjlSdGt6bUZwV0JxSVZaNVpMM1R0Q2NhLURPckNselhSTVBRaU5FSUF1SmpmNTU4bWNVSVVnNmU3ajU5b0M0MWdkUmNJblVTN3E3MlZsaXIxSVo3ZUZucXo1QnMyS2F2NmNGUW9hejVxZ05iZXhWRXFDREMxMjZLbk9SaUUxTmpqUjdHcldZSjBVUWdKamVYM3VJSW9hRV9qLVQxajB3M0RPMmpzZnNXT1A0YUprRXVJYVRVZTN6QWJ4Znkzdi1rUFhTMmxBcHZIRThXU1A1Ny1QcE05RU5Wa2hhOVduVm9YS3Y1X2xnSnRQUWxFQ0hTSHNacDlBSWNkWVJvdHhMclBVYmdYUnYtdS11SWw0YWJ4TkNuMXNXaUZnN2dSaFhYRXdxRkhwVkgycHJaYUxvdHJ0WGdLRFBabVp4clEtYmU1cmJCNEc4TnBKM2ZHNVJ0bzJBRHo1aGhJNzVXbnU4UFFWcnZDaXpnSFNvWUY0S3hHa1ZrSHVOY2JmemNMQzcxbnpZTXlETHRrXzJRZDVYNzRXUFc5b2tpbEtQdlRFS3p5TlBWYmg0M0NJVm11RW5KWlJOclF5UXRaX2U5aGdYbHhvUFNjMlM5cEhCMS1JR0I0LTNhbzMzYTNNbTdxVzBPc2NHQWt5OUJuRjlvT1hkSnBoNnVuXy1QMVgwaXFjdWNOZkJuUVBJTUZ3N0Z2QmhHWkdMT0ZKSUxlVGFYZmEyb1plRjM2Tkw5dkhZeGxOVXhBYm0xYVZxSFlyNm1IaW1YLXU0blpmQUlFUWRYNHJuU1YxZjRMdjc5SzJYTjRub2lsVnlMOEVEMmplV2tBU3JYWUIwbVpXUXprZTJjYUE0YWI1WEpZRDFuanBkZUVCdkhCenBTQXNzTGJ6RmI3X3l4S2JkTFVseDNaM2dsMjJmQ1B4aTdiTE1DeTZLSGxhbUJHZHZTenloVmZTam5DQXcxU1ZjX0g5UEE2ZnV6T3k4M1oxVHlXYkluTUZKanNYRHZZSkw0ekJLM0wzZ0ZqSS16QXNRR21PRnpVdDhGR0VuaXU1V2RTUVExODV0UGhwVDNpYVZPSlBGUmg0WFlfLWxBQ185b3pCMDNlTDMybTVGWW00bl9tM0xTNF9XODhMbE5NUTFMdTRvdTVCaDdIYWxSSG9ndHRpakVlM1lxb3FwbU5yS2drRjdhSlg3U2gzeTkxTVczN2ZGelVEVXJfeGxtS2o3TnBfWXNmaS0qDQoLS2NaM0VkekpNTk0qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23591e-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLQBEIf2BBgNIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CLUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CLUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "KcZ3EdzJMNM",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CLUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "KcZ3EdzJMNM",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "KcZ3EdzJMNM",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLQBEIf2BBgNIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "KcZ3EdzJMNM",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.7M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CLQBEIf2BBgNIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CLMBEJmNBRgNIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-o8p5VXbGQRA",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.8 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/o8p5VXbGQRA/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAuF8iEhbwaJ0DI_CrGxgFot80RTA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLABEIf2BBgOIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/o8p5VXbGQRA",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "o8p5VXbGQRA",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymBZIQ31bgj3dF-87aKYWNl9kAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/o8p5VXbGQRA/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CLIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IDhAjGt8PogfbDwrYD0FhYThFd0ViV1RkY2dQMGluTXVacnFYdW44TmQ1eDJLbjY0eVcxN1dfWU9JLXJWY1NoNWRrM09fOVVGVV9ya3QyOFhIQzAzRFBZTnUyWHBwcmQycGhyUzBSTTc0UFpxZU5ZVFhGcXZOY0xxZ1pldU5UYnY4YmRMZk5hWHk4ZC1rTXN5V0lDd2NDLWg1dGlWSkFrQjZwQUNBS281cmFxVS1sdFIzV25BNmRCUTRCVVRuTzZWZFNDOVV3NkRreEtlaE9TUUR2R0E1c2NUUWFYbzNzZlUtc3JYNkR5UEJvZmRtTDJhSU1lMHpDQVJlcjNCVFl4dUw0Q0oxSjJqbk9vM0RQMkY1T0tnbXRkVWtUNHA1N29WazItYVRUUGhGOEp3a3VjOHlZbEJOcUNvWDJHVjFfZnQ5OE1PWDNlSlRuUkxzVGRPNzJKclBrV19ZVVhldXlWS3ZpNk5MbTVIR2VCT3VRRzNJVnBkRV9Zcm9aMUx4MHUzc2dzcTZlRFJHNGxIRDYwV1JoRjE1MkRJMzlKaDVVX1NHWFEtclhnVXY5Yk96V21ieTRNY2VmSlU0aUZ0emdOT3VDd1RwcTNOaW5WOExOTWdmZG0xa24yU094RUlfNGs5eFBWc1k4UUhiRC1ka0xnQkpPQkVucEtTSElTdlZRcUo5Si1Qd1htWjhKTFZpMF8ySWdPMjFob3ZiaUNHSXZieXBVM0c5Mzl6MjVxemEwSzNnUmZ3YVI4c1E5M2MzUXM1WG9ndGZ5Zi1NVEN4X1lBWE03b2hwOFVvOVBYN2NTcHJaNEEwT1JScG1yWm8tbXBhdUtoUWhIR0FjNVhFQ3o5UjNxVEFwMVZJdkstZG45ZS02UGJDYzVmNXJkZVVscWhQbUViMTFxa3dXQVh2SFhiY19XLUdhLWNrWUtNNjFiMFdQVW5ySDRnSUJjQ1JYWXpKOUdINXpROFpWa2IxejZjUnpGTzVkOFNYQ0dDeEVHNUQ1NlJUM2oxT0sxYUFWVm91RU5naWU1VkdqbVFjREdDQXluNGV5YmFlR0g1OW1PbjFjZkNhSEk2Y0xncDh4aW1IWXBjQThGUVI2SV9fUlhUTklrSEZKaFplVVdpQy04N1dWT3lTV2RLV3NvQkpDdURQUThNOXNyMDFVQ3FKTl9TZVFQQmFzT1pkMzd6c1ZYaXhNMm5nWWl5QXo5RFR1aUxsWkhvZlM2VUdSQ19jSE1zOHFscGtPMXJHNHNlNW9ybzZlRkVGbERERlFKV2tIaWYwOFpFQ0JIRGh1eVhJNUVZOENVeG5jOEE5eUxiMnkwSGpPeUtOY2hqWVZnNWQtLV9tQlRBdWRMNmRleWI5d1Vnam5ZY0xqcjNOaExpN05pV1dWVEs2Yk5LQ3lYQjdHTDh0N3BZNzJ5N2dfdkl4TkF6bldRbXotQ1BYNnVNV0JUUEt2eW1sUVJrclJJemJwQ1BLeHdVeERvOG03M1pKUWNKQkJfSGx0XzBSUjgzdVV4VGhzV1IteW5FcERPUU5GQkIwLW4yZkdzV1N4RUZjbU5takY0cDMwZnlacmo0ZXpoLXVmeE1KX0FTMGJkYlU5LTQ2WjlvaFFhZlJ2OFMtaGdCVEJheWZBcHg4bU03aFk5VU5uOGJPSjdydTUtWExlX21WalBkYnBldmR2b0hrRXc0bkF3dGRDY1BISTdGM2xwenREYlQxeEJ0R2xhTkdBZzV3LTFSbk9Kb3d0c1VhbmgyVVRaRGd0RTQ4Q2hHcjJpc2ktRV8tVUJSSXlfNk85RkJPcnJGYmp4anFGZDVFNUphVVVaWWZYdlloX3JCRTdlNTk0bmZOUmgtZ0EwR1hNdGVPY3FqRFJBRWZ3eHJSbnRyV2VqQlNCbGo5cmc5bGtkYnRrcWozd0Z3MzExekl1djdMRW5EN1lTejZhaDFVQmJYUHFHUmxGR0hZd0VYRU5lOEc1d1ZQOE5nbU4yM0xPY1owT1lFU1dhd3gxWldQMk5ITUh2YzRZY2d6UE93Qmd1cHAxRk4xcXBpdzN3QmNfS1I4VmxSakZuMTRJRzhFY2tNTGFJVkVuQ2pFN1pDS0ZQNTY1Q2lmTk9Ub1RyeTFrdXhKZmY1Z2RGUWwwUGt1UnBDd3YySk5zaDV5S2k4YUZETVpicTFvX3NaWFFLS3QyZ29oRWpKa01zRWtoRUxwQmp5aVhoN0dNd0xTN0tHSVJMZGJaY2NXVDRFTy1pSDZlOHlXOU1MaWx0a1lwaEE1NXRqNjBJRkltRGZKNVE0dElsNEZNaENCZFFHMTVvekhRc1JoLTd1aTd3c3JOU1JuT2ZLS3ozUXpTM2lSLVRtRHhJak8xczM5ejdXYVpEZVlaclc0MXFpV2NZelFwWDktbVZZa01pcTdnWk9Sd1BlT3pnSnhVdzhvUHhBR3RWUkx4Q182bS0tRXJFeXFHSV9EY09LTDZUSnotMTlGbm41Qkd1UlBhQ05kQzF3Y09uQkttbVN1Y09VOXNGWmw1eDZ3bndCcUluNnRqajZTYXpFakZDOERzR1lqRDJUSVNzUEtzMEdsbUNkXzdnY01RSGZLQ0tjTWRsRUVoSS1OQW5pSUlfQm0tNERhUzdreUFmbFE0WC1BakR1Wkd3YnBOVVhHSElsNzRCUzEzZE1tZ3ZyblNXaldST0tVd1ZnR1VtdTBuaE5CSmd3b0oqDQoLbzhwNVZYYkdRUkEqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23591f-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CLABEIf2BBgOIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CLEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CLEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "o8p5VXbGQRA",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CLEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "o8p5VXbGQRA",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "o8p5VXbGQRA",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CLABEIf2BBgOIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "o8p5VXbGQRA",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.8M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CLABEIf2BBgOIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CK8BEJmNBRgOIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-Ecj7Sq3AMYk",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 3.5 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/Ecj7Sq3AMYk/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLB-bKtx97j3fv8pumgeGgE7aUtHdA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKwBEIf2BBgPIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/Ecj7Sq3AMYk",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "Ecj7Sq3AMYk",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymA_yA0hCSVjpj_AFN0L3QErkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/Ecj7Sq3AMYk/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CK4BELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IDxAjGt8PogfbDwrYD0FhYThFd0hhXzV0eUJQendIa082RlB5ampJZ2RTaHNvV0VDVGtjRTRjbUdGWC1ueFhBOUl1UlprbHhraF9JTWNBaUVLMXgzWTJCQXhGQ2VFeXVlX2pFNmVMTGhkWG9mY2VJSDgtSk5udnNFWFJoeUgtSW1MaklrQWo5MEljUTZYRjNramg4UFFnTk1rY2M3Q1pkLWxpdEhfNk9RZTRwN25fbDNnWld4M3BnVFlmeWxBVDdJbUFORlZzZzBBcmF5MER4bHEweEs2cjFhUlBnWVNMeXZVdkxSWlVVdDhSbHZmZy1qS0xGYXFvV09MU1BSQ3JlZTFxTHRpd3hnLURQQ3o0ZlZxVFlfd1FEcksxcnFwWnlHczBkeVZLT01iZkZfUDZ6QUZ5b2JrbmdkX1J4cmdRU0hlbEZOaWxibG0zU3lQcTFhdndkVXd1Q3I0c3JpZm5aVXlndW9VNW5vWUdPclg3dnRZLW1nYS05TGhKTHhDd3g3RjU3ZEdBRG1FWEFTaU1qcDNTY2ViSkpTNzM1X1ZvRkF1dWFBLV9DMHNKOVNTZmFoSXBCalZFUjFlcDRnNXpuTFkxUTVrWFVOWDVYYXNuS2Jhb1pueTFFODBCVk1NbDNDVjFuVEhBTHZRRzd1dnpEVV9vUktJRzNoNXhVUEE2SHFvMlJDcjBQaG9WWG9VWnBVYmphVFBUSUZ5cl9lRnRNb0k2eEE1cU91TmF0STV0Nl8wNDd0Y0NyM0FsclMyTEIwZEd3djd3TV9WX2dLbVVhSjh0VHotTm5Gby1lbkRKU2NVc1Y2cmphSWVjTE1ZUFFlOGNPd2VXbjZubURhTGZReGdsaHlQVXFGQi0tWTQxU2o4eE9fbm1lVmVPUlBKZ19ZZFVBU2MxQ1ppS2Z6OFJJcl9aRmNwQ0lvOUFxODNkZWd0TzMxYnNkSDQwRVBpclBuTnpQaEV6NHlKRl9qMmZOejI2QTByUm5ia3JscmtrYW1KMHF3eGZZdVptUGQtZktSQV9ZNjRYR09vTnNqc2d6al9Vc1o2MkZlRy1rWmpMbkxTLVNXYURmRmhoSDVBLVdQbEkxWE1CdHd5SndlaENMZGl3RXBzaFBTTWZ4aklaQ29ZY040M3BHNzVKMWVINVZDWGJ0S3BraU5nczNmUnYxVUkyLTMtOXZTelpNTk03RVhEcUFGMDZBOG10YmpXVlNfeFFSVkVYU1duc3AweDhreTRXdGxzOHNncUR0ZVQtNFAtZlRTc0Zub3dERG92X1lHMXRUY1dKQ3RrTzQ1TTl0X05BQzl3VUUzNW8zVnVTN0lEZ0ZaUkNIR00xdU1CTGRiOUw4Z013ck1CakxlbGdZOE5xeEdWTDhPYTFXRkdTVk1YSHhwMEZPd1ZXRFdfZGd2dU0tdU9HY0ZxZ2FfUjNhNjZFWjRjRk1oQk55ZHNqVUxkQjBtWGJhVUlVR203WGZFOHphQjdLZjFBR2sya0ZkanBWMGZqdGhRRXRFT2h6RkdKQUg0M2xORkdOamxPbUw5dUNPd3YwYXNlVGdwcEdXSURxR2p5SGVjbUYtOERxYWUybkRHM1FqX0k0NXdOS09KX3FVcVpZdG40SURwVW5LSVc2dmhrMFBlSnBLTEU1QkhSdnIycVY0ZzNNQ0FSWDcwb25fSENXWjU1NTdGYUJiZEtUVmVBOWFWUXcyUEROaXVyemZ6UG4yNkFvNDZENE5NMTdGVDV6eUhpaW52LWFaQ0w1X3JGLVhQWnF6VE5FUU1KSkJZLUFMUnhIT0lMcUZjdzA4eG9VREJKSWFjVzUtT2hFWklHQ0NSaWoyMUFQN2M3emJRd3ZlNTZqaEVKek1LbEh1SkJJbnhMb0lXQlpLYXpmT0UxdUZjUjhlRFY2ZnBTYTBNdWhsS3AxYWlHS2RsYzBoZUtraE56aFZGUmlDa2g0M1ZiUHNJSXJwSkw3enNrNFJJY21xT1lfcHV2NnNjMzhiNFdQZHlVSDR0Y2tfOFJfM2VQQW5VLXZzeE8xOU9yMElwMFBNTXZ5SU5ic2ZDSS1OMmhILTV1NDFycEg4OXEzcUE0LVFUdnppd2oxa1pBRThnbEQ1TGloMFFsZDE4THluUXIwd2xsMW9ieTE5RlF0WHd5S0RIZFUxdjREZEotNzBVbkN1bHdBY1k3UVJZQ0pfdnY3R0hJTFZMM0J4aFVUR1UwUy05ZngtajA0WE1NTmZZR2syUEMzUjhkLU1vbmFjRVpsV0UtM1ktVlBWQkw0Ui14WUtpOUU5dF9tU2Nmd3JkS0VHQ20tZnJaSlJDNUJPRE1xN3FHZm9DdDBDMFFKRmlaNkMxS3U0Z1pObFBRZEMyaDlSenB1T2NPdXlZdDVZOFU4emhQamVXRXFlTWhrZGhVUkJQY19YMWdwVU5DLUZkY3lZanlwTHZlc2NEZE4wWi02MGl0VU0xOUZ0UmlQTDRyVW54cUc0eHlsNmd4YkgwVXFwcS16OGJBN0ZNbkMzMWREbURXZU92VThuc3EwT3B3VGVpcVFVZW45VFQ0MlY4b2xyaUpvclk5X1BubV9KektuU1BoZjhMVm5jOWRJajZPN2VSVVBLUVpHSnprejVqOGNneGVhbHo3NkI2RGEtSjBmaGVwN1hVZWRjcHVQdUo3Ym0ta201SGVNbFZoOXdac1pCNlBjOUJFX2R1YW1ZTHoqDQoLRWNqN1NxM0FNWWsqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235920-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKwBEIf2BBgPIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CK0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CK0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CK0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "Ecj7Sq3AMYk",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CK0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "Ecj7Sq3AMYk",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "Ecj7Sq3AMYk",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKwBEIf2BBgPIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "Ecj7Sq3AMYk",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "3.5M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CKwBEIf2BBgPIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CKsBEJmNBRgPIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-RN5bgQiZjTE",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.3 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/RN5bgQiZjTE/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAfxR-0aFJ1QYvthiI8DT_ITZVKMQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKgBEIf2BBgQIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/RN5bgQiZjTE",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "RN5bgQiZjTE",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDqsFG4qfyVX91DSDl0jpUkkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/RN5bgQiZjTE/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CKoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IEBAjGt8PogfbDwrYD0FhYThFd0dfUDYtVDFVQ2tLc2xDRUFTdDNzMmJzWnBtRUltZWRyRE5nTXlqNjc1eHRHTDNqQ2lnXzdhM0x6ZEZiUnRoRjBJMDYwNDRpdkJCXzRVenNxNS1fN2tSaGRtNlhRdldXeDNlcGQycGxJOFphQWpqTUFJN2tPZUJLQ0ZmS2dtcmxNSG1ZREhLeVRfd2ZxLXJ6UFN4X3NCb1FTMlVqc2xpeW5WVm12a1BHMzdUdFY5dmZMVXQzTnBRWE9veGxGTlZDOVlxaTF1ZEE1VzZ5Mk9ZbUxkVUg3d3VXckxzTTZDQzRseXJvZmgtRmtodFlWLVpmbXVNU2pkWHdnNWhicVZzaXVkR1ZqRGFqUmp6cFFaQ2t3bV9xUndqLUNzMHdoZVF5YUV4bUQyNkt0enV2NExTb0o4LXU0QTIxSjFxc201eUZ6SmpzRTl4QTRsSFFpX193akRLSnZQdDVwYWg3X0lSZVRnYUJ3bzlIcTZ3ZDg1OUlNbldWaG9YT2NrbVkwN1pWUnVva0J2YW5hNHJlOU9xOUl1Q1JMY3NWZGxxNmdTWTdxNnJBSVpoc1hvMGtoQlF2b1FJM01KdWF5QkpNSTVkV2JRSWRMcWRDeUJwMU0yYnowSTljUEFLMnh5SkVYV1FGR29iTUNUT0JTQkhlMk1XQk9DckRzSkhFNFBDMlJVcjVsNnJDUGpwVy1KLWZLUWtIVWNBM3EwdGRRQy1YMFVnbWJfeVR2b1Q2MElOekZXYnlJa1VabXdjWHZmTEhwTG9kNnF2MTFWMkpYcGY3MWZVNHNLb3BxRVI2OVlyUmtXUFpZUnV6b3lNcHQwSUlXWXotNjlvMzRPN0RlSXRNamx4LXI3M09TZU4ybll3dkh2RjA2Vm5XWXA3VldoUXFmSnVLcDdJdjFVU3RmN044STRfMFpVQU5PbWRTNURGSG16SUhBR3lNLVVnZDZUUHRHbUNkaEVBRVM1UFRmdmdockJxRHdpYnh2bU44ZEI3MGlhc0xucWtwU1h3Nm5icHgyemdpUW92NlJtendBa1JFMi1uQXdhZUxhRnNEa2xzVGVnampXUUUwUFZYZUw3RDZGMHJBTUMtLWVjWGtRVS04YXdyend5S2Rpa0I3YW1pd2ZnOXJ6LVlmMlQ4MHkwVXlLYWx1ME1JQ0FVT0ZpUk16eGNfdElMQ1cxZGRGVGhjZGNvdEg5V0t6aFZVTDRkeHk5M1c4ZUxQZ0lTMUlQenlES2FEc1YyRlpWdkY4TDk1ZjE2SnUtZjdCMjZ5UEJDM3d6VkFXUGQ3UjNKclZkOUZXNEpXbXh5bFNVVG5DYTlxdDRlWkhSd3JWTXByR1VWaG1WRmMtTjNMWU1KN296S0xoQjE4SUpSaWR6ZlhrLUF5YWJpbFpPUDBzSlp1V0FUbC1scVBGdzBURnNwYkMzNXBVUzlfd0l2cXg5NXNkYTFteldISkZ6MEloLWRSTnNpanlNd2lOTVVKM1cwbnJmOEE2UUhadk90V0U1N2pteEpMMnJESkF5ejI3UnpreVJ6SVdTQWxMQ1pHYkd2Z2JOcmJMU1o1b3dTb1RNLUp0dlBESjdVWnhQYldGa0tQck1FVUs2RzZKVGdiLXVGSXpDU0p4UU92ZGkxMW16cXd3ajZERllTSUdOdXNUbjVfQzZYUEp3MF9JRFNiYVRxVUg1cHFUeXdvYVVEV3lFSUpleDhJazNBclhpTk0zeXZJREQtQWhQemoyYnhKa0lzQnFEUG53MjJjYmpVc3prbHZkeG96X1pyajdsZFBxVy0wcC1kc0NYSXB1Q3dVSFVtSVRPcnVleldOOHU2Qk1ScUI4MG5HSWY2ZXhyN0NuQktGUmZZbEk3N3NmV3NQX00tWWwzZGNwRTV6LVZKWFE3TW9Tb1ludXVVdXYzdHZoTGNpcEVLMDg4WUQ3TU5zN1JmSXVZOUpkcjZBd01zb0ZQcDlXMUFKNW52R0F2Q3haalBXSXM3NnE3WmhLVDhBcDd1YXBVaEV1MUYyT2ZKaTBvMmhDdGZBSkVOTTQyUkVyTWN5RU1BUTFESldiYjR3cUtQZ25HYTFIQWZsaldUYmxkYjZEdzluOWNxdlhILTQtaDk5SnpDYmpxMFNxRWNaVWRJMW8xQ1lXUVc2RGQyTnBIcjU1Sjhnbzl6eHVrT3RycGZrOHNIb2pLWXN0Z0VKQkxpNkRBU0lTSkRJREs4dFJtMXNhTmhFbTJ3LVVCMkliRnV4cnFJaTV3cGRuVzdpQkFQQ1NmdnJrbFd1TGFLcW5tMWFlcjFYZW8xcHFQdnptZThJTlowdkZFTXhpR25ERW40V2FlcWFwazR0T2tKZ1VObTFVVVhKblcxbGhOT2luNVFUZldHVGVQaDNhUkFNUTdkQW5SUk9ydVNwT29sX2NRX1Ruek9zeXN2X1JCMDVBTW53ZGM1R2hYT1psSnFRLVgteGU5Q0pSOHVhZGcwLUNCT2xXQkFtbDVaSXk3cTlfVUM3dWd3dmtzLTg5SGFUVGhMWmxiUFYzQ29PNWtyaERvbE9KNGtKZzhpcTNERTFrbUZoeXZVOExUUWZrQU5JNUVCY1k1NWJEWnM3OFJtY3RrWkp5dEJUU3U1SFgwMFd3dXBDbVdNbkUyT2t6VmNNcW1BaXBkN1FZOXRUdERSUWZ5U1ozakhHNHBqb2JEdkIqDQoLUk41YmdRaVpqVEUqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235921-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKgBEIf2BBgQIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CKkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CKkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "RN5bgQiZjTE",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CKkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "RN5bgQiZjTE",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "RN5bgQiZjTE",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKgBEIf2BBgQIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "RN5bgQiZjTE",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.3M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CKgBEIf2BBgQIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CKcBEJmNBRgQIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-7SjCHPytMKY",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/7SjCHPytMKY/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCJvn9qkQ05EMBFZkfTKVbcwD5h_A",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKQBEIf2BBgRIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/7SjCHPytMKY",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "7SjCHPytMKY",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCSKTShWrqWC6mzsDrCdhw5kAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/7SjCHPytMKY/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CKYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IERAjGt8PogfbDwrYD0FhYThFd0ZhX0NzQTFjNHp2RjYzNUV3WUFrejBVOURURlBrSzcwSVl0aVdMMlJuNUg3eWR5bzF5MVIxX29yN09nUnpHNk8zQ054dnpYcTFJMGJxVnZlNDVUR01NLUtUWXVROFpxdjRQVW5RZmZIWDNQcENVU3dhOF92MlVrQ0lsY0dwbkZidDhUTWstUTRRd2VvWGRkdkppRXM0TVhfMkZjMy1CUk1fdFVpbGlDRkppb1JTYm9idGNWTEl6NWdFRXhyRFpGQlZvUkRobGFKVkxCZ3dXc0I1ZG5tQjI1ZjdWYU5maXg0UDFIR0Zrdnc1X3laYUpYYmNTaHN5RDZnZ2lCVWdmbkZ3X1FrVFBjQXd3WVRVSmRoUTlsQXQ3Rkg5THBJV0QtUUk1NGszNTdSeHM0ZGRxeFVfdGpHT0dZU3VHRVBXRDJHc1RmUnhWbzRpWjRfQUJTSVhWTVFYZTBsTnpISTcyWjk4Y2NxSUxBV1JqTGY2WF9VTzRxVHJuOVVlOHAxWUgyRi11MTRkUV93V0ZSY1E1TTNsaXM2UUJhemZDUXYwZFhFd2wwZUFRbzFPQ3l0WEN2ek1JckhwcDl1V2FtVXBDVTBuUmx2cE8xV05abWNLeklwY050UE9NVE1iZ1hpRnVZQmRlMm5lM2hjM2NWTDllUmRiWHNpYnpJbzRZZmJ0Z19LdG5Sdl9SenIzdUJST3VpVUh6dS1jSEF0UU41YUdiZzR6aWgtc2tnbElyY3dxM2wzRFZROWJKUGZmdEYyZWk5a3A4V2NydDNHSTEyb2s4OGRVbHhwTldLNlFRd2Q4UUh3UHlqVVBwekUxbFdNTXlQcGNNVGpubGlBU3pMT1hHNlBLOFpYampZV0x0YjVzc3JXUjdjMlc2SnlGYXFvWXFrVW15TEE0TDJWaDB6eVBURTc2YWtqcnNnVzhkRXhhQ2szRzc1Q2t3dl9QY1VfOFlNN2VyR1FwNld4ZkV4Yl9TYXIxcGJJVWg1SVpOZWRKMTE5elJOdDU0ZVBteEVaUW1abHlJcERuSTV3bm85RWhMRm9YNl80LWNTeFBneWRNUGYzbXFkMXA3OHhKa2NYRk5IRVBleTRlMjBTUTA1MkpaRUZVcEh2cFlrbGd3ZU9VY09vR1hsV3d0ejdyUUI3Ry1QY0lPTWR4Z3AzVXE5cXotMDBtU0V6M1FDTXh4NC1vc2tMUnZCdFRXdlpTOFZsUXBTeVJVNk1YdF9DZ3oyaU13M0J1YzIwbGU5aG1RWUxaZzBZN0pzSnhkcEpkRzZ2ck91VWNoWnJSWmdmQUdqdnVyaG5qSFFvQU1IYVBGYmViTDdvdTJBZTlLaW9Bdjc5eDVVMVQxYXpXLTlfTkFhdjF1M2lpQjBCNzhKWGlTbF9LbW1RUGtROEI3bnh2b0xwNVpldVo0TWRiY3N0WVdVWVVQallpYmpnSldmUVd1VDh2UUlTNHNQYlJCWENDaVJmVW80emNWUmVTYXg1YUwwbXRWMzU0QWFUSDhvVEpiRS1CZmtVQzRHSG1Hd0FXRjhCUDhkR0xYUUg1TUk5dE5ad0ZkdDZYRjZ2YnhsWDZaMnBFTklBYXY0YjdSRFVHZUFzc3hVdWJUSnBoQnA0QWNSSEtKU3B5dHBqemxXd3JFaVVJSUhmVG10aFJpUnZEWExsNlp1dHRnRDlqZGVfa3B4dWhDM3NGTUxxd3g3VlBHRWROci15VHoxTTFDeEcwZ1c0d1c5UWE3a1U0YmR5VVQ0bGJ2REs1c2J2MzNyQmFiekN4UTBoUVNIdmk0dVpyN2E5Qkp4Q2JnTHN2WXp6OW5KY2VfQ0xCTkUwZEZPS3VNOWQ4VXBDblQ0MXA1M0NnNGpSa25McUM5QkNqUTRZZ0djMWVLWlk1RTgtaHl3dWxSUG9rdDhsV0wtc2xrX2NOWGdQNDZOVWJTMFNuT08ybmZ3MzNnWUY3UFdHdmxyN1h3SkVvNWI5cERoS1dOQ0xoa3lSZThRaW9HYVU5dWo0U0R2STJpT1BEWnRTeEZXUS1zdkRDQm5QUGhsZ3hneUlQWHBjTWl4Wlk5dmRUT2FLUHhpNXV2ZDFNd0JDUFNZcnFFVHN6R0xNZWhLTDlZZTdFVTZFRkNtdEkwSVVfcm03QndRNWRjbmZaYjF3aGZHdXdIc0wtNWxwSVVOR1VaRDByQjVFWHZDamFUb18yelUzRjlESXRkX1RaNlVVQlZZSmJsckQzdFVkY0l2aTE1RFRWMEptM3NCNm5FT01zZ0tIX2VXNWpDeVFwODh3NnM1azhKNG5wZzdjcGcyN3Z2clVILUtjT0g3VWJEblNVSXI1SlF5WEJqODdaZURxQlk3VENSQjdUODdEUmRYWDV0NEJkQ1VobDFYa2ZoaE52WXJ5YWI1aENLVmI0SEFhZU1vMnhOUUxXV200SWhCczcyb2s3NTFxUVNTTXhDdGFadjdXMUFkUnoxSno3SzVxbWxveTNSZklHMUxiRXdJc0lfakh1Q1ZnQ1d0ZkZyMnpCNFI5RHA5cWpQMnlVdGE5bzctaWdKMDNwTFA4ZmgyMS10WGpTa0hJakJKNW1senFja2FuR3pnSU4wcXh1Z0hDQVZaU2puZlhFWDJGSktadWEwT2dLdm5CTXlUdnRxcHJCU21zV1h2RDRTeW54eFRrdUJsa1dXWDhreTRrSk8qDQoLN1NqQ0hQeXRNS1kqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235922-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKQBEIf2BBgRIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CKUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CKUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "7SjCHPytMKY",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CKUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "7SjCHPytMKY",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "7SjCHPytMKY",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKQBEIf2BBgRIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "7SjCHPytMKY",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CKQBEIf2BBgRIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CKMBEJmNBRgRIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-lLj1vmPn1kA",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.9 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/lLj1vmPn1kA/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAl57lTLkXQ6LvIoZA7ScqvMfumWg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKABEIf2BBgSIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/lLj1vmPn1kA",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "lLj1vmPn1kA",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDoRS8WLr8CW8GfBYbgid_VkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/lLj1vmPn1kA/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CKIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IEhAjGt8PogfbDwrYD0FhYThFd0hCQ2U3NzJJS2RReXFsNXpKSEhhcl9zV0JOejZmUGhVczZqOWpYdUs4WHFEZG5uVy1ES3NEWHVPbjVSTDctbGVhaUl0OW92S0NXa0hnNnN3clQyclFjQjlMbDAwSDhTV25vTFl3VzJOaW9IdWhGMHNhRmpqcGxVTzMtcmV1NFpJSTRZMkl0R29ZYVBIVDVMZUlSR0oyMTNCXzBzUmxuVWxWdjk0SDZNX0tTYWc1OHA2eHpsT1Q1R19PX1FOUmNDM0tGUVg1Q3VuVmFYZ242S0UyRmdJWV9scHJUTzAteU9iWTZfalpPOFktdmFXTFFQVGt1eTdoUENMbkpZUVdlRy1kSUtydDlxZVQ3VktmR3psU2piaEhIMjNJNTdTZXMtaDJFSEVfdDk0OHFCam15ejJMV0ZubllNNjlJZ0xJTmNYSDJmSE5lMHhSNC0xRzVkYy1hd01odFhMdzIycFNfb1FCMUpNa1d4Q2ZMQjZmRzhUZklwS1d1MnRHSmpVX2pDenQwWFltUm9DdldpV01rTlM0WXJUc3pqUFhaTlEtTHlfZjM2MEFxT040d3RQWTc4NjZHbS1QMmVFN0tET0tmSUR6MmptSFdPT1ZUbU1hZ2htZmlicFBhQzZHcnFMdzRMM2pSMVp1dDhDOGlaRldVQUpHTU9SQ2FZNy10S3V0MmI1WlpGaEZUVFRVTTRBZjhpUm8tX0R3ZVVVWFRNS1J4NDBOSnM4WmdFcVhNdHowenhMMDVJSDNIVzdzRXhaVmNic2h4aWpud1VfQmdXT1F2Q0VkMFl4VVZTYlpQYjdtZzdlWkVNUmxLdEV6QXZ6d3NrdTJNU1QyNnptQmttMjltcDJwdEFUVzZBUFU3U2hObE44Wk91UHRadFdUZk5RMjVTT0lBekNnTWpDOTkxU2FiMVV5QzBZdEF2LTFRV00yOFZhdkZoV0JXVUUwTTBuaXNnYUVMRHk1WnphdjV4UWw0cTFFdUE5TVdscF9fdk1UUlB2RzFpX0hRQ1Joc2pJbUI5QTA4Z3dURVNUSTYyUFNaX0tuWHlid2lrVFlkemRjRzFOWjNjTERvbVdpWTZuRDVZVVdHOVlXaHNOVnlFMnZ6UW9uUGRsRVVWUFNMN01oVzBMZGdpczlLTG9Qel90MEtXLUhfWGJITlFvMTVfY2RsWjd4d1JWZXhhbG02NjZLSzU2VTVzNzBWd1B2YWk1c1IyUFp4T2FHYW5wa1FUVG9TMTlqVHF5aW1yaFhGYXVuUXljcEExSFcyTmtTWXRSdmxmQnQ0UFVpcC11ckxtd1JUVUJPLUIwai15NVZIWGFZMzg1NFpUUFNiMEFhelZhRjdHazBkc29pNzYxbG5tZHRiT2Q2N1hQTDN4QlRIekhuaGJBNzQ3UEFVUUlPZEs4NXRZYXdOVFRET2liN1lLVDVQNnJfQ3BoOVNNVVlobGhPZ1hGQjVZYTE4V0E0NWpIUHMxZnRoWGt5aGxqWHNOdnNkNEZhQmR4WXJwNzFTdUc2VVNaVVlJemF5TDJRR3NOdERMcUdUWG9yMzZtV0EyNzBtZV9UTnFJNTNyTUNkeW96aENNajdGZWlDX0lNR2M2aG5UY3VnQXo4ZlVjdkd5MF9taXpxcDd5RkRHRHhSV3ZZSTdhT2ZsMXRidWN0Vm9wSlVjV3owTS1KVGl1TjVlbTBwZEJFd1ZIbVBFMzBwYVZyTGNIV0hSNUhsZl9MZGE0SnV2dTlYZ2twMGluVWxiR0dLc0Q4X3AxT2tyQWtpYkxTNzdWd01HM04zc2NFbkZoemZfd1ViQ1BXQXpLeG5KMElhYzY5ZTU4ZXpRM1hfLXc3Zml4aURTdkwway1GNWJUQXJ2WHU5NVdKWEMtLTl1bnhLSWhIZTVtOEJXOE1CZHlCWE5QaFM0S2FZTTlYbml1VEMwSlBVTHcwRHpOeUJ0cGw5OFhPSXFqdGswd1gyRjZvbHJCQzhSRExkZldBclJsel9YVjM3VlBnSXhIM284bVVEQ2hiQ3o1MjBNQUtBVmpZTXVxejZCTWg3cm5NNUhSc21vcjJFZzlsbHktWVg0R0xJQnZMMUZIWkVJTGIzRjFBREhSV185QldKQllyQ3NySGZyb0VFNWF4azlpX1gwMnNubzJtajRPU2hCcWpTZWdRVnpwOUQyUXFZWGViMHhST3BHdHlIZXRuelJQa0ZaNXdEaGR1UDQ0Y3FGT2hVdWl1OHBlcnlkMjRHblpUdU5ZUDV1anFleG0wR3dGRkRvbVFYTGtnak1DRDljb3ZEQmxENmVsY0M2cjFubXROTGs2cGJBcHJiRUFGUDhKd2hQREJRSFlrRHY1bXVuQUM3V09seTlHaVdCZU1BajJIVkplZ1BDaHhWZVgzcHpQT3JXRy13TE1CUHhrUGRyNkRMQ3pMclNkaVRCdlIxanBpbFh1elhYRHpubk1SeUdyaFNNU21YTm1tbHFLdWt2MUZNakQ3SVZlQzlkLXRhYzk0WklDOHRYYnlKMEthOU5BcWVYRzFTemlJZl8td3lMbGwyV19WYlJSMkJ4MDdySU9uWWFha2duc24takV5N2ZKZUtDNjJnVGlKQk5CZFEtLWVTM3VDcmxPdExpWnZJN1NOanVlQzF3OFAxbWczMlpna1VJSVZkQ3owbkI1aVNncHEydUdiMnpTb08qDQoLbExqMXZtUG4xa0EqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235923-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CKABEIf2BBgSIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CKEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CKEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "lLj1vmPn1kA",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CKEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "lLj1vmPn1kA",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "lLj1vmPn1kA",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CKABEIf2BBgSIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "lLj1vmPn1kA",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.9M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CKABEIf2BBgSIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CJ8BEJmNBRgSIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-SOJihB2TeSw",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.7 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/SOJihB2TeSw/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAIeYnimKDZyUTAU7dTFDkYFlj2ng",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJwBEIf2BBgTIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/SOJihB2TeSw",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "SOJihB2TeSw",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCJU7XHWUKUu-BQct_hX9UZkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/SOJihB2TeSw/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CJ4BELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IExAjGt8PogfbDwrYD0FhYThFd0cxdlZBUVowTms2bVJEY21KLUstejZjNkZXV1FPOUJtUllzbWRpZUdZMk5VaUVBVmZtZ090cmtodldnMkpuMzRvQXJmVE1xZUdjV3pXYTV6eUhoQ0ZRaXRhS19kQWJsemRITXNZZENxTUFQN2I4TUFDR2JYWTNDVWZhZlN4Tmd5T2tOYzBvT0VhZWlrMHpSZldBMmhqQjJ0N01kT0xNUVhTWjlGRFhCZFp2V0V6X1JXUHlzV2d1UjlRY3RzVF9ZLTNkQUZvUW15eDlXVEgxeEhCcy1MaG90bEdPc2xjN0x6ampqOWotcEdWOWpBd05ZdmE0YlBMYXFrRFBSTG9jY3VrQXNES0ZCXzRwYlU1VW1xN0xwQkNZYWRwUG96d205d0Y1RzBOcVZ0Z0JpQ0t5NEI2MHJMWDJBU19hRlAydjZQU0ZDVTJEVG1xZEVnVV9RUHRLT21zYW5NLVYxLVVXdWRnRVZURUl0ZVFqVGRqaEFvUF9LVzhYZUtVVk1OenYtMzZmVlN5UDJvMFRsdmRrSzcwdllWS2NuV0RHRFFtRmNWRF9KbDh2N0I2ZGdaZVNua0NOdkhWdmxmQS1IZ1JOb2hHbm9YWjdrLXhJUlBqc21WOVYtRTcwb2VYYmw5RlJBbGRLYnFIRXVwTzZwVkdyWlNCUHI4Z2x3VmRZRTQtUy1BeEc0UkJtX1dvV2lBb0JGLXRhMTcxOWdkME1aMzdSaG8tYTFoYUZUMjBPSk5aVFREblJhUVg0QkphaWRGX2ZhaHNGUmRoSkhacmhhbjFCWm42NnVCLTZoRW02UnZPczdqMWdXNFlzbE1oUFpPcFVrekV5dEltd1YwaXFXNHFtdHdiUnduN1ZqZVhrNTQ5clRfLW4xanU1SmZQYTVMeEpXclQzMHZVRlhVMHRwVjR5cUo4MWo0aG15cm81SFVEc3I0REZMcExJck1jeXZHdjdHYVFjZi11blZPZkhIYzBXR3JSVUQ1VE9kQ3NzUUJjSGlPcUV5Y05QTlZYOTFZRmVybFVXQVFFVzJnS08tR1JUNXY2Xzd0ZTBGRXJObmZ6WHoyd2JORU9hZUFEQTctamQyOXZMdi1jQ1djdXFZLXUzblNMcTVzWEE0OEs3V2FRVExIR09aYmlIaVQyQ2psd1R4NWVtVkM1Tk82blNOZXJVLWM1OG9VbUtkZU8yT2NGNldXOWlDOElXY2VVMTRsVEV6cDVQMGxtUUlCd0tQYkctcWhQaU9lVmdqaG9HTG5XR1lFWHJVZ0R5aXNkUFh2X1BxdUR0cG1ZTUZia2RLUFFSRk0ycTNtT0VvSmtXZUQtOWZzTUxOdGVzdEVZcjFXQ0tqVjVUV1YxZFl3RDlmNnFRNk5adVhXYnM4MklBRVpvS0JWb2J2LUJDbjVyV0NIYy1Gamt1NGpPV2dQS2NoQS0xSHE3VTJwVXUzd2prR3Fsb0xCemRjZG9KenFJSmVkMTlsQ2dnRC11ODduTTFQRHI1enFUdzRMTGdMaGZLdW1sNWlRQ0lpVG43XzRfLXo5Tmp6M2FTS1lpVmtOR2Fuc1YxV2FPU0NCZ3JoZmNzanhKa3JPaHZVWWZjekxKNWtoVFA1YmlWX2ZqN0JMb3lueFNtYjRLcTg3eEx5LUtyejVtQk9YSXUtYmNzSU1WQ09KWWREU1pUZ0NNcUNvMkdka2lpSExjd2ZvWkJWbldNSDZmeWdYS0wwVnVsN2ZaZEo0UHNDQTZoejdWTzluYmtNSGVsa1Fldll4NFktQ0RzR3h3cUEtVVZOQ3gyMC1pZm55VG9oRVRveXhZWEZtOUJZZmlWbk1PcmY2NF9HXzNJbXl5VkV2YlhXY1RrNnlsbmJTdTJOUTdSajJTSGZvemRZUTdWSnlLTERGMUZBT2M1QWhPWmtyeHE5aDFFWXlwQkVYWjhqa1ZSTnRZMUxiNldhRzhvS0RTYmFxT3hMWjBFWnJQbnM4QXgzaDdQc204ZDRwTmF4cGFJQ0wyc25ERVNjQWd3SVQ2YTEtZUZsMVhMeUtqZEt6anRMaDdYWlJHMWl0aU5hOWxkVVJMY1c0bFJOdjFuLWRCNkhuSnkwdHhsby12NXRSVzlJb3FZNVlBZU5wRWtfY0JfUVJWX1hvS1JxVmNNT0xpVTY2M2lySTVlZm5SNmlZOElGTXB0SnM2djY4ZVNiWE9hYXp6N0JaUndMeFc5RFp1VXVUUWhWeDFPamZrRWRzRGlNc2lWY3RwVzlIRnVZOW1BNzBzWjV5dmR4NGQyRnRxVF9Nb1dlUjFqTU1mSm50NFphQkdWQk5RNUVsSnZjUkdVVS1YbjRLYXlOSEVRemZteTF2dVdvdWo1ZWw5RkhHSTUtYlRvMU1oX0szZFpCX09YRGkyS0JvSWhXdUNPZGQ1aTZ3bDZsRXNlNEQtVVlwbzM3d0ExMjZqOHBFX1dIWWRRaXhWOVk5U0pod1JuaFNHLS10U0t2d2hCTjdFWnFVNEc2dk52Z19CNGo2QlN3V3FldlVMcnhmTkZMaXUxeDV2N0g5WTB1ei1oM2FISWtac1JOeGlwZnk0cWhERng0OTJ5VXl1U20wcU1xVVRwMml5TnV3bXRUWmF5eTFGTDhkNVY2X0h5WnRuT2hkaDlqeG9VaUprc2NBZzZ5aVItR1hTQWZMbjhETTFPT1hrUWFBX1MqDQoLU09KaWhCMlRlU3cqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235924-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJwBEIf2BBgTIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CJ0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJ0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CJ0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "SOJihB2TeSw",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CJ0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "SOJihB2TeSw",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "SOJihB2TeSw",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJwBEIf2BBgTIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "SOJihB2TeSw",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.7M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CJwBEIf2BBgTIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CJsBEJmNBRgTIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-Hn8WRZ2rPt0",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 5.2 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/Hn8WRZ2rPt0/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDl6DE-f3ivtz2FKyTCqnKlOVeu_Q",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJgBEIf2BBgUIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/Hn8WRZ2rPt0",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "Hn8WRZ2rPt0",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAHQgYtBYVG-OLVLj_BB3-fkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/Hn8WRZ2rPt0/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CJoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IFBAjGt8PogfbDwrYD0FhYThFd0h3X0lsd1h3MGhYaGhPeS1JZVVQZTZ2NXhtZ2J3SnhEdERxYzJiNFJVTlBneFdLMTBsV3RySHYxN2FJOVVvZEJVWVhBMHNYMzY0b3pZVHhNV0lWMWF1TXJtNmhkZDFlenRWckxxQng0SlVNNzUwajhiN1QtbGg4WDVJVFk5ZDU0a05TYmNERHdZZ2NLbGxtU3JHQldWbnJuUEhaakt2dmFnWTN5QmtXMHRWcEdicjZDTzdMZGRac25vbkhRd25BcERDOUs1R2ZGWlIxdTU3eFRjeDRoNjRqcGEyWDVMM2ZCaXhyeF85WlBZX3BhaVEyVDVfMTVRQnRVQkJlSUpIZlctTTBNNHhUUURvWld0RWhyOHRZOFdGeUV2ZnRoQmR1NDRKZDkxbmdiYkJRS2VlcWJKTURYdWdXLUVIbnNPbUZUYWF2ZTZoVWFNYklaRDRLREdJTlVoSndGLUF1U1NyaE94bmh3U2o5Z1RwV3VVTHRCNzcwczZ6ZnJOOTlKZUN3TTM2dDQtRXF1aENJa1NiRGZSdU5qeGNaeks5WUlnRXJTVkhHeXVhSzRaWUxIZlJtMjVKSG9tSTlEclVQQ3BzT2JEVW9qTndSX2ltX25iZG9iaTBUdk9QekJRQXZBVng3aDQ5NDBXMzhhRzdSRVVYdDdpUEtKazZodHQ5dzRCU2VDTUFXOGdZN0JJY0xQMXFTcDE4aUdJYjhPcUh6TUw1anlhNWtlOGdhLUkwQWdGaGxBNE9fVnBFNWt0UHl6TXZuZDhFa0ZxbzFjNmhsMVJVVEFQX0pTbnVUbkJJczEybXlnSUpJbHQwdWJHZkwtSHhKcVFQOFdzMWVTQksyZ3Z5SktodmJLZXRqX1N5c0l4OWVfY0gwTk5vZ1k0TzFpaVplVEZYYk12THBoUVBRUjd3dmJYc0F2MEJJLXJKYTJEdms2cmdJM3Z0d2hxMF9CcUdhVURSVHp1czBTcWVHQTlRTFNyMXoybThFNmtfLVBzS2EySG11RWVvV2hhQlpNUFlTVVJrSE1qal9ERkZuZGlNUHdMdTYxMUpuLXFPb3ZaUENxa1Q5bnFqRmE0Y1RDSGxiQUhrbjFaVGJjd1hOVVZkT2N5QzNsdkpIZFVtOEM1NFRoTENTeDBkV3Y4Nm8wUEF0X1M0YUlKbnpMcWNLVFlKN3pKbXMybWtPT0pibEhxdUszQ1F3M2MzazBvaWxhUlZqcndmYXowclQ5dXFmbXl5ZDBhWkstTFRUaEFNb1dWQUhqaXlpR1BNNkdxSWNtT3VYb0hQWWpFZm5TRjZLaUUyS0pJTjVNQk9DVGJHOHpUQWlzSV9jU2JyT0J2UDYyZ1pLN0gwYzRHRm8xeUwwbkRIUC1VQWN1N01vY2UycUJyOG5QZEJ2RXBpR3VTSWh1M3Jwd2lJWEpRMG1waTY4Q2RwaEpUMVZYX244OUZwNzRnbk1NT21VWWlfbTRhYVRteDh3cUloVnJETm1PN3hBc3N4a0I1eDU0ZExYa0wxX2I5aENUVnVBU2x4d3Qwc0ZoekJwMHhMNTZzQVpIc1I1MWhHVFNaSzBjaFpwQ05VVWdEME04eTRHaXhZZWFTN0p1eXc2VmZHc1VmNUJ1cTQ4R2lienpJQTlMUktSR3A4ZnNNWkN5T2V4c0phMGROOTF6TlBVLVRmYlpRR2t0TUJCd25QcmM2UlZINUFTM3hrTldWdnFnLVJXMkw5bDZyN2VQY2toWVFOQ0ZRTEQwa1FfcjdaRUNxNGo4TkdTRWEwVFQ5Z3hCUFJHTlhBOTA0NUVyMDRISGRMTnZZRTQ4Rlpob09mVTZQXzN0eDBuQ0pWNlk1TkhtN09oRXhYVTNtb0VvWlMxbGRTMU15X0l3Szk0MExWUmU5Z1pxd09PdkV3OWZhVEViblIwcVUtZ28zbmF5ekxhX2wzcUM2U1M2UUdIbzlsTVE0ekJzQ0QzYzM3b2d4SU5BZ2VmZ3lfX3JDQ2JLU1VudUhvYXNoTEVnRDV6a3lGYlZySGk4Ql9GZWtiQ1RHUXRlU01DanZyaHhBTG5VUHpnWVpuYU82UHA4UXZVVmdwZGswTDFpX3NwalkxakFsWlJpa29YeENFTWlYd2tfVEoyLWViRjR5LWVXVy1oYTBxdmczaDBqOGtveDhSVkdnTldudW1YX05qMVlPbVJrWFJzQmJMYmlyREw3OS01aGdYYUl4a2N1bFFTX2tndGVQTTZrdUpGVHdaZnJrSHRVbGtoSGtldG42dXRIV21pdGNmQUxYMEw2eW5vSGdHYTdhVjhuYV9zLW1Bak5wWG1GbWhlTkxqQXdJR3FINDVabWtQQ0VMaXNDQ3ktc0pNSE50YXFJbDNtdy05TnEtVU50Z25YeDNlQWpvVFR0NEIwdjFFaWRaSUVqUmtEaXJuVWxFek5GRjR2VGFVd0FwVlB2dXFEd1BhQkRQR2NLYV9oaERxSzRYSmszdVNUaklZZzlvbVAwVG9lV0NGWHF1cmtWTENCNllLNmVmakNjM2V1cFVXTTVnb2dWY2UybWhnNS1RN3ZURm9qZDY5d1V3b0lpQ05RbnVMRnhheFF2X0JKdHg2ekJhYVoyX3RSb2thVXlMeEhwV0s4U0FJRlpaQmpSQUExc3pEWm1jZWFMYTQwakgyNk9mTWFCQkt5SmFvNllIRGEzTXYqDQoLSG44V1JaMnJQdDAqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235925-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJgBEIf2BBgUIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CJkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CJkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "Hn8WRZ2rPt0",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CJkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "Hn8WRZ2rPt0",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "Hn8WRZ2rPt0",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJgBEIf2BBgUIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "Hn8WRZ2rPt0",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "5.2M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CJgBEIf2BBgUIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CJcBEJmNBRgUIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-Vqwem0kpc_M",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/Vqwem0kpc_M/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBy4jF1RsnIarNfY2NfXnq8wQzqVg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJQBEIf2BBgVIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/Vqwem0kpc_M",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "Vqwem0kpc_M",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAV_-5pJ0Opb0xUVUtsksWJkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/Vqwem0kpc_M/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CJYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IFRAjGt8PogfbDwrYD0FhYThFd0Z0aW5FV09zUjJ3bWhqY09pMXkzNXBvZ2N2Ry1aQTU3aXhSLTh0ejBnWnNTZjBTWDZaUlFrXzFyY00zRmM3S0RjbXdXNU9JQURJZURKV2VMaVlud04wM2pXdWw0bkJzU3VYMFdOMDN1amV3V3EzcWU0eHlvTnpoU0FnZEdTbUZQeW1IQ3hpaTNoQjBZaTdzMzFVVFQ1T3A4TzJXYTdZN2l0S2RqTWg5R0VUNEtsX25JZE5EdUxacHdsclJQeWxPeXVCRDB6ZF9zX2dQaVgtRnRfSURsLUp1enBSS05jWjg1TVl2MWo5OWMwcTBZeVhrcVFHMHRsdXlQY2ZiOGRnMjU4Z2VJY3FZVFhkdXQwbmZEblNvV21LTngzNkItQmlLYzJHMnRzU19Md1l0bXZaVmp1RS1HQ3ZXcWhrNnVlNm1Ga0JxSjZ1YlVFWHd1TDNvWXJSYl9fT0ZKMjAwYkVvWnpEbkE3ZkZuMEM3X05jSGtKTlhTMkZfOXhZSGJ3SENKN1lMdGU0TW1sQXJIXzZ6Z2YwWlRZSU1VcmhxaHI3UVRPRnQ5MjFnZUU4eXdEdTdvd1hLMzBoeVRGR3J1c1NhV1R6NDFONS1mWFpqQ1J5NkVoZmhwbS14ZTZCbEZyR2VpbEZyNFgweFYzV3hJZGVsN3lmZktNd0d4R1lKeFVUVlVocTR3UXZFOEw2UGpRTVN0ZHowaVRsYlM3a3ZNWTNKSEpKSTBRMk5VTmNCbk0wd2ZrY1Y3OG9FTDRmT2pZUG1LLXd0NGJ4ZXpsSWVaTHhfNTJhV0tsU0JxeU9SWTlzalBBOFQ3WGlKOWx1QUpDalJDNDFhbjJSYUpyb2tpZTl0R1VBbUVKa3ZTaHZ3UlJYMmpvRm1sb2tXbG5lbzJKUFBYbTIyWjkzV2M5MFhEdGlkQ19GbkJ0d3VGWGFUd3BYSHJHMzBhZHZUZERzVzhEY1hkVTNQbDFHRjVtSWFFYVJwVV9JTlpoWTdYdy1WbEo4RWoyd1NYeTVZSFc5cy14WW1vM0lqeFQzSmNhSjJkeVgwdXp4SXZGNHJ6WjFqaW9yNVpVTVZfR0o1Y0tEdHU2c1QtZ3dLX2dldDlUWDcycV83d0JvV2steE5Yd2NaQk1lNGU2VTc1QUVCQ3QtZm1jUVBEMkZjR1c1WVpnZ2NxcHJxaDFKM0hDaXBaOGg2aEZyRU5jX1NMN2Zoc0hsQk9WUHF0VmFtalFuZTZSaWp1TFJCSi12T1RqZTlKZzNaclhBS0ZyVl9TVV8zWk5FSFhqaVdiRFlEeG1sNlkzMklwUW4yRk5iLVBsbXhFbGpyNHpCLW11elFqT0hscDBXcGJ0YTQ2ZGY1RVZQY0JVVTZjU25KMHJFV3FQaXgyN3BwZlFUSl9lSWlLSDl3QXpzbXNxR1FNMmVWT0F1Uk9zTS1RczZFaU9EVDI3QnpvWWxaNE9FRks5eXRSbklaUnBBSmhWazdheExfQXdlWlZpQTZYak5rRi1FbHpNZkhnVWRKZURkMVBvSVpjQ3JtV1FCamtndHVwWDVpd0JHeWRFelpyWnhGZkpSdnlIakJEOFp3SkRXc2Z2YWIzMm1PN3YzNGd1dDI4dlFVaF94VVFkZEpZakZZVzZTS2diM3k5SjFRbW5UUnk1Y2VGdF9KalFyRmVKMW1mRS11UHRxRHJLQ25nTjVYVzk5SjBSUW5ScE5CRjFMUEhxNENwN3lFVkdJSU05NnYtdjB2anVhWkJReGxES0YtVXVHT0JyQ0VFeXNIT2VBdVB4VW1OTXVtWDl4T2VtbmRoVzdDdnFrRUFGX2N5NkF2SEQxVGlSYXYwa1M1WEo0NjFiZ1l0d2hOcXdUU0k1c252RG5iLWpsTkUzby1WSC1UN1czbkJpYjJIWVQzakFxSFhfMHppcmJvYTZCUFpDc19MNEtORllSaHZGWng3ejd0YkllNWpBMjZaWW5ER2t4bHlRT3AyTVp6amdHWk93NDQtenJDYkhCYm56N1l1ajB3RWNBWWtkY0IwYXh5bFAxOHZhQ2lBM2ZDN1hPVndRSDYzaTZYbWh0b1dETTMzSklPeldiOUxuS0JSRGhRNmx0ekhnbUcxanZWbWJNUnhLNjVHZ1ZCQkcyeFNuZ1NBNHVFWEZMSjgtVVBSdEg4cFJWdUQybnlIUlUwYzF1SjZOZm0tcVZkQXFYV0owOEkwaHVtZzFjNEJrSm03UHhXdWtoNUZ2bDRlazBZczZNQVZFSzlKVGhrdXRqRWZvTl9BQXRSUURkeFY5NVJkNmhiYkpBU0oxakc0VmlsLUpYUE83d3REdDNULXBIV3lKWFZacGtXUDNiaTR3cGl6VzlwMTVNUW03c1FjdzZ0QnljR0h1SlRtSnZyVXBCUm1yUEN0TGxaTmVmd3dzdkk3SWQtanRYZjM5bEhuT0xIakdsYVVqd0szUFJadGFnUWNqWk5tdWdRbUdNcGxPbS1JdnNEOEpER293V2xBYW1fdTNfSkpYd0hLNEdZVVptMlV5YWxtdnc5RDE1c0xlT3daNGNBd3pYZzM3Y0I2U2xlazYtT00xTlU3ZGF4eDM2eTBkSHZVNmZwcjJzNlFUaFBNUnV0cjIwSHZHQ2pqWi03aHB1eGNWc1FMUDZ4NUw4YV9FREwySlNVWW00cV9RSnZiN0cyak5FUnVrRk8qDQoLVnF3ZW0wa3BjX00qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235926-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJQBEIf2BBgVIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CJUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CJUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "Vqwem0kpc_M",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CJUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "Vqwem0kpc_M",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "Vqwem0kpc_M",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJQBEIf2BBgVIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "Vqwem0kpc_M",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CJQBEIf2BBgVIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CJMBEJmNBRgVIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-1R2QfsaE8ac",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.4 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/1R2QfsaE8ac/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDDB_7VYBpkESzHK0bepM3f1b5SxQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJABEIf2BBgWIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/1R2QfsaE8ac",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "1R2QfsaE8ac",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAZUQdIw_RBucKymFAagV8CkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/1R2QfsaE8ac/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CJIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IFhAjGt8PogfbDwrYD0FhYThFd0dFWTZNSk1lN1A2X3ZzdmlMMFJhcHBvU0VEVF93OG12OVVsSnFrZmhSVVhEV0NTdFBPRnhsNFRydGUydVdzenVNSnUyQmFqQ0lJWjhuXzhheXJoMlFBQkxUMEIyY2puRDgzSDhVWFg3ZHNGTkwwV3k4Y211YkpTVkhON0dEVUdycHhYUlRETXBfSlpRLWh6TmhEb2UzaWtFMlk5YXJNSU80MURlY2RQNndGN0ZPUXRUczgydnZKMmtkek5JNkY3SERQUnZmVGNNMUY2NHlZVjJrNFdWdXRvbXRxUFpCVUpTRnRPOEd5MmQwTFVGZElkN2s5QmcwSS1LMC1Hc2pFSk1NOHU0VWQ1QlZZSENfUkFvQlYwMnp0MlpSc1V5M0tRWlBCcEVlMGF1RkpOWmJCQTBJSkdJb1I0cE5LV0NLRC1zeTFSUHdqajFwQ1M5QkozamNXb1FveWJYWkc5bWJvbWtwSGlLbVkxWXk1T2hDc1BteHBNbGtIVTlVZGlZMXNmNHk2RGJtcVZoenZtRGtuUE9zNTlzYnlhRF9XamhGeUhQWGgwdk1vOFRCeWF2Q1RTdHJObC13aW84MXc0MmhHNzVwem5xaGFiTXoxakg5emRPdHB2S1hYTGQ0N3dHeTM0Qmw0TFVKOXdLRVUtRzlMa3c2WGZkdmRMS3F0MnUxWDctMlVKc0tLWTJ2S2o4VmY3SW5nNVpjN292WjNYNkxiVDJPWDdSV3VrdGRxNko4NUlzNEJkb2ZWN1FiaWhLSnVQOWxhamhqMG4zZzJCVXhwaU9Ja3VEZnJyanB0bGkyeWpkS3BHLXNKNjhwOUdiOHl6cjg0aWFsM1BaZWNCdWYxazh1d0tOLTg5RTBHRFNWcWZuQjNjOVV6SUFEZnBKN2N0RU4wTXVmbTl3dDU3MUM0Sy1iTFlSQ0pGZjlIU1FnZ0tpa19BSU9TeUVpb3pTS1hFQVdLZ2VJN05tUkRlWUtjSHdHMXE4bDZqNWR6YXpvMWhZNUdKRXJCSUpPelJ0aWs4c3NINXpIdkVnTFEyTWE2aTFaRXFHWEZfaGw3dFNDTWlwai1xcmdtQnFhcmplSklKUEpFNFp0YjM4M3NuNjRCWmxNMENmdmxQenpXOFdLbmc1amJlX1VjQ09QY3hHSjBJcEhIVDdWZFpWSzU3eHF6XzF1Mm9jMWUydHlxTkxlUnBXVGZ6bXY5UnEtckpaLVJlSnVYb2dOUUlCY3Vuc04ybEZvekZkVy1UMXpmak5DU0JxNUlpX0FUcmhHb1hOcEo4dUM4UHAzT1dVNHFhbG9McU5DS3k3bjdsS1hPdzJmX0dVWHBnVDYzalB2bTFNUzhIRng2dnJRaUFubjV6T2Y5bFBtT3FTMXZUM2VSVks4Vi14Z2g0cm1ONnpnbW9COTZieklscExuQjNYcVV2dl9qZ2pqZWRUQm5ETlpTNVZZWjQ1ZnpHbXZMWHVwUW1WbVlCQjlnSU1tVjhPem1tVWZuS1Y3TWt1SGNVTDFpTTJjeTRZX2RNNGF3cFZ5WmdTZE9NS2NiYVA5Q0NQZDFTOG01aWJDeUhFampON09UZllvVWx2dnZWb3l3Z1gtU2JWQmhFZm51LXp5OTNfUmVFeGtidVIyb3pIb1BiM1gtMEVsS0VyVElweEJjSGFKXzRjaXJSQXdyNWt1eDVmdTFXak5XZExVMzVXWTJEQnBYdi10RmFITkV3b2F6dWVrWUNvTmN3cEtuc1dfRC00NkZLNDYzb1FGTWxiZmdyZl93Z2pSWHVzU3o2M3ppQ0tobkdnTHNNSVBCYng0YlphUTYzNmFrU1hyMkZucVFDT1BQMGNIbjItYVJ1X1luQXVPam9KUm5BM1laMDlwYmZoTmRDQnRPN3VBbF9NcGFBNTlDV0JBMG1PbW5IMDZXXzZIVl9FVjg5RW80ekNuaHpIdzM4NmNFN1dVTzZWUEpLeWV2ckJEVVNEM25pSVFNbmRyQktXWVcyTVhVa2lMVUNkVXd1N2NwV0diTmhpMzhEU29PZmhKQUZVVm1QdGg3d1UyUXJpOHdhdGNTWnBPWTA2YWZQa25SLUVMV19scnlURHNZQXhnQjNieVppQTdMd3Fid3ZGZDN0YWZNSV9VRGU4ZHc0UVdUb3o0djdqQ2xYNURhUDhQSlpQNGN2M3BZcExKdlBBSmdPVlN3NlRFVGxTdFN2cUktdElFMHZDek9lVXYwYW1IR21OY2ZZUzFzVnlpam1SNWxxNGUyWjdHdDMxN1JxMV9pRkhHTnZzOURnZmwxTlVwbXc0eUJYVjE4bUNwam00ZUU3SVJTR1E1cmRmdTVoMFh3U3ZVc2tlbTZmdHFvS19CZ3c3aEFJZ2pNRk1yS3hKRnBQY0pTNE1hUjlOTFdhcURMQ0NBTE50clJWbXJZODVYd2lzUDB3cjJuOVRJRm5yblVLMUR0Q2pZTXRNd1hIa3NYMy1ndXl0UzBuX192dWthTkp1aWNJbkR4ZG15TWlBNVc1TUYwVWp0RGY5RXFENV9PU2FVcWIza2tLelRGcEpNWk96c2NEcmZscWpheWo1OVMtMkUzdnVrZjhyaXk2NUcxSmhCY2EyQmFlWEViWXptbU4tOHh1LWRZZEZEQm5UdndDWEhjZ1R0RnpGbGoybkh0dzd1N1M0UkVmN1FsX1M3MVZQeFIqDQoLMVIyUWZzYUU4YWMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235927-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CJABEIf2BBgWIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CJEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CJEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "1R2QfsaE8ac",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CJEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "1R2QfsaE8ac",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "1R2QfsaE8ac",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CJABEIf2BBgWIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "1R2QfsaE8ac",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.4M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CJABEIf2BBgWIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CI8BEJmNBRgWIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-I4Vr2LlAqvo",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.3 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/I4Vr2LlAqvo/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLB5VwNjs2_3cT3HQW8guRQukfINrg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIwBEIf2BBgXIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/I4Vr2LlAqvo",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "I4Vr2LlAqvo",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDpdlGidoLJCqV7BOjqCFCykAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/I4Vr2LlAqvo/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CI4BELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IFxAjGt8PogfbDwrYD0FhYThFd0dtcUFGQmpQTVBpRnNFbFR2dllEWWdWcHE3Y3J6c181Q1F1RnVxUy1zYTNTM0l5b0UzUzNDSktmMUswY1NybmxEbnA5WUNETWM1TzJxVWREMUQwM2NDRWRHQU9tTzJnMmxUVlVuVnFtbTA0SWVkRTV0eWp0M3Qxa2lCRC1IaDA2V0JFbmxvbU5HNHFHSFNnak9RUHNETmwzaUtkS0lYMXhoSVRQaEFrcGtBUnJiYUNQSkxXVWM0dDAwbnp0bHdyOS1MR0x1Y3pIODVZRzVxTUh5M3VpQThRRElJNUdqODVvWU9BejVvX0VZTHl1NHZHLUh0NzdiMGJMQ0pLalRNczNlT09ZNHlOeFRjbUNZVVFMTGJEMmloVlpLLXFlOXMtYUpKYWNySy1va2UwSGhQNGNFT2dKSjhjSEg1aFBpSlNtR2VtMXRMUzFMUGlvVDYxTFR1U19tcTItYXdoc3VWQkhzX3FYRVNjZ2VQSms5Wl9yTERfNkpXdjE4Q0lDdlFZMXpWR2gtaUlZbTlCWTBDN3dOLUJpampHdmFESnF1SWxFNXk2bEw3QU9GZDY3WXdJcTJITURIWlBKMTFqbzBMaEZEZmhHRjUxUnFfM0VQcTE1M2VqU3p5RW01SGZBdzV1VUNGR2dVd0l3UzFqYXptRG9mTGlCZG1qU0JjTTRCSmRZdHUwUFNPbUZnZmxUdlFwRFZXcnZWbjJIc1djaEVCLUx5UktVakd4bnI4ejRDdnJ2djVHclFyanR3S1ctWUpmRWdFb01POThkLWxXcVBIZExXeGFNdzN3OGQ2clFYRmpqWEpGZWlIUjRBNmVXU1o1MnNXaV9QQXRLSnNtd0hmcld0X3RQMk5UbkVGVFZMX1pWczZRQzJpTjh5ZVQ2N05HNHcxTUZicXhKb1hWT1VNcm5DeFpId1pROWdmX0JKTC1BNDJpLUJpRkVUdDdtUUtFWWNZb0k1d1RTcWxlUTJlUk4tdWtNNmR5RWZzYmtnSWxydkY0WF9VbXB4TEJZbVlaVFBxRDJTdHZtOWdNODQyY0NXbXhJOGh2Vkd4ZTBBRWhhVldhX1hNMENhcTB2bkFaUk5neG1LOGhRYmNPTEJQaUdfR0dCVnI0ZFFPeW1CV2V0a0lpbFUtbW8zSXFRc0VoUEp3SDRkc0M2SkJaQmw3OENNR05ZUTVERENiZ1VhOWJZZ3pFUVRKSGExaV9xVDA1dzVnTzF3QkN0RDFqbEExT2ZCdnY2QXlKeXhDSm1XUDcxZFNVWDJFdDlzREF4QU9tMXk1QzlBOW9oejVWLU5YZXlhbmIzSmh5aUVXdmtrUDY1UVZPM1FZQXdsVlZlaTczcXItOW15NTRjNlBpMFJndi1aTzlpQ0hBYmhTRl9XSUtYOF9kYVk1UnhYT0VUS2MxblA1ZG1JcWZNa1VBT044ckxJSzM3QlhwRkk2b1F5WWFzeGVPUnZBWjdEZFlPWm1YSWtEMTk0UUE3ZjZXTFVPaC1aUHVqWklyN2hWWW5FcnJ6dnRCX3lQRVh5aWx5THlwTEJDN2lYcGYyMnNlOUtQWFJLSy0wSzNSYU9kZF9FOWc3dUhjcWVjaXJ4VF92cEJSbHFfNE16dE1jWGswTHdWOUtweEdxRTd1VDVUVVZmUTVVTkhUTUdSQWtpaXNJakxiUE9IOXppa25NRzVNVThtaWtNSEZGOTBvUlRNZXFVaXhkems3b3lqSTVsbHdpVldlNDNfZTZqZWVqYmlhMExaYUJDcS1rc2JfdGlab2xPWTNjcVRCY29aQ0o4QVNzbmhDR1hWTDlxWE9HMGJwVzhDR3kwTDNBc3lCSk9EVGx3UzgwN0RubEpSdi1Sa2xnaDZfTjEyU183X2ZaZkpQYUdkNTg5Skl4N2QwVi1NMy1WQ2tUd0tRT1pmUnB6d1NRa1FwRjIyQzdvMFpTSmhRLTdCa0xRWkNVSTJ1bmx0TkRDNG9nX0wzekV5NW13ZE40MGYweHJlblQySTlDbGwtTjY4a0NKM0Y1eDZvMlZqbjhFTnBWLXV3SkNkbUZJNGozazZnQXd3U0IyR0x3ZGcySnlwZFp3NWVuNEN2NEcwdHdEVXJYOE9JeWRiS01XX2xfSzlTbXdOSXpqenV2X3NjTXkzcmMwNldCV0dmYmpKSHhLcW5sWTdpX3h3cFA1YnM4czF5U2JBeHpsV1FXUTR5dzVkUGtEeDU4ejNicVY5RTlJckhlMk03R2pVaWNQYWFYOWRKeGY4N0tfWFRvNWk0UjRhcnN5UERkNERxQnRVeXZmRl9JdFIzWjdobjcyRU4zeDJ6UXFrYXZYZjdwcnJQTXc3dGdtWmhabFRTbTE5RjJabndiX0k0RlIyU2dMZEVCdm9XV0FsWE1zV0xWUmtLSE8tQ2l5U0N2Q25uSmZTT0plTk5pUFllY1hRS1dELWhZSjNnQUJBTmNVbDJvOWU1ZVpUMWF6STRqM3JoTXQtQ3ZxOFdWakFrazRPQ2w5WDJCaGFta210Z1BoRTNLcFFESmRGZFd1RW5xNDhVOTZWWkw3LXVsUDNsei02Uzcyd2ZPWHJhRmhCUkNyd3BySjY1eGtoZ2cwMDRNbmFjLVBNbi12TDlTcTNCOVd5NzVXVWdFUkFNTEQta3YxN0JmZThtTHBpM1ZJU1c4VjhudkdUMWtReThQRFAqDQoLSTRWcjJMbEFxdm8qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235928-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIwBEIf2BBgXIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CI0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CI0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CI0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "I4Vr2LlAqvo",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CI0BEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "I4Vr2LlAqvo",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "I4Vr2LlAqvo",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIwBEIf2BBgXIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "I4Vr2LlAqvo",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.3M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CIwBEIf2BBgXIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CIsBEJmNBRgXIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-y5Tkt5M0cvM",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.5 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/y5Tkt5M0cvM/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCsNCAJKEoqYWxtMb-6zpDNBs7iBA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIgBEIf2BBgYIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/y5Tkt5M0cvM",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "y5Tkt5M0cvM",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAB3CY2fQGobf2HBa58p8-kkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/y5Tkt5M0cvM/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CIoBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IGBAjGt8PogfbDwrYD0FhYThFd0diY1RBUTVIOHBOWm5yb1hsN0lwd1d6LUFnMG9CMlRNMF8tNnlBTkRWLVhpZDJGNGlpblJ6ME45U1cxdHZsUWxXV0VMX0hudTh1Q2VkZi1nREwxWUVLa01obGtJSlhzQkdwWjI0aHJCRm5UYWx0Sm9zMGVEbmtwVDRjbWFCRml0WmpzM2hZZDRuYndacDdtVHFsS3hFRjRSZGhjVkpjclF1YkZhSTBTWVZkZ0t2Z2Y0OVRNRWxhaHFwSUdPNWpiMWdxWFZJN2hKLUJPdzhDYnZ6R0VhR0pmS1VRWHBBSXlIVi0wQVFibGI5MHFWTTktTXZ1Ym9jaWFtZEdCNER3RGZoVzhiaUVxOUN1cUQzUE5ibWVxMHpZSmlsMlpJTEdWUmh0Tmg5b0FqUmlvWExuemFaVkJVQm1iWjhVaEV0UVotY0VqMkRLbC01STZ1RFRySkQxWlZuRktHNnhNenlPYXJ3RUlfQkhkSl8xdXJScVV6RXJFTFdVcjRubDNJblgydEZadHd3aF9LVFpUYlpSd09lSzZjMDc5WVZTT2VrM0luTE1BRDlLZWxOSDY4TGE4V0ppN3ByU2dDUE9oZVVkdzFYNDl6SC03YUNGTklpYUpRR29CekhlY0RrdEJxZ0RMcXl1elpNazBzNTZCWWtTUmJuR25wUGRodm9WWDZIRUM2ZHk5NVQ4MHdxWjZKNjRuSExBcHZwSlpDWG5aRDlNZlFKc2VWeGVWZzZkdk5HUENMWklsQ01ZNk5hVDRkYUxFRG9hMVR6UnZ6RG5fS1k1SjZkZlIxb3I1SW5IYXNjUlE1dUtGLXVzcFU0NXFVMmVFNmxlR21vTFl0WDNqUTVBWWI5ZWFERUtRbzNBRnowVTczMlY2dEVLNHJGbXFvWXZaT1JBY3FFOWxuN3JXYUxHaV91c1dqY2VkVndoWnRUa1JyN1phaDlvUm45Wm9kS1Z2SEJxUXNkMnVoTURBMGt4RFNJMlRJRVNYTDREcFNWV2FFazZoNkpWb3d4ejNGNjlDbmJTaXh6RDRvQV90aURLSGtHQnVrc2xTc1ZTQjRRU2s4XzczdGVUU2ZUajNTNFk4NTVhTHZGbUJXcF9NUDhucXV1enBHXzNtYmdGUXc1MzRJQ21fZXhrMEwxUE9IZ1lwN2lld0JNYlZ4X2dvRENDa0lGcTQyYmtaSjg0bFluU29JYVJiSEJJN3hubHVQWllPLXk5eFctM1l0NmI5a0hLbWtKaHpmQkJ1SGZfcU10MEhxQUN5VFVJQnlyWllsNGJQUDYweFQyYjZmRXgyRG9oR184RkowYXNBUnBSUFNkbjJyU1czQkVFUHhvUXJYUlpDOFdpb3l4VFFkZ1dPNHBjc2c3S0IwSVJuZnFnYlUxd0lRbnNSVjhLaEwyekVOWWlQV01vWDhsZlRidmlNYUM5OS1vSl9fMEhUNkpjWHlXNnVIUDhXTVg5WlpybXduM2p5NldMQlUzb25PVnlvSDdFTWhKVDZZN3o2UTA3cVBUelJTRlVHYlc0YVBIbmtKa0l6Yk11SnhkRFFEaGxXaklUTXo0UXgyZmhsMVlId3k4YUpfbllJSDhYdXpWcUtScVZpZGpqa2Y0Mm5fS0Rsd1JYQU96elVlRU9MeC1PR01pVTdPLXVNQkVrQll1bE13QUVOR2c2OGhKXzdGeFIyQ2EtR0p2blg0OUhzN1NQRUR5eE1nY29QREN3UFVNaUNlQkktZGtTUXRSaWs3VDBhMGJ5TjA5c21zbTRqNno5a3A2bnhCRV9OOWJXd1BWR0RrSWFKZFhGVmlkSE5wU3dKMUVJWFFZeGlvTU1LTDNJVGJOUF9CSXdwdUlwYTl0OFp6ZHNGTEVUelZMSjFVQng5TnFYTGJiSkJTQXBmUDFaeVRkVmN3UVVjVVdlbFZzaWhDMWpoRTJtckFtaUpCUl9PTzM5TFpjanZpWGhDdlNjaXhxWWhLMlBxVThUdnNONFlXR3EwTU52Z3hRNnhEMV85S2l4WEZiZmk2NUNjaGdZT05KSDFvQ2U3NlRRdUtmalU1bVVXSGItZVJLeXpWQUh5Y1k1TnVKZmh5SW5COVZNRU1rZEFfRi14QVFxNWF2eElHcGNZY3BJNFBxMlNkbUljd0VGYlh1dmpxenhGazB2djZUN2w5bkVmQ21veHJPN3E2SGJodjZPejFyT0VncjZnNkZ6OFFBU1RoR2ozZXRpMGU5eXo1MFNSaUF4SC1WOUdfbmJfZmp4S3hBNzJZWEJ2cmh4bkdUX3pMUGVhTkhSU1hkX0ZvQVNJNmdWN2hQVlhkS215VnBXa1U3cDk2bnFzSEUyUGxmNUdqS2lfREJXWEZvd3BHWEZMaUNTV1FKYlhMSDhGRGJRSkIyYjZBbHNFVl9CcU1NMWVsMzd1b0szYWRGcHpjUHZHTW51V0JVcEw2UEo2U0JCcHMxb0FjdG1KZXcyUm1TdW1XMHpONmt6TThNYjJESXFkNlpvYzBRZFU3WGlHM3o5WHpobFNpSUlmZTQ3eEtENVl6RUVNbVBVUU1fbDFONW0wMEZsT09Ud3ViZ3RKWks5MjJVb2o5V1l3cmFNT1RhSS1zTjhHSXJPN2Qxb1VRMVZOWVVzM0dwOTZESHQ5TjhRTl9YNWt1S1lBM24zTE43NVRMazFNbl9JSFVGbEtsejUqDQoLeTVUa3Q1TTBjdk0qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235929-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIgBEIf2BBgYIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CIkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CIkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "y5Tkt5M0cvM",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CIkBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "y5Tkt5M0cvM",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "y5Tkt5M0cvM",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIgBEIf2BBgYIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "y5Tkt5M0cvM",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.5M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CIgBEIf2BBgYIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CIcBEJmNBRgYIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-AYPGqMvF_Mg",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.6 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/AYPGqMvF_Mg/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDpmFED6f4teb6RRbTi1xsQ7z95VA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIQBEIf2BBgZIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/AYPGqMvF_Mg",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "AYPGqMvF_Mg",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymA4N2dX2c6zHGDDmb2Ci4xBkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/AYPGqMvF_Mg/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CIYBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IGRAjGt8PogfbDwrYD0FhYThFd0ZCa2RwRU1HU3Fqb3ltcV9zM1BPc1RqTE8xZGxDajladFlnRVNJeEJORFZaRjRIcUFUWklUR0stYTFSM0JLX0k2QU0xRXJLQzdFRXJVbUF1YnpGR0xwZXNaYlZEbXN4aDRKbk9nZHY2dzhwam0xX1hDUEhkendZVVVJM0hReVJ1MzVHNUhId3dYbGVjVkZEb2NrZm5PLUhfNzFuWFBmVlcxM29sc3AwR2hPd0dYYk10RTdnS3JOVEZxa0d2YmlCMDNldm9EX0RpM3FENmhsa2c5Q1hrVFpybVUtSDVybkdmblVaWWNJZzJwb3lDbi0yUEFLMTg0NFVYOWowY2dwRTVRZ01aUGJsdXBTeXJPSW9aVUd5S3FhbC1JT3ZRZUZNQl9TdHZGVy0xcUFSLTlrY29ERnNmWTVfMXNqT1I2TnQxbjVuWnhtNi1MQU5aeWRmeGFycmY2ZHNUNnRIai1IMEJ3dkpmZHVSOWUwd1ZxV21ZbWlNZjNVQzF6TGJ0NjJMcVZldUEzeXZxOS1kZTFKRjBOUWcxSEJjVEZ5cmJhb1lnQVpDbGIzalpGY2VubEk3THZkSjhQTHFvTnRKTkdkVS1HazhtamVicTlueXRZQjVyM3ZWZktSekdXOGkxSlFPRmpLQlNvcjNDWE5ndGdkZDZMMlJrWXk4UGhFXzhMM1dDQWV3TlJRM0tyR3dlaV9uOWhDTkZnTkRiY1BCN3o3NFhMNFNMRi1IN0NpSjcwei1aVUZobEZuMm0yVVZfNG1FZm9tYmVQajVRVXNoZXdzYi1FMVZBckdxZ2Z1eXAwdmRUdUprQ1N4T0pZXzA4UjUwRUFLUS0yV2lHLUU3X2dmOHVNM28xTWJ3dG42bzlwbWtXdklZcmo3bmJ5QjVVT2U3Skk4aS12SWdwSy04RjhmSzRrYkRLd2RYRWFmTVRWOUJVQVJFUExTUlZRYzV4U2xpYWk4a29tX0lzazQ2V2hnT04zV0tJb1B2TFl4M0NZZXRBZ0t4dVhmWjBfdzV0N2tPdFhMWkJxRFd1blN1UUljeTJUdmtLYWN1Z0ZFR0h5TzU0TUpIWmtTakMwMmpzNUpGYjYzOEZ0b2VPZS04ZHVXVEh4LUJUcXd3ck1keW1aZGtLdXNyNmlGSWMzQkZSN0xDSVFiYWlnNmV1UU15SnhtMzFTWkdsQU5mYWN5RDlFalR5N1JNSHpKWDlrbDBUTmcxNTB0ZlhEbmNoMVotdGhiS3ctdXA2dHFGOUJWRndkVTdoN1NBV0sya19BLVpGdFFMZ1dLczJUMnE1S29HblZnNWpyRGhCZm1yQXFERThLaFJPdWoyRU5KSFMwX3FtV3NwRG1iSEVtOFdxczdNWnVFMHVnejMyYXdQWm9Id29NRkItb2VFNkM4bkswRWtvRnNidEFUN05LMkw1VFRoU29GTXdNUHdaLVVZLWczMDdYTGJscVZlSmpSMnN4U2RTeTFVUlhqaC1mZ1VFZXRYTFJOVzVjZWNzUElMc0o1WV9RRXUyb19sT1BNV2RsYlBzT1VNUHFSNEs2TGo1U1ZzZDBlRlh5ZjdXRjZ0TzZZMzJEaFV4QWtQOU9JSUJjUUhJQUZlUHEwUnNuT0l3X1l3QmloMmU3MlN6dHlzMmNQbloxVm0tbmdSbUsyLURQRk93RmhjMkVKUVNnWnRpdDBPandHSHkwVHVwbGFyaWd3cWlMcHNabWZPMU5LSWRKMTE2MGxGRTRkNEVlNXgtNk10b3kyS0kzVENVU2JCYjlvRnZwbFJzYmt5ell2T0EwMGx3SVVYeWthSU1XVEtKQm9sWDF6TnF0YXdlYmNKZ0Z4WU5IOGpkUWk3YmcyamNJS3gxRTN4eTJlWWJYZHFhQ3QzNXkyZ0d5WUlEXzl3b3o1dmJnWnNaRGl1NlNydlBQbTNzYi1ORzlDNktnRjh1VHVmNS1jTU0zZG1zdmlaZFZ3QUtKcExEVU5IY3U0ZFJ3a0ZKaGtwTWdVdWdjZVRCQUFiazlMQ3lnWnVlUW1LQ3VDaExJTTIwUldmYjJlNWdxYy05SG5adU5DYXoxUk5XQkRNWGtaWEsxdkhrMWx5dHVJbFlrNWZydXdfa1VJV1Q0NVMzWl9FRjlRNFUwZ2YwM3QyZE9UTnkzTXQ4cE81bjdJVG91ZFI1b0thTXVGZUxmU0Z4OWJYRTY5SWVxbTZUcWhEYU11ZEpweEx6eFdmSDB1RE12X25NallMdTVYdmoydDhHTWtINEVlM2N2ckxoWi1yc2V3NFdpMUtxOExxQVlRWER5eVl1RkdmSUZkb0NtUG1FSmk4M296bjdOSWJLaXJnckttXzduakEwV2x5MlRxeVBIbE0wT084NzFObUdjTTdjSkFtaHpjd1d0eGpkSUNoRW1tVEhEMHVYUV9ERHVEUl84cW1wYlg3dmRWcWZyUmpSeERzQ3M5cnNfRG5LdHdTVldzeEtXQzZfTmEybXN1SUN5WEdkWi0zNHJYMXhDcURBOVlPcWRWZ1poM0JSaV9pMU1oQjRtVnN5VEFCUkxwNlNyMnJqNk9ZWHJyV2FsemdRRlhjMHFTYkowYUdvZXE0ZWd2VG1DSWlsUDJBVUdydlQ0ZjR4QnVZblNDeDRNQTdHRGh2TERGVmxSSEF2SUxraW5qMEs0NUtodFJpSHJJNXJsYml5R3cqDQoLQVlQR3FNdkZfTWcqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23592a-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIQBEIf2BBgZIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CIUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CIUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "AYPGqMvF_Mg",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CIUBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "AYPGqMvF_Mg",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "AYPGqMvF_Mg",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIQBEIf2BBgZIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "AYPGqMvF_Mg",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.6M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CIQBEIf2BBgZIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CIMBEJmNBRgZIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-9jAPEY5sSfc",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/9jAPEY5sSfc/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLD9zyOJQdfJ6vYOoJOtMvcdtbEcRg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIABEIf2BBgaIhMI6Krb3NXOjQMVihJzCR3gNS31WhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmeaAQUIABDyOA==",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/9jAPEY5sSfc",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "9jAPEY5sSfc",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymBtR6TtDQ2eUGb7gHd_AkoNkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/9jAPEY5sSfc/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CIIBELC1BCITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IGhAjGt8PogfbDwrYD0FhYThFd0dNaHJFT19jTHVaaXZwU0o0UUptWGlBMURqcTlpT05yWWlOTkltcHZFbWZnYjV6VF9fblRaMGRNcUpvajNSNjA2SWY0NzNzc1A3dm52NnlsZXgzaU9BVG5DbDBFbFVWeF9ZQXd1WE1yUk9WZUlkWnY0SUM3LVNmM1RHMTlHWVpEVVVUamNXZzA3SERBVjJ4QUtwZ0JacExERlRsT0VHem9PMkUtNnpzUE5fT0hERGJQYXc0WlJMT0g4YnFnbEJzS1hYZU5yWlgzRGhkenh2S244R2p1Q3RhYzZfUE5NTjJnYjh2SmdWdG9BOXA3T0xVSkU4WldzVHR2OFdyR0ktZFlFbUwyWWtBMUF3NzlGNThhZHZrVU1Ub243QlBJUmlBb0Q4bHFKLWctZmJzLTZGWkhjc242QWF2Vml5SnhoSVFyTkhsdEI3TnczTjFuYm9aZ1lLalRfeFNrbTVSZVhMR1F1Tkw5ZWh5WkxNT0RWNThrUlJfcGFnRTlMMVh2dzJrRGQtRXZaQks5SENYS1NieEtxc2VYRnhBV2d4T1BVY1hzUWpkOGotZ0tMcWJDT25WU01JX3pYNHk5UmZ1NEFTSHBZZ0d6VHhBQXA5czc4SEduRGhNZ280M3Q4RnNOZ3UzX0djTTdMS25PdkJuSUpzel9uS0NDbWlSOVJ6SDJqRFlYeDdjQ2ZCdUZVVFp5WnpmUWE4Q1d5alIyUU5Za3k3Q1JOTG5zTndYUGktWTBZdXhxY01OazBYdFMxdVprV2E0ZFZVUWNaWGNmZHZVNXdNcFo0V1E5TTlCbVVqZjExWDd3OUMxZFFRSW5XeHdLbjFYYzRBSlZ4eW13M1NlUUVCOU1FVHUwNHJSQ3IxVVUwLUszczdKTkt5cmNual9hVnJuUURVN25yM1MxaE96YUo0cFg5NUp3Vm9GaGxQWlVRUExhQWd2aE5zd3VkMndIM2t5a1FhU1plSzVnT2NPRWVmakx5S3gzNXZ3Rl91RE9IVmpLb0w0OVA1ZGNpaWVPOThtdWlLMFJGVTRqZXpqd2l4c21kVlA4aHMwdk1ZSVBjM05ZdUh6VnJ2VUh2eWVBQUJTeExmRDYtdnp0ZGxjd0tlTDFvcEp4YmVnNF91RkVSODRYMnFGVGs3bEpLOUFMXzdBN2lHX2V3dExoc3ZUNmRVWjBXeXdfUmYxa2VBLTVMRlNKbFdILXdFa1JVWDFXTEZmZWZ2c3lDbllOdVhTS3g3UkQ2RTEybjA1UHRrcUg3cWlmbmI0djdKWmpuVllJb0I2UUlSNERNOEtGWm54Uy10Q25nWkFpM0RqQzAtMHVCUkNUQUtRVDRic3JDb3VDV1JFS0RNRnQ5dzNGQjI5TTNlWWJrNGhOdjBwYmFNd2FhN1BiTno3MjNNbE9SaUJyWWtmdEFJaVhkNUJRSU5HUk12QjRNVEJndjhHeUVUVGR0NVpXdDRUVnp4VlhKclhmdzBuY3dMLWRNZkt4MlNlSl9BQXp1VzRndlRkc1hMa29kUEtnaDJkLWRmc3RKYVN4aGNJdWpud092aVZGaENCWEhlVGJlSjhGbmNsdlhtWXZOVUctdzk1dC1veDBsUHFJUS11dmhRejh0MGtmMWhzWTJkQTFULWZBaXhBaUlHSkxGcGxyYjU0eURzdEttcV96N00xYUNVMWdfcE9VTWJBazJBZnZLRmcyVGprOERva3Y4ZEdDTVQyRlFjVXFFVkpaQk50SDhxdXk1aF94bUhveXlrd0VFT3ktWGdnSWNsNDlHcGNJamx1TjZuM0VtRUVQeGtNbGZwNlg5QVlxdFJhZjJ5eGM4YW9hcVNPbG9kWkJJemotTFJCaXdzVUtZblc3WE9YSWhUZjQ1Y1cwRUJsUDNSOXF6WC1uUW05TWduQlh6c1dLQWswWWlVZm91Rk9vUzA0N0Q2dk5DWm41ZUxIdmo2M0k3cTYtYkYzUjhSWjF6VnhDeUhkS3RHck9QdkY2RGlXQ1lCQWZxQkdpRklWWHlwMXFmdTRYSnM5dVFDVVZuZXU5Y3YwLS01dzFzUWhDbXB2Zms3X1V6R3BZSGZ5Vl9WdkVWQTJkM2otV2o3MXpvS0JKNUVoOHBYYmtrSW5hODVkWUtPVFcwRlFWeTItVHF3U3BSbzhfUWlueHZJUExjVHN0anFjNjJuOTliclhvOTBMVG5ETHlVeW9DZUxSLTY1RGhMSnNOYVV3NUw0NVM1Z2s0cHZLWFEyREE3U2Z3Qzh0QTJKdTVHbklBQ1ZhbS1wYTdfVi1mLV9yWDlrMllKNEwya0czazJHM2x0NkVOM2trcnVaTlkzd3JRZXNSOERzZVM2OUhWTGVfUUVidS1leXZqQkxyS0lJb0pFOGVtcGQwRHdkRmFndlFLTFBZWDV1dXB3Z1dIcTEwQVJROVg2b1lvTUV1cTdrYUMzSEt2dkFSRVRMSHc5UTVEWUFDNG9GR2tLc2tIdURYaFVCX0dBcWt0bFBxME9uYmlWTkV6Zll1STlLakdlYVo4MU5Ga3ZKSXlzOVVqQ01tVUpVbml3TTJrT1pFX29uZC1Vb0t6MllJX0k4TFpCLXlqWXB3NW9oaHNYSUE0azlwSWoyY29obTBTWTI0SDhnTnZvNjNqa29rbjF2dnFNOG9UMkRxR2EyQm53SnJGSHUyQi03eE53N3Vqei0qDQoLOWpBUEVZNXNTZmMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23592b-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CIABEIf2BBgaIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CIEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CIEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "9jAPEY5sSfc",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CIEBEP6YBBgAIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "9jAPEY5sSfc",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "9jAPEY5sSfc",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CIABEIf2BBgaIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "9jAPEY5sSfc",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CIABEIf2BBgaIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CH8QmY0FGBoiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-VPy3w4NcyFw",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.4 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/VPy3w4NcyFw/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAJFhLQtZv5fl68N7lhFjAyTz1XUQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHwQh_YEGBsiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/VPy3w4NcyFw",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "VPy3w4NcyFw",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCoJAJ7EWS0Y3lb1VKlz82KkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/VPy3w4NcyFw/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CH4QsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IGxAjGt8PogfbDwrYD0FhYThFd0dKZG9YWWpHSmlSc25CSktYY1RvNWx3bDc5Ym4yNmdHbEZHLWlqYWJGZW5kQ1N2MnNYOWF6aWJkeDJvSG0zMzM5SmNTd0JRZHc1UFIwMjIwNE9uc2FwOXlnNjM5QVlJM3EwLW5ubUI1UXJBdVlyTm1hdk1CT3U4ZVFfS3o4ckxKVlhORjJyUHZiejVseWQ4cVlEaU9icGdkT3g5N2s0SXpBWWlERmp6SXpxTzRfbDNxcnBRby12czh3VERTc19RTGFudGxDcnlkdHU3dUpwTW1abDVWT0NtVHp0Q3lqeXgyVE81TlhGUFduZnozTG5SSGY0bFIzMzdyWTFOUEdPZWJWMmMyNTZuaXpWVzVjQnlCNVlZZFo3ZFdRbkk4Ym5FZXlRMGtDcDV2elRhb3hkMVR4cGoydVAzNkxfb2tZNlQ0YzYyZDJqMExubVVGNk0taXZ0OUg0eTlteW9ucWNtZExTTm56V0s1Ym9hRkZsWm43MU1CeWJQRW5aZGVhSWdyYVhmQmhZTWstVnBxcUdGY3lsV0hFUEw1aGV4TGFpQ3cydjFXdHk3NkZiS0RrazlfbjNPd0JQSTA0c0M0SmlPWDFRSE10NndITVdJaFBTWVpfcTl3eFh1c2d6S0JuQXpneVJwejVCVVZyVlIxYk0wV2djRWtQb3RveTExYlIzZFA2cWgtaWtTd3V4RXRKeEdOT2dDblNVa0FFdFp4Rmc0SzBSOHc1aUplemFkOGtGMmZaaE1SQ0pnWXNWS2JlSWNwUnBqNndVYy0zOUxLZ2JMWVJnajFHZ1JTVURiNUlOdjNyU1hQbl9pcjlxTDZMSVhMaGJNMFRSRWtqeTM4cWpoQkhRZllQSUdpdWxNMVBQRnhlcHd5dUFpU0dkNTBZYzI5OHd0bFFEZFdPV0RvMzdoVTBYeEpMZUQwYy1aeTZNZWlDQ1ktRGthRmItcllIQURPM1prNTZaSEh4MEMzU0R3aF9fd2JhVUZuSEJReTd4WmEzTzE0ZjBoY0RBaFg3VUlOQnpZbDVfWmZmbzFIVEs0OE5vV3V1OHgtS0ZyVFNXVDA3TlZVVnBkcU5HUjdvLVNVbFgwRU9KeS03WnFaRUdwZ3NyeWJPXzBST3R2LTBBQVVDMnRYZUc1OGJnRzMtOHZrQlFlc2E4VGVGcTdWckhXTGdWSktXN1ZTOXRvNlUwX3NySDZkU3FTdzZqbEVuM28xSUo1WnR6aG8yY2I2OEtNWXZySDVMWW5uVHQzdF9ZaUJPZmxpWkUzeGVYMlhURF9rc2lNQVlESEwtNFdhSEs2Ykp0TldQNV92QklWLVhXd1dtbDZ5aElnb1hmVU9RTE9pd1oybHFyVzNKUDBJYWZuZzNsY1JjODRfQU4zOXEzZlo3c3BlcktvbURWNDROWXEyNl9yRG1rTmVCRVY0ajF3aGx0U2czMXREZzA1bWtkT250aWkwNloyZHVfM3dUeWFXSEQ1UkdtUmg5aGU1Y0dRQWhUNEdqc2stY3pXT1BPWW1XUHZQSkU4eXc1VHFlS0dTMDlHRERoT3kzTTg0YW5DUTFxbDhlSERuMHNlcGo0cmk0Uk02OGVmR0QxUFF1Q3FxZ19DTUZDTTF5TWV0Y2VYOFV0SmxsNUsyTkEwZ0hfMEhtc3R0X1RiOG1wTmwwOHppb0hYbHRiMWtnMEFYYUNld1ZFd0JVV3ZWcXk0ZnM3QXo3eXR6SkFkcFc5MVhyeEJ1NnF3QmNUZ2hPTjUyOXgwLXVLb1Via1dkN3JQNW5HZFZNdzdZN3ZhWHgtWEtNQmlwUWdfNnd4MG1vRGJiN1lYaWZCRkRqNUJPQ2lPYjZ5ejEwc3hOdXdwcTY2T2plZldqZ3FSWV9ybDUzU0pQMGYyUnhXTm40M0JOV08xekxYUkxyUUFMcUtrc3JkWW1YdE5WMjFHVlR4ZGdJS25SU1otN2JuMUhSc2w3RElMWGhjdmp2TzdqdkR3WE5yemppM1dSUHdBSW5zTlhRQnBOTFAyVzZoUTF3UnhyZGhoQ1UxVnFNUTlTY3dTSTVRQ0FXZXVGTjRaZW1CWEtTWmZadVNuR1lsckpET2F3MkY0TzY3V1VZb3lXYzFUeE9LLTlKamowSXd6dl8wVEFFZl81bkZQc3B5djA2emRUcTFrN2UzNkVfcTVXVkQtZGtKeUM3VmJINHNfYnU5bnd2WUotNlgwYXRubFF4SEptWjY4RHpja0pURU14QVZtS3liWHMzQ1FYSGZEVUdrOXVkQ3U3TDh1UmlWdEExUnBoU3ZFeU82MGQ1bHNQaG5xQ2hoSjF2Tkd6Z1E1RTZQRzl2RHNpRmc4R1Fmc1pkcWF6ZVJwaDFleENWTko2eWhWUFF0R0VtQXlEcVh5QUFUcVpVX1ZWX0doR2hTN0FzUFBRWVF2Z3BSMktORnFvRmdQMlNsSGQ0aDJDOFRXMThrSGx2anJWYWM5VEZTT1NKMzc5M1JqRkpGNk1ya012ZXFsd1NUQW1ldUhfTWZwYUJfbFRsLTlwYTJ4aHB6c1g4SE4wdXJRNVNsVGlNYzNtenlCd3J6d19vUzktSW9PN0FhWWxKbGlsanpyTk1BS3ZrUEhzQ3ZDYTlFNWFZV09lcFpaYUZIalVQbGhsMGxYREFpTVplZTJNRlhoZHJUdWEyNnZhdXdadW9iV1FIYnIqDQoLVlB5M3c0TmN5RncqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23592c-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHwQh_YEGBsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CH0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CH0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CH0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "VPy3w4NcyFw",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CH0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "VPy3w4NcyFw",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "VPy3w4NcyFw",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHwQh_YEGBsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "VPy3w4NcyFw",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.4M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CHwQh_YEGBsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CHsQmY0FGBsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-4FI6EKpie-8",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.2 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/4FI6EKpie-8/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCbdV2i3YEWB2YCOKUJIcuxJyvHlw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHgQh_YEGBwiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/4FI6EKpie-8",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "4FI6EKpie-8",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDPnKMzCjO_38sQffP6nwhzkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/4FI6EKpie-8/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CHoQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IHBAjGt8PogfbDwrYD0FhYThFd0VUVl9oYzZVSXo3NW9LT3ZZSUxtOC1QUzBrM0ZIUkU1VzQtRGpLSjVQQ21sMnd4bWtqYWVaNXJ3aF8taUVSaExtdkdVS0ZSeGQ1Z3RVYVRNUVFXSzZxY0V1WG5fenNubXl0djlBZFY4Y3ctZktIQWt2bXFiMzhSakhWaTJJRDhlZjQ3OHgyTVZoNGhQQnVxSFQ1NHJRV0pFejEwM0U0c05ISkR0MXRicVYwVTl1My12WHdlSmZ6OFM5ZkEtS1NPYU5rbXFMRlRYSEM5cTJnc2RURmlOZnp5Y0FOVjQzZkxMdTJIZ1doS096aVNYckRYU215bm9hLTJDajBseG1zcnJLYVRJTlIxV3RYbkhwdC1Td3NYdllEV0prcWpqV0JicDk1Vy1NeWhYRTNfWGJ6elJpdmNPMnhhcUFxNnJSS2h1bkJTdzR1U01Jdlo5V0dta2hTZnlvWlhtZmtxRjFUQ1NkcVlxZHBTMEtwVTUtbjZ4ZVFwLWJ4T3J1QkhtaUxoMDk4bndlWTZyRDMzNHNQUXBGT18zWTNqT1lCWXVWcVkxUklwWWJNMXBWejZ6cUVkY25pSXRZcWdxbW15QU9qSUNObnF5UFNBRUZNdkZzYjAzX181ZU5kTDNsWDVMb0tuT2NoaGc5a1U2V09sMWtnbTFXUkhhMDYwa2F2RGRWdTRMSFozalRBNnNOUTExZEtQS3dob3hpSGZ5SWxnem91ZTI2MTd0MXhuOU4wN2xYWGZyV1l6RGpKZG5DZzJxUWtfRkE4LVBZN1VEY1BWWUdUTnJUQnBMRUZaMFB1ZzhlUGV0dmEyNjVKWm5UMmpOVnRIdnFFR1drOFZ6bDZjZFlMSU1IR0ZaZ3VKQUVHMVRqa29LMVd1NzI0RTNsWjFrWVhqbkFnZXZDNlQxdDJSeEtCWDYzU0lKN1dKZzlSOFowWnRSVHV3ejRpNEE0ajBxazdPNC1jaVQwaVhXVS10ZVBHQ2V5aUpoN0VoMDBBWE52T1NyYmM4djdLZ2JEQldITERhQ2FCSVFqMzZuU1hESmdNdkhHSk52endkM3E5YjAtOWtrT0p0YUFvSDZOdDhGVXBpbUx2WTJKTUtnZEJLUk5YUFYxQk44Q0xTVmQtMGxZRDcwT1A4M0dxU0xqa2VXV2xBcGRaM2dva0s2dmJfZDlMS3U2Q2lHeWZBTkpjaU1WdlBXN3Y2Rm1NYU14bV9uN3dvZWs1aU9KZ01mZ3VzQ2ZVOVlLM0d3d3lPeXAzNm81VnZIb2hCT1lhR2Y4emlZMkFyTFk5VnNKSEtJTjU1YlZMSlZrQ0NxaHdETnl2MFRycVlLeFR5OW9RSElUTTQxNlVVWFJ0amVaMWFkeEkwb21NU3E1b0trUUpfa0RoQmx0c2toYkxZWXZLM1VWWUdiNTNzUHRjTm5RcFZ2NUlnQnd1ZDJ2elVZRnNMUFJWcWd3ajFDd0xhdFR1TWRVVENWTDk1RFJPLVRpNGFGSzdjOTlnYkNZcEFaQm04ZF9ZVUpxVE9OcHk1YmdzMFlZUlh2ajViN0I2bTctcW9fNEVVZEpvY1Rjd2tSeEFDb01kYmNpVThaSGJXSVpZUS1xWV9QYlZPeTAtcFk0Z21QWTBCQVNnZTNKclJJb1lfNko2LWF5U0tBWVZrQmgzMl93N2tUVnY4Q29VRy1IMlVlR2t1RWJtMzduRDJjMkNRMU9VeHZFeXVKSFVZR1hqVENnSWV4eE9OVUVxVF9DMzhraHAzdnIxeG9oRTRBV3NkTzVuQ1dWZzhNVE9GM0owX3Z3dTg3M2hjN1pBLVU0aC1RU25zUUtWOThRSWZHWXU0bmFtemEyc1VNTk9tOXQ4ZmtQN2xVUFgzVHotYlNWTXlJQ1oySmRNcGd6c0VHNTdBVVNEMkxlZkZ2dkxYNnJYSVctbE56M1BEZElNWTdnLXUwNXRTZ2JrRHd0OGRsMHdFN1VuYWRXeFkyVnRKZ05aZTl1ZU5vb25QcTRNbHYzUWs1NFczbWNsR01nQ09TNk1qMzM5emhuYU1uam9oTXF2ZUdwa1pKRVZMLWMzRHAyeTRsdHRRSUExV3c4OE1LRTkwRi14Z0pHaUNUeE9ZT2IzTnk1WTRTNnFZdnpZS2FFd2tCd1B0VXcxaUN5SzFrMDdFZDJ1Y19VWERkZU1tbHNSTktEN01CNFdYMmNlT25xNGlRQ0F0M1c3V29ySEE4bXROLThadGRWeV9sUzJ3Q2NyTDdadHV0emFrNkN2TklSMGdGLVFOTTVBYkt5b2hwNmhIcTJlOGtFbGl0QWxVa244bzMxbnpJcnJHOFltaks2Umx5dFR1NDdKS2JYeTNoZ1FKYzdDMjVvUmJiYnNEZ0hSOE9SVkVRT3BFRzEtaERsVkQ2Nk85U3E1dnlOSWFURjgtTDcxay1mcjZQSHZQMFRfQ0RFRGFvS2lMRmlVQ1QxY2hHVGZIamdfV1Z3WUlmcnNrOXpSZVRSa2ZoV1BBaUhNdzJpQ0d4aWUtb0t0ajNub3NlcTk5TUhsWXhGdnBNZUgtWU1ZRXNsX3I2SnpILWZmTjQ1RmN2UUNveTFSWFdTTldGbHZUajIxdjMzdUgyZWM2SWFubEp0bEt2aHFFNEFwLU5iakNjT3B6UWpiMzhPLXR1RUlRRGo4eEcxblhoTmI0MW96bENEMXFSRm8qDQoLNEZJNkVLcGllLTgqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23592d-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHgQh_YEGBwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CHkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CHkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "4FI6EKpie-8",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CHkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "4FI6EKpie-8",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "4FI6EKpie-8",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHgQh_YEGBwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "4FI6EKpie-8",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.2M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CHgQh_YEGBwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CHcQmY0FGBwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-z1x7YHTFkb0",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.6 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/z1x7YHTFkb0/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAYji7ixDrXCM20LoYsJUy1XqU9ow",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHQQh_YEGB0iEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/z1x7YHTFkb0",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "z1x7YHTFkb0",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDw0hkhNQ6epsDH3UwC95gikAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/z1x7YHTFkb0/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CHYQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IHRAjGt8PogfbDwrYD0FhYThFd0hCVDdlOTVrSHRtVEdkMUZ3NG9qazhJZ3JaTy1oNWNVZ1ppbnBPQ3NfLWdSWFlncDlpLS1rWFBhYm42dUZPem1SWGhielh4NXhhc21LeVdEdEpSeGo1R0FSdFdSQmZMVXdPMXVGWlRUaDhUdzFoRFB0SS11UEY3LWJqakQ1X2ptWEFvYUxPTldCUEh0T09neDNWVEM4LWRYcXc0ZVRwWHotT21pYUdJUXpWVDNVQXdYb1huZ21nTjBBMldzY2FZbU9xWmhqSVFFRnFqX2ZfbEF0MDB6TENvX2tGUHRWQ19fb1RqVC1UODVpblBBNDU5ek5pNkR6TVVHWDBJd2taVlZLeTFIQXo5Qi16VlpQazJwMDdybFdmSzNQRm9NRWNIcHM3Z0dzT1FJWVdkRGtuQXRXaDdzaEh4U1dWTUdDSmVuVjBFMk5ySnJ2TDAxU3pVNDZlMk5tV0NCeDdDSmk1U0l3SDVKN2VTcmwxbEIwbXoxT3k0bGZHRFRGaEF3VGpUOXZmbG4tck0yMHpGbDdseTR0YTdVeDR6MWM5QVowLVdQSjJNb1pmZVlCbzk0eW1Ed0VvYnYyOTFselQ5clppdVpleEpadklaUjJGSU90S0U1RlFxbXdHcmFudzhXdVdkbkVQUGFSTUZxWkJEV092aFk2T1JMclYtb3VMTTJrSzZlS1hsOVlId1czamJmM25hTmlRcGpPcXJSaFBWYXJ6MVNhSl9kLUZ1VlB6TGczUVdhbU5Fa0ZZUmRtem5lcjhCLXh4YmxMRFBtbWFWT3o2RjNxT2pBbnV5OHJybm1CWFJqVzVHSVlvNG1NbTZLM3Fmd2l6UHloYVluQW1vbkJPWmxrSG5UY3dCRmtXcFN5Q1FGYTA1Mnljd2FvNjQ4dEdmc3A3MXNVSjhMT25ON3RvSHdZMlNRYWNVQm9ZVng3dGJjRjB6NmRfQ0tzelUtNXZiUW5fbk1fVzRGR2twdTctQ2dPckQyZE1WNXowOUJPOXJzbGxfMjYzb0NJVkJyUVhKQnNNMGMyZjlkRi01S0FyZEhDRTZNRmVEdUVLaXFXeHJna0pScjZ6bXQ0ZUZsXzFDLXFyQ2JRd2owa2p5dFgwcEo2U3hKb21oeUR3QVZJNzlsMTA0ZURhcE9TMWJyTGNqRWM1WGJJSUtROUsxSmtGR2kzWndTMU5jUTVYbkF1bUE5MGd0QlV6NlA3RFJzaGhNeGhRV1JFamQyTXZPX1FQbGgtNzdjY3JOVG5OQ01pRVkwUlZueHNFTkJBSTN4X09leXVfVzV1Q3VwaERNZ3IwaVg4N1RzYjEzV2M1R09fY3phbS03b3kzdWoxU0tQdTlGVzJhUGJlRnVIRG56TGI2OWM5NUhwNXZtbUc5T2kyb2tpUXhORm90aHBfbU9vUWlxVXdfRHZ4Z1g1S3FpNkVTY2tZR255RUlreXUxVnNXdDRjMmFlWm1HSFE3dzZDUE11TDNFZmd4LVp2QklPUk9raWZmbWdDck0yazR4bnhxSDhxUE5uQVhyMU5GWFJTUmJzRzhMbExCRUZyR25Ja3ZmbzNqNUNLakQ5RmU0SHRCeUFqU2dUcmszRXdxVlB6VVlxT3RHR3NhUGQxbU5BeEhvaU9IOTVrbGxNVW0zdEtGaUFPTU5tcnkwNWxLNFdvNWw1aktJNklCOFByRlVSd3hvZE9IT01xYlBrSk0wbWZHQTQ5NVF4S2FvcWpPSTcwREtCS0R6RHVOYW1MLThjSDFEWHhITkZwOFJEbnlEcU9TeVBqYVctbnBPZnk5azc3a19LcG1KT3lfT2hXMUVNNzZja0g5cVV3TWV6TW5YeWRnMDhpVjltZVFvUm9KWGQ4UnZQRTg1R0lXUnhDUXZkSzRPUVFwVUNmX0ZrY0NJdWRodDBNaG9TM1V6YnJfQ0xTUUc0WkNNWXZKQ3NaaEFVamc2S2l5bnVwcmh6TFIzQ09fRjZLdENfdjB1OUxMZGxBVkVPcVVoLS1oRHRJVEVLYmJWejJXX010S19vblVpNmJQaVpMRV93ajRmaHI3WDU5dlJYWHI5bTVBQ1BsRTF6dFlHLUZ5VzJibVFESnFTQ19sOWRneUg2Mms5Um1WUEo5MFZxU2Rsc2FCcU5lNFVIZTducXJrZ0dXMGNaRDl5QjBHWmxEZnpNcno3LWF4RnZ5aFhVMGFOSExUbS1tMUxDcmZKbGZLTm1ncDFQSTN0M01yMi04MUxiUzlMX3B3OGR3d0NSbERQTlY4WmNjS0hIMy1vTVhGb1FlMU5CMEtzNE1PNnhHa2lHclRkT0s4Z3U2X0d5VzM0R19hMHVyX25ZekdRRF8tRWF6Y2U4THZpR2M1QmRaU0V6Vk9sYkE3UzVSY0xEd1c3NFhvX2Vwdzg2TU9SRHAwZEhYU1dJY0sxckN0UkpTYUNac1pobTBxUEZKdDBMNWJfTTJWZjZkYlNZOXRYcVVvbEU1YlNuOExfdElZWVdzc3FHdDNIU0lvN0RXekVVWWlVRjhyd2NMZ0RySTUwd0c3RUkzVjNBWXRIUGJyb1BseUkzbWQ2VHd6YUJGclVzanB6ZjdXZk14M2hqbnEteUFwWkVTSXdGZXZZWkdhQUY0MGRzMlg3YVBJdEd6Zzk3QmdxakozM3BnZDFWWXdXbjlOdGpsMHJudkxRZF82YlFXQVkqDQoLejF4N1lIVEZrYjAqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23592e-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHQQh_YEGB0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CHUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CHUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "z1x7YHTFkb0",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CHUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "z1x7YHTFkb0",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "z1x7YHTFkb0",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHQQh_YEGB0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "z1x7YHTFkb0",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.6M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CHQQh_YEGB0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CHMQmY0FGB0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-gDYfTAj3YbE",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 5.5 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/gDYfTAj3YbE/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBQ-gRtZtvZIBKyUZmrsRTUJu9eJA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHAQh_YEGB4iEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/gDYfTAj3YbE",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "gDYfTAj3YbE",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymBaZVzlScZnxi_DevKqZAW5kAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/gDYfTAj3YbE/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CHIQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IHhAjGt8PogfbDwrYD0FhYThFd0ZlU2h5MjZGb0xQQkhFamxFM0J2LV9pNUM2cV85VW9nT3hBQnVIZ2I5bVRWQWpONWY5dGVLM1pybWQ0Zm9EZDhMR3QzN01nSnM5cS1qRm5HV2d1ZFlzNnV4cnI2LWFkVTdTSzF6UXFORWE1bnBmcUIwVHE1WW15Qm5ic0liUUFXRDYtLU5SN3VwMVJVYTBUQl9NM0hhanFoeV9NMUVtMDA0U0g1Wnd5QTh3Smk1MzNOLW5FWm9KUXJhN0VnZVZ2eFUtX2tqNFRJOTlzVXdIbFhtTVl0TkdMb1JYR05fbTd3S3lMWHNlREZwX1pEWXk5Q1dPNHJnYmVsY0RsRjJBdWNfdVc5YXM5dFBOWUdVbkJ2Tjg5RUFMUURWMS1LUmhiUUpVSVVvOFp3azA5LW1iV0FacEhfVTFESmV5ck9qUVNNOG90cmRJVXY1N1RHUExvSzE3OTNjbl8tN0k5X3Z6eFVLSFZiSV9WbGZLZFNxOWM2LU1Ka1hwRWZ1NFRsM3JaQXhyTWdfd2g0MmZuaEcxZEtmbkgzczhwUmlsTTJING5rd2IxMGlraUZHSkJiLUFNR3l2MkZYMGN4d25GWXp2d3ozTFFKb0pBd1N2cjhwYXdKaXVEeHp3UnNDcDhKX0dDTkRGdkdZZC1Rdy1TUS0zRDNuUHJDYWVBMEt3TnRXOXNhNkxrelhWQVpINmhqdm1NcVRPdl9LVlhBQTlEV0FUTEJpeXBBdm1ycVIwdW1qX1VGbExxMTZ2RGFOYjFUOV9KR09uQm1mWUZPQWpQR1h4dVpkOVk2OFFDNlZDU3RNcXc0U3lSVXpxQ1RoRGRMREpVcHJuZWRyMjZjdWh5TkZhdkd4dUVrWVVZMHEwbGxvTDR3MDRGeTgtU21sMlN6RnJDT0szc0pPLTRLUnZvSEswdE1wdXZ0OXN5aDVqR0RuV1NOTGhOUUNST0c5UERZc0RlS3E2MkNNZjYydTNRcUl6ZVQ4OUNJMkZrd1Y1VERqQmpteEg3ZDhLeENZc2RyRXdZOURQZ3hYRkZkY3pvZWRhbm9HTlJIdVpUY1BxUm9NUUM5elNVY193bmw2WVRQcnhfSTdlOHhRN2YwbThMcFRoLUFrSHJqNFdTVUhQbmNuMWVNSFhjcm41VE9RMmJ2WXhlS21ibDU2cnp2WVk0aFd5SGRVOHpyRHZ0OVBZaWFPMlNEemRBeFNGWUp2M0Z3M2lLTEYtSXdsUWo5cWh2c1p6NVdrMl9HRmV0bms0TWZRWmtMUGtEY0hvcWpLX3Q5N0lIWFQ4UVBtb29KbHQydFR0VXNEcTI2WXJQU0NuYnFSSWxVbUNCZXlwNkttM3hyTnozZ2hfZ1kxUExiSHlhQVZFc1c3cE84SkhWamdodktPREFZNTd3TFpTRHJqbkh4VmJpa0hEbW14b2ZBcEtnWmtVenhkZ2E5Q0Z2d3ZxNE51RXhJV2x0MFIxanZtS2tDTkRUZkhRcFZpOHZCb1NXWmZrOXlFY2M3RElOWFkxN1g0dHFxekpxLS1xY1dPZ2lKemtWSWhIbnFvY3lJNGp3XzdhaEdDV1hLaV8yZV9vRURkLTVwZ1dOc2xNV28yM2hPNnhhNzF2OUpBb21BcmdMbk9nVkRab09VOVBDeWJoS1ZsY3hxb0ppcXJyX0MyZnVxWlNTMXdXWXBKTG1idjlnQmpOcUVQaTU1Y1hfRUVGWHFFMlVCU3FKMklLTWRJaEdZY2F4NHNOVHFMaXBpd05zcDUzZWhzYlh1dnp3WmtCVlNlRWpFV0o1VHBOMVhtb3hkYlRNNTBRWmFTQ3QzNndMQ3VGLV9QUmNuekduNnFlUVhxTnJqRFotUjlSRWQzV0ZtWVg0T0hVbVdjdENfQUpSeXc0M292VDVvVEJ0OHRMMlhXSHhRU0lKakxzZFVQWU9naFJkYkxrWVZfaGlRLVlBSGg2b0xPbTZNZFdUbUl0Unpsd29ZUUxBdWFMUlIxRUV1bHU3cjFMcE9ZMzVNclRjSkp5dUt1THVjR21fUjlmZnBiRzI0dmdFUk5XWE1zdjMtYzlkam9GQlNLZnZjcWlBMmt4aFRsaWJJbTRyTmV0bURja042a2JIVldVVmptOFRqZlNSUmxIbFVBQVdqYTNoRUZuUy1OMTRPa0JqbzNkVGpNMTBuZndhUzZ1OHZhVDcxUHFxMXhDcVRsOUVSMHd6UXA2NTYtLUNOZWxtYWxGdWJ1ZXZyZS1xRDMzQllCTjRhcmV1VVJIWWc3OVA1RWV4TVRDQ05LQ0tXc0pRaF9FWmFLbmpCVFpfN0hhRlM1WW1IcXF3OE16dEh2STdNdDRVOWk4cmdBR1J6S3FCZkVSd2YwRkF1ZXhxZVo2MXZJakdpRU5GUG5JTFYyQWdmNFFXanpVVHg4bkQ4dE83TkJLcGlvWEQ0QkF3Y280UXdIQnIxSGRoMUdpaVZKWWp4QWF2WGNUZDhUaUZvYktFZXB0bmw0dVU2ZnJYeE5IRG90TGlDMGtmUVY2dkNxUHhEUnFCRk1SQzViMllNVHJrNDU5ejJNeHExVWpCd0VzUlFmYjZuVkI5OUVuY1hBQjlseFBqYWNaVm9QY0JLNWZpdWFkc2NPMDhaNWRWYXNHamJUdF8ydGtmS0p5RTVEV25BbDZxZ1RWMmVkT1c2VU1mNy1OOWxWT1pJNUUqDQoLZ0RZZlRBajNZYkUqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23592f-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CHAQh_YEGB4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CHEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CHEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "gDYfTAj3YbE",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CHEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "gDYfTAj3YbE",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "gDYfTAj3YbE",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CHAQh_YEGB4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "gDYfTAj3YbE",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "5.5M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CHAQh_YEGB4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CG8QmY0FGB4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-lF5MsxPScVw",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.2 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/lF5MsxPScVw/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBMtxRSLINEwgmlswBnQ_S14NmWog",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGwQh_YEGB8iEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/lF5MsxPScVw",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "lF5MsxPScVw",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAqaK8wwL-eog_HPN-tiCBPkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/lF5MsxPScVw/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CG4QsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IHxAjGt8PogfbDwrYD0FhYThFd0hCbnlHU0htS1p2Mk1Cc1BNTnBzR0FDaklLYm9FeGxBSnZKbXJXcEhseVNvN096bDg0dzN4ZnFXSHFfNW5seVBEVzl4N1FyZm5rNGF6RFdJN3hwVlN6VFpSTW5WenlWQU1ibGttS3JjSVFiVzdTSWhqeGtqa3I5VjV1anptbDlPT3RLRkYxSXAybUhQRjhyeHBFYl94dFF5Z2hpMTBaUnl4Z2x4Sk1LdG9CMzMtVHJwZ01BWUJCUndzSkpZQWJOQjBvZWhGc0dnVHRZQ1ZjRDRnczc2N0t5WE5tSUFzUVhFX0dmRGFEdGFMLXk1SkdPd2UwQzhCV2JFTXFTVkFJeGEwZHIxNTFzZzN1YnVYaUFFNlRBZU9DUDFuQWl3UU9aNTVOSmIyRlRCcGpEODR6YWNhNU9CZ2xLR1A3Q0tQOTcwSWpzLTdKaHhvRER3bnIycTVaNlFPZ1ZYSnpqTkNUdVFfRHctNXdxWmRCTXNhZ2xkZXlRUGM2Z2hBUGFhQWVtMGZaM1FTTUtjYUpPd1JoTWlUcjU1ZGgyM2luSmNFOHNyT1ljbEhNcVlsMEhQYkVTMVU3Q09zYWVlNTVWaHhTYUVKZGk4b1VFd1oyZGpkaE9DU0QyUEVIOWFqbFJGY2hneFFJUnV5Z28yOTRjSi1EaUJRSmJ1YnRCT0cwUmt1N3dlaGFDQzRQSkpHWnA5RkQ5aXRaUm1IN0hYd3EwdDM0anFTU3U3TXpGcVlUc3gyVUxSaUw3dDBkOU9OM2UzM2x6TC1WOHlQVzNCc2dVaEpQOWZKeUlPNjFJZFNCWFA4ZGZSVV9DclZsMFlNeG1vbmJSc3JyWnFlX0dPWkdfTm1XWkg3ZkhObzBnMXlaR2dSbEF2amVoQVhqSDR5SnJjdDQ5ZmZncDg3Vk9GUHgyb3VybzNRS1pVazdaUU0xQ0VoWlNGTVptbTM5QXJxQU1BZDdjRUFhWlFndTU3czgwbXJlSUVncV9DVVNZVmJBd3pZZWF2NkRSOWNxUjlVaU16WDk4THVZYm1SV0hxTzNYTkZTRlJfWHRLVG43YW55R0ZVdl9zZUw3LW4zTEFwOVpGckpRdFBtWmNyaGFDWkJNaUdvNVloWTNuUFB0MVlYcEN2LV84YWRBd1hvdEdTUUo4MVZueVA0TEpzZk9QU3pLX0hyWm9JY0VrVU9ReG5IT0FzTTZkZzdHU0Y3eVFWRkFLZS1YUU9SV25fVURlTGlUOGdITVo3QmxQbjNVN3NXbVpONWFjanpGcE5rWDBrejZTQzUzUkxuOUkzbmk4QWhpbGViQWpkVEJJSlFwZlAzUHJ6eTd4Y2c2OER4TW42MWRfb3VobHJzZFZWclR6U0FvOVBJZUhkZnBpMWdqUTBZNTZ3MXRRR2ItODlPLVRoZ0ppbzlrN2gzbjZpWTBQT1FqQUtPYWtSMWI1NHEtd2VoRDNmZ0ZDM1Bmc3FDNXhQRVB4RnA3NU9iQmdHYUhldVM0c1lqaWpWSVVmWHdoU3pTS2V0NVVlWW5mUV9CZ3IyaTV1eHVrTkZJWms2Y19fNlhVY01XdWkyTzd3d1QyTnhqbU9aQmFYeDc0SWdKWmo3LXNHeUJaVlJEVXpXR1FNd1QxRDQzX1Exdy1ub1FYWFFMVjVjaDdNNGVTMTYxeTNPX05rck5ZQ0pwaVR0UVF2WXN3el9WSHVCdHBDZ21KWTZsZW1SY2V6QXQtX1B1SXI5RXNyUUlNOHZKMzJnZmVqWUptcjR3SVRuSXBjY3ZaUmc1ZmNHbUpmSjJ1VllrNkxndkUwaXF4aXhHTWd0SEpIQkhydTktblNiZ0FsRHExY1NtN21jY2RWZW8zUGZ0dkhGZko0bVFuWkxINFMyNW55aVpMOHJPRlZONnE1YzFzd1R0U210TnFCLUlDWHJBenpTRDFLS0tnbGt2YVNYYlVFOUxZVU10bG5wT1VKMGhSTFV6enM4OWFxTHZMdnJRMVo0Q3I2bVVTb2FncmlRQlIwMllHNEd1MDRQQW5XQkkwVS1oRk1aVW93dng5WU5DSjJlem9kZzlRQTdURUw2clViOV80OXctNkhSSnp2ZjVXSzk1NmItMERoQjNUc1E4UWN1X1QtSGwzSGhxS1hqTVZOempCaVI3dXNTQU1ReXVnUHBlMGpfU3dFZ3RtcXFTV1Fma25sOVpqbWhXQzF0ZlViaXEyVFQwZnRmYy1JWi00LVhWUTA4cFJmeUpGRVM0R0ZLVDJyaGFzdy1JVFN5bmJZeXU2VlVIVW5Ld1BxNWNzTUR6VzdIRkdoY3l0V0pMMmxtR2g5MXdsQVoxS3JDWE1XckdPVU1ha1kwanRlR2RLTUlUUnR2dTJ1cWw4eDBOSmwzUWR0MzdvN09NdjRhYXZkV0VKTldXd0lBT1VfbklrYXpudzlEMXpxcmpPa2Zlb3ZJOGVNMW5XZ2kyV1hySURBcU83Ni1ORkw0MjIxRm9fUlc4d25EOFB6SVN5VkpUbHlrc0RqTTE4SU4yWm5qT0RsZnIwMmRJNVdEeU5tNzlNMURZLTNXYkIteHF0SkZwUDh4dFMxZnVmcFI0aGRMT21XVU1NTUo5RmI0MFcwVUFHS3pibmlsczJFS1VxaTBvQ2JZWUJlZ0t1TlNISDhpYUNNQnNLdHVtNGZYVUlGOHpqMWZFOVdmYWFveG4qDQoLbEY1TXN4UFNjVncqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235930-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGwQh_YEGB8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CG0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CG0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CG0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "lF5MsxPScVw",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CG0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "lF5MsxPScVw",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "lF5MsxPScVw",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGwQh_YEGB8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "lF5MsxPScVw",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.2M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CGwQh_YEGB8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CGsQmY0FGB8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-9px5sYP8Kno",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/9px5sYP8Kno/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBGLXoWIcXhLktR328B8PD4zbKnow",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGgQh_YEGCAiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/9px5sYP8Kno",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "9px5sYP8Kno",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDJJsdfzeZpvIigkwDkUoIxkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/9px5sYP8Kno/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CGoQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IIBAjGt8PogfbDwrYD0FhYThFd0dwaVRNQzNsRXpXUl9EZjZBM09aWmtxU3E0Sjk0RUQ5cmVVemRKbWtidXNUSTh5WXY2V2F1MVBZdmN0ZG00aVRvSU1IdE5xMDIyVGJhckxKUHFrWko5WThETDJTRE5nQ2pwamZWLXhLREsxTE1OMVZiYUVLQnd0MTl2XzFrUzhMLWpFYjdRb1d5LUdiM05XenRFOGZRandpcjBidXpJNHRUeXJLTncwRmdjUHdFUld1Q1U1VGFLZGl4SEItOGZjQkNpSDFMcmtnak5YYW9BcE1MenV5MXlfRm1Ia2xpbDBuLUc2NE1BdzBZdERDeFZfMHlYbE1tXzF3MzlDTFR4My1MYlFRV0M1cDNYTkFneXMyRkhuekkzUllDVTRnUnViWDRXcFkzT0laMzhPYlA4UXRERW5mQjVwbkN1aGNPbk1maVBSUXk3UzRZVVlaa05KY0R4UWJsdmxCcC11VHFaUW9WLWZ2OUNpOXM2LXlHVWxQNy15NzNCaGxJWTZ3UnNmTGFLSWotZEVTTVIxeVdfY0plNW1QUWJBenMycXhUZGZuOEZyOU1jWXBZQTE3VDU4WE5LOHNjRVFXZU9CTkMwTjlQbmtzX1hSRFhJYWkzc3hVN2VFTko0bmJGNHJUTWx2ZnRHV3J6Wk5FTkNHNkEzWmU1RHRoVEhoQXFiWmxkRWl6Q1dZdEtfbmg4dDloSDJGMU9YMWpfZFpVaDNDX2diRHgyZXQ3c1lNX1IwNlBJYVNTNUswTFkxUWVSQnN5VzlGVGt5cTd3SVZyX2QyZUIzVFhkeFJGUnJfcTNJZ0ZacEpsek1GMUFFcnQ1dWw5QVFCeGh2S2szd0xhcmlWeDNLMlhnTlVwVTRCaHpGTlVDWW5rNEQ2SzZEUXp1WlFLdHRxZFFxOHJEeFY3RFVDUG1wczV0TFljT3lmclEyRXNhV0JBSnA2MlRVbDd3NGFxVG5rcG5yMjdKQ3Jaazh6bThaZVJVT29UWUtDM2FsVFVTUVJHaDR0QU8tbVNzWmdfRjBlOUUwRWtYdjYzYlVDb3M2OU5JdF9EN3JScTU4SkY4Vlh1eDlLYWloOVFPTjJLbEduNGg2TWFWV0wwalM4TXhRU3VuX0lJX0lBNUN4T1FSeEstZmtIZUp2WGI0cFhPeWVxbG9ocEwwcm9JaFUyc2dtbmRseXpIeXNJREc2VTBfc08teVZZdFpRSmdIWDBseWY3bl90V1htUFZ2SXZ6R19uUlItODM5MjZuU0hUb2kyeDdEUl9yV1hzU25uNWVhQlZUUVpzeUJzQnpid1hERHFDTlNCSk5zUFI3QjEwWmQwTlEwSS16dGlXNGt6Zkp2YWxmN0RwZEphMnByTlo4ZWg2VHlPWmpHeFQ0N1Y5ek9VZmxkbVV2NlhheVpMeGNaa3M2eHJJLU1CRTdjR1U0SThmVFFaOUZfdG9DX3JVcEZnMjByalpOaXU3U3NvU214Zmx5LVN0STRaZzFnd2RESGZoRzVVeGVyQTlLWG5fYjA1VFpQbGF0elBoUFkzVUtYcVNVcFdjNExMNWRRV2xzeWZDYk5lbG4ycEQtWk1MRlpUbEVkU0txdUJ5SFQ3U3FMTVpGOUUzUC1OTGxyNkg5QnJEVGc1Nlg3NkRGd2MwMTc3dTNUTkNHb05kN191dGdhd2RIYUpac3I4NDlfOU1rc04taTVqeUNhMHdIU2JkVy1hZDV5S3oyVVA0R1E3YlVMWnMwS2trT3d0TEdqaEhEQW8yblFrb2RPTGdTOFQ2NnVkQktGUUwtR29wZGE0Rkt3eXc2Q3N5eVJmUnRZZm8zNDdvekdZd2JIbXhlTmVxU3c0SVhnQjVKb0RnbExXYWZfTUZkSEkwSjFvdmdKSDNvOHFIRkgtSVJuTlM5VGFOaTQ4aFNZX1N1S2JIdTBtNE96LWZHb0xaYjBneHJCaFk3UllrcDlOTHRya09jSk92MVBhbVJydENCbHI2ZlZPbWszNGdoTVU2Njc4LThHbEJtMDA3cW5peVNoc3NZeFJtU3NmMlJxZDZlM2QxOC1xaVFhODV6WlBzbUc1UlQzMlBiV2d0aFRJQjRkTVFHRWFZZ0ZIQXp4WWJzOGc4cFBDWWVTUkJFalFBYks2TFZEUWU2TnZnZGN2MWV2aU1jWlpnc1QyYW5WZ1JjX0tNSVZXY2hYbmppUGN5dUJwWHIzRHdhVk5CSjk0Y0dOdlczTE1zS2IxQ21GYVpFZmhoMVN6ZUJkS3FHOXV3MExxWG5IXzVZOF83Q3pSVjFqZG9pcWVVRmtyZXQ2Tl93dzUwQ3k1SXpsMDZxeUlfckRtdEpfdmRkMEMxRVpkUFh2MmpSd2VtUnZMY0xHTG91YkdLRkZNZURhbE1mamxiMjZ3VHQ0bHYwM0FhOUZTR1VOZjU3MmNLY2tJU0gxLUxuUm8yUnlKMU5jdWZzNEdxWHRGdHllOGlscWROc0lJcnlaSFhVemVXNDk4cThVRGZETUxTdnZibEUzRm5BcUpTOEVvYnJ3N2dTRDRNSFkwN0s5RjUxei1sNVJRNnFYX05uQTFTaHY0RnhLNm94VnZxXzB0dGtEY2hUQTRtVUp6dl9ScEtoU2VuWk9nOUVRUE1MZXJ3aWE4RlFNZWdwUi1pcVo1Mmc4MzdETlNRN1ItTndYcGxCSGhieXBsLV90RkMqDQoLOXB4NXNZUDhLbm8qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235931-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGgQh_YEGCAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CGkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CGkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "9px5sYP8Kno",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CGkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "9px5sYP8Kno",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "9px5sYP8Kno",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGgQh_YEGCAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "9px5sYP8Kno",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CGgQh_YEGCAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CGcQmY0FGCAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-Wl2AiCF5gVY",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 929 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/Wl2AiCF5gVY/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLA7yvJDfQXRtwQMPgbGDJLzjEjLbQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGQQh_YEGCEiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/Wl2AiCF5gVY",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "Wl2AiCF5gVY",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDhduEHTEVsTMsJ5ZGjWbRlkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/Wl2AiCF5gVY/frame0.jpg",
                                      width: 1080,
                                      height: 1920,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CGYQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IIRAjGt8PogfbDwrYD0FhYThFd0h6RmxjSTNuUldfWmYwMzEyVHRFVGRDZTV2LTR3NmNrUE9tZ2J4WTNSV3k0ZThqLWtkZlZZd1FFTERZRlpFMElIRkx5U1BJTFY3a0FKRmJJalJNWEcxTE9WX3ppQ0YtX0RSR1hyNXZVWW9lYUVucGlIYlVqajYwdHJobnEzaUNoakU1VUxLUk5NMVFaZ20yVDJNQjBJWVpWb3JYbVZ6dEtndmhRLUlrNVlkdUhKSUduTUJaemlzbEU0Wjl1SHIyOUhMcmNoU1NqQ1NwazRuZ25NWlN1cjNETzNjR25Ld3d6WE8xaVItbFNiVWRERXQ1XzBBay1yTW9fTXVudnkzdnFUeHhGUzJ1enY5T3NPNlNLY1BJd3BaZ2hVWEp1Tjl1RTFzbTNXR2VWSGpyTGNwR0hqZVJ6WXRXT2drb0NzRFNMWVVXSTg5Um5TYTJ3aTFzTmRrN1lZZ0pzeFloUkk5aUFTQWpaTGY1UmpVVzRQMWdQdXFIM2hpQnNuVmtJbWFmRUxBSWZYbXBOR2FoOUZJY1dkZFJjSXFDVGtnWVlUOXp1WmF4OEphZ3p6N3dKU2c0M29KZkZrXzNrTEk0WUFpZllfLWFhUnY5RGpZMWxBRTM4U1BPNm5nVTdsWmQxZVVNSmtCREExWnpkNHBiZDZVTlFjVGdUVG5FYmxhUXNlazdsRnViNWRCSW14TGI5VVd0bXhoMU5wQlV4RDB3TEJnWktIdDZjUjRFNmo4Y2ltTThlQ2VKazdTb1RPVGFEeEpfb3F6Q2hYajRtY2lUcFBmMGR3eVRzQnpLZTRncVNfdTJjUGoxdEtEM0xOeWlNY09qaXhwSFhvU3dOMmtMY0RRMnBCWnhMZkFVTG1sbWVFSXBKSTZrTTlUcHpUc05ZWDhwVF9lQ1pDbEdTOVE3eHd6ek9PRkNTTmRFdHRtdG4wV0EwMlBERHdraU5fTHBzV05hSWFVV2dyZWRwZ1hyb0RGVS1HUXlOT1NSYlZ1bFlDWnV5eUkxdDZ5S2hKYUlyOGtwdmlVczVyWDNWM0o2NWZ4RVdHSFoxRVpydzl5c3JhUzNEdDJ1Y0ZtcTVQVUdMSllhaDM3cTdBcUVGSklYazUyQ0pyZGFNRjRQRzRWdU5ZN25NcnV0VkJnNjNPM1NxUTRwUzFocnZTOXJtTDNVU2RmUnl3eHp3Qkx5MlJWbGprMUx3V1pyY0JCZHZzOGxXVTl0TllfZWZMU1d5bFRqa3ZQUDJHdWVNamNnOWZKSF9Femo1Tkh5dFoteXVLanJndXJ3LUZPRXhnYUtLb2RPRXVjNXFoUFJoSmhJNEg3b2dab05XWmdBUDJ5aTc5eDRnUmpuaF9reXVXQTZQZV9jQlk3VXE0LUxkbThKUVVYWGhrQzhGdi1nM3ZwZnhrUVlTelhrR3FMSm50Mzl4MmVQdkZyTXBYSFVOUTk0QnNBemNhVGc1MEVuNkdSenF2V0k0dEFyVG1BZnlrWVRYOWJZa2JfQTJxV09CQzVNaVFldUtOdDdhU0FUOWNrNWRCUWR0U21USE9WUVhKQ2RrbVdTckMzMFdlQzdxQ0NsU0lBa2g5bGJYY25iZ3RGd2hVTGtjMC1mMnR0RVJ0dXh4MThZb0Fkand6YlJaR25RdEZWeEZXcWxYUHZEUnEwX0xvTGxFWERYVmRuS0lrQk9GcGNZbkdQUGQ2YVQ5M2hEcWlKTG0tVnpOTTBZZy1EOVJtTUNJcFU1SUdyRHVXWHg0OGlyQ1pmelh1bjE0Z1diRmd2VGdmNnZ1YTJHVlFaMG5VeW9qRHdNaWVwY0FGX2wzN19KZjd5R0JnaUoxelhLUWxUdFFnLUVFWXlDR2xoT0NRX216dzF1cFhaY0FrNFJoZDZHaUFoZEpwSmJVZ2ZXOTQ0RXdoem1mdDBWdHRFYXlDcGdYZWZ3SnpyLTJsX05ObDJ6NkRRdFp1MVhjalptNU1KTzdtZUFpMVZ4T1FfTE9tdlBlTHdUTWxCcktzWlpSOUNic0hqVkZlZkVEQzZyU2JlVnBCTkhvUUJBZ0U4YVE1T2VWd3ByejNRczZtZzdZYkF5am5aU2JyOGRrTUZGUnJ1UG1scmo3dUE3Z1NKd2VtdnZsbXNEY1FnTXpxT01HRTVsTTd3eUVHa2loNTVRR1pWdU1VV0d4TlpMcE1CUUMtcHBwNXAzVnFqOTJHbDVYQjV4OGtKQnA4N0Y0Qkc0bXZsMEZpQ09Qd01icF9zUHRERkNJcXQ1X25kVF91T2dnMDZwUXFuSUdsZWY0dnExRmQyQ2hsQ2FmVG5rTWpHWjBXREJ3RmpHSUNHeU1NVVR0ZWZqTWZLYjBudW5wMk9KdFpMdDRqWWM1T0pNcTc2YWFXN2Fkcl92YlA3eGl1dnNPLTZmaWhOb05obG0wc0IwVkRkT0JTRzFfOGhXWG5VVC1XMnRrZXV2NWFrVUFMWVA2VHJqWjFkME40TzM4Rnh3SjdIWDRSc2FKdllQZV9Fa0p4OE91MnZIZnFxLVRrVmphUHZIQ1plUktKdTdQbUwyclhlcVhjZW9WRGxrUEZnWGFJcVhmWENpRDR1VzFrdXZWREJJbUhYaXJQRTVHTWcyd2haZVUzcVl4V2dnTk9vQzJhMzFIX0w5ZG9CZUVBd241VFY2LTluMTBoeTZNVkRsX0hLOElITW85RFkqDQoLV2wyQWlDRjVnVlkqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235932-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGQQh_YEGCEiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CGUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CGUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "Wl2AiCF5gVY",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CGUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "Wl2AiCF5gVY",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "Wl2AiCF5gVY",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGQQh_YEGCEiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "Wl2AiCF5gVY",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "929K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CGQQh_YEGCEiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CGMQmY0FGCEiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-5QII0CPkxOQ",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/5QII0CPkxOQ/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBZkJvJ1XNXsSC4Ml15uBFpOiTp_g",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGAQh_YEGCIiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/5QII0CPkxOQ",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "5QII0CPkxOQ",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCi_XeRgSnUOEwuf-oCp5thkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/5QII0CPkxOQ/frame0.jpg",
                                      width: 1080,
                                      height: 1920,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CGIQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IIhAjGt8PogfbDwrYD0FhYThFd0cyOHF4SjBhWmFVa0d0MHlQanZ3ZXNiZE5TdmpqUlBFM2FFZGRUVGFCbzU1bmJvcVdFUGNXR0IwT2ZacGQ0NThEc0ZhUXozNzJzdW81Yi1LSU1kMjRYbzFsbFQ2TVdmUzlWWEZHVy1zd1VLaEVGLWlQTXhQNUVrQWIyaG1xNnlHSWRSMG5BUVRtamlUbWVqZGV1RU1VenlOZ3JrbF9aZXFTcWhWVGdjMWl3RVJhclIxZEVpelBaNlNENFBCSTNDTTlzTHRDYzhZVTdQNjZjY3hJVFpNM202WWw3ck9xQ3hZNXY0SGNwdVhreWpZdkZBNV9QRXdFSXNzMGRiQzhRazlpaHhMaXNSUlJieDd3WFZiMkR6UDFPNVlGMm8zMHZSOUhWbWxXSzROVFpIajc5RlpjR0xoSUhmdUdkMGxRLVB0Y1NCNG1NU0dXaVFlUG5ibkZETHlRb2M2Y3hDZm1oOVYwSlVUbGwtWHRhTkpzUS10bGF1MTdJMkh3a2NXY2ZvMExMMFZUZzE1M3l0cnk2aVVsSFJmT0tQeC05ZFR0V0ZRbWFwMEpkQ2ZrWEVVdlVQa1VvS0tKQVpqaUF6bUlaalg2Qk43MEZ6MGYydWhsa0NZRXRsUTl1dGhEOURjTWpYTFctN0NEWGhsMWt4VWl3TmZfVk9MNktoNHJxQzBqR1ZYUVRsXzRkMktEUHJ1R3htUzlCYWx3VWYzYnUyajg5STZZSlI5LUpmQzhudnNJdXdoOGt3VFAzWUY2OEhlc1p2QzRsWTZuekZBUTJsRS1IZlZvcTFKZFE3V1ZSbVVSY213UlNvTzNMbkJuUkMxTWdlTmsxazJwVFdvcVRpWjB5Yzg0WnlrcnVpWkw1S3BkeEtMSVVnMmJoaGdTS1dqQkRvTmJiWHVoYm5uUzR0MG1kYXpOdzlXQ2F6WFJZTU9yWl9Qc2t2WHlfQlNLRmdQMjRmLXppdTRNTUtIV09BazZfWlk4UzVmQXpBR1JEQ3FMaGlxVmdOc09KMlV2dE90U0FmSW5JZmxWZ1BkOGJtNDc0NzAwTktNRzhubGZ1aW84WHgyVDFPVkxRVm1fcU44bDF4aUNfS182LWZMZnAxeEhwUzQtOE8xNDRhaER6eXpEb1dZQXJ5OWl5Zll4dTJ5SnFkckpWMGxDWGU1VTE0bFRuclZEaWVUSGFlbWR1MnBlNE1MdTViaUtqWEU3a1RxLUM1ZHNic2JxVXpQUGpBZWtFc29BdHMyUS1sREp6aGJBaFI4TkZzcTB3NzhOYzFOb2FhdWFUZUtSR05TTE1uZW1RS25feHNyTFBVMUszX2FTN0NjOVN3eFVQM0RBT3JOVG1BMW14bHhHVFhwZjZQaERGbldVdlpuSUdZaGd3a1V2TkRYUlFCVWwzSHhNM3RWT3NmekJpMkRJcHphSTFST2poSy1qV3IwZDZsRVlzN0JDbGdNV0pzMTFxRjh3TjB0dklVUVpuNUpqWnBINEFzbFgzSW92dEMySkRhNjEwTnNWX0JiUHdDOGlJRldKQ0RSd0IzbTdBQ0tKR3FiSEZqMUVXc3ZxWFNXWFNaZnc3Q3NTV1lHRTlkNWFnaVpOcXNrZW1jQ002MXpIYkV1ZnhhSTF3RGhPU2VQOU5GYmRyMzhnektoVVUwTTM5V3RMMzV5QjlhZ2Vqc0o0NkZiNS1tNmx1THJpRFdxWFMtZUdlMnpOdDZRYk9ZU0o2SkNrRHdpT0RmbUg4UjJQenp0a1NQdnE5Z05rSlI5Rnd5c3haRHNpRjh0UWRGOFNUNHgwMGFEdmFjZWhzRF9MM0dTSXdKbjRuaWlWUWkxNVBUSy1KY3NZUEJwdF9DdmVabmNmaEZTOUt2Nlc1S2NpTjNmaGwyZ05lN2ZZd2tCazNKYnI4OUdhUWFqT2xHaXo3QjdfT3lwcUhlUTVjSlRrbTc1NG9FUzIzOU1IOWtqc1BHYzN0VUFZZGJWaFJVR0dOWERfV09DaHMtT1pKMHluaURhY3FhLXg3MGFHT0tXazB0UFV0NVMxTGsyYnpETDRnS2NxcnZiczJDdE5Nd3lZU3QwVTh3R3pZaE1qRW5zN3JaZkNVRE1ZWHhNMXhmNW1xRDlBbmRxMjgzTWh4dkVZNERzWlNtYm4wWnZaVWxWOElRc1k5UWVrVEktZHVWcV9ZMGpnZy1zSDBnVlEwYk8zX1hJZ2Z6eWJsTGFuUTU1MS1JbmYyMmZLOEViMUR1MmNLVDhwaFRGbks3RmdwYlVNQWJEY3htem41UDdpY1dUY3MySzlmZFVGXy1HYVpUakkzUkI1RjFON29rbmo5Y1pqbDltUGlQTVB0WDJDa3M2QzR4ZmxxbU5wTE5LMTNFeDdsX1pmOV9FNmoya3Jqb0pSQWFwQzl1R3kxekQ1RTRQSGRFc2ZVc2FCOC02T1YzRWxYTFFjY1NySk8tbGJTZzNlWmdMemdDb3dkX0wxQ0pUazFYTWU0RlFMaFphOWQ5X0ZlSndPOW50eWM3VnVGTzJKdnZ5dXRQZXBwTHBVY1ZOb25pWDJ4MUFEbG9ObGgyeGtNVzIyTW9lZlJ4QVo4c2s4LThVN0MzR2laRHpHQlNKTmFTdUZpczdMdVFnRTJzT3hkd1lnSEl5VWNHdGp4RGM0ZjRlUFNSbTBKN3dlaGhSQkpiaFRCQzM5Sld6YzgqDQoLNVFJSTBDUGt4T1EqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235933-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CGAQh_YEGCIiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CGEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CGEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "5QII0CPkxOQ",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CGEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "5QII0CPkxOQ",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "5QII0CPkxOQ",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CGAQh_YEGCIiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "5QII0CPkxOQ",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CGAQh_YEGCIiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CF8QmY0FGCIiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-fT6DFMlAIrQ",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.5 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/fT6DFMlAIrQ/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLC6moRwkb8ESOnsUO_gjAAggA12fA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFwQh_YEGCMiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/fT6DFMlAIrQ",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "fT6DFMlAIrQ",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAGctjr-g50nHOPmkGgrGaDkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/fT6DFMlAIrQ/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CF4QsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IIxAjGt8PogfbDwrYD0FhYThFd0dyNWJNcnJaRTR2Z3pBelg5TTk5dThLTnBfVTl2Nk1RUDA0aE9YbHJFVEZJZzg3Nm5aR2RwZktFcGhuMEdxVzgxd0Y0T3ltWkExZW1HLVYya1B4NnN1RWF4bHZlTmpuZ1NRRUNpS0pmaXFYZHFLYnVKenpjcHkyWl9VNTZFRG1Tcjl1QXdBMkotRVlUMi1MNFNZUWFBWXBTVU5wbUhMZGtiNDJtZHd2RjRtMlU5ZXJRclpUNHl5S1c0dTY3bkJrQ1JOdDluMVpVN2VIdEZ6eXRvYjczZkRJb1J5QTZnVFV4OUtaSlRBVFlGZmZ5T3dsb3VxQVl0UkVKcllVaVVxbXJxdjFZTjZ4YXhpN1daOUxvME41MnpuQVlRSDZZVHk0ODFyandDQ2xoQk9JVE8tQjhwMldVRkFEN1VfZkVmSG42RWxWTi1mWm11QVlicTNmVHhyTTFpQmhRa21VMEtyZUFIUHhqbG9aYy1QbC1ma0JfVnFWcjc5Rk9xME01aEVCWkNiT2FPZm9qWnFIelEyLVFWbUVmSUNJZmJ0NjJfRTNwYnpjWS1PRG5MUm9jSktRdmY4ZHZfc3hQamZ2XzF3RkNrSHpXWFlJQ3Y2NzdLMDNZemNQYlhEbDdKU1VtZmZ0VDZ5bFptN1BhbmkxSDNjUXBDU0tkN2NvRUIxaFFWcEZBcWxHYUFKUHZOTGQ5b3loX0taVGs2XzBKQ0UyTXZqbTVQRVZ4UnFReWFoRUl5bVR6RGxweEdXeEVmQzFVejBvU1FQSVU5MjlmTDN1SU02TVlLV01HeW9RT0pzZFRNcnN0RWVwc1dJUDloakpER294N0xtM0M0ajJSSUZjYU5QWm9sNHIxdUxVUkRYc0xZSGhIRzZva1RPMHE5WE1xNTJKbGVSd3gwcllaeW5OU2doUDhhU0k0VlBVVTJmNkRKMFh4QVVZYUdWM2pheHBCTzg4MFc3TmZBXzdnRnFpa1NsdlpiOUZ2dXh5dHItN3NWU1ZlQ0RCeVhrV2pNb2lQTlR3dXhKellvTVdlYXVtc2ljeGkzZnFhczhtV05Zem5GMndBZzA4bDItbFVUY0FTNzNXS1FVbUZCV24xVmJCLU8xVzBtbEFyaFVlczEwYVd0LWsydmJoNTdBYXVjX2RJOWRJZnZ1SFdEUV95UFVodzYyZjR1QklhOXEwLUF3LVYzR21ZOUlkbGs2d2RUSDRVbkxJSUxabS1TRUpWbU1FNXdrdTRmNFd2MU91QUtFb2lETXkxdFdCYlQ3b2pjbzl3OHlfaWNnLVZtQ09tcm9adXktd201Z3BTejBNQ3BNQllOT1JkeFNBNmFWNnB0WEFnM3BIS2l1SGl6enZhNFNJZElSekVSaWxic0JVN0h1R2pSek1naGstTk45ZVQxQ09IWV9HYVB6UFN5enkwdGx2VjNDcnF6MnFuOHltMG03OGNIak9sREE4M1NyRXIzVVkxMS1pZVdoRzNPMXFVdVdNX1liQms1LXdhQV9WZDZYanRRR3FCTTJhcEJTOVNoaHFkOGdUSF9MSVJ0b0VENThhb2M1WVZoa2pWdEEwUy1VYnFFNUR6Z2s5NGcyR1JLVG11WUItb01FYWtVU1R2anpJRVJ2ZFk2ajNNZzlKaHRWRGJlMlJxUjB0aTRtRkJqRS1wZi0wVlpGNHlqdDJHc2NwdEtiTFAwa2t1eS1IUWJIMUhjS2ExbTQzRlJ6MHVQRV9tb24zYjZESjl6YWt4aFljT2Jpdk1kWmlpWWJicm10ZE5uQzU0MURqYVhCbElZd0RjTVJxdGlyTnc4UzFJZ3VqQzh1NlBIRkY1ejVTbENNcVlQa2lVelZmdk5oNmFtMU1TaW9qTUhNcW5VVTZIVjlHUjJhZGpBV0VDbVZzUUdUUlpuSnpSTlByT1V2a1VNUEx5QkNEcjZ5OVlNXzBENDVPUFRCamFwdGlPRDRVeU1iNXFtejVleEM2NjhBTGdPWG1jSnhHdFhDMkI5aGRxay1nbVJ1ejRpbG94U2JoVEpJY0NrQkwtMkFTMkxRMGJMaFEwWlk2Z0tuUzdodkh5b1RzeFRSYTRDc01OVEVnT1ZCQ1FHQllzWHBZWkI5YzNNSmFaZURPYVJyeWlBdXo0TklEZkJudVVOUlB1aFQzZ3JvQUkzRmRDZzhoZ2U2b21kdUhfODVDemtNOXVySF9PUE9hd2E3SXJManV4Z1RPWHA5SHlfRUdxemxkbG1odUVqRXREUUdGSFRJUFVGRHJiRUItTm0zemFEc2lnS2s3ZmROOG1BUi1yUUQ0M2dhejZqd1hLOExGX2N0X1FseDlHMkF5NUwwZFhnZkVEaHB2Ny1tdUxiMHdkb2RVT3NOQmZzOWJya2tZdUhYaHZNTHdIM0FoTm81WHh5UERxYXVWMU9JcFpnUWw1ajIyRGViNVF1ZnA0Zjg0X3htY3Y0R2RyTGRiMFU0dWxHMzJObzZiUi1MOFU0a2tTMExJOFBZR2Rma05tbHVFNDFEUVViRENfakdNYVdIX1BIaXQ0Wjg4Z29qN3VkaDFxZnNuQTBaX3QzZGpYdm9jbkM4UkVsTk90U3dERy1lYXRhakFZZlJMa3lNTjN2ekY5UERaWkZNdUVWN1FXaG4xRUpVYzRrMGF1S3JWeXZ4RWJfWmkyOWVpNlZlSWxzS0xzaG0qDQoLZlQ2REZNbEFJclEqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235934-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFwQh_YEGCMiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CF0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CF0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CF0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "fT6DFMlAIrQ",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CF0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "fT6DFMlAIrQ",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "fT6DFMlAIrQ",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFwQh_YEGCMiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "fT6DFMlAIrQ",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.5M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CFwQh_YEGCMiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CFsQmY0FGCMiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-eLKMPuMSudA",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 860 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/eLKMPuMSudA/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDHzH-Hr-Abwl9vona_Lgxq0A0WAg",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFgQh_YEGCQiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/eLKMPuMSudA",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "eLKMPuMSudA",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymA-aEEK0q9mtD-CYqBhvDm-kAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/eLKMPuMSudA/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CFoQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IJBAjGt8PogfbDwrYD0FhYThFd0dfcFVTdW5MNTZndFdVeGxZQUlsZjZWdHgyWFNjX0xNWlpnNmRDcHNNVWswV1JzWi1yZFFvSGs4MmVoQmFTcmlxZm1hdUtaRGY4WElKWFZCR2Z3Zjh4WldGQ1FDMFFzckVWYWpQSktHNTUzZjBOZHlWQzNKWllaV3hpTEFaWmJsdlIwdzBiQ3ZyWHcyS1p4SzIyeHVzb2tSMTdaMWRZamQ3N3lGN2ZZQlZSS3NXQk9rb0ZWZWNOamhEbFd5UENqX1VzemppX2ZQc2dvakIwaWVBUndpZTBZcmJoQkJvWVN4a1dGUjVldHRmYThDSkFlRnQ1TDlsa0IxMEZ2XzFiSUVWVm9LNDRzMk9ZeTBIS1hsTERDaDE5S09DQjYxZTFYYzdqVi1vVlRhN0EtVXV1blRaMjRwbnEtb0xMdWVRLU4zdmFjUEgxcFd3ZkxSSXNMZUJVQ3hsX0ctby1xUmlicFNkakcyMlJTeGd3OEJaV1RtNDY4YnZlOUdoc1cxZXpQN1hwR2w5dWQ4d1FxdUVfLVVqa3Q2cE5NY1Zla2s1Y0E1bElFa3Z3Y1drYU1URlBSN05IMEVGdjd5Q2RwUUZNWHJhQ0EzaDAxbmZxSFlwV0Z3NTFiX0lNYWY3UEFydkNkVUh6aWFfTF9yNjc2aWxBX1l4WlFobHlWUEVtcjkxcC11dXE0SzYxQU5oWWdpakR1UWlGcFlHWnRkVFNlQWRmTXVHR1J3WFNybDhSUFhFeU45aHJYSUZsa09WY3pIdWVhZHBlYnFxcklMSzJSVVRRNk5CUHI2dUpqSnk2LU5hNTJOTWg1MGNYUzNLVVVneXp4bjJ2ekgyVXFXWTlpRFhNcHRVRFBDQTRjT1VTWU1HS29SS2dtTGhMYXBaTkFZVElYMHk0R2U0ZGUyNEQ1ZkNpTkRscmFFTTY0NkR3S3E4Wnh4WHVfM1VFc0x3eTdXTkhlSXpVLVBJU3dMdWJJUDB0VnNmR2xhOFNrcFFHZUhubVAtTzlCSk1Tak04WDN6NWVaU19ZdkF4azJSalVOWG9MZWxFbGF2Ykx0bHY1a0VUWVo2YXBidHMwdDVSWENiX2UxZVhOMHBwUU5JLXNfcEptcG5CLWh0OTFXOVJEWTRRd3pEMEg5cy1rTS1EUnZRV3BUR01xSjFkcWd6NEJjM3BXdkgwQTk1WGMxNE5ELTR5bkthNms5V1pndGp6ZWpFNW9zbUUxRVc2TElsN01Fa1FVVXY4Z0xrZ25hazdtM25VdTNzV2N2N2dPeWJVZ2NLdndDM0dDOTNiSmNnTFJJV1Z5S1p4Tlpib3k3UU44Q3FKSk5GZ1prTTExNWRkbHF6X2g5ZldzMV9wdTJCNDZoSlVZb0dNNmJtcUF1MWtRYXVONWRuZHk3TFcyRnE5dnZsUW1aYzdmQnpUUmZjVmItUndFLURGNThRVTRsSjQ4T245T2RFa0JEd2k0OW5aSW5JWGxYMkRIN3p0UjVfZDZtQ0VkVU1LUFRaM0MzWHRkSFNzVHgwc04wR1N5SF8zYXZncXh6bzk3N095NVQ4anFza3lYU1lWWjNjbzAzanN1QUd5dm9PLWpoWXVSSVU1eTBCOXN0a1FXbUtUV05URmxXdEU4LU1PVjdFZndiaUVPTGxYWllnR3FyMDMxbkNacmZ2MnNkQXdRWWdxSkVzSTN1RzNvQnAzZ1YtMXc4Mm5YYXVNaU1uc0xhOVVTT0VoRmsza1R0emV2d2xiNkw0WVR5UDhCcEc4V09ET1E0VzZPWTU2c3RHcjdkaEp0MEE1SGM4LUNydWNXTkRKV2lvbnVmbnZaeGRsV285YkJuSTFmSHVLR0pTU1RfWkNJVS0telVVUUZNbjlTQjZEYU16SU9sZGZvb2d1X1RFLV9IdDMwTWxUZjloQkVZTlJMSnpockVEdkctTFB6MDU5S21VaWF4QXdFUHptazJjaFU2aGdTUjY1Vmsta0QydnRnRDJGcnB5SFRFQVVpbHd4NWxHNm82S2JBM3NKTE04WXFQcDdTZEhZaGpjUUpVaU1XVmVPMlFJTmFaZHZVbE9RSFlpQWR1NDVjZWM4d1FIRVYycWt5MVVjR2lfVkIzYS1QWW93WkxyYXpWRDV0bno4T2JZa190N0pnY3hQT2xXdG9TVmJqVF80QzBxOUIwU3JteWh6dUJCRHVlbTJjU2xXbGlyT2dpMXk3ekJ0TjFPU3pPZ0dwRmptNHBhcnNaM1pfeDhrNE1BcFlnZ0JpWEZ5ZUtSMXQtUlE5NmE0RmxWbjF4dks0TmhrN0VrWW82S3Y3Sm1PeVBqb1B0N2h0YWFjSW5wZWtaZGp1WVhUNzdqSm5HUk9uMVBpbloyRnltTkI1LS1vRDFMTTJJdFY3YldNRHI3QkNxSmhOdUd6NGRDanhIX3YzZElqUDNIV0h1MElLM2IyYUNSU2VscTV0Q2NJajdWVjBqVFRwa1JlSU8wc2xDalhrcDFydEk5U2lyd3RrU1QzZl81cmpGeGtNYU90RUI3UG1rTVh0NjVDX2U2eFpDZFRTRUFpSG1KdWpmV3lyend3cUhmaWM2ZWxyc1dnSW1HZXg2RGktYjVSLVRYTWQ0aHU5SFpEWUlqbFdPeU1FQVBNVGEzRUsyMmZQdElLZi1RdHNwMl9iVFp1Ni0ycUIyQVpJVDMtdFFRaGcqDQoLZUxLTVB1TVN1ZEEqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235935-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFgQh_YEGCQiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CFkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CFkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "eLKMPuMSudA",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CFkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "eLKMPuMSudA",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "eLKMPuMSudA",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFgQh_YEGCQiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "eLKMPuMSudA",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "860K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CFgQh_YEGCQiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CFcQmY0FGCQiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-waq9aPzxQhc",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1.8 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/waq9aPzxQhc/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAMCtH0wQbFaOkTrEJt1fatDRnK6A",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFQQh_YEGCUiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/waq9aPzxQhc",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "waq9aPzxQhc",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymC7BltWSgga98LdM2ikfe2gkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/waq9aPzxQhc/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CFYQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IJRAjGt8PogfbDwrYD0FhYThFd0d0NnMzX29wYjBRSjktMmMxYlV6d3ctY01icGRNTk9aQjlRdmNiVTIySUtiRjROT2tEWTJELUxRUnVxWlZWd1dfekI0SXpNSFNIM21qNzR4a3NCaERiLUF0bXgxM0VVM3hJQUZHS1dlRzZabXRoN1p6VDlmWnNqWThSQ3BKdVFJTUVrZGNtV3dZMF9XYUdMRlFXcElxTzZlUWVTaWh1RFF6WW9vU2duSjlJYlFUOEtIbnFuaVpNT1FsNFdIRjVfRW5EVHkzakQ0clJ1cF9YRXI1SmZrWHdUeFJSUTVkUU9DclZ6VlAzY1FGWHJfWjlYcDVNNHJIbjlCVlBYZ1NhNUNHd1RjTzA5Qm5INndjZ0dDTGJrN19xcGhpeTZ4YmphSFotQ1pFUktoWmJSVE82b3BFS0RLU1dpSHZDSE1INjZNTktaTVZjWmFQcGI2SVliSTdzVnh1eHFGOGFYVFhqNGs0ZmNMc0VZTE9qR2ZSR0dJU0dqcEl3YWQyS2N3NkMyMlcxb1JZMGIwcDIwb1k5MmluZHZIZklSVlUyTElhT3FaMnBTdjNKYVJfNUFjM0RiSDhlTUJvSWt3LW56SFU3SmpxaXZJSjNYRmVFRUd4RDFCRzBNY0tZeU8xOEdwY1dHZllXcXZtNVQ5ZDB1Vjk5M01aaHR6Y1c4em9tZ2hZdzVRcXNxZlliMlYtdkVkYmV0TVc2bU9VRERveWp2ZUxKS01LaUlIV1JYZnBaeEpPb2prY280YUZ6VFhxREhzVy1Xc0tyVGRGbXp6MFZqSzduT1ZNdlNyOGQzdjVEMVAwSEVBUHpyamY0Y2ZMbnZkTHVJTjQzbHF2aVlLMkt2ZFVpS29jT2RUVUJvTGNuendmTXAzV2k2MDg4TldWOFhDSzdGOWo3RE84N29HbHJzMU1sMnNyNHVGaUw0RjlKblh2ZFFxT3Jjd3RwYmV4Q21ES3pYbzF4S3RNcjNiZ21WSVBFY1lfQmROdzVFUWIzQ2V5VnhlQnBzSFhDVFY5Rk5WcnZpV2E4NkR1cy1iNWgwUXlhcUdTM0tmdXVteEFGTU9uOTNSaHowQUF0MnFrTEJCbi1HUmNadVBMaFpDVEtLU1VUZWRaWktZNTNleDhMdEx5WHlmQzFTTWJYd3oxci02VVZYcjJpVnFiaU1FN3dlS0VUR0ZqY0RMTUVvYzBHYmpQTG5NWVp6OU1PMXg3cmpIZ0FSM05DVmNTS0k4MElteUh3OV94R0s4MWpnNUhra0NWb1AzVGRwZ0RJRll3TWc2eGVWY3dybWVOcTZPallwalVXRE5pd0dsazctbXVPLWVzNml2R1RzR082cW95Zmd6WDN3U2RvQlIxWHAyb1BRZEZERnlldElNQUJyYUg3SFU5UEFSTnMwOFV4ajIwVlhabU1DeUh1MzRUcjBZZmxKTmRqUWZiN3d6eVQ2T3dwMDRHRnhuRTZid1Y3Q1J5YU1OR2d6X0UxVC03M3Btc0ZWcjdSaHJTbXFxRm13QmhkRkFxQnFKUmpvOXNpT2JsX1N1T3lfUVVxVXhWaGU1V2FVUFNkbUpfTm50UHhDQ1M5a0NyY1k3VVFFMi1ZOWFTNmZETTlxUnNURXRXTENFTEVqZ1dLcmhaWGNlbE5jdFdQN1BGWGRuQUFiWDR1OWl2cmpkQXpieEYyTDl2M29SbjBGdzlJRjJSajlpYzJyaV9OZjMzME81bzlDRzFHT3VEa2E3V1VPSDQtNGU4by1LeHdqNGp5dk92LU1oVFhMWEl4QjhpNmo1eGF0bGJJOGZfVVZnTUdvUkxNYVpCLWUyMnRoZ0NYTTBrZmx1NmhDT1FheFBRbHFVdS05cGZUTVdDaXRVaVVKM0F5cGM5M2pJUmpKWkhpeENvTkhkTVFCU2NiVTNnSklUQ3doRE9WRmhJQkRhekoxSzNNMEtJc2N4MVdkWkFvRFYxY0w0Uy1hb0dKV09fQnF6ZU1wU0x2a2FhMXBjV24yOEl2SGpIVkN2TjhyWlE1dVk1WnBDSWE4dXRhWF9RWTAwTG4tRGJGcFl2dkRpcEVxMjZGcE5lYzFvUEJDdW91ZTN6Z0JkMUNSakFFUGYyb2VrbU9RTVNZazRpM243eEZ3X0dlSE5iLWhSQkVWSVd1VW1CMzZESTZSRExJNy1CNkpGc2hFSGhTNXVBZmxnZVVQeXN0Wldmdkd1Q1FFRXJjbnZxai02SDh4VGMzd2duRnBsYm1uVzU4VElxaTJyTlpicWhueFRtd19ERkxaWmNVSWNWV2pWVEtQQTg0SE9sUllQUUJTTmlCU2hJcjRHWlJEWGpIODUyZ0lIREtRQ1Y4VjNxdmVMWkVERkVVc19JVDhZQU92cEFOSk5HT0plTDBCYTdZeElacWdIaTdTMnpoWl8wSmpwQ3J4YmN4SUhZd2xCdUE0Qk1aRU9UUnZ3bkZKN1RJbDVNNmpfbjFtbkJrbEFwaFRSZjBFa3pWcFlNT3dybFhiekU0R1RwVloydWkxemN6MlZwb3V5VHZSaEVmbnhkU0dUaXB3S01VeF9DVGZLRXNPS0Y4UWN0YUJVNnh0bjhDSjNSTTdQc0JuVWFXT3JIWmZBemdsOFAwQmloMG5IbktrbGo3Q0VSZzJjRUdUMDVTcHZpT1pnWVRabm80UFNwRVhNRjRXb0lUWTZKQkxpdS0qDQoLd2FxOWFQenhRaGMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235936-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFQQh_YEGCUiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CFUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CFUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "waq9aPzxQhc",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CFUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "waq9aPzxQhc",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "waq9aPzxQhc",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFQQh_YEGCUiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "waq9aPzxQhc",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1.8M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CFQQh_YEGCUiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CFMQmY0FGCUiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-eOlVY3Jhdag",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 767 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/eOlVY3Jhdag/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLClrijoLXPDnRs49W2aL141E1B35A",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFAQh_YEGCYiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/eOlVY3Jhdag",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "eOlVY3Jhdag",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDRZgqL6NkXLIR8xBaWnaMZkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/eOlVY3Jhdag/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CFIQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IJhAjGt8PogfbDwrYD0FhYThFd0ZDMVlWbUZlQnBISlVkaU50X2o0UXpJOUhGbURRZWxwMEVjcTgtR2hSLWdZU0F5QjZvakJKZ1R5Z1BsOUJTVUdHbGdaYWhvUUoxbFVmaTZ6akpRdzVhMDRPZnBsbTZzVkdUS092RkxoSTB6Y05zT1B3VHVYNmRQWjhlSlFsQTZLbC15cTNNWExnWW5kQjlISmNTSzd3dVdvaUpxQlBvWE5xT2IycFRQbmlpdjFaeExmOElUNXJRSVFlTFM2MXo1NGtqWVZHSExrOGRiZ3U1bGl6aEVNWVVmbVRWcUV6UUdycmI1bHBGSklMWTNSa2lQTlIyMmZrbnZITG01VzR5MXhybFBHY2hRZmtSekpvaTBJTEVkOWhaTG9ORXUwVHd5dkpkRGl6NXJPamlYdTd4RkpvSDUyQVpIV1NILUk3VHM0b1A2RmltVmNYTzN6amVPOXMwZ2hwZTZYTXFjNnViOU1lWExyTDlpUEE2N0JRQnJyNzVfSXQ2dFVPcFppdEUxWk5yaEY5YklKeHlaT0FkcmhnY19wRzY4WVFEUHpxSG1Td3J2RVl0Q0ZVcGVCNG5oeFJvdG9STS1RNGFpajY3ako5SVNPTl9oVnpDaTBUdmdOSDdDbkZrZ09PSnVFWUpVWUVRTU9lSzBhRDdSeDdSNEFqa0otNElzbTdHeE93MmE3UXVDMENDT1FmSlgyWXI0OUhpdWZEMXFTRnZURlB4aXlYTWtVYmJlSFp0RGNJem13eHBkbVUxOG13ZmJ1eHQ2MTR1aW96SFNKYzJZUU5TQWpLajNMa3B2eEhVdExFTEl5OVNaYUFNbzBxRUVQOHM5UmpxeEJmcEFjUlF6bkVJWDVucm5IdVlyQ3NHWEhVdWY5bmRpcTRvZUFucVZncGpxZjZUb3lSakxjbFk0VG15d1RXclY0M3U4Z2ZmWGVRQm4xTU9pTklYSFp0QlU2UTBvVUJ1WTROWlVsQ2JaLUJPTTBQTGxMbklIaGdNU2J0UTFEVDVlMEpHclM3QUJpbDJOM2ZkbHlZeVk3RWJTald6RVh0N3JjUUl4enhMX01TZktUSE4yS25TVzNrbWVZak85Zmktdm4tdHVoWXdteG9zSS14bHZRamFUMElOcGxNMTh4bTJDYlBya3JWNDJ5RGZPc0k4Si01NzJmNjBKLVloTlp3a2hhT2RMRHg4UXlqQVp3YVNLYkRzcXFsWUpybVBsU2JGaDRoMVZIS0gxUGFiY0lkWndvZFczNmRzVzFSeEVpQVQ3NUoycWlPVTZ5X2xiNEFYTEJ6TmVJRmRyekJ0a3BfSDNYVVZPbXFzZTN3ZUVjaUQ1Z2pLMTVGc1otYnF0QTdOWThzX21VSExKV3ZpeVpYU093cUlfWWt1YmVZMzNXdTFtdDh4RVRtdGw4RTc0TzA1RFRSaS00OV9uQnJEdEhnNGpxYW1FZC1qQ0d6bzRneFkySDhHUzdiaHlZN1VEMWd4TmpxVlhtbzh2RlNzZ3dMdkpWbTVzdHYwa21hbV9TNUJpdnZ1QzdiSGVRZlFHdjR4WFkxNXVtRjlLQ1AyRldLSlotWWkxS2ZLeEFIVDVtdDlHTG9PVThadmxhYzk3TkxkM0FjdDFtS1NMMm9yX2FvWm1QUWx2eFZtVk92a2NoMGFHbTJUS0gxT2R2RUtSUWJqR1dZWVNveVBNUDJmNjVGaTVrTXNwMml4VUhLTmk5Qy11Z3lzdHFQbjF2QUx4eE9zc1hxZmIwVTJiSmlXanNIV2FNQmdqdnVyUkt6Y01PeFJNREs4VFdmZGtpajRLQ3l2enlFd29GYTJsWThYVk10QWxBWnpaRTFUT0Fta3pjMmlqQjlXdVRZTnpUbVpiRUd3REhqc1pWZmYtZFpnVG9WTkZzOVZGeGhWVkpTbF8xY3ctdXhkOTR6bjhzOVZFOEtTOGdhX0kxaTRrY1VQaVRlRWY3WFNVS3hUTjNiV2lGMmZWY0lTSkdMUmpSU242NXJlRTdQcDJXc1Z3TlVtWVlJclpNbXd2QVBlRncxYk9FX1gwUnQ4Rk1kQ1NpOF9xbi00TUFGQWliRjQxNHRJREoxMm1laW5PUDRuU1l0dVlXbjBjUFBvSmdGbmt2cUdrMlllMERPd2tWaWNnMExnUC1OZVlZVmREeTdrOFQyb19yVGE3WXlySmdpOTlCeWtZZ0Rwb003Y3lXYXFncEI5ellGZERfRjM3RFNhYmxQMFgxeWdfelJEY2lya1JlVkpTSEwzX1JxYV81U3BKajlOUUVoTWp3bk43eWxyT1M2Tmc1S2RfV1JQWFdrVDYtcTVtLUlvSE1SM0hURllWWm85N19fSXByeUJTRUN0QV8yU0ZzcTFlOTZVa2tpQ0p3Tld0RXA3T3UxbXhOQ1NvVXhSN00wYU8wTzlaVE5OaEtTVGQxeDFTY3JGZ3pFY3RhN2FUUGpPbnBPeEdSYmZTRlJTdVFQNExGamhVOHRRLUd2bjNwTWVWWkZ0MkdZbFRYS2hDS2FxQWEtTVBUOTlXMm52dkFwUnhVYVBuSlVmdGt6cUY5NjRpSWtZT2tkTFEzX1Y3TjNMWEhuR001ZUdNb3RqanhyenlYMEEzZ0ljYW40RGJGNXlIa2YwTFkybnBzZDlYcnJnOEY4NkMtbG1HbU85b1RQamNWN0lhRk9RUE5uOVJtNk4qDQoLZU9sVlkzSmhkYWcqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235937-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CFAQh_YEGCYiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CFEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CFEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "eOlVY3Jhdag",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CFEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "eOlVY3Jhdag",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "eOlVY3Jhdag",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CFAQh_YEGCYiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "eOlVY3Jhdag",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "767K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CFAQh_YEGCYiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CE8QmY0FGCYiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-M4tOxG5xCds",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 989 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/M4tOxG5xCds/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBR7_9xOpB2zKqfuuLnQ1M4vvC-pw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEwQh_YEGCciEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/M4tOxG5xCds",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "M4tOxG5xCds",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymA-mVqJWB523sAoJrBh4s2jkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/M4tOxG5xCds/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CE4QsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IJxAjGt8PogfbDwrYD0FhYThFd0VyT3J2R0dtTlZWTjdhVmpxY19rY0d4b1hmdFVENEpBWUtkbG9TcVR1dDg2WlhuRjdmU2diWC1Vd0g5bW56Uk1Ob1BGQUs1UFVfQllkcFkwVnpJWkp3bVVNXzh1cmRvUk8yM2I5RW9fZXlyUElweWNVNjVoUTJSc19DV25TTTZBeTVMRUJZQmcwRnlVWC1sejlCR09VYmowTm1lT0k0MWtjOTBzbFl4WEgzV3BqY19JdkhkdFFmdzZqVjJmTDhhbjZYd2taZU1JZXRBSW04eU9Qd2lWYWF3Sm1IQ2V2ZmVkeXJHdXJRSFJVTnRLMUtqWUEzeWl6NndHRVBHV25FU2hYRjJBX0h1TGUxeG1US0g2Y2RvcEQ3U29fTjZRdDF0RmFmVnR1bVlScGlaRU4teEVSSkNwczQxM3ZjNXVFd0hkLUg2eDZyMHoybFkwU3ZMODV0UFhEeHgxc093Q3hNUlhTc2pmMmtsUTZDQ05aTnAtd2xPbWpOZy1lN05rUlUyb3UyT3hBcWozLWxoMmR3am9ISjB5NVRsY0dYWTBGbUNyVXZrRkMtMnFSRi1fMlJfejJkb0xjcG8zYm9hWklidVFMc3EwdHUtbUhSTlBJVFAtTmJCUFprR3VfbHJuZnpFcGtVd180Y1FtdV9aSFRaMERmMFVpOEEzVFZseGlCY0RvWlV5emFhQlpOSU5yVDk4dUEtN0dtT0V3QVl5QVFSakJlY2o2VDBWdmxxdk1xVW8xREpKazcwcmlPTkE3LWN2c1ljRHVJNkFsVHhyZ0RzYnNKbVVYOXB3MzdnVnNzdTZLN0kxS0s1OWdGS082NEpZWTRiY0pFanBDSHdLakN5b0pfWEhFM0s4cEVsMDhESWZYeEJTRDJMUERac0pBUG1wR1JzOV9UUWx4Y3V2c0d0emc4bHJfUTNSMVo3Q3YzYTRWQ0Y2U3BlSldncVA3ZGIzUEFvenJPck5KV2o4VEdONHpLN3V3SnM5b1ZYV0lBTFpLNVcweEpRLTM5NGY0NXB2UG02bXc1TEZFazBLcnEyamtwd0dWbDlaUXp5LVpPWVNKYU1QQ3FsbFFhUlVod05MaGlaZWRUalJTTEgyNTYtTUE1RUw4Z0c5NEZMQlZhZ3lEVVRDb3dWdXBvdXN1UVhMNVU3VjBRWXBhVjhIZFkxek8xaHJ5RjVZaXU3SDNodXF5WmtLd25DQ1BQcnhtNDJMRXJkQi04WXZrNTBSYndQRjZkd2VqQ0tnV21RRXdQWjk0cG1lMmdvc3BxaHk1VWFhUDQ4ZnlyR29STlhnV3pWV0hIekFCRmRiU3BGRmFWa25wUmNHYTZFSVFIN2lqNTAwUHhGaFVUTUdIa1RGb3ptX1lVZGVPNGpuZnhacDM4Smx4TkhUSy1weG9fWWpmNTMwWS1NYUJUMS1NZ1ZhUktXRGxJLUswU2d5RVdsMHRmc1Yxa1BfSVAtdzNTYzFVVXdONll4WXR5SzJVWnFOUUQzbHFQdURIZjVBY3p6cHdXTGFWZ21HR1V5TzBkT05DQkd5NloyNGF2Z3N2YnR3LUdqTWVBRVhWQzd0YlBRNkxpaGFFcDNJVl9EZVZNam5jaDZLTWhxZl9pemRaWEVtYmpIcUt0TFBGZ2sxTWJvWm5tTEZjcWh0cVYtekRHWkdsd3R5RW42bkNicVZjOUFpMUl2NzB6bGVKYU9JSU4xc1J4YnVfd1FHVTl2ZGJkZUZzNDNXTzNZQ1I4bjlCbUJqLXJITUlreGRlZHQ1cV9LRm45ckJXMGVZeXZJcEdWUUc1a1hZSC1IbVFsTDh4UDRGR3JMc2N6cXRORURLMnotYVRuVWVmdFdJaVVXWUdmbEphMGFRNG5ObkxCLTg0bWk3N18wZ1k3QmFwRHZKbkJsYWlKTVJ0ZjdDREFQUTF5dmstRUNjb2RwTkkyS0RSY2RHVHV3aXpFclNiSTUxMVNpNnREZng3cFJYQ1NHX3RNZWRZWVJESG91NkFQaFZhTk5wbC1GYW1IYUJmenA1YW11cV9XM2l6bl9pQWVHTk9JaVpFNEFYWlMzUkJLRzZlaVlOdVhLMU42dEFCT0VudUZIZ0dTZENteVNpNW1ieTJPLUw3NTZVcXNCWFJIdmVDbWVqYnFYNW5UMWNlNm93Q3RtdTg4dm5zbEdUb250NUQzQjBra2RRcXNGX19rcy1SeHlTUzVscS1SMGZRVDNBbmE3M1FuREpQd0VRLWpLNHBLZG9QOU5yN3FHNnIwTjJuZU1mQW54ckhoVG5kSDlqdno2dlNaclRreDBLZ0VmV09KNkJrMzE2SXk3NGNwV2RwVzRfd0VNLVFtdkhvNEktclZrVWtROFpVSXEtZkRXQVM4WE9COGNlMlVpMzMzeW85QTFtUjl6Z0lXbGh2RDRPYkFkR1B6djlBV0dodjVwY1J1TFduS2dZMk5LV2xJUDh1RmRXMlZ6S0RJeE5jLVc5LVh5anhqbTc5WHNyaU5Ka2U3RFVob3lmaXhoSFlXSXN2LWZhNGdoS0ItVU5MSXhRZnRDcGlSdlQ1clB0YUluSFFxRktqVGt5R1l5T3RkZ2Q5ZGlsanE1dlctTmN3YmZzdUxNaTNLREE2MElrQjNuVGJGYk5yd19XWlhtSS1TeFV4N25DY3V5RXRjcjJaRklCV1dmcDJGUjMwVHAqDQoLTTR0T3hHNXhDZHMqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235938-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEwQh_YEGCciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CE0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CE0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CE0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "M4tOxG5xCds",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CE0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "M4tOxG5xCds",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "M4tOxG5xCds",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEwQh_YEGCciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "M4tOxG5xCds",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "989K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CEwQh_YEGCciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CEsQmY0FGCciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-M1Nv3DqWeNg",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 915 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/M1Nv3DqWeNg/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBovJ8GtoU_XyDKXZvrtgMKKDJWKw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEgQh_YEGCgiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/M1Nv3DqWeNg",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "M1Nv3DqWeNg",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCZjZfkc_VhNgQjQa6l3AYRkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/M1Nv3DqWeNg/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CEoQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IKBAjGt8PogfbDwrYD0FhYThFd0ZtdzRjeWNaRzZBR19JUllTSVd2dWk5Vm9uRXp6RTRVSVpLVUNZZ2MwdUo2SE5RajBpaWlZZjRuUzJqQXAwU25FbEx6djdyV0JhUHRfTHpxcERPcDZtLVdVV3RPRV9ZTG5vZy0xcHFjT3laTm9Vd3hHN0R0aktQbTE3UHZJOWx6NE8yMl80bjlLbVdSek01TUw0T1FZOFJFcUlRcHNRa1Q4cG13R0ZIWjZQaDZmXzdROHR2N3duWGZFVVltY2dpSzk0SUNoOW4tcUZ2YlVWRHZqOGNpOHdVZjlGVWZSZjVjTm1uWEMyVFEyWXVqcVoyZ0N4U1lsNHNTOW9zMUJ4TzdsdnFKVkRJMUxCamVVREpMUnJwa3hmM3RxTW5aOW5OOUxZOXZHcUQ5SmFiS2w1OF9BenRhc2xqSWhwQ0RCaGZnZjdQMVNjSEZkZmpZbkE1aDR4WklzMGZrLVJXS2puN3FJaGNrXy1BUjY2N1RDdnR6a1JGTHVnZEpCb3VzbWVZalBFaXdZeVJpSDBfa1RDMVhlbXFfNkhIR1VEYk5rc1NDdlpTdzVsSndfVXZqbVJQMlB6YzZpQW40UmdfdUlmU1RvZnVMRzc2S0hUYlNHWElRYUZXNWhXX2N2Vl85QXNxN0xmcHhEVUp5eFBOU3JXTUZVSzFsY0RZQlkzeUZjUUFsNEVHcGV3bGNDVi16aEhOWWxLR0tKSFFyU0pFMHhMQXpMZVZQbkNvTTJ0NmRjOTlWQ2hlQmdZSk42dVQ3VlFRLXRIYnBELW13REt0REJOWkdabTdmYlZfY2QyNi1FUFZVN1A3SUt5MGl4eWRxRi1Edm9lV000WWVoQy1LS2VJUmFKS1o0RF9ha01iMThXQnZiaF9LYVVrMldZU2JHNHF0cDN0cWZEalpGRlhsbW1SOWptVWhjZjZ0RFV3ZGhKV0xRN0FlU1AwNG55cHh0VFFveTFScDFkTDJQdUxzN0ZOeGxCUjdZSnVKaC1yMU40a0ZVZTJyZjJ0UzhWdmZUUDVneDRqQVZXSEt6MWZsUTRXbnpjMFNvOVB3amVhd2pUcF8yaDdPcFMzdUxfUy0zbkpVbU9FM2c0ZWJMSE0yVDVjRHdBcVF5eWMtUnd4bnVIQ3hCdG1GMkQwSm1QUll4V0xZVVN6VV91N0pyNDByTXFxVHJJd0ROY01iNFJKbGFIeHdSYk9KS2ROOGNTVWQ1R2g0d3NEa2NBS0xKUGN3Rk0tV2dIRjlEY01XejFlc2oxQUQxN0w5bXdmU2UzRlgybENKRFJjUUVWNHExUmtYc0VMNTVOaGNMczJTYlBZbnlOb1RkeXBpdVZnYlhTNzlPeGJRRlFFcDJLTUlzckRENXFhTHJtMXMyOXNwMl9scmdJU1YxLVc5THo5di1oZ0kzVTRoNG9BZkVlQzVFYmpYOWg3azVSM21wZGpXYWFIYVhaSGxWWkU2bGJtQ0Q5dEVKS3VDbmN4UENtNng1cUtmYjhNYzE0bk5XeVdINWtNREE1Q1hiZUtFb3hNU1Eybjk0UlhlaThpYnU4NVZRMEtGSmwwMWp0R2VmR3BHMWhCTEh6S0tNbFJVUWx1dXFSQmFFaHJMRFNmOG10Q2VmRy1IbHRkd2lRZE0tQ3hzdnBzQXBVdEZtNWdZSTk2TUJWUXpOemt6d0VkdW5STUtQTHRBZHZtcnVSQ2hKU2ZGRGxQODRfYnl2UndUUTZlVWNwX0ZTU1pXZzMwSW44YU9BMnR0MjZPZWdkMUU3SWhKcFR5Y21qUG56bTFFWEJfTE1GbWJRaVlqRW55SkZBQkpoUzFSSFhycU9oSjlyQU5YMzg5SXhQeVVTYkw4OWoyM2JtTjM1akNMdHVzRWVzZXNjcU45eTRhZ04tUWdJSFFjZ29GN1JfRTNoTldwNHJpaFFOTDRFTjBpLXJmQ0xoaXRnem5mQlVZQ2ZzcXprZjRyeTBsUjd2WTlFQkFzc0JXS1VITEZxQUlyUkRERTlLQTJGdXdFTEhQYlNIcEk2UXMzdVNsUVpGZ2xoRUMwWDFBVVgxTHFXOXVoVF8xYWpxbmdSNm04bl9jZVRZbFNvRnpZWWlWaGR6eWFPMnBVb1J4OGQzcFB1Y1lIVUw5R3BqYmJSdUQyN0JuN082T3dnd0tpYjVkODluVjQ0NkpzUlpTWEh1dlpRZ1lzV1puMUtCRVRoQmkxRFRUOUcyckxfUExmU2pST0RUQi1qTXg0eERYUkpmSnJLTDhUU0Q3TUtlTHo1N0V2LS1PZjlyWDh2STNqb1NSZ3dxZ1pRVHh0R1k0RndHSzFSaXBZSFZ2WTBsMGNFd1ZoRjFpVmpoMEstMlN2bVdIdlF2NUhSYlE3S3EwTGtPWUJGMDZFWGtuN25QRWRheXNGbzNEOGdQemlvWXFvWWpLYl9wQ0NNUzNCT05pR3U4SmpER2pRREVGMTZZeVRpUHc4UC0wWnpfTF81TEgxazBPUWJDczdhQWoxVXhTZzVqNkxNU0lVUU00M0dvTmNOWTFQMnBRcmF0RnVFY0lyODhqaFZjTEQtU0dONlVtZkZCclNYYTgtYjN4YW9qd05XWmdDal9vVEljdWJ6Vk9ZaVl5UlFrcnNlS2FmZVFaUHZWZ3BXUEIzcHN4eVhFSGlEQWpPVmJ2M0VwRURwVWdObzVaU19STHNZclEqDQoLTTFOdjNEcVdlTmcqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235939-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEgQh_YEGCgiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CEkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CEkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "M1Nv3DqWeNg",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CEkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "M1Nv3DqWeNg",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "M1Nv3DqWeNg",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEgQh_YEGCgiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "M1Nv3DqWeNg",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "915K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CEgQh_YEGCgiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CEcQmY0FGCgiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-BBH7OKoT-i0",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 12 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/BBH7OKoT-i0/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDN_vmtrbBIRXAv5YgolTTChKgxrA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEQQh_YEGCkiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/BBH7OKoT-i0",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "BBH7OKoT-i0",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAxUPYNYAsiy7A8PDClKECIkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/BBH7OKoT-i0/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CEYQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IKRAjGt8PogfbDwrYD0FhYThFd0Yzanctbko4ekdxYVVpNi13eHo5RmczeUZlbE5ON3VQSGJJR1VObjY5TkpsRXJKX1VRLVdHXzA3Q0VPN2U2RGxaNHJVN2ZqQVd1MFhsbndVUXdJd1lEeXNEc1oyOEZmQUdpX1R6QWExUnZXSGF2LWgzVVd6V2RkWlZ1V2xQVXVBV00xTWNnMGNvNEhqa1NvUWdqcmxBOWdNYlRvVW00NzdaM1h4Z20tRE5IZE9tbGh4Tk5DOHA1ZEJ5MG5ITjRUaFFfWVdGdnM2WlpmTUtsQ29HSVlYYUxRa3pmTjIwdVU1TjVxcnJFN2NQOXpWdW5zY1dkVFg4VUxlMEZrblJ1dmFuemZLdVhfYTFHZm12cmxuVTVSV3RkT2FWd2lfa0dzcWVjM2h2eGQzRXlXd2RURkRZeUl1VDFIbkRTRGp3d0Jqd05qdmhpN3ZfMmk1cm9yalc3RllVaHJCTTE4M3J2bFMwcnBLdXB6LVR2WHJQSXYyVVdxemN1d01NN2g3bFNrZnRZcWJpMHU1WGxKVVpzV21SLWp1cXY4b2FzNE9Xb19qZjhmUDFNYmViQW9QMktHRVExZWp4UkVSaWg5ckdLc25yakU3UmFlQ05mdGxFamMwbUhLNlFnMXB6alk5dm9WaWI4T2tvb3RueXlQbWk3QkgtVmM1ZTBqYlVxXzJqLTdEaG4zT1NBdVlySjZrY0U1MU1KTGtabTFwQXN4QzFOSVd4cnpUcWgyMExYbHFFeWpnOW1oRlhvaThrVzNJNGdtYjVxb0VJYzh2RUoxWDBOMXIybUUyeGhfd2FnMWFsSkhfLVJLVWU5VHlLOVBKdVJoM1FHQXB3ZnBONlI5NTZNLVBJZWxQZ1RqeWczVWZBT1hiazlzVTBYQm1hM2tRRWU4NmNFNk5BVnlrWUpSXzM0THQ1SXRIeGl5MDdrTkFnUThnTFhwQzlEZmRIUm9SemdhN2VsaXdZZUFyTGlCbC13QjMwbFJ2NHlhQy1lYjFILXFlcFBGdVh3MFdnMFR4ck5hVWtIYlBKbUhJTWxkUnVLalRCWUxpb0R6T1NFX3NVdHFnVmxkaFJCdkpfbTBLS2VvNzU4QkY2Zk41RExTY3ZvV3dFR0FKTnlkR2lYem1xV2pPZ3UwSkV5ZlZHY0dFbHo3elJ2Rmc3eHh4dHRETXh5VDdFQ2haLUh2X0Y3S2EycXhLMVd5YUpfYUczUEdGVXB5c0VubHp1OFdHR1ZyM3p0TDVrRXp5d3hzanFYTTFwcnBaeTlPeV8takRYVTV6dFd2UWt0N1lzUXNqenJyemtEMHZ5WkVnaE5FN3Zvd2V3VzIzVWlLUjIxR0x1Xy1nNkF5Tl8wYWg0WUFkTExKbVRXYWpGU0VlYnd3OXRoRkR0dG9mY1lSWHJBUWx5NGJGR3dNMnBfQTR5dWwtRHlwTWUtZFhZc0I3c3FDcnVhSUtORzFhZWw0Wm1zcVotWlJsSnlLSWpkZEdaSk51ZEwzVnZneXJxSGtTSE42cmY5Q3BfSzhXRTJvNDFOdlpsSWgwQVJ0TkFoSVdUUGxSR2owd3piX2R0U2JmcjhoTDZRUjNkQzFoWGlzWTNxaURtV2M5c3hucS11Y0xvNXpFTUkyUkZSRGZoT1l1RjJzRXFESTZJWldSZ21VT3NhaXJjeTNCY1FhVEpVYkxUOFo1TnJfRTZ5VnBPdnVuTTJiUGpVQTU1bkJlbHRUWW9ScXJrbmR5WDk4SVAzZ2VfY21KajlHNU41cmF0SGFENHpXNV91R09NcWg5cTd5WFlPMUx3MnNzRmdxendFdF9STFd5QjZMNWZPWi1oUEt3dklpdS1WTG4tS3dhQVdqc1ROSW5fMWJVUEJJa3RDSVcxckFwcDZKSFFyYlViVVFucnNCNHc5dTdtbFh0blNXVDBCNWF3RDNQNE9WdGNDdzNUeFNBOEE2VTVWMWZKNWRQTTdvcXJtTnlBLXVEanJ1cWNsd2Q2RUswN2xqZEhOcHY1UTdlZVZQdlNFbjdwSmRTM2hEWHQ1SkNUbU4wUTcySllyS1A1eDR4X3g4NGhvazY2aWZUNlhCNmt2aDFLOVVnUUxNdkN3dDVoSk44eEd6VXN5S2JYTE1VcTNLNFFpcnQ5Tzg4TkJfcWwtZTczWEN1VTBOb2V3NUttQ2pVUkVXZjJ1OHlEeHkyUFVTRzRxVFdhRk12NkM3aDNpOEJLY1lmWFc5UmhPWF8wWUhTT0RrVVdtbFRDdFNFVG5HVkp2SGRnTGhURHExLTJBTXUwRlRLOFFGVE0zNGdOZDRFTHNkNmhlZ1F2RWc2bTRZOUttUFRRSE9tM3hoLTFmMlFpbTIxWHRqWkUyLTdieWc4V1hjWkNFdGhhSHhfZGszYXpjRGJIWmZEbmhRMFpINmNvRVdJMWdJd0VXMlhrbVdzUkZ1MExsQ2FMWnFJMVpuWUpvUEVqaGVxNTJseDh4UUJLWXFlbXdIQUdVTkdGb1VJYlYxT2U0Q2o1dEsyVEVUbE12STk4dWZ1cldheHl1eDN4N1FaLVgtWC1MdkhjY01XYnBaUUt0MDM5N25xUUZVWXB3azVYWDN0WFpUSzBKTUdYblBzVHRERnV5SFN6VHdHVVYtMWdCeDB6S0ZKMHdzcU1PTTExSEdpQ1NKeXlhcWVNV1NuTndQMjcwRnliQnFJcGQqDQoLQkJIN09Lb1QtaTAqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23593a-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEQQh_YEGCkiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CEUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CEUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "BBH7OKoT-i0",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CEUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "BBH7OKoT-i0",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "BBH7OKoT-i0",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEQQh_YEGCkiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "BBH7OKoT-i0",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "12M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CEQQh_YEGCkiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CEMQmY0FGCkiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-l_qTFXWpDvo",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 791 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/l_qTFXWpDvo/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAzU4NbtunOfgRG2ioYPwal2ojHJQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEAQh_YEGCoiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/l_qTFXWpDvo",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "l_qTFXWpDvo",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDQiQ56LTul6TdMrnJOGUsTkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/l_qTFXWpDvo/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CEIQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IKhAjGt8PogfbDwrYD0FhYThFd0ZVWG5vakItV2RNQ1hocmVVMVdsclppdUlfSnFRT1NwTFZsRVhuVjdjX2otV0RzRXNpTVJjdndycDNwQ1NUSDhOMEpjZFF4UE9jbUNWMC1EZU00LUphSHB3dnVPVkgzZzZPamVMMHZFc3pDa0l3WDNBbWI3RDYxQkFtWVZsWHRzbFdRZl92NjhuWmRrMW1ubUdwQU5hQ1RfWHNiQ0Y1bmotSVotR0g2SVRQWUM1MHBQaWQwSjRGeS1kc1l2MVJyMVE2TXhCbWJZVkpJZHhsMGltbnN6eU1YcS1oOU9PN2xmcUhNMF90cEpSUDgxMUVnbHcxOURmcGdwNnZhQWVhTjZMQmdCWlhyS1Z2X0RmT05xU09TMEJKSnFpZzdfQTZXTTBOaUZmakJFNHFDaXN2MnRyV2xVTHExSEJQTGdJRkRiU0ZsQ01KTlFfOWdmMktaVlM3Y242MzZkaENqVllQM2hscGx0VnpQZHNWVW9RNUdkSEF4MGFmd3N5cno5eDZ1Mk1TU0YzeHE3Y2lld2V3YVVNV3kxczNBcWZ0TjBhVW01cTZBWm1MRUQ4c3ZGdkdRa2dCLVl1djd6RWFJczE3S2JoMGFibXdjbWZ3MS1CaTJRcXlrTVJOWTVKLVJFLVBYZ3dfaDdWM29ISWI4WUVpaVNVN2ljWGJuVjRDenM0NXRMOGJHd245VUhZS3NFYzFnNDVXQVN4bHN4TkdYZW9KUG1uU05uUVRtMXdPc3dpVzNBblMtZWxUVXdaZHc1X21mTTVCa0tQXzBVWFEyM19td2sxcjhlRmZ6RDJSUEM5WUdma1o1aEhHUlVTLWdFT2FXUVUzMzFkay1KdDBUdHFNT1NvUWpUMmFjdnVQMHNVUDlOQlZYeXdzRVdEYXJYT3ZrR3JmX3Z5aXBTTHkxa19BVUVlVUVoYTZ3QlhXSFBtU0lhbmJWeDVlaDlQbDJUSWJqeHBCWXpxTkNhWVNCOU1mck5FUHJWald4T1lNbUJSUmdtQ2UtZF8wUGdqcG9qREwySFV0OWZ1Rk5kdUMxQ2kwTEFnMW1yNWlOY3VDdVF4cVJDenFTZ0NOQ3ZZUHFMUklPNm9tQXNmckkzLWJmaFNWLXRQRldOUWlvdmJxYzZZMzVuLXFNUktsbmpRRXF5WkxDOC1QTngzdXBZSC1DNkNrZjJveWU3LXlxVWtLaXVYbC00dGRsdnBvSzc4c3ViRGEtREFYWVVzZkl4TDBCcXo5U1QxejVwV1ZyOEY3My1UdXlnTHJKaWg5Q2VVaGlNUjJKTzF3cWdCNnU1RGE4amlvNDIzY01BVngyTElncHJ4WmlYZTRpRzhuMzZKSDVyZEZIVjZpcjVPcVREMUZnQzNISnQ0cVZvb1ZoRTVOaVZMaG9BRUF3TFdUWFhzWUMwNUh0ZEk0ZU5SQWdWeUxYekhpU1VkamdZMWtTbTZuNlM3cFQ1d0dIUDBHWGp1QnhqX21hUUQ2TU1zMDg4VUxZYWttLUJOYzdCeXZfUEdrUDVwSGNscUtYMXV0Q2tvbDduM2k2U0VrRm56LTMxT3M4dHhtZXp3TXJHelliRlJsV0Jnc01YOUlrMjFBN1ZNNkFGeG5RUTZmWEZrSk15ZmVJa05FYUN1RWVZY1JwM2pYeFRybklNV002WGl6VC1vS2tkcjRDaEN5OWZDRUh5Z0hiMmpMNDBmbUh2OHBBd1lmZFdqSEN5TFItdUQyd25fTUFsZkpETFVNekFiaE5LMTF2cVpZa3NhOEdjU29BbHFsLTZpeWdpWWpGenJsaFhoTWw4cmZwaTdjbGNDb3h4ejJydU1Oa1l3RF9kN0RLVEtjY1pWYWNkRzVBUnZmMm5HMXFlTzYzcXF2WTd5VHFhX3JiT0dmZUdVSVh1dTQzcDFXakFsa256NlBKYnhjdVEtcE9tY3dBajE4T29Ucmp4R0JwMllhOVZTdGxIUjdnRmIwWTVNMkRDdm4zNGM5Uk1kY2VOZ2N4MHJRYWN5SnNHTWw1SmtYZVNqQXdMS0ViemFZZkRCeTFlU1RsOTlSQ2U4LURjcThwT2VMS2FhMGdqUDJnM3ZlTzhhbmc5MzBOXzJPSEdjVm12TUg5VkdxNl9Ld21UX0NBSUZOZ3FzeW5mRnNJMzBpY1EwTGppd1U2eVRZclhEYXJoTmVUUmE3UzZ6Z1kxcGtfam91dFdDeVJjQXJRcThTclpYTEN5bV8xcm1DU1NfUGdTRURrZUlZV1ZhTTlDVWp5T0Jzay1GbkV5ZmxWalBpVXkzSDdJWExSSlN0M2M4X04zRlRXMlRHNEZ6aXNrZzVZMmZlbjZOZElpdXFvbTFDZUpsYU5mX2JTcDJXemZ0TnZYQWdPME1CbkxhMDM2YjgzamFJUzZIVUd5TGZpbHNNcGJGdmRDTUlEM3o5OEY3dTJxYm1FTGlJV3dlcWZvMXRMM3VnbVlrVmNmWEpjdm1Tejd3R2tvNl9KdHVFZktsM1gwcjFscjNMczhYOUlwUFdNT3drVmVDdTRMemNUZ3h5cFV2RWppR3BDZ2tkbmlidk11b1NZWjU0ZTBYN0EzWlZia01kWVNfVmJuYUgyQzhUMjFZWnl1bjZHSjlQdHZCU3RCXzN2Q3BWVjRYTkF0ZVliRWw4dU1DeFNMMm5RalUyWGVmWkh2YzF2UGxOekxzMUpzd0kqDQoLbF9xVEZYV3BEdm8qAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23593b-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CEAQh_YEGCoiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CEEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CEEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "l_qTFXWpDvo",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CEEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "l_qTFXWpDvo",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "l_qTFXWpDvo",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CEAQh_YEGCoiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "l_qTFXWpDvo",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "791K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CEAQh_YEGCoiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CD8QmY0FGCoiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-DcW5IRnro7Y",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/DcW5IRnro7Y/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCMTonVXov_DlesmeyqwQruOKTzQw",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDwQh_YEGCsiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/DcW5IRnro7Y",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "DcW5IRnro7Y",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymB5UA8dJOg0EfiwlvcG5D9_kAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/DcW5IRnro7Y/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CD4QsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8IKxAjGt8PogfbDwrYD0FhYThFd0dGYWdsblZyQWtISTFXR2lab2R4Tm01N3BpdVJLSWFFVmRyYmpySnl4OHRiME9VaUxCeDBNREQ5N0pXNk9DaVR4cEpWUHY1V3YtblgzS1FCN3ZMTHRzMG9XcmNTUVZvQi1ZSThwaUNoaHVDeFJEaEx1MmRsV2k1TllVNlJnc0tEc2xBWEVvT004ckxMX0VwenZsdXFFdlpGcFNuS2NpSE82dmhKQlR5MFZvT2d3eV9nQ0hQMHJjRzZIWXRiVWhrX0l3WUo0V0NEX28zSzRPelhldnVZVm55RGpTcXVqWTBjY0taTXdjZXFNX0lpS01BSkQ3UXViYTRRMWh1OGxrT3UyOVY5dnItV1RObENJZXktZE9fbTgyNGllWndZLVVQU1pJeUVyOEtGVE1TMVdMSVBLbll5LWZweEVINVhCNGt5bE9ScGF2LTBVa25HZlZMcTVYUk04R3BnbjFTM0VzWEpiS1UtQ0VoUmVhNHBPeEhySXZFXzdjUjRKREY0OXh5QmFScGRHU3QtNGhaS0NGZkNuRUdReGtqd3RRUUk3T2tzbU54Znc3R1ZYWTJFVkRzdHJZcG9aTUtXWFRYa1ZrQ3JkOVA3ODJhQldKelRRbnFtSG1JWllrblRENVg4d192aGRNeDhzUmxnVUYzd0JWYkhpTVlhU1V3WEY5TTFRNUJYZUNJUTVTSWlUNS1fYmQ0Q2pnMllrRVh5WkhJSjVGY2lxOGxJLWI0ZTZlLVNPNC1JQTRNRDh0enUzOHhrS284ek5zM0tmS21CTTc3VU5YN2NaaXF4QWw5UUlBTVBIeGsxa1QzbkF4cV9UOUU5Wnd6aXdZQUdHVXNsaFIwa1ZKR2gxRkJFWDVOREl3QUMyMEpKT1hzRldzZzRfanJCQ3dJUXBkbkh2d1Y5NFlnWlZFWXNINUxQV3UzSGpuLVdOSVVVMFotTzhvMTRaSmw5MzNhNmxGUzdKLVBBOHdPSEdmRktuOXZLQkNVYWZYRjhtNFdXLXIwMXIxV3EzdVNIaDNaTk0zMWgyZ1I1UmFmdGJqaEFvbmg5MU8xV3JsT29aTjEyUDd3RnJaMXlBajNwWVlkNTdtZ1Y3aHJnTjZGZmRxQ0tHM3RPQ05mZzgzWW1iYko4eFZxM00xNG1UU3dCa3I5YTA4UXl0RmRYMHNvUENydHZsXzE2QkwtYjNqWlF5MlF6TFBreWR4cTdEOUdPU0NiWm84LUhvUXJlb0ZtcVZjMDB6c0tZdzlZSE5md1EwREduRGlidHZCRWhrVC0zUGZPOXNDQ0JzMzJTNV9OeEE5TjlWWHdUcjlZRGpzeHdxWFp0aHV2RmlPWHdOTXNPbUVFY2Z2T3EwdHRfZUNac1o3WnU3RlowRXRpRENFOFJ4bUZXeUR4NjcwajE4eXUzLXh1S0hNdk9HVkQxM1FOSmh0cHNVeXZjRmk0YWVDOGE4RG1JeEdXZG1MczhOZE5zTGFVa0Q3VnowZVhZNjFHNWFyaF8zQ1g5UE80OUNrSmR6ZHY4WDFNcUF3X19yblU0MFAwZkNOdkkyX1kybVNpakZRdDI0MEFHelFwbkI1YlJMWHFETHF0ZloxWGZXTHRRN1dTRmRFTFI0WHVWS1FBOGZvdXotSGZlbXQ1TzN3QVFIZVh0cFJBNVlzQ1A2dFZOVUVMTkJsemJjSjliZ1VCTldsZUk0VHh2RHM0RlB2R3B0TjNmdzdPRlhnRWVKdndqc1RFQnhSRFFpX0JKeXh3b0JoVEkyU0xSSHdfSW1kaS1LR0VCZHVFNDJyTkQ3SkpiTlczbURwMVhjWlpOYktmSkJyclJzSVMweXhobWxkTVJ0b0IxWlBIUWVFNjdRRFNpNVdTT3pMbDF4WkU3bktJejN4b3lvd01NRDJkcEdhY0x3VWhOTmU0blBCci1vMGlXeEJDTloydjVJLWFfUFM0VjA4dnZhRlBRN3ZxejlZRzJfQVBkVG0zZlNsZmdycHRKVnFhSVJ3aTNYV0ZodU5PZ3hCd25RMjBPZTRBMEc1ampnaWx4cFl5czdSUkQ3RnRSVXRrek04c2JKbUpkeWlBQ2pCVDdEMWF2R0xRSzRyOHVhenNfeTNOSVN5cGJLNTZVWlFvU0RZc05kNVZ3enAxVzc0WjdOUzNDM21lLTd1SVRscUx4bjhNbE55aC1fNC1oQjZlMFV2ajhuaGZOQnJ6NDV4dlZWSjZTdTZGblRoTXczMXFwazhmSDZKMndFZDFIaGoxRTNTeEpNaWt3clNoTktyTkVwaHhtbUpaeHp6eExybElsWFdZdmgxOWRTNEJsbUlNT1RTNmMwQ1o4clRMYjJibzc4MXkzeExQS2hQZUtKb3B2bTk1clhHYW82czNobmN5a09ybXZfMDFGRmJwVmxjcUhOY3g1a2ZaOE8xMlhaSFVmbU45T1BiWUJYNjRCSzdHUjQ3cy1zbVBTSXY5bTdEaFpqVUpSUGItNE94bTJaZEZwNUtMV2FIUDAteGtOUFMwUjhJR2NLamZWZ2NjUlZTU3Vwdm43ZzI2U216S19LazNuNWFSRjd2VWpwSVZrbFNoRktVNUVQT1RRN0szYk9DOW9mY3ZQVjI5SllhUTlGYWFoeGFROVlZRDd2VUsybFh3RWZzcWZPUl9IUUxVRXdaZUhzTFgwaUJMandMVlZnaGJyZ0cqDQoLRGNXNUlSbnJvN1kqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23593c-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDwQh_YEGCsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CD0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CD0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CD0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "DcW5IRnro7Y",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CD0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "DcW5IRnro7Y",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "DcW5IRnro7Y",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDwQh_YEGCsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "DcW5IRnro7Y",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CDwQh_YEGCsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CDsQmY0FGCsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-ECGuDlZs_Nw",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 997 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/ECGuDlZs_Nw/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDqb2rwbnCfql1V0fwcAEh8qI6YCA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDgQh_YEGCwiEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/ECGuDlZs_Nw",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "ECGuDlZs_Nw",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAhF-P9n6fTpUXGjfV_OLhKkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/ECGuDlZs_Nw/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CDoQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ILBAjGt8PogfbDwrYD0FhYThFd0V6b3ZaWEZRVWJZQmpId0JPeUw1X3V6VWFXam5oTzFodXhtdmc2ZklVcWZmUm14MzJoTS0wUGxscjBuRk1uMmNEbkVYR0k2NWdfcHRyMU1QY1g4MG10N2otWVdWTDBOa3VyQzNxS3U2VEdBZG9SMWgxUEFFbWY4ZjhyMGFaUjF2Y1VtNGNvZ0hxTzd5WXV3Wk1LZ1pMZzM2RnJ1Zk9BSDYwVlVhc0M4emlmTEl4ZURzSmdMQ1JOUmNOX0tKXzg3M05QTG9SbkNQWVQ4WTF5QmdrNVdRLWR0bW1tVFVZMjk2Y05UdzJSc19XQUxRZ0tLODJjODF0VHhPVnVKWUVLVVpLcXRvOHBndWpVd1dJbjRLTW5udzhNUjN4WEVYYWNEYmFrdEcyU2JzVUhKUnVFZGxfbVVmQU05SnRSLXpHeHkzQml6WjViY25WSHhVUEM2WE9OYTI2TjhNUm9NRHlKemkxTjRZTjc4bUI2VGVDLTd1VUhIc2p4NzdvdUViQndqQzdkZW5oVG9HbFliNjBXQVUxYk1vUUJyZHphLVdPWmV5dm1YWFJkdWZGcGIyZkpLaDNpdlBrTHJ6SzY0dFJIak1CT3lkS1VhYmNObjVFTXRhUlJaX0NUY29adzF0eXdzdC1GaDhNaWRBUG5xMlNoWExkbWMzbUpOVmVQbkUxZjlEbDdSeGtBZDZJaGN6Um5QMTZJcnB4aUpQTElPZFNWeUZfSXQxd3FERnRwRkxIdldnZEllMWlSMDFPa0d6RzZ5SnNxUW1vdXl6clZFN2FlenpXMmpFMi03TXNDdmt1d2F5eGtCY1pwaHJjdDd2ODlmbHhRVjZnRW5oYXo4cHQ4WUU2bTdvMFRWczI4TUxtbzY5NXZMZ1pTdERuZGV1bkQ1TzdZOWNRdDJFSlRsR1Z3WXpvUEhoekRzYXU3eGQwdjVPNk1BR0dCUWhsdzRBY1BpaWFjSWdYLUdkTzYxMmZKdnk3em4za25lcFVMVkVSek54NGF0UG9jWkFsR1NVamlZRER2YXAzOWNWR1FSRGZEbHFyZlJ6SVJ6ZUhyWWh0bDFVU0tROXhQYzQ2cDBmeTV2YUhfa0Nuckg5bks2aWEydkRSNks1enlna1lreVhMLVJDcUVBeG1OUVZxeThHdHJTLVlWNFhUWmlPSk5tOHB5eDdreHBHZjBXQVBRRkstUzRNMWx4am93T1U3S0ZpdldKNVBDM0x3QngtRFFCSXlQVU9iZGRGaGRmc2VkaEc1MFRYWnBubHAySlFadWV6bVpFV21hVW1PS0FBUDZyM1lGNXUzRlVsdnRTU2pHZ1BEVWdiTm9EakptLVR1TVEtbWloOGt0a0RyMVVWVDhLUFJ4MVhaZkY4U1hhcGdFbm1hMlpQeEFaOFBSTXpMZ0g5bko1Y3BMZzZRZUJxWHdCaTZhdk1OUGh1RUh5dTJObDBZN1hSLXZHUWRrNnc2RTZ3b0sySDFGb3NzZUtQOVl2c3ZpcEo2MjNkUXhqTHZ1bGZFYnlBdTZqRjdtc053YkxYdExpOXZ0U1JZNnpGa1N0ZHBUbHBLeS1JTHd3bXhGNkxRX0ROMzk2YVZRTTdOLTJ3NnFmZnZycXlENVhqaHZiN1FFOU5pRV9QTDgtYmlCbWdjcGppREpiQnk0LU5aYXZVRXQ5MGJmUDM4bDB5S04xOW41eUNTc2QxQXo0TUIxSXZpMWxkQ1djQWxoZ2xXQmNyRWM1WTRsQTFJWHpjWHlfLXRTMC02NHh0TUJKMk56dVVxbGpha1ZjNlBuZ1BFVkRQMmN3Y25GajFHdFBsbHFaWjRYUGF5SkZrRGVFbmt2ei1hNi1FQXN4aHU2ODhPYURuZTZJVXcxX0ZzcGhnTmdFQkVWaEY5Vm02cDViSzVielhJMzZRYlNLeGJ4MW1Xa0NsSTJUenBNaXJxWDVISTNZX1JhV1VGN3c0bVozeXExWjlxVE05N3FncGZaVWREUTZEdm1CcnlQU2JMSjhwS0dWM0xvMkNsMFhNSGc5ei1XOVpYUXdXQWFrRlkybDc5T2F1S0s0STFlYXZYbGk4ZVl6Q25JN1RoOWYwOUVhOHlCLXpKQmhfeVg0NEhZQUJtZTJoYmtKWlh3Zkhvb3BOcktUTmlRTExLSWpUQXJGZWxYQUZ4Ti1SeXo5TzE3eWpJTldzaGl3UlNSazZ6NGZTNHlZeFBsR0hFbHo1WV9nTkRvM0RZOEZneDFTRGFvSkFfWGZBMHNpejNzQmsteThFVU1GV3hlaEc4d2VacnZkMFBjYUhKR2ZIaHhxQ3FLR0NqNXd0dXM1OVlFbWQ5RG13dXFFMVhqSDhmZVI0MFpsQnp4SmFEUGk0cFRFaGl1cGJaajlLM01ZYnlCZS1qaXpUVGdpQkpPRi16VUVORlk4cjJpYVMzUnlnV0pVSzVzYlNZRi1HdHVxdUI5SkdfVEF0M2JnYjhXcm8yOExRYzNpd1RKc3pmQ0ZHMlNJU08wMzlLN2otZGVDR3FWN1hkV3ZzNzFwUzU5R01ndFR6MnVyV2VaeFozTGpvaHNYaHA1OURjUTJCekRXTGUyV0x1NjBKVXNHbFhodHBNTXBKYUxzUmdUWkR4cnRaYk5FS2NXMUNHMVRWNi1VYjhLUVhQSGtnZG5ETjJxV2NER3h4UW9ibU53NFNZanZtLUUqDQoLRUNHdURsWnNfTncqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23593d-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDgQh_YEGCwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CDkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CDkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "ECGuDlZs_Nw",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CDkQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "ECGuDlZs_Nw",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "ECGuDlZs_Nw",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDgQh_YEGCwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "ECGuDlZs_Nw",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "997K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CDgQh_YEGCwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CDcQmY0FGCwiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-pQiBK3uSajA",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 775 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/pQiBK3uSajA/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAPnYVDW2rlebpnGDxmHUO0EzG9pA",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDQQh_YEGC0iEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/pQiBK3uSajA",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "pQiBK3uSajA",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymDBoYyUBBiOO7LD-m2JwfZNkAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/pQiBK3uSajA/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CDYQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ILRAjGt8PogfbDwrYD0FhYThFd0dWdnp1YTM5NFQ0TTRDMEg0VmhOR1p1N1BESk14ZUdaNGw2bFk5cWp5V1ZFeUtjSFprN3BfQWFxUkZ0eVp1b3B0M2dSRkpLWVNCVGFtMU9NVk92RkdmSEUxX0Y4LTh5TVhTT2RNQ01TbmxuTmNGYkpwU1FwQ25uRnhQMXYxZEZwTUs5WkpYWFdhN3EyUnRPZ1RDMUNxUmtTSGRLMVZPWlQzYUp2WTAzVVdmZ29rSXRYNUZ6a3RlSENvYlYxSzYwbG1UN1N2cjIxbmF0SmZGMFp1XzNoTUNfc2pXS2hkay1Zb0llR3BubkxpWHVMMm10QXgyVDBmV2RHWmRkNjF3UVdyaDJCWTNGeTh1RUVSRTRFNzBxTGxlVVQ5XzFkUGNveXVRX1VRMFpWTmVxbVZUQWRfS0NrcXVJbmR0UEdJMmJaWW9XSWI3Y1JsME1Kd2pWYUNLTU5RdU55ejBKcGhyalktV1RDSk5zMU82ZU80bHNlTEpNcXNic1U2X003dXZubGZxcGxxM21ybzY5cmQ0Uk12MVFhRDdSLWVKMUlxdmdBUER6ZE4tUWdPZnlSbUtqREwzSG1CTUwybGRlc04xSVV0eVRSOVJPQVpVSjdLSFZkcUo2Y2EzRTVscmlhaFktOFZiXy1OSG40X0Q2MGFDNmwzS25MelpFOU5IczBZWURBVm9FcmVIWm80NjdiU2U1RnEyUVVMTlhoenZCd3RFZVVaYTJkNTVKcTVKRThuTXdFcjNUa1pYbTRYZm9YMTFveDRocmpkRDk2alhFcS0tOXplcE40YkthLWdiUHg0VjVBYktGdHpfLWpXZVZxQmcwVUc3T3EzZktiSmx4d1hmNGNBOHlQcTZKai1ocmtYZXhNTTFKcGhqRHpORkVFSDlYNGZrTFg1d0diNWcyWDRxY1VWN09pNWwwc0tqVUw0LVRvNE1SRk54QnQ4cDhRQlF6UnNabHZPbzFZUnFWbzY2cjZCVzB6YmxlVDUxcTM0VFlGQzRZZnJlZWRlX1haV2RCeUhFNExYQUNfdHJxa3Q5UGdvOUcwdElsQ2huSkNXMHNNNW5YZ1dnQ3RVMHY0clFncXBDRFpMM2xqTjgwSldOaDdjQTN5YU9GOGNoWVFOQVFreE1lUlpOcHlQcjREWXFfR1Q5TUo3QWNGY0piZjV3QkVBRlNjTFZaSUdGRHV6NFU5QmkxYldwWTF3d21zLWlrQm9oU29JLVYxdGhlWmNjWkMwMUxFWnp0S2wyaTI3d0d4VEVFYkd3ck9vQk5oLVZlZnZ5ZnI2OVp3bDVKampNUTB4enl2NXc1X1Fhb1A5RUtWQk5BTTVzX2s2S3RhWmFJNTRISDlxQXNxWUxiZGJJNXVHeC12V0hMcDNUQ2N0ZElneXBCMXFkSUREMTVGMFdfakF3M0NzWXhpdmhpVnRTZjh1bnZFaTljOC1wcFhoek9FdDA2dk5fZ0NaRGd0dmFfbE9vSmt3ZF9KMmk0OHV4QTVTbmt2SWoxeE14RXY5NzNDQ3UyUzVyRVlDVTZnM0hLaW96R2N4bDZ3MUdWYnZNYi1pVEFHRktDOHo2WHd2anNua0dsQ3gwUHlwWmVnZzlTdjV6U1ZPaXhXbFctQjZBYVJtb1ZMV2VIZXJKQkktWGRsVTN5YjFrc291M1V5QkhVbUZ6VHBVWGhxOWJLNlQteEtRWV9QMl80MDN2YnpCXzFRNnh6VmtBeUJmMjRoTEY1aWVPOVNQckpjbElCYjVWMm13aEkzR2wxNVJTbWlXYkVyNHlSRGd1aU9GSGd3V2N0bXJDR2tfaDZ3Q2FsNWQxbUpxWnM1dEdWaU1zS0pha0tMUE9SVGwzYVQtN3NnaktPQmpLb2hzUVVvUVdEemxfeUU3OVFCMUtJaHdaZzBYV3ExTWtCaUF6VThzckhGRzltcXdSNjFtVkJXdno0amFlVlo1ZHpiZld0cFNOZlg4Nnh4WVc0VWNpR3VFNFhBTWQxLXVRcnpwa2YzbkJFQ2laS19pSkhaSUxpQUxVU0t0a2gwXzduNHNLdnRXbm5jbUo5YnpxU2VmWXQ4QzlMaEJHakxDSUxfYzRod3ExZmJlTFZCOVd5VERPSVc3RmdEVF92WDQtamtFWG1UQUpVbEh1Z0tRX0JZbG9xRlFheV9ramJOM2doY29QRmxBcWZtQlpYdVpmN25GbllHa195bURMUFQxMzRFR0xGR2ZTeEtzSHFkMVhWVWh5cWE0VzNjWlpHRC1oN0pMRUxjRDBycU05Z05vcC1teXNjX011NUhEV3F0SW12UmJUOGpfWWxUOGtkNVNJbU9jXzdwNEdJZWdhWUI4bngxbHBrd0Y1MGY2elc2V1pmdVliU3pUVG9VeXhkd1B0UVlUbU5KZUtic05rWUFyWHZCQ2VDeTFZQTMzWUNaeDA3cVBuNGczdEVLR0FuYXBUQm5xUGFDNUlHeVIxemNLVHhQTG02WlZYVmI3YjlKRGFqS21wSHFOdktaS1dLSlEwZzZyT19UNzVBWWFvYlpYaFdjWEtwLU5mT05manRGQmJvNlZPRS1KY1dydVNhcDJhWDF3VHYyaDdKbk10aU1ZWGRBLXZBNVJTZmVyT2I1SU0wNDlZT2NIaXRzWjdXNFFocElXREpvaFpBVFVWSExkRjdYMFZqNXZfLVZaTFlRSzQqDQoLcFFpQkszdVNhakEqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23593e-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDQQh_YEGC0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CDUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CDUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "pQiBK3uSajA",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CDUQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "pQiBK3uSajA",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "pQiBK3uSajA",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDQQh_YEGC0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "pQiBK3uSajA",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "775K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CDQQh_YEGC0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CDMQmY0FGC0iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-572gXde2D_4",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 692 thousand views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/572gXde2D_4/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBN0wngcDzhCj8W7fLDWWvjw_RoVQ",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDAQh_YEGC4iEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/572gXde2D_4",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "572gXde2D_4",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymAJRw3nRt5KqBgflbBltcGikAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/572gXde2D_4/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CDIQsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ILhAjGt8PogfbDwrYD0FhYThFd0ZhZG5zNWdsQkVnVVVhYU1zNXlwcUlJdUJrRVJqOG5manB1M1BMTTJWYmJ1WVVidmNGYVFvZFJxbTJkRG01aUlZSGJrdy1kb1dxM1FFa0dpU25rUnJsRWVrd3RKM2o2cEwzUFRJOGw4YjVGalpPX3dDTnVkZm9GVER6WWtFcDNJaGZndGFtNG1tcnMxQzFibnBrZlpFbFluVjVWdWNIZE92Vm1oNWc2YTdyVVlEQmJVRDVvMExRbTQwa1VrX1JWMzNRa2RhRHlzTWhmWVZuYnFURGNWcTJjSDRiREV4WWxqMWRDLXNUb2RfM29vUVFudjZnQWpTM1RIcFo4dk01UmQzbDJvZHRNeDEwWEloOFN4X0tqSGV4anBCWW91aWdYdEo4X0NEWTZZMUlyQnd3Znd0NjMtZmxXSHlMWHlYVFNiNEJGaGVkMXkzSmtyVk0xNkttb09XYlBxZWV1V0ZsWnBDOTdVcnpEbkd4U25LcE11c01mQXI3MEoyYzllQmV1a1duQWFkVVFaaElvR21vWm8wRG1YbGh0Q0R1VkdGd1c3d0taeElUa25pTmF3SHlRNVcxbTZ6ODhQR1NYMjNMclVlQmFiQmhSbTBDdEdvSWNBa24zN0VXRVh4TW83WUNvdVFKRldpUWdudzBrX1lMZzZBZWRwXzdKQmVNcm1HanhBT3FLM2pqdFhzUF8xXzY0OWoySlN2RnBQRmNobUtlcWJ2clRvMEdtRmlTc29wbjRQall0VXJWdzRJa2hzWEZwVF9UWWpHemFhcXFhTDFQRmZ5bkthVGktYlZyblc5ZjlvRU5kb1hIdk90cXdLUFotRHBneUNsZWprc3A1c2tBdElObWM3S3ZPNTNPYXFUZmhWdzdCWFo5U1JqSWVtS3FnVnNXUElOaDhrSjk5akZFYzRIT0R0TlN0VDlSV25QQ3JZNEQ0OUtELWZySlFjZldFVjJ2MzdvbFRZNWU0ck50UEJpbzlYQVVEWVBzWjFxRTFjUnpDRkxSU2N1T0J6eUloY1I3V2hwQmVqZV9OUmpPSDBlTGRkM002bVVyMm5FVk1VUHNYVU91OTB5UUI1cVpfeDFFdVY0RU16Mm52NDhLaUxTSFFrOF84NExPMjRQZV8yQURRWTZmVVd0WC1jMDNWNEM2SHFYSGliRUVZeVk4eGFqNU5JS0FyaXNoRUVuUXo4Z2lHVERkdUhPbXNvMF9KeUozaURqSFhhT1JveFF6SDQ4R3hBTmhyWnBJWWhGMWJxNVlrNHRtSlpNWTc1YlJubjVSZ1ZaWjV6RG44SjF1aXV1ZEZudUcxRXc3QXlJLURuanpUYXZSczRaU0ZWaHpYSVE4MHRVUm1KODJoVlJLcmJSeFJTR002SU5wZDFRNWRpNC1HZ0FRRmtjanlsbEU2QkltbndVT3JvaVJveXFGLVVtV29XTThyVXJMeWptVlNDTGx3RlVicEYtX2FyNjUydVlQcEZFb1RETENGSFBEWTIwRGdTRE9KZ3hlb3dzdDBROW5vWHB5QmZKNnZZXzdCbW1Td3dMRjUzYVF4djVOWHJuUHluc1VlUVJ2RnNJdVVfX1JmbG16Um5wY1Bxd1hJNXlnb0U1NEw1eXlKSnFmdkJuU3VZTU83UnM1cW9TRzRCSVBySFZTWE9naGZjQWFyS3VjWGRIXzFyVlVNSDJaMlZTaHYwT1FZejNlVnVjem1rSW1vb1Vid1pFS0RHN3k0eFRjdjVJN1JQS08xbDFsaTFkbVp0S1JhdFZUR3p3eGotanhMVGY4aTFjZlZXSEZ1N01yNzJ2Q3hjcGZRVjZJSGxnQlZTbXd1SFhqcmZsU2ttNmNkY29jOVd3UzlGYnNvem5TYTNlVmRJNmIwaVdBOGJhM3RDSzVSMkdsWU9nek00U0lveldaM0E5OTFIYXUtZHZMM1BGX2RxSXFOYWxCMFQ2cmh4VnRVZXNZa0ltYkhPd1NTb2VVUGtqT1pac0tjdEVOUEVQUXpDNmZoODZ6bkxVd2pwWnhQMFhlUmVHN1Jad1o0RHM5Tjl4V1hVOEk2Y1Q1TVFyOXN2QTM5ejgtZGIzdXdEN0ZvTGFUVXdXQ3VaaW1rdnJoN1NWdVRsTWFtMzYxZkk5NmU3Zy1jOGtEVDd1RjI4b3QyR3d4bThuaUg5VGxHZnFadmE1Y011b0hURU9DY3NGSmc0MGVOd2R5akR1WWUyRVB4YlV5WXJMRDJ2dmdPaHlFTk1SQUZTbzljOE9nbWQ1UmtjOW04TWFYVTVXeFh0U0k4aEZXRzNpc2R0azlsYUhaZ1huNnlYSnNCaWJHTXhmaUR2MzFfZzNGTUdrREVKb0UyYkc2V21PUUlRUGRMQUc4aXVuaUxxUjI1MHFqX2lwVzFGWXVOelFPMnlxVTFkZHRibGE3UzM0bG1kQ09QaF95cjN1MVR1SFRaTG9tMUpoVmptdWUtRkxjbWR1Qk4tUzRMYkQxaEozUkF3dlhITmI3eEJSTFFNVHM2dUpyalZpSG1IRUNUMHpKUjBOS2pNUkNrOTNVN0QxYzkxM0VDRkEyMzRheTB0Q0hMd0RHdi1iN283VjNoRVdHZGgyRkZxbmU3RlVjTGk2OUNqbGNQaEY1MHVyNzkwRTBlY1JLTmhfSjd2NDFkTFV4MXhpclEyMk12QUZYeXlOSF83akMqDQoLNTcyZ1hkZTJEXzQqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c23593f-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CDAQh_YEGC4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CDEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CDEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "572gXde2D_4",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CDEQ_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "572gXde2D_4",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "572gXde2D_4",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CDAQh_YEGC4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "572gXde2D_4",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "692K views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CDAQh_YEGC4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CC8QmY0FGC4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    richItemRenderer: {
                      content: {
                        shortsLockupViewModel: {
                          entityId: "shorts-shelf-item-_9VLLPg9h10",
                          accessibilityText:
                            "junya1gou funny video 😂😂😂, 2.1 million views – play Short",
                          thumbnail: {
                            sources: [
                              {
                                url: "https://i.ytimg.com/vi/_9VLLPg9h10/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLC5Nxg-PmliPCFyXdBobHPMThPD5w",
                                width: 405,
                                height: 720,
                              },
                            ],
                          },
                          onTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CCwQh_YEGC8iEwjoqtvc1c6NAxWKEnMJHeA1LfVaGFVDanBfM1BFYU9hdV9uVF8zdm5xS0l2Z5oBBQgAEPI4",
                              commandMetadata: {
                                webCommandMetadata: {
                                  url: "/shorts/_9VLLPg9h10",
                                  webPageType: "WEB_PAGE_TYPE_SHORTS",
                                  rootVe: 37414,
                                },
                              },
                              reelWatchEndpoint: {
                                videoId: "_9VLLPg9h10",
                                playerParams:
                                  "8AEByAMkuAQ0ogYVAXaSymCq8Q1d4Sx8JqxyMsbfZpYikAcC",
                                thumbnail: {
                                  thumbnails: [
                                    {
                                      url: "https://i.ytimg.com/vi/_9VLLPg9h10/frame0.jpg",
                                      width: 720,
                                      height: 1280,
                                    },
                                  ],
                                  isOriginalAspectRatio: true,
                                },
                                overlay: {
                                  reelPlayerOverlayRenderer: {
                                    style: "REEL_PLAYER_OVERLAY_STYLE_SHORTS",
                                    trackingParams:
                                      "CC4QsLUEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    reelPlayerNavigationModel:
                                      "REEL_PLAYER_NAVIGATION_MODEL_UNSPECIFIED",
                                  },
                                },
                                params: "CDMwAg%3D%3D",
                                sequenceProvider:
                                  "REEL_WATCH_SEQUENCE_PROVIDER_RPC",
                                sequenceParams:
                                  "GvoPIAFC9Q8ILxAjGt8PogfbDwrYD0FhYThFd0dWLXdidk94UWFTTzJwSlUxR3NZWWFoMkRqNjBTRmF6Tnhld0p1X1ZfOUg1bXlvN3RONFNnNTY5Y1h0VFgwQkZ6RjZLZU1ZTG1WZHhBUFlzTENDdUZiaU5JN2NLUUFKdHJkeGZZWUVYRWtxamdHaFdOa3ppclhoc0JfZDgydFBRdkEzTS02bVFIdmhPMnhMMlV5MktiZFB4REIxQm9GZ0dWeVJEbFJOckhua0h6X2xsVmh1S3JHQ1JBaFhmcmJNMHZzTEQwTFp2T2Y1enZRb2VZb0hOY2hUazNITFp3c3RFSHo1V3M1VTh6OFlvRzVNUXZZZ3ZEZnZGeUUyY0NpSjJZVWkyZjdLc0w4elBxeFB1eTIwRkNUYnhPdmFyWWRsZHJ2bnczNkZfcERmRXZ4MmpiRVJFQ0V5ZTdNOHBGRnlkOTdxOURta2FjWThSVHFoSHBKNnUzQlRJS0ZrQmE4amwyOF96eExKMFM5My1yeWtaaGRPWGN2U29zaHlzVVdwT2xieXg4MkZaR19EMW9zYm05aExBUnhjU2JFd2lDT2dDN05VUTlzdE5LZHVYLTFOYkZ1VmtYOW5mR2twZElFdmx6SzI4Q2JjRHRFSndXZFdsdDVZUGc3SjVQbWhtQ3pfYTVrWlpQSlJ6R01NQm5pT3NlajNJTmwwZU1nWjE5c0NfOTRjU0M0bDRtXzJlSDlfYWRESWY3aHFCNkcyWkFjREdMOEE1M28wZXBKQ1JuNHZfSEZleWJSNHJRUkRYejh2VTJkdEpFaHh0cXBvLUxXMVdjdzNXRDF2b0JlSzJ5YlF1R0piQ2xLaWV0blVIS0w3ZENqZHM5RzRsZ2k3LWJFTjRrMEJCVnBIdkpMM2xiODdTUS1rTlQ5aVZUbmhRQkFuMjNXdXJZR1c4QTFLS1RxRzZiMXotOFphTHVIWW44bjEwYmRydDBvMC14YlVpbXRHOVNnME96N2lHYXY4bWkyTkg4NEFONTBlS054c0RCa0tLeXpiOWNtcm5YM2tCQmtvVjVnNC15SE0wQnZvLTB0djdZc05oYzZEbzh0ZVpRLXlXZUluSlVUeXhFWDJBVnpsbEEwWWxHQVZQNTlvLUJ3ME1QMzdyOFFYOW85d3d2bE5wdlp1YW8xU283aTFYaW1UWS1SSnUtZ1QtOTBXY1FwbHFtQkhyQTlTLXptUkhNdG5weWt3ck4wMkZMUkJQS3hITGI4SXZoXzl6RVB0MnZaQkRBMnQ5dFIyLWZWd2xWaGNUMGFLMmVqakFSZ1h2akQtU2Y0S29hVllhU1ZMdE9TNXRsRDVFWVNqZGotbXBsVWZnbmNzRnFyWWQyYlF6UkpsMDh2ZkFMcmxISVhVQmVUZHFNNmR6ZlU2ZUVWVk9HMTZfLUNuMThMaEVTanNOaVEyVEk4Qi16Q2U1RmtGUF9nQUw5Vzk2cTN2c1o4MHhWb3ZYRlJDMi16eVJ5cWl0bVNoa3RqTllGLURMMVREaUI0NmpZcGxVS1cyTy05dE5sTTJhNVhaaDdQczFkRHRfcV9CNHpBQXlaZ0VCcDVGalFNR0licXZWRUtxVnFudzVXTHdGeDhLUlk2YnZUQkVMQTdYbVVMMUhTRFVKLVNZLXRRSXB0bm5wbVk1dkNGSVphMWxRTnM0YU51SGpKUjBGa0R5bDlSVVhRVFVTOWZWRWFSV1dhT0tWTWxpWnlsc1RkTlpCZ1E1NlNfN2tjMVZDS3JkdHBmOVhPelhMeWFSNHBDdkRPYUpnNXBrc2FUOWphT081TzVydVZWd0Q1Z0twTzVISTdsRk1ieE9mU0p3TzVXUFFhenNZWTQ2eVhmWWYtUDZMSFV3ekstTlNoVUhhczZFQXd6eFFkNzRVRTBYTG5RMlpfQUdsbEhDS3N2MXNtS0kyTDZ0cFNPbWh4aWxISklWLXZvaXlncFZmeGU3bDNwYUNmVThhQzc5QjZnZVYzX0NKalprZEx4bEMwdGdGNWpmM213ZW9aMHlEU0lXdGQ0ZnRIQ2g0WlJXdzdiYTZLclI5Zm1pTHBnZjM1Z3Z2T3ptc2RkSmN3Q3FPS1BpcWt1QTBzd01aRUEydC1NSmxseGdBYktPemwzV0dpMjBFRFo3WGZ6cHg5bG5qR2tfU1ZQNTVqeVVIcEE2T2ZVbW9JanFTNXpWbmRYVHo0YXFoa2VHSHIwbGVldEVvQ0haZTFwcXpsajhiX2liSE1ILV82a0d0ZEctVzFlaVM2R2l5aXB2cWFHMUo4clhQQkFrbjF5VHJDNEpBb3IwU2V5b2QwS21BenFobHg3Uk5oNVYtV1pQWEM1cE9KUWdBNmF0RFczNmhreUhEaEpJdEJZeGdyUm1iV0g2d2w2Z2NHSUQ5QnNMT0cwUUl6VlZ1eDFPZVJ6aVBaQ0xmSHk2d0ZzZm51SjlrMkRzX19panpTQUhqemVUQzhuM3M2dDdxQlZkdE1CbHQ4akhZcTdCVTdGdEp6Mzgzb3g5SHlpT0p0c0RDYWd0c0tIRUdXOE5zWmFkWWJ5dFdpcjdXaGNTMmNHN3RyMGtxUGpXSzJBZ1dFdnFIbTViVGlobFYtZ2tXWFVyUzNweWhPajNXWmFaenl6dmxHWG9NTmhWSm9kN2hCMnlrVWh3NHZ1bWhHdFI5WXhJN2o3TnY4cS1hdDZBN3NYeDhCWFVmT2wqDQoLXzlWTExQZzloMTAqAhgzkAEN",
                                loggingContext: {
                                  vssLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                  qoeLoggingContext: {
                                    serializedContextData: "CgIIDA%3D%3D",
                                  },
                                },
                                ustreamerConfig: "CAw=",
                                identifier:
                                  "6c235940-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          menuOnTap: {
                            innertubeCommand: {
                              clickTrackingParams:
                                "CCwQh_YEGC8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                              showSheetCommand: {
                                panelLoadingStrategy: {
                                  inlineContent: {
                                    sheetViewModel: {
                                      content: {
                                        listViewModel: {
                                          listItems: [
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Add to queue",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName:
                                                          "ADD_TO_QUEUE_TAIL",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  loggingContext: {
                                                    loggingDirectives: {
                                                      trackingParams:
                                                        "CC0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                    },
                                                  },
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CC0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            sendPost: true,
                                                          },
                                                        },
                                                        signalServiceEndpoint: {
                                                          signal:
                                                            "CLIENT_SIGNAL",
                                                          actions: [
                                                            {
                                                              clickTrackingParams:
                                                                "CC0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                              addToPlaylistCommand:
                                                                {
                                                                  openMiniplayer: true,
                                                                  videoId:
                                                                    "_9VLLPg9h10",
                                                                  listType:
                                                                    "PLAYLIST_EDIT_LIST_TYPE_QUEUE",
                                                                  onCreateListCommand:
                                                                    {
                                                                      clickTrackingParams:
                                                                        "CC0Q_pgEGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                                      commandMetadata:
                                                                        {
                                                                          webCommandMetadata:
                                                                            {
                                                                              sendPost: true,
                                                                              apiUrl:
                                                                                "/youtubei/v1/playlist/create",
                                                                            },
                                                                        },
                                                                      createPlaylistServiceEndpoint:
                                                                        {
                                                                          videoIds:
                                                                            [
                                                                              "_9VLLPg9h10",
                                                                            ],
                                                                          params:
                                                                            "CAQ%3D",
                                                                        },
                                                                    },
                                                                  videoIds: [
                                                                    "_9VLLPg9h10",
                                                                  ],
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            {
                                              listItemViewModel: {
                                                title: {
                                                  content: "Send feedback",
                                                },
                                                leadingImage: {
                                                  sources: [
                                                    {
                                                      clientResource: {
                                                        imageName: "FEEDBACK",
                                                      },
                                                    },
                                                  ],
                                                },
                                                rendererContext: {
                                                  commandContext: {
                                                    onTap: {
                                                      innertubeCommand: {
                                                        clickTrackingParams:
                                                          "CCwQh_YEGC8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                                        commandMetadata: {
                                                          webCommandMetadata: {
                                                            ignoreNavigation: true,
                                                          },
                                                        },
                                                        userFeedbackEndpoint: {
                                                          additionalDatas: [
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "video_id",
                                                                  value:
                                                                    "_9VLLPg9h10",
                                                                },
                                                            },
                                                            {
                                                              userFeedbackEndpointProductSpecificValueData:
                                                                {
                                                                  key: "lockup",
                                                                  value:
                                                                    "shelf",
                                                                },
                                                            },
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          indexInCollection: 0,
                          menuOnTapA11yLabel: "More actions",
                          overlayMetadata: {
                            primaryText: {
                              content: "junya1gou funny video 😂😂😂",
                            },
                            secondaryText: {
                              content: "2.1M views",
                            },
                          },
                          loggingDirectives: {
                            trackingParams:
                              "CCwQh_YEGC8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                            visibility: {
                              types: "12",
                            },
                          },
                        },
                      },
                      trackingParams:
                        "CCsQmY0FGC8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    },
                  },
                  {
                    continuationItemRenderer: {
                      trigger: "CONTINUATION_TRIGGER_ON_ITEM_SHOWN",
                      continuationEndpoint: {
                        clickTrackingParams:
                          "CCQQ8eIEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                        commandMetadata: {
                          webCommandMetadata: {
                            sendPost: true,
                            apiUrl: "/youtubei/v1/browse",
                          },
                        },
                        continuationCommand: {
                          token:
                            "4qmFsgLDDBIYVUNqcF8zUEVhT2F1X25UXzN2bnFLSXZnGqYMOGdhV0NScVRDVktRQ1FxTENRcmlDRUZoWVRoRmQwZ3pSWEJHU25vMVMwNTZiRW8yZDJSa1UxbENMVkJEY0ZkSFNXTkhYMjlsWTBoTE9VMVBNbXh5WWkwMldVZDFhSFpuT1cxTFVrcGlabFZDTldGUmJYZFpTRXBxYVVGRExVbzFNMGROY1RSV2VuWnJWV2wxWkRoeU9XbG5VMUpqUkdKUWRFMDNOMko1YUZGRmVsRlVUMk5rVDNoVmExRk9VREpQVDFGUlJHUlVTVE5NVEc0eGFqQTJOMXBFUjBFeFdYcEthV3RJVERWclJEZG1RMUJ3WHpWQlozQkxjM1EzUWw5QmJra3pSWGR4UmxkT1JIYzVXbHBEWTJnMVUzZHFPR2hPZVdoa1dreE1VbmRVV1hob1NXeGlVbmRWTlZwS2JGRk5MWFkwU20xVk1ERmtNVk00U2pOd2MwSjNUVFoxU0VaUmRrMUxZelpOY3pRNVR6VnlNMWRMTjNCbmMzWlBjM0IzVnkxQ1REY3pRMnB4U1dOQk4zSjVjWE0zUkZveWMweE1TbGxrWmxkNWFFaFJXRTlKZUdNd2NtOTJjVVpIVlU1V1J6TTBWakpHVlRBdE9WcHZVbTlhTldNeVdGUklhVEZGTVd0QmIwRnBPRkptWjJWMWMyeGZiekJYTmpGQmNXbHRkR1pVYVZKZk1EVXRlbU4wUzFoc1oyNWhVRlZNYnpFMmFHZDNPVUZuV0RsM2EzcHVNbVkxVVhKTk1IWkpSUzFpWTFaMGN6VTFUakJaUzNCelRpMDBhbTE0ZERGSE9FUldPVlV4T1ROUVUzVXhXa1pOUW5aT0xWaFVWbGt0VEMwNVRYWkNjME5RVDAxWVVIcFpSR3hEUTBsTGVFdEdOSGw2U2s5ZlZubHFXRzlNUWtWRWVUWldaMHN4VTIwemMycEdSRU5FU21FdGVUaFRTMFZpWDBWT1pHRmllWGxaWW5ZdGNYSm5lakZHV21NMVZEVlJXRlpOYjAxbllqSTBOMWhmUmxwbVprZHJkeTEzWVVob1Fra3RPVGxyUlcxTGFsOXlaV0ZZTFRKMU9FTjVUblJEUkdRelJHRk9PSGw1Y0d4cmFuRk9NMEp4VEdaRGVHOXpXazlGTVY5QlJtcHFWSFp5ZWtKdllWSldUVmN4TTJ4TGVVdFpVMU5RWlhaYVJuTTFORzlxU0hCT1ZsOTRXVzkzYzNsZlFtY3diM0l6U0MxV2JTMXJjR2RuWjJRd2J6azBUSGxFV1VOaVVUZzNTRE5hZG5jM2RrVjFWMlpDUjI5VloyMTBiRmhNTjJkNlFrdHZaSEIwTkRoaExUQlJWMVJUVW5ORU56RlFYek5PZWs1dmR6SkVVVGhrZURRemJWRjBUblEyVTB4TlVYRjZNR1pWWW1wUVkxUnBhRmRIYUZGVWFHb3RkVTFKY1ZoRWEzaHNTMmxRU25WeGEwczJSRTB3WXkxdk56UnpiMWRyVDBReGIxZ3ROM2x5UzNWUlJGRnlZa1pIYmtkSFgwOXljbk5uWmpKQmVGQTFUM0p0WjB0cGFHdGhWVVJGVlUxcFNsZHVMVVYxWTNFMk1qUXRSRzFIZUVsWldrOXhUV2RuYjFOWE5UZEZTbWxxY1hwa2VFWlpWSEl4VVRsdmJWWTFkbFJtYjJwa2RWTnlaamRUWTBGT04wUlJXVlJHY0ZsaFRHTnlhMUpzYmpKRmVXVTJkalZyTVdOTlNrTTNUa3N5VUhWeWNpMUNhRU5OWTI5R1YySnljMWM1VEhCa1NUVkZVVzVMV2xOdU9WSlBNbTgwZUd0QlkwTmhVRWwyUXkxWk5qVkZZV0ptVnpCeVFqZEtTa05uTjNJMVZqbDBTWE5JWjE5VVluSm9XRWhUZUdJd2MzWktPVUp2VW5wQmFFVjJSbGhWYWxobFgyYzFVVzlPVmxORFkwVlJXa3hmUTFsNVVYTnNlR1pYWDNCb1YzRkpNemRRY0dnelQzcGljRUpWTUhCWldFOVViMDB4YTFkdFFSSWtObU15TXpVNU1HWXRNREF3TUMweU5XVXdMVGhqT0dZdFptTTBNVEUyTnpKa05qZzVJQVElM0Q%3D",
                          request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                        },
                      },
                    },
                  },
                ],
                trackingParams: "CCQQ8eIEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                header: {
                  feedFilterChipBarRenderer: {
                    contents: [
                      {
                        chipCloudChipRenderer: {
                          text: {
                            simpleText: "Latest",
                          },
                          navigationEndpoint: {
                            clickTrackingParams:
                              "CCoQ_V0YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                            commandMetadata: {
                              webCommandMetadata: {
                                sendPost: true,
                                apiUrl: "/youtubei/v1/browse",
                              },
                            },
                            continuationCommand: {
                              token:
                                "4qmFsgJkEhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmcaSDhnWXVHaXhTS2hJbUNpUTJZekl6TlRrd1ppMHdNREF3TFRJMVpUQXRPR000WmkxbVl6UXhNVFkzTW1RMk9Ea2dCQSUzRCUzRA%3D%3D",
                              request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                              command: {
                                clickTrackingParams:
                                  "CCoQ_V0YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                showReloadUiCommand: {
                                  targetId:
                                    "6c23590f-0000-25e0-8c8f-fc411672d689",
                                },
                              },
                            },
                          },
                          trackingParams:
                            "CCoQ_V0YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                          isSelected: true,
                        },
                      },
                      {
                        chipCloudChipRenderer: {
                          text: {
                            simpleText: "Popular",
                          },
                          navigationEndpoint: {
                            clickTrackingParams:
                              "CCkQ_V0YASITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                            commandMetadata: {
                              webCommandMetadata: {
                                sendPost: true,
                                apiUrl: "/youtubei/v1/browse",
                              },
                            },
                            continuationCommand: {
                              token:
                                "4qmFsgJkEhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmcaSDhnWXVHaXhTS2hJbUNpUTJZekl6TlRrd1ppMHdNREF3TFRJMVpUQXRPR000WmkxbVl6UXhNVFkzTW1RMk9Ea2dBZyUzRCUzRA%3D%3D",
                              request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                              command: {
                                clickTrackingParams:
                                  "CCkQ_V0YASITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                showReloadUiCommand: {
                                  targetId:
                                    "6c23590f-0000-25e0-8c8f-fc411672d689",
                                },
                              },
                            },
                          },
                          trackingParams:
                            "CCkQ_V0YASITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                          isSelected: false,
                        },
                      },
                      {
                        chipCloudChipRenderer: {
                          text: {
                            simpleText: "Oldest",
                          },
                          navigationEndpoint: {
                            clickTrackingParams:
                              "CCgQ_V0YAiITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                            commandMetadata: {
                              webCommandMetadata: {
                                sendPost: true,
                                apiUrl: "/youtubei/v1/browse",
                              },
                            },
                            continuationCommand: {
                              token:
                                "4qmFsgJkEhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmcaSDhnWXVHaXhTS2hJbUNpUTJZekl6TlRrd1ppMHdNREF3TFRJMVpUQXRPR000WmkxbVl6UXhNVFkzTW1RMk9Ea2dCUSUzRCUzRA%3D%3D",
                              request: "CONTINUATION_REQUEST_TYPE_BROWSE",
                              command: {
                                clickTrackingParams:
                                  "CCgQ_V0YAiITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                showReloadUiCommand: {
                                  targetId:
                                    "6c23590f-0000-25e0-8c8f-fc411672d689",
                                },
                              },
                            },
                          },
                          trackingParams:
                            "CCgQ_V0YAiITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                          isSelected: false,
                        },
                      },
                    ],
                    trackingParams: "CCUQ4M4DIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    nextButton: {
                      buttonRenderer: {
                        style: "STYLE_DEFAULT",
                        size: "SIZE_DEFAULT",
                        isDisabled: false,
                        icon: {
                          iconType: "CHEVRON_RIGHT",
                        },
                        tooltip: "Next",
                        trackingParams: "CCcQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                        accessibilityData: {
                          accessibilityData: {
                            label: "Next",
                          },
                        },
                      },
                    },
                    previousButton: {
                      buttonRenderer: {
                        style: "STYLE_DEFAULT",
                        size: "SIZE_DEFAULT",
                        isDisabled: false,
                        icon: {
                          iconType: "CHEVRON_LEFT",
                        },
                        tooltip: "Previous",
                        trackingParams: "CCYQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                        accessibilityData: {
                          accessibilityData: {
                            label: "Previous",
                          },
                        },
                      },
                    },
                    styleType:
                      "FEED_FILTER_CHIP_BAR_STYLE_TYPE_CHANNEL_PAGE_GRID",
                  },
                },
                targetId: "6c23590f-0000-25e0-8c8f-fc411672d689",
                style: "RICH_GRID_STYLE_SHORTS_GRID",
              },
            },
            trackingParams: "CCMQ8JMBGAciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
          },
        },
        {
          tabRenderer: {
            endpoint: {
              clickTrackingParams: "CCIQ8JMBGAgiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              commandMetadata: {
                webCommandMetadata: {
                  url: "/@junya1gou/playlists",
                  webPageType: "WEB_PAGE_TYPE_CHANNEL",
                  rootVe: 3611,
                  apiUrl: "/youtubei/v1/browse",
                },
              },
              browseEndpoint: {
                browseId: "UCjp_3PEaOau_nT_3vnqKIvg",
                params: "EglwbGF5bGlzdHPyBgQKAkIA",
                canonicalBaseUrl: "/@junya1gou",
              },
            },
            title: "Playlists",
            trackingParams: "CCIQ8JMBGAgiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
          },
        },
        {
          tabRenderer: {
            endpoint: {
              clickTrackingParams: "CCEQ8JMBGAkiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              commandMetadata: {
                webCommandMetadata: {
                  url: "/@junya1gou/community",
                  webPageType: "WEB_PAGE_TYPE_CHANNEL",
                  rootVe: 3611,
                  apiUrl: "/youtubei/v1/browse",
                },
              },
              browseEndpoint: {
                browseId: "UCjp_3PEaOau_nT_3vnqKIvg",
                params: "Egljb21tdW5pdHnyBgQKAkoA",
                canonicalBaseUrl: "/@junya1gou",
              },
            },
            title: "Posts",
            trackingParams: "CCEQ8JMBGAkiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
          },
        },
        {
          expandableTabRenderer: {
            endpoint: {
              clickTrackingParams: "CAAQhGciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              commandMetadata: {
                webCommandMetadata: {
                  url: "/@junya1gou/search",
                  webPageType: "WEB_PAGE_TYPE_CHANNEL",
                  rootVe: 3611,
                  apiUrl: "/youtubei/v1/browse",
                },
              },
              browseEndpoint: {
                browseId: "UCjp_3PEaOau_nT_3vnqKIvg",
                params: "EgZzZWFyY2jyBgQKAloA",
                canonicalBaseUrl: "/@junya1gou",
              },
            },
            title: "Search",
            selected: false,
          },
        },
      ],
    },
  },
  header: {
    pageHeaderRenderer: {
      pageTitle: "Junya Official Channel",
      content: {
        pageHeaderViewModel: {
          title: {
            dynamicTextViewModel: {
              text: {
                content: "Junya Official Channel",
                styleRuns: [
                  {
                    startIndex: 22,
                    styleRunExtensions: {
                      styleRunColorMapExtension: {
                        colorMap: [
                          {
                            key: "USER_INTERFACE_THEME_DARK",
                            value: 4294967295,
                          },
                          {
                            key: "USER_INTERFACE_THEME_LIGHT",
                            value: 4279440147,
                          },
                        ],
                      },
                    },
                  },
                ],
                attachmentRuns: [
                  {
                    startIndex: 22,
                    length: 0,
                    element: {
                      type: {
                        imageType: {
                          image: {
                            sources: [
                              {
                                clientResource: {
                                  imageName: "CHECK_CIRCLE_FILLED",
                                },
                                width: 14,
                                height: 14,
                              },
                            ],
                          },
                        },
                      },
                      properties: {
                        layoutProperties: {
                          height: {
                            value: 14,
                            unit: "DIMENSION_UNIT_POINT",
                          },
                          width: {
                            value: 14,
                            unit: "DIMENSION_UNIT_POINT",
                          },
                          margin: {
                            left: {
                              value: 8,
                              unit: "DIMENSION_UNIT_POINT",
                            },
                          },
                        },
                      },
                    },
                    alignment: "ALIGNMENT_VERTICAL_CENTER",
                  },
                ],
              },
              maxLines: 2,
              rendererContext: {
                loggingContext: {
                  loggingDirectives: {
                    trackingParams: "CCAQj-QKIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                    clientVeSpec: {
                      uiType: 176655,
                      veCounter: 832918587,
                    },
                  },
                },
                accessibilityContext: {
                  label: "Junya Official Channel, verified",
                },
              },
            },
          },
          image: {
            decoratedAvatarViewModel: {
              avatar: {
                avatarViewModel: {
                  image: {
                    sources: [
                      {
                        url: "https://yt3.googleusercontent.com/ytc/AIdro_mFt9iiVlgxD1gBW74I1o6H8xFtOg5AwqPj2_1JKHJ4UJg=s72-c-k-c0x00ffffff-no-rj",
                        width: 72,
                        height: 72,
                      },
                      {
                        url: "https://yt3.googleusercontent.com/ytc/AIdro_mFt9iiVlgxD1gBW74I1o6H8xFtOg5AwqPj2_1JKHJ4UJg=s120-c-k-c0x00ffffff-no-rj",
                        width: 120,
                        height: 120,
                      },
                      {
                        url: "https://yt3.googleusercontent.com/ytc/AIdro_mFt9iiVlgxD1gBW74I1o6H8xFtOg5AwqPj2_1JKHJ4UJg=s160-c-k-c0x00ffffff-no-rj",
                        width: 160,
                        height: 160,
                      },
                    ],
                    processor: {
                      borderImageProcessor: {
                        circular: true,
                      },
                    },
                  },
                  avatarImageSize: "AVATAR_SIZE_XL",
                  loggingDirectives: {
                    trackingParams: "CB8Q6OENIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                  },
                },
              },
            },
          },
          metadata: {
            contentMetadataViewModel: {
              metadataRows: [
                {
                  metadataParts: [
                    {
                      text: {
                        content: "@junya1gou",
                        styleRuns: [
                          {
                            weightLabel: "FONT_WEIGHT_MEDIUM",
                            styleRunExtensions: {
                              styleRunColorMapExtension: {
                                colorMap: [
                                  {
                                    key: "USER_INTERFACE_THEME_DARK",
                                    value: 4294967295,
                                  },
                                  {
                                    key: "USER_INTERFACE_THEME_LIGHT",
                                    value: 4279440147,
                                  },
                                ],
                              },
                            },
                          },
                        ],
                      },
                      enableTruncation: true,
                    },
                  ],
                },
                {
                  metadataParts: [
                    {
                      text: {
                        content: "38.5M subscribers",
                      },
                    },
                    {
                      text: {
                        content: "9K videos",
                        styleRuns: [
                          {
                            startIndex: 0,
                            length: 9,
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
              delimiter: "•",
              rendererContext: {
                loggingContext: {
                  loggingDirectives: {
                    trackingParams: "CB4Q9eQKIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                    clientVeSpec: {
                      uiType: 176757,
                      veCounter: 832918586,
                    },
                  },
                },
              },
            },
          },
          actions: {
            flexibleActionsViewModel: {
              actionsRows: [
                {
                  actions: [
                    {
                      buttonViewModel: {
                        title: "Subscribe",
                        onTap: {
                          innertubeCommand: {
                            clickTrackingParams:
                              "CBwQjqULIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            commandMetadata: {
                              webCommandMetadata: {
                                ignoreNavigation: true,
                              },
                            },
                            modalEndpoint: {
                              modal: {
                                modalWithTitleAndButtonRenderer: {
                                  title: {
                                    simpleText:
                                      "Want to subscribe to this channel?",
                                  },
                                  content: {
                                    simpleText:
                                      "Sign in to subscribe to this channel.",
                                  },
                                  button: {
                                    buttonRenderer: {
                                      style: "STYLE_BLUE_TEXT",
                                      size: "SIZE_DEFAULT",
                                      isDisabled: false,
                                      text: {
                                        simpleText: "Sign in",
                                      },
                                      navigationEndpoint: {
                                        clickTrackingParams:
                                          "CB0Q_YYEIhMI6Krb3NXOjQMVihJzCR3gNS31MglzdWJzY3JpYmU=",
                                        commandMetadata: {
                                          webCommandMetadata: {
                                            url: "https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3D%252F%2540junya1gou%252Fshorts%26continue_action%3DQUFFLUhqbHc2WkNPT3p0UlBMVU9VYmpLZDVOTEJwOWJwQXxBQ3Jtc0trT2xzUk5yM0hNcnhkVUp2ck9neE5qMDVVZTdhZWNNSzdicHp6YzROZmtBYTZxbmpFQzRVbFRYSlBHLU5teEhIZUluRTVhcnZnUEVNODg1MmZaM1NFM0VXUGhpcGFpMG9nUk9wdGllem41NHE3ZkhuX1ZSVjZRN1ZzbDFrYWVNaEo4LXdJU2JUTTVlRWdIWUxMV1ZpV0x0cXVXci1rdTVueHZhNW1BVi1IN3pyZ0FNYy1fMHNCT19QWUMyQlhNVDVHbHFhaFo&hl=en-GB&ec=66429",
                                            webPageType:
                                              "WEB_PAGE_TYPE_UNKNOWN",
                                            rootVe: 83769,
                                          },
                                        },
                                        signInEndpoint: {
                                          nextEndpoint: {
                                            clickTrackingParams:
                                              "CB0Q_YYEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                            commandMetadata: {
                                              webCommandMetadata: {
                                                url: "/@junya1gou/shorts",
                                                webPageType:
                                                  "WEB_PAGE_TYPE_CHANNEL",
                                                rootVe: 3611,
                                                apiUrl: "/youtubei/v1/browse",
                                              },
                                            },
                                            browseEndpoint: {
                                              browseId:
                                                "UCjp_3PEaOau_nT_3vnqKIvg",
                                              params: "EgZzaG9ydHM%3D",
                                              canonicalBaseUrl: "/@junya1gou",
                                            },
                                          },
                                          continueAction:
                                            "QUFFLUhqbHc2WkNPT3p0UlBMVU9VYmpLZDVOTEJwOWJwQXxBQ3Jtc0trT2xzUk5yM0hNcnhkVUp2ck9neE5qMDVVZTdhZWNNSzdicHp6YzROZmtBYTZxbmpFQzRVbFRYSlBHLU5teEhIZUluRTVhcnZnUEVNODg1MmZaM1NFM0VXUGhpcGFpMG9nUk9wdGllem41NHE3ZkhuX1ZSVjZRN1ZzbDFrYWVNaEo4LXdJU2JUTTVlRWdIWUxMV1ZpV0x0cXVXci1rdTVueHZhNW1BVi1IN3pyZ0FNYy1fMHNCT19QWUMyQlhNVDVHbHFhaFo",
                                          idamTag: "66429",
                                        },
                                      },
                                      trackingParams:
                                        "CB0Q_YYEIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        accessibilityText: "Subscribe",
                        style: "BUTTON_VIEW_MODEL_STYLE_MONO",
                        trackingParams: "CBwQjqULIhMI6Krb3NXOjQMVihJzCR3gNS31",
                        isFullWidth: false,
                        type: "BUTTON_VIEW_MODEL_TYPE_FILLED",
                        buttonSize: "BUTTON_VIEW_MODEL_SIZE_DEFAULT",
                        state: "BUTTON_VIEW_MODEL_STATE_ACTIVE",
                      },
                    },
                  ],
                },
              ],
              minimumRowHeight: 44,
              rendererContext: {
                loggingContext: {
                  loggingDirectives: {
                    trackingParams: "CBwQjqULIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                    clientVeSpec: {
                      uiType: 184974,
                      veCounter: 832918585,
                    },
                  },
                },
              },
            },
          },
          description: {
            descriptionPreviewViewModel: {
              description: {
                content:
                  "『A man beyond Justin Bieber』ジャスティンビーバーを超える男 ",
              },
              maxLines: 2,
              truncationText: {
                content: "...more",
                styleRuns: [
                  {
                    startIndex: 0,
                    length: 7,
                    weight: 500,
                  },
                ],
              },
              alwaysShowTruncationText: true,
              rendererContext: {
                loggingContext: {
                  loggingDirectives: {
                    trackingParams: "CBcQr_4KIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                    clientVeSpec: {
                      uiType: 180015,
                      veCounter: 832918584,
                    },
                  },
                },
                accessibilityContext: {
                  label:
                    "Description. 『A man beyond Justin Bieber』ジャスティンビーバ�…tap for more.",
                },
                commandContext: {
                  onTap: {
                    innertubeCommand: {
                      clickTrackingParams:
                        "CBcQr_4KIhMI6Krb3NXOjQMVihJzCR3gNS31",
                      showEngagementPanelEndpoint: {
                        engagementPanel: {
                          engagementPanelSectionListRenderer: {
                            header: {
                              engagementPanelTitleHeaderRenderer: {
                                title: {
                                  simpleText: "Junya Official Channel",
                                },
                                visibilityButton: {
                                  buttonRenderer: {
                                    style: "STYLE_DEFAULT",
                                    size: "SIZE_DEFAULT",
                                    isDisabled: false,
                                    icon: {
                                      iconType: "CLOSE",
                                    },
                                    accessibility: {
                                      label: "Close",
                                    },
                                    trackingParams:
                                      "CBsQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                    accessibilityData: {
                                      accessibilityData: {
                                        label: "Close",
                                      },
                                    },
                                    command: {
                                      clickTrackingParams:
                                        "CBsQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                      changeEngagementPanelVisibilityAction: {
                                        targetId:
                                          "6c235941-0000-25e0-8c8f-fc411672d689",
                                        visibility:
                                          "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN",
                                      },
                                    },
                                  },
                                },
                                trackingParams:
                                  "CBgQ040EIhMI6Krb3NXOjQMVihJzCR3gNS31",
                              },
                            },
                            content: {
                              sectionListRenderer: {
                                contents: [
                                  {
                                    itemSectionRenderer: {
                                      contents: [
                                        {
                                          continuationItemRenderer: {
                                            trigger:
                                              "CONTINUATION_TRIGGER_ON_ITEM_SHOWN",
                                            continuationEndpoint: {
                                              clickTrackingParams:
                                                "CBoQuy8YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                              commandMetadata: {
                                                webCommandMetadata: {
                                                  sendPost: true,
                                                  apiUrl: "/youtubei/v1/browse",
                                                },
                                              },
                                              continuationCommand: {
                                                token:
                                                  "4qmFsgJgEhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmcaRDhnWXJHaW1hQVNZS0pEWmpNak0xT1RReUxUQXdNREF0TWpWbE1DMDRZemhtTFdaak5ERXhOamN5WkRZNE9RJTNEJTNE",
                                                request:
                                                  "CONTINUATION_REQUEST_TYPE_BROWSE",
                                              },
                                            },
                                          },
                                        },
                                      ],
                                      trackingParams:
                                        "CBoQuy8YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                      sectionIdentifier:
                                        "6c235942-0000-25e0-8c8f-fc411672d689",
                                      targetId:
                                        "6c235942-0000-25e0-8c8f-fc411672d689",
                                    },
                                  },
                                ],
                                trackingParams:
                                  "CBkQui8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                scrollPaneStyle: {
                                  scrollable: true,
                                },
                              },
                            },
                            targetId: "6c235941-0000-25e0-8c8f-fc411672d689",
                            identifier: {
                              surface: "ENGAGEMENT_PANEL_SURFACE_BROWSE",
                              tag: "6c235941-0000-25e0-8c8f-fc411672d689",
                            },
                          },
                        },
                        identifier: {
                          surface: "ENGAGEMENT_PANEL_SURFACE_BROWSE",
                          tag: "6c235941-0000-25e0-8c8f-fc411672d689",
                        },
                        engagementPanelPresentationConfigs: {
                          engagementPanelPopupPresentationConfig: {
                            popupType: "PANEL_POPUP_TYPE_DIALOG",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          attribution: {
            attributionViewModel: {
              text: {
                content: "tiktok.com/@junya1gou",
                commandRuns: [
                  {
                    startIndex: 0,
                    length: 21,
                    onTap: {
                      innertubeCommand: {
                        clickTrackingParams:
                          "CBIQjaULIhMI6Krb3NXOjQMVihJzCR3gNS31",
                        commandMetadata: {
                          webCommandMetadata: {
                            url: "https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqbVFreUNhM1FpNVhKZmVJQWdVc0k5YVdrM1ItUXxBQ3Jtc0tsUzUzNlZUY1VURWdxSzN1UnBNTmw1U09hcmQxdS1uamtkanJUSHZPb2FMSU9IYWhoQ2ZZSFRZUTgxQnR1OGR4OTM0YWtiNFNfMXEyNWhsVzFjaWZrYnRsRER5cXFKUWVGck15M2g5dVZUT2hmOGRmZw&q=https%3A%2F%2Fwww.tiktok.com%2F%40junya1gou",
                            webPageType: "WEB_PAGE_TYPE_UNKNOWN",
                            rootVe: 83769,
                          },
                        },
                        urlEndpoint: {
                          url: "https://www.youtube.com/redirect?event=channel_header&redir_token=QUFFLUhqbVFreUNhM1FpNVhKZmVJQWdVc0k5YVdrM1ItUXxBQ3Jtc0tsUzUzNlZUY1VURWdxSzN1UnBNTmw1U09hcmQxdS1uamtkanJUSHZPb2FMSU9IYWhoQ2ZZSFRZUTgxQnR1OGR4OTM0YWtiNFNfMXEyNWhsVzFjaWZrYnRsRER5cXFKUWVGck15M2g5dVZUT2hmOGRmZw&q=https%3A%2F%2Fwww.tiktok.com%2F%40junya1gou",
                          target: "TARGET_NEW_WINDOW",
                        },
                      },
                    },
                  },
                ],
                styleRuns: [
                  {
                    weightLabel: "FONT_WEIGHT_NORMAL",
                    styleRunExtensions: {
                      styleRunColorMapExtension: {
                        colorMap: [
                          {
                            key: "USER_INTERFACE_THEME_DARK",
                            value: 4282296063,
                          },
                          {
                            key: "USER_INTERFACE_THEME_LIGHT",
                            value: 4278607828,
                          },
                        ],
                      },
                    },
                  },
                ],
              },
              suffix: {
                content: "and 3 more links",
                commandRuns: [
                  {
                    startIndex: 0,
                    length: 16,
                    onTap: {
                      innertubeCommand: {
                        clickTrackingParams:
                          "CBIQjaULIhMI6Krb3NXOjQMVihJzCR3gNS31",
                        showEngagementPanelEndpoint: {
                          engagementPanel: {
                            engagementPanelSectionListRenderer: {
                              header: {
                                engagementPanelTitleHeaderRenderer: {
                                  title: {
                                    simpleText: "Junya Official Channel",
                                  },
                                  visibilityButton: {
                                    buttonRenderer: {
                                      style: "STYLE_DEFAULT",
                                      size: "SIZE_DEFAULT",
                                      isDisabled: false,
                                      icon: {
                                        iconType: "CLOSE",
                                      },
                                      accessibility: {
                                        label: "Close",
                                      },
                                      trackingParams:
                                        "CBYQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                      accessibilityData: {
                                        accessibilityData: {
                                          label: "Close",
                                        },
                                      },
                                      command: {
                                        clickTrackingParams:
                                          "CBYQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                        changeEngagementPanelVisibilityAction: {
                                          targetId:
                                            "6c235943-0000-25e0-8c8f-fc411672d689",
                                          visibility:
                                            "ENGAGEMENT_PANEL_VISIBILITY_HIDDEN",
                                        },
                                      },
                                    },
                                  },
                                  trackingParams:
                                    "CBMQ040EIhMI6Krb3NXOjQMVihJzCR3gNS31",
                                },
                              },
                              content: {
                                sectionListRenderer: {
                                  contents: [
                                    {
                                      itemSectionRenderer: {
                                        contents: [
                                          {
                                            continuationItemRenderer: {
                                              trigger:
                                                "CONTINUATION_TRIGGER_ON_ITEM_SHOWN",
                                              continuationEndpoint: {
                                                clickTrackingParams:
                                                  "CBUQuy8YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                                commandMetadata: {
                                                  webCommandMetadata: {
                                                    sendPost: true,
                                                    apiUrl:
                                                      "/youtubei/v1/browse",
                                                  },
                                                },
                                                continuationCommand: {
                                                  token:
                                                    "4qmFsgJgEhhVQ2pwXzNQRWFPYXVfblRfM3ZucUtJdmcaRDhnWXJHaW1hQVNZS0pEWmpNak0xT1RRMExUQXdNREF0TWpWbE1DMDRZemhtTFdaak5ERXhOamN5WkRZNE9RJTNEJTNE",
                                                  request:
                                                    "CONTINUATION_REQUEST_TYPE_BROWSE",
                                                },
                                              },
                                            },
                                          },
                                        ],
                                        trackingParams:
                                          "CBUQuy8YACITCOiq29zVzo0DFYoScwkd4DUt9Q==",
                                        sectionIdentifier:
                                          "6c235944-0000-25e0-8c8f-fc411672d689",
                                        targetId:
                                          "6c235944-0000-25e0-8c8f-fc411672d689",
                                      },
                                    },
                                  ],
                                  trackingParams:
                                    "CBQQui8iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                                  scrollPaneStyle: {
                                    scrollable: true,
                                  },
                                },
                              },
                              targetId: "6c235943-0000-25e0-8c8f-fc411672d689",
                              identifier: {
                                surface: "ENGAGEMENT_PANEL_SURFACE_BROWSE",
                                tag: "6c235943-0000-25e0-8c8f-fc411672d689",
                              },
                            },
                          },
                          identifier: {
                            surface: "ENGAGEMENT_PANEL_SURFACE_BROWSE",
                            tag: "6c235943-0000-25e0-8c8f-fc411672d689",
                          },
                          engagementPanelPresentationConfigs: {
                            engagementPanelPopupPresentationConfig: {
                              popupType: "PANEL_POPUP_TYPE_DIALOG",
                            },
                          },
                        },
                      },
                    },
                  },
                ],
                styleRuns: [
                  {
                    fontName: "",
                    fontSize: 0,
                    weightLabel: "FONT_WEIGHT_MEDIUM",
                  },
                ],
              },
              rendererContext: {
                loggingContext: {
                  loggingDirectives: {
                    trackingParams: "CBIQjaULIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                    clientVeSpec: {
                      uiType: 184973,
                      veCounter: 832918583,
                    },
                  },
                },
              },
            },
          },
          banner: {
            imageBannerViewModel: {
              image: {
                sources: [
                  {
                    url: "https://yt3.googleusercontent.com/6s2btFK4uW8dfjVQcjjcjchzg5YxEHxvGoXQ95Ei0evSvkCTLvGKkBBORdvfEaXvm-XpZP5X7Q=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    width: 1060,
                    height: 175,
                  },
                  {
                    url: "https://yt3.googleusercontent.com/6s2btFK4uW8dfjVQcjjcjchzg5YxEHxvGoXQ95Ei0evSvkCTLvGKkBBORdvfEaXvm-XpZP5X7Q=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    width: 1138,
                    height: 188,
                  },
                  {
                    url: "https://yt3.googleusercontent.com/6s2btFK4uW8dfjVQcjjcjchzg5YxEHxvGoXQ95Ei0evSvkCTLvGKkBBORdvfEaXvm-XpZP5X7Q=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    width: 1707,
                    height: 283,
                  },
                  {
                    url: "https://yt3.googleusercontent.com/6s2btFK4uW8dfjVQcjjcjchzg5YxEHxvGoXQ95Ei0evSvkCTLvGKkBBORdvfEaXvm-XpZP5X7Q=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    width: 2120,
                    height: 351,
                  },
                  {
                    url: "https://yt3.googleusercontent.com/6s2btFK4uW8dfjVQcjjcjchzg5YxEHxvGoXQ95Ei0evSvkCTLvGKkBBORdvfEaXvm-XpZP5X7Q=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    width: 2276,
                    height: 377,
                  },
                  {
                    url: "https://yt3.googleusercontent.com/6s2btFK4uW8dfjVQcjjcjchzg5YxEHxvGoXQ95Ei0evSvkCTLvGKkBBORdvfEaXvm-XpZP5X7Q=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                    width: 2560,
                    height: 424,
                  },
                ],
              },
              style: "IMAGE_BANNER_STYLE_INSET",
              rendererContext: {
                loggingContext: {
                  loggingDirectives: {
                    trackingParams: "CBEQnfILIhMI6Krb3NXOjQMVihJzCR3gNS31",
                    visibility: {
                      types: "12",
                    },
                    clientVeSpec: {
                      uiType: 194845,
                      veCounter: 832918582,
                    },
                  },
                },
              },
            },
          },
          rendererContext: {
            loggingContext: {
              loggingDirectives: {
                trackingParams: "CBAQot8KIhMI6Krb3NXOjQMVihJzCR3gNS31",
                visibility: {
                  types: "12",
                },
                clientVeSpec: {
                  uiType: 176034,
                  veCounter: 832918581,
                },
              },
            },
          },
        },
      },
    },
  },
  metadata: {
    channelMetadataRenderer: {
      title: "Junya Official Channel",
      description:
        "『A man beyond Justin Bieber』ジャスティンビーバーを超える男\n\nThis is the one and only Junya's official YouTube channel!\nPlease subscribe to my channel and don't forget to turn on the notification button!\n\nIf you want to send a gift, send them to the address below:\n---------\nCollab Japan K.K. c/o Junya\n3−3−3 Minamiaoyama\nRiviera Building (Working Park EN), #208\nMinato-ku, Tokyo, Japan 107-0062\n---------\n*Please refrain from sending perishable items.\n",
      rssUrl:
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCjp_3PEaOau_nT_3vnqKIvg",
      externalId: "UCjp_3PEaOau_nT_3vnqKIvg",
      keywords:
        'Junya TikTok "Japan TikTok" TikToker じゅんや "junya legend" "junya official"',
      ownerUrls: ["http://www.youtube.com/@junya1gou"],
      avatar: {
        thumbnails: [
          {
            url: "https://yt3.googleusercontent.com/ytc/AIdro_mFt9iiVlgxD1gBW74I1o6H8xFtOg5AwqPj2_1JKHJ4UJg=s900-c-k-c0x00ffffff-no-rj",
            width: 900,
            height: 900,
          },
        ],
      },
      channelUrl: "https://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
      isFamilySafe: true,
      facebookProfileId: "TheOfficialJunya",
      availableCountryCodes: [
        "AQ",
        "LT",
        "NR",
        "CY",
        "VC",
        "GU",
        "SH",
        "BN",
        "ZW",
        "DE",
        "RO",
        "KH",
        "TM",
        "MF",
        "NC",
        "IR",
        "RW",
        "PY",
        "JO",
        "KP",
        "MN",
        "GD",
        "CH",
        "BG",
        "MV",
        "SX",
        "AR",
        "LU",
        "QA",
        "DM",
        "FK",
        "GL",
        "BO",
        "BY",
        "CZ",
        "SI",
        "UG",
        "TF",
        "PR",
        "TN",
        "MG",
        "KI",
        "CA",
        "JP",
        "HR",
        "IS",
        "BH",
        "SY",
        "TV",
        "CI",
        "MO",
        "EG",
        "GE",
        "NL",
        "KY",
        "MW",
        "LV",
        "AS",
        "OM",
        "PA",
        "GM",
        "VE",
        "PK",
        "SJ",
        "GW",
        "WF",
        "BZ",
        "ID",
        "TG",
        "TO",
        "MH",
        "HK",
        "IL",
        "NE",
        "PS",
        "SR",
        "BA",
        "YT",
        "VU",
        "TW",
        "AD",
        "AL",
        "IT",
        "GF",
        "BI",
        "EH",
        "KR",
        "MP",
        "MX",
        "KZ",
        "BQ",
        "DO",
        "NU",
        "AT",
        "FM",
        "GN",
        "SA",
        "PL",
        "CR",
        "SK",
        "MA",
        "IE",
        "SZ",
        "MZ",
        "TH",
        "VN",
        "IM",
        "NF",
        "CC",
        "BB",
        "MQ",
        "UY",
        "AE",
        "ZA",
        "AM",
        "HT",
        "BJ",
        "CK",
        "PT",
        "SS",
        "GG",
        "MY",
        "SB",
        "BR",
        "AU",
        "DZ",
        "SL",
        "LA",
        "VG",
        "CU",
        "BT",
        "LI",
        "HM",
        "CD",
        "NG",
        "IN",
        "GY",
        "PM",
        "AF",
        "MR",
        "YE",
        "NO",
        "GH",
        "RS",
        "BS",
        "CL",
        "LY",
        "ST",
        "UA",
        "ER",
        "FO",
        "SC",
        "UZ",
        "KE",
        "GP",
        "HU",
        "MC",
        "LB",
        "SE",
        "ET",
        "AX",
        "CV",
        "MK",
        "GA",
        "BD",
        "EC",
        "IO",
        "TJ",
        "PN",
        "SM",
        "GI",
        "AG",
        "CM",
        "LR",
        "BL",
        "DJ",
        "NP",
        "KM",
        "AO",
        "TR",
        "US",
        "ES",
        "GQ",
        "HN",
        "TZ",
        "PE",
        "SD",
        "AW",
        "MS",
        "NA",
        "JE",
        "LC",
        "MD",
        "VI",
        "BV",
        "NZ",
        "ZM",
        "RE",
        "TC",
        "PG",
        "FR",
        "GS",
        "CW",
        "NI",
        "CF",
        "ML",
        "BE",
        "GB",
        "SN",
        "FI",
        "TK",
        "DK",
        "BM",
        "SV",
        "LK",
        "JM",
        "KN",
        "GR",
        "PF",
        "PW",
        "RU",
        "CN",
        "LS",
        "MT",
        "PH",
        "BW",
        "GT",
        "AZ",
        "SG",
        "TD",
        "EE",
        "BF",
        "CG",
        "CX",
        "UM",
        "SO",
        "ME",
        "KG",
        "TL",
        "FJ",
        "TT",
        "WS",
        "MM",
        "VA",
        "AI",
        "IQ",
        "KW",
        "MU",
        "CO",
      ],
      androidDeepLink:
        "android-app://com.google.android.youtube/http/www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
      androidAppindexingLink:
        "android-app://com.google.android.youtube/http/www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
      iosAppindexingLink:
        "ios-app://544007664/vnd.youtube/www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
      vanityChannelUrl: "http://www.youtube.com/@junya1gou",
    },
  },
  trackingParams: "CAAQhGciEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
  topbar: {
    desktopTopbarRenderer: {
      logo: {
        topbarLogoRenderer: {
          iconImage: {
            iconType: "YOUTUBE_LOGO",
          },
          tooltipText: {
            runs: [
              {
                text: "YouTube Home",
              },
            ],
          },
          endpoint: {
            clickTrackingParams: "CA8QsV4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
            commandMetadata: {
              webCommandMetadata: {
                url: "/",
                webPageType: "WEB_PAGE_TYPE_BROWSE",
                rootVe: 3854,
                apiUrl: "/youtubei/v1/browse",
              },
            },
            browseEndpoint: {
              browseId: "FEwhat_to_watch",
            },
          },
          trackingParams: "CA8QsV4iEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
          overrideEntityKey: "EgZ0b3BiYXIg9QEoAQ%3D%3D",
        },
      },
      searchbox: {
        fusionSearchboxRenderer: {
          icon: {
            iconType: "SEARCH",
          },
          placeholderText: {
            runs: [
              {
                text: "Search",
              },
            ],
          },
          config: {
            webSearchboxConfig: {
              requestLanguage: "en",
              requestDomain: "ng",
              hasOnscreenKeyboard: false,
              focusSearchbox: true,
            },
          },
          trackingParams: "CA0Q7VAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
          searchEndpoint: {
            clickTrackingParams: "CA0Q7VAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
            commandMetadata: {
              webCommandMetadata: {
                url: "/results?search_query=",
                webPageType: "WEB_PAGE_TYPE_SEARCH",
                rootVe: 4724,
              },
            },
            searchEndpoint: {
              query: "",
            },
          },
          clearButton: {
            buttonRenderer: {
              style: "STYLE_DEFAULT",
              size: "SIZE_DEFAULT",
              isDisabled: false,
              icon: {
                iconType: "CLOSE",
              },
              trackingParams: "CA4Q8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              accessibilityData: {
                accessibilityData: {
                  label: "Clear search query",
                },
              },
            },
          },
        },
      },
      trackingParams: "CAEQq6wBIhMI6Krb3NXOjQMVihJzCR3gNS31",
      countryCode: "NG",
      topbarButtons: [
        {
          topbarMenuButtonRenderer: {
            icon: {
              iconType: "MORE_VERT",
            },
            menuRequest: {
              clickTrackingParams: "CAsQ_qsBGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              commandMetadata: {
                webCommandMetadata: {
                  sendPost: true,
                  apiUrl: "/youtubei/v1/account/account_menu",
                },
              },
              signalServiceEndpoint: {
                signal: "GET_ACCOUNT_MENU",
                actions: [
                  {
                    clickTrackingParams:
                      "CAsQ_qsBGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                    openPopupAction: {
                      popup: {
                        multiPageMenuRenderer: {
                          trackingParams:
                            "CAwQ_6sBIhMI6Krb3NXOjQMVihJzCR3gNS31",
                          style: "MULTI_PAGE_MENU_STYLE_TYPE_SYSTEM",
                          showLoadingSpinner: true,
                        },
                      },
                      popupType: "DROPDOWN",
                      beReused: true,
                    },
                  },
                ],
              },
            },
            trackingParams: "CAsQ_qsBGAAiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
            accessibility: {
              accessibilityData: {
                label: "Settings",
              },
            },
            tooltip: "Settings",
            style: "STYLE_DEFAULT",
          },
        },
        {
          buttonRenderer: {
            style: "STYLE_SUGGESTIVE",
            size: "SIZE_SMALL",
            text: {
              runs: [
                {
                  text: "Sign in",
                },
              ],
            },
            icon: {
              iconType: "AVATAR_LOGGED_OUT",
            },
            navigationEndpoint: {
              clickTrackingParams: "CAoQ1IAEGAEiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
              commandMetadata: {
                webCommandMetadata: {
                  url: "https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F%2540junya1gou%252Fshorts%253Fapp%253Ddesktop&hl=en-GB&ec=65620",
                  webPageType: "WEB_PAGE_TYPE_UNKNOWN",
                  rootVe: 83769,
                },
              },
              signInEndpoint: {
                idamTag: "65620",
              },
            },
            trackingParams: "CAoQ1IAEGAEiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
            targetId: "topbar-signin",
          },
        },
      ],
      hotkeyDialog: {
        hotkeyDialogRenderer: {
          title: {
            runs: [
              {
                text: "Keyboard shortcuts",
              },
            ],
          },
          sections: [
            {
              hotkeyDialogSectionRenderer: {
                title: {
                  runs: [
                    {
                      text: "Playback",
                    },
                  ],
                },
                options: [
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Toggle play/pause",
                          },
                        ],
                      },
                      hotkey: "k",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Rewind 10 seconds",
                          },
                        ],
                      },
                      hotkey: "j",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Fast forward 10 seconds",
                          },
                        ],
                      },
                      hotkey: "l",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Previous video",
                          },
                        ],
                      },
                      hotkey: "P (SHIFT + p)",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Next video",
                          },
                        ],
                      },
                      hotkey: "N (SHIFT + n)",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Previous frame (while paused)",
                          },
                        ],
                      },
                      hotkey: ",",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Comma",
                        },
                      },
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Next frame (while paused)",
                          },
                        ],
                      },
                      hotkey: ".",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Full stop",
                        },
                      },
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Decrease playback rate",
                          },
                        ],
                      },
                      hotkey: "< (SHIFT+,)",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Less than or SHIFT + comma",
                        },
                      },
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Increase playback rate",
                          },
                        ],
                      },
                      hotkey: "> (SHIFT+.)",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Greater than or SHIFT + full stop",
                        },
                      },
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Seek to specific point in the video (7 advances to 70% of duration)",
                          },
                        ],
                      },
                      hotkey: "0..9",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Seek to previous chapter",
                          },
                        ],
                      },
                      hotkey: "CONTROL + ←",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Seek to next chapter",
                          },
                        ],
                      },
                      hotkey: "CONTROL + →",
                    },
                  },
                ],
              },
            },
            {
              hotkeyDialogSectionRenderer: {
                title: {
                  runs: [
                    {
                      text: "General",
                    },
                  ],
                },
                options: [
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Toggle full screen",
                          },
                        ],
                      },
                      hotkey: "f",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Toggle theatre mode",
                          },
                        ],
                      },
                      hotkey: "t",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Toggle miniplayer",
                          },
                        ],
                      },
                      hotkey: "i",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Close miniplayer or current dialogue",
                          },
                        ],
                      },
                      hotkey: "ESCAPE",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Toggle mute",
                          },
                        ],
                      },
                      hotkey: "m",
                    },
                  },
                ],
              },
            },
            {
              hotkeyDialogSectionRenderer: {
                title: {
                  runs: [
                    {
                      text: "Subtitles and closed captions",
                    },
                  ],
                },
                options: [
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "If the video supports captions, toggle captions ON/OFF",
                          },
                        ],
                      },
                      hotkey: "c",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Rotate through different text opacity levels",
                          },
                        ],
                      },
                      hotkey: "o",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Rotate through different window opacity levels",
                          },
                        ],
                      },
                      hotkey: "w",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Rotate through font sizes (increasing)",
                          },
                        ],
                      },
                      hotkey: "+",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Rotate through font sizes (decreasing)",
                          },
                        ],
                      },
                      hotkey: "-",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Minus",
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              hotkeyDialogSectionRenderer: {
                title: {
                  runs: [
                    {
                      text: "Spherical videos",
                    },
                  ],
                },
                options: [
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Pan up",
                          },
                        ],
                      },
                      hotkey: "w",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Pan left",
                          },
                        ],
                      },
                      hotkey: "a",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Pan down",
                          },
                        ],
                      },
                      hotkey: "s",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Pan right",
                          },
                        ],
                      },
                      hotkey: "d",
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Zoom in",
                          },
                        ],
                      },
                      hotkey: "+ on numpad or ]",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Plus on number pad or right bracket",
                        },
                      },
                    },
                  },
                  {
                    hotkeyDialogSectionOptionRenderer: {
                      label: {
                        runs: [
                          {
                            text: "Zoom out",
                          },
                        ],
                      },
                      hotkey: "- on numpad or [",
                      hotkeyAccessibilityLabel: {
                        accessibilityData: {
                          label: "Minus on number pad or left bracket",
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
          dismissButton: {
            buttonRenderer: {
              style: "STYLE_BLUE_TEXT",
              size: "SIZE_DEFAULT",
              isDisabled: false,
              text: {
                runs: [
                  {
                    text: "Dismiss",
                  },
                ],
              },
              trackingParams: "CAkQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
            },
          },
          trackingParams: "CAgQteYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
        },
      },
      backButton: {
        buttonRenderer: {
          trackingParams: "CAcQvIYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
          command: {
            clickTrackingParams: "CAcQvIYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
            commandMetadata: {
              webCommandMetadata: {
                sendPost: true,
              },
            },
            signalServiceEndpoint: {
              signal: "CLIENT_SIGNAL",
              actions: [
                {
                  clickTrackingParams: "CAcQvIYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
                  signalAction: {
                    signal: "HISTORY_BACK",
                  },
                },
              ],
            },
          },
        },
      },
      forwardButton: {
        buttonRenderer: {
          trackingParams: "CAYQvYYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
          command: {
            clickTrackingParams: "CAYQvYYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
            commandMetadata: {
              webCommandMetadata: {
                sendPost: true,
              },
            },
            signalServiceEndpoint: {
              signal: "CLIENT_SIGNAL",
              actions: [
                {
                  clickTrackingParams: "CAYQvYYDIhMI6Krb3NXOjQMVihJzCR3gNS31",
                  signalAction: {
                    signal: "HISTORY_FORWARD",
                  },
                },
              ],
            },
          },
        },
      },
      a11ySkipNavigationButton: {
        buttonRenderer: {
          style: "STYLE_DEFAULT",
          size: "SIZE_DEFAULT",
          isDisabled: false,
          text: {
            runs: [
              {
                text: "Skip navigation",
              },
            ],
          },
          trackingParams: "CAUQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
          command: {
            clickTrackingParams: "CAUQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
            commandMetadata: {
              webCommandMetadata: {
                sendPost: true,
              },
            },
            signalServiceEndpoint: {
              signal: "CLIENT_SIGNAL",
              actions: [
                {
                  clickTrackingParams: "CAUQ8FsiEwjoqtvc1c6NAxWKEnMJHeA1LfU=",
                  signalAction: {
                    signal: "SKIP_NAVIGATION",
                  },
                },
              ],
            },
          },
        },
      },
      voiceSearchButton: {
        buttonRenderer: {
          style: "STYLE_DEFAULT",
          size: "SIZE_DEFAULT",
          isDisabled: false,
          serviceEndpoint: {
            clickTrackingParams: "CAIQ7a8FIhMI6Krb3NXOjQMVihJzCR3gNS31",
            commandMetadata: {
              webCommandMetadata: {
                sendPost: true,
              },
            },
            signalServiceEndpoint: {
              signal: "CLIENT_SIGNAL",
              actions: [
                {
                  clickTrackingParams: "CAIQ7a8FIhMI6Krb3NXOjQMVihJzCR3gNS31",
                  openPopupAction: {
                    popup: {
                      voiceSearchDialogRenderer: {
                        placeholderHeader: {
                          runs: [
                            {
                              text: "Listening…",
                            },
                          ],
                        },
                        promptHeader: {
                          runs: [
                            {
                              text: "Didn't hear that. Try again.",
                            },
                          ],
                        },
                        exampleQuery1: {
                          runs: [
                            {
                              text: "'Play Dua Lipa'",
                            },
                          ],
                        },
                        exampleQuery2: {
                          runs: [
                            {
                              text: "'Show me my subscriptions'",
                            },
                          ],
                        },
                        promptMicrophoneLabel: {
                          runs: [
                            {
                              text: "Tap the microphone to try again",
                            },
                          ],
                        },
                        loadingHeader: {
                          runs: [
                            {
                              text: "Working…",
                            },
                          ],
                        },
                        connectionErrorHeader: {
                          runs: [
                            {
                              text: "No connection",
                            },
                          ],
                        },
                        connectionErrorMicrophoneLabel: {
                          runs: [
                            {
                              text: "Check your connection and try again",
                            },
                          ],
                        },
                        permissionsHeader: {
                          runs: [
                            {
                              text: "Waiting for permission",
                            },
                          ],
                        },
                        permissionsSubtext: {
                          runs: [
                            {
                              text: "Allow microphone access to search with voice",
                            },
                          ],
                        },
                        disabledHeader: {
                          runs: [
                            {
                              text: "Search with your voice",
                            },
                          ],
                        },
                        disabledSubtext: {
                          runs: [
                            {
                              text: "To search by voice, go to your browser settings and allow access to microphone",
                            },
                          ],
                        },
                        microphoneButtonAriaLabel: {
                          runs: [
                            {
                              text: "Cancel",
                            },
                          ],
                        },
                        exitButton: {
                          buttonRenderer: {
                            style: "STYLE_DEFAULT",
                            size: "SIZE_DEFAULT",
                            isDisabled: false,
                            icon: {
                              iconType: "CLOSE",
                            },
                            trackingParams:
                              "CAQQ0LEFIhMI6Krb3NXOjQMVihJzCR3gNS31",
                            accessibilityData: {
                              accessibilityData: {
                                label: "Cancel",
                              },
                            },
                          },
                        },
                        trackingParams: "CAMQ7q8FIhMI6Krb3NXOjQMVihJzCR3gNS31",
                        microphoneOffPromptHeader: {
                          runs: [
                            {
                              text: "Microphone off. Try again.",
                            },
                          ],
                        },
                      },
                    },
                    popupType: "TOP_ALIGNED_DIALOG",
                  },
                },
              ],
            },
          },
          icon: {
            iconType: "MICROPHONE_ON",
          },
          tooltip: "Search with your voice",
          trackingParams: "CAIQ7a8FIhMI6Krb3NXOjQMVihJzCR3gNS31",
          accessibilityData: {
            accessibilityData: {
              label: "Search with your voice",
            },
          },
        },
      },
    },
  },
  microformat: {
    microformatDataRenderer: {
      urlCanonical: "https://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
      title: "Junya Official Channel",
      description:
        "『A man beyond Justin Bieber』ジャスティンビーバーを超える男 This is the one and only Junya's official YouTube channel! Please subscribe to my channel and don't forget to tur...",
      thumbnail: {
        thumbnails: [
          {
            url: "https://yt3.googleusercontent.com/ytc/AIdro_mFt9iiVlgxD1gBW74I1o6H8xFtOg5AwqPj2_1JKHJ4UJg=s200-c-k-c0x00ffffff-no-rj?days_since_epoch=20239",
            width: 200,
            height: 200,
          },
        ],
      },
      siteName: "YouTube",
      appName: "YouTube",
      androidPackage: "com.google.android.youtube",
      iosAppStoreId: "544007664",
      iosAppArguments:
        "https://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
      ogType: "yt-fb-app:channel",
      urlApplinksWeb:
        "https://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg?feature=applinks",
      urlApplinksIos:
        "vnd.youtube://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg?feature=applinks",
      urlApplinksAndroid:
        "vnd.youtube://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg?feature=applinks",
      urlTwitterIos:
        "vnd.youtube://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg?feature=twitter-deep-link",
      urlTwitterAndroid:
        "vnd.youtube://www.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg?feature=twitter-deep-link",
      twitterCardType: "summary",
      twitterSiteHandle: "@YouTube",
      schemaDotOrgType: "http://schema.org/http://schema.org/YoutubeChannelV2",
      noindex: false,
      unlisted: false,
      familySafe: true,
      tags: [
        "Junya",
        "TikTok",
        "Japan TikTok",
        "TikToker",
        "じゅんや",
        "junya legend",
        "junya official",
      ],
      availableCountries: [
        "AQ",
        "LT",
        "NR",
        "CY",
        "VC",
        "GU",
        "SH",
        "BN",
        "ZW",
        "DE",
        "RO",
        "KH",
        "TM",
        "MF",
        "NC",
        "IR",
        "RW",
        "PY",
        "JO",
        "KP",
        "MN",
        "GD",
        "CH",
        "BG",
        "MV",
        "SX",
        "AR",
        "LU",
        "QA",
        "DM",
        "FK",
        "GL",
        "BO",
        "BY",
        "CZ",
        "SI",
        "UG",
        "TF",
        "PR",
        "TN",
        "MG",
        "KI",
        "CA",
        "JP",
        "HR",
        "IS",
        "BH",
        "SY",
        "TV",
        "CI",
        "MO",
        "EG",
        "GE",
        "NL",
        "KY",
        "MW",
        "LV",
        "AS",
        "OM",
        "PA",
        "GM",
        "VE",
        "PK",
        "SJ",
        "GW",
        "WF",
        "BZ",
        "ID",
        "TG",
        "TO",
        "MH",
        "HK",
        "IL",
        "NE",
        "PS",
        "SR",
        "BA",
        "YT",
        "VU",
        "TW",
        "AD",
        "AL",
        "IT",
        "GF",
        "BI",
        "EH",
        "KR",
        "MP",
        "MX",
        "KZ",
        "BQ",
        "DO",
        "NU",
        "AT",
        "FM",
        "GN",
        "SA",
        "PL",
        "CR",
        "SK",
        "MA",
        "IE",
        "SZ",
        "MZ",
        "TH",
        "VN",
        "IM",
        "NF",
        "CC",
        "BB",
        "MQ",
        "UY",
        "AE",
        "ZA",
        "AM",
        "HT",
        "BJ",
        "CK",
        "PT",
        "SS",
        "GG",
        "MY",
        "SB",
        "BR",
        "AU",
        "DZ",
        "SL",
        "LA",
        "VG",
        "CU",
        "BT",
        "LI",
        "HM",
        "CD",
        "NG",
        "IN",
        "GY",
        "PM",
        "AF",
        "MR",
        "YE",
        "NO",
        "GH",
        "RS",
        "BS",
        "CL",
        "LY",
        "ST",
        "UA",
        "ER",
        "FO",
        "SC",
        "UZ",
        "KE",
        "GP",
        "HU",
        "MC",
        "LB",
        "SE",
        "ET",
        "AX",
        "CV",
        "MK",
        "GA",
        "BD",
        "EC",
        "IO",
        "TJ",
        "PN",
        "SM",
        "GI",
        "AG",
        "CM",
        "LR",
        "BL",
        "DJ",
        "NP",
        "KM",
        "AO",
        "TR",
        "US",
        "ES",
        "GQ",
        "HN",
        "TZ",
        "PE",
        "SD",
        "AW",
        "MS",
        "NA",
        "JE",
        "LC",
        "MD",
        "VI",
        "BV",
        "NZ",
        "ZM",
        "RE",
        "TC",
        "PG",
        "FR",
        "GS",
        "CW",
        "NI",
        "CF",
        "ML",
        "BE",
        "GB",
        "SN",
        "FI",
        "TK",
        "DK",
        "BM",
        "SV",
        "LK",
        "JM",
        "KN",
        "GR",
        "PF",
        "PW",
        "RU",
        "CN",
        "LS",
        "MT",
        "PH",
        "BW",
        "GT",
        "AZ",
        "SG",
        "TD",
        "EE",
        "BF",
        "CG",
        "CX",
        "UM",
        "SO",
        "ME",
        "KG",
        "TL",
        "FJ",
        "TT",
        "WS",
        "MM",
        "VA",
        "AI",
        "IQ",
        "KW",
        "MU",
        "CO",
      ],
      linkAlternates: [
        {
          hrefUrl: "https://m.youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
        },
        {
          hrefUrl:
            "android-app://com.google.android.youtube/http/youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
        },
        {
          hrefUrl:
            "ios-app://544007664/http/youtube.com/channel/UCjp_3PEaOau_nT_3vnqKIvg",
        },
      ],
    },
  },
};

// let videoIdsFromYtInitialData =
//   ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[2].tabRenderer
//     .content.richGridRenderer.contents[0].richItemRenderer.content
//     .shortsLockupViewModel.onTap.innertubeCommand.reelWatchEndpoint.videoId;

var videoIdsFromYtInitialData = [];

// Extract video IDs from ytInitialData
for (const item of ytInitialData?.contents?.twoColumnBrowseResultsRenderer
  ?.tabs[2]?.tabRenderer?.content?.richGridRenderer?.contents) {
  videoIdsFromYtInitialData.push(
    item?.richItemRenderer?.content?.shortsLockupViewModel?.onTap
      ?.innertubeCommand?.reelWatchEndpoint?.videoId
  );
}

console.log("Video IDs from ytInitialData:", videoIdsFromYtInitialData);
