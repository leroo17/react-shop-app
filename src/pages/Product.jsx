import { Header } from "../components/Header/Header"

export const Product = () => {
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" />
                            <button className="btn btn-primary btn-search">
                                <img src="/image/search.svg" alt="search" className="search-btn__icon"/>
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-product">
                                <div className="content-product__left">
                                    <h2 className="content-product__title">Электросамокат kugoo Gx</h2>
                                    <img src="/image/product.png" alt="product" className="content-product__img"/>
                                    <p className="content-product__text">
                                        Продаю не спеша самокат в хорошем состоянии. <br/>
                                        Торг возможен. <br/>
                                        За период эксплуатации не выявлено ни одной проблемы. <br/>
                                        Из минусов — нужно прокачать задний тормоз. <br/>
                                        Установлен отсекатель сзади. <br/>
                                        Покрышки CST внедорожные. <br/>
                                        Все на подшипниках, болты протянуты. <br/>
                                        Пробег 881км , это немного для такого зверя. <br/>
                                    </p>
                                </div>
                                <div className="content-product__right">
                                    <h2 className="content-product__price">75 000 ₽</h2>
                                <button className="btn btn-primary btn-large">Показать телефон</button>

                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        <div className="content-side__list-item">
                                            <img src="/image/delivery.svg" alt="" className="content-side__list-item--img"/>
                                            <h5 className="content-side__list-item--title">Доставка</h5>
                                            <p className="content-side__list-item--text">
                                                Проверка при получении и возможность бесплатно вернуть товар
                                            </p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img src="/image/sedan.svg" alt="" className="content-side__list-item--img"/>
                                            <h5 className="content-side__list-item--title">Автотека</h5>
                                            <p className="content-side__list-item--text">
                                                Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                            </p>
                                        </div>
                                        <div className="content-side__list-item">
                                            <img src="/image/love.svg" alt="" className="content-side__list-item--img"/>
                                            <h5 className="content-side__list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="content-side__list-item--text">
                                                Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                            </p>
                                        </div>
                                    </div>
                                <div className="content-side__footer">
                                    <p className="content-side__footer--item">© ООО «Абито», 2011–2021</p>
                                    <a href="#!" className="content-side__footer--item">Полaитика конфиденциальности</a>
                                    <a href="#!" className="content-side__footer--item">Обработка данных</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}