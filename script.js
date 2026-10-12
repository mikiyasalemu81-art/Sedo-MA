/**
 * SEDO MARTIAL ART — PRODUCTION JAVASCRIPT
 * Features:
 * - Status Badge Config (Idea 12)
 * - 4-Language i18n with Arabic RTL layout mirroring
 * - Loading Intro with letter-by-letter reveal & curtain lift
 * - Hero 3-slide Ken Burns Carousel with cursor spotlight & mobile swipe
 * - Custom red cursor & Magnetic CTA buttons (Idea 4)
 * - Split-letter heading reveals (Idea 6) & Section clip-wipe (Idea 7)
 * - Counter animations (Idea 8)
 * - Career Timeline progress line (Idea 9)
 * - Services Fight-Card with hover sweep (Idea 10)
 * - Video panel with hover unmute (desktop) & tap-to-unmute (mobile) (Idea 11)
 * - Parallax portrait (Idea 13)
 * - Testimonials slider (Idea 19)
 * - 6-Step Collab Form with icon choices (Idea 15 & 16), live char count, Review card & Telegram sharing
 * - Safe try/catch for all Storage APIs
 */

// ==========================================================================
// CONFIGURATION (IDEA 12: STATUS BADGE)
// Change text, color, and pulse state here:
// Options: "Training now", "Fight night soon", "Available for collabs"
// ==========================================================================
const STATUS_CONFIG = {
  text: "Training now",
  color: "#B10F1A",
  pulse: true
};

