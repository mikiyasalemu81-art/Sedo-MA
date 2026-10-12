/**
 * SEDO MARTIAL ART — PRODUCTION SCRIPT
 * Handles:
 * - 4-Language dynamic switching (EN, AM, OM, AR) with RTL for Arabic
 * - First-visit intro sequence with sessionStorage caching
 * - Cursor 3D tilt on hero poster with reduced-motion checks
 * - Multi-step collab form with loose international phone validation
 * - Clipboard copy fallback & Telegram share link dispatch
 * - Accessible keyboard modals (Collab modal & Lightbox)
 * - Video IntersectionObserver lazy loading, autoplay/pause & mute toggle
 * - Safe try/catch wrappers around all Web Storage APIs
 */

(function () {
  'use strict';

  // ==========================================================================
  // TRANSLATION DICTIONARY
  // ==========================================================================
  const TRANSLATIONS = {
    en: {
      navVideos: "Videos",
      navPhotos: "Photos",
      navAbout: "About",
      navServices: "Services",
      navCollab: "Collab",
      languageLabel: "Language",

      heroTitle: "Sedo Martial Art",
      heroSubtitle: "I fight for Ethiopia!",
      heroTagline: "MMA fighter. Taekwondo champion. Habesha King.",
      statFollowers: "followers",
      statLikes: "likes",
      btnFollowTikTok: "Follow on TikTok @sedomartialart3",

      aboutHeading: "The career",
      aboutBio: "Rooted in fierce Ethiopian heritage, Sedo stands as a premier mixed martial artist and taekwondo competitor who represents the unstoppable fighting spirit of his homeland. Over the course of [YEAR] to [YEAR], he captured [TITLE] in regional competitions and earned [WIN] defining victories across championship mats. Known globally as the Habesha King, Sedo blends elite striking, discipline, and authentic presence that commands an audience of millions.",
      pullQuote: "Power. Pride. Discipline.",
      timelineHeading: "Career Milestones",
      timelineItem1: "[TITLE] National Taekwondo Championship",
      timelineItem2: "Professional MMA Debut with [WIN] First-Round Victory",
      timelineItem3: "Continental Combat Showcase and [TITLE] Contender Match",
      timelineItem4: "Global Digital Reach Exceeds 2M Supporters Worldwide",

      servicesHeading: "Work with Sedo",
      servicesIntro: "Direct collaboration opportunities for premium global brands, athletic labels, event promotions, and ambitious regional enterprises.",
      service1Title: "Paid advertisements",
      service1Desc: "High-impact sponsored video features seamlessly integrated into authentic training and lifestyle content.",
      service2Title: "Brand sponsorships",
      service2Desc: "Comprehensive multi-platform campaign alignments connecting your enterprise directly with millions of loyal fans.",
      service3Title: "Product promotion",
      service3Desc: "Dedicated demonstrations, apparel showcases, and equipment reviews featuring genuine creator endorsement.",
      service4Title: "Social media campaigns",
      service4Desc: "Multi-tier viral launches crafted for high watch time, repeat engagement, and measurable audience conversion.",
      service5Title: "Event appearances",
      service5Desc: "VIP guest attendance, masterclass workshops, and ceremonial appearances for corporate and athletic gatherings.",
      service6Title: "Fight-night promotions",
      service6Desc: "Exclusive weigh-in and fight week brand placement across combat gear, banners, and digital coverage.",
      service7Title: "Business content creation",
      service7Desc: "Custom creative assets filmed on location specifically tailored for commercial distribution on your company channels.",
      service8Title: "Ambassador partnerships",
      service8Desc: "Long-term exclusive representation embodying strength, integrity, and cultural excellence for your organization.",

      photosHeading: "Photos",

      collabHeading: "Brand Collaboration",
      collabSubhead: "Submit your brand proposal directly to Sedo's official management.",
      stepCounter: "Step {step} of 4",
      labelStep1: "What is your full name?",
      placeholderStep1: "e.g. Samuel Bekele",
      labelStep2: "What is your phone number?",
      placeholderStep2: "e.g. +251 91 123 4567 or 0911234567",
      labelStep3: "What is your brand or business name?",
      placeholderStep3: "e.g. Habesha Athletics Ltd.",
      labelStep4: "What does your business do?",
      placeholderStep4: "Tell Sedo briefly about your product, service, or campaign vision (minimum 10 characters)...",
      errorName: "Please enter your full name.",
      errorPhone: "Please enter a valid phone number (minimum 7 digits).",
      errorBrand: "Please enter your business or brand name.",
      errorDesc: "Please provide a description of at least 10 characters.",
      btnBack: "Back",
      btnNext: "Next",
      btnSendRequest: "Send request",

      modalTitle: "Request Prepared",
      modalCopiedBadge: "Copied to your clipboard.",
      modalInstructions: "Your request is ready to send to Sedo on Telegram. Choose @Donkahan03 in the chat list and press Send. If the message did not open, paste it from your clipboard into a chat with @Donkahan03.",
      btnOpenTelegram: "Open @Donkahan03 on Telegram",
      btnClose: "Close",

      videoSidebarHeading: "Watch the latest",
      videoSidebarText: "Experience explosive training sessions, martial arts masterclasses, and fight preparations followed daily by over 2.4 million fans across the globe.",
      videoOverlayTop: "Sedo Martial Art",
      videoOverlayBottom: "I fight for Ethiopia!",
      btnWatchTikTok: "Watch on TikTok",

      footerWebsiteBy: "Website by"
    },

    am: {
      navVideos: "ቪዲዮዎች",
      navPhotos: "ፎቶዎች",
      navAbout: "ስለ እኔ",
      navServices: "አገልግሎቶች",
      navCollab: "ትብብር",
      languageLabel: "ቋንቋ",

      heroTitle: "ሰዶ ማርሻል አርት",
      heroSubtitle: "ኢትዮጵያን ወክዬ እዋጋለሁ!",
      heroTagline: "የኤምኤምኤ (MMA) ተዋጊ። የታይኳንዶ ሻምፒዮን። የሐበሻ ንጉሥ።",
      statFollowers: "ተከታዮች",
      statLikes: "መውደዶች",
      btnFollowTikTok: "በTikTok ይከተሉ @sedomartialart3",

      aboutHeading: "ሙያዬ",
      aboutBio: "በኢትዮጵያዊ የጀግንነት ወኔ የታነጸው ሰዶ፣ የሀገሩን የማይበገር የትግል መንፈስ የሚወክል አንቱ የተባለ የኤምኤምኤ (MMA) እና ታይኳንዶ ተወዳዳሪ ነው። ከ[YEAR] እስከ [YEAR] ባሉት ዓመታት በ[TITLE] ውድድሮች በርካታ አሸናፊነቶችን እና [WIN] ድሎችን አስመዝግቧል። በዓለም ዙሪያ የሐበሻ ንጉሥ በሚል የሚታወቀው ሰዶ፣ ድንቅ የትግል ብቃትና ዲስፕሊንን በማጣመር በሚሊዮኖች ዘንድ ተወዳጅነትን አትርፏል።",
      pullQuote: "ብርታት። ኩራት። ዲስፕሊን።",
      timelineHeading: "የስራ ዋና ዋና ድሎች",
      timelineItem1: "የ[TITLE] የኢትዮጵያ ታይኳንዶ ሻምፒዮና",
      timelineItem2: "የመጀመሪያው ፕሮፌሽናል MMA ውድድር በ[WIN] 1ኛ ዙር አሸናፊነት",
      timelineItem3: "የአፍሪካ አህጉራዊ ፍልሚያ ውድድር እና [TITLE]",
      timelineItem4: "በማህበራዊ ሚዲያ ከ2 ሚሊዮን በላይ ዓለም አቀፍ ተከታዮችን ማፍራት",

      servicesHeading: "ከሰዶ ጋር ይስሩ",
      servicesIntro: "ለታዋቂ የንግድ ተቋማት፣ ለስፖርት አልባሳት፣ ለዝግጅቶች እና ለትላልቅ ድርጅቶች የቀረበ የቀጥታ ትብብር ዕድል።",
      service1Title: "የሚከፈልባቸው ማስታወቂያዎች",
      service1Desc: "በከፍተኛ ደረጃ ተመልካች ዘንድ የሚደርሱ ማስታወቂያዎችን በተጨባጭ ልምምድ እና አኗኗር ቪዲዮዎች ማቅረብ።",
      service2Title: "የብራንድ ስፖንሰርሺፕ",
      service2Desc: "ድርጅትዎን በሚሊዮኖች ከሚቆጠሩ ታማኝ ደጋፊዎች ጋር የሚያስተሳስር ዘላቂ የዘመቻ ስምምነት።",
      service3Title: "የምርት ማስተዋወቅ",
      service3Desc: "የስፖርት አልባሳት፣ ዕቃዎች እና አገልግሎቶች በቀጥታ በተዋጊው ተፈትሸው ለተመልካች የሚቀርቡበት አሰራር።",
      service4Title: "የማህበራዊ ሚዲያ ዘመቻዎች",
      service4Desc: "ለከፍተኛ እይታና ተሳትፎ የተዘጋጁ ማራኪ እና ተደራሽ የማህበራዊ ገጽ ዘመቻዎች።",
      service5Title: "በዝግጅቶች ላይ መገኘት",
      service5Desc: "በድርጅት ዝግጅቶች፣ የልዩ እንግዳ መድረኮች እና የስልጠና ወርክሾፖች ላይ በአካል መገኘት።",
      service6Title: "የፍልሚያ ምሽት ማስተዋወቅ",
      service6Desc: "በውድድር ሳምንት እና በፍልሚያ መድረክ ላይ የድርጅትዎን አርማ እና ምርት ማስተዋወቅ።",
      service7Title: "የንግድ ይዘት ዝግጅት",
      service7Desc: "ለድርጅትዎ ማህበራዊ ገጾች የሚሆኑ ፕሮፌሽናል የቪዲዮ እና የፎቶ ይዘቶችን ማዘጋጀት።",
      service8Title: "የአምባሳደርነት ትብብር",
      service8Desc: "ጥንካሬን፣ ስነ-ምግባርን እና ክብርን በማንጸባረቅ የድርጅትዎ ቋሚ አምባሳደር ሆኖ መስራት።",

      photosHeading: "ፎቶዎች",

      collabHeading: "የትብብር ጥያቄ",
      collabSubhead: "የስራ ወይም የማስታወቂያ ጥያቄዎን በቀጥታ ለሰዶ ማኔጅመንት ያቅርቡ።",
      stepCounter: "ደረጃ {step} ከ 4",
      labelStep1: "ሙሉ ስምዎ ማን ይባላል?",
      placeholderStep1: "ለምሳሌ፦ ሳሙኤል በቀለ",
      labelStep2: "ስልክ ቁጥርዎ ስንት ነው?",
      placeholderStep2: "ለምሳሌ፦ +251 91 123 4567 ወይም 0911234567",
      labelStep3: "የድርጅትዎ ወይም የብራንድዎ ስም ማን ይባላል?",
      placeholderStep3: "ለምሳሌ፦ ሐበሻ አትሌቲክስ",
      labelStep4: "ድርጅትዎ በምን ስራ ላይ የተሰማራ ነው?",
      placeholderStep4: "ስለ ምርትዎ፣ አገልግሎትዎ ወይም የስራ ዕቅድዎ በአጭሩ ይግለጹ (ቢያንስ 10 ፊደላት)...",
      errorName: "እባክዎ ሙሉ ስምዎን ያስገቡ።",
      errorPhone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ (ቢያንስ 7 አሃዞች)።",
      errorBrand: "እባክዎ የድርጅትዎን ወይም የብራንድዎን ስም ያስገቡ።",
      errorDesc: "እባክዎ ቢያንስ 10 ፊደላት ያለው ማብራሪያ ይጻፉ።",
      btnBack: "ተመለስ",
      btnNext: "ቀጣይ",
      btnSendRequest: "ጥያቄ ላክ",

      modalTitle: "ጥያቄው ተዘጋጅቷል",
      modalCopiedBadge: "ወደ ቅንጥብ ሰሌዳዎ (Clipboard) ተቀድቷል።",
      modalInstructions: "ጥያቄዎ በTelegram ወደ ሰዶ ለመላክ ዝግጁ ነው። በቴሌግራም ዝርዝር ውስጥ @Donkahan03 ን ይምረጡና Send ይጫኑ። መልዕክቱ ካልተከፈተ ከቅንጥብ ሰሌዳዎ paste በማድረግ ወደ @Donkahan03 ይላኩ።",
      btnOpenTelegram: "@Donkahan03 ን በTelegram ይክፈቱ",
      btnClose: "ዝጋ",

      videoSidebarHeading: "የቅርብ ጊዜ ቪዲዮዎችን ይመልከቱ",
      videoSidebarText: "በዓለም ዙሪያ በሚሊዮኖች የሚደነቁ ፈጣን ልምምዶችን፣ የማርሻል አርት ጥበቦችን እና የውድድር ዝግጅቶችን ይመልከቱ።",
      videoOverlayTop: "ሰዶ ማርሻል አርት",
      videoOverlayBottom: "ኢትዮጵያን ወክዬ እዋጋለሁ!",
      btnWatchTikTok: "በTikTok ይመልከቱ",

      footerWebsiteBy: "ድህረ ገጽ በ"
    },

    om: {
      navVideos: "Viidiyoo",
      navPhotos: "Suuraa",
      navAbout: "Waa'ee koo",
      navServices: "Tajaajila",
      navCollab: "Walta'iinsa",
      languageLabel: "Afaan",

      heroTitle: "Sedo Martial Art",
      heroSubtitle: "Itoophiyaaf nan loluu!",
      heroTagline: "Lolaa MMA. Shaampiyoonaa Taekwondo. Mootii Habashaa.",
      statFollowers: "Hordoftoota",
      statLikes: "Jaalala",
      btnFollowTikTok: "TikTok irratti hordofaa @sedomartialart3",

      aboutHeading: "Seensa koo",
      aboutBio: "Dhiiga gootummaa Itoophiyaa keessaa kan dhalate Sedon, dandeettii lola MMA fi Taekwondo olaanaa qabuun biyya isaa bakka bu'ee kan lolu goota cimaadha. Waggoota [YEAR] hanga [YEAR] keessatti dorgommiiwwan gurguddoo irratti [TITLE] argachuun injifannoowwan [WIN] galmeessiseera. Addunyaa irratti Mootii Habashaa jedhamee kan beekamu Sedon, dandeettii cimaa fi naamusa ol'aanaa qaba.",
      pullQuote: "Aangoo. Of-danda'uu. Naamusa.",
      timelineHeading: "Gootummaa fi Injifannoowwan",
      timelineItem1: "Shaampiyoonaa Taekwondo Biyyooleessaa [TITLE]",
      timelineItem2: "Dorgommii MMA Jalqabaa Injifannoo [WIN] Marsaa 1ffaan",
      timelineItem3: "Dorgommii Lola Ardii Afrikaa fi [TITLE]",
      timelineItem4: "Hordoftoota Miidiyaa Hawaasaa Miliyoona 2 Ol Horachuu",

      servicesHeading: "Sedo wajjin hojjedhaa",
      servicesIntro: "Dhaabbilee gurguddoo, oomishaalee ispoortii fi qophiilee adda addaatiif carraa walta'iinsaa fi beeksisaa qophaa'e.",
      service1Title: "Beeksisa kaffaltii qabu",
      service1Desc: "Viidiyoo qulqullina olaanaa qabu keessatti oomisha keessan beeksisuun namoota baay'ee biraan gahuu.",
      service2Title: "Ispoonsara Dhaabbataa",
      service2Desc: "Dhaabbata keessan hordoftoota miliyoonaan lakkaa'aman wajjin walqunnamsiisuuf kampaanii yeroo dheeraa.",
      service3Title: "Oomisha beeksisuu",
      service3Desc: "Uffata, meeshaalee ispoortii fi tajaajiloota adda addaa akkaataa amansiisaa ta'een dhiyeessuu.",
      service4Title: "Duula Miidiyaa Hawaasaa",
      service4Desc: "Ummata hedduu bira gahuuf qophiiwwan miidiyaa hawaasaa irratti xiyyeeffatan qopheessuu.",
      service5Title: "Sirna irratti argamuu",
      service5Desc: "Qophiiwwan dhaabbilee fi simannaawwan addaa irratti qaamaan argamuun kabaja kennuu.",
      service6Title: "Halkan lolaa irratti beeksisuu",
      service6Desc: "Torban lolaa fi mooraa dorgommii irratti asxaa dhaabbata keessanii mul'isuu.",
      service7Title: "Qabiyyee Daldalaa Hojjechuu",
      service7Desc: "Fuula miidiyaa hawaasaa dhaabbata keessaniitiif viidiyoowwan fi suuraalee addaa qopheessuu.",
      service8Title: "Ambaasaaddarummaa",
      service8Desc: "Cimina, amanamummaa fi kabaja agarsiisuun dhaabbata keessan bakka bu'uu.",

      photosHeading: "Suuraa",

      collabHeading: "Walta'iinsa Daldalaa",
      collabSubhead: "Yaada walta'iinsaa ykn beeksisaa kallattiin hoggansa Sedotti ergaa.",
      stepCounter: "Sadarkaa {step}/4",
      labelStep1: "Maqaan keessan guutuun eenyu?",
      placeholderStep1: "fkn. Saamu'eel Baqqalaa",
      labelStep2: "Lakkoofsi bilbila keessanii meeqa?",
      placeholderStep2: "fkn. +251 91 123 4567 ykn 0911234567",
      labelStep3: "Maqaan dhaabbata ykn meeshaa keessanii maali?",
      placeholderStep3: "fkn. Habesha Athletics",
      labelStep4: "Dhaabbanni keessan maal hojjeta?",
      placeholderStep4: "Waa'ee oomisha, tajaajila ykn karoora keessanii gabaabinaan ibsaa (yoo xiqqaate qubee 10)...",
      errorName: "Maaloo maqaa keessan guutuu galchaa.",
      errorPhone: "Maaloo lakkoofsa bilbilaa sirrii galchaa (yoo xiqqaate dijitii 7).",
      errorBrand: "Maaloo maqaa dhaabbata keessanii galchaa.",
      errorDesc: "Maaloo ibsa yoo xiqqaate qubee 10 qabu barreessaa.",
      btnBack: "Duubatti",
      btnNext: "Itti fufi",
      btnSendRequest: "Gaaffii ergi",

      modalTitle: "Gaaffiin Qophaa'eera",
      modalCopiedBadge: "Gara kuusaa (Clipboard) keessanitti garagalchameera.",
      modalInstructions: "Gaaffiin keessan Telegram irratti gara Sedotti erguuf qophiidha. Tarree keessaa @Donkahan03 filadhaa 'Send' tuqaa. Yoo ergaan banamuu dide, kuusaa keessan irraa paste gochuun gara @Donkahan03tti ergaa.",
      btnOpenTelegram: "@Donkahan03 Telegram irratti bani",
      btnClose: "Cufi",

      videoSidebarHeading: "Viidiyoo dhihoo ilaalaa",
      videoSidebarText: "Shaakala cimaa, beekumsa lolaa fi qophiiwwan dorgommii hordoftoota miliyoona 2.4 ol ta'aniin ilaalaman daawwadhaa.",
      videoOverlayTop: "Sedo Martial Art",
      videoOverlayBottom: "Itoophiyaaf nan loluu!",
      btnWatchTikTok: "TikTok irratti ilaali",

      footerWebsiteBy: "Weebsaayitii kan hojjete"
    },

    ar: {
      navVideos: "الفيديوهات",
      navPhotos: "الصور",
      navAbout: "عني",
      navServices: "الخدمات",
      navCollab: "التعاون",
      languageLabel: "اللغة",

      heroTitle: "سيدو مارشال آرت",
      heroSubtitle: "أقاتل من أجل إثيوبيا!",
      heroTagline: "مقاتل MMA. بطل التايكوندو. ملك الحبشة.",
      statFollowers: "متابع",
      statLikes: "إعجاب",
      btnFollowTikTok: "تابع على TikTok @sedomartialart3",

      aboutHeading: "مسيرتي",
      aboutBio: "انطلاقاً من التراث الإثيوبي الأصيل، يقف سيدو كمقاتل فنون قتالية مختلطة وبطل تايكوندو يمثل الروح القتالية لوطنه. خلال الفترة من [YEAR] إلى [YEAR]، أحرز ألقاب [TITLE] وحقق [WIN] انتصارات حاسمة. معروف عالمياً بملك الحبشة، ويجمع بين القوة القتالية العالية والانضباط الذي يحظى بمتابعة الملايين.",
      pullQuote: "القوة. الفخر. الانضباط.",
      timelineHeading: "محطات المسيرة",
      timelineItem1: "بطولة التايكوندو الوطنية [TITLE]",
      timelineItem2: "أول ظهور احترافي في MMA مع فوز في الجولة الأولى [WIN]",
      timelineItem3: "نزال بطولة إفريقيا ومنافسة [TITLE]",
      timelineItem4: "تجاوز المتابعين عبر المنصات الرقمية حاجز المليوني متابع عالمياً",

      servicesHeading: "اعمل مع سيدو",
      servicesIntro: "فرص تعاون مباشرة للعلامات التجارية العالمية، والشركات الرياضية، وترويج الفعاليات الكبرى.",
      service1Title: "إعلانات مدفوعة",
      service1Desc: "مقاطع فيديو ترويجية مؤثرة ومندمجة بتناغم ضمن محتوى التدريب وأسلوب الحياة اليومي.",
      service2Title: "رعاية العلامات التجارية",
      service2Desc: "شراكات تسويقية شاملة ومتعددة المنصات تربط علامتك التجارية بملايين المتابعين الأوفياء.",
      service3Title: "ترويج المنتجات",
      service3Desc: "عروض عملية واستعراض للمعدات والأزياء الرياضية مع تزكية حقيقية وموثوقة من البطل.",
      service4Title: "حملات التواصل الاجتماعي",
      service4Desc: "إطلاق حملات تفاعلية مصممة لضمان أعلى نسب مشاهدة وتفاعل مستمر وتأثير ملموس.",
      service5Title: "حضور الفعاليات",
      service5Desc: "حضور كضيف شرف وتقديم ورش عمل تدريبية وظهور خاص في الفعاليات والمؤتمرات.",
      service6Title: "ترويج ليالي القتال",
      service6Desc: "إبراز علامتك التجارية على المعدات واللافتات الرسمية خلال أسبوع النزال والوزن الرسمي.",
      service7Title: "صناعة المحتوى التجاري",
      service7Desc: "إنتاج مواد إعلامية احترافية مصممة خصيصاً للنشر على منصات شركتكم الرسمية.",
      service8Title: "شراكات السفراء",
      service8Desc: "تمثيل حصري طويل الأمد يعكس القوة والانضباط والتميز لمؤسستكم.",

      photosHeading: "الصور",

      collabHeading: "طلب تعاون تجاري",
      collabSubhead: "أرسل مقترحك التجاري مباشرة إلى إدارة أعمال سيدو الرسمية.",
      stepCounter: "الخطوة {step} من 4",
      labelStep1: "ما هو اسمك الكامل؟",
      placeholderStep1: "مثال: صامويل بيكيلي",
      labelStep2: "ما هو رقم هاتفك؟",
      placeholderStep2: "مثال: +251 91 123 4567 أو 0911234567",
      labelStep3: "ما هو اسم علامتك التجارية أو شركتك؟",
      placeholderStep3: "مثال: شركة الأحذية الرياضية",
      labelStep4: "ماذا تقدم شركتك؟",
      placeholderStep4: "اشرح باختصار عن منتجك أو خدمتك أو رؤيتك للحملة (10 أحرف على الأقل)...",
      errorName: "يرجى إدخال اسمك الكامل.",
      errorPhone: "يرجى إدخال رقم هاتف صحيح (7 أرقام على الأقل).",
      errorBrand: "يرجى إدخال اسم الشركة أو العلامة التجارية.",
      errorDesc: "يرجى تقديم وصف لا يقل عن 10 أحرف.",
      btnBack: "السابق",
      btnNext: "التالي",
      btnSendRequest: "أرسل الطلب",

      modalTitle: "الطلب جاهز للإرسال",
      modalCopiedBadge: "تم نسخ النص إلى الحافظة.",
      modalInstructions: "طلبك جاهز للإرسال إلى سيدو عبر تطبيق تيليجرام. اختر @Donkahan03 من قائمة المحادثات واضغط إرسال. إذا لم تفتح الرسالة تلقائياً، الصق النص المنسوخ في المحادثة مع @Donkahan03.",
      btnOpenTelegram: "فتح @Donkahan03 على تيليجرام",
      btnClose: "إغلاق",

      videoSidebarHeading: "شاهد أحدث المقاطع",
      videoSidebarText: "استمتع بمشاهدة التدريبات الحماسية ودروس الفنون القتالية التي يتابعها يومياً أكثر من 2.4 مليون متابع حول العالم.",
      videoOverlayTop: "سيدو مارشال آرت",
      videoOverlayBottom: "أقاتل من أجل إثيوبيا!",
      btnWatchTikTok: "شاهد على TikTok",

      footerWebsiteBy: "تصميم الموقع بواسطة"
    }
  };

  // State
  let currentLang = 'en';
  let currentStep = 1;
  const totalSteps = 4;
  const formData = {
    fullname: '',
    phone: '',
    brand: '',
    description: ''
  };

  // Storage Helpers (Safe try/catch)
  function safeGetStorage(storage, key) {
    try {
      return storage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function safeSetStorage(storage, key, val) {
    try {
      storage.setItem(key, val);
    } catch (e) {
      // storage unavailable or quota exceeded
    }
  }

  // ==========================================================================
  // 1. LOADING INTRO
  // ==========================================================================
  function initIntro() {
    const introEl = document.getElementById('intro-screen');
    if (!introEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenIntro = safeGetStorage(sessionStorage, 'sedo_intro_seen');

    if (prefersReducedMotion || hasSeenIntro === 'true') {
      introEl.classList.add('is-loaded');
      introEl.style.display = 'none';
      return;
    }

    // Show for 1.4s then lift away
    setTimeout(() => {
      introEl.classList.add('is-loaded');
      safeSetStorage(sessionStorage, 'sedo_intro_seen', 'true');
      setTimeout(() => {
        introEl.style.display = 'none';
      }, 750);
    }, 1400);
  }

  // ==========================================================================
  // 2. HEADER & MOBILE DRAWER
  // ==========================================================================
  function initHeader() {
    const header = document.getElementById('site-header');
    const toggleBtn = document.getElementById('mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const mobileLinks = drawer ? drawer.querySelectorAll('.mobile-nav-link') : [];

    // Scroll listener for solid header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });

    // Mobile toggle
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        drawer.setAttribute('aria-hidden', isExpanded);
        drawer.classList.toggle('is-open', !isExpanded);
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          toggleBtn.setAttribute('aria-expanded', 'false');
          drawer.setAttribute('aria-hidden', 'true');
          drawer.classList.remove('is-open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ==========================================================================
  // 3. LANGUAGE SWITCHING & RTL
  // ==========================================================================
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    currentLang = lang;
    safeSetStorage(localStorage, 'sedo_selected_lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Synchronize select values
    const desktopSelect = document.getElementById('lang-select');
    const mobileSelect = document.getElementById('mobile-lang-select');
    if (desktopSelect) desktopSelect.value = lang;
    if (mobileSelect) mobileSelect.value = lang;

    // Update all data-i18n elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key]) {
        // Special handle for step counter template
        if (key === 'stepCounter') {
          el.textContent = TRANSLATIONS[lang].stepCounter.replace('{step}', currentStep);
        } else {
          el.textContent = TRANSLATIONS[lang][key];
        }
      }
    });

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang][key]) {
        el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      }
    });

    // Update current step counter specifically
    updateStepCounter();
  }

  function initLanguage() {
    const saved = safeGetStorage(localStorage, 'sedo_selected_lang') || 'en';
    const desktopSelect = document.getElementById('lang-select');
    const mobileSelect = document.getElementById('mobile-lang-select');

    if (desktopSelect) {
      desktopSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    }
    if (mobileSelect) {
      mobileSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
    }

    applyLanguage(saved);
  }

  // ==========================================================================
  // 4. 3D TILT ON HERO POSTER
  // ==========================================================================
  function initHeroTilt() {
    const card = document.getElementById('hero-poster-card');
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;

    if (prefersReducedMotion || isTouch) return;

    const maxTilt = 8; // degrees

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // ==========================================================================
  // 5. PHOTOS GALLERY LIGHTBOX
  // ==========================================================================
  function initLightbox() {
    const items = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-lightbox');
    const modalImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    if (!modal || items.length === 0) return;

    const images = Array.from(items).map(item => {
      const img = item.querySelector('img');
      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') : ''
      };
    });

    let activeIdx = 0;

    function openAt(idx) {
      activeIdx = (idx + images.length) % images.length;
      modalImg.src = images[activeIdx].src;
      modalImg.alt = images[activeIdx].alt;
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (items[activeIdx]) items[activeIdx].focus();
    }

    items.forEach((item, idx) => {
      item.addEventListener('click', () => openAt(idx));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openAt(idx);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', () => openAt(activeIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => openAt(activeIdx + 1));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('is-active')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') openAt(activeIdx - 1);
      if (e.key === 'ArrowRight') openAt(activeIdx + 1);
    });
  }

  // ==========================================================================
  // 6. MULTI-STEP COLLAB FORM
  // ==========================================================================
  function updateStepCounter() {
    const counterEl = document.getElementById('step-counter');
    const progressFill = document.querySelector('.progress-fill');
    const progressTrack = document.getElementById('collab-progress-bar');

    if (counterEl && TRANSLATIONS[currentLang]) {
      counterEl.textContent = TRANSLATIONS[currentLang].stepCounter.replace('{step}', currentStep);
    }

    if (progressFill) {
      const pct = (currentStep / totalSteps) * 100;
      progressFill.style.width = `${pct}%`;
    }

    if (progressTrack) {
      progressTrack.setAttribute('aria-valuenow', currentStep);
    }
  }

  function validateCurrentStep() {
    const t = TRANSLATIONS[currentLang];
    const error1 = document.getElementById('error-step1');
    const error2 = document.getElementById('error-step2');
    const error3 = document.getElementById('error-step3');
    const error4 = document.getElementById('error-step4');

    if (currentStep === 1) {
      const input = document.getElementById('step-fullname');
      const val = input.value.trim();
      if (val.length < 2) {
        error1.textContent = t.errorName;
        input.focus();
        return false;
      }
      error1.textContent = '';
      formData.fullname = val;
      return true;
    }

    if (currentStep === 2) {
      const input = document.getElementById('step-phone');
      const val = input.value.trim();
      // Loose validation for Ethiopian and international phone formats
      const phoneRegex = /^[\+\d\s\-\(\)\.]{7,25}$/;
      if (!phoneRegex.test(val) || val.replace(/\D/g, '').length < 7) {
        error2.textContent = t.errorPhone;
        input.focus();
        return false;
      }
      error2.textContent = '';
      formData.phone = val;
      return true;
    }

    if (currentStep === 3) {
      const input = document.getElementById('step-brand');
      const val = input.value.trim();
      if (val.length < 2) {
        error3.textContent = t.errorBrand;
        input.focus();
        return false;
      }
      error3.textContent = '';
      formData.brand = val;
      return true;
    }

    if (currentStep === 4) {
      const input = document.getElementById('step-desc');
      const val = input.value.trim();
      if (val.length < 10) {
        error4.textContent = t.errorDesc;
        input.focus();
        return false;
      }
      error4.textContent = '';
      formData.description = val;
      return true;
    }

    return true;
  }

  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;
    currentStep = step;

    const stepElements = document.querySelectorAll('.form-step');
    stepElements.forEach(el => {
      const s = parseInt(el.getAttribute('data-step'), 10);
      el.classList.toggle('active', s === currentStep);
    });

    const prevBtn = document.getElementById('form-prev-btn');
    const nextBtn = document.getElementById('form-next-btn');
    const submitBtn = document.getElementById('form-submit-btn');

    if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? 'inline-flex' : 'none';
    if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';

    updateStepCounter();

    // Focus active field
    const activeStepEl = document.querySelector(`.form-step[data-step="${currentStep}"]`);
    if (activeStepEl) {
      const targetInput = activeStepEl.querySelector('input, textarea');
      if (targetInput) targetInput.focus();
    }
  }

  async function copyToClipboard(text) {
    let success = false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch (e) {
        success = false;
      }
    }
    if (!success) {
      // Hidden textarea fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        success = document.execCommand('copy');
      } catch (err) {
        success = false;
      }
      document.body.removeChild(ta);
    }
    return success;
  }

  function openTelegramCollabModal(copied) {
    const modal = document.getElementById('collab-modal');
    const copyBadge = document.getElementById('modal-copy-status');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modal) return;

    if (copyBadge) {
      copyBadge.style.display = copied ? 'inline-block' : 'none';
    }

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (closeBtn) closeBtn.focus();
  }

  function closeTelegramModal() {
    const modal = document.getElementById('collab-modal');
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initCollabForm() {
    const form = document.getElementById('collab-form');
    const prevBtn = document.getElementById('form-prev-btn');
    const nextBtn = document.getElementById('form-next-btn');
    const submitBtn = document.getElementById('form-submit-btn');
    const modal = document.getElementById('collab-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    if (!form) return;

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (validateCurrentStep()) {
          goToStep(currentStep + 1);
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goToStep(currentStep - 1);
      });
    }

    // Advance on Enter key inside steps 1-3
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (e.target.tagName.toLowerCase() === 'textarea') {
          // Allow Shift+Enter for newlines in textarea
          return;
        }
        e.preventDefault();
        if (currentStep < totalSteps) {
          if (validateCurrentStep()) {
            goToStep(currentStep + 1);
          }
        } else {
          form.requestSubmit();
        }
      }
    });

    // Form Submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateCurrentStep()) return;

      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      // Local date and time
      const now = new Date();
      const submittedTime = now.toLocaleString();

      const message = 
