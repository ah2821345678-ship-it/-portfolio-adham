/* =====================================================================
   PRICING — the ONE place to edit prices, features and timelines.
   Every text has an English field and an Arabic field (…_ar).
   Tabs  → plans (3 packages each, mark one with popular:true) → extras.
   Prices are plain strings, so "$30", "$40–70" or "From $50" all work.
   ===================================================================== */
window.PRICING = {
  cta: "Get Started",                 cta_ar: "ابدأ الآن",          // buttons jump to the Contact section
  popular: "Most Popular",            popular_ar: "الأكثر طلبًا",
  pkg: "Package",                     pkg_ar: "الباقة",
  delivery: "Estimated delivery",     delivery_ar: "مدة التسليم المتوقعة",
  extrasTitle: "Additional Services", extrasTitle_ar: "خدمات إضافية",

  tabs: [
    /* ------------------------------ UI/UX ------------------------------ */
    {
      id: "uiux",
      label: "UI/UX Design", label_ar: "تصميم UI/UX",
      title: "UI/UX Design Pricing", title_ar: "أسعار تصميم UI/UX",
      sub: "Designing intuitive, modern, and user-centered digital experiences that combine usability with beautiful interfaces.",
      sub_ar: "تصميم تجارب رقمية سهلة وعصرية تتمحور حول المستخدم، وتجمع بين سهولة الاستخدام وجمال الواجهات.",
      unit: "/ Project", unit_ar: "/ مشروع",
      note: "Starting prices for projects with a clearly defined scope.",
      note_ar: "أسعار تبدأ منها المشاريع ذات النطاق المحدد بوضوح.",
      plans: [
        {
          name: "Starter", name_ar: "الأساسية", price: "$30",
          desc: "Perfect for small projects that need clean and modern user interfaces.",
          desc_ar: "مثالية للمشاريع الصغيرة التي تحتاج واجهات نظيفة وعصرية.",
          features: [
            ["3–5 UI Screens", "3–5 شاشات واجهة"],
            ["High-Fidelity UI Design in Figma", "تصميم واجهات عالي الدقة على Figma"],
            ["Basic Colors and Typography Setup", "إعداد أساسي للألوان والخطوط"],
            ["Simple Interactive Prototype", "نموذج تفاعلي بسيط"],
            ["2 Revision Rounds", "جولتا تعديل"],
            ["Organized Figma File", "ملف Figma منظّم"]
          ],
          time: ["3–5 Business Days", "3–5 أيام عمل"]
        },
        {
          name: "Professional", name_ar: "الاحترافية", price: "$75", popular: true,
          desc: "An ideal choice for startups and businesses looking for a polished and consistent digital experience.",
          desc_ar: "اختيار مثالي للشركات الناشئة والأعمال التي تبحث عن تجربة رقمية مصقولة ومتناسقة.",
          features: [
            ["6–10 UI Screens for a Mobile App or Simple Website", "6–10 شاشات لتطبيق موبايل أو موقع بسيط"],
            ["Basic User Flow Planning", "تخطيط أساسي لرحلة المستخدم (User Flow)"],
            ["Professional UI Design in Figma", "تصميم واجهات احترافي على Figma"],
            ["Interactive Prototype", "نموذج تفاعلي"],
            ["Reusable UI Components", "مكوّنات واجهة قابلة لإعادة الاستخدام"],
            ["3 Revision Rounds", "3 جولات تعديل"],
            ["Developer-Ready Figma File", "ملف Figma جاهز للمطوّرين"]
          ],
          time: ["5–8 Business Days", "5–8 أيام عمل"]
        },
        {
          name: "Advanced", name_ar: "المتقدمة", price: "$150",
          desc: "For medium-sized projects that require a more complete and consistent design experience.",
          desc_ar: "للمشاريع المتوسطة التي تحتاج تجربة تصميم أكمل وأكثر اتساقًا.",
          features: [
            ["12–18 UI Screens", "12–18 شاشة واجهة"],
            ["User Flow for Main User Journeys", "User Flow لرحلات المستخدم الرئيسية"],
            ["High-Fidelity UI Design", "تصميم واجهات عالي الدقة"],
            ["Interactive Prototype for Agreed User Flows", "نموذج تفاعلي لمسارات المستخدم المتفق عليها"],
            ["Basic Design System", "نظام تصميم أساسي (Design System)"],
            ["Basic Loading, Error, and Success States", "حالات تحميل وخطأ ونجاح أساسية"],
            ["3 Revision Rounds", "3 جولات تعديل"],
            ["Organized and Developer-Ready Figma File", "ملف Figma منظّم وجاهز للمطوّرين"]
          ],
          time: ["10–14 Business Days", "10–14 يوم عمل"]
        }
      ],
      extras: [
        ["3 Additional Simple Screens", "3 شاشات بسيطة إضافية", "$15"],
        ["Landing Page Design", "تصميم صفحة هبوط (Landing Page)", "$30–50"],
        ["Basic Dashboard Design", "تصميم لوحة تحكم أساسية", "$40–70"],
        ["UI Redesign", "إعادة تصميم واجهة (UI Redesign)", "$50–100"],
        ["Standalone Interactive Prototype", "نموذج تفاعلي منفصل", "$15–30"]
      ]
    },

    /* --------------------------- Flutter apps --------------------------- */
    {
      id: "flutter",
      label: "Mobile Apps", label_ar: "تطبيقات الموبايل",
      title: "Mobile App Development Pricing", title_ar: "أسعار تطوير تطبيقات الموبايل",
      sub: "Flutter mobile app development packages for projects with a clearly defined scope.",
      sub_ar: "باقات تطوير تطبيقات الموبايل بـ Flutter للمشاريع ذات النطاق المحدد بوضوح.",
      unit: "/ Project", unit_ar: "/ مشروع",
      note: "These are starting prices for projects with a clearly defined scope. Backend development, paid third-party services and store fees are not included unless explicitly specified.",
      note_ar: "هذه أسعار تبدأ منها المشاريع ذات النطاق المحدد بوضوح. لا تشمل تطوير الـ Backend أو الخدمات المدفوعة من أطراف ثالثة أو رسوم المتاجر ما لم يُذكر ذلك صراحةً.",
      plans: [
        {
          name: "Basic App", name_ar: "تطبيق أساسي", price: "$150",
          desc: "A simple Flutter app with a few screens and basic local data.",
          desc_ar: "تطبيق Flutter بسيط بعدد قليل من الشاشات وبيانات محلية أساسية.",
          features: [
            ["3–5 mobile screens", "3–5 شاشات موبايل"],
            ["Basic Flutter implementation", "تنفيذ أساسي بـ Flutter"],
            ["Simple navigation", "تنقّل بسيط بين الشاشات"],
            ["Static or basic local data", "بيانات ثابتة أو محلية بسيطة"],
            ["Basic functional testing", "اختبار وظيفي أساسي"],
            ["Source code delivery", "تسليم الكود المصدري"]
          ],
          time: ["5–10 Business Days", "5–10 أيام عمل"]
        },
        {
          name: "Standard App", name_ar: "تطبيق قياسي", price: "$350", popular: true,
          desc: "A Flutter app connected to your existing REST API, with organized code and clear UI states.",
          desc_ar: "تطبيق Flutter مرتبط بـ REST API موجود لديك، بكود منظّم وحالات واجهة واضحة.",
          features: [
            ["6–10 mobile screens", "6–10 شاشات موبايل"],
            ["Flutter development", "تطوير بـ Flutter"],
            ["Integration with an existing REST API", "ربط مع REST API موجود"],
            ["State management and organized code", "إدارة الحالة وكود منظّم"],
            ["Basic authentication if the API is ready", "تسجيل دخول أساسي في حال جاهزية الـ API"],
            ["Loading, error, and success states", "حالات التحميل والخطأ والنجاح"],
            ["Functional testing", "اختبار وظيفي"],
            ["Source code delivery", "تسليم الكود المصدري"]
          ],
          time: ["2–4 Weeks", "من 2 إلى 4 أسابيع"]
        },
        {
          name: "Advanced App", name_ar: "تطبيق متقدم", price: "$700",
          desc: "A scalable Flutter app with multiple API integrations, user permissions and documentation.",
          desc_ar: "تطبيق Flutter قابل للتوسّع مع ربط عدة APIs وصلاحيات مستخدمين وتوثيق.",
          features: [
            ["12–20 mobile screens", "12–20 شاشة موبايل"],
            ["Integration with multiple APIs, depending on scope", "ربط مع أكثر من API حسب نطاق المشروع"],
            ["Scalable application architecture", "هيكلة تطبيق قابلة للتوسّع"],
            ["Basic authentication and user permissions", "تسجيل دخول أساسي وصلاحيات مستخدمين"],
            ["Optional notifications or additional agreed features", "إشعارات أو مزايا إضافية بالاتفاق (اختياري)"],
            ["Error handling and functional testing", "معالجة الأخطاء واختبار وظيفي"],
            ["Basic documentation", "توثيق أساسي"],
            ["Source code delivery", "تسليم الكود المصدري"]
          ],
          time: ["4–7 Weeks", "من 4 إلى 7 أسابيع"]
        }
      ],
      extras: [
        ["3 Additional Simple Screens", "3 شاشات بسيطة إضافية", "$40–70"],
        ["Additional API Integration", "ربط API إضافي", "$30–80"],
        ["Authentication Implementation", "تنفيذ نظام تسجيل الدخول", "$50–100"],
        ["Firebase Push Notifications", "إشعارات Firebase Push", "$40–80"],
        ["Bug Fixing for Existing Apps", "إصلاح أخطاء في تطبيقات قائمة", "$30–100"],
        ["App Store / Google Play Publishing Assistance", "مساعدة في النشر على App Store / Google Play", "$50–100"]
      ]
    }
  ]
};
