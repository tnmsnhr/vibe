const config = {
    // zoom subscription android release
    'com.zoomcar.zapflexi': {
        // ZC_API_HOST: 'https://api.zoomcar.com',
        // TENANT_ID: '88da615b-5304-42ee-b753-79668e4acac1',
        // SERVICE_API_HOST: 'https://api-zap.zoomcar.com',
        ZC_API_HOST: 'https://api-test-d.zoomcarstaging.com',
        SERVICE_API_HOST: 'https://zap-testeks.zoomcartest.com',
        TENANT_ID: '86abdd38-da83-41a6-af32-6d25835b4757',
        POLICY_URL:
            'https://www.zoomcar.com/zap/subscribe/policies?city=bangalore&hide=true',
        FUNNEL_URL: 'https://www.zoomcar.com/zap',
        FAQ_URL: 'https://zapsaleszoomcar.freshdesk.com/support/home',
        GOOGLE_APP_ID:
            '1021784811414-6rd4q12sk9hdnr1i3lcdjd6hsigk7jej.apps.googleusercontent.com',
        SEGMENT_KEY: 'wCg6DRXmsSyYaZ4LqhL1yfmrXI8Y0Upd',
        prefixes: [
            'https://zap.zoomcar.com',
            'zoomcarsubscription://',
        ],
        FUEL_SEARCH_URL: 'https://www.google.com/maps/search/gas+stations',
        FRESHCHAT_CLIENT: '43abf802f89aca24f2cf8f042d5685406f808df9',
        FRESHCHAT_CLIENT_BOT_HASH: 'cf502013f25831151df44ffecfb9caa3633e375e',
        showReferAndEarn: true,
        showInstaPay: true,
        showSocialLogin: true,
        showBankDetails: true,
        showProgramDetails: true,
        PRODUCT_NAME: 'Zoomcar',
        showFAQ: true,
        showPolicies: true,
        showHelpAndSuport: true,
        loginTitle: 'Login To Zoomcar Subscription',
        loginSessionExpiryDays: 30,

        // uncomment for statging
        // ZC_API_HOST: 'https://api-test-d.zoomcarstaging.com',
        // SERVICE_API_HOST: 'https://zap-testeks.zoomcartest.com',
        // TENANT_ID:"86abdd38-da83-41a6-af32-6d25835b4757",
    },
    'com.zoomcar.zapflexistage': {
        ZC_API_HOST: 'https://api-test-d.zoomcarstaging.com',
        SERVICE_API_HOST: 'https://zap-testeks.zoomcartest.com',
        TENANT_ID: '86abdd38-da83-41a6-af32-6d25835b4757',
        // ZC_API_HOST: 'https://api.zoomcar.com',
        // TENANT_ID: '88da615b-5304-42ee-b753-79668e4acac1',
        // SERVICE_API_HOST: 'https://api-zap.zoomcar.com',
        FUNNEL_URL: 'https://test-d.zoomcarstaging.com/zap/subscribe/',
        POLICY_URL: 'https://www.zoomcar.com/zap-subscribe-policies',
        GOOGLE_APP_ID:
            '15560122248-o7ept0fqfrgungj2arbkv0qn8hqm8lgk.apps.googleusercontent.com',
        SEGMENT_KEY: 'w5FMIZB831SMb61pzPHtKKIKSlUVkkLU',
        FAQ_URL: 'https://zapsaleszoomcar.freshdesk.com/support/home',
        FUEL_SEARCH_URL: 'https://www.google.com/maps/search/gas+stations',
        FRESHCHAT_CLIENT: '43abf802f89aca24f2cf8f042d5685406f808df9',
        FRESHCHAT_CLIENT_BOT_HASH: 'cf502013f25831151df44ffecfb9caa3633e375e',
        prefixes: [
            'https://zap.zoomcar.com',
            'zoomcarsubscription://',
        ],
        showReferAndEarn: true,
        showInstaPay: true,
        showSocialLogin: true,
        showBankDetails: true,
        showProgramDetails: true,
        PRODUCT_NAME: 'Zoomcar',
        showFAQ: true,
        showPolicies: true,
        showHelpAndSuport: true,
        loginTitle: 'Login To Zoomcar Subscription',
        loginSessionExpiryDays: 30,
        // TENANT_ID:"86abdd38-da83-41a6-af32-6d25835b4757",
        // ZC_API_HOST: 'https://stg-mg-zcar-api.zoomcartest.com',
        // SERVICE_API_HOST: 'https://stg-mg-zap-service.zoomcartest.com',
    },
    'com.zoomcar.zapflexi.debug': {
        ZC_API_HOST: 'https://api.zoomcar.com',
        FUNNEL_URL: 'https://www.zoomcar.com/zap',
        POLICY_URL: 'https://www.zoomcar.com/zap-subscribe-policies',
        SERVICE_API_HOST: 'https://zap-testeks.zoomcartest.com',
        GOOGLE_APP_ID:
            '15560122248-o7ept0fqfrgungj2arbkv0qn8hqm8lgk.apps.googleusercontent.com',
        SEGMENT_KEY: 'w5FMIZB831SMb61pzPHtKKIKSlUVkkLU',
        FRESHCHAT_CLIENT: '43abf802f89aca24f2cf8f042d5685406f808df9',
        FRESHCHAT_CLIENT_BOT_HASH: 'cf502013f25831151df44ffecfb9caa3633e375e',
        FUEL_SEARCH_URL: 'https://www.google.com/maps/search/gas+stations',
        FAQ_URL: 'https://zapsaleszoomcar.freshdesk.com/support/home',
        TENANT_ID: '62ca6b02-67ed-48f7-94ff-fdbcbaf5cf58',
        prefixes: [
            'https://zap.zoomcar.com',
            'zoomcarsubscription://',
        ],
        showReferAndEarn: true,
        showInstaPay: true,
        showSocialLogin: true,
        showBankDetails: true,
        showProgramDetails: true,
        PRODUCT_NAME: 'Zoomcar',
        showFAQ: true,
        showPolicies: true,
        showHelpAndSuport: true,
        loginTitle: 'Login To Zoomcar Subscription',
        loginSessionExpiryDays: 30,
    },
    // zoom subscription ios prod release
    'com.zoomcar.subscription': {
        ZC_API_HOST: 'https://api.zoomcar.com',
        TENANT_ID: '88da615b-5304-42ee-b753-79668e4acac1',
        SERVICE_API_HOST: 'https://api-zap.zoomcar.com',
        FUNNEL_URL: 'https://www.zoomcar.com/zap',
        POLICY_URL:
            'https://www.zoomcar.com/zap/subscribe/policies?city=bangalore&hide=true',
        GOOGLE_APP_ID:
            '363572224885-3ro6b9aa30pe2nekoti87q4ddu961qdc.apps.googleusercontent.com',
        SEGMENT_KEY: 'wCg6DRXmsSyYaZ4LqhL1yfmrXI8Y0Upd',
        FUEL_SEARCH_URL: 'https://www.google.com/maps/search/gas+stations',
        FAQ_URL: 'https://zapsaleszoomcar.freshdesk.com/support/home',
        prefixes: [
            'https://zap.zoomcar.com',
            'zoomcarsubscription://',
        ],
        FRESHCHAT_CLIENT: '43abf802f89aca24f2cf8f042d5685406f808df9',
        FRESHCHAT_CLIENT_BOT_HASH: 'cf502013f25831151df44ffecfb9caa3633e375e',
        showReferAndEarn: true,
        showInstaPay: true,
        showSocialLogin: true,
        showBankDetails: true,
        showProgramDetails: true,
        PRODUCT_NAME: 'Zoomcar',
        showFAQ: true,
        showPolicies: true,
        showHelpAndSuport: true,
        loginTitle: 'Login To Zoomcar Subscription',
        loginSessionExpiryDays: 30,
        // stating
        // ZC_API_HOST: 'https://api-test-d.zoomcarstaging.com',
        // SERVICE_API_HOST: 'https://zap-testeks.zoomcartest.com',
        // TENANT_ID: "86abdd38-da83-41a6-af32-6d25835b4757",
        // // / uncomment for stagin
    },
    'com.zoomcar.amigo': {
        ZC_API_HOST: 'https://api.zoomcar.com',
        SERVICE_API_HOST: 'https://api-zap.zoomcar.com',
        TENANT_ID: '88da615b-5304-42ee-b753-79668e4acac1',
        BANK_PAGE_URL:
            'https://www.zoomcar.com/in/host/en/bank-verify?city=bangalore&isWebview=true',
        PAN_PAGE_URL:
            'https://www.zoomcar.com/in/host/en/pan-card?city=bangalore&isWebview=true',
        POLICY_URL: {
            India: {
                en: 'https://www.zoomcar.com/in/host/en/policy?city=hyderabad&hideLayout=true&hidechatbot=true',
                hi: 'https://www.zoomcar.com/in/host/en/policy?city=hyderabad&hideLayout=true&hidechatbot=true',
            },
            Egypt: {
                en: 'https://www.zoomcar.com/eg/host/en/policy?hideLayout=true&hidechatbot=true&city=cairo',
                ar: 'https://www.zoomcar.com/eg/host/ar/policy?hideLayout=true&hidechatbot=true&city=cairo',
            },
            Philippines: {
                en: 'https://www.zoomcar.com/ph/host/en/policy?hideLayout=true&hidechatbot=true&city=manila',
                fil: 'https://www.zoomcar.com/ph/host/fil/policy?hideLayout=true&hidechatbot=true&city=manila',
            },
            Vietnam: {
                en: 'https://www.zoomcar.com/vn/host/en/policy?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
                vi: 'https://www.zoomcar.com/vn/host/vi/policy?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
            },
            Indonesia: {
                en: 'https://www.zoomcar.com/id/host/en/policy?hideLayout=true&hidechatbot=true&city=jakarta',
                id: 'https://www.zoomcar.com/id/host/id/policy?hideLayout=true&hidechatbot=true&city=jakarta',
            },
        },
        FUNNEL_URL: 'https://www.zoomcar.com/in/host/en',
        REFERRAL_URLS: {
            Egypt: 'https://www.zoomcar.com/eg/host/en?referral=',
            India: 'https://www.zoomcar.com/in/host/en?referral=',
            Philippines: 'https://www.zoomcar.com/ph/host/en?referral=',
            Vietnam: 'https://www.zoomcar.com/vn/host/en?referral=',
            Indonesia: 'https://www.zoomcar.com/id/host/en?referral=',
        },
        FAQ_URL: {
            India: {
                en: 'https://www.zoomcar.com/in/host/en/faq?city=hyderabad&hideLayout=true&hidechatbot=true',
                hi: 'https://www.zoomcar.com/in/host/en/faq?city=hyderabad&hideLayout=true&hidechatbot=true',
            },
            Egypt: {
                en: 'https://www.zoomcar.com/eg/host/en/faq?hideLayout=true&hidechatbot=true&city=cairo',
                ar: 'https://www.zoomcar.com/eg/host/ar/faq?hideLayout=true&hidechatbot=true&city=cairo',
            },
            Philippines: {
                en: 'https://www.zoomcar.com/ph/host/en/faq?hideLayout=true&hidechatbot=true&city=manila',
                fil: 'https://www.zoomcar.com/ph/host/fil/faq?hideLayout=true&hidechatbot=true&city=manila',
            },
            Vietnam: {
                en: 'https://www.zoomcar.com/vn/host/en/faq?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
                vi: 'https://www.zoomcar.com/vn/host/vi/faq?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
            },
            Indonesia: {
                en: 'https://www.zoomcar.com/id/host/en/faq?hideLayout=true&hidechatbot=true&city=jakarta',
                id: 'https://www.zoomcar.com/id/host/id/faq?hideLayout=true&hidechatbot=true&city=jakarta',
            },
        },
        GOOGLE_APP_ID_ANDROID:
            '444405233381-mo4g5ou9uknnk42v68il2mclnp8tobnb.apps.googleusercontent.com',
        GOOGLE_APP_ID_IOS:
            '548897683515-vock9std27d4i1r04nhhpnsq8vsqoqaa.apps.googleusercontent.com',
        SEGMENT_KEY: 'RjvrO12DPbWum3N6BZycOnirE6TJtmzp',
        prefixes: [
            'https://zap.zoomcar.com/amigo',
            'amigobyzoomcar://',
        ],
        FUEL_SEARCH_URL: 'https://www.google.com/maps/search/gas+stations',
        FRESHCHAT_CLIENT: '43abf802f89aca24f2cf8f042d5685406f808df9',
        FRESHCHAT_CLIENT_BOT_HASH: {
            India: '201d2854b5033408153b71834e096b5f853d5a43',
            Egypt: '165a9a6cae0d4c436c75f932d6ca4146d45855fe',
            Philippines: '006745349ebdb28b1ca6c1482b70b3cc0b56878b',
            Vietnam: 'dcccbd6fa5000ff5bc8e63e1dee7a155ea5e7dbc',
            Indonesia: '84cc14aece0acdf154f5aedb0daac84babc6bef2',
        },
        showReferAndEarn: true,
        showInstaPay: false,
        showSocialLogin: true,
        showProgramDetails: true,
        PRODUCT_NAME: 'Zoomcar Host',
        showFAQ: true,
        showPolicies: true,
        showHelpAndSuport: true,
        loginTitle: 'Login To Zoomcar Host',
        loginSessionExpiryDays: 30,
        showListingLocationDetails: {
            India: true,
            Egypt: false,
            Philippines: false,
            Vietnam: false,
            Indonesia: false,
        },
        showBankDetails: {
            India: true,
            Egypt: false,
            Philippines: false,
            Vietnam: false,
            Indonesia: false,
        },
        showNewScreen: {
            India: true,
            Egypt: false,
            Philippines: false,
            Vietnam: false,
            Indonesia: false,
        },
        //   qa2 env
        // ZC_API_HOST: 'https://qa2-api.zoomcartest.com',
        // SERVICE_API_HOST: 'https://qa2zap-zap.zoomcartest.com',
        // TENANT_ID: '88da615b-5304-42ee-b753-79668e4acac1',
        // BANK_PAGE_URL:
        //   'https://qa2-zap-subscribe-funnel.zoomcartest.com/in/host/en/bank-verify?city=bangalore&isWebview=true',
        // PAN_PAGE_URL:
        //   'https://qa2-zap-subscribe-funnel.zoomcartest.com/in/host/en/pan-card?city=bangalore&isWebview=true',
        // POLICY_URL: {
        //   India: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/in/host/en/policy?city=hyderabad&hideLayout=true&hidechatbot=true',
        //   },
        //   Egypt: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/eg/host/en/policy?hideLayout=true&hidechatbot=true&city=cairo',
        //     ar: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/eg/host/ar/policy?hideLayout=true&hidechatbot=true&city=cairo',
        //   },
        //   Philippines: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/ph/host/en/policy?hideLayout=true&hidechatbot=true&city=manila',
        //     fil: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/ph/host/fil/policy?hideLayout=true&hidechatbot=true&city=manila',
        //   },
        //   Vietnam: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/vn/host/en/policy?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
        //     vi: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/vn/host/vi/policy?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
        //   },
        //   Indonesia: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/id/host/en/policy?hideLayout=true&hidechatbot=true&city=jakarta',
        //     id: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/id/host/id/policy?hideLayout=true&hidechatbot=true&city=jakarta',
        //   },
        // },
        // FUNNEL_URL: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/in/host/en',
        // REFERRAL_URLS: {
        //   Egypt: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/eg/host/en?referral=',
        //   India: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/in/host/en?referral=',
        //   Philippines: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/ph/host/en?referral=',
        //   Vietnam: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/vn/host/en?referral=',
        //   Indonesia: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/id/host/en?referral=',
        // },
        // FAQ_URL: {
        //   India: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/in/host/en/faq?city=hyderabad&hideLayout=true&hidechatbot=true',
        //   },
        //   Egypt: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/eg/host/en/faq?hideLayout=true&hidechatbot=true&city=cairo',
        //     ar: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/eg/host/ar/faq?hideLayout=true&hidechatbot=true&city=cairo',
        //   },
        //   Philippines: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/ph/host/en/faq?hideLayout=true&hidechatbot=true&city=manila',
        //     fil: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/ph/host/fil/faq?hideLayout=true&hidechatbot=true&city=manila',
        //   },
        //   Vietnam: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/vn/host/en/faq?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
        //     vi: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/vn/host/vi/faq?hideLayout=true&hidechatbot=true&city=ho-chi-minh',
        //   },
        //   Indonesia: {
        //     en: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/id/host/en/faq?hideLayout=true&hidechatbot=true&city=jakarta',
        //     id: 'https://qa2-zap-subscribe-funnel.zoomcartest.com/id/host/id/faq?hideLayout=true&hidechatbot=true&city=jakarta',
        //   },
        // },
        isDebug: false,
    },
}
export default config
