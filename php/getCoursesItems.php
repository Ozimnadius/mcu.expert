<?php
header('Content-Type: application/json');

echo json_encode(array(
    'status' => true,
    'html' => getHtml()
));
exit();

function getHtml()
{
    ob_start(); ?>
    <div class="courses-items__item">
        <a class="courses-item"
           href="/courses/course/"><span
                class="courses-item__img"><img
                    src="/images/content/index-popular/1.webp"
                    alt="img"></span><span class="courses-item__name">Системное управление клиникой</span><span
                class="courses-item__txt"><span style="color:var(--color-red);">Онлайн + внедрение Лучший курс по управлению 2022 года</span><span>Курс–практикум для собственников и управленцев. Управление клиникой на основе трёхконтурной бизнес-модели</span></span></a>
    </div>
    <div class="courses-items__item">
        <a class="courses-item"
           href="/courses/course/"><span
                class="courses-item__img"><img
                    src="/images/content/index-popular/2.webp"
                    alt="img"></span><span class="courses-item__name">Корпоративное обучение</span><span
                class="courses-item__txt"><span>Программа предназначена для врачей и помогает после обучения увеличить возвратность пациентов в 3 раза.</span></span></a>
    </div>
    <div class="courses-items__item">
        <a class="courses-item"
           href="/courses/course/"><span
                class="courses-item__img"><img
                    src="/images/content/index-popular/3.webp"
                    alt="img"></span><span class="courses-item__name">Мотивационная консультация <span
                    style="color:var(--color-red);">ТОП-5</span></span><span
                class="courses-item__txt"><span>Программа предназначена для врачей и помогает после обучения увеличить возвратность пациентов в 3 раза.</span></span></a>
    </div>
    <div class="courses-items__item">
        <a class="courses-item"
           href="/courses/course/"><span
                class="courses-item__img"><img
                    src="/images/content/index-popular/4.webp"
                    alt="img"></span><span class="courses-item__name">Открой клинику <span
                    style="color:var(--color-red);">ТОП-5</span></span><span
                class="courses-item__txt"><span>Программа предназначена для врачей и помогает после обучения увеличить возвратность пациентов в 3 раза.</span></span></a>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}