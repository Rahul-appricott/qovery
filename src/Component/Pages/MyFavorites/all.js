import React from 'react';
import {favorite1, favorite2, favorite3, favorite4, favorite5, favorite6, favorite7, favorite8, favorite9} from '../../../img/index';
import {FavoriteModals} from '../../../Component/utils/button';
import {Image} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../../Sass/Pages/favorite.scss';

export const All = () =>{
    return(
        <>
             <div className="favorite-white">
                <div className="img-favorite">
                    <div className="heading">
                        <h4>Top 5 People</h4>
                    </div>    
                    <div className="fav1">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                    
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite1}/>
                            <div className="background-gradient"></div>
                        </div>

                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                    
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite4}/>
                            <div className="background-gradient"></div>
                        </div>

                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                    
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite5}/>
                            <div className="background-gradient"></div>
                        </div>
                        
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite2}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite3}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div>    

                    <div className="heading">
                        <h4>All Favorite</h4>
                    </div>

                    <div className="fav1 row-reverse"> 
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite4}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite5}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite6}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div>

                    <div className="fav1">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite7}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite8}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite3}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div>

                    <div className="fav1">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite1}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite2}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite3}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>    
        </>
    );
};

export const FavoritesList1 = () =>{
    return(
        <>
            <div className="favorite-white">
                <div className="img-favorite">
                    <div className="fav1 row-reverse">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite4}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite5}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite6}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div>

                    <div className="fav1">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite1}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite2}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite3}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div> 

                    <div className="fav1">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite7}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite8}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite3}/>
                                <div className="background-gradient"></div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
};

export const FavoritesList2 = () =>{
    return(
        <>
            <div className="favorite-white">
                <div className="img-favorite">
                    <div className="fav1">
                        <div className="fav-big">
                            <div className="dotts">
                                <FavoriteModals/>
                            </div>
                            <div className="text">
                                <p>Kylee</p>
                                <NavLink to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </NavLink>    
                            </div>
                            <Image className="img-fluid" src={favorite1}/>
                            <div className="background-gradient"></div>
                        </div>
                        <div className="d-flexx">
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Annabel</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite2}/>
                                <div className="background-gradient"></div>
                            </div>
                            <div className="fav-small">
                                <div className="dotts">
                                    <FavoriteModals/>
                                </div>
                                <div className="text">
                                    <p>Floyd</p>
                                    <NavLink to="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.8717 2.32611C16.4514 1.90569 15.9525 1.57219 15.4034 1.34465C14.8542 1.11711 14.2656 1 13.6712 1C13.0768 1 12.4882 1.11711 11.9391 1.34465C11.3899 1.57219 10.891 1.90569 10.4708 2.32611L9.59867 3.19821L8.72657 2.32611C7.87775 1.4773 6.72652 1.00044 5.52612 1.00044C4.32572 1.00044 3.17448 1.4773 2.32567 2.32611C1.47686 3.17492 1 4.32616 1 5.52656C1 6.72696 1.47686 7.87819 2.32567 8.727L3.19777 9.5991L9.59867 16L15.9996 9.5991L16.8717 8.727C17.2921 8.30679 17.6256 7.80785 17.8531 7.25871C18.0807 6.70957 18.1978 6.12097 18.1978 5.52656C18.1978 4.93214 18.0807 4.34355 17.8531 3.7944C17.6256 3.24526 17.2921 2.74633 16.8717 2.32611V2.32611Z" fill="#F78000" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </NavLink>    
                                </div>
                                <Image className="img-fluid" src={favorite3}/>
                            </div>
                        </div>    
                    </div>   
                </div>
            </div>
        </>
    );
};