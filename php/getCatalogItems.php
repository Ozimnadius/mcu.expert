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
    <div class="catalog__item">
        <div class="catalog-item">
            <div class="catalog-item__top">
                <div class="catalog-item__stick"><svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 0H154.75V40H0.75L18.075 20L0.75 0Z" fill="#FF033E"/>
                    </svg><span>АКЦИЯ</span>
                </div><a class="catalog-item__img" href="/shop/product/"><img src="/images/content/catalog/img.webp" alt="Практическое пособие по внедрению &quot;Трехконтурная система управления клиникой&quot;."></a>
            </div>
            <div class="catalog-item__bottom"><a class="catalog-item__name" href="/shop/product/">Практическое пособие по внедрению "Трехконтурная система управления клиникой".</a>
                <div class="catalog-item__price">2 300 РУБ.</div>
                <div class="catalog-item__controls">
                    <div class="catalog-item__control">
                        <button type="button">Купить</button>
                    </div>
                    <div class="catalog-item__control"><a href="/shop/product/">Подробнее</a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="catalog__item">
        <div class="catalog-item">
            <div class="catalog-item__top"><a class="catalog-item__img" href="/shop/product/"><img src="/images/content/catalog/img.webp" alt="Практическое пособие по внедрению &quot;Трехконтурная система управления клиникой&quot;."></a>
            </div>
            <div class="catalog-item__bottom"><a class="catalog-item__name" href="/shop/product/">Практическое пособие по внедрению "Трехконтурная система управления клиникой".</a>
                <div class="catalog-item__price">2 300 РУБ.</div>
                <div class="catalog-item__controls">
                    <div class="catalog-item__control">
                        <button type="button">Купить</button>
                    </div>
                    <div class="catalog-item__control"><a href="/shop/product/">Подробнее</a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="catalog__item">
        <div class="catalog-item">
            <div class="catalog-item__top"><a class="catalog-item__img" href="/shop/product/"><img src="/images/content/catalog/img.webp" alt="Практическое пособие по внедрению &quot;Трехконтурная система управления клиникой&quot;."></a>
            </div>
            <div class="catalog-item__bottom"><a class="catalog-item__name" href="/shop/product/">Практическое пособие по внедрению "Трехконтурная система управления клиникой".</a>
                <div class="catalog-item__price">2 300 РУБ.</div>
                <div class="catalog-item__controls">
                    <div class="catalog-item__control">
                        <button type="button">Купить</button>
                    </div>
                    <div class="catalog-item__control"><a href="/shop/product/">Подробнее</a></div>
                </div>
            </div>
        </div>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}