`New collab request for Sedo
Name: ${formData.fullname}
Phone: ${formData.phone}
Brand: ${formData.brand}
What the business does: ${formData.description}
Submitted: ${submittedTime}`;

      // Simulate brief loading state
      await new Promise(resolve => setTimeout(resolve, 600));

      // 1. Copy to clipboard
      const copied = await copyToClipboard(message);

      // 2. Open Telegram share link
      const siteUrl = window.location.origin && window.location.origin.startsWith('http') 
        ? window.location.origin 
        : 'https://sedomartialart.vercel.app';
      const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(message)}`;

      window.open(telegramShareUrl, '_blank', 'noopener,noreferrer');

      // 3. Show centered modal
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
      openTelegramCollabModal(copied);
    });

    // Modal Events
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeTelegramModal);
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeTelegramModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (modal && modal.classList.contains('is-active') && e.key === 'Escape') {
        closeTelegramModal();
      }
    });
  }

  // ==========================================================================
  // 7. VIDEO (PHONE FRAME) INTERSECTION OBSERVER & SOUND
  // ==========================================================================
  function initVideo() {
    const video = document.getElementById('sedo-highlight-video');
    const soundToggle = document.getElementById('video-sound-toggle');
    const iconMuted = document.getElementById('icon-sound-muted');
    const iconOn = document.getElementById('icon-sound-on');

    if (!video) return;

    let srcLoaded = false;

    // IntersectionObserver to assign src and autoplay/pause
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!srcLoaded && video.dataset.src) {
            video.src = video.dataset.src;
            srcLoaded = true;
          }
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Browser autoplay policy prevented playback
            });
          }
        } else {
          if (srcLoaded) {
            video.pause();
          }
        }
      });
    }, {
      rootMargin: '100px 0px',
      threshold: 0.25
    });

    observer.observe(video);

    // Sound toggle
    if (soundToggle) {
      soundToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        video.muted = !video.muted;

        if (video.muted) {
          if (iconMuted) iconMuted.style.display = 'block';
          if (iconOn) iconOn.style.display = 'none';
        } else {
          if (iconMuted) iconMuted.style.display = 'none';
          if (iconOn) iconOn.style.display = 'block';
        }
      });
    }
  }

  // ==========================================================================
  // 8. SCROLL REVEAL OBSERVER
  // ==========================================================================
  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = document.querySelectorAll('.reveal-item');

    if (prefersReducedMotion) {
      revealItems.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // INIT ALL MODULES ON DOM READY
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initIntro();
    initHeader();
    initLanguage();
    initHeroTilt();
    initLightbox();
    initCollabForm();
    initVideo();
    initScrollReveal();
  });

})();
