import React, { Fragment } from "react";

export default function Admin {
    return (
        <Fragment>
                <div class="page-wrapper">
        <header class="pt-3 pb-3">
            <div class="container">
                <div class="row">
                    <div class="col d-flex align-items-center justify-content-start">

                        <a href="./">
                            <img src="./images/icon/mi-logo-text.svg" alt="logo">

                        </a>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end">
                        <button type="button" class="btn btn-primary btn-dark ms-2" id="open-auth-btn">
                            <div class="d-flex align-items-center">

                                <img class="pe-2" src="./images/icon/user.svg" alt="login">

                                Войти
                            </div>
                        </button>

                        <button type="button" class="btn btn-outline-dark ms-2 d-none" id="open-cart-btn">
                            <div class="d-flex align-items-center">

                                <img class="pe-2" src="./images/icon/shopping-cart.svg" alt="login">

                                Корзина
                            </div>
                        </button>

                        <button type="button" class="btn btn-primary btn-dark ms-2 d-none" id="logout-btn">
                            <div class="d-flex align-items-center">
                                Выйти
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="pb-5 mt-4">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col">
                            <h3>Добавление категории</h3>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col col-12 col-md-6">
                            <div class="mb-3">
                                <label for="category-name" class="form-label">Введите название категории</label>
                                <input type="text" class="form-control" id="category-name">
                            </div>
                        </div>

                        <div class="col col-12 col-md-6">
                            <div class="mb-3">
                                <label for="category-image" class="form-label">Добавьте картинку категории</label>
                                <input class="form-control" type="file" id="category-image">
                            </div>
                        </div>

                        <div class="col col-12">
                            <button type="button" class="btn btn-dark" id="category-add-btn">Добавить</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col table-responsive-sm">
                            <table class="table table-dark table-striped" id="category-table">
                                <caption style="display: none;" class="text-center">Нет данных</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Название</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody id="category-container">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Смартфоны</td>
                                        <td class="text-end">
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                удалить
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Аксессуары</td>
                                        <td class="text-end">
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                удалить
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Умные устройства</td>
                                        <td class="text-end">
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                удалить
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pb-5 mt-4">
                <div class="container">
                    <div class="row mb-3">
                        <div class="col">
                            <h3>Добавление товара</h3>
                        </div>
                    </div>
                    
                    <div class="row mb-3">
                        <div class="col col-12 col-md-6">
                            <select class="form-select" id="product-category">
                                <option value="default" selected>Выберите категорию</option>
                                <!-- <option value="0">Смартфоны</option>
                                <option value="1">Аксессуары</option>
                                <option value="2">Умные устройства</option> 
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col col-12 col-md-6">
                            <div class="mb-3">
                                <label for="category-name" class="form-label">Введите название подкатегории</label>
                                <input type="text" class="form-control" id="product-title">
                            </div>
                        </div>

                        <div class="col col-12 col-md-6">
                            <div class="mb-3">
                                <label for="category-name" class="form-label">Введите название товара</label>
                                <input type="text" class="form-control" id="product-name">
                            </div>
                        </div>

                        <div class="col col-12 col-md-6">
                            <div class="mb-3">
                                <label for="category-sysname" class="form-label">Добавьте цену товара</label>
                                <input type="number" class="form-control" id="product-price">
                            </div>
                        </div>

                        <div class="col col-12 col-md-6">
                            <div class="mb-3">
                                <label for="category-image" class="form-label">Добавьте картинку товара</label>
                                <input class="form-control" type="file" id="product-image">
                            </div>
                        </div>

                        <div class="col col-12">
                            <button type="button" class="btn btn-dark" id="product-save-button">Добавить</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <table class="table table-dark table-striped" id="goods-table">
                                <caption style="display: none;" class="text-center">Нет данных</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Категория</th>
                                        <th scope="col">Название</th>
                                        <th scope="col">Цена</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="product-container">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Смартфоны</td>
                                        <td>Xiaomi Redmi A1+ 2/32GB (голубой)</td>
                                        <td>4 990 ₽</td>
                                        <td class="text-end">
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                удалить
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Смартфоны</td>
                                        <td>Xiaomi Redmi A1+ 2/32GB (голубой)</td>
                                        <td>4 990 ₽</td>
                                        <td class="text-end">
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                удалить
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Смартфоны</td>
                                        <td>Xiaomi Redmi A1+ 2/32GB (голубой)</td>
                                        <td>4 990 ₽</td>
                                        <td class="text-end">
                                            <button type="button" class="btn btn-outline-danger btn-sm">
                                                удалить
                                            </button>
                                        </td>
                                    </tr> 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="pb-5 pt-5">
            <div class="container">
                <div class="row">
                    <div class="col d-flex align-items-center justify-content-start">

                        <a href="./">
                            {/* <img src="./images/icon/mi-logo-text.svg" alt="logo"> */}

                        </a>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end">
                        <ul class="social-links d-flex align-items-center p-0 m-0">
                            <li class="d-flex align-items-center justify-content-center">
                                <a href="#" class="p-2">

                                    {/* <img src="./images/social/fb.svg" alt="fb"> */}

                                </a>
                            </li>
                            <li class="d-flex align-items-center justify-content-center">
                                <a href="#" class="p-2">

                                    {/* <img src="./images/social/instagram.svg" alt="instagram"> */}

                                </a>
                            </li>
                            <li class="d-flex align-items-center justify-content-center">
                                <a href="#" class="p-2">

                                    {/* <img src="./images/social/vk.svg" alt="vk"> */}

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
        </Fragment>
    )
}