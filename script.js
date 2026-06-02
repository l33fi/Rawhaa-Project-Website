// 1. تفعيل مكتبة الحركات الرائعة عند تمرير الشاشة (AOS)
AOS.init({
    once: true,     // الحركات تعمل مرة واحدة فقط أثناء النزول لتصفح هادئ
    duration: 800   // سرعة ظهور وتلاشي العنصر بالملي ثانية
});

// 2. قاعدة بيانات ديناميكية لتغيير نصوص لوحة الخدمات فوراً بدون تحميل الصفحة
const tabData = {
    design: {
        title: "بناء الهوية وتصميم الشعارات ومحتوى العرض",
        desc: "يتولى فريق التصميم المختص لدينا صياغة شعارات فريدة وعصرية (لوقو) ملائمة تماماً لنشاطك التجاري، مع تصميم موقع جذاب واختيار أسماء وهوية بصرية مشوقة تلفت الأنظار وتدعم القوة التنافسية لشركتك."
    },
    marketing: {
        title: "التسويق والدعاية وإدارة الإعلانات الذكية",
        desc: "نعتمد على أفضل الطرق التسويقية والترويجية الجذابة والمشوقة من خلال الإعلانات المدروسة وإطلاق الحملات عبر شبكات التواصل الاجتماعي للوصول الدقيق للفئات المستهدفة وضمان أعلى انتشار ونمو للمشروع."
    },
    content: {
        title: "إدارة المحتوى وتطوير أنشطة التشغيل اليومي",
        desc: "نقوم بإدارة المنشآت وحسابات العملاء الرقمية وتطوير المحتوى المعروض بمرونة تامة وسعر جيد رمزي، مما يمنح صاحب العمل فرصة للتركيز الكامل على المنتجات مع ضمان تواجد رقمي مستمر خالي من التعقيد."
    },
    feasibility: {
        title: "إعداد دراسات جدوى شاملة للمنشآت الصاعدة",
        desc: "نمنح أصحاب المشاريع ميزة اختيارية ممتازة لبناء وإعداد دراسة جدوى فنية متكاملة قبل إطلاق مشروعهم على أرض الواقع، لمساعدتهم على فهم السوق، وحساب هيكل التكاليف، والتنبؤ بالإيرادات والاتفاقات بوضوح."
    }
};

// الدالة المسؤولة عن تبديل بيانات الـ Tabs بحركات بركات سلسة
function switchTab(tabKey) {
    const contentArea = document.getElementById('tab-content-area');
    
    // إضافة تأثير اختفاء ناعم سريع قبل التبديل
    contentArea.style.opacity = '0';
    contentArea.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        // حقن النص الجديد من قاعدة البيانات أعلاه
        contentArea.innerHTML = `
            <h3 class="text-2xl font-black text-slate-900 mb-4">${tabData[tabKey].title}</h3>
            <p class="text-slate-600 leading-relaxed text-lg">${tabData[tabKey].desc}</p>
        `;
        // إعادة التأثير الحركي للظهور مجدداً بصورة مبهجة للعين
        contentArea.style.opacity = '1';
        contentArea.style.transform = 'translateY(0)';
    }, 300);

    // تصفير ستايلات كل الأزرار لتبدو غير نشطة
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn bg-white text-slate-700 font-bold px-6 py-3 rounded-xl shadow-sm hover:bg-slate-50 transition-all duration-300";
    });
    
    // تلوين الزر المحدّد حالياً باللون البنفسجي لتمييزه
    const activeBtn = document.getElementById(`btn-${tabKey}`);
    activeBtn.className = "tab-btn bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300";
}

// 3. منطق التحقق والتحكم في إرسال استمارة النظام (System DFD Processing)
function submitRawhaaForm() {
    const name = document.getElementById('inp-name').value;
    const type = document.getElementById('inp-type').value;
    const details = document.getElementById('inp-details').value;

    // منع المعالجة الفارغة في حال نسي العميل تعبئة البيانات
    if(!name || !type || !details) {
        alert("الرجاء تعبئة كافة حقول الاستمارة أولاً لإتمام المعالجة بالنظام!");
        return;
    }

    // إخفاء استمارة الإدخال وإظهار نافذة النجاح والتبريكات المبهجة
    document.getElementById('rawhaa-system-form').classList.add('hidden');
    document.getElementById('success-message-area').classList.remove('hidden');
}

// إعادة النظام لوضعه الطبيعي في حال أراد المستخدم تقديم طلب آخر
function resetRawhaaForm() {
    document.getElementById('rawhaa-system-form').reset();
    document.getElementById('success-message-area').classList.add('hidden');
    document.getElementById('rawhaa-system-form').classList.remove('hidden');
}