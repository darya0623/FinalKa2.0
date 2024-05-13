import React from "react";
import { Fragment, useState, useEffect, useContext } from "react";
import { Button, Checkbox, Flex, Typography } from "antd";
import { Breadcrumb } from "react-bootstrap";

export default function Tabacks() {
    return (
 
        <Fragment>
            <Breadcrumb />
        

            <section className="Products">
                
                    <Flex justify={"space-between"} gap={130}>
                        <aside className={`Products__aside`}>
                            {/* <div className="Products__aside-item">
                                
                                <ul className={`list-none`}>
                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`}>New
                                            arrivals</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="Products__aside-item">
                                

                                <ul className={`list-none Products__aside-list`}>
                                    <li className={"active"}>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Bedroom"}>Bedroom</p>
                                    </li>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Living room"}>living room</p>
                                    </li>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Child room"}>child room</p>
                                    </li>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Bathroom"}>bathroom</p>
                                    </li>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Outdoor"}>Outdoor</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="Products__aside-item">
                                <Typography.p className="Products__aside-p" level={4}>shop by
                                    concept</Typography.p>
                                <ul className={`list-none Products__aside-list`}>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Conscious"}>Conscious</p>
                                    </li>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Premium Quality"}>premium quality</p>
                                    </li>

                                    <li>
                                        <p bodyText={'p'} className={`Products__aside-text`} data-shop-by={"Classic Collection"}>classic collection</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="Products__aside-item">
                                <Typography.p className="Products__aside-p"
                                    level={4}>gender</Typography.p>
                                <Checkbox.Group>
                                    <ul className={`list-none Products__aside-list`}>

                                        <li>
                                            <Checkbox value={"Man"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>Man</p>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox value={"Woman"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>woman</p>
                                            </Checkbox>
                                        </li>
                                    </ul>
                                </Checkbox.Group>
                            </div>

                            <div className="Products__aside-item">
                                <Typography.p className="Products__aside-p" level={4}>Color</Typography.p>
                                <Checkbox.Group>
                                    <Flex wrap={"wrap"} gap={13} className="Products__aside-checkboxes">

                                        <Checkbox value={"white"} className={`Products__aside-checkbox Products__aside-checkbox--white`} />
                                        <Checkbox value={"black"} className={`Products__aside-checkbox Products__aside-checkbox--black`} />
                                        <Checkbox value={"grey"} className={`Products__aside-checkbox Products__aside-checkbox--grey`} />
                                        <Checkbox value={"yellow"} className={`Products__aside-checkbox Products__aside-checkbox--yellow`} />
                                        <Checkbox value={"orange"} className={`Products__aside-checkbox Products__aside-checkbox--orange`} />
                                        <Checkbox value={"orange-red"} className={`Products__aside-checkbox Products__aside-checkbox--orange-red`} />
                                        <Checkbox value={"pink"} className={`Products__aside-checkbox Products__aside-checkbox--pink`} />
                                        <Checkbox value={"aqua"} className={`Products__aside-checkbox Products__aside-checkbox--aqua`} />
                                        <Checkbox value={"green"} className={`Products__aside-checkbox Products__aside-checkbox--green`} />
                                        <Checkbox value={"green-secondary"} className={`Products__aside-checkbox Products__aside-checkbox--green-secondary`} />
                                        <Checkbox value={"blue"} className={`Products__aside-checkbox Products__aside-checkbox--blue`} />
                                        <Checkbox value={"red"} className={`Products__aside-checkbox Products__aside-checkbox--red`} />
                                        <Checkbox value={"brown"} className={`Products__aside-checkbox Products__aside-checkbox--brown`} />
                                        <Checkbox value={"darkblue"} className={`Products__aside-checkbox Products__aside-checkbox--darkblue`} />
                                        <Checkbox value={"lightbrown"} className={`Products__aside-checkbox Products__aside-checkbox--lightbrown`} />
                                        <Checkbox value={"violet"} className={`Products__aside-checkbox Products__aside-checkbox--violet`} />
                                        <Checkbox value={"darkgreen"} className={`Products__aside-checkbox Products__aside-checkbox--darkgreen`} />
                                        <Checkbox value={"march"} className={`Products__aside-checkbox Products__aside-checkbox--march`} />
                                    </Flex>
                                </Checkbox.Group>
                            </div>

                            <div className="Products__aside-item">
                                <Typography.p className="Products__aside-p" level={4}>Price</Typography.p>

                                <Checkbox.Group>
                                    <ul className={`list-none Products__aside-list`}>

                                        <li>
                                            <Checkbox data-price-min={0} data-price-max={40} value={"40"}>
                                                <p bodyText={'p'}
                                                    className={`Products__aside-text`}>0$-40$</p>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox data-price-min={40} data-price-max={100} value={"100"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>40$ –
                                                    100$</p>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox data-price-min={100} data-price-max={150} name={"150"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>100$ –
                                                    150$</p>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox data-price-min={150} data-price-max={175} value={"175"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>150$ –
                                                    175$</p>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox data-price-min={175} data-price-max={250} name={"250"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>175$ –
                                                    250$</p>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox data-price-min={250} data-price-max={350} value={"350"}>
                                                <p bodyText={'p'} className={`Products__aside-text`}>250$ –
                                                    350$</p>
                                            </Checkbox>
                                        </li>
                                    </ul>
                                </Checkbox.Group>
                            </div> */}
                        </aside>

                        {/*Products__wrap active*/}
                        <article className={`Products__wrap`}>
                            <p level={"h1"} className={`Products__p`}>BEDROOM</p>
                            <p level={"h3"} className={`Products__subp`}>ITS EASY TO TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT SELECTION OF ACCESSORIES.</p>

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
                    </Flex>
              
            </section>
        </Fragment>
    )

}