(function () {
  'use strict';

  // ==========================================================================
  // TRANSLATION DICTIONARIES (EN, AM, OM, AR)
  // ==========================================================================
  const TRANSLATIONS = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navVideos: "Videos",
      navPhotos: "Photos",
      navCollab: "Collab",
      languageLabel: "Language",

      heroPillLabel: "Martial arts creator · Ethiopia",
      heroSub1: "Taekwondo champion. MMA fighter.",
      heroSub2: "I fight for Ethiopia.",
      btnWatchTikTok: "Watch on TikTok",
      btnWorkWithSedo: "Work with Sedo",
      statFollowers: "Followers",
      statLikes: "Likes",
      statCampaigns: "Brand deals and campaigns: [NUMBER]",
      partnerPlaceholder: "Partner logos coming soon · Brand Partnerships · Official Sponsors · Combat Promotions · ",

      aboutHeading: "The career",
      aboutBio: "Born and rooted in Ethiopian soil, Sedo embodies the relentless spirit of African combat arts. Competing actively across elite Taekwondo and MMA stages from [YEAR] to [YEAR], he earned [TITLE] honors and secured [WIN] decisive career finishes. Celebrated internationally as the Habesha King, Sedo connects pure athletic discipline with an engaged audience of over 2.4 million loyal followers.",
      pullQuote: "Power. Pride. Discipline.",
      btnPressKit: "Download press kit",
      pressKitComingSoon: "Press kit coming soon",
      timelineItem1: "[TITLE] National Taekwondo Championship",
      timelineItem1Desc: "Gold medal finish and dominant national tournament performance.",
      timelineItem2: "Professional MMA Debut with [WIN] First-Round Victory",
      timelineItem2Desc: "Decisive first-round stoppage displaying explosive striking acumen.",
      timelineItem3: "Continental Combat Showcase and [TITLE] Contender Match",
      timelineItem3Desc: "Headline main-event showcase representing Ethiopia on the continental stage.",
      timelineItem4: "Global Digital Reach Exceeds 2M Supporters Worldwide",
      timelineItem4Desc: "Rapid viral growth and international brand collaboration launch.",

      servicesHeading: "Work with Sedo",
      servicesLead: "Curated partnership opportunities for world-class athletic labels, commercial enterprises, and ambitious regional brands.",
      service1Title: "Paid advertisements",
      service1Desc: "High-impact sponsored video integrations woven into authentic training sessions and lifestyle content.",
      service2Title: "Brand sponsorships",
      service2Desc: "Comprehensive multi-platform campaign alignments connecting your enterprise with millions of devoted supporters.",
      service3Title: "Product promotion",
      service3Desc: "Dedicated demonstrations, combat apparel showcases, and equipment reviews featuring trusted creator endorsements.",
      service4Title: "Social media campaigns",
      service4Desc: "Multi-tier viral rollouts optimized for high watch duration, organic sharing, and community engagement.",
      service5Title: "Event appearances",
      service5Desc: "VIP guest attendance, motivational masterclasses, and ceremonial appearances for corporate and sports events.",
      service6Title: "Fight-night promotions",
      service6Desc: "Exclusive weigh-in and fight-week brand placement on official gear, banners, and digital coverage.",
      service7Title: "Business content creation",
      service7Desc: "Custom creative media filmed specifically for commercial syndication and distribution across your company channels.",
      service8Title: "Ambassador partnerships",
      service8Desc: "Long-term exclusive representation embodying discipline, cultural strength, and authentic presence.",
      btnBookService: "Inquire",

      testimonialsHeading: "Partner Words",
      photosHeading: "Photos",
      photosHint: "Scroll to view gallery",

      videoHeading: "Watch the latest",
      videoDesc: "Direct from the gym floor to the arena. Witness explosive martial arts masterclasses, power conditioning, and combat preparation followed by over 2.4 million fans.",
      videoBrand: "Sedo Martial Art",
      videoMotto: "I fight for Ethiopia!",
      videoCtaHint: "Stay updated with daily training:",
      btnFollowTikTokHandle: "Follow on TikTok @sedomartialart3",

      collabHeading: "Brand Collaboration",
      collabSubhead: "Submit your commercial proposal directly to Sedo's official team for brand activations, sponsorships, and campaigns.",
      stepCounter: "Step {step} of 6",
      step1Intro: "Tell us who is reaching out.",
      labelName: "Full Name *",
      labelEmail: "Email Address *",
      labelPhone: "Phone Number *",
      labelContactMethod: "Preferred Contact Channel *",
      step2Intro: "Tell us about your brand or enterprise.",
      labelBrand: "Brand or Business Name *",
      labelBusinessType: "Business Category *",
      labelLocation: "City or Country *",
      labelWebsite: "Website or Social Link (Optional)",
      step3Intro: "Select one or more collaboration models.",
      labelOther: "Other",
      labelGoal: "Campaign Goal *",
      labelStartDate: "Preferred Start Date *",
      labelAudience: "Target Audience (Short description) *",
      step4Intro: "Share the vision and scope of this campaign.",
      labelDesc: "Campaign or Business Description (Min 30 characters) *",
      labelSource: "How did you find Sedo? *",
      step5Intro: "Review your request details before sending.",
      reviewSec1: "Contact",
      reviewSec2: "Brand & Business",
      reviewSec3: "Collaboration",
      reviewSec4: "Details & Notes",
      btnEdit: "Edit",
      consentText: "I agree to be contacted about this request",
      sendReadyTitle: "Ready to Connect on Telegram",
      sendReadyDesc: "Clicking the button below will format your proposal, copy it to your clipboard, and prepare a direct dispatch to Sedo's official manager (@Donkahan03).",
      btnBack: "Back",
      btnNext: "Next",
      btnSendRequest: "Send request",

      modalTitle: "Your request is ready",
      copiedBadge: "Copied to your clipboard",
      modalInstructions: "Choose @Donkahan03 in Telegram and press Send. If the message did not open, paste it from your clipboard into a chat with @Donkahan03.",
      btnOpenTelegram: "Open @Donkahan03 on Telegram",
      btnClose: "Close",

      errName: "Please enter your full name.",
      errEmail: "Please enter a valid email address.",
      errPhone: "Please enter a valid phone number (minimum 7 digits).",
      errBrand: "Please enter your brand or business name.",
      errLocation: "Please enter your city or country.",
      errCollabType: "Please select at least one collaboration type.",
      errStartDate: "Please select a preferred start date.",
      errAudience: "Please provide a brief description of your audience.",
      errDesc: "Please provide a description of at least 30 characters.",
      errConsent: "Please agree to be contacted.",

      websiteBy: "Website by"
    },

    am: {
      navHome: "መነሻ",
      navAbout: "ስለ እኔ",
      navServices: "አገልግሎቶች",
      navVideos: "ቪዲዮዎች",
      navPhotos: "ፎቶዎች",
      navCollab: "ትብብር",
      languageLabel: "ቋንቋ",

      heroPillLabel: "የማርሻል አርት ፈጣሪ · ኢትዮጵያ",
      heroSub1: "የታኬንዶ ሻምፒዮን። MMA ተዋጊ።",
      heroSub2: "ኢትዮጵያን ወክዬ እዋጋለሁ።",
      btnWatchTikTok: "በTikTok ይመልከቱ",
      btnWorkWithSedo: "ከሰዶ ጋር ይስሩ",
      statFollowers: "ተከታዮች",
      statLikes: "መውደዶች",
      statCampaigns: "የተከናወኑ የንግድ ስራዎች፦ [NUMBER]",
      partnerPlaceholder: "የአጋር አርማዎች በቅርቡ ይቀርባሉ · የንግድ ትብብር · ይፋዊ ስፖንሰሮች · ",

      aboutHeading: "ሙያዬ",
      aboutBio: "በኢትዮጵያዊ የጀግንነት ወኔ የታነጸው ሰዶ፣ የአፍሪካን የማይበገር የትግል መንፈስ ይወክላል። ከ[YEAR] እስከ [YEAR] ባሉት ዓመታት በ[TITLE] ውድድሮች በርካታ አሸናፊነቶችን እና [WIN] ወሳኝ ድሎችን አስመዝግቧል። በዓለም ዙሪያ የሐበሻ ንጉሥ በሚል የሚታወቀው ሰዶ፣ ድንቅ ስነ-ምግባርን እና ችሎታን በማጣመር ከ2.4 ሚሊዮን በላይ ተከታዮችን አፍርቷል።",
      pullQuote: "ብርታት። ኩራት። ዲስፕሊን።",
      btnPressKit: "የፕሬስ ኪት አውርድ",
      pressKitComingSoon: "የፕሬስ ኪት በቅርቡ ይቀርባል",
      timelineItem1: "የ[TITLE] የኢትዮጵያ ታይኳንዶ ሻምፒዮና",
      timelineItem1Desc: "የወርቅ ሜዳሊያ ድል እና የተሟላ የበላይነት።",
      timelineItem2: "የመጀመሪያው ፕሮፌሽናል MMA ውድድር በ[WIN] 1ኛ ዙር አሸናፊነት",
      timelineItem2Desc: "በአስደናቂ ጥቃት በፍጥነት የተጠናቀቀ ድል።",
      timelineItem3: "የአፍሪካ አህጉራዊ ፍልሚያ ውድድር እና [TITLE]",
      timelineItem3Desc: "ኢትዮጵያን በአህጉራዊ መድረክ በዋናነት የወከለበት ፍልሚያ።",
      timelineItem4: "በማህበራዊ ሚዲያ ከ2 ሚሊዮን በላይ ዓለም አቀፍ ተከታዮችን ማፍራት",
      timelineItem4Desc: "ፈጣን ዕድገት እና የዓለም አቀፍ የንግድ ትብብሮች መጀመሪያ።",

      servicesHeading: "ከሰዶ ጋር ይስሩ",
      servicesLead: "ለታዋቂ የንግድ ተቋማት፣ ለስፖርት አልባሳት እና ለትላልቅ ድርጅቶች የቀረበ የቀጥታ ትብብር ዕድል።",
      service1Title: "የሚከፈልባቸው ማስታወቂያዎች",
      service1Desc: "በልምምድ እና በአኗኗር ቪዲዮዎች ውስጥ በጥራት የቀረቡ ማስታወቂያዎች።",
      service2Title: "የብራንድ ስፖንሰርሺፕ",
      service2Desc: "ድርጅትዎን በሚሊዮኖች ከሚቆጠሩ ደጋፊዎች ጋር የሚያስተሳስር ዘላቂ የዘመቻ ስምምነት።",
      service3Title: "የምርት ማስተዋወቅ",
      service3Desc: "የስፖርት አልባሳት እና ዕቃዎች በተዋጊው ተፈትሸው ለተመልካች የሚቀርቡበት አሰራር።",
      service4Title: "የማህበራዊ ሚዲያ ዘመቻዎች",
      service4Desc: "ለከፍተኛ እይታና ተሳትፎ የተዘጋጁ ማራኪ የማህበራዊ ገጽ ዘመቻዎች።",
      service5Title: "በዝግጅቶች ላይ መገኘት",
      service5Desc: "በድርጅት ዝግጅቶች እና ልዩ መድረኮች ላይ በአካል መገኘት።",
      service6Title: "የፍልሚያ ምሽት ማስተዋወቅ",
      service6Desc: "በውድድር ሳምንት እና በፍልሚያ መድረክ ላይ የድርጅትዎን አርማ ማስተዋወቅ።",
      service7Title: "የንግድ ይዘት ዝግጅት",
      service7Desc: "ለድርጅትዎ ማህበራዊ ገጾች የሚሆኑ ፕሮፌሽናል የቪዲዮ እና የፎቶ ይዘቶችን ማዘጋጀት።",
      service8Title: "የአምባሳደርነት ትብብር",
      service8Desc: "ጥንካሬን እና ክብርን በማንጸባረቅ የድርጅትዎ ቋሚ አምባሳደር ሆኖ መስራት።",
      btnBookService: "ጠይቅ",

      testimonialsHeading: "የአጋሮች ምስክርነት",
      photosHeading: "ፎቶዎች",
      photosHint: "ፎቶዎችን ለማየት ያንሸራትቱ",

      videoHeading: "የቅርብ ጊዜ ቪዲዮዎችን ይመልከቱ",
      videoDesc: "ከስልጠና ማዕከል እስከ መድረክ። በሚሊዮኖች የሚደነቁ ፈጣን ልምምዶችን እና የውድድር ዝግጅቶችን ይመልከቱ።",
      videoBrand: "ሰዶ ማርሻል አርት",
      videoMotto: "ኢትዮጵያን ወክዬ እዋጋለሁ!",
      videoCtaHint: "የዕለት ተዕለት ልምምዶችን ይከታተሉ፦",
      btnFollowTikTokHandle: "በTikTok ይከተሉ @sedomartialart3",

      collabHeading: "የትብብር ጥያቄ",
      collabSubhead: "የስራ ወይም የማስታወቂያ ጥያቄዎን በቀጥታ ለሰዶ ማኔጅመንት ያቅርቡ።",
      stepCounter: "ደረጃ {step} ከ 6",
      step1Intro: "ስለ እርሶ መረጃ ይንገሩን።",
      labelName: "ሙሉ ስም *",
      labelEmail: "ኢሜይል *",
      labelPhone: "ስልክ ቁጥር *",
      labelContactMethod: "የሚመርጡት የመገናኛ መንገድ *",
      step2Intro: "ስለ ድርጅትዎ ወይም ብራንድዎ ይንገሩን።",
      labelBrand: "የድርጅት ወይም የብራንድ ስም *",
      labelBusinessType: "የንግዱ ዘርፍ *",
      labelLocation: "ከተማ ወይም ሀገር *",
      labelWebsite: "ድህረ ገጽ ወይም ማህበራዊ ገጽ (ከተፈለገ)",
      step3Intro: "የትብብር ዓይነት ይምረጡ።",
      labelOther: "ሌላ",
      labelGoal: "የዘመቻው ዓላማ *",
      labelStartDate: "የሚጀምርበት ቀን *",
      labelAudience: "ዒላማ ተጠቃሚዎች (ባጭሩ) *",
      step4Intro: "ስለ ስራው ዝርዝር ያብራሩ።",
      labelDesc: "ስለ ዘመቻው ወይም ምርቱ ማብራሪያ (ቢያንስ 30 ፊደላት) *",
      labelSource: "ሰዶን እንዴት አወቁት? *",
      step5Intro: "ከመላክዎ በፊት መረጃዎን ያረጋግጡ።",
      reviewSec1: "አድራሻ",
      reviewSec2: "ድርጅት",
      reviewSec3: "የትብብር ዓይነት",
      reviewSec4: "ዝርዝር ማብራሪያ",
      btnEdit: "አስተካክል",
      consentText: "በዚህ ጥያቄ ላይ እንድትገናኙኝ እስማማለሁ",
      sendReadyTitle: "በTelegram ለመገናኘት ዝግጁ ነን",
      sendReadyDesc: "ከስር ያለውን ቁልፍ ሲጫኑ መልዕክቱ ተዘጋጅቶ ኮፒ ይደረጋል፤ በቀጥታም ወደ ማኔጀሩ (@Donkahan03) ቴሌግራም ይወስድዎታል።",
      btnBack: "ተመለስ",
      btnNext: "ቀጣይ",
      btnSendRequest: "ጥያቄ ላክ",

      modalTitle: "ጥያቄው ተዘጋጅቷል",
      copiedBadge: "ወደ ቅንጥብ ሰሌዳዎ (Clipboard) ተቀድቷል",
      modalInstructions: "በTelegram ዝርዝር ውስጥ @Donkahan03 ን ይምረጡና Send ይጫኑ። መልዕክቱ ካልተከፈተ ከቅንጥብ ሰሌዳዎ paste በማድረግ ወደ @Donkahan03 ይላኩ።",
      btnOpenTelegram: "@Donkahan03 ን በTelegram ይክፈቱ",
      btnClose: "ዝጋ",

      errName: "እባክዎ ሙሉ ስምዎን ያስገቡ።",
      errEmail: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ።",
      errPhone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።",
      errBrand: "እባክዎ የድርጅትዎን ስም ያስገቡ።",
      errLocation: "እባክዎ ከተማ ወይም ሀገር ያስገቡ።",
      errCollabType: "እባክዎ ቢያንስ አንድ የትብብር ዓይነት ይምረጡ።",
      errStartDate: "እባክዎ የሚጀምርበትን ቀን ይምረጡ።",
      errAudience: "እባክዎ ዒላማ ተጠቃሚዎችን ባጭሩ ይግለጹ።",
      errDesc: "እባክዎ ቢያንስ 30 ፊደላት ያለው ማብራሪያ ይጻፉ።",
      errConsent: "እባክዎ መስማማትዎን ያረጋግጡ።",

      websiteBy: "ድህረ ገጽ በ"
    },

    om: {
      navHome: "Jalqabaa",
      navAbout: "Waa'ee koo",
      navServices: "Tajaajila",
      navVideos: "Viidiyoo",
      navPhotos: "Suuraa",
      navCollab: "Walta'iinsa",
      languageLabel: "Afaan",

      heroPillLabel: "Uumaa Aartii Lolaa · Itoophiyaa",
      heroSub1: "Ch'ampiyoonii Taekwondo. Loltuu MMA.",
      heroSub2: "Itoophiyaaf nan loluu.",
      btnWatchTikTok: "TikTok irratti ilaali",
      btnWorkWithSedo: "Sedo wajjin hojjedhaa",
      statFollowers: "Hordoftoota",
      statLikes: "Jaalala",
      statCampaigns: "Daldala fi Kampaaniilee: [NUMBER]",
      partnerPlaceholder: "Asxaan Hiriyoota Daldalaa Dhihootti · Walta'iinsa · ",

      aboutHeading: "Seensa koo",
      aboutBio: "Dhiiga gootummaa Itoophiyaa keessaa kan dhalate Sedon, dandeettii lola Taekwondo fi MMA olaanaa qabuun biyya isaa bakka bu'ee lola. Waggoota [YEAR] hanga [YEAR] keessatti dorgommiiwwan irratti [TITLE] argachuun injifannoowwan [WIN] galmeessiseera. Addunyaa irratti Mootii Habashaa jedhamee beekama.",
      pullQuote: "Aangoo. Of-danda'uu. Naamusa.",
      btnPressKit: "Press kit buufadhu",
      pressKitComingSoon: "Press kit dhihootti qophaa'a",
      timelineItem1: "Shaampiyoonaa Taekwondo Biyyooleessaa [TITLE]",
      timelineItem1Desc: "Badhaasa warqee fi injifannoo guutuu.",
      timelineItem2: "Dorgommii MMA Jalqabaa Injifannoo [WIN] Marsaa 1ffaan",
      timelineItem2Desc: "Dorgommii dafee xumuramee injifannoo argame.",
      timelineItem3: "Dorgommii Lola Ardii Afrikaa fi [TITLE]",
      timelineItem3Desc: "Itoophiyaa bakka bu'uun dorgommii guddaa irratti hirmaachuu.",
      timelineItem4: "Hordoftoota Miidiyaa Hawaasaa Miliyoona 2 Ol Horachuu",
      timelineItem4Desc: "Guddina saffisaa fi walta'iinsa daldalaa jalqabuu.",

      servicesHeading: "Sedo wajjin hojjedhaa",
      servicesLead: "Dhaabbilee gurguddoo, oomishaalee ispoortii fi qophiilee adda addaatiif carraa walta'iinsaa.",
      service1Title: "Beeksisa kaffaltii qabu",
      service1Desc: "Viidiyoo qulqullina olaanaa qabu keessatti oomisha keessan beeksisuu.",
      service2Title: "Ispoonsara Dhaabbataa",
      service2Desc: "Dhaabbata keessan hordoftoota miliyoonaan lakkaa'aman wajjin walqunnamsiisuu.",
      service3Title: "Oomisha beeksisuu",
      service3Desc: "Uffata fi meeshaalee ispoortii amansiisaa ta'een dhiyeessuu.",
      service4Title: "Duula Miidiyaa Hawaasaa",
      service4Desc: "Ummata hedduu bira gahuuf qophiiwwan miidiyaa irratti xiyyeeffatan.",
      service5Title: "Sirna irratti argamuu",
      service5Desc: "Qophiiwwan dhaabbilee irratti qaamaan argamuun kabaja kennuu.",
      service6Title: "Halkan lolaa irratti beeksisuu",
      service6Desc: "Torban lolaa irratti asxaa dhaabbata keessanii mul'isuu.",
      service7Title: "Qabiyyee Daldalaa Hojjechuu",
      service7Desc: "Fuula dhaabbata keessaniitiif viidiyoowwan addaa qopheessuu.",
      service8Title: "Ambaasaaddarummaa",
      service8Desc: "Cimina fi kabaja agarsiisuun dhaabbata keessan bakka bu'uu.",
      btnBookService: "Gaafadhu",

      testimonialsHeading: "Ragaa Hiriyoota Daldalaa",
      photosHeading: "Suuraa",
      photosHint: "Suuraa ilaaluuf dabarsaa",

      videoHeading: "Viidiyoo dhihoo ilaalaa",
      videoDesc: "Shaakala cimaa fi qophii dorgommii hordoftoota miliyoona 2.4 ol ta'aniin daawwatamu.",
      videoBrand: "Sedo Martial Art",
      videoMotto: "Itoophiyaaf nan loluu!",
      videoCtaHint: "Shaakala guyyaa guyyaa hordofaa፦",
      btnFollowTikTokHandle: "TikTok irratti hordofaa @sedomartialart3",

      collabHeading: "Walta'iinsa Daldalaa",
      collabSubhead: "Yaada walta'iinsaa ykn beeksisaa kallattiin hoggansa Sedotti ergaa.",
      stepCounter: "Sadarkaa {step}/6",
      step1Intro: "Odeeffannoo waa'ee keessanii.",
      labelName: "Maqaa Guutuu *",
      labelEmail: "Imeelii *",
      labelPhone: "Lakkoofsa Bilbilaa *",
      labelContactMethod: "Karaa Quunnamtii Filatamaa *",
      step2Intro: "Waa'ee dhaabbata keessanii nuu himaa.",
      labelBrand: "Maqaa Dhaabbata *",
      labelBusinessType: "Gosa Daldalaa *",
      labelLocation: "Magaalaa ykn Biyya *",
      labelWebsite: "Weebsaayitii ykn Miidiyaa Hawaasaa",
      step3Intro: "Gosa walta'iinsaa filadhaa.",
      labelOther: "Kan biraa",
      labelGoal: "Kaayyoo Duulaa *",
      labelStartDate: "Guyyaa Jalqabaa *",
      labelAudience: "Ummata Xiyyeeffatame *",
      step4Intro: "Bal'inaan ibsaa.",
      labelDesc: "Ibsa Daldalaa ykn Duulaa (Qubee 30 ol) *",
      labelSource: "Sedo akkamitti beektan? *",
      step5Intro: "Erguuf dura mirkaneeffadhaa.",
      reviewSec1: "Quunnamtii",
      reviewSec2: "Dhaabbata",
      reviewSec3: "Walta'iinsa",
      reviewSec4: "Ibsa",
      btnEdit: "Gulaali",
      consentText: "Gaaffii kanaan na quunnamuuf walii galeera",
      sendReadyTitle: "Telegram irratti erguuf qophiidha",
      sendReadyDesc: "Qabduu armaan gadii tuquun ergaan keessan qophaa'ee gara @Donkahan03tti ergama.",
      btnBack: "Duubatti",
      btnNext: "Itti fufi",
      btnSendRequest: "Gaaffii ergi",

      modalTitle: "Gaaffiin Qophaa'eera",
      copiedBadge: "Gara kuusaa (Clipboard) keessanitti garagalchameera",
      modalInstructions: "Tarree keessaa @Donkahan03 filadhaa 'Send' tuqaa. Yoo banamuu dide, paste gochuun ergaa.",
      btnOpenTelegram: "@Donkahan03 Telegram irratti bani",
      btnClose: "Cufi",

      errName: "Maaloo maqaa keessan guutuu galchaa.",
      errEmail: "Maaloo imeelii sirrii galchaa.",
      errPhone: "Maaloo lakkoofsa bilbilaa sirrii galchaa.",
      errBrand: "Maaloo maqaa dhaabbata keessanii galchaa.",
      errLocation: "Maaloo magaalaa ykn biyya galchaa.",
      errCollabType: "Maaloo yoo xiqqaate gosa walta'iinsaa tokko filadhaa.",
      errStartDate: "Maaloo guyyaa jalqabaa filadhaa.",
      errAudience: "Maaloo ummata xiyyeeffatame ibsaa.",
      errDesc: "Maaloo ibsa yoo xiqqaate qubee 30 qabu barreessaa.",
      errConsent: "Maaloo walii galuu keessan mirkaneessaa.",

      websiteBy: "Weebsaayitii kan hojjete"
    },

    ar: {
      navHome: "الرئيسية",
      navAbout: "عني",
      navServices: "الخدمات",
      navVideos: "الفيديوهات",
      navPhotos: "الصور",
      navCollab: "التعاون",
      languageLabel: "اللغة",

      heroPillLabel: "مبدع فنون قتالية · إثيوبيا",
      heroSub1: "بطل التايكوندو. مقاتل MMA.",
      heroSub2: "أقاتل من أجل إثيوبيا.",
      btnWatchTikTok: "شاهد على TikTok",
      btnWorkWithSedo: "اعمل مع سيدو",
      statFollowers: "متابع",
      statLikes: "إعجاب",
      statCampaigns: "الشراكات والحملات التجارية: [NUMBER]",
      partnerPlaceholder: "شعارات الشركاء قريباً · شراكات العلامات التجارية · الرعاة الرسميون · ",

      aboutHeading: "مسيرتي",
      aboutBio: "انطلاقاً من التراث الإثيوبي الأصيل، يجسد سيدو الروح القتالية الإفريقية التي لا تلين. خلال مشاركاته في بطولات التايكوندو وMMA بين [YEAR] و[YEAR]، نال ألقاب [TITLE] وحقق [WIN] انتصارات قاضية. يُعرف عالمياً بملك الحبشة، ويربط بين الانضباط الرياضي والجمهور الواسع الذي يتجاوز 2.4 مليون متابع.",
      pullQuote: "القوة. الفخر. الانضباط.",
      btnPressKit: "تحميل الملف الصحفي",
      pressKitComingSoon: "الملف الصحفي قريباً",
      timelineItem1: "بطولة التايكوندو الوطنية [TITLE]",
      timelineItem1Desc: "ميدالية ذهبية وأداء بطولي مميز.",
      timelineItem2: "أول ظهور احترافي في MMA مع فوز في الجولة الأولى [WIN]",
      timelineItem2Desc: "إنهاء حاسم من الجولة الأولى بضربات قاضية.",
      timelineItem3: "نزال بطولة إفريقيا ومنافسة [TITLE]",
      timelineItem3Desc: "النزال الرئيسي لتمثيل إثيوبيا على المستوى القاري.",
      timelineItem4: "تجاوز المتابعين عبر المنصات الرقمية حاجز المليوني متابع عالمياً",
      timelineItem4Desc: "انتشار واسع وانطلاق الشراكات التجارية الدولية.",

      servicesHeading: "اعمل مع سيدو",
      servicesLead: "فرص شراكة مصممة للعلامات التجارية العالمية، والشركات الرياضية، وترويج الفعاليات الكبرى.",
      service1Title: "إعلانات مدفوعة",
      service1Desc: "مقاطع فيديو ترويجية مؤثرة ومندمجة بتناغم ضمن محتوى التدريب وأسلوب الحياة.",
      service2Title: "رعاية العلامات التجارية",
      service2Desc: "شراكات تسويقية شاملة ومتعددة المنصات تربط علامتك التجارية بملايين المتابعين.",
      service3Title: "ترويج المنتجات",
      service3Desc: "عروض عملية واستعراض للمعدات والأزياء الرياضية مع تزكية حقيقية وموثوقة.",
      service4Title: "حملات التواصل الاجتماعي",
      service4Desc: "إطلاق حملات تفاعلية مصممة لضمان أعلى نسب مشاهدة وتأثير ملموس.",
      service5Title: "حضور الفعاليات",
      service5Desc: "حضور كضيف شرف وتقديم ورش عمل تدريبية وظهور خاص في الفعاليات والمؤتمرات.",
      service6Title: "ترويج ليالي القتال",
      service6Desc: "إبراز علامتك التجارية على المعدات الرسمية خلال أسبوع النزال والوزن.",
      service7Title: "صناعة المحتوى التجاري",
      service7Desc: "إنتاج مواد إعلامية احترافية مصممة خصيصاً للنشر على منصات شركتكم الرسمية.",
      service8Title: "شراكات السفراء",
      service8Desc: "تمثيل حصري طويل الأمد يعكس القوة والانضباط والتميز لمؤسستكم.",
      btnBookService: "استفسر",

      testimonialsHeading: "آراء الشركاء",
      photosHeading: "الصور",
      photosHint: "مرر لمشاهدة الصور",

      videoHeading: "شاهد أحدث المقاطع",
      videoDesc: "مباشرة من الصالة إلى حلبة النزال. شاهد التدريبات القوية ودروس الفنون القتالية التي يتابعها أكثر من 2.4 مليون متابع.",
      videoBrand: "سيدو مارشال آرت",
      videoMotto: "أقاتل من أجل إثيوبيا!",
      videoCtaHint: "تابع التدريبات اليومية:",
      btnFollowTikTokHandle: "تابع على TikTok @sedomartialart3",

      collabHeading: "طلب تعاون تجاري",
      collabSubhead: "أرسل مقترحك التجاري مباشرة إلى إدارة أعمال سيدو الرسمية.",
      stepCounter: "الخطوة {step} من 6",
      step1Intro: "أخبرنا عن معلومات التواصل الخاصة بك.",
      labelName: "الاسم الكامل *",
      labelEmail: "البريد الإلكتروني *",
      labelPhone: "رقم الهاتف *",
      labelContactMethod: "طريقة التواصل المفضلة *",
      step2Intro: "أخبرنا عن شركتك أو علامتك التجارية.",
      labelBrand: "اسم الشركة أو العلامة التجارية *",
      labelBusinessType: "نوع النشاط *",
      labelLocation: "المدينة أو الدولة *",
      labelWebsite: "الموقع الإلكتروني أو رابط التواصل",
      step3Intro: "اختر نوع التعاون المطلوب.",
      labelOther: "أخرى",
      labelGoal: "هدف الحملة *",
      labelStartDate: "تاريخ البدء المفضل *",
      labelAudience: "الجمهور المستهدف (وصف موجز) *",
      step4Intro: "شاركنا رؤية وتفاصيل هذا التعاون.",
      labelDesc: "وصف الحملة أو النشاط (30 حرفاً على الأقل) *",
      labelSource: "كيف تعرفت على سيدو؟ *",
      step5Intro: "راجع تفاصيل الطلب قبل الإرسال.",
      reviewSec1: "معلومات التواصل",
      reviewSec2: "الشركة والنشاط",
      reviewSec3: "نوع التعاون",
      reviewSec4: "التفاصيل والملاحظات",
      btnEdit: "تعديل",
      consentText: "أوافق على التواصل معي بخصوص هذا الطلب",
      sendReadyTitle: "جاهز للتواصل عبر تيليجرام",
      sendReadyDesc: "بالضغط على الزر أدناه سيتم تجهيز رسالتك ونسخها إلى الحافظة وتوجيهك مباشرة إلى تيليجرام (@Donkahan03).",
      btnBack: "السابق",
      btnNext: "التالي",
      btnSendRequest: "أرسل الطلب",

      modalTitle: "الطلب جاهز للإرسال",
      copiedBadge: "تم نسخ النص إلى الحافظة",
      modalInstructions: "اختر @Donkahan03 في تيليجرام واضغط إرسال. إذا لم تفتح الرسالة تلقائياً، الصق النص المنسوخ في المحادثة مع @Donkahan03.",
      btnOpenTelegram: "فتح @Donkahan03 على تيليجرام",
      btnClose: "إغلاق",

      errName: "يرجى إدخال الاسم الكامل.",
      errEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      errPhone: "يرجى إدخال رقم هاتف صحيح.",
      errBrand: "يرجى إدخال اسم الشركة أو العلامة التجارية.",
      errLocation: "يرجى إدخال المدينة أو الدولة.",
      errCollabType: "يرجى اختيار نوع تعاون واحد على الأقل.",
      errStartDate: "يرجى تحديد تاريخ البدء المفضل.",
      errAudience: "يرجى كتابة وصف موجز للجمهور المستهدف.",
      errDesc: "يرجى كتابة وصف لا يقل عن 30 حرفاً.",
      errConsent: "يرجى تأكيد الموافقة على التواصل.",

      websiteBy: "تصميم الموقع بواسطة"
    }
  };

  // State
  let currentLang = 'en';
  let currentStep = 1;
  const totalSteps = 6;
  const formData = {
    name: '',
    email: '',
    phone: '',
    contactMethod: 'Telegram',
    brand: '',
    businessType: 'Health and fitness',
    location: '',
    website: '',
    collabTypes: [],
    goal: 'Awareness',
    startDate: '',
    audience: '',
    description: '',
    source: 'TikTok'
  };

  // Safe Web Storage helpers
  function safeGet(storage, key) {
    try { return storage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(storage, key, val) {
    try { storage.setItem(key, val); } catch (e) { }
  }

  // ==========================================================================
  // 1. STATUS BADGE INITIALIZER (Idea 12)
  // ==========================================================================
  function initStatusBadge() {
    const textEl = document.getElementById('status-badge-text');
    const badgeEl = document.getElementById('hero-status-badge');
    const dotEl = badgeEl ? badgeEl.querySelector('.status-dot') : null;

    if (textEl && STATUS_CONFIG.text) {
      textEl.textContent = STATUS_CONFIG.text;
    }
    if (badgeEl && STATUS_CONFIG.color) {
      badgeEl.style.borderColor = STATUS_CONFIG.color;
      badgeEl.style.backgroundColor = `${STATUS_CONFIG.color}1A`;
    }
    if (dotEl && STATUS_CONFIG.color) {
      dotEl.style.backgroundColor = STATUS_CONFIG.color;
      if (!STATUS_CONFIG.pulse) dotEl.style.animation = 'none';
    }
  }

  // ==========================================================================
  // 2. LOADING INTRO SCREEN
  // ==========================================================================
  function initIntro() {
    const introEl = document.getElementById('intro-screen');
    if (!introEl) return;

    // Hard safety net: guarantee overlay is completely gone after 3 seconds regardless of animation state
    const safetyTimer = setTimeout(() => {
      introEl.classList.add('is-lifted');
      introEl.style.display = 'none';
    }, 3000);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeen = safeGet(sessionStorage, 'sedo_intro_lifted');

    if (prefersReducedMotion || hasSeen === 'true') {
      clearTimeout(safetyTimer);
      introEl.style.display = 'none';
      return;
    }

    setTimeout(() => {
      introEl.classList.add('is-lifted');
      safeSet(sessionStorage, 'sedo_intro_lifted', 'true');
      setTimeout(() => {
        clearTimeout(safetyTimer);
        introEl.style.display = 'none';
      }, 900);
    }, 1600);
  }

  // ==========================================================================
  // 3. CUSTOM CURSOR & MAGNETIC BUTTONS (Idea 4)
  // ==========================================================================
  function initCursorAndMagnets() {
    const cursor = document.getElementById('custom-cursor');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;

    if (!cursor || prefersReducedMotion || isTouch) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function renderCursor() {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactives = document.querySelectorAll('a, button, .btn, .gallery-card, .fight-card-row, select, input, textarea');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });

    // Magnetic buttons (Idea 4)
    const magnets = document.querySelectorAll('.magnetic-btn');
    magnets.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate3d(${x * 0.25}px, ${y * 0.25}px, 0)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  }

  // ==========================================================================
  // 4. HEADER NAVIGATION & SCROLLSPY
  // ==========================================================================
  function initHeader() {
    const header = document.getElementById('site-header');
    const toggleBtn = document.getElementById('mobile-toggle');
    const overlay = document.getElementById('mobile-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });

    if (toggleBtn && overlay) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isOpen);
        overlay.setAttribute('aria-hidden', isOpen);
        overlay.classList.toggle('is-open', !isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          toggleBtn.setAttribute('aria-expanded', 'false');
          overlay.setAttribute('aria-hidden', 'true');
          overlay.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    }

    // ScrollSpy for active nav underline
    const sections = ['hero', 'about', 'services', 'videos', 'photos', 'collab'];
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 120;
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('data-nav') === id);
            });
          }
        }
      });
    }, { passive: true });
  }

  // ==========================================================================
  // 5. HERO CAROUSEL & CURSOR SPOTLIGHT
  // ==========================================================================
  function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const spotlight = document.getElementById('hero-spotlight');
    const heroEl = document.getElementById('hero');

    if (slides.length === 0) return;

    let current = 0;
    let timer = null;

    function goToSlide(idx) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-selected', 'false');

      current = (idx + slides.length) % slides.length;

      slides[current].classList.add('active');
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-selected', 'true');
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(() => goToSlide(current + 1), 6000);
    }
    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(current + 1); startAuto(); });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => { goToSlide(idx); startAuto(); });
    });

    // Touch swipe for phone
    let touchStartX = 0;
    heroEl.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    heroEl.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goToSlide(current - 1);
        else goToSlide(current + 1);
        startAuto();
      }
    }, { passive: true });

    startAuto();

    // Spotlight cursor follow (desktop)
    if (spotlight && !window.matchMedia('(hover: none)').matches) {
      heroEl.addEventListener('mousemove', (e) => {
        const rect = heroEl.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        spotlight.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }, { passive: true });
    }
  }

  // ==========================================================================
  // 6. ANIMATED COUNTERS (Idea 8)
  // ==========================================================================
  function initCounters() {
    const fEl = document.getElementById('counter-followers');
    const lEl = document.getElementById('counter-likes');
    const cEl = document.getElementById('counter-campaigns');

    let ran = false;

    function runCounter(el, target, suffix, isFloat) {
      let current = 0;
      const duration = 1600;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;

      const t = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(t);
        }
        el.textContent = isFloat ? `${current.toFixed(1)}${suffix}` : `${Math.floor(current)}${suffix}`;
      }, stepTime);
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !ran) {
          ran = true;
          if (fEl) runCounter(fEl, 2.4, 'M', true);
          if (lEl) runCounter(lEl, 61.2, 'M', true);
          if (cEl) runCounter(cEl, 15, '+', false);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });

    const statsRow = document.querySelector('.hero-stats-row');
    if (statsRow) observer.observe(statsRow);
  }

  // ==========================================================================
  // 7. MOTION: CLIP-WIPE & SPLIT-LETTER HEADINGS (Ideas 6 & 7)
  // ==========================================================================
  function initHeadingAndClipReveals() {
    const headings = document.querySelectorAll('.split-letter-heading');
    headings.forEach(heading => {
      const text = heading.textContent.trim();
      if (!text) return;
      heading.innerHTML = '';
      text.split('').forEach((ch, idx) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.transitionDelay = `${idx * 0.02}s`;
        heading.appendChild(span);
      });
    });

    const clipSections = document.querySelectorAll('.clip-wipe-section');

    // If IntersectionObserver is not supported, reveal everything immediately
    if (!('IntersectionObserver' in window)) {
      clipSections.forEach(sec => sec.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '50px 0px 0px 0px'
    });

    clipSections.forEach(sec => {
      // If already in viewport on page load, reveal immediately
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        sec.classList.add('is-revealed');
      } else {
        observer.observe(sec);
      }
    });

    // Priority 1 Safety Net: after 2 seconds, remove any remaining hidden state so nothing stays blank
    setTimeout(() => {
      clipSections.forEach(sec => sec.classList.add('is-revealed'));
    }, 2000);
  }

  // ==========================================================================
  // 8. ABOUT PARALLAX & TIMELINE SCROLL (Ideas 9 & 13)
  // ==========================================================================
  function initAboutMotion() {
    const img = document.getElementById('portrait-parallax-img');
    const wrap = document.getElementById('portrait-parallax-wrap');
    const line = document.getElementById('timeline-progress-line');
    const timeline = document.querySelector('.timeline-block');
    const milestones = document.querySelectorAll('.milestone-item');

    // Parallax
    if (img && wrap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', () => {
        const rect = wrap.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const shift = (rect.top / window.innerHeight) * 30;
          img.style.transform = `translate3d(0, ${shift}px, 0)`;
        }
      }, { passive: true });
    }

    // Timeline progress line
    if (line && timeline) {
      window.addEventListener('scroll', () => {
        const rect = timeline.getBoundingClientRect();
        const start = window.innerHeight * 0.85;
        if (rect.top < start) {
          const progress = Math.min(Math.max((start - rect.top) / (rect.height * 0.8), 0), 1);
          line.style.width = `${progress * 100}%`;

          milestones.forEach((item, idx) => {
            const threshold = idx / (milestones.length - 1 || 1);
            item.classList.toggle('active', progress >= threshold);
          });
        }
      }, { passive: true });
    }

    // Press kit button check (Idea 18)
    const pressKitBtn = document.getElementById('press-kit-btn');
    const pressKitNote = document.getElementById('press-kit-note');
    if (pressKitBtn && pressKitNote) {
      fetch('assets/press/sedo-press-kit.pdf', { method: 'HEAD' })
        .then(res => {
          if (!res.ok) {
            pressKitBtn.style.display = 'none';
            pressKitNote.style.display = 'inline-block';
          }
        })
        .catch(() => {
          pressKitBtn.style.display = 'none';
          pressKitNote.style.display = 'inline-block';
        });
    }
  }

  // ==========================================================================
  // 9. TESTIMONIALS SLIDER (Idea 19)
  // ==========================================================================
  function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.t-dot');
    if (slides.length === 0) return;

    let cur = 0;
    function show(idx) {
      slides[cur].classList.remove('active');
      dots[cur].classList.remove('active');
      cur = (idx + slides.length) % slides.length;
      slides[cur].classList.add('active');
      dots[cur].classList.add('active');
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => show(idx));
    });

    setInterval(() => show(cur + 1), 7000);
  }

  // ==========================================================================
  // 10. PHOTOS & LIGHTBOX (Idea 5)
  // ==========================================================================
  function initPhotosAndLightbox() {
    const cards = document.querySelectorAll('.gallery-card');
    const modal = document.getElementById('gallery-lightbox');
    const modalImg = document.getElementById('lb-image');
    const closeBtn = document.getElementById('lb-close');
    const prevBtn = document.getElementById('lb-prev');
    const nextBtn = document.getElementById('lb-next');

    if (!modal || cards.length === 0) return;

    const list = Array.from(cards).map(c => {
      const im = c.querySelector('img');
      return { src: im ? im.src : '', alt: im ? im.alt : '' };
    });

    let idx = 0;

    function open(i) {
      idx = (i + list.length) % list.length;
      modalImg.src = list[idx].src;
      modalImg.alt = list[idx].alt;
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (cards[idx]) cards[idx].focus();
    }

    cards.forEach((c, i) => {
      c.addEventListener('click', () => open(i));
      c.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(i);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (prevBtn) prevBtn.addEventListener('click', () => open(idx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => open(idx + 1));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    window.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('is-active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') open(idx - 1);
      if (e.key === 'ArrowRight') open(idx + 1);
    });

    // Touch swipe in lightbox
    let tStartX = 0;
    modal.addEventListener('touchstart', (e) => {
      tStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    modal.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - tStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) open(idx - 1);
        else open(idx + 1);
      }
    }, { passive: true });
  }

  // ==========================================================================
  // 11. VIDEO (Unmute on hover on desktop, tap-to-unmute on phone - Idea 11)
  // ==========================================================================
  function initVideo() {
    const video = document.getElementById('sedo-main-video');
    const panel = document.getElementById('video-panel-wrapper');
    const mobileSoundBtn = document.getElementById('mobile-unmute-btn');
    const iconMuted = document.getElementById('sound-icon-muted');
    const iconUnmuted = document.getElementById('sound-icon-unmuted');
    const fallbackImg = document.getElementById('video-fallback-img');

    if (!video || !panel) return;

    let srcSet = false;

    // Fallback handler if video fails to load
    video.addEventListener('error', () => {
      if (fallbackImg) fallbackImg.style.display = 'block';
      video.style.display = 'none';
      if (mobileSoundBtn) mobileSoundBtn.style.display = 'none';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!srcSet && video.dataset.src) {
            video.src = video.dataset.src;
            srcSet = true;
          }
          const p = video.play();
          if (p) p.catch(() => {});
        } else {
          if (srcSet) video.pause();
        }
      });
    }, {
      rootMargin: '120px 0px',
      threshold: 0.25
    });

    observer.observe(video);

    // Desktop: unmute on hover (Idea 11)
    if (!window.matchMedia('(hover: none)').matches) {
      panel.addEventListener('mouseenter', () => {
        video.muted = false;
      });
      panel.addEventListener('mouseleave', () => {
        video.muted = true;
      });
    }

    // Phone: tap-to-unmute button
    if (mobileSoundBtn) {
      mobileSoundBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        video.muted = !video.muted;
        if (iconMuted && iconUnmuted) {
          iconMuted.style.display = video.muted ? 'inline' : 'none';
          iconUnmuted.style.display = video.muted ? 'none' : 'inline';
        }
      });
    }
  }

  // ==========================================================================
  // 12. 6-STEP COLLAB FORM (Ideas 15 & 16)
  // ==========================================================================
  function updateFormProgress() {
    const stepLabel = document.getElementById('collab-step-label');
    const fill = document.querySelector('.collab-progress-fill');
    const rail = document.getElementById('form-progress-bar');
    const t = TRANSLATIONS[currentLang];

    if (stepLabel && t) {
      stepLabel.textContent = t.stepCounter.replace('{step}', currentStep);
    }
    if (fill) {
      fill.style.width = `${(currentStep / totalSteps) * 100}%`;
    }
    if (rail) {
      rail.setAttribute('aria-valuenow', currentStep);
    }
  }

  function validateStep(step) {
    const t = TRANSLATIONS[currentLang];

    if (step === 1) {
      const name = document.getElementById('field-name');
      const email = document.getElementById('field-email');
      const phone = document.getElementById('field-phone');
      const method = document.getElementById('field-contact-method');
      const errName = document.getElementById('err-name');
      const errEmail = document.getElementById('err-email');
      const errPhone = document.getElementById('err-phone');

      let valid = true;
      if (!name.value.trim() || name.value.trim().length < 2) {
        errName.textContent = t.errName;
        valid = false;
      } else errName.textContent = '';

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email.value.trim())) {
        errEmail.textContent = t.errEmail;
        valid = false;
      } else errEmail.textContent = '';

      const phoneRe = /^[\+\d\s\-\(\)\.]{7,25}$/;
      if (!phoneRe.test(phone.value.trim()) || phone.value.replace(/\D/g, '').length < 7) {
        errPhone.textContent = t.errPhone;
        valid = false;
      } else errPhone.textContent = '';

      if (valid) {
        formData.name = name.value.trim();
        formData.email = email.value.trim();
        formData.phone = phone.value.trim();
        formData.contactMethod = method.value;
      }
      return valid;
    }

    if (step === 2) {
      const brand = document.getElementById('field-brand');
      const btype = document.getElementById('field-business-type');
      const loc = document.getElementById('field-location');
      const web = document.getElementById('field-website');
      const errBrand = document.getElementById('err-brand');
      const errLoc = document.getElementById('err-location');

      let valid = true;
      if (!brand.value.trim() || brand.value.trim().length < 2) {
        errBrand.textContent = t.errBrand;
        valid = false;
      } else errBrand.textContent = '';

      if (!loc.value.trim() || loc.value.trim().length < 2) {
        errLoc.textContent = t.errLocation;
        valid = false;
      } else errLoc.textContent = '';

      if (valid) {
        formData.brand = brand.value.trim();
        formData.businessType = btype.value;
        formData.location = loc.value.trim();
        formData.website = web.value.trim();
      }
      return valid;
    }

    if (step === 3) {
      const checked = Array.from(document.querySelectorAll('input[name="collabTypes"]:checked')).map(c => c.value);
      const goal = document.getElementById('field-goal');
      const sdate = document.getElementById('field-start-date');
      const aud = document.getElementById('field-audience');
      const errTypes = document.getElementById('err-collab-types');
      const errDate = document.getElementById('err-start-date');
      const errAud = document.getElementById('err-audience');

      let valid = true;
      if (checked.length === 0) {
        errTypes.textContent = t.errCollabType;
        valid = false;
      } else errTypes.textContent = '';

      if (!sdate.value) {
        errDate.textContent = t.errStartDate;
        valid = false;
      } else errDate.textContent = '';

      if (!aud.value.trim() || aud.value.trim().length < 3) {
        errAud.textContent = t.errAudience;
        valid = false;
      } else errAud.textContent = '';

      if (valid) {
        formData.collabTypes = checked;
        formData.goal = goal.value;
        formData.startDate = sdate.value;
        formData.audience = aud.value.trim();
      }
      return valid;
    }

    if (step === 4) {
      const desc = document.getElementById('field-desc');
      const src = document.getElementById('field-source');
      const errDesc = document.getElementById('err-desc');

      if (!desc.value.trim() || desc.value.trim().length < 30) {
        errDesc.textContent = t.errDesc;
        return false;
      }
      errDesc.textContent = '';
      formData.description = desc.value.trim();
      formData.source = src.value;
      return true;
    }

    if (step === 5) {
      const consent = document.getElementById('field-consent');
      const errCon = document.getElementById('err-consent');
      if (!consent.checked) {
        errCon.textContent = t.errConsent;
        return false;
      }
      errCon.textContent = '';
      return true;
    }

    return true;
  }

  function populateReviewCard() {
    const cLine = document.getElementById('rev-contact-line');
    const bLine = document.getElementById('rev-business-line');
    const colLine = document.getElementById('rev-collab-line');
    const dLine = document.getElementById('rev-desc-line');

    if (cLine) cLine.innerHTML = `<strong>${formData.name}</strong> • ${formData.email} • ${formData.phone} (via ${formData.contactMethod})`;
    if (bLine) bLine.innerHTML = `<strong>${formData.brand}</strong> • ${formData.businessType} • ${formData.location} ${formData.website ? `(${formData.website})` : ''}`;
    if (colLine) colLine.innerHTML = `Types: <strong>${formData.collabTypes.join(', ')}</strong><br>Goal: ${formData.goal} • Start: ${formData.startDate} • Audience: ${formData.audience}`;
    if (dLine) dLine.innerHTML = `"${formData.description}"<br><small>Discovered via: ${formData.source}</small>`;
  }

  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;
    currentStep = step;

    const panes = document.querySelectorAll('.form-step-pane');
    panes.forEach(p => {
      const s = parseInt(p.getAttribute('data-step'), 10);
      p.classList.toggle('active', s === currentStep);
    });

    const prevBtn = document.getElementById('btn-form-back');
    const nextBtn = document.getElementById('btn-form-next');
    const submitBtn = document.getElementById('btn-form-submit');

    if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? 'inline-flex' : 'none';
    if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';

    if (currentStep === 5) populateReviewCard();

    updateFormProgress();

    const activePane = document.querySelector(`.form-step-pane[data-step="${currentStep}"]`);
    if (activePane) {
      const inp = activePane.querySelector('input, select, textarea');
      if (inp) inp.focus();
    }
  }

  async function copyToClipboard(text) {
    let ok = false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        ok = true;
      } catch (e) { ok = false; }
    }
    if (!ok) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
    }
    return ok;
  }

  function initCollabForm() {
    const form = document.getElementById('collab-multistep-form');
    const nextBtn = document.getElementById('btn-form-next');
    const backBtn = document.getElementById('btn-form-back');
    const submitBtn = document.getElementById('btn-form-submit');
    const descArea = document.getElementById('field-desc');
    const charCountPill = document.getElementById('desc-char-count');
    const editBtns = document.querySelectorAll('.review-edit-btn');
    const modal = document.getElementById('telegram-ready-modal');
    const modalClose = document.getElementById('tg-modal-close');
    const copyBadge = document.getElementById('tg-copy-badge');

    if (!form) return;

    // Live character count
    if (descArea && charCountPill) {
      descArea.addEventListener('input', () => {
        const len = descArea.value.length;
        charCountPill.textContent = `${len} / 30 min`;
        charCountPill.style.color = len >= 30 ? 'var(--sig-red)' : 'var(--warm-grey)';
      });
    }

    // Step navigation
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) goToStep(currentStep + 1);
      });
    }
    if (backBtn) {
      backBtn.addEventListener('click', () => goToStep(currentStep - 1));
    }

    editBtns.forEach(b => {
      b.addEventListener('click', () => {
        const targetStep = parseInt(b.getAttribute('data-goto'), 10);
        goToStep(targetStep);
      });
    });

    // Enter key advances
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (e.target.tagName.toLowerCase() === 'textarea') return;
        e.preventDefault();
        if (currentStep < totalSteps) {
          if (validateStep(currentStep)) goToStep(currentStep + 1);
        } else {
          form.requestSubmit();
        }
      }
    });

    // Submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateStep(currentStep)) return;

      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      const now = new Date();
      const submittedTime = now.toLocaleString();

      const message = 
