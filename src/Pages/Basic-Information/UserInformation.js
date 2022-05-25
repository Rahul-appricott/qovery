import React from 'react';
import BasicInformation from '../../Component/Pages/Profile/BasicInformation';
import '../../Component/Sass/Pages/IntroVideo.scss';
// import '../../Component/Sass/Style.scss';


const UserInformation = () =>{
    return(
        <>
            <div className="background-b">
                <BasicInformation  /> 
            </div>    
        </>
    );
}
export default UserInformation;