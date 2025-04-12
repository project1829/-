document.addEventListener('DOMContentLoaded', function() {
    // التنقل الثابت (Sticky Header)
    const header = document.querySelector('.sticky-header');
    let isSticky = false;

    function toggleSticky() {
        if (window.scrollY > 100 && !isSticky) {
            header.classList.add('sticky');
            isSticky = true;
        } else if (window.scrollY <= 100 && isSticky) {
            header.classList.remove('sticky');
            isSticky = false;
        }
    }

    window.addEventListener('scroll', toggleSticky);

    // زر "ابدأ رحلتك" للانتقال إلى قسم الوجهات
    const exploreButton = document.getElementById('explore-button');
    const destinationsSection = document.getElementById('destinations');

    if (exploreButton && destinationsSection) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            destinationsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // تأثيرات حركة خفيفة (Fade-in للبانر) - تم تنفيذه في CSS

    // قائمة الأنشطة السياحية (يمكن إضافة وظيفة التصفية هنا إذا لزم الأمر)
    const activityLinks = document.querySelectorAll('.activities-list a');
    activityLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // هنا يمكنك إضافة منطق للانتقال إلى صفحة الوجهات المفلترة
            console.log(`تم النقر على نشاط: ${this.textContent}`);
            e.preventDefault(); // منع الانتقال الافتراضي
            // يمكنك هنا استخدام window.location.href لتوجيه المستخدم إلى صفحة أخرى
        });
    });

    // قسم الخريطة التفاعلية (إظهار معلومات عند المرور)
    const mapPoints = document.querySelectorAll('.map-point');
    const mapContainer = document.querySelector('.map-container');

    mapPoints.forEach(point => {
        point.addEventListener('mouseover', function() {
            const info = this.getAttribute('data-info');
            // يمكنك هنا إنشاء عنصر لعرض المعلومات أو استخدام عنصر موجود
            console.log(info);
            // مثال بسيط: يمكنك إضافة تلميح (tooltip) هنا
        });
    });

    // قائمة التنقل المتجاوبة (Mobile Menu)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('open');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const spotCards = document.querySelectorAll('.spot-card');
    const modal = document.getElementById('spot-details-modal');
    const closeModalButton = modal.querySelector('.close-button');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDescription = modal.querySelector('#modal-description');
    const modalActivities = modal.querySelector('#modal-activities');
    const modalMap = modal.querySelector('#modal-map');
    const mainImage = modal.querySelector('#main-image');
    const thumbnailsContainer = modal.querySelector('.thumbnails');
    const modalComments = modal.querySelector('#modal-comments');

    const spotDetails = {
        'masmak-fort': {
            name: 'قصر المصمك',
            description: 'يُعد قصر المصمك من أهم المعالم التاريخية في مدينة الرياض. بُني في عهد الإمام عبد الله بن فيصل بن تركي آل سعود، وقد شهد اقتحام الملك عبد العزيز آل سعود له في عام 1902م، مما يمثل نقطة تحول حاسمة في تاريخ توحيد المملكة العربية السعودية. اليوم، يُستخدم القصر كمتحف يعرض تاريخ الرياض والمملكة.',
            activities: ['زيارة المتحف والتعرف على تاريخه', 'مشاهدة الفناء الداخلي للقصر', 'استكشاف الغرف والمعروضات التاريخية'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.42944997336!2d46.71548178498499!3d24.63082448413369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03899a81965d%3A0x4a8915e194513999!2sAl%20Masmak%20Fort!5e0!3m2!1sen!2ssa!4v1678886400000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'أحمد', comment: 'مكان رائع لاستكشاف تاريخ السعودية.' },
                { user: 'ليلى', comment: 'تصميم القصر الداخلي مدهش.' }
            ]
        },
        'kingdom-center': {
            name: 'برج المملكة',
            description: 'يُعتبر برج المملكة أحد أطول وأفخم الأبراج في المملكة العربية السعودية. يتميز بتصميمه العصري الفريد ويوفر إطلالات بانورامية خلابة على مدينة الرياض من خلال جسر المشاهدة المعلق في أعلاه. يضم البرج مركزًا تجاريًا فاخرًا وفندقًا عالميًا وشققًا سكنية ومكاتب.',
            activities: ['زيارة جسر المشاهدة', 'التسوق في مركز المملكة التجاري', 'تناول الطعام في أحد المطاعم الفاخرة', 'الإقامة في فندق فور سيزونز'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.6717499841267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'عمر', comment: 'إطلالة لا تُنسى من أعلى البرج.' },
                { user: 'نورة', comment: 'مركز تسوق رائع يضم العديد من العلامات التجارية.' }
            ]
        },
        'national-museum': {
            name: 'المتحف الوطني',
            description: 'يُعد المتحف الوطني في الرياض أكبر متحف في المملكة العربية السعودية. يهدف إلى تعريف الزوار بتاريخ وثقافة المملكة من عصور ما قبل التاريخ وحتى العصر الحديث. يضم المتحف ثماني قاعات عرض رئيسية تغطي مختلف جوانب التاريخ والتراث السعودي.',
            activities: ['استكشاف قاعات المتحف المختلفة', 'مشاهدة المعروضات الأثرية والتاريخية', 'التعرف على تاريخ المملكة وتطورها'],
            images: [ ],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.57822948815!2d46.71675398498511!3d24.6284099841308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038f9692a51d%3A0x72941282a68a0659!2sNational%20Museum!5e0!3m2!1sen!2ssa!4v1678886600000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'سلمان', comment: 'متحف شامل يستحق الزيارة.' },
                { user: 'ريم', comment: 'تعلمت الكثير عن تاريخ بلادي من خلال هذا المتحف.' }
            ]
        },
        'diriyah': {
            name: 'الدرعية التاريخية',
            description: 'الدرعية هي مهد الدولة السعودية الأولى وعاصمتها التاريخية. تتميز بتاريخها العريق وتراثها المعماري الفريد. تم إدراجها كموقع تراث عالمي لليونسكو نظرًا لأهميتها التاريخية والثقافية. تشهد الدرعية حاليًا مشاريع تطويرية واسعة النطاق لإعادة إحيائها كوجهة سياحية وثقافية عالمية.',
            activities: ['استكشاف حي الطريف التاريخي', 'زيارة متحف الدرعية', 'التجول في الأزقة القديمة', 'مشاهدة العروض الثقافية والتراثية'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.98353713588!2d46.6174198498547!3d24.62152398413126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f030d71c48f29%3A0x94480c9b08921f2f!2sDiriyah!5e0!3m2!1sen!2ssa!4v1678886700000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'عبدالله', comment: 'مكان يحمل عبق التاريخ.' },
                { user: 'فاطمة', comment: 'أحببت التصميم المعماري التقليدي.' }
            ]
        },
        'wadi-hanifa': {
            name: 'وادي حنيفة',
            description: 'وادي حنيفة هو وادي طبيعي يمتد عبر مدينة الرياض. تم تطويره ليصبح واحة خضراء ووجهة ترفيهية شهيرة للسكان والزوار. يوفر الوادي مساحات واسعة للمشي وركوب الدراجات والتنزه والاستمتاع بالطبيعة في قلب المدينة.',
            activities: ['المشي والتنزه', 'ركوب الدراجات', 'الاستمتاع بالمساحات الخضراء', 'زيارة الحدائق والمقاهي'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.09486438855!2d46.58133598498608!3d24.64031798412676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f02d2b3b3b3b3%3A0x5e9b8b8b8b8b8b8b!2sWadi%20Hanifah!5e0!3m2!1sen!2ssa!4v1678886800000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'يوسف', comment: 'مكان مثالي للاسترخاء وقضاء وقت ممتع في الطبيعة.' },
                { user: 'منى', comment: 'أحببت المسارات المخصصة للمشي والدراجات.' }
            ]
        },
        'skybridge': {
            name: 'جسر المشاهدة في برج المملكة',
            description: 'يوفر جسر المشاهدة في أعلى برج المملكة إطلالة بانورامية استثنائية على مدينة الرياض بأكملها. يمتد الجسر المعلق بين البرجين العلويين للبرج، مما يوفر تجربة فريدة ومثيرة للزوار.',
            activities: ['الاستمتاع بالإطلالة البانورامية', 'التقاط الصور التذكارية', 'تجربة المشي على الجسر المعلق'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!m3!1d3627.18778336314!2d46.67705998498698!3d24.67174998412167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'خالد', comment: 'تجربة مذهلة ومشاهد رائعة للمدينة.' },
                { user: 'عبير', comment: 'أنصح الجميع بزيارة جسر المشاهدة عند زيارة الرياض.' }
            ]
        }
    };

    spotCards.forEach(card => {
        card.addEventListener('click', function() {
            const spotId = this.getAttribute('data-spot-id');
            const details = spotDetails[spotId];

            if (details) {
                modalTitle.textContent = details.name;
                modalDescription.textContent = details.description;

                // عرض الأنشطة
                modalActivities.innerHTML = '';
                details.activities.forEach(activity => {
                    const li = document.createElement('li');
                    li.textContent = activity;
                    modalActivities.appendChild(li);
                });

                // عرض الصور
                thumbnailsContainer.innerHTML = '';
                details.images.forEach((image, index) => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = details.name + ' - صورة ' + (index + 1);
                    img.addEventListener('click', function() {
                        mainImage.src = this.src;
                        thumbnailsContainer.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
                        this.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(img);
                    if (index === 0) {
                        mainImage.src = image;
                        img.classList.add('active');
                    }
                });

                // تضمين الخريطة
                modalMap.innerHTML = details.map;

                // عرض التعليقات
                modalComments.innerHTML = '';
                details.comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `<strong>${comment.user}:</strong> ${comment.comment}`;
                    modalComments.appendChild(commentDiv);
                });

                modal.style.display = "block";
            }
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const destinationCards = document.querySelectorAll('.destinations-alula .destination-card');
    const modal = document.getElementById('spot-details-modal');
    const closeModalButton = modal.querySelector('.close-button');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDescription = modal.querySelector('#modal-description');
    const modalActivities = modal.querySelector('#modal-activities');
    const modalMap = modal.querySelector('#modal-map');
    const mainImage = modal.querySelector('#main-image');
    const thumbnailsContainer = modal.querySelector('.thumbnails');
    const modalComments = modal.querySelector('#modal-comments');

    const alulaSpotDetails = {
        'madain-saleh': {
            name: 'مدائن صالح',
            description: 'مدائن صالح، المعروفة أيضًا باسم الحِجر، هي مدينة نبطية قديمة تقع في شمال غرب المملكة العربية السعودية. تُعد أول موقع سعودي يُدرج في قائمة التراث العالمي لليونسكو، وتضم مجموعة رائعة من المقابر المنحوتة في الصخور الرملية، والتي يعود تاريخها إلى القرن الأول الميلادي.',
            activities: ['استكشاف المقابر النبطية', 'زيارة قصر الصانع', 'مشاهدة بقايا السكك الحديدية الحجازية'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.158071493534!2d37.956780384888173d26.62217478222518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ad603b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sMadain%20Saleh!5e0!3m2!1sen!2ssa!4v1678886400000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'خالد', comment: 'مكان تاريخي مذهل، يجب زيارته!' },
                { user: 'سارة', comment: 'النقوش في المقابر رائعة جدًا.' }
            ]
        },
        'elephant-rock': {
            name: 'صخرة الفيل',
            description: 'صخرة الفيل هي تكوين صخري طبيعي ضخم يقع على بعد حوالي 11 كيلومترًا شرق مدينة العُلا. اكتسبت الصخرة اسمها بسبب شكلها الذي يشبه الفيل بجذعه الطويل. تُعد صخرة الفيل من أبرز المعالم السياحية في العُلا، خاصة في وقت الغروب عندما تتوهج الصخور بألوان ذهبية.',
            activities: ['التقاط الصور', 'الاستمتاع بمنظر الغروب', 'الجلوس في المقاهي المحيطة'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.8849718488896!2d38.07839148488805!3d26.60463868222588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ad5e62e0000001%3A0x9a9a9a9a9a9a9a9a!2sElephant%20Rock!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'علي', comment: 'منظر طبيعي خلاب!' },
                { user: 'نورة', comment: 'أحببت شكل الصخرة الفريد.' }
            ]
        },
        'al-hijr': {
            name: 'الحِجر',
            description: 'الحِجر هو الاسم القديم لمدائن صالح، وهو موقع أثري يعود إلى الحضارة النبطية. يضم الموقع أكثر من 131 مدفنًا منحوتًا في الصخور، بالإضافة إلى العديد من الآثار الأخرى التي تعكس عظمة الحضارة النبطية وتجارتها الواسعة.',
            activities: ['زيارة المقابر النبطية', 'استكشاف الآثار والنقوش', 'التعرف على تاريخ الأنباط'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.158071493534!2d37.9568038488817!3d26.62217478222518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ad603b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sMadain%20Saleh!5e0!3m2!1sen!2ssa!4v1678886400000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'سالم', comment: 'موقع أثري رائع يحكي قصصًا من الماضي.' },
                { user: 'مريم', comment: 'أذهلتني دقة النقوش.' }
            ]
        },
        'al-balad-al-qadeemah': {
            name: 'البلدة القديمة',
            description: 'تقع البلدة القديمة في قلب واحة العُلا، وتضم مجموعة متراصة من المنازل الطينية القديمة التي يعود تاريخها إلى القرن الثاني عشر الميلادي. تتميز البلدة بتصميمها المعماري الفريد وأزقتها الضيقة المتعرجة، وتُعد مثالًا حيًا على التراث العمراني للمنطقة.',
            activities: ['التجول في الأزقة القديمة', 'زيارة مسجد العزائم', 'استكشاف المنازل الطينية'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.521521671212!2d37.9214885888813!3d26.61340668222553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ad5f9f7b7b7b7b%3A0x9a9a9a9a9a9a9a9a!2sAlUla%20Old%20Town!5e0!3m2!1sen!2ssa!4v1678886600000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'ياسر', comment: 'شعرت وكأنني عدت بالزمن إلى الوراء.' },
                { user: 'هند', comment: 'تصميم فريد يعكس تاريخ المنطقة.' }
            ]
        },
        'alula-oasis': {
            name: 'واحة العُلا',
            description: 'تُعد واحة العُلا قلب المنطقة النابض بالحياة، حيث تمتد على مساحة واسعة وتتميز بأشجار النخيل الكثيفة والمساحات الخضراء المورقة. توفر الواحة بيئة هادئة ومنعشة للزوار، وتضم العديد من المزارع والحدائق الجميلة.',
            activities: ['التجول في الواحة', 'زيارة المزارع', 'الاستمتاع بالطبيعة الخضراء'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.340296582375!2d37.9353295848881!3d26.61781468222535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ad5f5a7b7b7b7b%3A0x9a9a9a9a9a9a9a9a!2sAlUla%20Oasis!5e0!3m2!1sen!2ssa!4v1678886700000!5m2!1sen!2ssa" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'نواف', comment: 'مكان هادئ وجميل للاسترخاء.' },
                { user: 'غادة', comment: 'أحببت أشجار النخيل الكثيفة.' }
            ]
        }
    };

    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const spotId = this.getAttribute('data-spot-id');
            const details = alulaSpotDetails[spotId];

            if (details) {
                modalTitle.textContent = details.name;
                modalDescription.textContent = details.description;

                // عرض الأنشطة
                modalActivities.innerHTML = '';
                details.activities.forEach(activity => {
                    const li = document.createElement('li');
                    li.textContent = activity;
                    modalActivities.appendChild(li);
                });

                // عرض الصور
                thumbnailsContainer.innerHTML = '';
                details.images.forEach((image, index) => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = details.name + ' - صورة ' + (index + 1);
                    img.addEventListener('click', function() {
                        mainImage.src = this.src;
                        thumbnailsContainer.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
                        this.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(img);
                    if (index === 0) {
                        mainImage.src = image;
                        img.classList.add('active');
                    }
                });

                // تضمين الخريطة
                modalMap.innerHTML = details.map;

                // عرض التعليقات
                modalComments.innerHTML = '';
                details.comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `<strong>${comment.user}:</strong> ${comment.comment}`;
                    modalComments.appendChild(commentDiv);
                });

                modal.style.display = "block";
            }
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');
    const submissionError = document.getElementById('submissionError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي

        // إعادة تعيين رسائل الخطأ
        fullNameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        submissionError.textContent = '';
        successMessage.textContent = '';

        let isValid = true;

        // التحقق من الاسم الكامل
        if (fullNameInput.value.trim() === '') {
            fullNameError.textContent = 'الرجاء إدخال اسمك الكامل.';
            isValid = false;
        }

        // التحقق من البريد الإلكتروني
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'الرجاء إدخال بريدك الإلكتروني.';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'الرجاء إدخال بريد إلكتروني صالح.';
            isValid = false;
        }

        // التحقق من نص الرسالة
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'الرجاء إدخال نص الرسالة.';
            isValid = false;
        }

        if (isValid) {
            // هنا يمكنك إضافة كود لإرسال النموذج إلى الخادم
            // في هذا المثال، سنقوم فقط بعرض رسالة نجاح مؤقتة
            successMessage.textContent = 'تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا!';
            form.reset(); // إعادة تعيين النموذج بعد الإرسال الناجح (المحاكاة)
        } else {
            submissionError.textContent = 'الرجاء تصحيح الأخطاء في النموذج.';
        }
    });

    function isValidEmail(email) {
        // تعبير نمطي بسيط للتحقق من تنسيق البريد الإلكتروني
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const destinationCards = document.querySelectorAll('.destinations-jeddah .destination-card');
    const modal = document.getElementById('spot-details-modal');
    const closeModalButton = modal.querySelector('.close-button');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDescription = modal.querySelector('#modal-description');
    const modalActivities = modal.querySelector('#modal-activities');
    const modalMap = modal.querySelector('#modal-map');
    const mainImage = modal.querySelector('#main-image');
    const thumbnailsContainer = modal.querySelector('.thumbnails');
    const modalComments = modal.querySelector('#modal-comments');

    const jeddahSpotDetails = {
        'corniche': {
            name: 'كورنيش جدة',
            description: 'يمتد كورنيش جدة على طول ساحل البحر الأحمر، وهو وجهة ترفيهية رئيسية في المدينة. يوفر الكورنيش مساحات واسعة للمشي والجري وركوب الدراجات، بالإضافة إلى العديد من المطاعم والمقاهي والحدائق والمنحوتات الفنية.',
            activities: ['المشي والتنزه', 'ركوب الدراجات', 'الاستمتاع بالمطاعم والمقاهي', 'مشاهدة المنحوتات الفنية', 'السباحة في الشواطئ المخصصة'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.67174998412167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa0" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'أحمد', comment: 'مكان رائع للاسترخاء وقضاء وقت ممتع مع العائلة.' },
                { user: 'ليلى', comment: 'الإطلالات على البحر الأحمر ساحرة.' }
            ]
        },
        'al-balad': {
            name: 'البلد التاريخية',
            description: 'البلد هي قلب جدة التاريخي، وتتميز بمبانيها القديمة ذات الطراز المعماري الحجازي التقليدي، وشوارعها الضيقة المتعرجة، وأسواقها الشعبية العريقة. تم إدراج البلد على قائمة التراث العالمي لليونسكو، وتضم العديد من المعالم التاريخية مثل بيت نصيف وروشين جدة.',
            activities: ['التجول في الشوارع القديمة', 'زيارة بيت نصيف والمباني التاريخية الأخرى', 'التسوق في الأسواق الشعبية', 'الاستمتاع بالأجواء التاريخية'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.67174998412167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa1" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'عمر', comment: 'أحببت التجول في أزقة البلد القديمة.' },
                { user: 'نورة', comment: 'التراث المعماري فريد من نوعه.' }
            ]
        },
        'king-fahd-fountain': {
            name: 'نافورة الملك فهد',
            description: 'تُعد نافورة الملك فهد من أبرز معالم جدة الحديثة، وهي أطول نافورة من نوعها في العالم حيث يصل ارتفاعها إلى حوالي 312 مترًا. تقع النافورة على كورنيش جدة وتعمل بشكل يومي، وتضيء ليلاً بألوان مختلفة مما يجعلها مشهدًا خلابًا.',
            activities: ['مشاهدة النافورة من الكورنيش', 'التقاط الصور التذكارية', 'الاستمتاع بمنظر النافورة ليلاً'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.67174998412167!2m3!1f02f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa2" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'سلمان', comment: 'نافورة مدهشة حقًا!' },
                { user: 'ريم', comment: 'منظر النافورة ليلاً لا يُنسى.' }
            ]
        },
        'bait-nasseef': {
            name: 'متحف بيت نصيف',
            description: 'يقع بيت نصيف في قلب البلد التاريخية بجدة، وهو منزل تقليدي يعود تاريخه إلى القرن التاسع عشر. يُعد البيت مثالًا رائعًا على فن العمارة الحجازية القديمة، ويتكون من عدة طوابق ورواشين خشبية مزخرفة. تم تحويل البيت إلى متحف يعرض تاريخ وثقافة جدة.',
            activities: ['زيارة غرف المتحف المختلفة', 'مشاهدة الرواشين الخشبية', 'التعرف على تاريخ العائلة التي سكنت البيت'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.67174998412167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa1" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'عبدالله', comment: 'مكان جميل يعكس تاريخ جدة.' },
                { user: 'فاطمة', comment: 'أحببت تصميم الرواشين.' }
            ]
        },
        'silver-sands-beach': {
            name: 'شاطئ الرمال الفضية',
            description: 'شاطئ الرمال الفضية هو شاطئ خاص يقع على الساحل الشمالي لمدينة جدة. يتميز الشاطئ برماله البيضاء الناعمة ومياهه الفيروزية الصافية، ويوفر العديد من المرافق والأنشطة الترفيهية مثل السباحة والغطس والرياضات المائية.',
            activities: ['السباحة', 'الغطس', 'ممارسة الرياضات المائية', 'الاسترخاء على الشاطئ'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.67174998412167!2m3!f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa3" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'يوسف', comment: 'شاطئ رائع لقضاء يوم ممتع.' },
                { user: 'منى', comment: 'المياه صافية والرمال ناعمة.' }
            ]
        },
        'mall-of-arabia': {
            name: 'مول العرب',
            description: 'مول العرب هو أحد أكبر المراكز التجارية في مدينة جدة، ويضم مجموعة واسعة من المتاجر العالمية والمحلية، بالإضافة إلى العديد من المطاعم والمقاهي ودور السينما والمرافق الترفيهية الأخرى. يُعد المول وجهة تسوق وترفيه متكاملة للعائلات والأفراد.',
            activities: ['التسوق', 'تناول الطعام في المطاعم والمقاهي', 'مشاهدة الأفلام في السينما', 'الاستمتاع بالمرافق الترفيهية'],
            images: [],
            map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.18778336314!2d46.67705998498698!3d24.6717498412167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03a8e699b25d%3A0x9454b1c40559199a!2sKingdom%20Centre!5e0!3m2!1sen!2ssa!4v1678886500000!5m2!1sen!2ssa4" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            comments: [
                { user: 'خالد', comment: 'مركز تسوق كبير يضم كل ما تحتاجه.' },
                { user: 'عبير', comment: 'مكان رائع لقضاء وقت ممتع مع الأصدقاء.' }
            ]
        }
    };

    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const spotId = this.getAttribute('data-spot-id');
            const details = jeddahSpotDetails[spotId];

            if (details) {
                modalTitle.textContent = details.name;
                modalDescription.textContent = details.description;

                // عرض الأنشطة
                modalActivities.innerHTML = '';
                details.activities.forEach(activity => {
                    const li = document.createElement('li');
                    li.textContent = activity;
                    modalActivities.appendChild(li);
                });

                // عرض الصور
                thumbnailsContainer.innerHTML = '';
                details.images.forEach((image, index) => {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = details.name + ' - صورة ' + (index + 1);
                    img.addEventListener('click', function() {
                        mainImage.src = this.src;
                        thumbnailsContainer.querySelectorAll('img').forEach(thumb => thumb.classList.remove('active'));
                        this.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(img);
                    if (index === 0) {
                        mainImage.src = image;
                        img.classList.add('active');
                    }
                });

                // تضمين الخريطة
                modalMap.innerHTML = details.map;

                // عرض التعليقات
                modalComments.innerHTML = '';
                details.comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `<strong>${comment.user}:</strong> ${comment.comment}`;
                    modalComments.appendChild(commentDiv);
                });

                modal.style.display = "block";
            }
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الافتراضي

        // إعادة تعيين رسائل الخطأ
        fullNameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        let isValid = true;

        // التحقق من الاسم الكامل
        if (fullNameInput.value.trim() === '') {
            fullNameError.textContent = 'الرجاء إدخال اسمك الكامل.';
            isValid = false;
        }

        // التحقق من البريد الإلكتروني
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'الرجاء إدخال بريدك الإلكتروني.';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'الرجاء إدخال بريد إلكتروني صالح.';
            isValid = false;
        }

        // التحقق من كلمة المرور
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'الرجاء إدخال كلمة المرور.';
            isValid = false;
        } else if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.';
            isValid = false;
        }

        // التحقق من تأكيد كلمة المرور
        if (confirmPasswordInput.value.trim() === '') {
            confirmPasswordError.textContent = 'الرجاء تأكيد كلمة المرور.';
            isValid = false;
        } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
            confirmPasswordError.textContent = 'كلمة المرور وتأكيد كلمة المرور غير متطابقتين.';
            isValid = false;
        }

        if (isValid) {
            // هنا يمكنك إضافة كود لإرسال بيانات النموذج إلى الخادم
            console.log('تم إنشاء الحساب بنجاح (محاكاة)');
            alert('تم إنشاء الحساب بنجاح!');
            form.reset(); // إعادة تعيين النموذج
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});