import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Button, Checkbox, Flex, Typography } from "antd";
import { Breadcrumb } from "react-bootstrap";

export default function Tabacks() {

    // const [IsShow, setIsShow] = useState(false);

    //     const [Products, setProducts] = useState([]);

    //     const handleFilter = () => setIsShow(prev => !prev);

    //     const handleProducts = () => {
    //         setProducts(() => ProductsData && ProductsData?.length ?
    //             ProductsData : []
    //         )
    //     }

    //     const handleShopBy = e => {
    //         const value = e.target.dataset.category;

    //         const products = ProductsData?.filter(item => {

    //             if (item?.category?.taste?.includes(
    //                 value
    //             )) {
    //                 return item;
    //             }
    //         })

    //         setProducts(() => products && products.length ? [...products] : [])
    //     }


    //     //     const products = ProductsData?.filter(item => {
    //     //         if (item?.category?.gender?.includes(
    //     //             value
    //     //         )) {
    //     //             return item;
    //     //         }
    //     //     })

    //     //     setProducts(() => products && products.length ? [...products] : [])
    //     // }

    //     useEffect(() => {
    //         setProducts(() => ProductsData && ProductsData?.length ?
    //             ProductsData : []
    //         )
    //     }, [ProductsData?.length])

    //     const product = Products?.map((product, i) => {
    //         return <Fragment key={i}>
    //             <Cart href={`/catalog/product/${product.id}`}
    //                 type={"product"}
    //                 image={product.image}
    //                 title={product.title}
    //                 taste={product.category?.taste}
    //             />
    //         </Fragment>
    //     })

    //     const { ProductsData } = useContext(Context);
    return (



        <Fragment>
            <Breadcrumb />


                <div className="container">
                    <header className="tabacks-header">
                    <h1 className="header-title">Табаки</h1>
                    <h3 className="header-desc">Один из крупнейших производителей табака и аксессуаров для кальянов в Российской Федерации.</h3>
                    </header>
            <div className="tabacks-wrap">

                <aside className='tabacks-aside'>
                    <div className="tabacks-aside-item">

                        <ul>
                            <li>
                                <p className='tabacks-aside-text'>New
                                    arrivals</p>
                            </li>
                        </ul>
                    </div>

                    <div className="tabacks-aside-item">


                        <ul>
                            <li>
                                <p className='tabacks-aside-text'>Миксы</p>
                            </li>

                            <li>
                                <p className='tabacks-aside-text'>Мятные</p>
                            </li>

                            <li>
                                <p className='tabacks-aside-text'>Напитки</p>
                            </li>

                            <li>
                                <p className='tabacks-aside-text'>Пряные</p>
                            </li>

                            <li>
                                <p className='tabacks-aside-text'>Outdoor</p>
                            </li>
                        </ul>
                    </div>

                    <div className="tabacks-aside-item">

                        <ul>

                            <li>
                                <p className='tabacks-aside-text'>Абрикос</p>
                            </li>

                            <li>
                                <p className='tabacks-aside-text'>Алкоголь</p>
                            </li>

                            <li>
                                <p className='tabacks-aside-text'>Ананас</p>
                            </li>
                            <li>
                                <p className='tabacks-aside-text'>Анис</p>
                            </li>
                            <li>
                                <p className='tabacks-aside-text'>Груша</p>
                            </li>
                        </ul>
                    </div>



                </aside>

                {/*Products__wrap active*/}
                <article className="tabacks-article">
                    

                    <Flex align={"center"} justify={"space-between"} className="Products__filters">
                        {/* <Button onClick={handleFilter} icon={<FiFilter />}>
                                    filter & sort
                                </Button> */}

                        <div className="Products__filters-right">
                            <button className={`Products__filters-red`} secondary>
                                <p bodyText={"p"}>Models</p>
                            </button>
                            <button secondary>
                                <p bodyText={"p"}>products</p>
                            </button>

                        </div>
                    </Flex>


                    <div className="Products__buttons">
                        <button primary>load more products</button>
                    </div>
                </article>
                </div>




            </div>
        </Fragment>
    )

}