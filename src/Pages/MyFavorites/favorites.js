import React from 'react';
import {FavoriteHeader} from '../../Component/Header/Header';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import {All, FavoritesList1, FavoritesList2} from '../../Component/Pages/MyFavorites/all';
import '../../Component/Sass/Pages/favorite.scss';

const Homepage = () =>{
    return(
        <>
            <section className="favorite">
                <FavoriteHeader/>
                    <div className="favorite-inner">
                        <div className="tabbing">
                            <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="all" title="All">
                                    <All />
                                </Tab>
                                <Tab eventKey="favoritesList1" title="FavoritesList 1">
                                    <FavoritesList1 />
                                </Tab>
                                <Tab eventKey="favoritesList2" title="FavoritesList 2">
                                    <FavoritesList2 />
                                </Tab>
                            </Tabs>
                        </div>      
                    </div>
                <div className="blue-background"></div>
            </section>
        </>
    );
};

export default Homepage;