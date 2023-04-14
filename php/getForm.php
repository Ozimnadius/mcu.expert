<?php
header('Content-Type: application/json');

switch ($_POST['name']) {
    case 'consultation':
        echo json_encode(array(
            'status' => true,
            'html' => consultationForm()
        ));
        exit();
        break;
    case 'feedback':
        echo json_encode(array(
            'status' => true,
            'html' => feedbackForm()
        ));
        exit();
        break;
    case 'service':
        echo json_encode(array(
            'status' => true,
            'html' => serviceForm()
        ));
        exit();
        break;
    case 'course':
        echo json_encode(array(
            'status' => true,
            'html' => courseForm()
        ));
        exit();
        break;
    case 'courseGift':
        echo json_encode(array(
            'status' => true,
            'html' => courseFormGift()
        ));
        exit();
        break;
    case 'review':
        echo json_encode(array(
            'status' => true,
            'html' => reviewForm()
        ));
        exit();
        break;
    case 'order':
        echo json_encode(array(
            'status' => true,
            'html' => orderForm()
        ));
        exit();
        break;
    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}

function consultationForm()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Получить консультацию</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input"
                           type="tel"
                           name="tel"
                           placeholder="Телефон"
                           required
                    >
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта">
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Заказать звонок
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваша заявка принята в обработку. Наши специалисты свяжутся с Вами в ближайшее время
                    </p>
                </div>
            </div>
        </template>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function feedbackForm()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Заказать звонок</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input" type="tel" name="tel" placeholder="Телефон" required>
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта">
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Заказать звонок
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваша заявка принята в обработку. Наши специалисты свяжутся с Вами в ближайшее время
                    </p>
                </div>
            </div>
        </template>

    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function serviceForm()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Заявка на услугу</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" readonly type="text" name="product"
                           value="“Мотивационная консультация пациента”">
                </div>
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input" type="tel" name="tel" placeholder="Телефон" required>
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта">
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Отправить заявку
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваша заявка принята в обработку. Наши специалисты свяжутся с Вами в ближайшее время
                    </p>
                </div>
            </div>
        </template>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function courseForm()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Заявка на курс</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" readonly type="text" name="product"
                           value="Системное управление клиникой">
                </div>
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input" type="tel" name="tel" placeholder="Телефон" required>
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта">
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Отправить заявку
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваша заявка принята в обработку. Наши специалисты свяжутся с Вами в ближайшее время
                    </p>
                </div>
            </div>
        </template>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function courseFormGift()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Подарочный курс</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" readonly type="text" name="product"
                           value="Системное управление клиникой">
                </div>
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input" type="tel" name="tel" placeholder="Телефон" required>
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта">
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Отправить заявку
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваша заявка принята в обработку. Наши специалисты свяжутся с Вами в ближайшее время
                    </p>
                </div>
            </div>
        </template>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function reviewForm()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
          enctype="multipart/form-data"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Оставить отзыв</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта" required>
                </div>
                <div class="form__field">
                    <div class="form__file">
                        <label class="form-file">
                            <input class="form-file__input" type="file" name="photo"
                                   data-event="change.fileChange"><span class="form-file__fake"><span
                                    class="form-file__placeholder">Добавить фото</span><span class="form-file__btn"><svg
                                        width="46" height="46" viewBox="0 0 46 46" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
<path d="M21.8516 28.892V17.3693H24.1442V28.892H21.8516ZM17.2408 24.2727V21.9801H28.7635V24.2727H17.2408Z"
      fill="#FF033E"/>
<circle cx="23" cy="23" r="22.5" stroke="#FF033E"/>
</svg></span></span>
                        </label>
                    </div>
                </div>
                <br>
                <br>
                <div class="form__field">
                    <textarea class="form__input form__input--area" name="message"
                              placeholder="Напишите свой отзыв"></textarea>
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Оставить отзыв
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваш отзыв скоро появится.
                    </p>
                </div>
            </div>
        </template>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}

function orderForm()
{
    ob_start(); ?>
    <form class="form-popup form"
          action="/php/ajax.php"
          method="post"
          data-event="submit.sendForm"
    >
        <div class="form__content form__content--center">
            <div class="form__title form__title--small">Ваш заказ</div>
            <div class="form__fields">
                <div class="form__field">
                    <input class="form__input" readonly type="text" name="product"
                           value="“Мотивационная консультация пациента”">
                </div>
                <div class="form__field">
                    <div class="form__sum">
                        <span style="color:var(--color-red);">Сумма:</span> 500 руб.
                    </div>
                </div>
                <div class="form__field">
                    <input class="form__input" type="text" name="name" placeholder="Ваше имя">
                </div>
                <div class="form__field">
                    <input class="form__input" type="tel" name="tel" placeholder="Телефон" required>
                </div>
                <div class="form__field">
                    <input class="form__input" type="email" name="email" placeholder="Эл. почта">
                </div>
            </div>
            <div class="form__accept">
                <label class="accept">
                    <input class="accept__input" type="checkbox" name="accept" required checked><span
                        class="accept__check"><svg
                            width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd"
      d="M14.6924 1.3171L5.42859 10.6143L0.621582 5.78997L1.32191 5.08713L5.42859 9.20857L13.9921 0.614258L14.6924 1.3171Z"
      fill="#FF033E"/>
</svg></span><span class="accept__text"><span>Даю согласие на обработку&nbsp;</span><a href="/agreement/">Персональных данных</a></span>
                </label>
            </div>
            <button class="form__submit"
                    type="submit">
                Оплатить
            </button>
        </div>
        <template>
            <div class="form-popup form">
                <div class="form__ok">
                    <h3>
                        Спасибо
                    </h3>
                    <p>
                        Ваша заявка принята в обработку. Наши специалисты свяжутся с Вами в ближайшее время
                    </p>
                </div>
            </div>
        </template>
    </form>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}