`New collab request for Sedo
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred contact: ${formData.contactMethod}
Brand: ${formData.brand}
Business type: ${formData.businessType}
Location: ${formData.location}
Website or social: ${formData.website || 'N/A'}
Collaboration: ${formData.collabTypes.join(', ')}
Goal: ${formData.goal}
Target audience: ${formData.audience}
Start date: ${formData.startDate}
About the business: ${formData.description}
Found us via: ${formData.source}
Submitted: ${submittedTime}`;

      await new Promise(r => setTimeout(r, 600));

      const copied = await copyToClipboard(message);

      const siteHost = window.location.host || 'sedomartialart.vercel.app';
      const telegramShareUrl = `https://t.me/share/url?url=https%3A%2F%2F${encodeURIComponent(siteHost)}&text=${encodeURIComponent(message)}`;

      window.open(telegramShareUrl, '_blank', 'noopener,noreferrer');

      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;

      // Open Modal
      if (modal) {
        if (copyBadge) copyBadge.style.display = copied ? 'inline-block' : 'none';
        modal.classList.add('is-active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (modalClose) modalClose.focus();
      }
    });

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (modal && modal.classList.contains('is-active') && e.key === 'Escape') closeModal();
    });
  }

  // ==========================================================================
  // 13. 4-LANGUAGE LOCALIZATION & RTL
  // ==========================================================================
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    currentLang = lang;
    safeSet(localStorage, 'sedo_lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const dSelect = document.getElementById('lang-select');
    const mSelect = document.getElementById('mobile-lang-select');
    if (dSelect) dSelect.value = lang;
    if (mSelect) mSelect.value = lang;

    // Sync mobile lang pills
    const mobilePills = document.querySelectorAll('.lang-pill-btn');
    mobilePills.forEach(pill => {
      if (pill.getAttribute('data-lang') === lang) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        if (key === 'stepCounter') {
          el.textContent = TRANSLATIONS[lang].stepCounter.replace('{step}', currentStep);
        } else {
          el.textContent = TRANSLATIONS[lang][key];
        }
      }
    });

    updateFormProgress();
  }

  function initLanguage() {
    const saved = safeGet(localStorage, 'sedo_lang') || 'en';
    const dSelect = document.getElementById('lang-select');
    const mSelect = document.getElementById('mobile-lang-select');

    if (dSelect) dSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    if (mSelect) mSelect.addEventListener('change', (e) => applyLanguage(e.target.value));

    const mobilePills = document.querySelectorAll('.lang-pill-btn');
    mobilePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const targetLang = pill.getAttribute('data-lang');
        if (targetLang) applyLanguage(targetLang);
      });
    });

    applyLanguage(saved);
  }

  // ==========================================================================
  // INITIALIZE ALL SYSTEMS (Safe isolated execution per module)
  // ==========================================================================
  function boot() {
    const modules = [
      { name: 'StatusBadge', fn: initStatusBadge },
      { name: 'Intro', fn: initIntro },
      { name: 'CursorAndMagnets', fn: initCursorAndMagnets },
      { name: 'Header', fn: initHeader },
      { name: 'HeroCarousel', fn: initHeroCarousel },
      { name: 'Counters', fn: initCounters },
      { name: 'HeadingAndClipReveals', fn: initHeadingAndClipReveals },
      { name: 'AboutMotion', fn: initAboutMotion },
      { name: 'Testimonials', fn: initTestimonials },
      { name: 'PhotosAndLightbox', fn: initPhotosAndLightbox },
      { name: 'Video', fn: initVideo },
      { name: 'CollabForm', fn: initCollabForm },
      { name: 'Language', fn: initLanguage }
    ];

    modules.forEach(mod => {
      try {
        mod.fn();
      } catch (err) {
        console.warn(`[Sedo Init Error in ${mod.name}]:`, err);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
