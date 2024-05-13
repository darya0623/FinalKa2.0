import React from "react";
import { Fragment } from "react";

export default function TabackInfo() {
    return (
        <Fragment>
            <div className="page">
                <div className="page__header">


                    <div className="page__header-content">
                        <h2 className="page__title">
                            How to become an Expert Web Developer
                        </h2>

                        <h4 className="page__subtitle">
                            By Sebastian Michaelis
                        </h4>


                        <div className="page__header__btn">
                            <button className="page__add">
                                <p>
                                    Add To Wishlist
                                </p>
                               
                            </button>

                            <button className="page__share">
                                <p>
                                    Share
                                </p>
                              
                            </button>
                        </div>
                    </div>

                </div>

                <div className="tutor">
                    <h2>
                        Mentor
                    </h2>
                    <div className="tutor__info">
                        
                        <div className="tutor__info-text">
                            <h3>
                                Sebastian Michaelis
                            </h3>
                            <p>
                                Senior developer expert instructor
                            </p>
                            {/* rating */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis.
                            </p>
                            {/* counter of courses */}
                        </div>
                    </div>

                </div>

                <div className="course">
                    <div className="course__info">
                        <h2>
                            What you’ll learn from this course
                        </h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eu in orci, nunc amet libero. Nam scelerisque vestibulum bibendum a turpis. Ante feugiat lectus massa, odio amet. Auctor sit mattis non id proin elit placerat. Lectus morbi amet et aliquam magna mauris. Proin pulvinar fringilla nunc, tristique urna, massa, tincidunt.</p>

                    </div>

                    <div className="course__features">
                        <h2>
                            Objective Features
                        </h2>
                        <ul>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                            <li>
                                Build fully websites and web apps for your startup or business.
                            </li>
                        </ul>
                    </div>
                    <div className="course__requirement">
                        <h2>
                            Requirement
                        </h2>
                        <ul>
                            <li>
                                No programming experience needed - I'll teach you everything you need to know
                            </li>
                            <li>
                                A Mac or PC computer with access to the internet
                            </li>
                            <li>
                                No previous coding experience is needed
                            </li>
                            <li>
                                All tools and software used in this course will be free
                            </li>
                            <li>
                                Any operating system: Mac, PC, Linux
                            </li>

                        </ul>
                    </div>

                    <div className="course__accordion">
                        <h2>
                            Module Courses
                        </h2>
                    </div>

                    {/* <div className="course__feedback">
                        <h2>
                            Feedback
                        </h2>
                        <div>

                        </div>
                    </div> */}

                </div>

            </div>
        </Fragment>
    )
}